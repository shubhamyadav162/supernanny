'use client';
import { useState } from 'react';
import OnboardingModal from '../components/OnboardingModal';
import HeroSection from '../components/HeroSection';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full">
      <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">Why Parents Choose SuperNanny</h2>
            <p className="subheading text-charcoal max-w-3xl mx-auto">
              We've helped thousands of families find reliable childcare that fits their needs and provides children with enriching experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-lavender bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">Thoroughly Vetted</h3>
              <p className="text-charcoal">Every nanny undergoes comprehensive background checks, reference verifications, and interviews.</p>
            </div>
            
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-mint bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">Perfect Matching</h3>
              <p className="text-charcoal">Our smart algorithm finds nannies who match your family's specific needs, values, and childcare philosophy.</p>
            </div>
            
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="bg-sunshine bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl mb-3">Enriching Care</h3>
              <p className="text-charcoal">Our nannies provide more than just basic care - they engage children in educational activities and support their development.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-softcream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">How SuperNanny Works</h2>
            <p className="subheading text-charcoal max-w-3xl mx-auto">
              Finding the perfect nanny is just three simple steps away
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-lavender" style={{ zIndex: 0 }}></div>
            
            <div className="relative z-10 fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-2xl shadow-md p-8 text-center mb-6">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto -mt-16 mb-6 shadow-lg">1</div>
                <h3 className="font-quicksand font-bold text-xl mb-3">Create Your Profile</h3>
                <p className="text-charcoal">Tell us about your family, your childcare needs, schedule, preferences, and what you're looking for in a nanny.</p>
              </div>
            </div>
            
            <div className="relative z-10 fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl shadow-md p-8 text-center mb-6">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto -mt-16 mb-6 shadow-lg">2</div>
                <h3 className="font-quicksand font-bold text-xl mb-3">Meet Your Matches</h3>
                <p className="text-charcoal">Browse profiles of nannies who match your requirements, read reviews, and schedule interviews with your favorites.</p>
              </div>
            </div>
            
            <div className="relative z-10 fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-2xl shadow-md p-8 text-center mb-6">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto -mt-16 mb-6 shadow-lg">3</div>
                <h3 className="font-quicksand font-bold text-xl mb-3">Book With Confidence</h3>
                <p className="text-charcoal">Select your perfect nanny, book their services, and enjoy peace of mind knowing your children are in caring hands.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button onClick={() => setIsModalOpen(true)} className="btn-primary pulse">Get Started Today</button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">Families Love SuperNanny</h2>
            <p className="subheading text-charcoal max-w-3xl mx-auto">
              Here's what parents have to say about our service and nannies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-lavender flex items-center justify-center mr-4">
                  <span className="font-quicksand font-bold text-primary">P</span>
                </div>
                <div>
                  <h4 className="font-quicksand font-bold">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Mother of two</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-charcoal italic">"SuperNanny helped us find Jessica, who has been an absolute blessing for our family. She's not just caring for our kids; she's teaching them and helping them grow."</p>
            </div>
            
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-mint flex items-center justify-center mr-4">
                  <span className="font-quicksand font-bold text-primary">R</span>
                </div>
                <div>
                  <h4 className="font-quicksand font-bold">Rahul Mehta</h4>
                  <p className="text-sm text-gray-600">Father of three</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-charcoal italic">"The matching process was incredibly accurate. Our nanny fits so well with our family dynamic and has brought so much positive energy into our home."</p>
            </div>
            
            <div className="card p-8 fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-sunshine flex items-center justify-center mr-4">
                  <span className="font-quicksand font-bold text-primary">A</span>
                </div>
                <div>
                  <h4 className="font-quicksand font-bold">Ananya Patel</h4>
                  <p className="text-sm text-gray-600">Single mother</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-charcoal italic">"As a working single mom, finding quality childcare was my biggest stress. SuperNanny made it so easy to find someone I could trust completely with my daughter."</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lavender to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading text-3xl md:text-4xl text-white mb-6">Ready to Find Your Perfect Nanny?</h2>
          <p className="subheading text-white max-w-3xl mx-auto mb-8">
            Join thousands of happy families who've found exceptional childcare through SuperNanny
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-primary">Sign Up Now</button>
            <button className="btn-secondary border-2 border-white">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}
