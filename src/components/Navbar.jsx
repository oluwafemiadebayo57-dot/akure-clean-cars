import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { whatsappLink, site } from "../data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/inventory", label: "Inventory" },
  { to: "/car-match", label: "Car Match" },
  { to: "/sell", label: "Sell Your Car" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#FAFAF7]/85 dark:bg-[#0A1220]/85 border-b border-slate-200 dark:border-white/5"
          : "backdrop-blur bg-[#FAFAF7]/60 dark:bg-[#0A1220]/60 border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-brand-700 flex items-center justify-center transition-transform group-hover:scale-105 relative overflow-hidden">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M4 18 L12 5 L20 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5 L20 18 L12 12" fill="#F97316" opacity="0.9" />
            </svg>
          </div>
          <span className="font-display text-lg tracking-tight text-navy dark:text-white">
            AKURE <span className="text-orange-500">CLEAN CARS</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "text-navy dark:text-white bg-brand-50 dark:bg-white/5"
                    : "text-slate-600 dark:text-slate-400 hover:text-navy dark:hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={whatsappLink(
              `Hi ${site.brandName}, I'd like to book a test drive. Which cars are available?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white transition-colors"
          >
            Book test drive
          </a>
          <button
            className="md:hidden text-navy dark:text-white text-xl w-8 h-8 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden overflow-hidden border-t border-slate-200 dark:border-white/5 bg-[#FAFAF7] dark:bg-[#0A1220]"
        >
          <div className="px-4 py-4 space-y-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl font-medium transition-colors ${
                    isActive
                      ? "bg-brand-50 dark:bg-white/5 text-navy dark:text-white"
                      : "text-slate-600 dark:text-slate-400"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}