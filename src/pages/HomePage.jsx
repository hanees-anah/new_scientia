import React from 'react';
import { 
  ArrowRight, 
  Layers, 
  Code2, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Building2, 
  MapPin, 
  Users, 
  Zap,
  Award,
  GraduationCap,
  ReceiptText,
  ExternalLink
} from 'lucide-react';
import HeroInquiryForm from '../components/HeroInquiryForm';
import ProductsSection from '../components/ProductsSection';
import ContactFormSection from '../components/ContactFormSection';
import { companyData } from '../data/companyData';

export default function HomePage() {
  const getServiceIcon = (id) => {
    switch (id) {
      case 'product-engineering': return <Layers className="w-5 h-5" />;
      case 'cloud-software': return <Code2 className="w-5 h-5" />;
      case 'digital-transformation': return <Sparkles className="w-5 h-5" />;
      case 'iot-telematics': return <Cpu className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-blue selection:text-white">
      
      {/* 1. HERO SECTION WITH INQUIRY FORM AT THE START */}
      <section className="relative pt-32 sm:pt-36 pb-20 overflow-hidden bg-brand-bg bg-grid-slate">
        
        {/* Ambient Gradient Lighting */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-[#00448C]/10 via-[#F0A400]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-16 right-10 w-72 h-72 bg-[#00448C]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Split Grid: Left Content, Right Inquiry Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Value Proposition & Brand Proof */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-xs text-xs font-semibold text-slate-700 animate-fade-in hover:border-[#00448C]/40 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#00448C] animate-pulse" />
                <span className="text-[#00448C] font-bold">Scientia Innovation</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-600">Dual R&D Centers: Bangalore & Cochin</span>
              </div>

              {/* Headline */}
              <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002855] tracking-tight leading-[1.15] font-sans">
                Transforming Businesses,{' '}
                <span className="text-gradient-blue inline">
                  Shaping Tomorrow
                </span>
                <span className="inline-flex items-baseline ml-1 tracking-tight select-none font-bold" aria-hidden="true">
                  <span className="animate-wavy-dot text-[#00448C]" style={{ animationDelay: '0ms' }}>.</span>
                  <span className="animate-wavy-dot text-[#0854A8]" style={{ animationDelay: '150ms' }}>.</span>
                  <span className="animate-wavy-dot text-[#D99400]" style={{ animationDelay: '300ms' }}>.</span>
                  {/* <span className="animate-wavy-dot text-[#F0A400]" style={{ animationDelay: '450ms' }}>.</span> */}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-brand-muted max-w-xl font-normal leading-relaxed">
                At Scientia, we combine innovation, engineering, and technology to build scalable digital products, high-throughput cloud platforms, and connected systems that drive real business outcomes.
              </p>

              {/* 2 Flagship Product Badges in Hero */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <a
                  href="https://parenteye.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200/80 hover:bg-blue-100 transition-colors group"
                >
                  <GraduationCap className="w-4 h-4 text-[#00448C]" />
                  <span className="text-xs font-bold text-slate-800">ParentEye</span>
                  <span className="text-[10px] text-[#00448C] font-semibold">50,000+ Users</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#00448C]" />
                </a>

                <a
                  href="https://shreekhata.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200/80 hover:bg-amber-100 transition-colors group"
                >
                  <ReceiptText className="w-4 h-4 text-amber-700" />
                  <span className="text-xs font-bold text-slate-800">Shree Khata</span>
                  <span className="text-[10px] text-amber-800 font-semibold">Smart Ledger</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-800" />
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>10+ Years Track Record</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>99.9% Cloud Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Rapid MVP Deployment</span>
                </div>
              </div>

              {/* Quick Scroll Links */}
              <div className="pt-3 flex items-center gap-4 text-xs font-bold">
                <a href="#products" className="text-[#00448C] hover:text-[#003570] flex items-center gap-1 group">
                  <span>Explore Platforms</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <span className="text-slate-300">•</span>
                <a href="#services" className="text-slate-600 hover:text-slate-900 flex items-center gap-1">
                  <span>Engineering Services</span>
                </a>
              </div>

            </div>

            {/* Right Column: THE INQUIRY FORM AT THE START */}
            <div className="lg:col-span-5">
              <HeroInquiryForm />
            </div>

          </div>

   

          {/* Minimalist Stats Strip */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyData.stats.map((stat, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-white/70 border border-slate-200/60 shadow-xs hover:bg-white hover:shadow-sm transition-all text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-sans tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 2. FLAGSHIP PRODUCTS SECTION (PARENTEYE & SHREE KHATA) */}
      <ProductsSection />


      {/* 3. CORE CAPABILITIES & SERVICES */}
      <section id="services" className="py-24 bg-brand-bg relative scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#00448C] border border-blue-200/80 text-xs font-bold mb-3">
              <Layers className="w-3.5 h-3.5 text-[#F0A400]" />
              <span>Full-Lifecycle Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              What We Do: Engineering Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
              From lean initial MVP architectures to high-throughput cloud backends and IoT telemetry, we build software built for long-term reliability.
            </p>
          </div>

          {/* 4 Clean Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-card hover:border-[#00448C]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#00448C] border border-blue-100 flex items-center justify-center shadow-xs">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-brand-charcoal mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono bg-slate-50 text-slate-700 border border-slate-200/80 px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 4. ABOUT SCIENTIA & CORE PHILOSOPHY */}
      <section id="about" className="py-24 bg-white border-y border-slate-100 relative scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#00448C] border border-blue-200/80 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#F0A400]" />
                <span>Our Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
                "Products Are Evolved, Not Built."
              </h2>

              <blockquote className="p-4 rounded-2xl bg-blue-50/60 border-l-4 border-[#00448C] text-slate-800 font-medium text-sm sm:text-base italic leading-relaxed">
                "{companyData.philosophyDescription}"
              </blockquote>

              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                Founded in 2016 and led by technology executives with VP-level backgrounds at <strong>JP Morgan Chase, Sasken, and HP</strong>, Scientia brings enterprise-level engineering standards to software development.
              </p>

              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                Rather than building bloated software in isolation, we apply lean thinking, rapid feedback loops, and user empathy to eliminate adoption friction and build digital products that people love.
              </p>

              {/* 4 Value Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Lean, Agile Product Engineering</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Enterprise Security & Cloud Rigor</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dual Hubs: Bangalore & Cochin</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>User Adoption First Focus</span>
                </div>
              </div>
            </div>

            {/* Right: Leadership & Credibility Card */}
            <div className="lg:col-span-5 bg-slate-50/80 rounded-3xl p-7 sm:p-8 border border-slate-200/90 space-y-6 shadow-sm text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-400">
                <span>Executive Leadership</span>
                <span className="text-brand-blue font-mono">20+ Yrs Exp</span>
              </div>

              {companyData.leadership.map((leader, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white font-bold font-mono text-sm flex items-center justify-center shrink-0 shadow-sm">
                    {leader.initials}
                  </div>
                  <div>
                    <div className="text-base font-bold text-brand-charcoal">{leader.name}</div>
                    <div className="text-xs font-semibold text-brand-blue mb-1">{leader.role}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{leader.bio}</div>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Incorporated: June 2016</span>
                <span className="text-emerald-700 font-bold">ROC Ernakulam</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 5. CONTACT & HUBS SECTION */}
      <ContactFormSection />

    </div>
  );
}
