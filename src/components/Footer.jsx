import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white font-black">
              A
            </div>
            <span className="font-extrabold text-white">Akure Clean Cars</span>
          </div>
          <p className="text-sm text-slate-400">
            Verified, clean, and inspected vehicles. Trusted by drivers across Ondo State.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/inventory" className="hover:text-brand-500">Inventory</Link></li>
            <li><Link to="/car-match" className="hover:text-brand-500">Car Match</Link></li>
            <li><Link to="/about" className="hover:text-brand-500">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Oba-Ile Road, Akure, Ondo State</li>
            <li>+234 800 000 0000</li>
            <li>hello@akurecleancars.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Hours</h4>
          <ul className="space-y-2 text-sm">
            <li>Mon – Fri: 8am – 6pm</li>
            <li>Saturday: 9am – 4pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Akure Clean Cars. Demo site.
      </div>
    </footer>
  );
}