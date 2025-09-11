import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "2025-06-28", rides: 200 },
  { date: "2025-07-28", rides: 300 },
  { date: "2025-08-20", rides: 100 },
  { date: "2025-08-23", rides: 500 },
  { date: "2025-08-28", rides: 900 },
  { date: "2025-08-30", rides: 400 },
  { date: "2025-09-05", rides: 350 },
  { date: "2025-09-10", rides: 1200 },
];

export default function AdminAnalytics() {
  const [filter, setFilter] = useState("Daily");

  return (
    <div className="space-y-6">
     
      <section className="relative py-10 w-full rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="Analytics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center text-white px-6 py-10">
          <h1 className="text-2xl font-bold uppercase">Admin Analytics</h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            Analyze overall platform activity, including rides, earnings, and user engagement.
          </p>
        </div>
      </section>

  
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="bg-blue-600 text-white">
          <CardHeader>
            <CardTitle>Total Riders</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">30</CardContent>
        </Card>
        <Card className="bg-pink-600 text-white">
          <CardHeader>
            <CardTitle>Total Drivers</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">15</CardContent>
        </Card>
        <Card className="bg-green-600 text-white">
          <CardHeader>
            <CardTitle>Completed Rides</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">29</CardContent>
        </Card>
        <Card className="bg-red-600 text-white">
          <CardHeader>
            <CardTitle>Cancelled Rides</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">8</CardContent>
        </Card>
        <Card className="bg-blue-700 text-white">
          <CardHeader>
            <CardTitle>Total Fare Money</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">$24,475</CardContent>
        </Card>
        <Card className="bg-purple-600 text-white">
          <CardHeader>
            <CardTitle>Owner Earnings</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">$4,895</CardContent>
        </Card>
      </div>

     
      <div className="flex gap-2">
        {["Daily", "Weekly", "Monthly"].map((f) => (
          <Button
            key={f}
            variant={filter === f ? "default" : "outline"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

     
      <Card className="p-4">
        <h2 className="text-center font-semibold mb-4 uppercase">
          {filter} Rides Overview
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="rides"
              stroke="#a855f7"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
