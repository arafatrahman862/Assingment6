"use client";

import { Card, CardContent } from "@/components/ui/card";
import { User, MapPin, Car } from "lucide-react";

const steps = [
  {
    icon: <User className="w-10 h-10 text-blue-400" />,
    title: "SIGN UP OR LOGIN",
    description:
      "Create your account or login to start enjoying seamless rides.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-green-400" />,
    title: "SET PICKUP & DESTINATION",
    description:
      "Choose your starting point and destination for an optimized route.",
  },
  {
    icon: <Car className="w-10 h-10 text-yellow-400" />,
    title: "START YOUR RIDE",
    description:
      "Confirm your ride and enjoy a safe, fast, and reliable journey.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-20 px-6 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80"
          alt="city night ride"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">HOW IT WORKS</h2>
        <p className="text-gray-300 mb-12">
          Follow these simple steps to get your ride quickly and conveniently
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-white/10 border border-white/20 backdrop-blur-md text-center p-6"
            >
              <CardContent className="flex flex-col items-center gap-4">
                <div className="bg-white/10 rounded-full p-4">{step.icon}</div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-gray-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
