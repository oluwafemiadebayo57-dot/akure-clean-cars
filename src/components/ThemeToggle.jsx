import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-14 h-8 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors"
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-brand-500 shadow flex items-center justify-center text-xs transition-transform ${
          theme === "dark" ? "translate-x-6" : ""
        }`}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}