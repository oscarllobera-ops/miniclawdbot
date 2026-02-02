import React from 'react';
import Button from './Button';

const InfoSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Reliable Infrastructure for Your <span className="text-indigo-400">Assistant</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-medium">
            Moltbot (Clawdbot) is designed to go beyond simple conversations. It helps automate tasks, respond to users intelligently, and manage interactions across the platforms you already use — from messaging apps to community channels.
          </p>
          <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-left space-y-6 shadow-2xl">
            <h3 className="text-2xl font-bold text-white">Why VPS Hosting?</h3>
            <p className="text-slate-200 text-lg leading-relaxed">
              Hosting Moltbot on a VPS ensures it stays online <span className="text-white font-bold bg-indigo-600/50 px-2 rounded">24/7</span>, ready to respond and act whenever needed. As your usage grows, you can easily scale resources while keeping full control over the environment. This results in stable performance, faster responses, and consistent behavior.
            </p>
          </div>
          <div className="pt-6 flex flex-col items-center">
            {/* Using cta variant here for high visibility on dark background */}
            <Button variant="cta" className="shadow-indigo-500/20">
              Secure Your Server Now
            </Button>
            <p className="mt-4 text-slate-400 text-sm font-semibold">Immediate provisioning after payment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;