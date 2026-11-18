import React from 'react';
import { ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import ProductsSection from '../components/ProductsSection';
import ContactFormSection from '../components/ContactFormSection';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-brand-bg pt-28 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#00448C] bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
          Deployed Platforms & Impact
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight mt-4">
          Software Systems In Production.
        </h1>
        <p className="mt-4 text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Real platforms engineered and operated by Scientia across educational institutions and business accounts.
        </p>
      </div>

      <ProductsSection />
      <ContactFormSection />
    </div>
  );
}
