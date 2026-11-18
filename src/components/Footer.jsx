import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { companyData } from '../data/companyData';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center">
              <Logo className="h-10 sm:h-9 w-auto" />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
              At Scientia, we combine innovation, engineering, and technology to build scalable digital products, high-throughput cloud platforms, and modern enterprise solutions.
            </p>
            <div className="text-xs text-slate-500 font-mono">
              Engineering Hubs: <strong>Bangalore & Cochin, India</strong>
            </div>
          </div>

          {/* Products Col */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Our Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://parenteye.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-[#00448C] transition-colors flex items-center gap-1.5"
                >
                  <span className="font-semibold text-slate-800">ParentEye</span>
                  <span className="text-[10px] bg-blue-50 text-[#00448C] px-1.5 py-0.2 rounded font-medium border border-blue-200/60">EdTech</span>
                </a>
              </li>
              <li>
                <a
                  href="https://shreekhata.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-[#00448C] transition-colors flex items-center gap-1.5"
                >
                  <span className="font-semibold text-slate-800">Shree Khata</span>
                  <span className="text-[10px] bg-amber-50 text-amber-800 px-1.5 py-0.2 rounded font-medium border border-amber-200/60">FinTech</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="/#products" className="hover:text-[#00448C] transition-colors">Products</a></li>
              <li><a href="/#services" className="hover:text-[#00448C] transition-colors">Services</a></li>
              <li><a href="/#about" className="hover:text-[#00448C] transition-colors">About Us</a></li>
              <li><a href="/#contact" className="hover:text-[#00448C] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-2 space-y-2 text-xs text-slate-600 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Direct Contact
            </h4>
            <a href="mailto:mail@scientiaindia.com" className="block text-slate-800 hover:text-[#00448C] font-medium transition-colors">
              mail@scientiaindia.com
            </a>
            <a href="tel:+919663330146" className="block text-slate-700 hover:text-[#00448C] transition-colors">
              +91 9663330146
            </a>
            <div className="text-[11px] text-slate-500 pt-1">
              Bangalore: 113, Regal, Whitefield
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <span>
            © {new Date().getFullYear()} Scientia Innovation Private Limited. All rights reserved.
          </span>
          <span className="font-mono text-[11px] text-slate-800 font-semibold">
            Products are evolved, not built.
          </span>
        </div>

      </div>
    </footer>
  );
}
