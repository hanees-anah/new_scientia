import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ContactFormSection({ isFullPage = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: 'general',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Field refs for auto-focusing on the first invalid field
  const inputRefs = {
    name: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    message: useRef(null)
  };

  // Validation Rules & Input Constraints
  const validateField = (fieldName, value) => {
    let error = '';
    const trimmed = (value || '').trim();

    switch (fieldName) {
      case 'name':
        if (!trimmed) {
          error = 'Your name is required';
        } else if (trimmed.length < 2) {
          error = 'Name must be at least 2 characters';
        } else if (trimmed.length > 60) {
          error = 'Name cannot exceed 60 characters';
        } else if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
          error = 'Name can only contain letters, spaces, and hyphens';
        }
        break;

      case 'email':
        if (!trimmed) {
          error = 'Work email is required';
        } else if (trimmed.length > 100) {
          error = 'Email cannot exceed 100 characters';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)) {
          error = 'Please enter a valid work email (e.g. name@company.com)';
        }
        break;

      case 'phone':
        if (trimmed) {
          const digitsOnly = trimmed.replace(/[^0-9]/g, '');
          if (digitsOnly.length < 10) {
            error = 'Phone number must contain at least 10 digits';
          } else if (digitsOnly.length > 15) {
            error = 'Phone number cannot exceed 15 digits';
          } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/.test(trimmed)) {
            error = 'Please enter a valid phone number format';
          }
        }
        break;

      case 'message':
        if (!trimmed) {
          error = 'Please provide details about your project';
        } else if (trimmed.length < 10) {
          error = 'Message must be at least 10 characters long';
        } else if (trimmed.length > 1000) {
          error = 'Message cannot exceed 1000 characters';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const validateAll = () => {
    const newErrors = {};
    ['name', 'email', 'phone', 'message'].forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Strict input constraints
    if (name === 'phone') {
      const filtered = value.replace(/[^0-9+\s\-()]/g, '').slice(0, 18);
      setFormData((prev) => ({ ...prev, [name]: filtered }));
      if (touched[name]) {
        const err = validateField(name, filtered);
        setErrors((prev) => ({ ...prev, [name]: err }));
      }
      return;
    }

    let constrained = value;
    if (name === 'name') constrained = value.slice(0, 60);
    if (name === 'email') constrained = value.slice(0, 100);
    if (name === 'message') constrained = value.slice(0, 1000);

    setFormData((prev) => ({ ...prev, [name]: constrained }));

    if (touched[name]) {
      const err = validateField(name, constrained);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allTouched = {
      name: true,
      email: true,
      phone: true,
      product: true,
      message: true
    };
    setTouched(allTouched);

    const validationErrors = validateAll();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstInvalidKey = Object.keys(validationErrors)[0];
      if (inputRefs[firstInvalidKey]?.current) {
        inputRefs[firstInvalidKey].current.focus();
      }
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const getInputClassName = (fieldName) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const isValid = touched[fieldName] && !errors[fieldName] && formData[fieldName]?.trim();

    const base = "w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none";

    if (hasError) {
      return `${base} border-rose-300 bg-rose-50/30 text-rose-900 placeholder-rose-300 focus:ring-2 focus:ring-rose-400 focus:border-rose-400`;
    }
    if (isValid) {
      return `${base} border-emerald-300/80 bg-white text-brand-charcoal focus:ring-2 focus:ring-[#00448C]/20 focus:border-[#00448C]`;
    }
    return `${base} border-slate-200 text-brand-charcoal placeholder-slate-400 focus:ring-2 focus:ring-[#00448C]/20 focus:border-[#00448C] bg-slate-50/50 focus:bg-white`;
  };

  return (
    <section id="contact" className={`py-24 ${isFullPage ? 'pt-32' : 'bg-slate-50/60'} scroll-mt-20`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00448C] bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight mt-4">
            Have an Idea? Let's Build Something Great.
          </h2>
          <p className="mt-3 text-base text-brand-muted leading-relaxed">
            Reach out to discuss your software engineering needs, or inquire about our ParentEye and Shree Khata platforms.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm space-y-5">
              <h3 className="text-base font-bold text-brand-charcoal">
                Direct Channels
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#00448C] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Email</span>
                    <a href={`mailto:${companyData.contact.email}`} className="text-sm font-semibold text-brand-charcoal hover:text-[#00448C]">
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#F0A400] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Phone Support</span>
                    <div className="flex items-center gap-3 text-sm font-semibold text-brand-charcoal">
                      <a href="tel:+919663330146" className="hover:text-[#00448C]">+91 9663330146</a>
                      <span>•</span>
                      <a href="tel:+919447226824" className="hover:text-[#00448C]">+91 9447226824</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bangalore Office */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-charcoal mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00448C]" />
                  <span>Bangalore Engineering Hub</span>
                </div>
                <p className="text-xs text-slate-500 pl-5 leading-relaxed">
                  113, Regal, Whitefield, Bangalore, Karnataka - 560048
                </p>
              </div>

              {/* Cochin Office */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-charcoal mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00448C]" />
                  <span>Cochin Incubation Center</span>
                </div>
                <p className="text-xs text-slate-500 pl-5 leading-relaxed">
                  Startup Village, Kinfra Hi-Tech Park, Kalamassery, Cochin, Kerala - 683503
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 border border-slate-200/70 text-xs text-slate-500 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>We sign Non-Disclosure Agreements (NDAs) to protect your project concepts.</span>
            </div>

          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-charcoal">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                    We have received your message. Our engineering team will review your project details and get back to you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', product: 'general', message: '' });
                      setErrors({});
                      setTouched({});
                    }}
                    className="mt-4 text-xs font-semibold text-brand-blue hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700">
                          Your Name *
                        </label>
                        {touched.name && !errors.name && formData.name.trim() && (
                          <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
                            <CheckCircle2 className="w-3 h-3" /> Valid
                          </span>
                        )}
                      </div>
                      <input
                        ref={inputRefs.name}
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        maxLength={60}
                        autoComplete="name"
                        placeholder="Your Name"
                        aria-invalid={!!(touched.name && errors.name)}
                        aria-describedby={touched.name && errors.name ? "contact-name-error" : undefined}
                        className={getInputClassName('name')}
                      />
                      {touched.name && errors.name && (
                        <div id="contact-name-error" className="flex items-center gap-1 text-[11px] text-rose-600 mt-1 font-medium animate-fade-in">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700">
                          Work Email *
                        </label>
                        {touched.email && !errors.email && formData.email.trim() && (
                          <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
                            <CheckCircle2 className="w-3 h-3" /> Valid
                          </span>
                        )}
                      </div>
                      <input
                        ref={inputRefs.email}
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        maxLength={100}
                        autoComplete="email"
                        spellCheck={false}
                        placeholder="Email"
                        aria-invalid={!!(touched.email && errors.email)}
                        aria-describedby={touched.email && errors.email ? "contact-email-error" : undefined}
                        className={getInputClassName('email')}
                      />
                      {touched.email && errors.email && (
                        <div id="contact-email-error" className="flex items-center gap-1 text-[11px] text-rose-600 mt-1 font-medium animate-fade-in">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700">
                          Phone Number
                        </label>
                        {touched.phone && !errors.phone && formData.phone.trim() && (
                          <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
                            <CheckCircle2 className="w-3 h-3" /> Valid
                          </span>
                        )}
                      </div>
                      <input
                        ref={inputRefs.phone}
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        inputMode="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        maxLength={18}
                        autoComplete="tel"
                        placeholder="xxxxxxxxxx"
                        aria-invalid={!!(touched.phone && errors.phone)}
                        aria-describedby={touched.phone && errors.phone ? "contact-phone-error" : undefined}
                        className={getInputClassName('phone')}
                      />
                      {touched.phone && errors.phone && (
                        <div id="contact-phone-error" className="flex items-center gap-1 text-[11px] text-rose-600 mt-1 font-medium animate-fade-in">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-topic" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        id="contact-topic"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#00448C] transition-all"
                      >
                        <option value="general">Custom Software / Product Engineering</option>
                        <option value="parenteye">ParentEye School ERP Inquiries</option>
                        <option value="shreekhata">Shree Khata Business Ledger Inquiries</option>
                        <option value="consulting">Technology Architecture Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700">
                        Message / Project Details *
                      </label>
                      <span className={`text-[10px] font-mono ${formData.message.length > 900 ? 'text-amber-600 font-bold' : 'text-slate-400'}`}>
                        {formData.message.length}/1000
                      </span>
                    </div>
                    <textarea
                      ref={inputRefs.message}
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={1000}
                      placeholder="Message / Project Details..."
                      aria-invalid={!!(touched.message && errors.message)}
                      aria-describedby={touched.message && errors.message ? "contact-message-error" : undefined}
                      className={`${getInputClassName('message')} resize-y`}
                    />
                    {touched.message && errors.message && (
                      <div id="contact-message-error" className="flex items-center gap-1 text-[11px] text-rose-600 mt-1 font-medium animate-fade-in">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-[#00448C] hover:bg-[#003570] text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-[0_4px_20px_-2px_rgba(0,68,140,0.35)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Validating & Sending...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
