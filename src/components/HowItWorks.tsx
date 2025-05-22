"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface StepProps {
  number: number;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, color, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`w-20 h-20 ${color} rounded-full flex items-center justify-center mb-4 relative`}
      >
        <span className="absolute -top-2 -right-2 w-8 h-8 bg-bubblegum text-white rounded-full flex items-center justify-center font-bold text-lg">
          {number}
        </span>
        {icon}
      </div>
      <h3 className="font-quicksand text-xl font-bold mb-2">{title}</h3>
      <p className="text-charcoal opacity-80">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-20 bg-lightgray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">How It Works</h2>
          <p className="subtitle">
            Getting started with SuperNanny is simple and straightforward
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-bubblegum bg-opacity-30 z-0">
            <div className="absolute left-1/4 top-1/2 w-4 h-4 bg-bubblegum rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute left-2/4 top-1/2 w-4 h-4 bg-bubblegum rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute left-3/4 top-1/2 w-4 h-4 bg-bubblegum rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Step
                number={1}
                title="Choose Package"
                description="Select the care package that best fits your family's needs"
                color="bg-bubblegum bg-opacity-20"
                icon={
                  <svg
                    className="w-10 h-10 text-bubblegum"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                }
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Step
                number={2}
                title="Browse Nannies"
                description="Explore our verified and trained nannies based on your requirements"
                color="bg-skyblue bg-opacity-20"
                icon={
                  <svg
                    className="w-10 h-10 text-skyblue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                }
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Step
                number={3}
                title="Schedule Service"
                description="Choose the dates and times that work best for your family"
                color="bg-sunshine bg-opacity-20"
                icon={
                  <svg
                    className="w-10 h-10 text-sunshine"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                }
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Step
                number={4}
                title="Enjoy Peace of Mind"
                description="Relax knowing your children are in safe, capable hands"
                color="bg-mint bg-opacity-20"
                icon={
                  <svg
                    className="w-10 h-10 text-mint"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-lg">
            Ready to experience the SuperNanny difference?
          </p>
          <button className="btn-primary">Get Started Now</button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 