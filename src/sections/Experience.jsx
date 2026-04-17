import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Frontend Engineer",
    company: "Tech Innovators Inc.",
    description:
      "Leading frontend architecture for a suite of fintech products...",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    period: "2020 — 2022",
    role: "Frontend Engineer",
    company: "Digital Solutions Co.",
    description: "Built and maintained multiple React applications...",
    technologies: ["React", "Redux", "Jest", "Cypress"],
  },
  {
    period: "2019 — 2020",
    role: "Junior Developer",
    company: "StartUp Labs",
    description: "Contributed to the development of a SaaS platform...",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    period: "2018 — 2019",
    role: "Freelance Developer",
    company: "Self-Employed",
    description: "Delivered custom web solutions for small businesses...",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
  },
];

// ✅ Timeline Line (Progress Bar)
const TimelineLine = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="absolute left-0 md:left-1/2 top-0 w-0.5 h-full -translate-x-1/2 bg-primary/20"
    >
      <motion.div
        style={{ height }}
        className="w-full bg-primary shadow-[0_0_20px_rgba(32,178,166,0.8)]"
      />
    </div>
  );
};

// ✅ Timeline Item
const TimelineItem = ({ exp, idx }) => {
  const ref = useRef(null);

  const isActive = useInView(ref, {
    margin: "-40% 0px -40% 0px", // center detect
  });

  return (
    <div ref={ref} className="relative grid md:grid-cols-2 gap-8">
      {/* Dot */}
      <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 z-10">
        <div className="w-3 h-3 bg-primary rounded-full relative">
          {isActive && (
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
          )}
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`pl-8 md:pl-0 ${
          idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
        }`}
      >
        <div className="glass p-6 rounded-lg border border-primary/30 hover:border-primary/50 transition-all duration-500">
          <span className="text-sm text-primary font-medium">{exp.period}</span>

          <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
          <p className="text-muted-foreground">{exp.company}</p>

          <p className="text-sm text-muted-foreground mt-4">
            {exp.description}
          </p>

          <div
            className={`flex flex-wrap gap-2 mt-4 ${
              idx % 2 === 0 ? "md:justify-end" : ""
            }`}
          >
            {exp.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-surface text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ✅ Main Component
export const Experience = () => {
  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-lg blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium uppercase">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foreground">
            A timeline of my professional growth...
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <TimelineLine />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <TimelineItem key={idx} exp={exp} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
