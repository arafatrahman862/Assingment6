

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  User,
  MapPin,
  Car,
  CreditCard,
  FileText,
  History,
  Star,
  Shield,
  Bell,
} from "lucide-react";

const features = [
  { icon: <User className="w-8 h-8 text-purple-400" />, rider: "Rider Profile - Manage your personal profile, payment options, and saved locations.", driver: "Driver Profile - Manage your driving documents, vehicle details, and availability." },
  { icon: <MapPin className="w-8 h-8 text-green-400" />, rider: "Request Ride - Choose pickup and drop-off points for quick, hassle-free booking.", driver: "Ride Requests - Receive and respond to ride requests instantly from riders." },
  { icon: <Car className="w-8 h-8 text-yellow-400" />, rider: "Ride Tracking - Track your driver in real time with accurate location updates.", driver: "Trip Management - Track active rides and update ride status as you go." },
  { icon: <CreditCard className="w-8 h-8 text-pink-400" />, rider: "Payment Options - Pay securely with multiple payment methods.", driver: "Earnings Dashboard - Monitor your daily, weekly, and monthly earnings." },
  { icon: <FileText className="w-8 h-8 text-blue-400" />, rider: "Automated Billing - Receive digital invoices instantly after every ride.", driver: "Billing Records - Access detailed invoices and ride payment history." },
  { icon: <History className="w-8 h-8 text-orange-400" />, rider: "Ride History - Review past rides with complete details and receipts.", driver: "Ride History - View and filter your completed and cancelled rides." },
  { icon: <Star className="w-8 h-8 text-yellow-500" />, rider: "Ratings & Feedback - Give feedback to drivers and rate your ride experience.", driver: "Ratings & Reviews - Get feedback from riders to improve your service." },
  { icon: <Bell className="w-8 h-8 text-red-400" />, rider: "SOS & Safety - Trigger SOS alerts and share live location in emergencies.", driver: "Safety Alerts - Stay informed with instant safety and SOS notifications." },
  { icon: <Shield className="w-8 h-8 text-indigo-400" />, rider: "Security - All rides are monitored to ensure a safe journey.", driver: "Security - Protect your profile and ride data with top security measures." },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-20 px-6 ">
     
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80"
          alt="features background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

     
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">FEATURES</h2>
        <p className="text-gray-300 mb-8">
          Discover the features that make our platform reliable and
          user-friendly.
        </p>

      
        <Tabs defaultValue="rider" className="w-full">
          <TabsList className="mx-auto mb-10">
            <TabsTrigger value="rider">Rider</TabsTrigger>
            <TabsTrigger value="driver">Driver</TabsTrigger>
          </TabsList>

          
          <TabsContent value="rider">
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/10 border border-white/20 backdrop-blur-md text-left"
                >
                  <CardContent className="p-6 flex flex-col gap-3 justify-center items-center">
                    {feature.icon}
                    <p className="text-sm text-gray-300">{feature.rider}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Driver Features */}
          <TabsContent value="driver">
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/10 border border-white/20 backdrop-blur-md text-left"
                >
                  <CardContent className="p-6 flex flex-col gap-3 justify-center items-center">
                    {feature.icon}
                    <p className="text-sm text-gray-300">{feature.driver}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
