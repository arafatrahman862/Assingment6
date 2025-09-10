import { useState, useMemo } from "react";
import { useGetAllBookingHistoryQuery, useCancelBookingMutation } from "@/redux/features/Ride/ride.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { toast } from "sonner";

export default function AdminRideHistory() {
  const { data, isLoading, refetch } = useGetAllBookingHistoryQuery(undefined, {
    pollingInterval: 3000,
  });
  const [cancelRide] = useCancelBookingMutation();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const handleCancelRide = async (rideId: string) => {
    try {
      await cancelRide(rideId).unwrap();
      toast.success("Ride cancelled successfully!");
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to cancel ride");
    }
  };

  const filteredRides = useMemo(() => {
    if (!data?.data?.data) return [];

    return data.data.data.filter((ride: any) => {
      const matchesSearch = ride.transactionId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ride.rideStatus.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus ? ride.rideStatus === filterStatus : true;
      const matchesDate = filterDate ? format(new Date(ride.createdAt), "yyyy-MM-dd") === filterDate : true;
      return matchesSearch && matchesStatus && matchesDate;
    });
  }, [data, searchTerm, filterStatus, filterDate]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="bg-black text-white rounded-lg p-8 mb-6 shadow-md relative overflow-hidden">
        <h1 className="text-3xl font-bold">Ride History</h1>
        <p className="text-gray-300">View full details of all rides created by all users</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          placeholder="Search by Ride Status or Transaction ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/3"
        />
        <Input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="md:w-1/4"
        />
        <Select value={filterStatus} onValueChange={(value) => setFilterStatus(value)}>
          <SelectTrigger className="md:w-1/4">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ACCEPTED">Accepted</SelectItem>
            <SelectItem value="PICKED_UP">Picked Up</SelectItem>
            <SelectItem value="IN_TRANSIT">In Transit</SelectItem>
            <SelectItem value="ARRIVED">Arrived</SelectItem>
            <SelectItem value="COMPLETED">Completed</SelectItem>
            <SelectItem value="CANCELLED">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="destructive"
          onClick={() => {
            setSearchTerm("");
            setFilterDate("");
            setFilterStatus("");
          }}
        >
          Reset Filters
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-lg border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Distance (km)</TableHead>
              <TableHead>Fare (৳)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Completed At</TableHead>
              <TableHead>Invoice</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6">
                  Loading rides...
                </TableCell>
              </TableRow>
            ) : filteredRides.length > 0 ? (
              filteredRides.map((ride: any) => (
                <TableRow key={ride._id}>
                  <TableCell>{ride.travelDistance ?? "-"}</TableCell>
                  <TableCell>{ride.fare ?? "-"}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        ride.rideStatus === "COMPLETED"
                          ? "success"
                          : ride.rideStatus === "CANCELLED"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {ride.rideStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>{ride.transactionId || "N/A"}</TableCell>
                  <TableCell>
                    {ride.completedAt
                      ? format(new Date(ride.completedAt), "Pp")
                      : "N/A"}
                  </TableCell>
                  <TableCell>
                    {ride.rideStatus === "COMPLETED" ? (
                      <Button variant="outline" size="sm">
                        View Invoice
                      </Button>
                    ) : (
                      "N/A"
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleCancelRide(ride._id)}
                      disabled={ride.rideStatus === "CANCELLED" || ride.rideStatus === "COMPLETED"}
                    >
                      {ride.rideStatus === "CANCELLED"
                        ? "Cancelled"
                        : ride.rideStatus === "COMPLETED"
                        ? "Completed"
                        : "Cancel"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6">
                  No rides found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
