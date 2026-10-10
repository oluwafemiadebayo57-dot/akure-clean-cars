import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CarCard from "../components/CarCard";
import AnimatedNumber from "../components/AnimatedNumber";
import { cars, formatNaira } from "../data/cars";
import { whatsappLink, site } from "../data/site";

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
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400 mb-8"
              >
                <span className="w-8 h-px bg-orange-500" />
                AKURE, ONDO STATE — EST. 2017
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-navy dark:text-white mb-6"
              >
                The Akure dealer that doesn't{" "}
                <span className="text-orange-500">waste your time.</span>
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
                  className="group inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors shadow-lg shadow-orange-500/20"
                >
                  Browse inventory
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  to="/car-match"
                  className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-full border border-slate-300 dark:border-slate-700 text-navy dark:text-white hover:border-orange-500 dark:hover:border-orange-500 hover:text-orange-500 transition-colors"
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
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                <img
                  src={spotlight.image}
                  alt={spotlight.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-brand-900/95 backdrop-blur px-4 py-3 rounded-lg">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Now in stock
                  </div>
                  <div className="text-sm font-semibold text-navy dark:text-white">
                    {spotlight.name}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ BRANDS MARQUEE ============ */}
      <section className="border-y border-slate-200 dark:border-white/5 py-6 bg-white dark:bg-transparent overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="mx-10 text-sm tracking-widest font-semibold text-slate-400 dark:text-slate-600"
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
              <div className="font-display text-5xl md:text-6xl text-navy dark:text-white mb-2">
                <AnimatedNumber value={s.n} />
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
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
            <div className="text-xs font-semibold tracking-widest text-orange-500 mb-4">
              SPOTLIGHT
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy dark:text-white leading-[1.05]">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="text-xs font-semibold tracking-widest text-orange-400 mb-3">
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
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors"
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
            <div className="text-xs font-semibold tracking-widest text-orange-500 mb-4">
              INVENTORY
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy dark:text-white leading-tight">
              Nine cars. All inspected.
              <br />
              <span className="text-slate-400 dark:text-slate-600">None of them junk.</span>
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
        className="bg-white dark:bg-[#0A1220] py-24 mt-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <div className="text-xs font-semibold tracking-widest text-orange-500 mb-4">
              WHY US
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy dark:text-white leading-[1.05] mb-6">
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
                className="flex gap-6 py-8 border-b border-slate-200 dark:border-white/5 last:border-0"
              >
                <div className="font-display text-3xl text-orange-500 shrink-0">
                  {item.n}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">
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
          <div className="font-display text-7xl text-orange-500 leading-none mb-6">"</div>
          <p className="font-display text-3xl md:text-4xl text-navy dark:text-white leading-[1.3] mb-8">
            I've bought three cars in Akure over the years. This is the first
            time I didn't feel like I was being played.
          </p>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            <div className="font-semibold text-navy dark:text-white">
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
        className="bg-brand-700 dark:bg-brand-900 text-white py-24 grain relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6">
            Not sure which car fits you?
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Answer five quick questions. We'll recommend three cars from our
            inventory — or chat with us directly on WhatsApp.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/car-match"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors shadow-lg shadow-orange-500/20"
            >
              Start Car Match <span>→</span>
            </Link>
            <a
              href={whatsappLink(
                `Hi ${site.brandName}, I'd like to talk about the cars in your inventory.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-full border-2 border-white/30 text-white hover:border-white transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}