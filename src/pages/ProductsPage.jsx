import React from 'react';
import ProductsSection from '../components/ProductsSection';
import ContactFormSection from '../components/ContactFormSection';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-brand-bg pt-20">
      <ProductsSection />
      <ContactFormSection />
    </div>
  );
}
