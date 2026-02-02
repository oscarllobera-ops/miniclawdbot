import React from 'react';
import { IMAGES } from '../constants';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <img src={IMAGES.LOGO} alt="Moltbot Logo" className="h-10 mb-6 opacity-90" />
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The premium home for your Moltbot AI assistant. Secure, scalable, and always on. <br/>
              Jajo Consult Beheer B.V.
            </p>
          </div>
          
          <div>
            <h3 className="font-extrabold text-slate-900 mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><a href="#features" className="hover:text-indigo-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
              <li><a href="#global" className="hover:text-indigo-600 transition-colors">Locations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-extrabold text-slate-900 mb-6 text-lg">Support</h3>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><a href="mailto:info@miniclawdbot.com" className="hover:text-indigo-600 transition-colors">Contact Us</a></li>
              <li><a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-extrabold text-slate-900 mb-6 text-lg">Legal</h3>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-indigo-600 transition-colors text-left">Privacy Policy</button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:text-indigo-600 transition-colors text-left">Terms of Service</button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Moltbot Cloud Hosting. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
             <span className="bg-slate-200 text-slate-600 px-2 py-1 rounded text-xs font-bold">Secure Payment via Wise</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;