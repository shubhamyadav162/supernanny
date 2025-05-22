'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialFormState = { fullName: '', email: '', phone: '', experienceYears: '', availability: '', qualifications: '', locationPreference: '', expectedRate: '', references: '', additionalInfo: '' };
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-quicksand font-bold mb-6 text-bubblegum">About Us</h1>
        <p className="font-nunito text-charcoal">Information about SuperNanny and our mission.</p>
        <div className="my-12 text-center">
          <h2 className="text-3xl font-quicksand font-bold mb-4 text-bubblegum">Interested in working with us as a nanny?</h2>
          <button type="button" onClick={() => setIsModalOpen(true)} className="bg-bubblegum text-white px-6 py-3 rounded-lg hover:bg-pink-600">
            Apply Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-cream text-charcoal rounded-lg overflow-auto max-h-[90vh] w-full max-w-2xl p-6 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">&times;</button>
            <h3 className="text-2xl font-quicksand font-bold mb-4">Nanny Application Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-semibold">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Years of Experience</label>
                <input type="number" name="experienceYears" value={formData.experienceYears} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
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
              <div className="text-right">
                <button type="submit" disabled={isSubmitting} className="bg-bubblegum text-white px-4 py-2 rounded hover:bg-pink-600 disabled:opacity-50">
                  {isSubmitting ? 'Submitting...' : 'Submit Proposal'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
} 