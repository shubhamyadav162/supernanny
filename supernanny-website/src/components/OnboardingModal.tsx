"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Framer Motion variants for step transitions
const containerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

export default function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const totalSteps = 6;
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    serviceType: '',
    numChildren: '',
    childAges: ['',''],
    date: '',
    time: '',
    addOns: [] as string[],
    name: '',
    email: '',
    phone: '',
    instructions: '',
    selectedPlan: ''
  });
  const router = useRouter();

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // After final step, redirect to payment gateway page
      const params = new URLSearchParams({
        service: data.serviceType,
        numChildren: data.numChildren,
        date: data.date,
        time: data.time,
        name: data.name,
        email: data.email,
        phone: data.phone,
        selectedPlan: data.selectedPlan,
        instructions: data.instructions,
        childAges: data.childAges.join(','),
        addOns: data.addOns.join(',')
      });
      router.push(`/checkout?${params.toString()}`);
      onClose();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else onClose();
  };

  const handleChange = (field: keyof typeof data, value: any) => {
    setData({ ...data, [field]: value });
  };

  const stepTitles = [
    'Select Service Type',
    'Children Details',
    'Customize Your Booking',
    'Contact Information',
    'Choose Your Plan',
    'Special Instructions'
  ];

  const serviceOptions = ['Full-time Nanny', 'Part-time Nanny', 'Date Night', 'Special Needs Nanny'];
  const addOnOptions = ['Homework Help', 'Meal Prep', 'Light Housekeeping', 'Laundry Assistance'];
  const planOptions = [
    { label: '6 hours - ₹12,000/month', value: '6|12000' },
    { label: '8 hours - ₹16,000/month', value: '8|16000' },
    { label: '10 hours - ₹20,000/month', value: '10|20000' },
    { label: '11 hours - ₹22,000/month', value: '11|22000' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: 'spring' }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 relative max-h-[80vh] flex flex-col"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-charcoal hover:text-primary text-xl">✕</button>
            <h2 className="font-quicksand font-bold text-2xl text-primary text-center mb-6">{stepTitles[step-1]}</h2>
            <div className="flex items-center justify-center space-x-2 mb-6">
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map(i => (
                <React.Fragment key={i}>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= i ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>{i}</div>
                  {i < totalSteps && <div className={`flex-1 h-1 ${step > i ? 'bg-primary' : 'bg-gray-200'}`}></div>}
                </React.Fragment>
              ))}
            </div>
            <div className="flex-1 overflow-y-auto pr-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={containerVariants}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  {step === 1 && (
                    <div className="space-y-3">
                      {serviceOptions.map(option => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer p-4 border border-gray-300 rounded-xl hover:shadow-md transition">
                          <input
                            type="radio"
                            name="serviceType"
                            value={option}
                            checked={data.serviceType === option}
                            onChange={(e) => handleChange('serviceType', e.target.value)}
                            className="form-radio h-5 w-5 text-primary"
                          />
                          <span className="text-charcoal">{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                  {step === 2 && (
                    <div className="space-y-4">
                      <label className="block">
                        <span className="text-charcoal">Number of Children</span>
                        <input
                          type="number"
                          min="1"
                          value={data.numChildren}
                          onChange={(e) => handleChange('numChildren', e.target.value)}
                          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                          placeholder="e.g., 2"
                        />
                      </label>
                      {Array.from({ length: Number(data.numChildren) || 1 }, (_, idx) => (
                        <label key={idx} className="block">
                          <span className="text-charcoal">Child {idx+1} Age</span>
                          <input
                            type="number"
                            min="0"
                            value={data.childAges[idx] || ''}
                            onChange={(e) => {
                              const ages = [...data.childAges];
                              ages[idx] = e.target.value;
                              handleChange('childAges', ages);
                            }}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                            placeholder="e.g., 4"
                          />
                        </label>
                      ))}
                      <div className="flex space-x-4">
                        <label className="block flex-1">
                          <span className="text-charcoal">Date</span>
                          <input
                            type="date"
                            value={data.date}
                            onChange={(e) => handleChange('date', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                          />
                        </label>
                        <label className="block flex-1">
                          <span className="text-charcoal">Time</span>
                          <input
                            type="time"
                            value={data.time}
                            onChange={(e) => handleChange('time', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                          />
                        </label>
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div>
                      <p className="font-semibold text-charcoal mb-2">Add-on Services</p>
                      <div className="grid grid-cols-2 gap-4">
                        {addOnOptions.map(option => (
                          <label key={option} className="flex items-center space-x-3 cursor-pointer p-4 border border-gray-300 rounded-xl hover:shadow-md transition">
                            <input
                              type="checkbox"
                              name="addOns"
                              value={option}
                              checked={data.addOns.includes(option)}
                              onChange={(e) => {
                                const addOns = [...data.addOns];
                                if (e.target.checked) {
                                  addOns.push(option);
                                } else {
                                  addOns.splice(addOns.indexOf(option), 1);
                                }
                                handleChange('addOns', addOns);
                              }}
                              className="form-checkbox h-5 w-5 text-primary"
                            />
                            <span className="text-charcoal">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                  {step === 4 && (
                    <div className="space-y-4">
                      <label className="block">
                        <span className="text-charcoal">Name</span>
                        <input
                          type="text"
                          value={data.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                          placeholder="e.g., John Doe"
                        />
                      </label>
                      <label className="block">
                        <span className="text-charcoal">Email</span>
                        <input
                          type="email"
                          value={data.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                          placeholder="e.g., john@example.com"
                        />
                      </label>
                      <label className="block">
                        <span className="text-charcoal">Phone</span>
                        <input
                          type="tel"
                          value={data.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                          placeholder="e.g., +1 (555) 123-4567"
                        />
                      </label>
                    </div>
                  )}
                  {step === 5 && (
                    <div className="space-y-4">
                      <p className="font-semibold text-charcoal">Choose Your Plan</p>
                      {planOptions.map(option => (
                        <label key={option.value} className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-300 rounded-xl hover:shadow-md transition">
                          <input type="radio" name="selectedPlan" value={option.value} checked={data.selectedPlan===option.value} onChange={e=>handleChange('selectedPlan',e.target.value)} className="form-radio h-5 w-5 text-primary" />
                          <span className="text-charcoal">{option.label}</span>
                        </label>
                      ))}
                      <details className="group border border-gray-300 rounded-lg p-4">
                        <summary className="cursor-pointer font-semibold text-charcoal">Terms & Conditions</summary>
                        <div className="mt-2 space-y-2 text-sm text-charcoal">
                          <p><strong>Upfront Fee:</strong> ₹10,000 + GST to secure your booking.</p>
                          <p><strong>Replacement Guarantee:</strong> We will replace your nanny up to 3 times within 12 months free of charge if she leaves.</p>
                        </div>
                      </details>
                      <details className="group border border-gray-300 rounded-lg p-4">
                        <summary className="cursor-pointer font-semibold text-charcoal">Service Details</summary>
                        <div className="mt-2 space-y-2 text-sm text-charcoal">
                          {[
                            { title: '👶 Baby Care Duties', items: ["Bathing the baby","Giving massages","Diaper changing","Dressing the baby","Cleaning and sterilizing baby utensils"] },
                            { title: '🍼 Feeding & Nutrition', items: ["Preparing baby food/formula","Feeding the baby on time","Ensuring proper hygiene during feeding","Keeping a feeding schedule"] },
                            { title: '🧠 Early Learning & Development', items: ["Engaging in play-based learning","Teaching basic alphabets, numbers, and colors","Introducing moral stories and prayers","Helping develop motor skills (puzzles, toys, etc.)"] },
                            { title: '🚶‍♀️ Daily Routines & Health', items: ["Putting the baby to sleep (nap schedule)","Taking the baby for walks","Monitoring baby's health and informing parents","Giving medication if prescribed (with consent)"] },
                            { title: '🏠 Light Household Baby-Related Tasks', items: ["Cleaning baby's room, crib, and play area","Washing and folding baby clothes","Managing baby essentials (diapers, wipes, etc.)"] },
                            { title: '❤️ Emotional Support & Bonding', items: ["Talking and playing with the child to build trust","Being a stable, loving presence","Managing tantrums gently and responsibly"] }
                          ].map(section => (
                            <details key={section.title} className="group border border-gray-200 rounded-lg ml-4">
                              <summary className="cursor-pointer px-3 py-1 font-medium flex justify-between items-center">
                                <span>{section.title}</span>
                                <span className="transform transition-transform duration-200 group-open:rotate-180">▼</span>
                              </summary>
                              <ul className="px-5 py-2 list-disc list-inside space-y-1">
                                {section.items.map(item => <li key={item}>{item}</li>)}
                              </ul>
                            </details>
                          ))}
                        </div>
                      </details>
                    </div>
                  )}
                  {step === 6 && (
                    <div className="space-y-4">
                      <label className="block">
                        <span className="text-charcoal">Special Instructions</span>
                        <textarea
                          value={data.instructions}
                          onChange={(e) => handleChange('instructions', e.target.value)}
                          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                          placeholder="e.g., Please ensure the nanny is aware of any allergies or special needs"
                        />
                      </label>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex justify-between mt-4">
              {step > 1 ? (
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleBack} className="btn-secondary px-4 py-2">
                  Back
                </motion.button>
              ) : (
                <div />
              )}
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleNext} className="btn-primary px-4 py-2">
                {step < totalSteps ? 'Next' : 'Proceed to Payment'}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 