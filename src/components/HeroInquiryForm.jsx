import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, ShieldCheck, Sparkles, Phone, AlertCircle } from 'lucide-react';

export default function HeroInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'custom-product',
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
  const validateField = (name, value) => {
    let error = '';
    const trimmed = (value || '').trim();

    switch (name) {
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

      case 'phone': {
        const digitsOnly = trimmed.replace(/[^0-9]/g, '');
        if (!trimmed) {
          error = 'Phone / WhatsApp number is required';
        } else if (digitsOnly.length < 10) {
          error = 'Phone number must contain at least 10 digits';
        } else if (digitsOnly.length > 15) {
          error = 'Phone number cannot exceed 15 digits';
        } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/.test(trimmed)) {
          error = 'Please enter a valid phone number format';
        }
        break;
      }

      case 'message':
        if (trimmed && trimmed.length < 10) {
          error = 'Please provide at least 10 characters describing your project';
        } else if (trimmed.length > 500) {
          error = 'Project description cannot exceed 500 characters';
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

    // Strict input constraint for phone field: allow only phone characters
    if (name === 'phone') {
      const filtered = value.replace(/[^0-9+\s\-()]/g, '').slice(0, 18);
      setFormData((prev) => ({ ...prev, [name]: filtered }));
      if (touched[name]) {
        const err = validateField(name, filtered);
        setErrors((prev) => ({ ...prev, [name]: err }));
      }
      return;
    }

    // Strict length constraints
    let constrainedValue = value;
    if (name === 'name') constrainedValue = value.slice(0, 60);
    if (name === 'email') constrainedValue = value.slice(0, 100);
    if (name === 'message') constrainedValue = value.slice(0, 500);

    setFormData((prev) => ({ ...prev, [name]: constrainedValue }));

    if (touched[name]) {
      const err = validateField(name, constrainedValue);
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
      interest: true,
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

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // graceful fallback
      }
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
      return `${base} border-emerald-300/80 bg-white text-brand-charcoal focus:ring-2 focus:ring-[#00448C] focus:border-transparent`;
    }
    return `${base} border-slate-200 text-brand-charcoal placeholder-slate-400 focus:ring-2 focus:ring-[#00448C] focus:border-transparent bg-slate-50/50 focus:bg-white`;
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-2xl relative text-left">
      
      {/* Top Header */}
      <div className="pb-4 border-b border-slate-100 mb-4">
        <h3 className="text-xl font-extrabold text-brand-charcoal tracking-tight">
          Start Your Project Inquiry
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Speak directly with our senior technology team in Bangalore & Cochin.
        </p>
      </div>

      {submitted ? (
        <div className="py-8 text-center space-y-3 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-lg font-bold text-brand-charcoal">
            Inquiry Received!
          </h4>
          <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. Our senior engineering architects will review your brief and contact you within 24 business hours.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', interest: 'custom-product', message: '' });
                setErrors({});
                setTouched({});
              }}
              className="text-xs font-semibold text-[#00448C] hover:underline"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
          
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="inquiry-name" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
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
                id="inquiry-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={60}
                autoComplete="name"
                placeholder="Your Name"
                aria-invalid={!!(touched.name && errors.name)}
                aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                className={getInputClassName('name')}
              />
              {touched.name && errors.name && (
                <div id="name-error" className="flex items-center gap-1 text-[11px] text-rose-600 mt-1 font-medium animate-fade-in">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="inquiry-email" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
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
                id="inquiry-email"
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
                aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                className={getInputClassName('email')}
              />
              {touched.email && errors.email && (
                <div id="email-error" className="flex items-center gap-1 text-[11px] text-rose-600 mt-1 font-medium animate-fade-in">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>
          </div>

          {/* Phone & Inquiry Topic Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="inquiry-phone" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                  Phone / WhatsApp *
                </label>
                {touched.phone && !errors.phone && formData.phone.trim() && (
                  <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" /> Valid
                  </span>
                )}
              </div>
              <input
                ref={inputRefs.phone}
                id="inquiry-phone"
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
                aria-describedby={touched.phone && errors.phone ? "phone-error" : undefined}
                className={getInputClassName('phone')}
              />
              {touched.phone && errors.phone && (
                <div id="phone-error" className="flex items-center gap-1 text-[11px] text-rose-600 mt-1 font-medium animate-fade-in">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.phone}</span>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="inquiry-topic" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                Inquiry Topic
              </label>
              <select
                id="inquiry-topic"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-brand-charcoal bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00448C] focus:border-transparent transition-all"
              >
                <option value="parenteye">ParentEye School ERP Inquiries</option>
                <option value="shreekhata">Shree Khata Business Ledger Platform</option>
                <option value="custom-product">Custom Product Engineering (MVP to Scale)</option>
                <option value="cloud-software">Cloud & Distributed Software</option>
                <option value="iot-telematics">IoT & GPS Telemetry Systems</option>
                <option value="consulting">Technology Architecture Audit</option>
              </select>
            </div>
          </div>

          {/* Message Row with Character Counter */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="inquiry-message" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                Project Goals & Requirements
              </label>
              <span className={`text-[10px] font-mono ${formData.message.length > 450 ? 'text-amber-600 font-bold' : 'text-slate-400'}`}>
                {formData.message.length}/500
              </span>
            </div>
            <textarea
              ref={inputRefs.message}
              id="inquiry-message"
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={500}
              placeholder="Project Goals & Requirements..."
              aria-invalid={!!(touched.message && errors.message)}
              aria-describedby={touched.message && errors.message ? "message-error" : undefined}
              className={`${getInputClassName('message')} resize-none`}
            />
            {touched.message && errors.message && (
              <div id="message-error" className="flex items-center gap-1 text-[11px] text-rose-600 mt-1 font-medium animate-fade-in">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.message}</span>
              </div>
            )}
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-[#00448C] hover:bg-[#003570] text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-[0_4px_25px_-2px_rgba(0,68,140,0.35)] flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
          >
            {loading ? (
              <span>Validating & Preparing Consultation...</span>
            ) : (
              <>
                <span>Get Free Consultation</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Micro Trust Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2 border-t border-slate-100">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>NDA Protected</span>
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#F0A400]" />
              <span>24h Response SLA</span>
            </span>
            <a href="tel:+919663330146" className="text-slate-600 hover:text-[#00448C] font-semibold flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>+91 9663330146</span>
            </a>
          </div>

        </form>
      )}

    </div>
  );
}
