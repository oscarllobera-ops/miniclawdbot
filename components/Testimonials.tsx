import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import Button from './Button';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Trusted by Developers</h2>
          <p className="text-xl text-slate-600 font-medium">See what others are building with Moltbot Cloud.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                  <Quote className="text-indigo-500 w-6 h-6 fill-indigo-500" />
                </div>
              </div>
              <p className="text-slate-700 text-lg mb-8 flex-grow leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center border-t border-slate-100 pt-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4 object-cover ring-4 ring-indigo-50"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-indigo-600 font-bold uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;