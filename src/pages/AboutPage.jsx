import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Sparkles, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  Calendar,
  Compass,
  Cpu,
  Target
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function AboutPage() {
  const milestones = [
    {
      year: "2016",
      title: "Incorporation & Genesis",
      desc: "Founded in June 2016 by veterans from JP Morgan Chase and Sasken with a vision to eliminate hurdles in digital technology adoption."
    },
    {
      year: "2017",
      title: "ParentEye Platform Launch",
      desc: "Unveiled ParentEye smart school management ERP and mobile apps, transforming paper-heavy school administration into instant digital communication."
    },
    {
      year: "2019",
      title: "Shree Khata FinTech Platform",
      desc: "Launched Shree Khata to modernize business accounts and digital bookkeeping for merchants and enterprises with automated reminders and real-time ledgers."
    },
    {
      year: "2021",
      title: "IoT & Telematics Fleet Expansion",
      desc: "Engineered real-time GPS telemetry hardware and MQTT cloud pipelines for student transit safety across educational institutions."
    },
    {
      year: "2024–2026",
      title: "Cross-Domain Hyper-Scale",
      desc: "Scaling over 50,000 active daily platform users, 120+ partnered institutions, and expanding enterprise consulting in Bangalore & Cochin."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#00448C] border border-blue-200/80 text-xs font-bold mb-4">
          <Building2 className="w-3.5 h-3.5 text-[#F0A400]" />
          <span>About Scientia Innovation</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight max-w-4xl mx-auto leading-tight">
          Bringing Technology to People. <span className="text-gradient-scientia">Evolved, Not Built.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-brand-muted max-w-3xl mx-auto leading-relaxed">
          Scientia Innovation Private Limited is an Indian product engineering and technology consulting company headquartered in Bangalore with operations at Startup Village, Cochin.
        </p>
      </section>

      {/* Main Philosophy & Vision Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00448C] font-mono">
              The Scientia Ethos
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal">
              Why We Believe "Products Are Evolved, Not Built"
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In traditional software development, months are wasted crafting exhaustive requirements documents that are obsolete the moment users touch the software. At Scientia, we reject this rigid dogma.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We apply lean thinking and high-cadence agility to build Minimum Viable Products (MVPs) that get into genuine users' hands early. Through live telemetry, metric observation, and iterative feedback loops, our products evolve into resilient, high-retention market solutions.
            </p>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero Tolerance for User Adoption Friction</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Enterprise Architecture Rigor</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Data-Backed Iteration Sprints</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Hardware-to-Cloud Integration</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 text-slate-800 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Corporate Profile</h3>
            <div className="space-y-4 text-xs font-mono pt-3 border-t border-slate-200">
              <div>
                <span className="text-slate-500 block">Legal Entity:</span>
                <span className="text-slate-900 font-semibold">Scientia Innovation Private Limited</span>
              </div>
              <div>
                <span className="text-slate-500 block">Incorporation Year:</span>
                <span className="text-slate-900 font-semibold">June 2016 (ROC Ernakulam)</span>
              </div>
              <div>
                <span className="text-slate-500 block">Engineering Hub:</span>
                <span className="text-slate-900 font-semibold">Whitefield, Bangalore, Karnataka</span>
              </div>
              <div>
                <span className="text-slate-500 block">Incubation Center:</span>
                <span className="text-slate-900 font-semibold">Startup Village, Kinfra Hi-Tech Park, Cochin</span>
              </div>
              <div>
                <span className="text-slate-500 block">Corporate Office:</span>
                <span className="text-slate-900 font-semibold">Nilambur, Malappuram, Kerala</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lavender text-brand-blue text-xs font-bold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Executive Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Steered by Enterprise Technology Veterans
          </h2>
          <p className="mt-2 text-sm sm:text-base text-brand-muted">
            Decades of combined engineering experience leading multi-million-dollar technology initiatives across global Fortune 500 corporations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {companyData.leadership.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-navy to-brand-blue text-white font-bold font-mono text-xl flex items-center justify-center shadow-md">
                    {leader.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-charcoal">{leader.name}</h3>
                    <div className="text-xs font-semibold text-brand-blue">{leader.role}</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Core Focus Areas</div>
                <div className="flex flex-wrap gap-1.5">
                  {leader.expertise.map((exp, eIdx) => (
                    <span key={eIdx} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Evolution Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lavender text-brand-blue text-xs font-bold mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Company Timeline</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal">
              A Decade of Continuous Innovation
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 sm:before:left-1/2 before:w-0.5 before:bg-slate-200">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Year Marker */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-navy border-4 border-white text-brand-blue-light flex items-center justify-center font-bold text-xs shadow-md z-10">
                  •
                </div>

                {/* Content Box */}
                <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${idx % 2 === 0 ? 'sm:pl-10' : 'sm:pr-10'}`}>
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-brand-blue/30 transition-colors">
                    <span className="text-xs font-mono font-bold text-brand-blue bg-blue-100 px-2 py-0.5 rounded">
                      {m.year}
                    </span>
                    <h3 className="text-base font-bold text-brand-charcoal mt-2 mb-1">{m.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lavender text-brand-blue text-xs font-bold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Offices & Hubs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal">
            Our Centers of Innovation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companyData.offices.map((office, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 border transition-all ${
                office.isPrimary 
                  ? 'bg-white border-brand-blue/50 shadow-md ring-2 ring-brand-blue/20' 
                  : 'bg-white border-slate-200/90 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md">
                  {office.city}
                </span>
                {office.isPrimary && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Primary HQ
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-brand-charcoal mb-1">
                {office.role}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {office.address},<br />
                {office.state} - {office.pincode}, {office.country}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href={`tel:${office.phone.replace(/\s+/g, '')}`}
                  className="font-semibold text-brand-charcoal hover:text-brand-blue flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{office.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00448C] hover:bg-[#003570] text-white font-bold text-sm shadow-md hover:shadow-[0_4px_20px_-2px_rgba(0,68,140,0.35)] transition-all"
          >
            <span>Connect with Our Leadership</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
