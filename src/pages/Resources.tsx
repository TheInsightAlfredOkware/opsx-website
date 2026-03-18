import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, ArrowRight, BookOpen, Tag } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import CTAStrip from '../components/ui/CTAStrip'
import { articles, articleCategories } from '../data/articles'

const categoryColors: Record<string, string> = {
  'Stock Management': 'bg-teal-50 text-teal-700 border-teal-200',
  'Operations': 'bg-blue-50 text-blue-700 border-blue-200',
  'Costing': 'bg-violet-50 text-violet-700 border-violet-200',
}

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const fadeUpItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Resources & Insights | Ops X Consulting — Operational Excellence Articles</title>
        <meta
          name="description"
          content="Practical insights on stock management, operations, and costing for hospitality and manufacturing businesses in Uganda. Written by Ops X Consulting."
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
              Resources & Insights
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Practical knowledge for
              <span className="block text-gradient-teal">operators who want results.</span>
            </h1>
            <p className="text-ops-dark-text-secondary text-lg leading-relaxed">
              No theory without application. Our articles are written from direct operational experience — for business owners and managers who want to act, not just read.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLES ─────────────────────────────────────── */}
      <section className="section-padding bg-ops-teal-light">
        <div className="container-max">

          {/* Category Filter */}
          <SectionWrapper className="mb-10 flex flex-wrap gap-2 justify-center">
            {articleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-ops-teal text-white border-ops-teal shadow-sm'
                    : 'bg-white text-ops-text-secondary border-ops-border hover:border-ops-teal hover:text-ops-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </SectionWrapper>

          {/* Articles Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((article) => (
                <motion.div
                  key={article.id}
                  variants={fadeUpItem}
                  className="group bg-white rounded-2xl border border-ops-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Card header decoration */}
                  <div className="h-2 bg-teal-gradient rounded-t-2xl" />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${categoryColors[article.category] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                        <Tag size={9} />
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-ops-text-muted ml-auto">
                        <Clock size={11} />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="font-bold text-ops-text text-base leading-snug mb-3 group-hover:text-ops-teal transition-colors duration-200">
                      {article.title}
                    </h2>

                    <p className="text-ops-text-secondary text-sm leading-relaxed flex-1 mb-5">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between border-t border-ops-border pt-4 mt-auto">
                      <span className="text-xs text-ops-text-muted">{article.date}</span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-ops-teal hover:gap-2 transition-all duration-200"
                      >
                        <BookOpen size={12} />
                        Get in touch to learn more
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Coming Soon note */}
          <SectionWrapper className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-ops-surface rounded-xl border border-ops-border text-sm text-ops-text-secondary">
              <BookOpen size={14} className="text-ops-teal" />
              More articles coming soon. Subscribe by contacting us at{' '}
              <a href="mailto:opsxconsulting@gmail.com" className="text-ops-teal font-medium hover:underline">
                opsxconsulting@gmail.com
              </a>
            </div>
          </SectionWrapper>
        </div>
      </section>

      <CTAStrip
        heading="Have a specific operational challenge?"
        subheading="We write about what we know. Talk to us and we'll apply it directly to your business."
      />
    </>
  )
}
