import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-softcream py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-baloo text-xl font-bold text-primary mb-4">SuperNanny</h3>
            <p className="font-nunito text-charcoal">Providing quality childcare services to make parents' lives easier and children happier.</p>
          </div>
          
          <div>
            <h4 className="font-quicksand font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/nannies" className="hover:text-primary transition-colors">Our Nannies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-quicksand font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-primary transition-colors">Babysitting</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Overnight Care</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Party Time Assistance</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Educational Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-quicksand font-bold text-lg mb-4">Contact Us</h4>
            <p className="mb-2">123 Nanny Lane, Babysitter City</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-4">Email: hello@supernanny.com</p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-opacity-80">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.16c-.7.32-1.45.54-2.25.63.8-.5 1.42-1.28 1.72-2.22-.76.45-1.6.78-2.5.95-.72-.77-1.73-1.25-2.86-1.25-2.17 0-3.94 1.8-3.94 4.02 0 .32.03.63.1.93-3.28-.16-6.18-1.77-8.12-4.2-.34.59-.53 1.27-.53 2 0 1.4.7 2.63 1.76 3.35-.65-.02-1.27-.2-1.8-.5v.05c0 1.95 1.36 3.57 3.17 3.94-.33.09-.7.14-1.06.14-.26 0-.5-.03-.74-.07.5 1.6 1.97 2.78 3.7 2.8-1.36 1.08-3.07 1.72-4.93 1.72-.32 0-.64-.02-.95-.06 1.76 1.15 3.85 1.8 6.1 1.8 7.3 0 11.3-6.15 11.3-11.5 0-.17 0-.34-.02-.52.78-.57 1.45-1.28 1.98-2.09z"></path></svg>
              </a>
              <a href="#" className="text-primary hover:text-opacity-80">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
              <a href="#" className="text-primary hover:text-opacity-80">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-10.7 15h-2.9v-9h2.9v9zm-1.4-10.2c-1 0-1.6-.7-1.6-1.5s.6-1.5 1.6-1.5 1.6.7 1.6 1.5-.7 1.5-1.6 1.5zm10.1 10.2h-2.9v-5.2c0-1.4-.8-1.7-1.1-1.7-.8 0-1.6.7-1.6 1.7v5.2h-2.9v-9h2.9v1.1c.4-.8 1.4-1.4 2.5-1.4 1.2 0 3.1.7 3.1 3.9v5.4z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center md:flex md:justify-between md:text-left">
          <p className="font-nunito text-charcoal">&copy; {new Date().getFullYear()} SuperNanny. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 