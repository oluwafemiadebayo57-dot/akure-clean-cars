import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CarCard from "../components/CarCard";
import AnimatedNumber from "../components/AnimatedNumber";
import { cars, formatNaira } from "../data/cars";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const brands = [
  "TOYOTA", "LEXUS", "MERCEDES-BENZ", "BMW", "HONDA", "FORD", "KIA", "HYUNDAI",
];

export default function Home() {
  const featured = cars.slice(0, 3);
  const spotlight = cars[0];

  return (
    <div className="overflow-hidden">
      {/* ============ HERO ============ */}
      <section className="relative grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left — text */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="lg:col-span-5 relative z-10"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-slate-500 dark:text-slate-400 mb-8"
              >
                <span className="w-8 h-px bg-gold" />
                AKURE, ONDO STATE — EST. 2017
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-ink dark:text-white mb-6"
              >
                The Akure dealer that doesn't{" "}
                <em className="text-brand-600">waste your time.</em>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-md leading-relaxed"
              >
                Nine inspected, verified vehicles. Honest pricing. No hidden
                damage, no pushy salesmen, no stories.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link
                  to="/inventory"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 font-medium rounded-full hover:gap-3 transition-all shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: "#ffffff", color: "#0F172A" }}
                >
                  Browse inventory
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  to="/car-match"
                  className="inline-flex items-center gap-2 px-6 py-3.5 font-medium rounded-full transition-colors"
                  style={{
                    border: "1px solid rgba(148, 163, 184, 0.4)",
                    color: "#ffffff",
                  }}
                >
                  Try Car Match
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — car image bleeding */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="lg:col-span-7 relative lg:-mr-48 xl:-mr-72"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src={spotlight.image}
                  alt={spotlight.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-ink/95 backdrop-blur px-4 py-3 rounded-lg">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Now in stock
                  </div>
                  <div className="text-sm font-semibold text-ink dark:text-white">
                    {spotlight.name}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ BRANDS MARQUEE ============ */}
      <section className="border-y border-slate-200 dark:border-slate-800 py-6 bg-white dark:bg-transparent overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="mx-10 text-sm tracking-widest font-medium text-slate-400 dark:text-slate-600"
            >
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ============ STATS ============ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { n: "1,200+", l: "Cars delivered" },
            { n: "8", l: "Years in business" },
            { n: "50", l: "Point inspection" },
            { n: "4.9", l: "Average rating" },
          ].map((s) => (
            <motion.div key={s.l} variants={fadeUp}>
              <div className="font-display text-5xl md:text-6xl text-ink dark:text-white mb-2">
                <AnimatedNumber value={s.n} />
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ============ SPOTLIGHT ============ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <motion.div variants={fadeUp} className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-6">
            <div className="text-xs font-medium tracking-widest text-gold mb-4">
              SPOTLIGHT
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-white leading-[1.05]">
              This week's standout vehicle
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pl-10">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Every week we highlight one car that genuinely earns it. Fully
              inspected, fully clean, priced honestly.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] group"
        >
          <img
            src={spotlight.image}
            alt={spotlight.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="text-xs font-medium tracking-widest text-gold mb-3">
                  {spotlight.year} · {spotlight.mileage.toLocaleString()} KM
                </div>
                <h3 className="font-display text-3xl md:text-5xl mb-2">
                  {spotlight.name}
                </h3>
                <div className="text-xl md:text-2xl font-semibold">
                  {formatNaira(spotlight.price)}
                </div>
              </div>
              <Link
                to={`/car/${spotlight.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-full hover:gap-3 transition-all"
                style={{ backgroundColor: "#ffffff", color: "#0F172A" }}
              >
                View details <span>→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ============ FEATURED ============ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <motion.div variants={fadeUp} className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="text-xs font-medium tracking-widest text-gold mb-4">
              INVENTORY
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-white leading-tight">
              Nine cars. All inspected.
              <br />
              <em className="text-slate-400 dark:text-slate-600">None of them junk.</em>
            </h2>
          </div>
          <Link
            to="/inventory"
            className="text-sm font-medium text-ink dark:text-white border-b border-ink dark:border-white pb-1 hover:opacity-60 transition-opacity"
          >
            View all inventory →
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((c) => (
            <motion.div key={c.id} variants={fadeUp}>
              <CarCard car={c} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ============ WHY US ============ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="bg-white dark:bg-[#0F141A] py-24 mt-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <div className="text-xs font-medium tracking-widest text-gold mb-4">
              WHY US
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-white leading-[1.05] mb-6">
              Buying a used car shouldn't feel like a gamble.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              That's why we built Akure Clean Cars around a simple promise:
              every vehicle is inspected, verified, and priced honestly before
              it hits our lot.
            </p>
          </motion.div>

          <div className="lg:col-span-7 lg:pl-12">
            {[
              {
                n: "01",
                t: "Verified clean",
                d: "Every car passes a 50-point inspection. Full history verified. No hidden damage, no rebuilt titles, no stories.",
              },
              {
                n: "02",
                t: "Honest pricing",
                d: "The price on the tag is the price. Flexible financing available on all vehicles.",
              },
              {
                n: "03",
                t: "Free delivery",
                d: "We deliver anywhere in Ondo State. No hidden fees, no surprises at the door.",
              },
            ].map((item) => (
              <motion.div
                key={item.n}
                variants={fadeUp}
                className="flex gap-6 py-8 border-b border-slate-200 dark:border-slate-800 last:border-0"
              >
                <div className="font-display text-3xl text-gold shrink-0">
                  {item.n}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink dark:text-white mb-2">
                    {item.t}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ============ TESTIMONIAL ============ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <motion.div variants={fadeUp} className="text-center">
          <div className="font-display text-6xl text-gold leading-none mb-6">"</div>
          <p className="font-display text-3xl md:text-4xl text-ink dark:text-white leading-[1.3] mb-8">
            I've bought three cars in Akure over the years. This is the first
            time I didn't feel like I was being played.
          </p>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            <div className="font-semibold text-ink dark:text-white">
              Adebayo O.
            </div>
            <div>Bought a Toyota Camry, 2024</div>
          </div>
        </motion.div>
      </motion.section>

      {/* ============ CTA ============ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="bg-ink dark:bg-black text-white py-24 grain relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6">
            Not sure which car fits you?
          </h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Answer five quick questions. We'll recommend three cars from our
            inventory — with a match score for each.
          </p>
          <Link
            to="/car-match"
            className="inline-flex items-center gap-2 px-8 py-4 font-medium rounded-full hover:gap-3 transition-all"
            style={{ backgroundColor: "#ffffff", color: "#0F172A" }}
          >
            Start Car Match <span>→</span>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}