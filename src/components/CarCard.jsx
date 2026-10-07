import { Link } from "react-router-dom";
import { formatNaira } from "../data/cars";

export default function CarCard({ car, matchScore }) {
  return (
    <Link
      to={`/car/${car.id}`}
      className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-600 text-white text-xs font-semibold">
          {car.tag}
        </span>
        {matchScore && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
            {matchScore}% match
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white">
          {car.name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
          {car.year} • {car.mileage.toLocaleString()} km • {car.fuel}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-brand-600 font-extrabold text-lg">
            {formatNaira(car.price)}
          </span>
          <span className="text-xs font-medium text-slate-500 group-hover:text-brand-600 transition-colors">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}