import Logo from "@/assets/icons/Logo";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-300">
      <div className="container mx-auto px-6 py-16 grid gap-12 lg:grid-cols-4">
       
        <div>
          <div className="flex items-center gap-2">
            <Logo />
            
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Seamless and safe ride-booking platform. Get where you need to go
            with just a few taps — fast, reliable, and secure.
          </p>

         
          <div className="mt-6 flex gap-4">
            {["facebook", "twitter", "instagram", "github"].map((icon) => (
              <a
                key={icon}
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition"
              >
                <i className={`ri-${icon}-fill text-2xl`} />
              </a>
            ))}
          </div>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Pages</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-primary transition">
                Features
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-primary transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">For Riders</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/rider/book" className="hover:text-primary transition">
                Book a Ride
              </Link>
            </li>
            <li>
              <Link to="/rider/dashboard" className="hover:text-primary transition">
                Rider Dashboard
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-primary transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-primary transition">
                Register
              </Link>
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-4">For Drivers</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/driver/register" className="hover:text-primary transition">
                Become a Driver
              </Link>
            </li>
            <li>
              <Link to="/driver/dashboard" className="hover:text-primary transition">
                Driver Dashboard
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-primary transition">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

   
      <div className="border-t border-gray-700 mt-10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RideGo. All rights reserved.
      </div>
    </footer>
  );
}
