import React from 'react';
import { Layers, Code2, Sparkles, Cpu, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';
import ContactFormSection from '../components/ContactFormSection';

export default function ServicesPage() {
  const getServiceIcon = (id) => {
    switch (id) {
      case 'product-engineering': return <Layers className="w-6 h-6" />;
      case 'cloud-software': return <Code2 className="w-6 h-6" />;
      case 'digital-transformation': return <Sparkles className="w-6 h-6" />;
      case 'iot-telematics': return <Cpu className="w-6 h-6" />;
      default: return <Layers className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg pt-28 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00448C] bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
            Engineering Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight mt-4">
            Capabilities Engineered for Scale.
          </h1>
          <p className="mt-4 text-base text-brand-muted leading-relaxed">
            From lean initial MVPs to high-throughput cloud backends and IoT telemetry, we engineer resilient software systems.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {companyData.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#00448C] border border-blue-100 flex items-center justify-center mb-6 shadow-xs">
                  {getServiceIcon(service.id)}
                </div>
                <h2 className="text-2xl font-bold text-brand-charcoal mb-3">
                  {service.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                {service.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono bg-slate-50 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <ContactFormSection />
    </div>
  );
}
