// Reusable Logo component for your ride-booking system
// - Pure SVG (no external assets)
// - Tailwind-friendly via `className`
// - Variants: "icon" (pin+car), "horizontal" (icon + brand on right), "stacked" (icon above brand)
// - Optional subtle float animation (Framer Motion)

import * as React from "react";
import { motion } from "framer-motion";

export type LogoProps = {
  /** Overall rendered size in pixels for the icon portion */
  size?: number;
  /** Brand text to render next to/below the icon */
  brand?: string;
  /** Choose layout */
  variant?: "icon" | "horizontal" | "stacked";
  /** Primary color for the pin */
  primary?: string;
  /** Secondary color for the car silhouette */
  secondary?: string;
  /** Apply a gentle float animation */
  animate?: boolean;
  /** Accessible label for screen readers */
  ariaLabel?: string;
  /** Additional Tailwind/utility classes */
  className?: string;
};

const CarPinSVG: React.FC<{ size: number; primary: string; secondary: string; title?: string }>
= ({ size, primary, secondary, title }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    role="img"
    aria-label={title}
    xmlns="http://www.w3.org/2000/svg"
  >
    {title ? <title>{title}</title> : null}
    {/* Map pin shape */}
    <path
      d="M32 2C19.85 2 10 11.85 10 24c0 14.49 17.02 31.33 20.87 35.06a2 2 0 0 0 2.26 0C36.98 55.33 54 38.49 54 24 54 11.85 44.15 2 32 2z"
      fill={primary}
    />
    {/* Car silhouette */}
    <g transform="translate(8 16)">
      <path
        d="M12 22c-.55 0-1-.45-1-1v-3.2c0-1.42.9-2.67 2.25-3.11l7.32-2.44a10 10 0 0 1 3.1-.45h5.1c2.43 0 4.61 1.45 5.55 3.67l1.05 2.53H42a2 2 0 0 1 2 2v1c0 1.1-.9 2-2 2h-2.2c-.43 1.73-2 3-3.8 3-1.81 0-3.37-1.27-3.8-3H21.8c-.43 1.73-1.99 3-3.8 3-1.8 0-3.37-1.27-3.8-3H12zm26.2-3H43v-1h-4.05l-.75-1.8a4 4 0 0 0-3.67-2.45h-5.1c-.53 0-1.06.08-1.57.24l-7.33 2.44c-.17.06-.3.22-.3.4V21h17.92c.34-1.76 1.89-3 3.8-3 1.9 0 3.46 1.24 3.8 3z"
        fill={secondary}
      />
      {/* Wheels */}
      <circle cx="15.5" cy="21" r="2.4" fill={secondary} />
      <circle cx="36.5" cy="21" r="2.4" fill={secondary} />
    </g>
  </svg>
);

const BrandText: React.FC<{ text: string }>= ({ text }) => (
  <span className="font-semibold tracking-tight">{text}</span>
);

const Wrapper: React.FC<{ animate?: boolean; className?: string; children: React.ReactNode }>
= ({ animate, className, children }) => {
  if (!animate) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const Logo: React.FC<LogoProps> = ({
  size = 48,
  brand = "RideGo",
  variant = "horizontal",
  primary = "#2563eb", // Tailwind blue-600
  secondary = "#ffffff",
  animate = false,
  ariaLabel = "Ride booking logo",
  className,
}) => {
  const icon = (
    <CarPinSVG size={size} primary={primary} secondary={secondary} title={ariaLabel} />
  );

  if (variant === "icon") {
    return <Wrapper animate={animate} className={className}>{icon}</Wrapper>;
  }

  if (variant === "stacked") {
    return (
      <Wrapper animate={animate} className={className}>
        <div className="flex flex-col items-center gap-2">
          {icon}
          <BrandText text={brand} />
        </div>
      </Wrapper>
    );
  }

  // horizontal
  return (
    <Wrapper animate={animate} className={className}>
      <div className="flex items-center gap-3">
        {icon}
        <BrandText text={brand} />
      </div>
    </Wrapper>
  );
};

export default Logo;

// --- Usage examples ---
// <Logo />
// <Logo variant="icon" size={40} />
// <Logo variant="stacked" brand="PathaoX" animate />
// <Logo primary="#0ea5e9" secondary="#F8FAFC" className="text-slate-900" />
