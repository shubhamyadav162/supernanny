"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Our Nannies', href: '/nannies' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 hero-gradient py-6 transition-all duration-300"
    >
      <div className="bg-sunshine text-charcoal text-center py-1 font-semibold text-sm">
        Exclusively serving Mumbai – Your trusted childcare partner in the city
      </div>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-baloo text-2xl font-bold text-white drop-shadow-md">
              SuperNanny
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-quicksand font-semibold text-white hover:text-sunshine transition-colors drop-shadow-md"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book-now"
              className="btn-primary ml-4 bg-bubblegum text-white hover:bg-sunshine hover:text-charcoal"
            >
              Book a Nanny
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-6 flex flex-col justify-around transition-all ${isOpen ? 'transform rotate-180' : ''}`}>
              <span className="block h-0.5 w-6 rounded-full transition-all bg-white" />
              <span className="block h-0.5 w-6 rounded-full transition-all bg-white" />
              <span className="block h-0.5 w-6 rounded-full transition-all bg-white" />
            </div>
          </button>

          {/* Login and Sign Up Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/auth/login" className="text-gray-700 hover:text-gray-900">
              Login
            </Link>
            <Link href="/auth/register" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Sign Up
            </Link>
            <Link href="/profile" className="text-white hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9.003 9.003 0 0112 15a9.003 9.003 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-lg p-4"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-quicksand font-semibold text-center text-white hover:text-sunshine"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/book-now"
                  className="btn-primary text-center bg-bubblegum text-white hover:bg-sunshine hover:text-charcoal"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Nanny
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header; 