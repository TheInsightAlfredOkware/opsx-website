import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Lazy load all pages for code-splitting
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ITSVPro = lazy(() => import('./pages/ITSVPro'))
const Contact = lazy(() => import('./pages/Contact'))
const Resources = lazy(() => import('./pages/Resources'))

const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-ops-border border-t-ops-teal rounded-full animate-spin" />
        <span className="text-ops-text-muted text-sm">Loading…</span>
      </div>
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        {...pageTransition}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/its-vpro" element={<ITSVPro />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            {/* 404 fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl font-black text-ops-teal mb-4">404</div>
        <h1 className="text-2xl font-bold text-ops-text mb-3">Page not found</h1>
        <p className="text-ops-text-secondary mb-6">
          The page you're looking for doesn't exist. Head back to the home page.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-ops-teal hover:bg-ops-teal-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-ops-bg">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
