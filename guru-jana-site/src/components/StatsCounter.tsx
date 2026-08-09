import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface StatsCounterProps {
  endValue: number;
  label: string;
  suffix?: string;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({
  endValue,
  label,
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 2;
          const steps = 60;
          const increment = endValue / steps;
          let current = 0;
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            current = Math.min(increment * frame, endValue);
            setCount(Math.floor(current));

            if (frame >= steps) {
              clearInterval(timer);
              setCount(endValue);
            }
          }, (duration * 1000) / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [endValue, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-8"
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {count}
        <span className="text-3xl md:text-4xl">{suffix}</span>
      </motion.div>
      <p className="text-gray-600 text-lg font-medium">{label}</p>
    </motion.div>
  );
};

export default StatsCounter;
