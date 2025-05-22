import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lavender to-secondary section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="heading text-4xl md:text-5xl text-white mb-6">Our Services</h1>
            <p className="subheading text-white mb-8 max-w-2xl mx-auto">
              SuperNanny offers a variety of childcare services tailored to meet your family's unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">Childcare Services We Offer</h2>
            <p className="subheading text-charcoal max-w-3xl mx-auto">
              Choose from our range of professional nanny services designed for different family needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Regular Nanny Service */}
            <div className="card p-8 bg-primary bg-opacity-10 fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl text-center mb-4">Regular Nanny Service</h3>
              <p className="text-charcoal text-center mb-6">
                Daily childcare with consistent schedule, perfect for working parents who need regular support.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Daily care for children of all ages</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Fixed weekly schedule</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Educational activities included</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Light housekeeping included</span>
                </li>
              </ul>
              <div className="text-center">
                <button className="btn-primary">Learn More</button>
              </div>
            </div>

            {/* Specialized Nanny Service */}
            <div className="card p-8 bg-secondary bg-opacity-10 fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl text-center mb-4">Specialized Nanny Service</h3>
              <p className="text-charcoal text-center mb-6">
                Nannies with specialized training in child development, education, or special needs care.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Advanced educational curriculum</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Special needs support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Development assessments</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Personalized child growth plans</span>
                </li>
              </ul>
              <div className="text-center">
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>

            {/* Temporary/On-Demand Service */}
            <div className="card p-8 bg-sunshine bg-opacity-10 fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 rounded-full bg-sunshine text-charcoal flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl text-center mb-4">On-Demand Nanny Service</h3>
              <p className="text-charcoal text-center mb-6">
                Flexible childcare solutions for when you need occasional help or emergency care.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Last-minute bookings</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Weekend and evening availability</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Date night coverage</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Hourly booking options</span>
                </li>
              </ul>
              <div className="text-center">
                <button className="bg-yellow-500 hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="section-padding bg-gradient-to-b from-white to-softcream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">What Makes Our Service Special</h2>
            <p className="subheading text-charcoal max-w-3xl mx-auto">
              We go beyond basic childcare to provide a nurturing and developmentally enriching experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 fadeInUp">
              <h3 className="font-quicksand font-bold text-2xl mb-4">Professional Training & Development</h3>
              <p className="text-charcoal mb-6">
                All our nannies undergo rigorous training in child development, safety procedures, 
                first aid, and age-appropriate activities. We ensure they have the skills to provide 
                exceptional care while fostering your child's growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-charcoal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Certified in child development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-sunshine flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-charcoal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>First aid and safety trained</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-lavender flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-charcoal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Regular professional development</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative fadeInUp">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1544776193-0dd461cf69d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Nanny training session"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-70"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative fadeInUp">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Nanny engaging with children"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-sunshine rounded-full opacity-70"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-mint rounded-full opacity-70"></div>
              </div>
            </div>
            <div className="fadeInUp">
              <h3 className="font-quicksand font-bold text-2xl mb-4">Enriching Educational Activities</h3>
              <p className="text-charcoal mb-6">
                Our nannies don't just supervise - they engage and teach. Each age-appropriate 
                activity is designed to stimulate your child's cognitive, physical, and 
                emotional development while making learning fun.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Age-appropriate educational games</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Arts and creativity sessions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 bg-opacity-20 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Physical and outdoor activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-gradient-to-b from-softcream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">Our Pricing Plans</h2>
            <p className="subheading text-charcoal max-w-3xl mx-auto">
              Choose the plan that best fits your family's needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="card p-8 bg-primary bg-opacity-10 fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 012 0v2a1 1 0 11-2 0V9z"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl text-center mb-4">Basic Plan</h3>
              <p className="text-charcoal text-center mb-6">
                Ideal for occasional care or short-term needs
              </p>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-primary">$25</span>
                <span className="text-lg text-charcoal">/hour</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Basic childcare services</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Emergency care available</span>
                </li>
              </ul>
              <div className="text-center">
                <button className="btn-primary">Choose Plan</button>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="card p-8 bg-secondary bg-opacity-10 fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 012 0v2a1 1 0 11-2 0V9z"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl text-center mb-4">Standard Plan</h3>
              <p className="text-charcoal text-center mb-6">
                Perfect for regular care and long-term needs
              </p>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-secondary">$40</span>
                <span className="text-lg text-charcoal">/hour</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Regular nanny service</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Consistent schedule</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Educational activities</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Light housekeeping</span>
                </li>
              </ul>
              <div className="text-center">
                <button className="btn-secondary">Choose Plan</button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="card p-8 bg-sunshine bg-opacity-10 fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 rounded-full bg-sunshine text-charcoal flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 012 0v2a1 1 0 11-2 0V9z"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl text-center mb-4">Premium Plan</h3>
              <p className="text-charcoal text-center mb-6">
                Ideal for specialized care and comprehensive support
              </p>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-yellow-500">$55</span>
                <span className="text-lg text-charcoal">/hour</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Specialized nanny service</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Advanced educational programs</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Special needs support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Development assessments</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Personalized child growth plans</span>
                </li>
              </ul>
              <div className="text-center">
                <button className="bg-yellow-500 hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading text-3xl md:text-4xl text-white mb-6">Ready to Book Your Nanny?</h2>
          <p className="subheading text-white max-w-3xl mx-auto mb-8">
            Experience the SuperNanny difference today with professionally trained nannies who care
          </p>
          <button className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book a Nanny Now
          </button>
        </div>
      </section>
    </div>
  );
} 