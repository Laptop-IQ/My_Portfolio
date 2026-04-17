import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Pedro is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Pedro's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Not only is Pedro technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setDirection(-1);
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-lg blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground">
            What People Say
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass p-8 md:p-12 rounded-lg glow-border h-80 flex flex-col justify-between overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-2 left-8 w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Animated Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col flex-1 justify-between"
              >
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed pt-4 line-clamp-3 flex-1">
                  "{testimonials[activeIdx].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 mt-6 h-14 shrink-0">
                  <img
                    src={testimonials[activeIdx].avatar}
                    alt={testimonials[activeIdx].author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 shrink-0"
                  />

                  <div>
                    <div className="font-semibold line-clamp-1">
                      {testimonials[activeIdx].author}
                    </div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {testimonials[activeIdx].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              aria-label="Previous testimonial"
              className="p-3 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all"
              onClick={previous}
            >
              <ChevronLeft />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-lg transition-all duration-300 ${
                    idx === activeIdx
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              aria-label="Next testimonial"
              className="p-3 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all"
              onClick={next}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
