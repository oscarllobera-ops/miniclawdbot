import React from 'react';
import { Cpu, HardDrive, Wifi, ShieldCheck, Database, Zap, Headphones, Undo2 } from 'lucide-react';
import Button from './Button';

const Specs: React.FC = () => {
  const specs = [
    { icon: Cpu, label: "Core Processor", value: "1 vCPU Core", sub: "High Performance" },
    { icon: Zap, label: "Memory", value: "4 GB RAM", sub: "DDR4 ECC" },
    { icon: HardDrive, label: "Storage", value: "50 GB NVMe", sub: "Ultra-Fast Disk" },
    { icon: Wifi, label: "Bandwidth", value: "4 TB", sub: "Global Transfer" },
  ];

  const features = [
    { icon: Database, title: "Weekly Backups", desc: "Automatic & Free" },
    { icon: ShieldCheck, title: "Malware Scanner", desc: "Proactive Security" },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Powerhouse Specs for Your AI</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Everything you need to run a responsive, intelligent, and always-available Moltbot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specs.map((spec, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors border border-slate-100">
                <spec.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{spec.value}</h3>
              <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-2">{spec.label}</p>
              <p className="text-slate-500 font-medium">{spec.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feat, idx) => (
            <div key={idx} className="flex items-center p-8 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-14 h-14 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-6 border border-indigo-200">
                <feat.icon size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">{feat.title}</h4>
                <p className="text-slate-600 font-medium">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Funnel CTA */}
        <div className="text-center flex flex-col items-center">
          <div className="inline-block p-1 bg-slate-100 rounded-full mb-6">
             <span className="px-4 py-1 text-sm font-semibold text-slate-500">Optimized for reliability</span>
          </div>
          <Button variant="cta">Start Hosting Your Moltbot</Button>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-500">
             <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1 text-green-600" /> Secure Payment</span>
             <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
             <span className="flex items-center"><Headphones className="w-4 h-4 mr-1 text-indigo-600" /> 24/7 Support</span>
             <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
             <span className="flex items-center"><Undo2 className="w-4 h-4 mr-1 text-indigo-600" /> Money-Back Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Specs;