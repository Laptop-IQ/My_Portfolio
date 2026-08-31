import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { useMemo } from "react";

import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    href: "https://twitter.com/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "https://youtube.com/",
  },
];

export const Hero = () => {
  /*
   * Deterministic particles.
   * Avoids Math.random() hydration mismatch in SSR environments.
   */
  const dots = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 61) % 100}%`,
        size: index % 3 === 0 ? "9px" : "6px",
        duration: `${18 + (index % 6) * 3}s`,
        delay: `${(index % 8) * 0.7}s`,
      })),
    [],
  );

  return (
    <section
      id="home"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-background
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
        "
        aria-hidden="true"
      >
        <img
          src="/hero-bg.jpg"
          alt=""
          loading="eager"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-[0.12]
          "
        />

        {/* Main overlay */}
        <div className="absolute inset-0 bg-background/90" />

        {/* Right glow */}
        <div
          className="
            absolute
            right-[5%]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-primary/[0.08]
            blur-[130px]
          "
        />

        {/* Left glow */}
        <div
          className="
            absolute
            bottom-[-10%]
            left-[-5%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-primary/[0.04]
            blur-[120px]
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.022]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,.8) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.8) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Top fade */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-32
            bg-gradient-to-b
            from-background
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-background
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          PARTICLES
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
        aria-hidden="true"
      >
        {dots.map((dot) => (
          <span
            key={dot.id}
            className="
              absolute
              rounded-full
              bg-primary/30
              motion-reduce:animate-none
            "
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* =========================================================
          PAGE CONTAINER
      ========================================================== */}

      <div
        className="
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          flex-col
          px-5
          pb-10
          pt-24
          sm:px-8
          lg:px-10
          lg:pb-8
        "
      >
        {/* =======================================================
            HERO AREA
        ======================================================== */}

        <div
          className="
            flex
            flex-1
            items-center
            py-10
            lg:py-2
          "
        >
          <div
            className="
              grid
              w-full
              items-center
              gap-14
              lg:grid-cols-[1.08fr_.92fr]
              lg:gap-16
              xl:gap-20
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div
              className="
                relative
                z-10
                max-w-3xl
              "
            >
              {/* Status */}
              <div className="animate-fade-in motion-reduce:animate-none">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.035]
                    px-4
                    py-2
                    shadow-lg
                    shadow-black/10
                    backdrop-blur-xl
                  "
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="
                        absolute
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-primary/40
                        motion-reduce:animate-none
                      "
                    />

                    <span
                      className="
                        relative
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-primary
                      "
                    />
                  </span>

                  <span
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-primary
                      sm:text-[10px]
                    "
                  >
                    Available for opportunities
                  </span>
                </div>
              </div>

              {/* Heading */}
              <div
                className="
                  mt-7
                  animate-fade-in
                  animation-delay-100
                  motion-reduce:animate-none
                "
              >
                <p
                  className="
                    mb-4
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.24em]
                    text-muted-foreground
                    sm:text-xs
                  "
                >
                  Software Engineer · UI/UX · React Specialist
                </p>

                <h1
                  className="
                    max-w-7xl
                    text-[2.65rem]
                    font-bold
                    leading-[1.02]
                    tracking-[-0.04em]
                    text-white
                    sm:text-3xl
                    md:text-4xl
                    lg:text-[4.25rem]
                    xl:text-[4.65rem]
                  "
                >
                  Crafting{" "}
                  <span className="relative text-primary">
                    digital
                    <span
                      className="
                        absolute
                        -bottom-1
                        left-0
                        h-px
                        w-full
                        bg-primary/60
                        shadow-[0_0_14px_rgba(32,178,166,0.65)]
                      "
                    />
                  </span>
                  <br />
                  <span className="text-white/95">experiences with</span>{" "}
                  <span
                    className="
                      font-serif
                      font-normal
                      italic
                      text-white/55
                    "
                  >
                    precision.
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p
                className="
                  mt-7
                  max-w-xl
                  animate-fade-in
                  animation-delay-200
                  text-[15px]
                  leading-7
                  text-muted-foreground
                  motion-reduce:animate-none
                  sm:text-base
                  lg:text-[17px]
                "
              >
                Hi, I'm{" "}
                <span className="font-medium text-white">Sudhir Kumar</span>. I
                design and build modern digital products with React, Next.js and
                TypeScript, combining thoughtful UI/UX with clean, scalable
                engineering.
              </p>

              {/* =================================================
                  CTA
              ================================================== */}

              <div
                className="
    mt-8
    flex
    flex-col
    gap-3
    animate-fade-in
    animation-delay-300
    motion-reduce:animate-none
    sm:flex-row
  "
              >
                <a
                  href="/CV.pdf"
                  download
                  aria-label="Download Sudhir Kumar's CV"
                  className="w-full sm:w-auto"
                >
                  <AnimatedBorderButton
                    size="sm"
                    className="
        h-12
        w-full
        justify-center
        px-6
        text-sm
        sm:w-auto
      "
                  >
                    <RiDownloadCloud2Fill className="h-5 w-5" />
                    Download CV
                  </AnimatedBorderButton>
                </a>

                <a
                  href="#projects"
                  className="
      group
      inline-flex
      h-12
      w-full
      items-center
      justify-center
      gap-2
      rounded-lg
      border
      border-white/10
      bg-white/[0.025]
      px-6
      text-sm
      font-medium
      text-white
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:border-primary/30
      hover:bg-primary/[0.06]
      motion-reduce:transition-none
      sm:w-auto
    "
                >
                  View selected work
                  <MdArrowOutward
                    className="
        h-5
        w-5
        transition-transform
        duration-300
        group-hover:-translate-y-0.5
        group-hover:translate-x-0.5
        motion-reduce:transition-none
      "
                  />
                </a>
              </div>

              {/* =================================================
                  STATS
              ================================================== */}

              <div
                className="
                  mt-9
                  flex
                  flex-wrap
                  items-center
                  gap-x-7
                  gap-y-4
                  border-t
                  border-white/[0.07]
                  pt-6
                  animate-fade-in
                  animation-delay-400
                  motion-reduce:animate-none
                "
              >
                <div>
                  <p className="text-xl font-semibold text-white">5+</p>

                  <p className="mt-1 text-[10px] text-muted-foreground">
                    Years experience
                  </p>
                </div>

                <div className="hidden h-8 w-px bg-white/10 sm:block" />

                <div>
                  <p className="text-xl font-semibold text-white">20+</p>

                  <p className="mt-1 text-[10px] text-muted-foreground">
                    Projects shipped
                  </p>
                </div>

                <div className="hidden h-8 w-px bg-white/10 sm:block" />

                <div>
                  <p className="text-xl font-semibold text-white">UI/UX</p>

                  <p className="mt-1 text-[10px] text-muted-foreground">
                    Design focused
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT PROFILE
            ================================================== */}

            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[500px]
                animate-fade-in
                animation-delay-300
                motion-reduce:animate-none
                lg:translate-x-[10%]

              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[70%]
                  w-[70%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-primary/[0.10]
                  blur-[100px]
                "
              />

              {/* Profile card */}
              <div className="relative mx-auto w-[78%] sm:w-[75%]">
                {/* Glow border */}
                <div
                  className="
                    absolute
                    -inset-1
                    rounded-[1.5rem]
                    bg-gradient-to-br
                    from-primary/40
                    via-primary/5
                    to-transparent
                    opacity-70
                    blur-xl
                  "
                />

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-white/10
                    bg-white/[0.035]
                    p-2
                    shadow-2xl
                    shadow-black/50
                    backdrop-blur-xl
                  "
                >
                  {/* Header */}
                  <div
                    className="
                      absolute
                      left-5
                      right-5
                      top-5
                      z-20
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                      <span
                        className="
                          text-[8px]
                          font-medium
                          uppercase
                          tracking-[0.2em]
                          text-white/60
                        "
                      >
                        Portfolio / 2026
                      </span>
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-black/20
                        px-2.5
                        py-1
                        text-[8px]
                        text-white/50
                        backdrop-blur-md
                      "
                    >
                      01
                    </span>
                  </div>

                  {/* Image */}
                  <div className="group relative overflow-hidden rounded-[1.1rem]">
                    <img
                      src="/Profile-Pic.png"
                      alt="Portrait of Sudhir Kumar"
                      loading="eager"
                      fetchPriority="high"
                      className="
      aspect-[4/5]
      w-full
      object-cover
      object-center
      transition-transform
      duration-700
      ease-out
      group-hover:scale-[1.12]
      motion-reduce:transition-none
    "
                    />
                    {/* Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-transparent
                        to-black/20
                      "
                    />

                    {/* Name */}
                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        right-5
                      "
                    >
                      <p
                        className="
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[0.22em]
                          text-primary
                        "
                      >
                        Software Engineer
                      </p>

                      <p
                        className="
                          mt-1
                          text-xl
                          font-semibold
                          text-white
                        "
                      >
                        Sudhir Kumar
                      </p>
                    </div>
                  </div>
                  {/* =================================================
                  SOCIALS
              ================================================== */}

                  <div
                    className="
    mt-3
    flex
    items-center
    justify-center
    gap-2
    animate-fade-in
    animation-delay-500
    motion-reduce:animate-none
  "
                  >
                    {socials.map(({ name, icon: Icon, href }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${name}`}
                        className="
        group
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.025]
        text-muted-foreground
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:bg-primary/10
        hover:text-primary
        motion-reduce:transition-none
      "
                      >
                        <Icon
                          className="
          h-4
          w-4
          transition-transform
          duration-300
          group-hover:scale-110
          motion-reduce:transition-none
        "
                        />
                      </a>
                    ))}
                  </div>
                </div>

                {/* =================================================
                    AVAILABLE BADGE
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-20
                    -right-7
                    rounded-xl
                    border
                    border-white/10
                    bg-[#101615]/95
                    px-4
                    py-3
                    shadow-xl
                    backdrop-blur-xl
                    sm:-right-10
                  "
                >
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span
                        className="
                          absolute
                          h-full
                          w-full
                          animate-ping
                          rounded-full
                          bg-lime-400/40
                          motion-reduce:animate-none
                        "
                      />

                      <span
                        className="
                          relative
                          h-2.5
                          w-2.5
                          rounded-full
                          bg-lime-400
                        "
                      />
                    </span>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Available
                      </p>

                      <p className="text-[10px] text-muted-foreground">
                        Freelance & full-time
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    EXPERIENCE
                ================================================== */}

                <div
                  className="
                    absolute
                    -left-10
                    top-[30%]
                    hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-[#101615]/95
                    px-4
                    py-3
                    shadow-xl
                    backdrop-blur-xl
                    sm:block
                  "
                >
                  <p className="text-2xl font-bold text-primary">5+</p>

                  <p className="text-[10px] text-muted-foreground">
                    Years experience
                  </p>
                </div>

                {/* Code badge */}
                <div
                  className="
                    absolute
                    -right-4
                    top-12
                    hidden
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-primary/20
                    bg-primary/10
                    text-primary
                    shadow-lg
                    shadow-primary/10
                    backdrop-blur-xl
                    sm:flex
                  "
                  aria-hidden="true"
                >
                  <span className="font-mono text-sm">&lt;/&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
