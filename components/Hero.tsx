import React from 'react';
import { IMAGES } from '../constants';
import Button from './Button';
import { CheckCircle2, Zap, ShieldCheck, Headphones, Undo2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-bold text-sm tracking-wide uppercase border border-indigo-200">
                <Zap size={16} className="mr-2 fill-indigo-600" /> Premium Cloud Hosting
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Run Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Moltbot</span> Exactly How You Want
              </h1>
              <p className="text-xl text-slate-700 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Unlock the true potential of your AI assistant. 24/7 uptime, persistent context, and powerful automation infrastructure designed for Moltbot (Clawdbot).
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                <Button variant="cta" className="w-full sm:w-auto">Get 67% Off Now</Button>
                <Button variant="secondary" showIcon={false} className="w-full sm:w-auto text-slate-800">View Features</Button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm font-semibold text-slate-600">
                <div className="flex items-center px-3 py-1.5 bg-white/60 rounded-full border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-4 h-4 mr-2 text-green-600" /> Secure Payment
                </div>
                <div className="flex items-center px-3 py-1.5 bg-white/60 rounded-full border border-slate-200 shadow-sm">
                  <Headphones className="w-4 h-4 mr-2 text-indigo-600" /> 24/7 Support
                </div>
                <div className="flex items-center px-3 py-1.5 bg-white/60 rounded-full border border-slate-200 shadow-sm">
                  <Undo2 className="w-4 h-4 mr-2 text-indigo-600" /> Money-Back Guarantee
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm font-bold text-slate-500">
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> 99.9% Uptime</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Instant Setup</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white bg-white">
              <img 
                src={IMAGES.BANNER} 
                alt="Moltbot AI Visualization" 
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;