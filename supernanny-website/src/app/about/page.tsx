'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialFormState = { fullName: '', email: '', phone: '', experienceYears: '', availability: '', qualifications: '', locationPreference: '', expectedRate: '', references: '', additionalInfo: '', languages: '', ageGroup: '', transportation: '', housekeeping: '', emergencyContactName: '', emergencyContactPhone: '' };
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const translations = {
    en: {
      title: 'Nanny Application Form', fullName: 'Full Name', email: 'Email', phone: 'Phone Number', experienceYears: 'Years of Experience', availability: 'Availability (days/hours)', qualifications: 'Qualifications', locationPreference: 'Location Preferences', expectedRate: 'Expected Rate (per hour)', references: 'References', additionalInfo: 'Additional Information', languages: 'Languages Spoken', preferredAgeGroup: 'Preferred Age Group', selectAgeGroup: 'Select age group', ageOptions: { '0-2': '0-2 years', '3-5': '3-5 years', '6-12': '6-12 years', all: 'All ages' }, transportation: 'Transportation Available', select: 'Select', yes: 'Yes', no: 'No', emergencyContactName: 'Emergency Contact Name', emergencyContactPhone: 'Emergency Contact Phone', submit: 'Submit Proposal'
    },
    hi: {
      title: 'नानी आवेदन फ़ॉर्म', fullName: 'पूरा नाम', email: 'ईमेल', phone: 'फ़ोन नंबर', experienceYears: 'अनुभव के वर्ष', availability: 'उपलब्धता (दिन/घंटे)', qualifications: 'योग्यताएं', locationPreference: 'स्थान की प्राथमिकताएं', expectedRate: 'अपेक्षित दर (प्रति घंटा)', references: 'संदर्भ', additionalInfo: 'अतिरिक्त जानकारी', languages: 'बोली जाने वाली भाषाएँ', preferredAgeGroup: 'पसंदीदा आयु समूह', selectAgeGroup: 'आयु समूह चुनें', ageOptions: { '0-2': '0-2 वर्ष', '3-5': '3-5 वर्ष', '6-12': '6-12 वर्ष', all: 'सभी आयु' }, transportation: 'परिवहन उपलब्ध', select: 'चुनें', yes: 'हाँ', no: 'नहीं', emergencyContactName: 'आपातकालीन संपर्क का नाम', emergencyContactPhone: 'आपातकालीन संपर्क फ़ोन', submit: 'प्रस्ताव जमा करें'
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/nannies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Network response was not ok');
      alert('Proposal submitted successfully!');
      setFormData(initialFormState);
      setIsModalOpen(false);
    } catch (error: any) {
      alert('Error submitting proposal: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-softcream to-white section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fadeInUp">
            <h1 className="heading text-4xl md:text-5xl mb-6">About SuperNanny</h1>
            <p className="subheading text-charcoal max-w-3xl mx-auto mb-8">
              Meet the team behind India's most trusted childcare service, connecting caring nannies with loving families since 2023.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="SuperNanny team"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-lavender rounded-full opacity-70"></div>
              </div>
            </div>
            <div className="md:w-1/2 fadeInUp">
              <h2 className="heading text-3xl md:text-4xl mb-6">Our Story</h2>
              <p className="subheading text-charcoal mb-4">
                SuperNanny was founded in 2023 by a group of parents and technology experts who recognized the need for 
                better childcare solutions to support modern families in India.
              </p>
              <p className="subheading text-charcoal mb-4">
                What started as a simple idea has grown into a comprehensive platform serving thousands of families 
                across 8 major Indian cities, with plans to expand nationwide.
              </p>
              <p className="subheading text-charcoal">
                Our team combines expertise in child development, educational psychology, and cutting-edge technology 
                to create a platform that connects families with thoroughly vetted, professional nannies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section-padding bg-softcream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">Our Mission</h2>
            <p className="subheading text-charcoal max-w-3xl mx-auto">
              Providing quality, trustworthy childcare that empowers parents and nurtures children
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-primary bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">For Parents</h3>
              <p className="text-charcoal">We empower parents to pursue their careers and personal growth with peace of mind, knowing their children are in capable, caring hands.</p>
            </div>
            
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-secondary bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">For Children</h3>
              <p className="text-charcoal">We ensure children receive more than just basic care, focusing on enriching activities that support cognitive, emotional and social development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">Our Core Values</h2>
            <p className="subheading text-charcoal max-w-3xl mx-auto">
              The principles that guide everything we do at SuperNanny
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-lavender bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">Safety</h3>
              <p className="text-charcoal">We prioritize the safety and security of children above all else, implementing rigorous vetting processes for all nannies.</p>
            </div>
            
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-mint bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">Reliability</h3>
              <p className="text-charcoal">We aim to be the most dependable childcare service in India, ensuring families can count on us when they need support.</p>
            </div>
            
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="bg-sunshine bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">Professionalism</h3>
              <p className="text-charcoal">We maintain the highest standards of professionalism in all interactions, with both nannies and families.</p>
            </div>
            
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">Education</h3>
              <p className="text-charcoal">We believe in the educational value of quality childcare, selecting nannies who can contribute to children's learning.</p>
            </div>
            
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.5s' }}>
              <div className="bg-secondary bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">Joy</h3>
              <p className="text-charcoal">We strive to bring happiness and positive energy to every family we work with, making childcare a joyful experience.</p>
            </div>
            
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.6s' }}>
              <div className="bg-lavender bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">Inclusivity</h3>
              <p className="text-charcoal">We embrace diversity and inclusion, serving all types of families across India with respect and understanding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-softcream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">Meet Our Leadership</h2>
            <p className="subheading text-charcoal max-w-3xl mx-auto">
              The visionaries bringing SuperNanny's mission to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Priya Sharma, CEO"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-1">Priya Sharma</h3>
              <p className="text-primary font-semibold mb-3">CEO & Co-Founder</p>
              <p className="text-charcoal">Former child psychologist with 15 years experience in early childhood development.</p>
            </div>
            
            <div className="text-center fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Rahul Patel, CTO"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-1">Rahul Patel</h3>
              <p className="text-primary font-semibold mb-3">CTO & Co-Founder</p>
              <p className="text-charcoal">Tech innovator with previous success building platforms that connect service providers with customers.</p>
            </div>
            
            <div className="text-center fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Meera Singh, COO"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-1">Meera Singh</h3>
              <p className="text-primary font-semibold mb-3">Chief Operations Officer</p>
              <p className="text-charcoal">Operations expert with experience scaling service startups across multiple Indian markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Stats Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">Our Impact</h2>
            <p className="subheading text-charcoal max-w-3xl mx-auto">
              The difference we're making for families across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="card p-8 text-center fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="text-primary font-baloo text-5xl font-bold mb-2">500+</div>
              <p className="font-quicksand font-semibold text-lg">Verified Nannies</p>
            </div>
            
            <div className="card p-8 text-center fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="text-primary font-baloo text-5xl font-bold mb-2">2,000+</div>
              <p className="font-quicksand font-semibold text-lg">Happy Families</p>
            </div>
            
            <div className="card p-8 text-center fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="text-primary font-baloo text-5xl font-bold mb-2">8</div>
              <p className="font-quicksand font-semibold text-lg">Cities Served</p>
            </div>
            
            <div className="card p-8 text-center fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="text-primary font-baloo text-5xl font-bold mb-2">4.9/5</div>
              <p className="font-quicksand font-semibold text-lg">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lavender to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading text-3xl md:text-4xl text-white mb-6">Ready to Join the SuperNanny Family?</h2>
          <p className="subheading text-white max-w-3xl mx-auto mb-8">
            Whether you're looking for quality childcare or want to become part of our nanny network, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-primary">Find a Nanny</button>
            <button type="button" className="btn-secondary border-2 border-white" onClick={() => setIsModalOpen(true)}>
              Apply as a Nanny
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-softcream text-charcoal rounded-lg overflow-auto max-h-[90vh] w-full max-w-2xl p-8 shadow-2xl relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">&times;</button>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-quicksand font-bold">{translations[language].title}</h3>
              <button type="button" onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')} className="text-sm font-semibold">
                {language === 'en' ? 'हिंदी' : 'English'}
              </button>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-semibold">{translations[language].fullName}</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">{translations[language].email}</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">{translations[language].phone}</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">{translations[language].experienceYears}</label>
                <input type="number" name="experienceYears" value={formData.experienceYears} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">{translations[language].availability}</label>
                <label className="block mb-1 font-semibold">Availability (days/hours)</label>
                <input type="text" name="availability" value={formData.availability} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Qualifications</label>
                <textarea name="qualifications" value={formData.qualifications} onChange={handleChange} rows={3} className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Location Preferences</label>
                <input type="text" name="locationPreference" value={formData.locationPreference} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Expected Rate (per hour)</label>
                <input type="text" name="expectedRate" value={formData.expectedRate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">References</label>
                <textarea name="references" value={formData.references} onChange={handleChange} rows={3} className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Additional Information</label>
                <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows={4} className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 font-semibold">Languages Spoken</label>
                    <input type="text" name="languages" value={formData.languages} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                  </div>
                  <div>
                    <label className="block mb-1 font-semibold">Preferred Age Group</label>
                    <select name="ageGroup" value={formData.ageGroup} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
                      <option value="">Select age group</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-12">6-12 years</option>
                      <option value="all">All ages</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 font-semibold">Transportation Available</label>
                    <select name="transportation" value={formData.transportation} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 font-semibold">Emergency Contact Name</label>
                    <input type="text" name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                  </div>
                  <div>
                    <label className="block mb-1 font-semibold">Emergency Contact Phone</label>
                    <input type="tel" name="emergencyContactPhone" value={formData.emergencyContactPhone} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 text-right">
                <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-primary via-secondary to-mint text-white text-lg font-bold px-8 py-3 rounded-full w-full md:w-auto mx-auto block hover:opacity-90 disabled:opacity-50 transition">
                  {isSubmitting ? 'Submitting...' : 'Submit Proposal'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 