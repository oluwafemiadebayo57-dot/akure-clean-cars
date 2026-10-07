import { Link } from "react-router-dom";
import { formatNaira } from "../data/cars";

export default function CarCard({ car, matchScore }) {
  return (
    <Link
      to={`/car/${car.id}`}
      className="group block rounded-2xl overflow-hidden bg-white dark:bg-[#0A1220] border border-slate-200 dark:border-white/5 hover:border-orange-500 dark:hover:border-orange-500 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-700 text-white text-xs font-semibold tracking-wide">
          {car.tag}
        </span>
        {matchScore && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-orange-500 text-white text-xs font-bold">
            {matchScore}% match
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg text-navy dark:text-white leading-tight mb-1">
          {car.name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          {car.year} · {car.mileage.toLocaleString()} km · {car.fuel}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-orange-500 font-bold text-lg">
            {formatNaira(car.price)}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-orange-500 transition-colors uppercase tracking-wider">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}