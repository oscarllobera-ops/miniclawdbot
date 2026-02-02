import React from 'react';
import Button from './Button';
import { Sparkles, ShieldCheck, Headphones, Undo2 } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-900 text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center bg-indigo-800 rounded-full px-4 py-1.5 mb-6 text-indigo-200 text-sm font-medium border border-indigo-700">
          <Sparkles className="w-4 h-4 mr-2" /> Limited Time Offer
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Up to 67% off Hosting
        </h2>
        <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
          Includes Kodee AI Assistant, Free Automatic Backups, and Enterprise Security.
        </p>
        <div className="flex flex-col items-center justify-center">
          <Button variant="primary" className="bg-white text-indigo-900 hover:bg-gray-100 hover:text-indigo-800 shadow-xl">
            Claim Offer Now
          </Button>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-indigo-200">
             <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-green-400" /> Secure Payment</span>
             <span className="flex items-center"><Headphones className="w-4 h-4 mr-2 text-white" /> 24/7 Support</span>
             <span className="flex items-center"><Undo2 className="w-4 h-4 mr-2 text-white" /> Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;