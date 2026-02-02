import React, { useState, useEffect } from 'react';
import { IMAGES, PAYMENT_LINK } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#">
              <img 
                src={IMAGES.LOGO} 
                alt="Moltbot Logo" 
                className="h-16 w-auto md:h-28 object-contain transition-all duration-300" 
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-700 hover:text-indigo-700 font-bold transition-colors">Features</a>
            <a href="#global" className="text-slate-700 hover:text-indigo-700 font-bold transition-colors">Global Network</a>
            <a href="#faq" className="text-slate-700 hover:text-indigo-700 font-bold transition-colors">FAQ</a>
            <a 
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-700 text-white px-7 py-3 rounded-full font-extrabold shadow-lg hover:bg-indigo-800 hover:shadow-indigo-500/40 transition-all transform hover:-translate-y-0.5 border-2 border-transparent hover:border-indigo-400"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 hover:text-indigo-700 p-2"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col space-y-4">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-800 font-bold px-4 py-3 hover:bg-slate-50 rounded-lg text-lg">Features</a>
          <a href="#global" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-800 font-bold px-4 py-3 hover:bg-slate-50 rounded-lg text-lg">Global Network</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-800 font-bold px-4 py-3 hover:bg-slate-50 rounded-lg text-lg">FAQ</a>
          <a 
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-700 text-white text-center px-6 py-4 rounded-xl font-extrabold text-lg shadow-md"
          >
            Start Hosting Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;