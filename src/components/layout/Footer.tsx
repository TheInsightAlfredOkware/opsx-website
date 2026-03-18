import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Twitter, Linkedin, Facebook, ArrowUpRight } from 'lucide-react'

const WA_LINK = 'https://wa.me/256758893821'
const EMAIL = 'opsxconsulting@gmail.com'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'ITS V.Pro', to: '/its-vpro' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

const services = [
  { label: 'Operations Consulting', to: '/services' },
  { label: 'Stock Management', to: '/services' },
  { label: 'Costing Services', to: '/services' },
  { label: 'Inventory Systems (ITS)', to: '/its-vpro' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ops-dark text-ops-dark-text">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/logo/opsx logo.png"
                alt="Ops X Consulting"
                className="h-10 w-auto object-contain rounded-full"
              />
            </div>
            <p className="text-ops-dark-text-secondary text-sm leading-relaxed mb-5">
              Uganda's premier consultancy for operational excellence, stock management, and costing services. We turn operational chaos into controlled, measurable performance.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-ops-teal/20 flex items-center justify-center text-ops-dark-text-secondary hover:text-ops-teal transition-colors">
                <Twitter size={14} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-ops-teal/20 flex items-center justify-center text-ops-dark-text-secondary hover:text-ops-teal transition-colors">
                <Linkedin size={14} />
              </a>
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-ops-teal/20 flex items-center justify-center text-ops-dark-text-secondary hover:text-ops-teal transition-colors">
                <Facebook size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-ops-dark-text-secondary hover:text-ops-teal text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform duration-150">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-ops-dark-text-secondary hover:text-ops-teal text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-2.5 text-ops-dark-text-secondary hover:text-ops-teal text-sm transition-colors"
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-ops-dark-text-secondary hover:text-ops-teal text-sm transition-colors"
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0" />
                  +256 758 893 821
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-ops-dark-text-secondary text-sm">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                  Kampala, Uganda
                </div>
              </li>
            </ul>
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-ops-teal border border-ops-teal/30 hover:border-ops-teal/60 hover:bg-ops-teal/10 px-4 py-2 rounded-lg transition-all duration-200"
              >
                Book Consultation
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ops-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-ops-dark-text-secondary text-xs">
            &copy; {year} Ops X Consulting. All rights reserved.
          </p>
          <p className="text-ops-dark-text-secondary text-xs">
            Kampala, Uganda &mdash; Operational Excellence &amp; Inventory Management
          </p>
        </div>
      </div>
    </footer>
  )
}
