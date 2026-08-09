import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div
        onClick={onClick}
        className="bg-white rounded-lg shadow-lg p-8 h-full cursor-pointer border border-transparent hover:border-blue-500/20 transition-all"
      >
        <motion.div
          className="mb-6 inline-block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            <Icon className="w-12 h-12 text-blue-600" />
          </motion.div>
        </motion.div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <motion.div
          className="flex items-center text-blue-600 font-semibold"
          whileHover={{ x: 8 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <span>Learn More</span>
          <motion.span
            className="ml-2"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
