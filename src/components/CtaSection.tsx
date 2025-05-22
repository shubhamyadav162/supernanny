"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="py-20 bg-bubblegum relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-20"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full opacity-20"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full opacity-10"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-quicksand font-bold mb-4">
                Mumbai Families: Give Your Children the Care They Deserve
              </h2>
              <p className="text-lg text-charcoal mb-8 max-w-3xl mx-auto">
                Join thousands of satisfied parents in Mumbai who trust SuperNanny for professional, reliable childcare. Start your journey today!
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/book-now" className="btn-primary">
                Book a Nanny Now
              </Link>
              <Link
                href="/contact"
                className="bg-white text-bubblegum border-2 border-bubblegum font-quicksand font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
              >
                Schedule a Consultation
              </Link>
            </motion.div>
            
            <motion.p
              className="mt-6 text-sm text-charcoal opacity-70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              No commitment required. 100% satisfaction guaranteed.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 