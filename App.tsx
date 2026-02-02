import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specs from './components/Specs';
import InfoSection from './components/InfoSection';
import GlobalReach from './components/GlobalReach';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Offer from './components/Offer';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import { LEGAL } from './constants';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-200 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Specs />
        <Offer />
        <InfoSection />
        <GlobalReach />
        <Testimonials />
        <FAQ />
        
        {/* Sticky Mobile CTA: High contrast */}
        <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur-lg border-t border-slate-200 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
           <a 
              href="https://wise.com/pay/r/EGwiHwKBGljW7NY"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-indigo-700 text-white text-center font-extrabold text-lg py-3.5 rounded-xl shadow-lg hover:bg-indigo-800 transition-colors active:scale-[0.98]"
            >
              Get Started (67% Off)
            </a>
        </div>
      </main>
      
      <Footer 
        onOpenPrivacy={() => setModalOpen('privacy')}
        onOpenTerms={() => setModalOpen('terms')}
      />

      {/* Legal Modals */}
      <LegalModal 
        isOpen={modalOpen === 'privacy'} 
        onClose={() => setModalOpen(null)}
        title="Privacy Policy"
        content={LEGAL.PRIVACY}
      />
      <LegalModal 
        isOpen={modalOpen === 'terms'} 
        onClose={() => setModalOpen(null)}
        title="Terms and Conditions"
        content={LEGAL.TERMS}
      />
    </div>
  );
};

export default App;