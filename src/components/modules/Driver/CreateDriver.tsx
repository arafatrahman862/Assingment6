import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { usePromoteToDriverMutation } from "@/redux/features/driver/driver.api"; // Import the mutation
import { useAppSelector } from "@/redux/hook";

export default function CreateDriver() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

//  const userId = useAppSelector((state: any) => state.user._id);
  // Use the mutation to promote a user to driver
  const [promoteToDriver, { isLoading, isError }] = usePromoteToDriverMutation();

  // Handle Vehicle Number Change
  const handleVehicleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVehicleNumber(e.target.value);
  };

  // Handle Vehicle Type Change
  const handleVehicleTypeChange = (value: string) => {
    setVehicleType(value);
  };

  // Handle Form Submit
  const handleSubmit = async () => {
    // Validate if fields are filled
    if (!vehicleNumber || !vehicleType ) {
      setError("Please fill all the fields.");
      return;
    }

    // Clear previous error
    setError(null);

    try {

    //   await promoteToDriver(userId).unwrap(); 

  
      setSuccess("Successfully promoted to driver!");
    } catch (err) {
     
      setError("An error occurred while promoting to driver.");
      console.error("Error promoting to driver:", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg mt-20">
      <h2 className="text-3xl font-bold mb-4 text-center">Register as a Driver</h2>

     
      <div className="mb-4">
        <label htmlFor="vehicle-number" className="block text-sm font-medium">
          Vehicle Number
        </label>
        <Input
          id="vehicle-number"
          type="text"
          value={vehicleNumber}
          onChange={handleVehicleNumberChange}
          placeholder="DHAKA-METRO-XXX-XXXX"
          className="mt-2 p-2 w-full bg-gray-700 text-white rounded-md"
        />
      </div>

    
      <div className="mb-4">
        <label htmlFor="vehicle-type" className="block text-sm font-medium">
          Vehicle Type
        </label>
        <Select
          value={vehicleType}
          onValueChange={handleVehicleTypeChange}
        //   className="mt-2 w-full bg-gray-700 text-white rounded-md"
        >
          <SelectTrigger className="w-full text-white">
            {vehicleType || "Select Vehicle Type"}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Car">Car</SelectItem>
            <SelectItem value="Bike">Bike</SelectItem>
           
          </SelectContent>
        </Select>
      </div>


      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      {success && <div className="text-green-500 text-sm mt-2">{success}</div>}

   
      <div className="text-center">
        <Button variant="default" onClick={handleSubmit} className="w-full mt-4" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </div>
  );
}
