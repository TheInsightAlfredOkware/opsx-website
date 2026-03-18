import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Settings, Package, Calculator, ArrowRight, CheckCircle2, Quote,
  TrendingUp, Shield, Eye, ChevronRight, Star, MessageCircle, BarChart3, Lock
} from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import CTAStrip from '../components/ui/CTAStrip'
import { testimonials } from '../data/testimonials'

const WA_LINK = 'https://wa.me/256758893821'

const pillars = [
  {
    icon: Settings,
    title: 'Operations Consulting',
    description:
      'We diagnose operational inefficiencies, redesign processes, and build systems that help your business run with less chaos and more control.',
    link: '/services',
    color: 'from-teal-500/10 to-teal-600/5',
    iconBg: 'bg-ops-teal-subtle text-ops-teal-dark',
  },
  {
    icon: Package,
    title: 'Stock Management',
    description:
      'From receiving controls to monthly reconciliation — we put rigour into how your inventory is managed, tracked, and accounted for.',
    link: '/services',
    color: 'from-blue-500/10 to-blue-600/5',
    iconBg: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Calculator,
    title: 'Costing Services',
    description:
      'Accurate product costing, pricing strategy, and financial analysis that ensures every item you sell actually contributes to profitability.',
    link: '/services',
    color: 'from-violet-500/10 to-violet-600/5',
    iconBg: 'bg-violet-50 text-violet-600',
  },
]

const whyReasons = [
  'We work on-site, not from a report — we understand your actual operations, not a sanitised version.',
  'Every deliverable is customised to your business. No template-first, businesses-second approach.',
  'We speak the language of hospitality operations — food cost %, GRNs, PAR levels, variance reporting.',
  'Our recommendations come with implementation support, not just a slide deck.',
  'We build systems your team can actually run — not systems that require us to maintain them.',
  'We track outcomes, not activities. Results are agreed upfront and measured honestly.',
]

const caseStudies = [
  {
    company: 'Bar & Restaurant Client',
    industry: 'Bar & Restaurant',
    challenge: 'No receiving controls, zero stock system, food cost unknown.',
    result: 'Food cost identified and reduced from ~42% to 34.2% within 90 days.',
    metric: '–7.8%',
    metricLabel: 'Food Cost',
  },
  {
    company: 'Multi-Outlet Café Client',
    industry: 'Café (2 outlets)',
    challenge: 'Stock reconciliation taking 8+ hours monthly, frequent discrepancies.',
    result: 'Custom Google Sheets system built. Reconciliation now under 1 hour.',
    metric: '–87%',
    metricLabel: 'Reconciliation Time',
  },
  {
    company: 'Beverages Manufacturer',
    industry: 'Manufacturing',
    challenge: 'Inconsistent product costing across 12 SKUs. Pricing guesswork.',
    result: 'Standardised costing methodology. Pricing revised for improved margin on 9 of 12 SKUs.',
    metric: '12 SKUs',
    metricLabel: 'Properly Costed',
  },
]

const metrics = [
  { label: 'Businesses Supported', target: 40, suffix: '+', prefix: '' },
  { label: 'Avg. Reduction in Food Cost %', target: 6, suffix: '%', prefix: '–' },
  { label: 'Processes Documented', target: 200, suffix: '+', prefix: '' },
  { label: 'Years of Operational Experience', target: 8, suffix: '+', prefix: '' },
]

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Ops X Consulting | Operational Excellence & Inventory Management — Uganda</title>
        <meta
          name="description"
          content="Ops X Consulting helps hospitality and manufacturing businesses in Uganda cut costs, control stock, and build better operations. Book a free discovery call."
        />
        <meta property="og:title" content="Ops X Consulting | Operational Excellence" />
        <meta property="og:description" content="Uganda's premier consultancy for operations, stock management, and costing. Real solutions. Measurable results." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="bg-hero-gradient relative overflow-hidden">
        {/* Background grid decoration */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(20,184,166,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow spots */}
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-ops-teal/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-ops-teal/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

            {/* ── Left: main hero copy ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex-1 min-w-0"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ops-teal/30 bg-ops-teal/10 text-ops-teal text-xs font-semibold tracking-widest uppercase mb-6">
                Operational Excellence · Kampala, Uganda
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Operations that run
                <span className="block text-gradient-teal mt-1">the way they should.</span>
              </h1>

              <p className="text-ops-dark-text-secondary text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Ops X Consulting helps hospitality and manufacturing businesses in Uganda cut costs, control stock, and build operations that don't depend on one person holding everything together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-ops-teal hover:bg-ops-teal-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-teal-glow hover:-translate-y-0.5"
                >
                  Book a Free Discovery Call
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-10 flex flex-wrap gap-6 text-ops-dark-text-secondary text-sm"
              >
                {['40+ businesses served', 'Hospitality specialists', 'On-site + hands-on', 'Uganda-based team'].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-ops-teal flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right: ITS V.Pro product card ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
              className="mt-12 lg:mt-0 lg:w-[380px] xl:w-[420px] flex-shrink-0"
            >
              <div className="rounded-2xl border border-ops-teal/20 bg-white/5 backdrop-blur-sm overflow-hidden">
                {/* White banner — logo blends here */}
                <div className="bg-white px-6 py-5 flex items-center justify-between">
                  <img
                    src="/logo/its-vpro logo.png"
                    alt="ITS V.Pro logo"
                    className="h-24 w-auto object-contain"
                  />
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-ops-teal/15 border border-ops-teal/25 text-ops-teal text-[11px] font-bold tracking-widest uppercase">
                    Inventory Control System
                  </span>
                </div>

                <div className="p-6 xl:p-7">
                  <h2 className="text-2xl font-extrabold text-white mb-1">ITS V.Pro</h2>
                  <p className="text-ops-dark-text-secondary text-sm leading-relaxed mb-5">
                    A serious inventory and operations control system. Deep stock visibility, department accountability, verified receiving, and decision-grade reporting — built for businesses that cannot afford weak control.
                  </p>

                  {/* Key capabilities */}
                  <ul className="space-y-3 mb-6">
                    {[
                      { icon: Shield,       text: 'Verified receiving — GRN to LPO matching' },
                      { icon: Eye,          text: 'Department-level stock visibility & control' },
                      { icon: BarChart3,    text: 'Movement, aging & valuation reporting' },
                      { icon: Lock,         text: 'Approval workflows & full audit trail' },
                      { icon: CheckCircle2, text: 'Stock counts & reconciliation support' },
                    ].map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-start gap-3 text-sm text-ops-dark-text-secondary">
                        <Icon size={15} className="text-ops-teal mt-0.5 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/its-vpro"
                    className="flex items-center justify-center gap-2 w-full bg-ops-teal hover:bg-ops-teal-dark text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-teal-glow hover:-translate-y-0.5"
                  >
                    Explore ITS V.Pro
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── METRICS STRIP ─────────────────────────────────── */}
      <section className="bg-ops-surface border-y border-ops-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {metrics.map((m, i) => (
              <SectionWrapper key={m.label} delay={i * 0.1} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-ops-text">
                  <AnimatedCounter target={m.target} prefix={m.prefix} suffix={m.suffix} />
                </div>
                <div className="text-sm text-ops-text-secondary mt-1">{m.label}</div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ─────────────────────────────────── */}
      <section className="section-padding bg-ops-teal-light">
        <div className="container-max">
          <SectionWrapper className="text-center mb-8">
            <div className="section-label justify-center">What We Do</div>
            <h2 className="section-heading mx-auto max-w-2xl">
              Three disciplines. One goal: a business that works.
            </h2>
            <p className="section-subheading mx-auto text-center">
              We don't offer vague "strategic advice." We specialise in three concrete areas where operational weakness directly hits your bottom line.
            </p>
          </SectionWrapper>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  variants={fadeUpItem}
                  className="group relative bg-white rounded-2xl border border-ops-border p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${pillar.iconBg}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-ops-text mb-3">{pillar.title}</h3>
                  <p className="text-ops-text-secondary text-sm leading-relaxed mb-5">{pillar.description}</p>
                  <Link
                    to={pillar.link}
                    className="inline-flex items-center gap-1.5 text-ops-teal text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                  >
                    See services <ChevronRight size={14} />
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── WHY OPS X ─────────────────────────────────────── */}
      <section className="section-padding bg-ops-surface-alt">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionWrapper>
              <div className="section-label">Why Ops X Consulting</div>
              <h2 className="section-heading mb-4">
                We work in your operation,{' '}
                <span className="text-gradient-teal">not just on it.</span>
              </h2>
              <p className="text-ops-text-secondary leading-relaxed mb-6">
                Most consulting firms hand you a report and disappear. We stay until the change sticks. Here's what makes our engagement different:
              </p>
              <div className="space-y-3.5">
                {whyReasons.map((reason, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-ops-teal mt-0.5 flex-shrink-0" />
                    <p className="text-ops-text text-sm leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="bg-white rounded-2xl border border-ops-border p-7 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-ops-teal-subtle rounded-xl flex items-center justify-center">
                    <TrendingUp size={18} className="text-ops-teal-dark" />
                  </div>
                  <div>
                    <div className="font-bold text-ops-text">Our approach</div>
                    <div className="text-xs text-ops-text-muted">Structured. Practical. Measurable.</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { step: '01', label: 'Assess', desc: 'Understand the current state — no assumptions.' },
                    { step: '02', label: 'Design', desc: 'Build the right solution for your specific context.' },
                    { step: '03', label: 'Implement', desc: 'Hands-on execution, not just handover.' },
                    { step: '04', label: 'Train', desc: 'Equip your team to own and sustain the change.' },
                    { step: '05', label: 'Monitor', desc: 'Track outcomes. Adjust where needed.' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-ops-teal/10 text-ops-teal text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold text-ops-text text-sm">{item.label}</div>
                        <div className="text-ops-text-secondary text-xs mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────── */}
      <section className="section-padding bg-ops-bg">
        <div className="container-max">
          <SectionWrapper className="text-center mb-8">
            <div className="section-label justify-center">Client Outcomes</div>
            <h2 className="section-heading mx-auto max-w-xl">
              Real businesses. Real numbers.
            </h2>
            <p className="section-subheading mx-auto text-center">
              We don't deal in hypotheticals. Here's what our engagements have produced for clients like yours.
            </p>
          </SectionWrapper>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                variants={fadeUpItem}
                className="bg-white rounded-2xl border border-ops-border p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-5">
                  <div className="text-4xl font-black text-ops-teal">{cs.metric}</div>
                  <div className="text-xs text-ops-text-muted font-semibold uppercase tracking-widest mt-0.5">{cs.metricLabel}</div>
                </div>
                <div className="inline-flex items-center px-2.5 py-1 bg-ops-surface text-xs font-semibold text-ops-text-secondary rounded-full border border-ops-border mb-3">
                  {cs.industry}
                </div>
                <h3 className="font-bold text-ops-text mb-2">{cs.company}</h3>
                <div className="mb-3">
                  <p className="text-xs font-semibold text-ops-text-muted uppercase tracking-wider mb-1">Challenge</p>
                  <p className="text-sm text-ops-text-secondary">{cs.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-ops-teal uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-sm text-ops-text">{cs.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="section-padding bg-ops-teal-light">
        <div className="container-max">
          <SectionWrapper className="text-center mb-8">
            <div className="section-label justify-center">Client Testimonials</div>
            <h2 className="section-heading mx-auto max-w-xl">
              What our clients say
            </h2>
          </SectionWrapper>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                variants={fadeUpItem}
                className="bg-white rounded-2xl border border-ops-border p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <Quote size={24} className="text-ops-teal/30 mb-4" />
                <p className="text-ops-text-secondary text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                {t.outcome && (
                  <div className="flex items-center gap-2 mb-5 px-3 py-2 bg-ops-teal-light rounded-lg border border-ops-teal/20">
                    <TrendingUp size={12} className="text-ops-teal flex-shrink-0" />
                    <span className="text-xs font-semibold text-ops-teal-dark">{t.outcome}</span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ops-teal/10 flex items-center justify-center text-ops-teal font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-ops-text text-sm">{t.name}</div>
                    <div className="text-ops-text-muted text-xs">{t.role} · {t.company}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} className="text-amber-400 fill-amber-400" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ITS V.PRO TEASER ──────────────────────────────── */}
      <section className="section-padding bg-ops-surface-alt">
        <div className="container-max">
          <div className="bg-gradient-to-br from-ops-dark to-ops-dark-surface rounded-3xl overflow-hidden border border-ops-dark-border">
            <div className="px-8 py-12 md:px-12 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <SectionWrapper>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ops-teal/30 bg-ops-teal/10 text-ops-teal text-xs font-semibold tracking-widest uppercase mb-5">
                  Inventory Control System
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  ITS V.Pro — See everything. Control everything. Miss nothing.
                </h2>
                <p className="text-ops-dark-text-secondary leading-relaxed mb-6">
                  ITS V.Pro is not a basic stock tracker. It's a full inventory control system — with verified receiving, department visibility, approval workflows, movement traceability, and decision-grade reporting. Built for businesses where stock accountability is non-negotiable.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/its-vpro"
                    className="inline-flex items-center justify-center gap-2 bg-ops-teal hover:bg-ops-teal-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
                  >
                    Explore ITS V.Pro <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
                  >
                    Request a Demo
                  </Link>
                </div>
              </SectionWrapper>

              <SectionWrapper delay={0.2}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Shield,      label: 'LPO & GRN Approval Workflows' },
                    { icon: Eye,         label: 'Department Stock Visibility' },
                    { icon: Package,     label: 'Verified Receiving & GRN Capture' },
                    { icon: BarChart3,   label: 'Aging, Valuation & Usage Reports' },
                    { icon: Lock,        label: 'Full Audit Trail & Role Controls' },
                    { icon: TrendingUp,  label: 'Variance & Discrepancy Tracking' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                      <Icon size={18} className="text-ops-teal flex-shrink-0" />
                      <span className="text-ops-dark-text text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────── */}
      <CTAStrip />
    </>
  )
}
