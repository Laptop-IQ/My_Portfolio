import { useRef } from "react";
import { gsap } from "gsap";

export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const btnRef = useRef(null);

  const handleClick = (e) => {
    const button = btnRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    const ripple = document.createElement("span");

    ripple.style.position = "absolute";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.borderRadius = "50%";
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.style.background =
      "radial-gradient(circle, rgba(255,255,255,0.45) 0%, transparent 70%)";
    ripple.style.pointerEvents = "none";
    ripple.style.zIndex = "0";

    button.appendChild(ripple);

    gsap.fromTo(
      ripple,
      { scale: 0, opacity: 1 },
      {
        scale: 2.2,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        onComplete: () => ripple.remove(),
      },
    );

    // subtle press feedback
    gsap.fromTo(
      button,
      { scale: 1 },
      {
        scale: 0.97,
        duration: 0.12,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      },
    );
  };

  const baseClasses = `
    relative overflow-hidden rounded-lg font-medium 
    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary

    bg-primary text-primary-foreground 
    hover:bg-primary/90

    shadow-lg shadow-primary/25
    transition-all duration-300 ease-out

    will-change-transform
  `;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {/* Glow Layer */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-white/10 via-white/5 to-transparent" />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
