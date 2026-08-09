import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SocialLink {
  icon?: React.ComponentType<{ className?: string }>;
  url?: string;
  label?: string;
  linkedin?: string;
  email?: string;
}

interface TeamCardProps {
  name: string;
  designation: string;
  image: string;
  bio: string;
  socialLinks?: SocialLink[] | Record<string, string>;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  name,
  designation,
  image,
  bio,
  socialLinks,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative h-full rounded-lg overflow-hidden bg-white shadow-lg"
    >
      {/* Image Container */}
      <motion.div
        className="relative w-full h-72 overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Info Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-semibold mb-4">{designation}</p>

        {/* Bio - Animated Reveal */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social Links - Staggered Animation */}
        <motion.div className="flex gap-3 justify-center">
          <AnimatePresence>
            {isHovered &&
              (Array.isArray(socialLinks) 
                ? socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={index}
                        href={link.url}
                        title={link.label}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.3,
                          type: 'spring',
                          stiffness: 400,
                          damping: 15,
                        }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })
                : Object.entries(socialLinks || {}).map(([key, value], index) => (
                    <motion.a
                      key={key}
                      href={key === 'linkedin' ? `https://linkedin.com/in/${value}` : `mailto:${value}`}
                      title={key.charAt(0).toUpperCase() + key.slice(1)}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                        type: 'spring',
                        stiffness: 400,
                        damping: 15,
                      }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                      target={key === 'email' ? undefined : '_blank'}
                      rel={key === 'email' ? undefined : 'noopener noreferrer'}
                    >
                      {key === 'linkedin' ? '💼' : '📧'}
                    </motion.a>
                  ))
              )
            }
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
