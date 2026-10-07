import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cars, formatNaira } from "../data/cars";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === +id);

  if (!car) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center">
        <div className="font-display text-6xl text-slate-300 dark:text-slate-700 mb-6">
          —
        </div>
        <h1 className="font-display text-4xl text-navy dark:text-white mb-3">
          That car isn't here.
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          It may have been sold or removed from inventory.
        </p>
        <Link
          to="/inventory"
          className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors"
        >
          ← Back to inventory
        </Link>
      </div>
    );
  }

  const monthly = Math.round((car.price * 0.8) / 48);
  const related = cars.filter((c) => c.id !== car.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* ============ BACK ============ */}
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <Link
          to="/inventory"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400 hover:text-orange-500 transition-colors mb-8"
        >
          ← Inventory
        </Link>
      </motion.div>

      {/* ============ HEADER ============ */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="grid lg:grid-cols-12 gap-8 items-end mb-12"
      >
        <div className="lg:col-span-8">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="text-xs font-semibold tracking-widest text-orange-500">
              {car.tag.toUpperCase()}
            </span>
            <span className="w-8 h-px bg-orange-500" />
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
              {car.year} · {car.body}
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-navy dark:text-white"
          >
            {car.name}
          </motion.h1>
        </div>
        <motion.div variants={fadeUp} className="lg:col-span-4 lg:text-right">
          <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold mb-2">
            Price
          </div>
          <div className="font-display text-4xl md:text-5xl text-orange-500">
            {formatNaira(car.price)}
          </div>
        </motion.div>
      </motion.div>

      {/* ============ IMAGE ============ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative rounded-3xl overflow-hidden mb-16 ring-1 ring-black/5 dark:ring-white/5"
      >
        <div className="aspect-[16/9] md:aspect-[21/9] bg-slate-100 dark:bg-slate-900">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-6 left-6 hidden md:block bg-white/95 dark:bg-brand-900/95 backdrop-blur px-5 py-3 rounded-xl">
          <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
            Now in stock
          </div>
          <div className="text-sm font-semibold text-navy dark:text-white">
            Akure Clean Cars
          </div>
        </div>
      </motion.div>

      {/* ============ MAIN GRID ============ */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="grid lg:grid-cols-12 gap-12 mb-24"
      >
        {/* LEFT — story + specs */}
        <div className="lg:col-span-8">
          <motion.div variants={fadeUp} className="mb-12">
            <div className="text-xs font-semibold tracking-widest text-orange-500 mb-4">
              THE STORY
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-navy dark:text-white leading-[1.1] mb-6">
              A {car.year} {car.name} that passes every check we run.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {car.mileage === 0
                ? "Brand new, straight from the dealer. Zero kilometres on the clock, full warranty intact."
                : `${car.mileage.toLocaleString()} km on the clock — verified, documented, and well within range for its age.`}{" "}
              Full inspection report available below. No hidden damage. No
              rebuilt titles. Priced to move.
            </p>
          </motion.div>

          {/* Specs */}
          <motion.div variants={fadeUp} className="mb-16">
            <div className="text-xs font-semibold tracking-widest text-orange-500 mb-6">
              SPECIFICATIONS
            </div>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {[
                ["Year", car.year],
                ["Body", car.body],
                ["Fuel", car.fuel],
                ["Transmission", car.transmission],
                ["Mileage", `${car.mileage.toLocaleString()} km`],
                ["Condition", "Verified clean"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between py-3 border-b border-slate-200 dark:border-white/5"
                >
                  <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                    {k}
                  </span>
                  <span className="text-navy dark:text-white font-semibold">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Inspection */}
          <motion.div variants={fadeUp}>
            <div className="flex items-baseline gap-3 mb-2">
              <div className="text-xs font-semibold tracking-widest text-orange-500">
                50-POINT INSPECTION
              </div>
              <span className="w-8 h-px bg-orange-500" />
              <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                Passed · Verified
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-navy dark:text-white leading-[1.1] mb-8">
              Every system checked. Every box ticked.
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
              {[
                "Engine",
                "Transmission",
                "Brakes",
                "Suspension",
                "Electrical",
                "Air Conditioning",
                "Body & Paint",
                "Interior",
                "Tires & Alignment",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 py-3 border-b border-slate-200 dark:border-white/5"
                >
                  <span className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-2.5 h-2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — sticky CTA card */}
        <div className="lg:col-span-4">
          <motion.div
            variants={fadeUp}
            className="lg:sticky lg:top-24 rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0A1220] p-7"
          >
            <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold mb-4">
              Estimated monthly
            </div>
            <div className="font-display text-4xl text-orange-500 mb-1">
              {formatNaira(monthly)}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-8">
              20% down · 48 months · flexible terms
            </div>

            <div className="space-y-3 mb-8">
              <button className="w-full px-6 py-4 font-semibold rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors shadow-lg shadow-orange-500/20">
                Book a test drive
              </button>
              <a
                href="#"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 font-semibold rounded-full border-2 border-slate-300 dark:border-slate-700 text-navy dark:text-white hover:border-orange-500 dark:hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/5 space-y-3">
              {[
                "50-point inspection passed",
                "Full history verified",
                "Free delivery in Ondo State",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <span className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-2.5 h-2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ============ RELATED ============ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.div
          variants={fadeUp}
          className="flex items-end justify-between mb-10 flex-wrap gap-6"
        >
          <div>
            <div className="text-xs font-semibold tracking-widest text-orange-500 mb-4">
              MORE FROM INVENTORY
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-navy dark:text-white leading-tight">
              Other cars worth a look.
            </h2>
          </div>
          <Link
            to="/inventory"
            className="text-sm font-semibold text-navy dark:text-white border-b-2 border-orange-500 pb-1 hover:text-orange-500 transition-colors"
          >
            View all inventory →
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((c) => (
            <motion.div key={c.id} variants={fadeUp}>
              <Link
                to={`/car/${c.id}`}
                className="group block rounded-2xl overflow-hidden bg-white dark:bg-[#0A1220] border border-slate-200 dark:border-white/5 hover:border-orange-500 transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-navy dark:text-white mb-1">
                    {c.name}
                  </h3>
                  <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                    {c.year} · {c.mileage.toLocaleString()} km
                  </div>
                  <div className="text-orange-500 font-bold mt-3">
                    {formatNaira(c.price)}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}