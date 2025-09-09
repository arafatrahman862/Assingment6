

import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function ReadySection() {
  return (
    <section className="relative py-28 text-white mt-6">
      {/* Background */}
      <div className="absolute inset-0">
      <img
  src="https://www.pace.edu/sites/default/files/styles/16_9_1600x900/public/2024-04/seidenberg-article-hero-ridesharing-research.jpg?h=854a7be2&itok=LRRIJGbT"
  alt="Ride booking background"
  className="h-full w-full object-cover"
/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready for Your Next Ride?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Wherever you need to go, we’ll get you there quickly and safely.
        </p>

        <Button
          asChild
          size="lg"
          className="px-10 py-4 rounded-lg shadow-lg text-lg"
        >
          <Link to="/rider/request">Book a Ride</Link>
        </Button>
      </div>
    </section>
  );
}
