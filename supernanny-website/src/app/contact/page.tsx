import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="heading text-4xl md:text-5xl text-white mb-6">Get in Touch</h1>
            <p className="subheading text-white mb-8 max-w-2xl mx-auto">
              We're here to answer your questions and provide the childcare support your family needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address Card */}
            <div className="card p-8 bg-primary bg-opacity-10 rounded-xl shadow-md fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl text-center mb-4">Visit Our Office</h3>
              <p className="text-charcoal text-center mb-2">
                Office No.71 East Point Mall
              </p>
              <p className="text-charcoal text-center mb-2">
                Kurla Station, Mumbai - 400024
              </p>
              <p className="text-charcoal text-center">
                Maharashtra, India
              </p>
            </div>

            {/* Email Card */}
            <div className="card p-8 bg-secondary bg-opacity-10 rounded-xl shadow-md fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl text-center mb-4">Email Us</h3>
              <p className="text-charcoal text-center mb-2">
                For general inquiries:
              </p>
              <p className="text-secondary font-medium text-center mb-4">
                <a href="mailto:help@mysupernanny.com" className="hover:underline">help@mysupernanny.com</a>
              </p>
              <p className="text-charcoal text-center">
                We respond to all messages within 24 hours
              </p>
            </div>

            {/* Phone Card */}
            <div className="card p-8 bg-sunshine bg-opacity-10 rounded-xl shadow-md fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 rounded-full bg-sunshine text-charcoal flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="font-quicksand font-bold text-xl text-center mb-4">Call Us</h3>
              <p className="text-charcoal text-center mb-2">
                Customer Support:
              </p>
              <p className="text-yellow-500 font-medium text-center mb-4">
                <a href="tel:+918976680354" className="hover:underline">+91 8976680354</a>
              </p>
              <p className="text-charcoal text-center">
                Available 9:00 AM - 9:00 PM, Monday to Sunday
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-softcream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">Send Us a Message</h2>
            <p className="subheading text-charcoal max-w-3xl mx-auto">
              Have questions about our services? Need help finding the right nanny? 
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fadeInUp bg-white p-8 rounded-xl shadow-lg" style={{ animationDelay: '0.2s' }}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-1">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-1">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-1">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Please provide details about your inquiry"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input 
                    id="privacy" 
                    type="checkbox" 
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" 
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-charcoal">
                    I agree to the <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
                  </label>
                </div>

                <div>
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-lg mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8277387975996!2d72.8783716!3d19.0737372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8866a456c9f%3A0x8d1745d5e1976abc!2sEast%20Point!5e0!3m2!1sen!2sin!4v1652364807912!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-quicksand font-bold text-xl mb-3">How to Reach Us</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-sm text-charcoal">Located inside East Point Mall, just opposite to Kurla Railway Station (East)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-sm text-charcoal">Easily accessible by public transport. Kurla is well-connected by both Central and Harbour railway lines.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-yellow-400 bg-opacity-20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-sm text-charcoal">Our office is open from Monday to Saturday, 9:00 AM to 6:00 PM. Please schedule an appointment before visiting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="subheading text-charcoal max-w-3xl mx-auto">
              Find quick answers to common questions about our nanny services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-softcream rounded-xl p-6 shadow-md fadeInUp" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-quicksand font-bold text-lg mb-3">What are your operating hours?</h3>
                <p className="text-charcoal">
                  Our customer support team is available from 9:00 AM to 9:00 PM, seven days a week. 
                  Our nanny services are available 24/7, including weekends and holidays.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-softcream rounded-xl p-6 shadow-md fadeInUp" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-quicksand font-bold text-lg mb-3">How quickly can I book a nanny?</h3>
                <p className="text-charcoal">
                  For regular bookings, we recommend scheduling at least 24 hours in advance. 
                  However, our on-demand service can provide a nanny within 2-3 hours in emergency situations, 
                  subject to availability.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-softcream rounded-xl p-6 shadow-md fadeInUp" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-quicksand font-bold text-lg mb-3">How are your nannies verified?</h3>
                <p className="text-charcoal">
                  All SuperNanny caregivers undergo a rigorous verification process including identity verification, 
                  background checks, reference checks, and in-person interviews. They also receive specialized 
                  training in childcare, safety, and first aid.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-softcream rounded-xl p-6 shadow-md fadeInUp" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-quicksand font-bold text-lg mb-3">What if I need to cancel a booking?</h3>
                <p className="text-charcoal">
                  You can cancel a booking up to 12 hours before the scheduled time without any charges. 
                  Cancellations made less than 12 hours in advance will incur a 50% fee. 
                  Please contact our customer support team for assistance with cancellations.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link 
                href="/faqs" 
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                View all FAQs
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading text-3xl md:text-4xl text-white mb-6">Ready to Find Your Perfect Nanny?</h2>
            <p className="subheading text-white mb-8">
              Join thousands of happy families who have found reliable childcare through SuperNanny
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book a Nanny
              </button>
              <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Download App
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 