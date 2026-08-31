import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "Youtube" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.98,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // stagger children reveal
      gsap.from(".footer-item", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="relative py-16 border-t border-white/10 bg-black/30 backdrop-blur-2xl overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LOGO */}
          <div className="footer-item text-center md:text-left">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight hover:opacity-80 transition"
            >
              SK<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-white/40 mt-2">
              © {currentYear} SK. All rights reserved.
            </p>
          </div>

          {/* LINKS */}
          <nav className="footer-item flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-white/50 hover:text-white transition group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* SOCIALS */}
          <div className="footer-item flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="group relative p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <social.icon className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors" />

                {/* glow */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-primary/10 blur-md transition" />
              </a>
            ))}
          </div>
        </div>

        {/* bottom line */}
        <div className="footer-item mt-2 text-center text-xs text-white/30">
          Built with React • GSAP ScrollTrigger • Premium Motion UI
        </div>
      </div>
    </footer>
  );
};
