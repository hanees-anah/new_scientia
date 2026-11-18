import React from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  ReceiptText, 
  Bus, 
  Smartphone, 
  TrendingUp, 
  ShieldCheck,
  Bell,
  CreditCard,
  FileSpreadsheet,
  Clock
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ProductsSection() {
  const parenteye = companyData.products[0];
  const shreekhata = companyData.products[1];

  return (
    <section id="products" className="py-24 bg-white border-y border-slate-100 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#00448C] border border-blue-200/80 text-xs font-bold mb-3">
            <span>Proprietary Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Purpose-Built Platforms That Scale.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            Scientia builds and operates mission-critical software platforms that empower educational institutions and modernize business accounting.
          </p>
        </div>

        {/* 2 Flagship Product Showcases */}
        <div className="space-y-16">
          
          {/* PRODUCT 1: PARENTEYE */}
          <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-200/90 shadow-sm hover:shadow-card hover:border-[#00448C]/30 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#00448C] border border-blue-200/80 text-xs font-bold">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Education Technology (EdTech)</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Platform 01</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
                  ParentEye: Smart School Management ERP
                </h3>

                <p className="text-sm font-semibold text-[#00448C]">
                  Bridging the communication gap between schools, teachers, parents, and students.
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  ParentEye transforms school administration by automating daily attendance notifications, digitizing homework diaries, providing real-time GPS bus tracking, and facilitating secure fee payments with instant digital receipts.
                </p>

                {/* 4 Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-[#00448C] shrink-0 mt-0.5" />
                    <span>Instant attendance logging with automatic SMS / Push alerts</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-[#00448C] shrink-0 mt-0.5" />
                    <span>Live GPS school bus tracking with arrival notifications</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-[#00448C] shrink-0 mt-0.5" />
                    <span>Digital homework diary & academic growth analytics</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-[#00448C] shrink-0 mt-0.5" />
                    <span>Integrated tuition fee gateway & digital receipts</span>
                  </div>
                </div>

                {/* Stats & Link */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70">
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-xl font-extrabold text-brand-navy">50,000+</div>
                      <div className="text-[11px] text-slate-500">Active Students & Parents</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-brand-navy">120+</div>
                      <div className="text-[11px] text-slate-500">Partner Institutions</div>
                    </div>
                  </div>

                  <a
                    href="https://parenteye.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00448C] hover:bg-[#003570] text-white text-xs font-bold shadow-sm hover:shadow-[0_4px_20px_-2px_rgba(0,68,140,0.35)] transition-all w-full sm:w-auto"
                  >
                    <span>Visit ParentEye (parenteye.org)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Mockup */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-semibold text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="font-bold text-slate-700">ParentEye Mobile App</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">v3.4 Production</span>
                </div>

                {/* Student Attendance Pill */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-800">Aarav Sharma — Grade 9-B</div>
                    <div className="text-[11px] text-slate-500">St. Mary's Academy • Roll #14</div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                    Present (9:02 AM)
                  </span>
                </div>

                {/* GPS Transit Status */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <Bus className="w-3.5 h-3.5 text-amber-500" />
                      <span>School Bus Telemetry (Route 12)</span>
                    </span>
                    <span className="text-amber-600 font-mono font-semibold">ETA ~4 mins</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full w-[70%]" />
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono flex justify-between">
                    <span>Campus [Out]</span>
                    <span className="text-emerald-600 font-semibold">Whitefield Gate [Next]</span>
                  </div>
                </div>

                {/* Academic Result */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-800">Scholastic Term Assessment</div>
                    <div className="text-[11px] text-slate-500">94.2% Average Score</div>
                  </div>
                  <span className="text-xs font-bold text-brand-blue flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Top 5%
                  </span>
                </div>

                <div className="pt-2 text-center">
                  <a
                    href="https://parenteye.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                  >
                    <span>Learn more at parenteye.org</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>


          {/* PRODUCT 2: SHREE KHATA */}
          <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-200/90 shadow-sm hover:shadow-card hover:border-[#F0A400]/40 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 text-xs font-bold">
                    <ReceiptText className="w-3.5 h-3.5 text-[#F0A400]" />
                    <span>FinTech & Business Accounting</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Platform 02</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
                  Shree Khata: Smart Digital Ledger & Accounts
                </h3>

                <p className="text-sm font-semibold text-amber-800">
                  Digital Bahi-Khata, automated payment recovery, and real-time cash flow analytics.
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Shree Khata replaces traditional paper ledgers and manual calculations with an intelligent digital bookkeeping platform. Designed for retail merchants, distributors, and growing enterprises to recover payments 3x faster and eliminate accounting discrepancies.
                </p>

                {/* 4 Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Digital credit & debit ledger with 100% automated cloud backup</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Automated WhatsApp & SMS payment collection reminders</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Instant GST-ready digital billing, invoices & statements</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Multi-device synchronization for business owners and accountants</span>
                  </div>
                </div>

                {/* Stats & Link */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70">
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-xl font-extrabold text-brand-navy">75%</div>
                      <div className="text-[11px] text-slate-500">Reconciliation Time Saved</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-emerald-600">3x Faster</div>
                      <div className="text-[11px] text-slate-500">Payment Collection Cadence</div>
                    </div>
                  </div>

                  <a
                    href="https://shreekhata.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#F0A400] hover:bg-[#D99400] text-slate-950 font-bold shadow-sm hover:shadow-[0_4px_20px_-2px_rgba(240,164,0,0.35)] transition-all w-full sm:w-auto"
                  >
                    <span>Visit Shree Khata (shreekhata.in)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Mockup */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-semibold text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="font-bold text-slate-700">Shree Khata Console</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold">100% Cloud Synced</span>
                </div>

                {/* Balances Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase">You'll Receive</span>
                    <div className="text-lg font-extrabold text-emerald-700 mt-0.5 font-mono">₹ 42,500</div>
                    <span className="text-[10px] text-emerald-600">8 pending balances</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-100">
                    <span className="text-[10px] font-bold text-rose-800 uppercase">You'll Pay</span>
                    <div className="text-lg font-extrabold text-rose-700 mt-0.5 font-mono">₹ 14,200</div>
                    <span className="text-[10px] text-rose-600">3 supplier accounts</span>
                  </div>
                </div>

                {/* Transaction */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-800">Radha Krishna Stores</div>
                    <div className="text-[10px] text-slate-500">Bill #1042 • Due in 2 days</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700">
                    + ₹ 8,400
                  </span>
                </div>

                {/* 1-Tap WhatsApp Reminder */}
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-medium text-emerald-950">WhatsApp Reminder</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-white px-2 py-0.5 rounded shadow-xs">
                    1-Tap Dispatched
                  </span>
                </div>

                <div className="pt-2 text-center">
                  <a
                    href="https://shreekhata.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-600 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Learn more at shreekhata.in</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
