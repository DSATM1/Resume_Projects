import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  count?: number;
  colors?: string[];
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({
  count = 5,
  colors = [
    'from-blue-400 to-blue-600',
    'from-indigo-400 to-indigo-600',
    'from-purple-400 to-purple-600',
    'from-blue-300 to-blue-500',
    'from-indigo-300 to-indigo-500',
  ],
}) => {
  const generatePosition = (index: number) => {
    return {
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      size: Math.random() * 80 + 40,
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 2,
    };
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, index) => {
        const position = generatePosition(index);
        const color = colors[index % colors.length];

        return (
          <motion.div
            key={index}
            className={`absolute rounded-full blur-2xl opacity-30 bg-gradient-to-br ${color}`}
            style={{
              top: position.top,
              left: position.left,
              width: position.size,
              height: position.size,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: position.duration,
              delay: position.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}

      {/* Additional slower moving background elements */}
      {[...Array(Math.floor(count / 2))].map((_, index) => {
        const position = {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: Math.random() * 150 + 100,
          duration: Math.random() * 5 + 8,
          delay: Math.random() * 3,
        };
        const color = colors[(index + count) % colors.length];

        return (
          <motion.div
            key={`bg-${index}`}
            className={`absolute rounded-full blur-3xl opacity-20 bg-gradient-to-br ${color}`}
            style={{
              top: position.top,
              left: position.left,
              width: position.size,
              height: position.size,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, -50, 0],
            }}
            transition={{
              duration: position.duration,
              delay: position.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;
