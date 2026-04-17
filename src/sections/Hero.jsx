import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { useMemo } from "react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Jest",
  "Cypress",
  "Figma",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
  /* ---------------- OPTIMIZED DOTS (NO RE-RENDER ISSUES) ---------------- */
  const dots = useMemo(
    () =>
      Array.from({ length: 25 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${15 + Math.random() * 15}s`,
        delay: `${Math.random() * 5}s`,
      })),
    [],
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40 will-change-transform"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* FLOATING DOTS (GPU FRIENDLY) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 will-change-transform"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 pt-24 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            {/* BADGE */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-lg glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-lg animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            {/* TITLE */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">Digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Sudhir kumar — a software engineer specializing in
                React, Next.js, and TypeScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center mt-12 animate-fade-in animation-delay-300">
              <a href="/CV.pdf" download>
                <AnimatedBorderButton size="sm">
                  <RiDownloadCloud2Fill className="w-7 h-7 animate-pulse" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* SOCIALS */}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">
              {[FaGithub, FaYoutube, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2 text-gray-400 hover:text-white transition-transform hover:scale-125 will-change-transform"
                  >
                    <Icon size={20} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto p-10">
              <div className="absolute inset-0 rounded-lg bg-linear-to-br from-primary/30 via-transparent to-primary/20 blur-2xl animate-pulse" />

              <div className="relative glass rounded-lg p-3 glow-border">
                <img
                  src="/Profile-Pic.png"
                  alt="Profile"
                  className="w-full aspect-4/5 object-cover rounded-lg will-change-transform"
                />

                {/* BADGES */}
                <div className="absolute -bottom-4 -right-1 glass rounded-lg px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-lime-300 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-2 glass rounded-lg px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS MARQUEE (SMOOTHER GPU ANIMATION) */}
        <div className="-mt-10 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee whitespace-nowrap will-change-transform">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <MdKeyboardDoubleArrowDown className="w-8 h-8 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
