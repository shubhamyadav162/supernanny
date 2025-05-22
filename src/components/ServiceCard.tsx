"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  price: string;
  frequency?: string;
  features: string[];
  color: 'pink' | 'blue' | 'green' | 'purple';
  isPopular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  frequency = '/month',
  features,
  color,
  isPopular = false,
}) => {
  // Map color to appropriate Tailwind classes
  const colorMap = {
    pink: 'bg-white border-bubblegum',
    blue: 'bg-white border-skyblue',
    green: 'bg-white border-mint',
    purple: 'bg-white border-lavender',
  };

  const buttonColorMap = {
    pink: 'bg-bubblegum hover:bg-bubblegum/90',
    blue: 'bg-skyblue hover:bg-skyblue/90',
    green: 'bg-mint hover:bg-mint/90 text-charcoal',
    purple: 'bg-lavender hover:bg-lavender/90',
  };

  return (
    <motion.div
      className={`rounded-2xl shadow-lg p-8 border-t-4 ${colorMap[color]} relative overflow-hidden`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {isPopular && (
        <div className="absolute top-4 right-4 bg-bubblegum text-white py-1 px-4 rounded-full text-sm font-bold">
          Popular
        </div>
      )}
      <div className="text-center">
        <h3 className="font-quicksand text-2xl font-bold mb-4">{title}</h3>
        <div className="text-4xl font-bold font-quicksand mb-2">
          ₹{price}
          <span className="text-base font-normal text-gray-600 ml-1">{frequency}</span>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-bubblegum to-skyblue mx-auto my-8"></div>
        <ul className="space-y-4 mb-8 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-bubblegum mt-1 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`w-full py-3 px-6 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition duration-300 ${buttonColorMap[color]}`}>
          Select Plan
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 