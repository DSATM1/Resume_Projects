import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  designation: string;
  image: string;
  rating: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  designation,
  image,
  rating,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8 h-full border border-blue-100 hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Star Rating */}
      <motion.div
        className="flex gap-1 mb-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.2, rotate: 12 }}
          >
            <Star
              className={`w-5 h-5 ${
                i < rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Quote - Line-by-line reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-gray-700 text-lg mb-8 italic leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          "{quote}"
        </motion.p>
      </motion.div>

      {/* Author Info */}
      <motion.div
        className="flex items-center gap-4 pt-6 border-t border-gray-200"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Avatar */}
        <motion.div
          className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 flex-shrink-0"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={image}
            alt={author}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Author Details */}
        <div>
          <motion.h4
            className="font-bold text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {author}
          </motion.h4>
          <motion.p
            className="text-sm text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {designation}
          </motion.p>
        </div>
      </motion.div>

      {/* Decorative Quote Mark */}
      <motion.div
        className="absolute top-6 right-8 text-6xl text-blue-200 opacity-50 font-serif"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        "
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
