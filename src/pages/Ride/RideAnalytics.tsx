import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const dummyData = {
  daily: [
    { name: "Mon", rides: 2 },
    { name: "Tue", rides: 3 },
    { name: "Wed", rides: 1 },
    { name: "Thu", rides: 4 },
    { name: "Fri", rides: 2 },
    { name: "Sat", rides: 5 },
    { name: "Sun", rides: 1 },
  ],
  weekly: [
    { name: "Week 1", rides: 7 },
    { name: "Week 2", rides: 10 },
    { name: "Week 3", rides: 5 },
    { name: "Week 4", rides: 12 },
  ],
  monthly: [
    { name: "Jan", rides: 25 },
    { name: "Feb", rides: 30 },
    { name: "Mar", rides: 18 },
    { name: "Apr", rides: 40 },
  ],
};

export default function RideAnalytics() {
  const [filter, setFilter] = useState<"daily" | "weekly" | "monthly">("daily");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600/80 to-orange-800/80 text-white rounded-xl p-6 shadow">
        <h2 className="text-2xl font-bold">Rider Analytics</h2>
        <p className="text-sm opacity-90">
          Track your rides, view earnings, cancellations, and get insights into
          your ride patterns.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-green-600 text-white">
          <CardHeader>
            <CardTitle>Completed Rides</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">0</CardContent>
        </Card>
        <Card className="bg-red-600 text-white">
          <CardHeader>
            <CardTitle>Cancelled Rides</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">1</CardContent>
        </Card>
        <Card className="bg-blue-600 text-white">
          <CardHeader>
            <CardTitle>Total Spent</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">$0</CardContent>
        </Card>
        <Card className="bg-purple-600 text-white">
          <CardHeader>
            <CardTitle>Avg Fare</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">$0.00</CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {["daily", "weekly", "monthly"].map((item) => (
          <Button
            key={item}
            onClick={() => setFilter(item as "daily" | "weekly" | "monthly")}
            variant={filter === item ? "default" : "outline"}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Button>
        ))}
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center uppercase">
            {filter} Rides
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dummyData[filter]}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="rides" fill="#f97316" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
