import React from 'react';
import ContactFormSection from '../components/ContactFormSection';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* ContactFormSection handles full page presentation */}
      <ContactFormSection isFullPage={true} />

      {/* Verified Map & Location Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-brand-charcoal">
              Visiting Our Engineering Hubs
            </h3>
            <p className="text-sm text-brand-muted mt-1">
              We welcome prospective enterprise partners, institutional leaders, and founders at our Bangalore & Cochin facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Bangalore Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-100 px-2.5 py-1 rounded">
                  Bangalore Tech Hub
                </span>
                <span className="text-xs text-slate-500 font-mono">Karnataka</span>
              </div>
              <h4 className="text-lg font-bold text-brand-charcoal">
                113, Regal, Whitefield
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whitefield, Bangalore, Karnataka - 560048, India.<br />
                Strategically located in India's technology capital near major IT corridors.
              </p>
              <div className="pt-2 text-xs text-slate-500">
                Direct: <a href="tel:+919663330146" className="text-brand-blue font-semibold hover:underline">+91 9663330146</a>
              </div>
            </div>

            {/* Cochin Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded">
                  Cochin Incubation Center
                </span>
                <span className="text-xs text-slate-500 font-mono">Kerala</span>
              </div>
              <h4 className="text-lg font-bold text-brand-charcoal">
                Startup Village, Kinfra Hi-Tech Park
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kalamassery, Cochin, Kerala - 683503, India.<br />
                Pioneering innovation ecosystem fostering lean startups and agile incubation.
              </p>
              <div className="pt-2 text-xs text-slate-500">
                Direct: <a href="tel:+919447226824" className="text-brand-blue font-semibold hover:underline">+91 9447226824</a>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-blue shrink-0" />
              <span>Office Hours: Monday – Saturday (9:00 AM – 6:30 PM IST)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Registered under Registrar of Companies (ROC) Ernakulam</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
