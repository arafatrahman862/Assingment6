import { Car, Clock, Shield, Award, CheckCircle } from "lucide-react";

export default function HomeFeature() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          RELIABLE RIDE MANAGEMENT
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Seamless and safe transportation solutions. Track, manage, and
          optimize rides for riders and drivers with our cutting-edge platform.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition">
            <Car className="mx-auto text-orange-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold mb-2">FAST PICKUP</h3>
            <p className="text-gray-400 text-sm">
              Reach your destination quickly with optimized routes.
            </p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition">
            <Clock className="mx-auto text-orange-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold mb-2">24/7 SUPPORT</h3>
            <p className="text-gray-400 text-sm">
              Assistance available any time, any day.
            </p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition">
            <Shield className="mx-auto text-orange-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold mb-2">SAFE RIDES</h3>
            <p className="text-gray-400 text-sm">
              Every ride is monitored and secured for safety.
            </p>
          </div>
        </div>

        {/* Simplify Section */}
        <div className="bg-gray-900 rounded-lg p-10 mb-16 max-w-4xl mx-auto text-left">
          <h3 className="text-2xl font-bold mb-4">SIMPLIFY YOUR RIDES</h3>
          <p className="text-gray-300 mb-4">
            Our platform ensures every ride is tracked, managed, and optimized
            for maximum safety and efficiency. Whether you are a rider or a
            driver, enjoy seamless experience with real-time updates.
          </p>
          <p className="text-orange-500 font-semibold mb-2">
            Real-Time Tracking & Management
          </p>
          <p className="text-gray-400 text-sm">
            Seamlessly monitor ride locations, driver availability, and real-time
            journey statuses across the entire network. Minimize wait times,
            maximize efficiency, and ensure punctual arrivals with our
            intelligent route optimization and reliable platform.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <Award className="text-orange-500 w-8 h-8 mb-2" />
            <h4 className="text-xl font-bold">1+</h4>
            <p className="text-gray-400 text-sm">Years of Service</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="text-orange-500 w-8 h-8 mb-2" />
            <h4 className="text-xl font-bold">27+</h4>
            <p className="text-gray-400 text-sm">Total Rides</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="text-orange-500 w-8 h-8 mb-2" />
            <h4 className="text-xl font-bold">100%</h4>
            <p className="text-gray-400 text-sm">Safe Trips</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="text-orange-500 w-8 h-8 mb-2" />
            <h4 className="text-xl font-bold">24/7</h4>
            <p className="text-gray-400 text-sm">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
