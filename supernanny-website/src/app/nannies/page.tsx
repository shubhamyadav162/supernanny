'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NanniesPage() {
  // Sample nanny data - in a real app this would come from a database
  const nannies = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 28,
      experience: 5,
      rating: 4.9,
      location: "Mumbai",
      specialties: ["Infant Care", "Early Education"],
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
      availability: "Weekdays",
    },
    {
      id: 2,
      name: "Anita Desai",
      age: 32,
      experience: 7,
      rating: 4.8,
      location: "Delhi",
      specialties: ["Special Needs", "Toddler Care"],
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
      availability: "Full-time",
    },
    {
      id: 3,
      name: "Kavita Patel",
      age: 26,
      experience: 4,
      rating: 4.7,
      location: "Bangalore",
      specialties: ["Academic Support", "Arts & Crafts"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
      availability: "Weekends",
    },
    {
      id: 4,
      name: "Deepa Gupta",
      age: 30,
      experience: 6,
      rating: 4.9,
      location: "Hyderabad",
      specialties: ["Multilingual", "Music Education"],
      image: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
      availability: "Evenings",
    },
    {
      id: 5,
      name: "Ritu Singh",
      age: 29,
      experience: 5,
      rating: 4.8,
      location: "Chennai",
      specialties: ["Nutrition", "Physical Activities"],
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
      availability: "Full-time",
    },
    {
      id: 6,
      name: "Neha Kapoor",
      age: 27,
      experience: 4,
      rating: 4.6,
      location: "Pune",
      specialties: ["Story Telling", "Creative Play"],
      image: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
      availability: "Part-time",
    },
  ];

  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [availability, setAvailability] = useState('');
  const [filteredNannies, setFilteredNannies] = useState(nannies);

  const handleSearch = () => {
    const filtered = nannies.filter((nanny) => {
      if (location && nanny.location.toLowerCase() !== location) return false;
      if (experience) {
        const exp = nanny.experience;
        if (experience === '1-3' && (exp < 1 || exp > 3)) return false;
        if (experience === '4-6' && (exp < 4 || exp > 6)) return false;
        if (experience === '7+' && exp < 7) return false;
      }
      if (specialty) {
        const map = { infant: 'infant', toddler: 'toddler', 'special-needs': 'special needs', education: 'education', multilingual: 'multilingual' };
        const searchSpec = map[specialty];
        if (!nanny.specialties.some((spec) => spec.toLowerCase().includes(searchSpec))) return false;
      }
      if (availability && nanny.availability.toLowerCase() !== availability) return false;
      return true;
    });
    setFilteredNannies(filtered);
  };

  // FIRST_EDIT: Add a reset handler to clear filters and show all nannies
  const handleReset = () => {
    setLocation('');
    setExperience('');
    setSpecialty('');
    setAvailability('');
    setFilteredNannies(nannies);
  };

  // Function to render star ratings
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half-fill" x1="0" x2="100%" y1="0" y2="0">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path fill="url(#half-fill)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }

    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="heading text-4xl md:text-5xl text-white mb-6">
              Meet Our SuperNannies
            </h1>
            <p className="subheading text-white mb-8 max-w-2xl mx-auto">
              Our verified and professionally trained nannies are ready to provide exceptional care for your children
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-softcream">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 transform -mt-20">
            <h2 className="text-2xl font-quicksand font-bold text-charcoal mb-6 text-center">
              Find Your Perfect Nanny
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Any Location</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="chennai">Chennai</option>
                  <option value="pune">Pune</option>
                </select>
              </div>
              <div className="relative">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Experience
                </label>
                <select
                  id="experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Any Experience</option>
                  <option value="1-3">1-3 years</option>
                  <option value="4-6">4-6 years</option>
                  <option value="7+">7+ years</option>
                </select>
              </div>
              <div className="relative">
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                  Specialty
                </label>
                <select
                  id="specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Any Specialty</option>
                  <option value="infant">Infant Care</option>
                  <option value="toddler">Toddler Care</option>
                  <option value="special-needs">Special Needs</option>
                  <option value="education">Educational Support</option>
                  <option value="multilingual">Multilingual</option>
                </select>
              </div>
              <div className="relative">
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                  Availability
                </label>
                <select
                  id="availability"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Any Availability</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="weekdays">Weekdays Only</option>
                  <option value="weekends">Weekends Only</option>
                  <option value="evenings">Evenings</option>
                </select>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button onClick={handleSearch} className="btn-primary px-10">
                Search Nannies
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-lg mb-2">Background Verified</h3>
              <p className="text-gray-600 text-sm">All our nannies undergo thorough background verification</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-lg mb-2">Professionally Trained</h3>
              <p className="text-gray-600 text-sm">Certified in childcare, first aid, and early education</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400 bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-lg mb-2">Replacement Guarantee</h3>
              <p className="text-gray-600 text-sm">If you're not satisfied, we offer free replacements</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-400 bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Our support team is available round the clock</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nanny Listings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="heading text-3xl text-center mb-12">Our Featured Nannies</h2>
          
          {/* Show message and reset button if no results */}
          {filteredNannies.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-700 mb-4">No nannies found matching your criteria.</p>
              <button onClick={handleReset} className="btn-secondary px-6">Reset Filters</button>
            </div>
          )}
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${filteredNannies.length === 0 ? 'hidden' : ''}`}>
            {filteredNannies.map((nanny) => (
              <div 
                key={nanny.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <div className="h-64 overflow-hidden">
                    <Image 
                      src={nanny.image} 
                      alt={nanny.name} 
                      width={700} 
                      height={500}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                      <Image 
                        src={nanny.image} 
                        alt={nanny.name} 
                        width={80} 
                        height={80}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-12 pb-6 px-6">
                  <h3 className="font-quicksand font-bold text-xl text-center mb-1">{nanny.name}</h3>
                  <div className="flex justify-center mb-3">
                    {renderRating(nanny.rating)}
                    <span className="text-gray-600 ml-2">{nanny.rating}</span>
                  </div>
                  
                  <div className="flex justify-center items-center mb-4 text-sm">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-2">
                      {nanny.experience} years exp
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      {nanny.location}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2 text-center">Specialties</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {nanny.specialties.map((specialty, index) => (
                        <span 
                          key={index} 
                          className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {nanny.availability}
                    </div>
                    <Link href={`/nannies/${nanny.id}`}>
                      <div className="text-primary hover:text-primary-dark font-medium transition-colors duration-200">
                        View Profile →
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-secondary px-10">
              View All Nannies
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-b from-softcream to-white">
        <div className="container mx-auto px-4">
          <h2 className="heading text-3xl text-center mb-4">How To Hire A Nanny</h2>
          <p className="subheading text-center mb-16 max-w-3xl mx-auto">
            Our simple process makes it easy to find the perfect nanny for your family
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center relative">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">Browse Profiles</h3>
              <p className="text-gray-600">
                Explore our verified nanny profiles and find candidates who match your requirements
              </p>
              
              {/* Connector line - visible only on desktop */}
              <div className="hidden md:block absolute top-10 left-[calc(50%+2.5rem)] w-full h-1 bg-dashed-line">
                <div className="absolute w-8 h-8 right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 border-t-2 border-r-2 border-primary border-dashed"></div>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center relative">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">Schedule Interviews</h3>
              <p className="text-gray-600">
                Set up interviews with your shortlisted candidates to find the right fit
              </p>
              
              {/* Connector line - visible only on desktop */}
              <div className="hidden md:block absolute top-10 left-[calc(50%+2.5rem)] w-full h-1 bg-dashed-line">
                <div className="absolute w-8 h-8 right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 border-t-2 border-r-2 border-secondary border-dashed"></div>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center relative">
              <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">Select & Book</h3>
              <p className="text-gray-600">
                Choose your preferred nanny and book their services online
              </p>
              
              {/* Connector line - visible only on desktop */}
              <div className="hidden md:block absolute top-10 left-[calc(50%+2.5rem)] w-full h-1 bg-dashed-line">
                <div className="absolute w-8 h-8 right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 border-t-2 border-r-2 border-yellow-500 border-dashed"></div>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">Enjoy Peace of Mind</h3>
              <p className="text-gray-600">
                Relax knowing your children are in capable, caring hands
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="heading text-3xl text-center mb-4">What Parents Say</h2>
          <p className="subheading text-center mb-16 max-w-3xl mx-auto">
            Hear from families who've found their perfect SuperNanny
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-softcream p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Testimonial" 
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-quicksand font-bold">Meera Kapoor</h4>
                  <p className="text-sm text-gray-600">Mother of two, Mumbai</p>
                </div>
              </div>
              <div className="mb-4">
                {renderRating(5)}
              </div>
              <p className="text-gray-700">
                "Finding Priya through SuperNanny was a blessing. Her expertise with infants gave us confidence as new parents. She's now like family to us!"
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Testimonial" 
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-quicksand font-bold">Rahul Sharma</h4>
                  <p className="text-sm text-gray-600">Father of twins, Delhi</p>
                </div>
              </div>
              <div className="mb-4">
                {renderRating(4.5)}
              </div>
              <p className="text-gray-700">
                "As busy professionals, we needed someone reliable for our twins. Anita has been exceptional with her patience and creativity in keeping them engaged."
              </p>
            </div>
            
            <div className="bg-pink-50 p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Testimonial" 
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-quicksand font-bold">Priyanka Reddy</h4>
                  <p className="text-sm text-gray-600">Mother of a special needs child, Bangalore</p>
                </div>
              </div>
              <div className="mb-4">
                {renderRating(5)}
              </div>
              <p className="text-gray-700">
                "Finding a nanny who understands special needs was challenging until we found SuperNanny. Kavita's experience has made an incredible difference in our child's development."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading text-3xl md:text-4xl text-white mb-6">Ready to Find Your Perfect Nanny?</h2>
          <p className="subheading text-white max-w-3xl mx-auto mb-8">
            Join thousands of happy families who have found reliable, caring nannies through SuperNanny
          </p>
          <button className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="heading text-3xl text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="font-quicksand font-bold text-xl mb-2">How are SuperNannies verified?</h3>
              <p className="text-gray-700">
                All our nannies undergo a thorough verification process that includes background checks, reference verification, in-person interviews, and skill assessments. We ensure they meet our high standards for childcare.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-quicksand font-bold text-xl mb-2">What if I'm not satisfied with my nanny?</h3>
              <p className="text-gray-700">
                We offer a satisfaction guarantee. If you're not happy with your nanny for any reason, we'll provide a replacement at no additional cost. Your family's happiness is our priority.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-quicksand font-bold text-xl mb-2">Can I meet the nanny before hiring?</h3>
              <p className="text-gray-700">
                Absolutely! We encourage you to interview your shortlisted nannies either virtually or in person before making a decision. This ensures both you and the nanny are comfortable with the arrangement.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-quicksand font-bold text-xl mb-2">What training do your nannies have?</h3>
              <p className="text-gray-700">
                All SuperNannies are certified in childcare basics, first aid, and CPR. Many have additional specializations such as early childhood education, special needs care, or multilingual skills.
              </p>
            </div>
            
            <div>
              <h3 className="font-quicksand font-bold text-xl mb-2">How quickly can I get a nanny?</h3>
              <p className="text-gray-700">
                For standard bookings, we recommend starting your search at least a week in advance. However, we also offer emergency services and can sometimes arrange same-day placements depending on availability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 