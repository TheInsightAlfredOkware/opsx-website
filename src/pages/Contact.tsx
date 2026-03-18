import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, MessageCircle, CheckCircle2, Send, AlertCircle } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'

const WA_LINK = 'https://wa.me/256758893821'
const EMAIL = 'opsxconsulting@gmail.com'
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || ''

const services = [
  'Operations Consulting',
  'Stock Management',
  'Costing Services',
  'ITS V.Pro / Inventory System',
  'Google Sheets Stock System',
  'General Enquiry',
]

interface FormData {
  name: string
  business: string
  phone: string
  email: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Your name is required.'
  if (!data.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!data.phone.trim()) errors.phone = 'Phone / WhatsApp number is required.'
  if (!data.service) errors.service = 'Please select a service.'
  if (!data.message.trim()) {
    errors.message = 'Please tell us a bit about your business or request.'
  } else if (data.message.trim().length < 20) {
    errors.message = 'Please provide a bit more detail (at least 20 characters).'
  }
  return errors
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    business: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')

    // If Formspree ID is set, use it. Otherwise mailto fallback.
    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        })
        if (res.ok) {
          setStatus('success')
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
    } else {
      // mailto fallback
      const subject = encodeURIComponent(`Ops X Enquiry: ${formData.service || 'General'}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nBusiness: ${formData.business}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
      )
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
      setStatus('success')
    }
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-ops-text placeholder:text-ops-text-muted bg-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-ops-teal focus:ring-offset-1 ${
      errors[field]
        ? 'border-red-400 focus:ring-red-400'
        : 'border-ops-border hover:border-ops-border-hover focus:border-ops-teal'
    }`

  return (
    <>
      <Helmet>
        <title>Contact Us | Ops X Consulting — Book a Free Discovery Call</title>
        <meta
          name="description"
          content="Get in touch with Ops X Consulting. Book a free discovery call, send us a message, or chat on WhatsApp. Based in Kampala, Uganda."
        />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-hero-gradient relative overflow-hidden py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(20,184,166,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="max-w-7xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ops-teal/30 bg-ops-teal/10 text-ops-teal text-xs font-semibold tracking-widest uppercase mb-6">
              Get In Touch
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Let's talk about
              <span className="block text-gradient-teal">your operation.</span>
            </h1>
            <p className="text-ops-dark-text-secondary text-lg leading-relaxed">
              No commitments. No sales pressure. Just a straightforward conversation about your business and whether we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <section className="section-padding bg-ops-teal-light">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <SectionWrapper>
                <h2 className="text-2xl font-bold text-ops-text mb-2">Contact details</h2>
                <p className="text-ops-text-secondary text-sm leading-relaxed mb-6">
                  Reach us through any of the channels below. WhatsApp is the fastest for quick questions.
                </p>

                <div className="space-y-4">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 p-4 bg-ops-surface rounded-xl border border-ops-border hover:border-ops-teal hover:bg-ops-teal-light transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-ops-teal-subtle flex items-center justify-center text-ops-teal group-hover:bg-ops-teal group-hover:text-white transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-ops-text-muted font-semibold uppercase tracking-wider mb-0.5">Email</div>
                      <div className="text-ops-text text-sm font-medium">{EMAIL}</div>
                    </div>
                  </a>

                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-ops-surface rounded-xl border border-ops-border hover:border-green-400 hover:bg-green-50 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-ops-text-muted font-semibold uppercase tracking-wider mb-0.5">WhatsApp</div>
                      <div className="text-ops-text text-sm font-medium">+256 758 893 821</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-ops-surface rounded-xl border border-ops-border">
                    <div className="w-10 h-10 rounded-lg bg-ops-surface-alt flex items-center justify-center text-ops-text-secondary">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-ops-text-muted font-semibold uppercase tracking-wider mb-0.5">Location</div>
                      <div className="text-ops-text text-sm font-medium">Kampala, Uganda</div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>

              <SectionWrapper delay={0.15}>
                <div className="bg-ops-dark rounded-2xl p-6 border border-ops-dark-border">
                  <h3 className="text-white font-bold mb-3">Book a Discovery Call</h3>
                  <p className="text-ops-dark-text-secondary text-sm leading-relaxed mb-4">
                    A free 30-minute call. We'll ask about your operation, understand your challenges, and tell you honestly whether and how we can help.
                  </p>
                  <div className="space-y-2 text-sm">
                    {['No commitment required', 'We listen first, recommend second', 'Specific to your business, not generic advice'].map(p => (
                      <div key={p} className="flex items-center gap-2 text-ops-dark-text-secondary">
                        <CheckCircle2 size={13} className="text-ops-teal flex-shrink-0" />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <SectionWrapper delay={0.1}>
                <div className="bg-white rounded-2xl border border-ops-border p-7 sm:p-8 shadow-card">

                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-ops-teal-subtle flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 size={32} className="text-ops-teal" />
                      </div>
                      <h2 className="text-2xl font-bold text-ops-text mb-3">Message received.</h2>
                      <p className="text-ops-text-secondary leading-relaxed max-w-sm mx-auto">
                        Thank you for reaching out. We'll review your message and get back to you within 1 business day. For faster response, WhatsApp us directly.
                      </p>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                      >
                        <MessageCircle size={16} /> Continue on WhatsApp
                      </a>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold text-ops-text mb-1">Send us a message</h2>
                      <p className="text-ops-text-muted text-sm mb-6">We respond within 1 business day.</p>

                      <form onSubmit={handleSubmit} noValidate className="space-y-4">
                        {/* Row 1: Name + Business */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-xs font-semibold text-ops-text-secondary mb-1.5">
                              Full Name <span className="text-red-400">*</span>
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your full name"
                              className={inputClass('name')}
                              autoComplete="name"
                            />
                            {errors.name && (
                              <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.name}</p>
                            )}
                          </div>
                          <div>
                            <label htmlFor="business" className="block text-xs font-semibold text-ops-text-secondary mb-1.5">
                              Business Name
                            </label>
                            <input
                              id="business"
                              name="business"
                              type="text"
                              value={formData.business}
                              onChange={handleChange}
                              placeholder="Your business (optional)"
                              className={inputClass('name').replace(errors.name ? 'border-red-400 focus:ring-red-400' : '', 'border-ops-border hover:border-ops-border-hover focus:border-ops-teal')}
                              autoComplete="organization"
                            />
                          </div>
                        </div>

                        {/* Row 2: Phone + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="phone" className="block text-xs font-semibold text-ops-text-secondary mb-1.5">
                              Phone / WhatsApp <span className="text-red-400">*</span>
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+256 700 000 000"
                              className={inputClass('phone')}
                              autoComplete="tel"
                            />
                            {errors.phone && (
                              <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.phone}</p>
                            )}
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-ops-text-secondary mb-1.5">
                              Email Address <span className="text-red-400">*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="you@yourbusiness.com"
                              className={inputClass('email')}
                              autoComplete="email"
                            />
                            {errors.email && (
                              <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.email}</p>
                            )}
                          </div>
                        </div>

                        {/* Service */}
                        <div>
                          <label htmlFor="service" className="block text-xs font-semibold text-ops-text-secondary mb-1.5">
                            Service Interested In <span className="text-red-400">*</span>
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={inputClass('service')}
                          >
                            <option value="">Select a service…</option>
                            {services.map(s => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          {errors.service && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.service}</p>
                          )}
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="block text-xs font-semibold text-ops-text-secondary mb-1.5">
                            Tell us about your business / request <span className="text-red-400">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Briefly describe your business, what you're struggling with, or what you'd like to achieve…"
                            className={inputClass('message')}
                          />
                          {errors.message && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.message}</p>
                          )}
                        </div>

                        {/* Submit */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-1">
                          <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="inline-flex items-center justify-center gap-2 bg-ops-teal hover:bg-ops-teal-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-teal-glow hover:-translate-y-0.5"
                          >
                            {status === 'submitting' ? (
                              <>
                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                                </svg>
                                Sending…
                              </>
                            ) : (
                              <>
                                <Send size={16} /> Send Message
                              </>
                            )}
                          </button>
                          <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
                          >
                            <MessageCircle size={16} /> WhatsApp instead
                          </a>
                        </div>

                        {status === 'error' && (
                          <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                            <AlertCircle size={16} className="flex-shrink-0" />
                            Something went wrong. Please try WhatsApp or email us directly.
                          </div>
                        )}
                      </form>
                    </>
                  )}
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
