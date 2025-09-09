import { Button } from "@/components/ui/button";
import Logo from "@/assets/icons/Logo";
import { Link } from "react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



export default function HeroSection() {





  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80"
          alt="City road background"
          className="h-full w-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="rounded-xl bg-background/30 p-4 shadow-md backdrop-blur-sm mb-6">
            <Logo />
          </div>

          <h1 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight">
            Ride anywhere, anytime with{" "}
            <span className="text-primary">RideX</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-200 mb-8">
            Fast, reliable, and affordable rides for everyone. Whether you need
            to get somewhere or want to earn as a driver, RideX has you covered.
          </p>


          {/* CTA buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild size="lg" className="px-8 py-3 rounded-lg shadow-lg">
              <Link
                to="/rider/request"
                
              >
                Book a Ride
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-3 rounded-lg border-white text-white hover:bg-white hover:text-black"
            >
              <Link to="/register?role=driver">Become a Driver</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
