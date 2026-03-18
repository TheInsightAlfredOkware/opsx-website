import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Target, Users, BarChart3, CheckCircle2, ArrowRight,
  Building2, Utensils, Factory, Lightbulb, Award, Clock
} from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import CTAStrip from '../components/ui/CTAStrip'

const differentiators = [
  {
    icon: Award,
    title: 'Hands-On Experience',
    description:
      'Our consultants have direct, operational experience in hospitality and production environments — not just theoretical frameworks. We have worked on the floor, managed stock rooms, and reviewed cost structures in real businesses.',
  },
  {
    icon: Target,
    title: 'Tailored Solutions',
    description:
      'No two businesses are alike. We design every recommendation around your specific operation, team size, budget, and goals. You will never receive a generic template and be told to implement it.',
  },
  {
    icon: BarChart3,
    title: 'Measurable Results',
    description:
      "Every engagement begins with agreed success metrics. We don't claim credit for outcomes we can't demonstrate. Progress is tracked, reported honestly, and adjusted where needed.",
  },
  {
    icon: Clock,
    title: 'Practical Timelines',
    description:
      'We scope engagements to deliver tangible results within realistic timeframes. Quick wins in weeks. Systemic changes in months. Not multi-year change programmes that outlast their momentum.',
  },
]

const approachSteps = [
  {
    number: '01',
    title: 'Assess',
    description:
      'We start by understanding your current reality — not the polished version. We observe operations, interview staff, review records, and build an honest picture of where you are.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Based on the assessment, we design the right solution — processes, systems, structures, or training — tailored to your business, your team, and your constraints.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Implement',
    description:
      "We don't write a report and hand it over. We work alongside your team to implement the changes — building the system, training the people, and resolving the practical obstacles.",
    icon: CheckCircle2,
  },
  {
    number: '04',
    title: 'Train',
    description:
      "Lasting change requires people who understand why and how. We provide structured training to equip your team with the knowledge and habits to sustain what we've built.",
    icon: Users,
  },
  {
    number: '05',
    title: 'Monitor',
    description:
      'After implementation, we track agreed metrics to confirm the results are real and sustained. If adjustments are needed, we make them — not walk away.',
    icon: BarChart3,
  },
]

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Ops X Consulting — Uganda's Operational Excellence Specialists</title>
        <meta
          name="description"
          content="Learn about Ops X Consulting — who we are, our mission, and what makes us different from generic consulting firms. We serve hospitality and manufacturing businesses in Uganda."
        />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-hero-gradient relative overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(20,184,166,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ops-teal/30 bg-ops-teal/10 text-ops-teal text-xs font-semibold tracking-widest uppercase mb-6">
              About Ops X Consulting
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Uganda's operational
              <span className="block text-gradient-teal">excellence partner.</span>
            </h1>
            <p className="text-ops-dark-text-secondary text-lg leading-relaxed max-w-2xl">
              We are a Kampala-based consultancy firm that helps businesses in hospitality and manufacturing build the operational systems and controls they need to grow with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────── */}
      <section className="section-padding bg-ops-teal-light">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionWrapper>
              <div className="section-label">Who We Are</div>
              <h2 className="section-heading mb-5">
                Built by operators, for operators.
              </h2>
              <div className="space-y-4 text-ops-text-secondary leading-relaxed">
                <p>
                  Ops X Consulting was founded on a straightforward observation: too many businesses in Uganda — particularly in hospitality — are losing money not because of bad product, but because of weak operations. Uncontrolled stock, inconsistent processes, poor costing, and absent accountability structures quietly drain profitability.
                </p>
                <p>
                  We exist to fix that. Our team brings direct operational experience from managing bars, restaurants, hotels, and production environments — combined with consulting discipline. We understand the pressure of a Friday night service and the frustration of a month-end stock discrepancy.
                </p>
                <p>
                  Our approach is practical, specific, and built for the Ugandan business context. We don't copy-paste international frameworks. We design solutions that work here.
                </p>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-ops-surface rounded-2xl border border-ops-border p-6">
                  <div className="text-3xl font-black text-ops-teal mb-1">8+</div>
                  <div className="text-sm font-semibold text-ops-text">Years of operational experience</div>
                  <div className="text-xs text-ops-text-muted mt-1">In hospitality and manufacturing</div>
                </div>
                <div className="bg-ops-surface rounded-2xl border border-ops-border p-6">
                  <div className="text-3xl font-black text-ops-teal mb-1">40+</div>
                  <div className="text-sm font-semibold text-ops-text">Businesses supported</div>
                  <div className="text-xs text-ops-text-muted mt-1">Across Uganda</div>
                </div>
                <div className="bg-ops-surface rounded-2xl border border-ops-border p-6 sm:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-ops-teal-subtle rounded-lg flex items-center justify-center">
                      <Target size={16} className="text-ops-teal-dark" />
                    </div>
                    <div className="font-semibold text-ops-text text-sm">Our Mission</div>
                  </div>
                  <p className="text-ops-text-secondary text-sm leading-relaxed">
                    To help hospitality and manufacturing businesses in Uganda build operations that are controlled, efficient, and profitable — through practical consulting, hands-on implementation, and capable teams.
                  </p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ──────────────────────── */}
      <section className="section-padding bg-ops-surface-alt">
        <div className="container-max">
          <SectionWrapper className="text-center mb-8">
            <div className="section-label justify-center">What Makes Us Different</div>
            <h2 className="section-heading mx-auto max-w-xl">
              Not your average consulting firm.
            </h2>
            <p className="section-subheading mx-auto text-center">
              We measure our value by the outcomes we generate — not by the hours we bill or the decks we produce.
            </p>
          </SectionWrapper>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {differentiators.map((d) => {
              const Icon = d.icon
              return (
                <motion.div
                  key={d.title}
                  variants={fadeUpItem}
                  className="bg-white rounded-2xl border border-ops-border p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-ops-teal-subtle flex items-center justify-center mb-4">
                    <Icon size={18} className="text-ops-teal-dark" />
                  </div>
                  <h3 className="font-bold text-ops-text mb-2">{d.title}</h3>
                  <p className="text-ops-text-secondary text-sm leading-relaxed">{d.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRIES SERVED ────────────────────────────── */}
      <section className="section-padding bg-ops-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <SectionWrapper>
              <div className="section-label">Industries We Serve</div>
              <h2 className="section-heading mb-5">Deep sector focus beats broad generalism.</h2>
              <p className="text-ops-text-secondary leading-relaxed mb-8">
                We serve two industries, and we serve them well. Our expertise is deep, not wide — which means faster diagnosis, more relevant recommendations, and better results.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 bg-ops-surface rounded-xl border border-ops-border">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Utensils size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ops-text mb-1">Hospitality</h3>
                    <p className="text-ops-text-secondary text-sm leading-relaxed">
                      Bars, restaurants, cafés, lounges, hotels, and event venues. We understand the rhythms of service, the pressure of covers, and the complexity of managing perishables, beverages, and high-turnover teams all at once.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-ops-surface rounded-xl border border-ops-border">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Factory size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ops-text mb-1">Manufacturing & Production</h3>
                    <p className="text-ops-text-secondary text-sm leading-relaxed">
                      FMCG producers, food manufacturers, and beverage producers. We focus primarily on costing, production efficiency, and material yield — helping manufacturers understand their true cost of production.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="section-label">Our Approach</div>
              <h2 className="section-heading mb-6">How we work with you.</h2>
              <div className="space-y-5">
                {approachSteps.map((step, i) => {
                  const Icon = step.icon
                  return (
                    <div key={step.number} className="flex items-start gap-4">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="w-9 h-9 rounded-xl bg-ops-teal flex items-center justify-center text-white text-xs font-bold">
                          {step.number}
                        </div>
                        {i < approachSteps.length - 1 && (
                          <div className="w-px h-8 bg-ops-border mt-1" />
                        )}
                      </div>
                      <div className="pb-4">
                        <div className="font-bold text-ops-text mb-1">{step.title}</div>
                        <p className="text-ops-text-secondary text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <CTAStrip
        heading="Ready to work with us?"
        subheading="Book a free discovery call and let's understand your business before we suggest a single thing."
      />
    </>
  )
}
