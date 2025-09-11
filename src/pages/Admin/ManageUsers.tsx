import React, { useState, useEffect } from "react";
import { useChangeUserStatusMutation, useGetAllUsersQuery } from "@/redux/features/admin/admin.api";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ManageUsers() {
  const [searchTerm, setSearchTerm] = useState(""); // For search input
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]); // Filtered users after applying filters

  // Fetch all users (with pagination and limit)
  const { data: users, isLoading, isError } = useGetAllUsersQuery({ page: 1, limit: 10 });

  // Mutation to change user status (Active or Blocked)
  const [changeUserStatus] = useChangeUserStatusMutation();

  // UseEffect to filter users whenever the users data changes
  useEffect(() => {
    if (users) {
      filterUsers(users.data);
    }
  }, [users]);

  // Function to filter users based on search term
  const filterUsers = (users: any[]) => {
    let filtered = users;

    // Filter by search term (name or email)
    if (searchTerm) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
  };

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Reset search filter
  const handleResetFilters = () => {
    setSearchTerm("");
  };

  // Handle changing the status of a user
  const handleChangeStatus = (id: string, status: string) => {
    changeUserStatus({ id, status })
      .then(() => {
        console.log(`User status changed to ${status}`);
        // Optionally refetch users or update the UI here
      })
      .catch((error) => {
        console.error("Error changing user status:", error);
      });
  };

  // If loading or error occurred, show appropriate message
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users</p>;

  return (
    <div className="p-5">
      <h2 className="text-3xl font-semibold text-white mb-4">Manage Users</h2>
      <p className="text-gray-400 mb-5">View and manage all registered users</p>

      {/* Search */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex space-x-4">
          {/* Search Input */}
          <Input
            type="text"
            placeholder="Search by Name or Email"
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 w-80 bg-gray-700 text-white rounded-md"
            prefix={<FaSearch className="text-gray-400 mr-2" />}
          />
        </div>
        {/* Reset Filters Button */}
        <Button variant="outline" onClick={handleResetFilters}>
          Reset Filters
        </Button>
      </div>

      {/* User Table */}
      <Table>
        
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Picture</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Render filtered users */}
          {filteredUsers.map((user: any) => (
            <TableRow key={user.id}>
              <TableCell>
                <img src={user.picture} alt={user.name} className="w-10 h-10 rounded-full" />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.createdAt}</TableCell>
              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    user.status === "ACTIVE" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {user.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                {/* Block and Activate Buttons */}
                <div className="flex space-x-3">
                  <Button
                    variant="destructive"
                    className="text-xs"
                    onClick={() => handleChangeStatus(user.id, "BLOCKED")}
                  >
                    Block
                  </Button>
                  <Button
                    variant="destructive"
                    className="text-xs"
                    onClick={() => handleChangeStatus(user.id, "ACTIVE")}
                  >
                    Activate
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
