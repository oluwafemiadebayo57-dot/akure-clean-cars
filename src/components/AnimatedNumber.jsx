import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedNumber({ value, duration = 1.8, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Parse "1,200+" into { prefix: "", number: 1200, suffix: "+" }
    const match = String(value).match(/^([^\d]*)([\d,\.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const isFloat = numStr.includes(".");
    const start = performance.now();

    const tick = (now) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo — feels premium
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = target * eased;

      let formatted;
      if (isFloat) {
        formatted = current.toFixed(1);
      } else {
        formatted = Math.round(current).toLocaleString();
      }

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(value); // snap to exact final value
    };

    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}