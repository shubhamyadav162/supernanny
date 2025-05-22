"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 min-h-[100vh] flex items-center justify-center text-white relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Text */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-baloo text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Mumbai's Childcare
              </motion.span>
              <br />
              <motion.span
                className="text-sunshine"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Superheroes
              </motion.span>
            </h1>
            
            <motion.p 
              className="font-nunito text-xl lg:text-2xl mb-10 opacity-90 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Providing Mumbai families with quality, trustworthy childcare that empowers parents and nurtures children. Our verified nannies bring joy, education, and safety to homes across the city.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Link href="/book-now" className="btn-primary text-lg px-8 py-4">
                Book a Nanny
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-charcoal">
                View Services
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Hero Image: Mother and Child */}
          <motion.div
            className="lg:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/mm.png"
              alt="Mother and child"
              width={600}
              height={600}
              className="rounded-lg shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 