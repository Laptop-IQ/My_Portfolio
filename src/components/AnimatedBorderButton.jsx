import { useRef } from "react";

export const AnimatedBorderButton = ({
  children,
  className = "",
  ...props
}) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 12;
    const moveY = (y - centerY) / 12;

    btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
  };

  const reset = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = `translate(0px, 0px) scale(1)`;
  };

  return (
    <button
      ref={btnRef}
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      type="button"
      className={`
        relative px-8 py-4 text-lg font-medium rounded-lg
        bg-white/5 backdrop-blur-xl
        border border-white/10
        text-foreground

        overflow-hidden
        transition-transform duration-200 ease-out

        active:scale-95
        focus:outline-none focus-visible:ring-2 
        focus-visible:ring-primary focus-visible:ring-offset-2

        group will-change-transform ${className}
      `}
    >
      {/* 🌊 Animated gradient border (Tesla energy flow) */}
      <span className="absolute inset-0 rounded-lg p-px">
        <span className="absolute inset-0 rounded-lg bg-linear-to-r from-transparent via-primary/60 to-transparent animate-borderFlow blur-sm opacity-80" />
      </span>

      {/* Inner glow layer */}
      <span className="absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* CONTENT */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
