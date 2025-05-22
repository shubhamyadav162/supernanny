"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const scrollToHowItWorks = () => {
    const section = document.getElementById('how-it-works');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Text */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Find Your Perfect
              </motion.span>
              <br />
              <motion.span
                className="text-sunshine"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Nanny
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Today
              </motion.span>
            </h1>

            <motion.p
              className="subheading text-xl mb-8 max-w-xl animate-fadeInUp"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              SuperNanny connects caring, qualified nannies with families across India. Experience peace of mind knowing your children are in good hands.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 animate-fadeInUp"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <Link href="/nannies" className="btn-primary pulse text-lg px-8 py-4">
                Find Your Nanny
              </Link>
              <button onClick={scrollToHowItWorks} className="btn-secondary bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white text-lg px-8 py-4">
                How It Works
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/mm.png"
              alt="Mother and child"
              width={600}
              height={600}
              priority
              className="rounded-lg shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 