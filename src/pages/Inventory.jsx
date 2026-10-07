import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Inventory() {
  const [body, setBody] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = cars.filter(
      (c) => (body === "All" || c.body === body) && c.price <= maxPrice
    );
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "new") list = [...list].sort((a, b) => b.year - a.year);
    return list;
  }, [body, maxPrice, sort]);

  const reset = () => {
    setBody("All");
    setMaxPrice(100000000);
    setSort("featured");
  };

  const hasFilters = body !== "All" || maxPrice < 100000000 || sort !== "featured";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* ============ HEADER ============ */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="grid lg:grid-cols-12 gap-8 items-end mb-16"
      >
        <div className="lg:col-span-7">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-slate-500 dark:text-slate-400 mb-6"
          >
            <span className="w-8 h-px bg-gold" />
            FULL INVENTORY
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-ink dark:text-white"
          >
            Every car we have,
            <br />
            <em className="text-slate-400 dark:text-slate-600">
              ready to inspect.
            </em>
          </motion.h1>
        </div>
        <motion.div variants={fadeUp} className="lg:col-span-5 lg:pb-3">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            No hidden damage. No rebuilt titles. Every vehicle on this page has
            passed our 50-point inspection — same standards, no exceptions.
          </p>
        </motion.div>
      </motion.div>

      {/* ============ FILTER BAR ============ */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="sticky top-16 z-30 mb-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 backdrop-blur bg-cream/80 dark:bg-[#0B0F14]/80 border-y border-slate-200 dark:border-slate-800"
      >
        <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
          {/* Count */}
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl text-ink dark:text-white">
              {filtered.length}
            </span>
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
              {filtered.length === 1 ? "car" : "cars"}
            </span>
          </div>

          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          {/* Body Type */}
          <div className="flex items-center gap-3">
            <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
              Body
            </label>
            <select
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="bg-transparent border-b border-slate-300 dark:border-slate-700 text-ink dark:text-white text-sm font-medium py-1 focus:outline-none focus:border-ink dark:focus:border-white transition-colors cursor-pointer"
            >
              <option>All</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Coupé</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
              Up to ₦{(maxPrice / 1e6).toFixed(0)}M
            </label>
            <input
              type="range"
              min="10000000"
              max="100000000"
              step="1000000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(+e.target.value)}
              className="w-40 accent-brand-600 cursor-pointer"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent border-b border-slate-300 dark:border-slate-700 text-ink dark:text-white text-sm font-medium py-1 focus:outline-none focus:border-ink dark:focus:border-white transition-colors cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
              <option value="new">Newest</option>
            </select>
          </div>

          {/* Reset */}
          {hasFilters && (
            <button
              onClick={reset}
              className="ml-auto text-xs uppercase tracking-widest font-medium text-slate-500 dark:text-slate-400 hover:text-ink dark:hover:text-white transition-colors"
            >
              Reset ×
            </button>
          )}
        </div>
      </motion.div>

      {/* ============ GRID ============ */}
      {filtered.length === 0 ? (
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-center py-32 border border-dashed border-slate-300 dark:border-slate-700 rounded-3xl"
        >
          <div className="font-display text-5xl text-slate-300 dark:text-slate-700 mb-4">
            —
          </div>
          <h3 className="font-display text-3xl text-ink dark:text-white mb-3">
            Nothing matches those filters.
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm mx-auto">
            Try widening your price range or removing the body type filter.
          </p>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-full transition-all"
            style={{ backgroundColor: "#0F172A", color: "#ffffff" }}
          >
            Reset all filters
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((c) => (
            <motion.div key={c.id} variants={fadeUp}>
              <CarCard car={c} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}