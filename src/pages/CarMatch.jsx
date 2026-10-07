import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cars } from "../data/cars";
import CarCard from "../components/CarCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const questions = [
  {
    q: "What's your budget?",
    key: "budget",
    options: [
      { label: "Under ₦20M", value: 20000000 },
      { label: "₦20M – ₦40M", value: 40000000 },
      { label: "₦40M – ₦70M", value: 70000000 },
      { label: "No limit", value: 999999999 },
    ],
  },
  {
    q: "What will you mostly use it for?",
    key: "use",
    options: [
      { label: "Daily city driving", value: "city" },
      { label: "Family & school runs", value: "family" },
      { label: "Business & comfort", value: "business" },
      { label: "Long trips & highways", value: "travel" },
    ],
  },
  {
    q: "Body style preference?",
    key: "body",
    options: [
      { label: "Sedan", value: "Sedan" },
      { label: "SUV", value: "SUV" },
      { label: "Coupé", value: "Coupé" },
      { label: "No preference", value: "any" },
    ],
  },
  {
    q: "Fuel type?",
    key: "fuel",
    options: [
      { label: "Petrol", value: "Petrol" },
      { label: "Hybrid", value: "Hybrid" },
      { label: "Any", value: "any" },
    ],
  },
  {
    q: "What matters most?",
    key: "priority",
    options: [
      { label: "Low mileage", value: "mileage" },
      { label: "Newest year", value: "year" },
      { label: "Best price", value: "price" },
      { label: "Brand prestige", value: "brand" },
    ],
  },
];

const prestigious = ["Mercedes", "Lexus", "Toyota", "BMW"];

function scoreCar(car, answers) {
  let score = 0;
  let max = 0;

  max += 30;
  if (car.price <= answers.budget) score += 30;
  else if (car.price <= answers.budget * 1.15) score += 15;

  max += 15;
  if (answers.body === "any" || car.body === answers.body) score += 15;

  max += 10;
  if (answers.fuel === "any" || car.fuel === answers.fuel) score += 10;

  max += 20;
  if (answers.use === "family" && car.body === "SUV") score += 20;
  else if (answers.use === "city" && car.body === "Sedan") score += 20;
  else if (
    answers.use === "business" &&
    prestigious.some((b) => car.name.includes(b))
  )
    score += 20;
  else if (answers.use === "travel" && car.body === "SUV") score += 20;
  else score += 8;

  max += 25;
  if (answers.priority === "mileage")
    score += Math.max(0, 25 - car.mileage / 4000);
  else if (answers.priority === "year")
    score += Math.max(0, 25 - (2026 - car.year) * 4);
  else if (answers.priority === "price")
    score += Math.max(0, 25 - car.price / 5e6);
  else if (answers.priority === "brand")
    score += prestigious.some((b) => car.name.includes(b)) ? 25 : 10;

  return Math.min(99, Math.round((score / max) * 100));
}

export default function CarMatch() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const pick = (key, value) => {
    const next = { ...answers, [key]: value };
    setAnswers(next);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        const scored = cars
          .map((c) => ({ car: c, score: scoreCar(c, next) }))
          .sort((a, b) => b.score - a.score)
          .slice(0, 3);
        setResults(scored);
        setLoading(false);
      }, 1600);
    }
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setResults(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* ============ HEADER ============ */}
      {!results && (
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
              SIGNATURE TOOL — EXCLUSIVE
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-ink dark:text-white"
            >
              Akure Car Match
              <em className="text-brand-600">.</em>
            </motion.h1>
          </div>
          <motion.div variants={fadeUp} className="lg:col-span-5 lg:pb-3">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Five questions. Three recommendations from our inventory — each
              scored against your answers. No sign-up, no pressure, no calls
              unless you ask.
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* ============ QUIZ ============ */}
      {!results && !loading && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          {/* Progress */}
          <div className="mb-12">
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
                Question {step + 1} of {questions.length}
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
                {Math.round(((step + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="flex gap-1.5">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                    i <= step ? "bg-ink dark:bg-white" : "bg-slate-200 dark:bg-slate-800"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Question card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F141A] p-8 md:p-12"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink dark:text-white leading-[1.05] mb-10">
                {questions[step].q}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => pick(questions[step].key, opt.value)}
                    className="group text-left px-6 py-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-ink dark:hover:border-white bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
                  >
                    <span className="flex items-center justify-between">
                      <span className="font-medium text-ink dark:text-white">
                        {opt.label}
                      </span>
                      <span className="text-slate-400 group-hover:text-ink dark:group-hover:text-white transition-colors">
                        →
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-6 text-xs uppercase tracking-widest font-medium text-slate-500 dark:text-slate-400 hover:text-ink dark:hover:text-white transition-colors"
            >
              ← Back
            </button>
          )}
        </motion.div>
      )}

      {/* ============ LOADING ============ */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-32"
        >
          <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
            <div className="absolute inset-0 rounded-full border-2 border-slate-200 dark:border-slate-800" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-ink dark:border-t-white"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <span className="font-display text-2xl text-ink dark:text-white">
              9
            </span>
          </div>
          <div className="font-display text-3xl text-ink dark:text-white mb-2">
            Matching you with the right cars.
          </div>
          <p className="text-slate-500 dark:text-slate-400">
            Scoring {cars.length} vehicles against your answers
          </p>
        </motion.div>
      )}

      {/* ============ RESULTS ============ */}
      {results && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          {/* Results header */}
          <motion.div variants={fadeUp} className="grid lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-slate-500 dark:text-slate-400 mb-6">
                <span className="w-8 h-px bg-gold" />
                YOUR MATCHES
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-ink dark:text-white">
                Three cars,
                <br />
                <em className="text-brand-600">picked for you.</em>
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pb-3">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Each car is scored against your five answers. Higher means
                closer fit — click any card to see the full vehicle.
              </p>
            </div>
          </motion.div>

          {/* Result cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {results.map(({ car, score }, i) => (
              <motion.div key={car.id} variants={fadeUp}>
                <div className="relative">
                  <div className="absolute -top-3 -left-3 z-10 w-10 h-10 rounded-full flex items-center justify-center font-display text-lg bg-ink dark:bg-white text-white dark:text-ink shadow-lg">
                    {i + 1}
                  </div>
                  <CarCard car={car} matchScore={score} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 justify-center pt-8 border-t border-slate-200 dark:border-slate-800"
          >
            <button
              onClick={restart}
              className="inline-flex items-center gap-2 px-6 py-3.5 font-medium rounded-full border border-slate-300 dark:border-slate-700 text-ink dark:text-white hover:border-ink dark:hover:border-white transition-colors"
            >
              Retake the quiz
            </button>
            <a
              href="/inventory"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-medium rounded-full transition-all"
              style={{ backgroundColor: "#0F172A", color: "#ffffff" }}
            >
              Browse full inventory →
            </a>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}