import React from 'react';
import { motion } from 'framer-motion';

interface TimelineStep {
  number: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="relative py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Vertical Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300 transform -translate-x-1/2" />

      <div className="space-y-8 md:space-y-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative"
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-5/12">
                  <motion.div
                    className="bg-white rounded-lg p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Circle with Icon */}
                <div className="w-full md:w-2/12 flex justify-center">
                  <motion.div
                    className="relative z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    {/* Outer Ring Animation */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-100"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      style={{
                        width: '80px',
                        height: '80px',
                        opacity: 0.3,
                      }}
                    />

                    {/* Main Circle */}
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                      <Icon className="w-10 h-10 text-white" />

                      {/* Number Badge */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-sm text-gray-900 shadow-md"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      >
                        {step.number}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block w-5/12" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProcessTimeline;
