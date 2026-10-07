import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy dark:bg-[#050B18] text-white/70 mt-24 grain relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-brand-700 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <path d="M4 18 L12 5 L20 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5 L20 18 L12 12" fill="#F97316" opacity="0.9" />
                </svg>
              </div>
              <span className="font-display text-lg text-white tracking-tight">
                AKURE <span className="text-orange-500">CLEAN CARS</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Verified, inspected vehicles for drivers across Ondo State. No
              hidden damage. No stories.
            </p>
            <div className="text-xs uppercase tracking-widest text-white/40 font-medium">
              Est. 2017 · Akure, Nigeria
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-orange-500 font-semibold mb-5">
              Explore
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/inventory" className="hover:text-white transition-colors">
                  Full inventory
                </Link>
              </li>
              <li>
                <Link to="/car-match" className="hover:text-white transition-colors">
                  Car Match tool
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-orange-500 font-semibold mb-5">
              Contact
            </div>
            <ul className="space-y-3 text-sm">
              <li>Oba-Ile Road, Akure</li>
              <li>Ondo State, Nigeria</li>
              <li className="pt-2">+234 800 000 0000</li>
              <li>hello@akurecleancars.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-orange-500 font-semibold mb-5">
              Hours
            </div>
            <ul className="space-y-3 text-sm">
              <li>Mon – Fri<br />8am – 6pm</li>
              <li>Saturday<br />9am – 4pm</li>
              <li>Sunday<br />Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} Akure Clean Cars — Demo build
          </div>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}