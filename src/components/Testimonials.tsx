"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-6 h-6 ${
            star <= rating ? 'text-sunshine' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      ))}
    </div>
  );
};

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, rating }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="mb-4">
        <StarRating rating={rating} />
      </div>
      <p className="text-charcoal mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-bubblegum rounded-full flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-quicksand font-bold">{name}</h4>
          <p className="text-sm text-charcoal opacity-70">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "SuperNanny has been a lifesaver for our family. Our nanny is amazing with our twins and gives us peace of mind while we're at work.",
      name: 'Priya Sharma',
      role: 'Mother of twins',
      rating: 5,
    },
    {
      quote:
        "I was hesitant to hire a nanny at first, but SuperNanny's thorough vetting process made me comfortable. Now I couldn't imagine life without our nanny's help!",
      name: 'Rahul Mehta',
      role: 'Father of three',
      rating: 5,
    },
    {
      quote:
        "What sets SuperNanny apart is their professionalism and attention to detail. Our nanny is not just caring but also helps our daughter with her studies.",
      name: 'Ananya Patel',
      role: 'Working mother',
      rating: 4,
    },
    {
      quote:
        "The flexibility of SuperNanny's services is what makes them special. We can adjust hours as needed, and their customer service is always responsive.",
      name: 'Vikram Singh',
      role: 'Entrepreneur',
      rating: 5,
    },
    {
      quote:
        "Our SuperNanny is an extension of our family now. She understands our children's needs and has been with us for over a year. Highly recommended!",
      name: 'Deepa Joshi',
      role: 'Doctor',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-skyblue bg-opacity-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">What Parents Say</h2>
          <p className="subtitle">
            Don't just take our word for it. Hear directly from families who have
            experienced the SuperNanny difference
          </p>
        </motion.div>

        <div className="mt-12 relative">
          <div className="hidden md:flex overflow-hidden">
            <motion.div
              className="flex space-x-6"
              animate={{ x: -currentIndex * (100 / 3) + '%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0"
                >
                  <Testimonial
                    quote={testimonial.quote}
                    name={testimonial.name}
                    role={testimonial.role}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile view - single testimonial */}
          <div className="md:hidden">
            <Testimonial
              quote={testimonials[currentIndex].quote}
              name={testimonials[currentIndex].name}
              role={testimonials[currentIndex].role}
              rating={testimonials[currentIndex].rating}
            />
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-bubblegum"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {testimonials.slice(0, 3).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-bubblegum' : 'bg-gray-300'
                }`}
              />
            ))}
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-bubblegum"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 