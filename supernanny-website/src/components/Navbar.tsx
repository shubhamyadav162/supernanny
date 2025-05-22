"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BouncingBalls from './BouncingBalls';
import OnboardingModal from './OnboardingModal';
import { account } from '../lib/appwrite';
import { OAuthProvider } from 'appwrite';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Auth state to conditionally render profile menu
  const [user, setUser] = useState<any | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  // OAuth error state
  const [oauthError, setOauthError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    account.get()
      .then((sessionUser) => {
        setUser(sessionUser);
      })
      .catch((err: any) => {
        if (err.code === 401) {
          setUser(null);
        } else {
          console.error(err);
        }
      })
      .finally(() => {
        setAuthChecked(true);
      });
  }, []);

  // Google OAuth login handler
  const handleGoogleLogin = async () => {
    try {
      await account.createOAuth2Session(
        OAuthProvider.Google,
        window.location.origin + '/profile',
        window.location.origin + '/profile'
      );
    } catch (err: any) {
      console.error(err);
      // If Google provider disabled
      if (err.code === 412) {
        setOauthError('Google login provider is disabled. Please enable it in your Appwrite console.');
      }
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      setUser(null);
      router.push('/');
    } catch (err: any) {
      console.error('Logout failed', err);
    }
  };

  return (
    <>
      <nav className={`py-4 sticky top-0 z-50 transition-all duration-500 relative overflow-visible ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'}`}>
        {/* Bouncing Balls Animation */}
        <BouncingBalls />
        
        {/* Semi-transparent overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
          <Link href="/" className="font-baloo font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 hover:bg-pos-100 transition-all duration-500 relative group">
            SuperNanny
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500"></span>
            <span className="absolute -inset-2 bg-white dark:bg-gray-800 rounded-full blur-md opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none relative overflow-hidden group" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative z-10">
              <svg className="w-6 h-6 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? 
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> :
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </div>
            <span className="absolute inset-0 scale-0 rounded-full bg-gray-100 group-hover:scale-100 transition-transform duration-500"></span>
          </button>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Our Nannies', path: '/nannies' },
              { name: 'Contact', path: '/contact' },
              { name: 'Blog', path: '/blog' }
            ].map((item, index) => (
              <li key={index} className="perspective-500">
                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredItem(index)} 
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link 
                    href={item.path} 
                    className="font-quicksand font-semibold relative inline-block py-2 px-1 overflow-hidden group"
                  >
                    <span className={`relative z-10 transition-all duration-500 ${hoveredItem === index ? 'text-primary font-bold' : 'text-charcoal'}`}>
                      {item.name}
                    </span>

                    {/* Growing underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500"></span>
                    
                    {/* Rising background */}
                    <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-primary/5 to-secondary/5 group-hover:h-full transition-all duration-500 ease-in-out"></span>
                    
                    {/* Glowing effects only on hover */}
                    {hoveredItem === index && (
                      <>
                        {/* Subtle shimmer */}
                        <span className="absolute inset-0 shimmer-bg opacity-20"></span>
                        
                        {/* Floating particles */}
                        <span className="particle absolute w-1 h-1 rounded-full bg-primary animate-particle-1"></span>
                        <span className="particle absolute w-1 h-1 rounded-full bg-secondary animate-particle-2"></span>
                        <span className="particle absolute w-0.5 h-0.5 rounded-full bg-lavender animate-particle-3"></span>
                      </>
                    )}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu */}
          <div className={`absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
            <ul className="flex flex-col py-4">
              <li className="overflow-hidden">
                <Link href="/" className="block py-3 px-4 hover:bg-softcream hover:text-primary transition-all duration-300 font-quicksand font-semibold relative group">
                  <span className="relative z-10">Home</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href="/about" className="block py-3 px-4 hover:bg-softcream hover:text-primary transition-all duration-300 font-quicksand font-semibold relative group">
                  <span className="relative z-10">About</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href="/services" className="block py-3 px-4 hover:bg-softcream hover:text-primary transition-all duration-300 font-quicksand font-semibold relative group">
                  <span className="relative z-10">Services</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href="/nannies" className="block py-3 px-4 hover:bg-softcream hover:text-primary transition-all duration-300 font-quicksand font-semibold relative group">
                  <span className="relative z-10">Our Nannies</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href="/contact" className="block py-3 px-4 hover:bg-softcream hover:text-primary transition-all duration-300 font-quicksand font-semibold relative group">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href="/blog" className="block py-3 px-4 hover:bg-softcream hover:text-primary transition-all duration-300 font-quicksand font-semibold relative group">
                  <span className="relative z-10">Blog</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Book Now Button - Only visible on desktop */}
          <div className="hidden md:block perspective-500">
            <button onClick={() => setIsModalOpen(true)} className="btn-book relative overflow-hidden font-quicksand font-bold py-2.5 px-7 rounded-full shadow-md group">
              <span className="relative z-10 text-white transition-all duration-500 group-hover:text-white">Book a Nanny</span>
              
              {/* Gradient background that scales on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 group-hover:bg-pos-100 transition-all duration-700"></span>
              
              {/* Glowing border */}
              <span className="absolute -inset-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary animate-spin-slow opacity-70 blur-sm"></span>
              </span>
              
              {/* Shimmering overlay */}
              <span className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-30 rounded-full"></span>
            </button>
          </div>
          <div className="relative ml-4 hidden md:block">
            <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center text-charcoal hover:text-primary focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9.003 9.003 0 0112 15a9.003 9.003 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                {authChecked && (user ? (
                  <>
                    <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Profile</Link>
                    <Link href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</Link>
                    <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
                  </>
                ) : (
                  <>
                    {oauthError && (
                      <p className="text-red-500 px-4 py-2 text-sm">{oauthError}</p>
                    )}
                    <button onClick={() => { setOauthError(null); handleGoogleLogin(); }} className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Continue with Google
                    </button>
                    <Link href="/auth/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sign In</Link>
                    <Link href="/auth/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sign Up</Link>
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
      <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
} 