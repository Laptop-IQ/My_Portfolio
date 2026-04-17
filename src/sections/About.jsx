import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { useRef } from "react";

/* ------------------ DATA ------------------ */
const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

/* ------------------ ANIMATION ------------------ */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ------------------ MAGNETIC HOOK ------------------ */
const useMagnetic = () => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return { ref, handleMouseMove, handleMouseLeave };
};

/* ------------------ COMPONENT ------------------ */
export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-8"
          >
            <motion.span
              variants={fadeUp}
              className="text-sm font-medium tracking-wider uppercase text-secondary-foreground"
            >
              About Me
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground"
            >
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed"
            >
              <p>
                I'm a passionate software engineer with over 5 years of
                experience crafting digital products.
              </p>
              <p>
                I specialize in React, Next.js, and TypeScript, building
                scalable applications.
              </p>
              <p>
                When I'm not coding, I explore new tech and contribute to
                open-source.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="glass rounded-lg p-6 glow-border hover:scale-[1.02] transition-transform duration-300"
            >
              <p className="text-lg font-medium italic text-foreground leading-relaxed">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful."
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, idx) => {
              const { ref, handleMouseMove, handleMouseLeave } = useMagnetic();

              return (
                <motion.div
                  key={idx}
                  ref={ref}
                  variants={fadeUp}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  whileHover={{ scale: 1.03 }}
                  className="group glass p-6 rounded-lg border border-transparent hover:border-primary/30 transition-all duration-300 will-change-transform"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                    <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
