import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Settings, Package, Calculator, ChevronDown, ChevronRight,
  Users, Gift, TrendingUp, ArrowRight, type LucideIcon
} from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import AccordionFAQ from '../components/ui/AccordionFAQ'
import CTAStrip from '../components/ui/CTAStrip'
import { serviceCategories } from '../data/services'

const categoryIcons: Record<string, LucideIcon> = {
  operations: Settings,
  stock: Package,
  costing: Calculator,
}

const globalFaqs = [
  {
    question: 'How do I know which service is right for my business?',
    answer:
      'We start every engagement with a free discovery conversation — no pitching, just listening. We ask the right questions about your business, and then recommend the most appropriate starting point. Most businesses begin with an operational audit or stock management review.',
  },
  {
    question: 'Do you work with businesses outside Kampala?',
    answer:
      'Yes. We have worked with businesses in other parts of Uganda and are open to engagements that require travel. Remote advisory support is also available for some services.',
  },
  {
    question: 'How long is a typical engagement?',
    answer:
      'This varies by service. An operational audit may take 1–2 weeks. A stock management system setup typically takes 2–4 weeks. Ongoing advisory engagements run on monthly retainer terms. We give you a clear timeline at the start.',
  },
  {
    question: 'What is your fee structure?',
    answer:
      'We charge project-based fees for defined deliverables and monthly retainers for ongoing advisory work. We provide a clear proposal before any engagement begins — no surprise invoices.',
  },
]

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const fadeUpItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

function ServiceCard({ service, categoryId }: { service: (typeof serviceCategories)[0]['services'][0]; categoryId: string }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-ops-border shadow-card hover:shadow-card-hover transition-all duration-300">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <div>
          <h3 className="font-bold text-ops-text text-base">{service.name}</h3>
          <p className="text-ops-text-secondary text-sm mt-0.5 line-clamp-2">{service.description}</p>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-ops-surface border border-ops-border flex items-center justify-center text-ops-teal"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 border-t border-ops-border pt-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-ops-surface rounded-xl p-4 border border-ops-border">
                  <div className="flex items-center gap-2 mb-1.5 text-ops-text-muted text-xs font-semibold uppercase tracking-wider">
                    <Users size={12} /> Who It's For
                  </div>
                  <p className="text-ops-text text-sm leading-relaxed">{service.whoItsFor}</p>
                </div>
                <div className="bg-ops-surface rounded-xl p-4 border border-ops-border">
                  <div className="flex items-center gap-2 mb-1.5 text-ops-text-muted text-xs font-semibold uppercase tracking-wider">
                    <Gift size={12} /> What You Get
                  </div>
                  <p className="text-ops-text text-sm leading-relaxed">{service.whatYouGet}</p>
                </div>
                <div className="bg-ops-teal-light rounded-xl p-4 border border-ops-teal/20">
                  <div className="flex items-center gap-2 mb-1.5 text-ops-teal-dark text-xs font-semibold uppercase tracking-wider">
                    <TrendingUp size={12} /> Outcome
                  </div>
                  <p className="text-ops-teal-hover text-sm leading-relaxed font-medium">{service.outcome}</p>
                </div>
              </div>
              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-ops-teal hover:bg-ops-teal-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  Request This Service <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('operations')
  const category = serviceCategories.find(c => c.id === activeCategory)!

  return (
    <>
      <Helmet>
        <title>Services | Ops X Consulting — Operations, Stock Management & Costing</title>
        <meta
          name="description"
          content="Explore Ops X Consulting's services: Operational Audits, Process Development, Inventory Management, Cost Analysis, and more. Serving hospitality and manufacturing businesses in Uganda."
        />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-hero-gradient relative overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(20,184,166,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="max-w-7xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ops-teal/30 bg-ops-teal/10 text-ops-teal text-xs font-semibold tracking-widest uppercase mb-6">
              What We Offer
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Services built for the
              <span className="block text-gradient-teal">realities of your industry.</span>
            </h1>
            <p className="text-ops-dark-text-secondary text-lg leading-relaxed">
              Our services are grouped into three practical disciplines. Every one of them is delivered hands-on, customised to your business, and measured against agreed outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORY TABS ────────────────────────────────── */}
      <section className="section-padding bg-ops-teal-light">
        <div className="container-max">

          {/* Tab Selector */}
          <SectionWrapper className="mb-10">
            <div className="flex flex-col sm:flex-row gap-3 p-1.5 bg-ops-surface rounded-2xl border border-ops-border max-w-2xl mx-auto">
              {serviceCategories.map((cat) => {
                const Icon = categoryIcons[cat.id]
                const isActive = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-ops-teal text-white shadow-sm'
                        : 'text-ops-text-secondary hover:text-ops-text hover:bg-ops-surface-alt'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="hidden sm:inline">{cat.name}</span>
                    <span className="sm:hidden">{cat.name.split(' ')[0]}</span>
                  </button>
                )
              })}
            </div>
          </SectionWrapper>

          {/* Category Header */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-10">
                <h2 className="section-heading mb-3">{category.name}</h2>
                <p className="text-lg text-ops-teal font-semibold">{category.tagline}</p>
              </div>

              {/* Service Cards */}
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
                className="space-y-4 mb-12"
              >
                {category.services.map((service) => (
                  <motion.div key={service.id} variants={fadeUpItem}>
                    <ServiceCard service={service} categoryId={activeCategory} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Category FAQs */}
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-ops-text mb-5 text-center">
                  Common questions about {category.name}
                </h3>
                <AccordionFAQ items={category.faqs} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── HOW WE ENGAGE ────────────────────────────────── */}
      <section className="section-padding bg-ops-surface-alt">
        <div className="container-max">
          <SectionWrapper className="text-center mb-10">
            <div className="section-label justify-center">How We Work</div>
            <h2 className="section-heading mx-auto max-w-xl">Starting is simple.</h2>
            <p className="section-subheading mx-auto text-center">
              No long procurement process. No upfront commitment. Just a conversation first.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Book a Discovery Call', desc: 'Free 30-minute call. We listen first. No pitching.' },
              { step: '2', title: 'Receive a Clear Proposal', desc: 'Specific scope, timeline, and fee. No hidden extras.' },
              { step: '3', title: 'We Get to Work', desc: 'On-site, hands-on, and accountable from day one.' },
            ].map((item) => (
              <SectionWrapper key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-ops-teal text-white text-lg font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-ops-text mb-2">{item.title}</h3>
                <p className="text-ops-text-secondary text-sm">{item.desc}</p>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL FAQs ──────────────────────────────────── */}
      <section className="section-padding bg-ops-bg">
        <div className="container-max">
          <SectionWrapper className="text-center mb-8">
            <div className="section-label justify-center">General Questions</div>
            <h2 className="section-heading mx-auto max-w-xl">Frequently asked questions</h2>
          </SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <AccordionFAQ items={globalFaqs} />
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  )
}
