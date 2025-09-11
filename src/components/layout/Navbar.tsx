import Logo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ModeToggle } from "./ModeToggler";
import { Link, NavLink } from "react-router";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { role } from "@/constants/role";
import UserMenu from "../user-menu";

export default function Header() {
  const { data } = useUserInfoQuery(undefined);
  const user = data?.data;

  // Default links
  const navigationLinks = [
    { href: "/", label: "Home", role: "PUBLIC" },
    { href: "/features", label: "Features", role: "PUBLIC" },
    { href: "/about", label: "About", role: "PUBLIC" },
    { href: "/faq", label: "FAQ", role: "PUBLIC" },
    { href: "/contact", label: "Contact", role: "PUBLIC" },
  ];

  // Role-based links
  if (user) {
    if (user.role === role.rider) {
      navigationLinks.push({ href: "/ride-booking", label: "Book a Ride", role: role.rider });
      navigationLinks.push({ href: "/createDriver", label: "Be a Driver", role: role.rider });
      navigationLinks.push({ href: "/rider", label: "Dashboard", role: role.rider });
    } else if (user.role === role.driver) {
      navigationLinks.push({ href: "/start-driving", label: "Start Driving", role: role.driver });
      navigationLinks.push({ href: "/driver", label: "Dashboard", role: role.driver });
    } else if (user.role === role.admin) {
      navigationLinks.push({ href: "/admin", label: "Dashboard", role: role.admin });
    }
     else if (user.role === role.superAdmin) {
      navigationLinks.push({ href: "/admin", label: "Dashboard", role: role.admin });
    }
  }

  return (
    <header className="px-4 md:px-6 bg-black/10 backdrop-blur-2xl z-50 fixed top-0 left-0 w-full">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="group size-8 md:hidden" variant="ghost" size="icon">
                <svg
                  className="pointer-events-none"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden rounded-none">
              <div className="flex flex-col gap-2">
                {navigationLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) =>
                      `py-1.5 px-2 rounded-none font-medium transition-colors ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      } hover:text-primary`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Logo + Desktop nav */}
          <div className="flex items-center gap-6">
            <NavLink to="/" className="flex items-center">
              <Logo />
            </NavLink>
            <div className="hidden md:flex gap-4">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `py-1.5 px-2 font-medium transition-colors ${
                      isActive ? "text-primary underline" : "text-white hover:scale-105"
                    } hover:text-primary`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          {user?.email ? (
            <UserMenu data={data} />
          ) : (
            <Button asChild className="text-sm rounded-none">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
