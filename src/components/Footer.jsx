import { Link } from "react-router-dom";
import { whatsappLink, site } from "../data/site";

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
                <Link to="/sell" className="hover:text-white transition-colors">
                  Sell your car
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
              <li>{site.address}</li>
              <li className="pt-2">
                <a
                  href={whatsappLink(
                    `Hi ${site.brandName}, I have a question about your cars.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-orange-500 transition-colors"
                >
                  <span className="w-3.5 h-3.5 shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {site.email}
                </a>
              </li>
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
            © {new Date().getFullYear()} {site.brandName} — Demo build
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