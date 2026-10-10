import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { whatsappLink, site } from "../data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function SellYourCar() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    fuel: "Petrol",
    transmission: "Automatic",
    body: "Sedan",
    condition: "Excellent",
    askPrice: "",
    name: "",
    phone: "",
    email: "",
    contact: "WhatsApp",
    notes: "",
  });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({
      make: "",
      model: "",
      year: "",
      mileage: "",
      fuel: "Petrol",
      transmission: "Automatic",
      body: "Sedan",
      condition: "Excellent",
      askPrice: "",
      name: "",
      phone: "",
      email: "",
      contact: "WhatsApp",
      notes: "",
    });
  };

  const inputClass =
    "w-full bg-transparent border-b border-slate-300 dark:border-slate-700 text-navy dark:text-white placeholder-slate-400 py-2 focus:outline-none focus:border-orange-500 transition-colors";
  const labelClass =
    "block text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold mb-2";

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
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400 mb-6"
          >
            <span className="w-8 h-px bg-orange-500" />
            SELL OR TRADE-IN
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-navy dark:text-white"
          >
            Your clean car
            <br />
            deserves a <span className="text-orange-500">clean sale.</span>
          </motion.h1>
        </div>
        <motion.div variants={fadeUp} className="lg:col-span-5 lg:pb-3">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            Tell us about your car. We'll review it, arrange a quick inspection,
            and give you a fair offer within 24 hours. No scams. No strangers.
            No stress.
          </p>
        </motion.div>
      </motion.div>

      {/* ============ WHY SELL TO US ============ */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="grid lg:grid-cols-12 gap-12 mb-24"
      >
        <motion.div variants={fadeUp} className="lg:col-span-5">
          <div className="text-xs font-semibold tracking-widest text-orange-500 mb-4">
            WHY SELL TO US
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy dark:text-white leading-[1.05] mb-6">
            Skip the stress of a private sale.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Selling privately means strangers calling, lowball offers, and
            paperwork headaches. We handle all of it — and pay you fairly for
            your car.
          </p>
        </motion.div>

        <div className="lg:col-span-7 lg:pl-12">
          {[
            {
              n: "01",
              t: "Fair offer in 24 hours",
              d: "Send us the details. We'll review and get back to you with a genuine offer — usually same day, always within 24 hours.",
            },
            {
              n: "02",
              t: "No scams. No strangers.",
              d: "No random buyers showing up at your house. We're a real dealership in Akure with a track record you can verify.",
            },
            {
              n: "03",
              t: "We handle the paperwork",
              d: "Change of ownership, transfer, documentation — we sort all of it. You just show up and get paid.",
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
      </motion.div>

      {/* ============ FORM OR SUCCESS ============ */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="grid lg:grid-cols-12 gap-12"
      >
        {submitted ? (
          /* ---------- SUCCESS ---------- */
          <motion.div variants={fadeUp} className="lg:col-span-8 lg:col-start-3">
            <div className="rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0A1220] p-10 md:p-14 text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-navy dark:text-white leading-tight mb-4">
                We got it.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto mb-8">
                Thanks, {form.name || "friend"}. Our team will review your{" "}
                {form.make} {form.model} and get back to you within 24 hours at{" "}
                <strong className="text-navy dark:text-white">
                  {form.phone || "the number you gave us"}
                </strong>
                .
              </p>

              <div className="max-w-md mx-auto text-left rounded-2xl border border-slate-200 dark:border-white/5 p-6 mb-8 space-y-3">
                <div className="text-xs uppercase tracking-widest text-orange-500 font-semibold mb-2">
                  What happens next
                </div>
                {[
                  "Our team reviews your submission",
                  "We call or WhatsApp you within 24 hours",
                  "Arrange a 20-minute inspection in Akure",
                  "Get paid — same day, cash or transfer",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-display text-orange-500 text-sm shrink-0 w-5">
                      0{i + 1}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full border-2 border-slate-300 dark:border-slate-700 text-navy dark:text-white hover:border-orange-500 dark:hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  Submit another car
                </button>
                <a
                  href={whatsappLink(
                    `Hi ${site.brandName}, I just submitted my ${form.make || "car"} ${form.model || ""} ${form.year ? `(${form.year})` : ""} on your website. Looking forward to hearing from you.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors shadow-lg shadow-orange-500/20"
                >
                  Message us on WhatsApp →
                </a>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-8">
                Demo only — in the real build this would send to your email + WhatsApp.
              </p>
            </div>
          </motion.div>
        ) : (
          /* ---------- FORM ---------- */
          <>
            {/* Left column — form intro */}
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="text-xs font-semibold tracking-widest text-orange-500 mb-4">
                  SELL YOUR CAR
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-navy dark:text-white leading-[1.1] mb-6">
                  Tell us about your car.
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  The more detail you give us, the faster we can make an offer.
                  It takes about 3 minutes.
                </p>

                <div className="pt-6 border-t border-slate-200 dark:border-white/5 space-y-3">
                  {[
                    "No obligation to sell",
                    "Free inspection at our lot",
                    "We handle paperwork",
                    "Get paid same day",
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
                      <span className="text-slate-600 dark:text-slate-400">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right column — the form */}
            <motion.div variants={fadeUp} className="lg:col-span-8">
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0A1220] p-8 md:p-10 space-y-10"
              >
                {/* SECTION 1 — About your car */}
                <div>
                  <div className="text-xs font-semibold tracking-widest text-orange-500 mb-6">
                    01 · ABOUT YOUR CAR
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className={labelClass}>Make</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Toyota"
                        value={form.make}
                        onChange={update("make")}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Model</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Camry XSE"
                        value={form.model}
                        onChange={update("model")}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className={labelClass}>Year</label>
                      <input
                        required
                        type="number"
                        placeholder="e.g. 2021"
                        min="1990"
                        max="2026"
                        value={form.year}
                        onChange={update("year")}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Mileage (km)</label>
                      <input
                        required
                        type="number"
                        placeholder="e.g. 42000"
                        value={form.mileage}
                        onChange={update("mileage")}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    <div>
                      <label className={labelClass}>Fuel</label>
                      <select
                        value={form.fuel}
                        onChange={update("fuel")}
                        className={inputClass + " cursor-pointer"}
                      >
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>Hybrid</option>
                        <option>Electric</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Transmission</label>
                      <select
                        value={form.transmission}
                        onChange={update("transmission")}
                        className={inputClass + " cursor-pointer"}
                      >
                        <option>Automatic</option>
                        <option>Manual</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Body</label>
                      <select
                        value={form.body}
                        onChange={update("body")}
                        className={inputClass + " cursor-pointer"}
                      >
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Coupé</option>
                        <option>Hatchback</option>
                        <option>Pickup</option>
                        <option>Van</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* SECTION 2 — Condition & price */}
                <div className="pt-10 border-t border-slate-200 dark:border-white/5">
                  <div className="text-xs font-semibold tracking-widest text-orange-500 mb-6">
                    02 · CONDITION & PRICE
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Condition</label>
                      <select
                        value={form.condition}
                        onChange={update("condition")}
                        className={inputClass + " cursor-pointer"}
                      >
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                        <option>Needs work</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Asking price (₦)</label>
                      <input
                        type="text"
                        placeholder="e.g. 12,500,000"
                        value={form.askPrice}
                        onChange={update("askPrice")}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Photo dropzone placeholder */}
                  <div className="mt-6">
                    <label className={labelClass}>Photos</label>
                    <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-white/[0.02] p-8 text-center">
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 text-orange-500"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                      </div>
                      <div className="text-sm font-semibold text-navy dark:text-white mb-1">
                        Drag photos here or click to upload
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Exterior, interior, engine — up to 10 photos
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 3 — Your details */}
                <div className="pt-10 border-t border-slate-200 dark:border-white/5">
                  <div className="text-xs font-semibold tracking-widest text-orange-500 mb-6">
                    03 · YOUR DETAILS
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className={labelClass}>Full name</label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={update("name")}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input
                        required
                        type="tel"
                        placeholder="+234..."
                        value={form.phone}
                        onChange={update("phone")}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className={labelClass}>Email</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={update("email")}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Preferred contact</label>
                      <select
                        value={form.contact}
                        onChange={update("contact")}
                        className={inputClass + " cursor-pointer"}
                      >
                        <option>WhatsApp</option>
                        <option>Phone call</option>
                        <option>Email</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Anything else?</label>
                    <textarea
                      rows="4"
                      placeholder="Service history, past repairs, extra features..."
                      value={form.notes}
                      onChange={update("notes")}
                      className={inputClass + " resize-none"}
                    ></textarea>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6 border-t border-slate-200 dark:border-white/5">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 font-semibold rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors shadow-lg shadow-orange-500/20"
                  >
                    Submit my car →
                  </button>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                    No obligation to sell. We'll review and contact you within 24 hours.
                  </p>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}