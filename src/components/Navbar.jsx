import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/inventory", label: "Inventory" },
  { to: "/car-match", label: "Car Match ✨" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white font-black">
            A
          </div>
          <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
            Akure <span className="text-brand-600">Clean Cars</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-600"
                    : "text-slate-600 dark:text-slate-300 hover:text-brand-600"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/inventory"
            className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors"
          >
            Book Test Drive
          </Link>
          <button
            className="md:hidden text-slate-700 dark:text-slate-200 text-xl"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-slate-700 dark:text-slate-200 font-medium"
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}