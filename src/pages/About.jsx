import { motion } from "framer-motion";
import AnimatedNumber from "../components/AnimatedNumber";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* ============ HEADER ============ */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="grid lg:grid-cols-12 gap-8 items-end mb-20"
      >
        <div className="lg:col-span-7">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-slate-500 dark:text-slate-400 mb-6"
          >
            <span className="w-8 h-px bg-gold" />
            AKURE, ONDO STATE — EST. 2017
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-ink dark:text-white"
          >
            A dealership built
            <br />
            on <em className="text-brand-600">honesty.</em>
          </motion.h1>
        </div>
        <motion.div variants={fadeUp} className="lg:col-span-5 lg:pb-3">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            For eight years we've helped drivers across Ondo State find
            inspected, verified vehicles — without the games that make buying
            used cars feel like a gamble.
          </p>
        </motion.div>
      </motion.div>

      {/* ============ STORY ============ */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="grid lg:grid-cols-12 gap-12 mb-28"
      >
        {/* Founder photo — portrait aspect, top-anchored crop */}
        <motion.div variants={fadeUp} className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/5 max-w-md">
            <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-900">
              <img
                src="https://res.cloudinary.com/izxlyyn5/image/upload/v1791378391/photo_5796247903318774896_y.jpg"
                alt="Founder of Akure Clean Cars"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="mt-4 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
            Founder · Akure Clean Cars
          </div>
        </motion.div>

        {/* Story text */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="text-xs font-medium tracking-widest text-gold mb-4">
            OUR STORY
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink dark:text-white leading-[1.1] mb-6">
            We got tired of watching people get played.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Buying a used car in Nigeria shouldn't require a mechanic friend,
            three weekends of research, and a lot of luck. So we built the
            dealership we wished existed — one where every vehicle is
            inspected, every history is verified, and every price is honestly
            set.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Today, over <strong className="text-ink dark:text-white">1,200 drivers</strong>{" "}
            have bought from us. Four out of five come back or send a friend.
          </p>

          <div className="flex flex-wrap gap-3">
            {["50-point inspection", "Verified history", "Free delivery"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* ============ NUMBERS ============ */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="grid sm:grid-cols-3 gap-8 md:gap-12 py-16 border-y border-slate-200 dark:border-slate-800 mb-28"
      >
        {[
          { n: "1,200+", l: "Cars delivered" },
          { n: "8", l: "Years in business" },
          { n: "4.9", l: "Average rating" },
        ].map((s) => (
          <motion.div key={s.l} variants={fadeUp} className="text-center sm:text-left">
            <div className="font-display text-5xl md:text-6xl text-ink dark:text-white mb-2">
              <AnimatedNumber value={s.n} />
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
              {s.l}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ============ CONTACT ============ */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="grid lg:grid-cols-12 gap-12"
      >
        {/* Visit info */}
        <motion.div variants={fadeUp} className="lg:col-span-5">
          <div className="text-xs font-medium tracking-widest text-gold mb-4">
            VISIT US
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-white leading-[1.1] mb-10">
            Come see the cars in person.
          </h2>

          <div className="space-y-6">
            {[
              { k: "Address", v: "Oba-Ile Road, Akure, Ondo State" },
              { k: "Phone", v: "+234 800 000 0000" },
              { k: "Email", v: "hello@akurecleancars.com" },
              {
                k: "Hours",
                v: "Mon–Fri 8am–6pm · Sat 9am–4pm · Sun closed",
              },
            ].map((item) => (
              <div
                key={item.k}
                className="pb-6 border-b border-slate-200 dark:border-slate-800 last:border-0"
              >
                <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium mb-2">
                  {item.k}
                </div>
                <div className="text-ink dark:text-white">{item.v}</div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.341779907738!2d5.138697674364383!3d7.3154489134553105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104789530d8e85df%3A0x9b50688313708af2!2sFuta%20North%20Gate%2C%20Akure%20340110%2C%20Ondo!5e0!3m2!1sen!2sng!4v1791378300056!5m2!1sen!2sng"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Akure Clean Cars location"
            ></iframe>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div variants={fadeUp} className="lg:col-span-7">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F141A] p-8 md:p-10">
            <div className="text-xs font-medium tracking-widest text-gold mb-4">
              SEND A MESSAGE
            </div>
            <h2 className="font-display text-3xl text-ink dark:text-white leading-[1.1] mb-8">
              Tell us what you're looking for.
            </h2>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 text-ink dark:text-white placeholder-slate-400 py-2 focus:outline-none focus:border-ink dark:focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+234..."
                    className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 text-ink dark:text-white placeholder-slate-400 py-2 focus:outline-none focus:border-ink dark:focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium mb-2">
                  What are you interested in?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Toyota Camry, SUV under ₦40M, test drive..."
                  className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 text-ink dark:text-white placeholder-slate-400 py-2 focus:outline-none focus:border-ink dark:focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Anything else we should know..."
                  className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 text-ink dark:text-white placeholder-slate-400 py-2 focus:outline-none focus:border-ink dark:focus:border-white transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full md:w-auto px-8 py-4 font-medium rounded-full transition-all"
                style={{ backgroundColor: "#0F172A", color: "#ffffff" }}
              >
                Send message →
              </button>

              <p className="text-xs text-slate-500 dark:text-slate-400 pt-2">
                Demo only — form doesn't submit yet. In the real build, this
                sends to email and WhatsApp instantly.
              </p>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}