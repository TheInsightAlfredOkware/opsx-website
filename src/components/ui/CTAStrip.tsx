import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar } from 'lucide-react'

const WA_LINK = 'https://wa.me/256758893821'

interface CTAStripProps {
  heading?: string
  subheading?: string
  showBookCall?: boolean
}

export default function CTAStrip({
  heading = 'Ready to take control of your operations?',
  subheading = "Let's talk about what's holding your business back — and fix it.",
  showBookCall = true,
}: CTAStripProps) {
  return (
    <section className="bg-hero-gradient py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-ops-dark-text-secondary text-lg mb-8 max-w-2xl mx-auto">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {showBookCall && (
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-ops-teal hover:bg-ops-teal-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-teal-glow hover:-translate-y-0.5"
            >
              <Calendar size={18} />
              Book a Free Discovery Call
            </Link>
          )}
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
      </div>
    </section>
  )
}
