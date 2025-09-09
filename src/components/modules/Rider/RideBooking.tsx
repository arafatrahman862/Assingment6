/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import {
  useCancelBookingMutation as useCancelRideMutation,
  useGetAllBookingHistoryQuery as useGetAllRidesForRiderQuery,
  useCreateBookingMutation as useRequestRideMutation,
} from "@/redux/features/Ride/ride.api.ts";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { BounceLoader } from "react-spinners";
import { Button } from "@/components/ui/button";
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

const calculateFare = (distanceKm: number, baseFarePerKm = 100) =>
  parseFloat((distanceKm * baseFarePerKm).toFixed(2));

export default function BookRide() {
  const [pickup, setPickup] = useState<[number, number] | null>(null);
  const [destination, setDestination] = useState<[number, number] | null>(null);
  const [currentLocation, setCurrentLocation] = useState<[number, number] | null>(
    null
  );
  const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);
  const [distanceKm, setDistanceKm] = useState<number>(0);
  const [fare, setFare] = useState<number>(0);

  const navigate = useNavigate();

  const [requestRide, { isLoading }] = useRequestRideMutation();
  const { data: ridesData, refetch } = useGetAllRidesForRiderQuery(undefined, {
    pollingInterval: 3000,
  });
  const [cancelRide, { isLoading: isCanceling }] = useCancelRideMutation();

  const [latestRide, setLatestRide] = useState<any>(null);

  // --- Sync ride state ---
  useEffect(() => {
    if (ridesData?.data?.data?.length) {
      const statuses = ["ACCEPTED", "REQUESTED", "PICKED_UP", "IN_TRANSIT", "ARRIVED"];
      const requestedRides = ridesData.data.data.filter((ride: any) =>
        statuses.includes(ride.rideStatus)
      );

      if (requestedRides.length) {
        const latest = requestedRides.sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )[0];
        setLatestRide(latest);
        setPickup([
          latest.pickupLocation.coordinates[1],
          latest.pickupLocation.coordinates[0],
        ]);
        setDestination([
          latest.destination.coordinates[1],
          latest.destination.coordinates[0],
        ]);
      } else {
        setLatestRide(null);
      }
    } else {
      setLatestRide(null);
    }
  }, [ridesData]);

  // --- Default icons ---
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });

  const orangeMarker = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  // --- Map click handler ---
  function MapClickHandler({
    setDestination,
  }: {
    setDestination: (pos: [number, number]) => void;
  }) {
    useMapEvents({
      click(e) {
        if (!latestRide) {
          setDestination([e.latlng.lat, e.latlng.lng]);
        }
      },
    });
    return null;
  }

  // --- Ride request ---
  const bookRide = async () => {
    if (!pickup || !destination || !currentLocation) return;

    const rideData = {
      pickupLocation: { type: "Point", coordinates: [pickup[1], pickup[0]] },
      destination: { type: "Point", coordinates: [destination[1], destination[0]] },
      currentLocation: { type: "Point", coordinates: [currentLocation[1], currentLocation[0]] },
      distanceKm,
      fare,
    };

    try {
      await requestRide(rideData).unwrap();
      toast.success("🚖 Ride Requested Successfully!");
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  // --- Cancel ride ---
  const handleCancelRide = async () => {
    if (!latestRide?._id) return;
    try {
      await cancelRide(latestRide._id).unwrap();
      toast.success("Ride cancelled successfully!");
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong while cancelling");
    }
  };

  // --- Get GPS ---
  useEffect(() => {
    if (!latestRide && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPickup([pos.coords.latitude, pos.coords.longitude]);
        setCurrentLocation([pos.coords.latitude, pos.coords.longitude]);
      });
    }
  }, [latestRide]);

  // --- Fetch OSRM route ---
  useEffect(() => {
    const fetchRoute = async () => {
      if (pickup && destination) {
        try {
          const coords = `${pickup[1]},${pickup[0]};${destination[1]},${destination[0]}`;
          const res = await axios.get(
            `https://router.project-osrm.org/route/v1/driving/${coords}?geometries=geojson`
          );
          const route = res.data.routes[0].geometry.coordinates.map(
            (c: [number, number]) => [c[1], c[0]]
          );
          setRouteCoords(route);

          if (!latestRide) {
            const distanceMeters = res.data.routes[0].distance;
            const distanceInKm = parseFloat((distanceMeters / 1000).toFixed(2));
            setDistanceKm(distanceInKm);
            setFare(calculateFare(distanceInKm));
          } else {
            setDistanceKm(latestRide.travelDistance ?? 0);
            setFare(latestRide.fare ?? 0);
          }
        } catch (err) {
          console.error("Error fetching route:", err);
        }
      }
    };
    fetchRoute();
  }, [pickup, destination, latestRide]);

  // --- Add search bar ---
  function SearchControl() {
    const map = useMap();
    useEffect(() => {
      if (!pickup) return;

      const provider = new OpenStreetMapProvider();
      const searchControl = GeoSearchControl({
        provider,
        style: "bar",
        searchLabel: "Search destination...",
        autoClose: true,
        keepResult: true,
      });

      map.addControl(searchControl);

      map.on("geosearch/showlocation", (result: any) => {
        const { y, x } = result.location;
        setDestination([y, x]);
      });

      return () => {
        map.removeControl(searchControl);
      };
    }, [map, pickup]);
    return null;
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <BounceLoader color="#f97316" size={80} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 border mt-20 relative z-10">
      <div className="h-[400px] w-full">
        {pickup && (
          <MapContainer center={pickup} zoom={14} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={pickup} icon={orangeMarker} />
            {destination && <Marker position={destination} icon={orangeMarker} />}
            {routeCoords.length > 0 && (
              <Polyline positions={routeCoords} color="orange" weight={5} />
            )}
            <MapClickHandler setDestination={setDestination} />
            <SearchControl />
          </MapContainer>
        )}
      </div>

      {/* Ride Info */}
      <div className="py-4 text-center">
        {destination ? (
          <p className="text-sm md:text-base">
            Distance: {distanceKm} km | Fare: {fare} BDT
          </p>
        ) : !latestRide ? (
          <p className="text-sm md:text-base">Click map or search destination.</p>
        ) : (
          <p className="text-sm md:text-base text-green-700 font-medium">
            Ride Requested — Waiting for driver...
          </p>
        )}

        {!latestRide ? (
          <Button
            disabled={!destination || isLoading}
            onClick={bookRide}
            className="mt-3 w-full rounded-none"
          >
            {isLoading ? "Requesting..." : "Request a Ride"}
          </Button>
        ) : (
          <>
            <Button
              className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white rounded-none"
              onClick={() => navigate(`/my-ride/${latestRide?._id}`)}
            >
              View My Ride
            </Button>
            {latestRide.rideStatus !== "ARRIVED" &&
              latestRide.rideStatus !== "IN_TRANSIT" && (
                <Button
                  className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white rounded-none"
                  onClick={handleCancelRide}
                  disabled={isCanceling}
                >
                  {isCanceling ? "Cancelling..." : "Cancel Ride"}
                </Button>
              )}
          </>
        )}
      </div>
    </div>
  );
}
