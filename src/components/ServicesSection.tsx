"use client";

import React from 'react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const basicFeatures = [
    'Professional nanny care',
    'Background verified nannies',
    'Basic childcare services',
    'Daily activity report',
    'Emergency support',
  ];

  const standardFeatures = [
    'All Basic package features',
    'Educational activities',
    'Meal preparation',
    'Priority support',
    'Monthly report & feedback',
    'Replacement guarantee',
  ];

  const premiumFeatures = [
    'All Standard package features',
    'Customized childcare plan',
    'Specialized activities',
    'Dedicated support manager',
    'Video monitoring option',
    'Flexible scheduling',
    'Special event preparation',
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold font-quicksand mb-6 text-gradient">
            Our Service Packages
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect care package that suits your family's needs with
            our flexible options
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              title="Basic Care"
              price="12,000"
              features={basicFeatures}
              color="pink"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:scale-105 md:-translate-y-4"
          >
            <ServiceCard
              title="Standard Care"
              price="16,000"
              features={standardFeatures}
              color="blue"
              isPopular={true}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              title="Premium Care"
              price="Custom"
              frequency=""
              features={premiumFeatures}
              color="green"
            />
          </motion.div>
        </div>
        
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 mb-8">
            Looking for specialized care? Contact us for a custom solution.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 