import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  value: string;
  className?: string;
}

const CountUp = ({ value, className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numeric = parseInt(value.replace(/\D/g, ""));
    if (isNaN(numeric)) {
      setDisplay(value);
      return;
    }

    const suffix = value.replace(/[\d]/g, "");
    const duration = 1500;
    const steps = 40;
    const increment = numeric / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), numeric);
      setDisplay(current + suffix);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default CountUp;
