import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'ITS V.Pro', to: '/its-vpro' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navBase = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-nav-scrolled border-b border-ops-border'
      : 'bg-white/80 backdrop-blur-sm'
  }`

  return (
    <>
      <nav className={navBase}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-ops-teal focus:ring-offset-2 rounded-lg p-1">
              <img
                src="/logo/opsx logo.png"
                alt="Ops X Consulting"
                className="h-10 w-auto object-contain rounded-full"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.filter(l => l.label !== 'Contact').map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? 'text-ops-teal bg-ops-teal-light font-semibold'
                        : 'text-ops-text-secondary hover:text-ops-text hover:bg-ops-surface'
                    }`
                  }
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-1.5 bg-ops-teal hover:bg-ops-teal-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-teal-glow hover:-translate-y-0.5"
              >
                Contact Us
                <ChevronRight size={14} />
              </NavLink>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-ops-text-secondary hover:text-ops-text hover:bg-ops-surface transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-ops-border bg-white/95 backdrop-blur-md"
            >
              <div className="px-4 py-3 space-y-1">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-ops-teal-light text-ops-teal font-semibold'
                          : 'text-ops-text hover:bg-ops-surface'
                      }`
                    }
                  >
                    {link.label}
                    {link.label === 'Contact' && <ChevronRight size={14} className="ml-auto text-ops-teal" />}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer so content isn't hidden behind navbar */}
      <div className="h-16 lg:h-18" />
    </>
  )
}
