import React from 'react';
import { IMAGES } from '../constants';
import Button from './Button';

const GlobalReach: React.FC = () => {
  return (
    <section id="global" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="relative shadow-2xl rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-2">
              <img 
                src={IMAGES.MAP} 
                alt="Global Data Center Map" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold text-indigo-700 shadow-lg border border-indigo-100 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Real-time Coverage
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Local Development. <br/>
                <span className="text-indigo-600">Global Reach.</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Boost loading speed by choosing a server location that is as close as possible to your audience. We have data centers deployed strategically across North America, Europe, Asia, and South America.
              </p>
            </div>
            
            <ul className="space-y-4">
              {['Low Latency Response', 'Redundant Connectivity', 'Regional Compliance'].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-bold text-lg">
                  <span className="flex-shrink-0 w-3 h-3 bg-indigo-600 rounded-full mr-4 ring-4 ring-indigo-100"></span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button variant="primary">Select Your Location</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalReach;