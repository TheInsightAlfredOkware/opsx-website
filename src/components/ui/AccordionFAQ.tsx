import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface AccordionFAQProps {
  items: FAQItem[]
  className?: string
}

export default function AccordionFAQ({ items, className = '' }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-ops-border rounded-xl overflow-hidden bg-white transition-shadow duration-200 hover:shadow-card"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-ops-text text-sm sm:text-base">{item.question}</span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="flex-shrink-0 text-ops-teal"
            >
              <ChevronDown size={18} />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-6 pb-5 text-ops-text-secondary text-sm sm:text-base leading-relaxed border-t border-ops-border pt-3">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
