import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Package, ClipboardCheck, GitBranch, AlertTriangle, BarChart3,
  Shield, Users, CheckCircle2, X, Check, MessageCircle, Mail,
  ArrowRight, Lock, Eye, Layers, Building2, TrendingUp, Zap, CalendarClock,
  FileText, DollarSign, Clock, Activity, Target, Warehouse, Cpu, ChevronRight,
  LayoutDashboard, RefreshCw, ScanLine, AlignLeft, Scale, Boxes, Search,
  ClipboardList, CalendarCheck, SlidersHorizontal, EyeOff, RotateCcw
} from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import AccordionFAQ from '../components/ui/AccordionFAQ'
import CTAStrip from '../components/ui/CTAStrip'

const WA_LINK = 'https://wa.me/256758893821'
const EMAIL = 'opsxconsulting@gmail.com'

const pillars = [
  {
    icon: Target,
    title: 'Control — Not Just Recording',
    description:
      'Most systems record what happened. ITS V.Pro is built to control what happens. Approval gates, verified receiving, issuance authorisation, and structured workflows mean that stock moves with accountability — not assumption.',
  },
  {
    icon: Eye,
    title: 'Visibility at Every Level',
    description:
      'From central store to individual departments, ITS V.Pro gives management a clear, current picture of what stock exists, where it is, what is moving, and where the gaps are. Not fragmented. Not delayed. Structured operational intelligence.',
  },
  {
    icon: BarChart3,
    title: 'Reporting That Drives Decisions',
    description:
      'ITS V.Pro turns daily activity into management-grade reports. Stock movement, department usage, receiving history, aging risk, valuation exposure — reports that help leaders ask better questions and make faster, more confident decisions.',
  },
]

const features = [
  {
    icon: Package,
    title: 'Inventory Control',
    description:
      'Track every change to your stock position — openings, additions, issuances, returns, leakage, and adjustments. Know not just what your balance is, but exactly how it got there. Inventory is not just stored. It is controlled and traceable.',
  },
  {
    icon: Building2,
    title: 'Department-Level Stock Visibility',
    description:
      'Departments hold stock differently, consume at different rates, and must be managed separately. ITS V.Pro gives each department its own stock picture — showing what it holds, what it uses, and how it performs against expectations.',
  },
  {
    icon: GitBranch,
    title: 'Stock Movement & Transfer Control',
    description:
      'Every transfer between central store and departments — or between departments — is logged with a reference, quantity, and responsible party. Unclear movement is how stock disappears. ITS V.Pro closes that gap.',
  },
  {
    icon: ClipboardCheck,
    title: 'Procurement Discipline',
    description:
      'Issue Local Purchase Orders through a controlled workflow with structured approval steps. Every purchase intention is documented before stock is ordered, reducing disorder and improving financial discipline from the point of request.',
  },
  {
    icon: ScanLine,
    title: 'Goods Receiving & Verification',
    description:
      'Receiving is the highest-risk point in stock operations. ITS V.Pro structures the GRN process — capturing what was received, comparing it against the LPO and invoice, and logging any quantity variances before stock is credited to the system.',
  },
  {
    icon: ClipboardList,
    title: 'Advanced Stock Counts Framework',
    description:
      'A full stock count control engine — weekly, monthly, spot, audit, and cycle count types across departments and main inventory. Expected vs actual variance, blind count support, recount logic, approval workflows, and period-close continuity. Not just a counting screen. A governance framework built for businesses where stock integrity is non-negotiable.',
  },
  {
    icon: DollarSign,
    title: 'Stock Valuation',
    description:
      'Understand stock not just as quantities but as tied-up money. ITS V.Pro provides valuation visibility across your inventory, helping finance and management understand what the stock on hand is worth and where value exposure sits.',
  },
  {
    icon: Clock,
    title: 'Inventory Aging',
    description:
      'Aging stock is hidden risk. ITS V.Pro highlights slow-moving items and older stock so management can act before holdings become a write-off problem. Aging insight supports better purchasing decisions and reduces holding inefficiency.',
  },
  {
    icon: BarChart3,
    title: 'Reporting Engine',
    description:
      'ITS V.Pro turns daily activity into management intelligence. Movement reports, department usage views, receiving history, reconciliation support, valuation summaries, and exception reports — all designed to support faster decisions.',
  },
  {
    icon: Shield,
    title: 'Auditability & Accountability',
    description:
      'Every action is traceable — who did it, when, and what changed. Issuances, receipts, transfers, edits, approvals — all logged with user identity and timestamp. When something needs investigating, the record is there.',
  },
  {
    icon: Lock,
    title: 'Approvals, Permissions & Process Control',
    description:
      'Not every user should be able to do everything. ITS V.Pro structures access around roles — protecting approval workflows, limiting sensitive actions, and ensuring that process integrity is enforced by the system, not just policy.',
  },
  {
    icon: AlertTriangle,
    title: 'Reorder Alerts & PAR Control',
    description:
      'Set minimum stock levels for every item. When quantities drop below threshold, the system flags them — giving procurement time to act before shortages affect operations. Proactive, not reactive.',
  },
]

type CellValue = boolean | 'partial'

const comparisonRows: { feature: string; its: CellValue; spreadsheet: CellValue; generic: CellValue }[] = [
  { feature: 'Structured GRN receiving workflow',         its: true,      spreadsheet: false,     generic: 'partial' },
  { feature: 'LPO creation & approval workflow',          its: true,      spreadsheet: false,     generic: false     },
  { feature: 'GRN verification against LPO + variance log', its: true,   spreadsheet: false,     generic: false     },
  { feature: 'Department-level stock balances',           its: true,      spreadsheet: 'partial', generic: false     },
  { feature: 'Stock issuance to departments with refs',   its: true,      spreadsheet: false,     generic: 'partial' },
  { feature: 'Department-to-department transfer control', its: true,      spreadsheet: false,     generic: false     },
  { feature: 'Full movement history (opening → closing)', its: true,      spreadsheet: 'partial', generic: true      },
  { feature: 'Leakage, waste & adjustment tracking',      its: true,      spreadsheet: false,     generic: false     },
  { feature: 'Stock count & reconciliation support',      its: true,      spreadsheet: 'partial', generic: 'partial' },
  { feature: 'Inventory valuation reports',               its: true,      spreadsheet: 'partial', generic: 'partial' },
  { feature: 'Inventory aging & slow-mover visibility',   its: true,      spreadsheet: false,     generic: false     },
  { feature: 'Role-based access control',                 its: true,      spreadsheet: false,     generic: 'partial' },
  { feature: 'Full audit trail with user & timestamp',    its: true,      spreadsheet: false,     generic: 'partial' },
  { feature: 'Approval gates on critical transactions',   its: true,      spreadsheet: false,     generic: false     },
  { feature: 'Reorder level alerts',                      its: true,      spreadsheet: false,     generic: true      },
  { feature: 'Department usage & performance reports',    its: true,      spreadsheet: false,     generic: false     },
  { feature: 'Multi-business / multi-outlet architecture',                    its: true, spreadsheet: false,     generic: 'partial' },
  { feature: 'Built for hospitality & F&B operations',                         its: true, spreadsheet: false,     generic: false     },
  { feature: 'Advanced multi-type count framework (weekly/monthly/spot/audit)', its: true, spreadsheet: false,     generic: false     },
  { feature: 'Expected vs actual variance + approval workflow per count event', its: true, spreadsheet: false,     generic: false     },
  { feature: 'Blind count mode for independent count integrity',                its: true, spreadsheet: false,     generic: false     },
  { feature: 'Approved closing stock seeds next-period opening balances',       its: true, spreadsheet: false,     generic: false     },
]

const trustPoints = [
  {
    icon: Lock,
    title: 'Role-Based Access Control',
    description: 'Every user operates within a defined role. Stockroom staff can receive items but cannot approve LPOs. Supervisors can authorise but cannot alter audit records. Finance can view reports but cannot approve issuances. Access is matched precisely to responsibility — not granted broadly.',
  },
  {
    icon: Eye,
    title: 'Full Audit Trail',
    description: 'Every action in the system is permanently logged — who performed it, exactly when, and what changed. GRN creation, LPO approvals, stock issuances, adjustments, transfers — all timestamped with the responsible user. When something needs investigating, the record is complete and unalterable.',
  },
  {
    icon: Shield,
    title: 'Controlled Approval Gates',
    description: 'Critical transactions cannot bypass authorisation. LPOs require procurement approval before an order is raised. GRNs require a verification step before stock is credited. Issuances require authorisation before stock moves. Approval gates are enforced by the system, not by individual discipline.',
  },
  {
    icon: AlignLeft,
    title: 'Movement Traceability',
    description: 'Every stock movement — from central store to department, between departments, or back as a return — is logged with a reference, quantity, and responsible party. Management can trace exactly where any item went, when it moved, and who authorised it. Unexplained movement becomes visible.',
  },
  {
    icon: Scale,
    title: 'Variance Logging & Reconciliation Support',
    description: 'Receiving discrepancies, count variances, and adjustment records are logged, categorised, and surfaced in reports. Variances do not silently disappear into the system. They are flagged, assigned, and available for review — creating a stronger basis for monthly reconciliation and investigation.',
  },
  {
    icon: Layers,
    title: 'Data Isolation Per Business',
    description: 'Each business entity — whether a single outlet or one of many — operates in a fully isolated environment. There is no data bleed between properties. Multi-outlet groups maintain complete separation between entities while management retains oversight at the appropriate level.',
  },
]

const itsFaqs = [
  {
    question: 'Is ITS V.Pro a cloud-based or installed system?',
    answer:
      'ITS V.Pro is a fully web-based application. It runs in any modern browser on any device — laptop, tablet, or desktop. There is no software to install, no updates to manage on individual machines, and no dependency on a local server. Access is managed through user accounts with role-based permissions, so the right people get in and the wrong people do not.',
  },
  {
    question: 'How is ITS V.Pro different from a generic inventory app?',
    answer:
      'Most generic inventory systems are built for retail or simple warehousing. They track items in and items out. ITS V.Pro is built around the operational depth of hospitality and stock-driven businesses — department-level balances, verified receiving against LPOs, issuance controls with approval workflows, movement traceability, stock count support, aging visibility, and management-grade reporting. It is not a general tool adapted to fit your operation. It is built for your type of operation from the start.',
  },
  {
    question: 'Can it handle multiple outlets or business entities?',
    answer:
      'Yes. ITS V.Pro\'s multi-business architecture allows each property, outlet, or entity to operate in its own isolated environment — with separate stock pools, user access, and reporting. There is no data bleed between businesses. Groups managing multiple sites can structure the system to match their operating model while maintaining consistent processes across properties.',
  },
  {
    question: 'Which types of businesses is ITS V.Pro best suited for?',
    answer:
      'ITS V.Pro is best suited for businesses where stock is a significant cost, where departments hold and consume inventory, and where management needs cleaner visibility and accountability over what is moving and why. This includes hotels, bars, restaurants, cafés, multi-outlet F&B groups, manufacturers, distributors, and warehouse-led operations. If your current approach involves spreadsheets, manual registers, or generic tools that do not reflect your operational structure, ITS V.Pro is designed for that gap.',
  },
  {
    question: 'What does implementation involve and how long does it take?',
    answer:
      'Implementation is handled by our team from start to finish. We configure your item catalogue, set up department structures, establish user roles and permissions, and train your team on the relevant workflows. We do not hand you a manual and leave — we onboard your business properly. Timelines typically range from one to three weeks depending on the size and complexity of your operation. We work with you to make sure the system reflects how your business actually runs.',
  },
  {
    question: 'What stock counting capabilities does ITS V.Pro offer?',
    answer:
      'ITS V.Pro includes a full advanced Stock Counts framework — covering multiple count types within one unified system: End of Week and End of Month counts for both departments and main inventory, Spot Counts for targeted item verification outside scheduled cycles, Audit Counts for formal finance or management-driven review events, and Cycle Counts as a future-ready capability for rolling catalogue coverage.\n\nEach count event goes beyond simply recording quantity entries. The system calculates expected stock automatically — based on opening balances, goods received, issuances, and transfers — and compares that against what is physically counted. The result is immediate variance visibility, with no manual calculation required. Blind count mode is supported, hiding system-expected values from counters to prevent influence bias and strengthen count integrity.\n\nEvery count moves through a structured lifecycle: initiation, physical count entry, expected-versus-actual comparison, variance review, recount where items exceed tolerance, approval sign-off, and period-close control. Where configured, the approved closing stock from a count becomes the verified opening stock for the next operational period — eliminating manual carry-forward and ensuring period continuity is system-governed, not relied on by memory.\n\nThe result is stock counting that strengthens your audit trail, improves finance\'s confidence in opening and closing figures, and replaces manual uncertainty with structured, reviewable control.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'ITS V.Pro is priced based on the scope of your operation — the number of users, the number of business entities, and your support requirements. We do not publish a fixed price list because we do not offer a fixed product. Every deployment is configured to your business. Contact us and we will put together a clear, itemised proposal based on a conversation about your operation and objectives.',
  },
  {
    question: 'What ongoing support is available after go-live?',
    answer:
      'We provide ongoing support as part of our client relationship. This includes system assistance, user questions, retraining when team members change, and guidance as your usage and requirements evolve. You are not buying a licence and being left alone — you are working with a team that remains engaged in making sure the system continues to work properly for your business.',
  },
]

const screenshotTabs = [
  {
    id: 'overview',
    label: 'Command Overview',
    image: '/dashboard/dashboard photo one.png',
    caption: 'The master command surface — action items requiring attention, critical operational gaps, total LPO pipeline value, pending approvals, and live inventory alerts. Everything that needs a decision, visible in one unified view.',
  },
  {
    id: 'procurement',
    label: 'Procurement Pipeline',
    image: '/dashboard/dashboard photo two.png',
    caption: 'Active LPO status, GRN receipts, procurement deadlines, and top vendor spend — a live picture of purchase cycle health so management and procurement teams stay ahead of every commitment.',
  },
  {
    id: 'vendor',
    label: 'Vendor Intelligence',
    image: '/dashboard/dashboard photo three.png',
    caption: 'Vendor payables exposure, credit health monitoring, QC alert tracking, and spend concentration — a built-in supplier intelligence layer that most inventory systems simply do not provide.',
  },
  {
    id: 'inventory',
    label: 'Inventory & Alerts',
    image: '/dashboard/dashboard photo four.png',
    caption: 'Real-time inventory risk panel — items below PAR, uninvoiced GRNs, recent receipt activity, and reorder urgency surfaced so management can act before gaps become operational shortages.',
  },
  {
    id: 'actions',
    label: 'Action Center',
    image: '/dashboard/dashboard photo five.png',
    caption: 'Unacknowledged operational gaps, pending system approvals, and critical exceptions gathered and prioritised. The dashboard does not wait for you to find problems. It surfaces them.',
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

function ComparisonCell({ value }: { value: boolean | 'partial' }) {
  if (value === true) return <Check size={18} className="text-ops-teal mx-auto" />
  if (value === false) return <X size={18} className="text-red-400 mx-auto" />
  return <span className="text-amber-500 text-xs font-medium">Partial</span>
}

export default function ITSVPro() {
  const [activeScreen, setActiveScreen] = useState('overview')
  return (
    <>
      <Helmet>
        <title>ITS V.Pro | Inventory & Operations Control System — Ops X Consulting</title>
        <meta
          name="description"
          content="ITS V.Pro is a serious inventory and operations control system built for businesses that need deep stock visibility, department-level accountability, GRN verification, movement traceability, valuation insight, and decision-grade reporting."
        />
        <meta property="og:title" content="ITS V.Pro | Inventory & Operations Control System" />
        <meta property="og:description" content="Not just stock tracking. A full inventory control system with receiving verification, department visibility, movement traceability, reporting depth, and performance-first design." />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-hero-gradient relative overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(20,184,166,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-ops-teal/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-ops-teal/4 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">

          {/* ── Top: badge + headline ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ops-teal/30 bg-ops-teal/10 text-ops-teal text-xs font-semibold tracking-widest uppercase mb-6">
              Inventory &amp; Operations Control System
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5">
              ITS V.Pro
              <span className="block text-gradient-teal text-3xl sm:text-4xl lg:text-[2.75rem] mt-2 font-bold leading-snug pb-1">
                See everything. Control everything.<br className="hidden sm:block" /> Miss nothing.
              </span>
            </h1>
            <p className="text-ops-dark-text-secondary text-lg sm:text-xl leading-relaxed max-w-3xl mb-3">
              ITS V.Pro is a serious inventory and operations control system built for businesses that need more than data entry. Deep stock visibility, department-level accountability, verified receiving, movement traceability, and decision-grade reporting — in a system engineered to stay fast under real operational use.
            </p>
            <p className="text-ops-dark-text-secondary/75 text-base leading-relaxed max-w-2xl">
              Built for hospitality operators, F&amp;B businesses, manufacturers, and stock-driven operations that cannot afford weak control.
            </p>
          </motion.div>

          {/* ── Horizontal white banner ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 rounded-2xl bg-white shadow-xl overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x divide-gray-100">

              {/* Logo */}
              <div className="flex items-center justify-center px-10 py-8 sm:w-64 flex-shrink-0">
                <img
                  src="/logo/its-vpro logo.png"
                  alt="ITS V.Pro"
                  className="h-28 w-auto object-contain"
                />
              </div>

              {/* Three capability badges */}
              <div className="flex flex-1 flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                {[
                  { icon: Shield,    label: 'Verified receiving control',       sub: 'GRN + LPO + variance logging' },
                  { icon: BarChart3, label: 'Department-level visibility',      sub: 'Per-department stock & usage' },
                  { icon: FileText,  label: 'Decision-grade reporting',         sub: 'Movement, aging, valuation' },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-1 items-start gap-3 px-6 py-5">
                    <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-ops-teal/10 flex items-center justify-center mt-0.5">
                      <Icon size={16} className="text-ops-teal-dark" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ops-text">{label}</span>
                      <span className="block text-xs text-ops-text-secondary mt-0.5">{sub}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Four stat tiles */}
              <div className="grid grid-cols-2 sm:w-56 flex-shrink-0 divide-x divide-y divide-gray-100">
                {[
                  { value: '40+',   label: 'Businesses' },
                  { value: 'Fast',  label: 'Performance' },
                  { value: '24/7',  label: 'Access' },
                  { value: '100%',  label: 'Web-Based' },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-center justify-center py-4 px-2">
                    <span className="text-base font-extrabold text-ops-teal-dark leading-none">{value}</span>
                    <span className="text-[10px] font-medium text-ops-text-secondary mt-1 text-center">{label}</span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* ── Buttons ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-ops-teal hover:bg-ops-teal-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-teal-glow hover:-translate-y-0.5"
            >
              Request a Demo <ArrowRight size={18} />
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Talk to Us on WhatsApp
            </a>
          </motion.div>

          {/* ── Trust strip ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-6 text-ops-dark-text-secondary text-sm"
          >
            {[
              'Built for hospitality & F&B',
              'Department-level stock control',
              'Verified receiving workflow',
              'Performance-first engineering',
              'Web-based — no installation',
            ].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-ops-teal flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── DASHBOARD COMMAND CENTER ──────────────────────── */}
      <section className="section-padding bg-ops-dark">
        <div className="container-max">
          <SectionWrapper className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ops-teal/30 bg-ops-teal/10 text-ops-teal text-xs font-semibold tracking-widest uppercase mb-4">
              Command Center
            </div>
            <h2 className="section-heading text-white mx-auto max-w-3xl">
              Not a dashboard.<br className="hidden md:block" />
              <span className="text-gradient-teal">A live management command center.</span>
            </h2>
            <p className="section-subheading text-ops-dark-text-secondary mx-auto text-center">
              The ITS V.Pro dashboard is not a summary screen. It is a live operational intelligence layer — built to surface what needs attention, expose procurement risk, track vendor exposure, flag inventory gaps, and put the right information in front of the right decision-maker at the right moment.
            </p>
          </SectionWrapper>

          {/* Tab selector */}
          <SectionWrapper className="mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {screenshotTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveScreen(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeScreen === tab.id
                      ? 'bg-ops-teal text-white shadow-sm'
                      : 'bg-white/5 border border-white/10 text-ops-dark-text-secondary hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </SectionWrapper>

          {/* Browser frame with actual dashboard screenshots */}
          <SectionWrapper>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_-8px_rgba(0,0,0,0.55)]">
              {/* Browser chrome */}
              <div className="bg-[#1E2330] px-4 py-2.5 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 bg-[#0E1117] rounded py-1 px-3 text-center max-w-xs mx-auto">
                  <span className="text-[11px] text-ops-dark-text-secondary">app.itsvpro.com</span>
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeScreen}
                  src={screenshotTabs.find((t) => t.id === activeScreen)?.image ?? ''}
                  alt={`ITS V.Pro — ${screenshotTabs.find((t) => t.id === activeScreen)?.label}`}
                  className="w-full block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>
            </div>
            <p className="text-center text-sm text-ops-dark-text-secondary mt-4 max-w-2xl mx-auto">
              {screenshotTabs.find((t) => t.id === activeScreen)?.caption}
            </p>
          </SectionWrapper>

          {/* Monitor / Detect / Act strip */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Eye,
                verb: 'Monitor',
                headline: 'See everything that is moving',
                body: 'Procurement pipeline, vendor payables, GRN receipts, inventory positions, and approval queues — visible in real time without running separate reports.',
              },
              {
                icon: AlertTriangle,
                verb: 'Detect',
                headline: 'Surface issues before they escalate',
                body: 'Uninvoiced GRNs, QC alerts, items below PAR, unacknowledged gaps, critical operational exceptions — flagged automatically so management does not have to go looking.',
              },
              {
                icon: Zap,
                verb: 'Act',
                headline: 'Move faster than problems grow',
                body: 'Action-required panels, approval queues, and risk surfaces reduce the time between a problem appearing and a decision being made.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-ops-teal/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-ops-teal" />
                    </div>
                    <span className="text-ops-teal text-xs font-bold tracking-widest uppercase">{item.verb}</span>
                  </div>
                  <div className="font-bold text-white text-sm mb-2">{item.headline}</div>
                  <p className="text-ops-dark-text-secondary text-sm leading-relaxed">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD INSIGHTS ────────────────────────────── */}
      <section className="section-padding bg-ops-bg">
        <div className="container-max">
          <SectionWrapper className="text-center mb-10">
            <div className="section-label justify-center">What You See</div>
            <h2 className="section-heading mx-auto max-w-3xl">
              Eight control panels.<br className="hidden md:block" />
              <span className="text-gradient-teal">One unified command surface.</span>
            </h2>
            <p className="section-subheading mx-auto text-center">
              Every panel on the ITS V.Pro dashboard exists for a reason. Nothing is decorative. Each one is designed to answer a specific operational or financial question — before a manager has to ask it.
            </p>
          </SectionWrapper>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          >
            {[
              {
                icon: AlertTriangle,
                accent: 'amber',
                title: 'Action Required',
                body: 'Unacknowledged operational gaps and issues demanding immediate attention — surfaced at the top of the dashboard so nothing that needs a decision stays invisible.',
              },
              {
                icon: FileText,
                accent: 'teal',
                title: 'Procurement Pipeline',
                body: 'Live LPO count and total pipeline value in the active procurement cycle — an instant read on purchasing commitments, open orders, and procurement cycle health.',
              },
              {
                icon: ClipboardCheck,
                accent: 'teal',
                title: 'GRN Activity',
                body: 'Goods received in the current period — quantities, supplier references, and verification status. A live receiving pulse showing what came in and what still needs review.',
              },
              {
                icon: GitBranch,
                accent: 'amber',
                title: 'Uninvoiced GRNs',
                body: 'Stock received but not yet matched to a supplier invoice. A critical financial control panel that surfaces the gap between physical receipts and payables — before it creates reconciliation problems.',
              },
              {
                icon: DollarSign,
                accent: 'teal',
                title: 'Vendor Payables',
                body: 'Outstanding supplier balances and total payables exposure — visible without navigating into accounts. Management sees payment obligations at a glance, with enough context to prioritise.',
              },
              {
                icon: TrendingUp,
                accent: 'teal',
                title: 'Top Vendor Spend',
                body: 'The highest-spend suppliers in the current cycle — helping management spot spend concentration, identify supply dependency risk, and inform more deliberate procurement decisions.',
              },
              {
                icon: Shield,
                accent: 'purple',
                title: 'Vendor QC Alerts',
                body: 'Quality control flags raised during receiving events — supplier shortfalls, condition issues, or quantity discrepancies that need follow-up before they get buried in GRN records.',
              },
              {
                icon: Package,
                accent: 'teal',
                title: 'Inventory Alerts',
                body: 'Items below PAR level, approaching minimum threshold, or flagged for reorder review — prioritised by urgency so procurement can act before stock shortages disrupt operations.',
              },
            ].map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeUpItem}
                  className="bg-white rounded-2xl border border-ops-border p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0 ${
                    card.accent === 'amber' ? 'bg-amber-50' : card.accent === 'purple' ? 'bg-purple-50' : 'bg-ops-teal-subtle'
                  }`}>
                    <Icon size={18} className={
                      card.accent === 'amber' ? 'text-amber-500' : card.accent === 'purple' ? 'text-purple-500' : 'text-ops-teal-dark'
                    } />
                  </div>
                  <h3 className="font-bold text-ops-text text-sm mb-2">{card.title}</h3>
                  <p className="text-ops-text-secondary text-sm leading-relaxed flex-1">{card.body}</p>
                </motion.div>
              )
            })}
          </motion.div>

          <SectionWrapper>
            <div className="bg-ops-dark rounded-2xl px-8 py-7 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <p className="text-white font-semibold text-lg leading-snug mb-1">
                  Most systems stop at records and reports. ITS V.Pro is built to control.
                </p>
                <p className="text-ops-dark-text-secondary text-sm leading-relaxed">
                  The dashboard is not a view of what happened yesterday. It is a live control surface for what is happening now — designed to close the gap between information and action.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-ops-teal hover:bg-ops-teal-dark text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 hover:shadow-teal-glow hover:-translate-y-0.5 text-sm flex-shrink-0"
              >
                See It Live <ArrowRight size={16} />
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── THREE PILLARS ─────────────────────────────────── */}
      <section className="section-padding bg-ops-teal-light">
        <div className="container-max">
          <SectionWrapper className="text-center mb-10">
            <div className="section-label justify-center">Why It Works</div>
            <h2 className="section-heading mx-auto max-w-2xl">Built on three principles most inventory systems ignore.</h2>
            <p className="section-subheading mx-auto text-center">
              The difference between a system that records transactions and a system that improves operations comes down to control, visibility, and intelligence. ITS V.Pro is designed around all three.
            </p>
          </SectionWrapper>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  variants={fadeUpItem}
                  className="bg-white rounded-2xl border border-ops-border p-7 shadow-card text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-ops-teal-subtle flex items-center justify-center mx-auto mb-5">
                    <Icon size={22} className="text-ops-teal-dark" />
                  </div>
                  <h3 className="font-bold text-ops-text text-lg mb-3">{p.title}</h3>
                  <p className="text-ops-text-secondary text-sm leading-relaxed">{p.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ────────────────────────────── */}
      <section className="section-padding bg-ops-dark">
        <div className="container-max">
          <SectionWrapper className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ops-teal/30 bg-ops-teal/10 text-ops-teal text-xs font-semibold tracking-widest uppercase mb-4">
              The Real Problem
            </div>
            <h2 className="section-heading text-white mx-auto max-w-3xl">
              Most businesses don't struggle because they lack transactions.<br className="hidden md:block" />
              They struggle because they lack <span className="text-gradient-teal">control.</span>
            </h2>
            <p className="section-subheading text-ops-dark-text-secondary mx-auto text-center">
              Inventory systems that only capture data give you a record of what happened. They don't help you understand why it happened, prevent it from happening again, or surface the patterns that are costing you money.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              { label: 'Stock disappears without clear movement traceability' },
              { label: 'Departments consume more than authorised — with no record' },
              { label: 'Receiving happens without proper verification against LPOs' },
              { label: 'Invoices, GRNs, and actual stock received don\'t align' },
              { label: 'Management relies on reports that don\'t reflect reality' },
              { label: 'Variances are discovered weeks after they occurred' },
              { label: 'Internal transfers are unlogged and unaccounted' },
              { label: 'Stock counts create confusion instead of resolving it' },
              { label: 'Aging stock is not spotted until it becomes a write-off' },
              { label: 'Purchasing decisions are made without operational context' },
              { label: 'Finance and operations work from different numbers' },
              { label: 'Accountability is verbal, not system-enforced' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/8 rounded-xl px-5 py-4">
                <AlertTriangle size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-ops-dark-text-secondary text-sm leading-relaxed">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center bg-ops-teal/10 border border-ops-teal/25 rounded-2xl px-8 py-8">
            <p className="text-ops-dark-text text-lg font-medium leading-relaxed">
              ITS V.Pro is built to close these gaps — not just record around them. It brings structure, traceability, and management intelligence to every layer of your stock operation.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-ops-teal hover:bg-ops-teal-dark text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 hover:shadow-teal-glow hover:-translate-y-0.5 text-sm"
              >
                See How It Works <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────── */}
      <section className="section-padding bg-ops-surface-alt">
        <div className="container-max">
          <SectionWrapper className="text-center mb-10">
            <div className="section-label justify-center">What ITS V.Pro Does</div>
            <h2 className="section-heading mx-auto max-w-2xl">Every major control area, built in.</h2>
            <p className="section-subheading mx-auto text-center">
              ITS V.Pro covers the full scope of stock operations — from procurement through receiving, movement, counting, valuation, and reporting. Each area is built with depth, not just a checkbox.
            </p>
          </SectionWrapper>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((f) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUpItem}
                  className="bg-white rounded-2xl border border-ops-border p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-ops-teal-subtle flex items-center justify-center mb-4">
                    <Icon size={18} className="text-ops-teal-dark" />
                  </div>
                  <h3 className="font-bold text-ops-text text-sm mb-2">{f.title}</h3>
                  <p className="text-ops-text-secondary text-sm leading-relaxed">{f.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── DEPARTMENT VISIBILITY ─────────────────────────── */}
      <section className="section-padding bg-ops-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: copy */}
            <SectionWrapper>
              <div className="section-label">Department-Level Control</div>
              <h2 className="section-heading mb-5">
                Stock isn't one flat pool.<br />
                <span className="text-gradient-teal">Your system shouldn't treat it like one.</span>
              </h2>
              <p className="text-ops-text-secondary leading-relaxed mb-4">
                In most operations, stock lives in multiple places at once — central store, kitchen, bar, housekeeping, production floor. Each department holds different items, consumes at different rates, and carries different accountability. A system that only sees total inventory misses most of what matters.
              </p>
              <p className="text-ops-text-secondary leading-relaxed mb-6">
                ITS V.Pro is built around departmental stock reality. Each department has its own stock picture — its own balance, its own issuance history, its own usage trend. Management can see not just what the business holds, but what each department holds, what it consumed, and whether that consumption is in line with expectations.
              </p>
              <div className="space-y-3">
                {[
                  'Separate stock balances tracked per department',
                  'Issuances recorded against the receiving department',
                  'Department returns tracked back to central store',
                  'Transfers between departments logged with references',
                  'Usage visibility per department for management review',
                  'Accountability tied to the department, not just the transaction',
                  'Identify over-consuming departments before month-end',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-ops-teal flex-shrink-0 mt-0.5" />
                    <span className="text-ops-text text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </SectionWrapper>

            {/* Right: visual breakdown */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-4">
                <div className="bg-ops-teal-light border border-ops-teal/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-ops-teal/15 flex items-center justify-center">
                      <Warehouse size={17} className="text-ops-teal-dark" />
                    </div>
                    <div>
                      <div className="font-bold text-ops-text text-sm">Central Store</div>
                      <div className="text-xs text-ops-text-secondary">Master inventory — all items</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Full item catalogue', 'Receiving point', 'LPO & GRN source', 'Issues to departments'].map(t => (
                      <span key={t} className="text-xs px-3 py-1 bg-white border border-ops-teal/20 rounded-full text-ops-teal-dark font-medium">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 py-1">
                  <div className="h-px flex-1 bg-ops-border" />
                  <div className="text-xs text-ops-text-muted font-semibold uppercase tracking-widest">Issues & Transfers</div>
                  <div className="h-px flex-1 bg-ops-border" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Kitchen / Production', items: ['Own stock balance', 'Usage tracked', 'Returns logged'] },
                    { label: 'Bar / Front of House',  items: ['Own stock balance', 'Usage tracked', 'Returns logged'] },
                    { label: 'Housekeeping',           items: ['Own stock balance', 'Usage tracked', 'Returns logged'] },
                    { label: 'Other Departments',      items: ['Own stock balance', 'Usage tracked', 'Returns logged'] },
                  ].map((dept) => (
                    <div key={dept.label} className="bg-white border border-ops-border rounded-xl p-4 shadow-card">
                      <div className="font-semibold text-ops-text text-xs mb-2">{dept.label}</div>
                      {dept.items.map(item => (
                        <div key={item} className="flex items-center gap-1.5 text-xs text-ops-text-secondary mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-ops-teal flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="bg-ops-dark rounded-xl px-5 py-4 flex items-start gap-3">
                  <Eye size={16} className="text-ops-teal flex-shrink-0 mt-0.5" />
                  <p className="text-ops-dark-text-secondary text-sm leading-relaxed">
                    Management sees <span className="text-white font-semibold">every department's position</span> in one place — without needing to chase reports or consolidate spreadsheets.
                  </p>
                </div>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </section>

      {/* ── STOCK COUNTS FRAMEWORK ───────────────────────── */}
      <section className="section-padding bg-ops-dark">
        <div className="container-max">
          <SectionWrapper className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ops-teal/30 bg-ops-teal/10 text-ops-teal text-xs font-semibold tracking-widest uppercase mb-4">
              Advanced Capability
            </div>
            <h2 className="section-heading text-white mx-auto max-w-3xl">
              Stock Counts, Reimagined<br className="hidden md:block" />
              <span className="text-gradient-teal">for Real Control.</span>
            </h2>
            <p className="section-subheading text-ops-dark-text-secondary mx-auto text-center">
              From scheduled week-end and month-end counts to targeted spot checks, audit cycles, and intelligent period-close continuity — ITS V.Pro brings a full stock count control engine to your operation. Not a counting screen. A governance framework.
            </p>
          </SectionWrapper>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          >
            {[
              {
                icon: CalendarCheck,
                title: 'End of Week Counts',
                scope: 'Departments & Inventory',
                description: 'Structured weekly count cycles for both departmental stock and main inventory. Regular rhythm creates early warning visibility and keeps balances current without waiting for month-end.',
                tag: 'Scheduled',
              },
              {
                icon: CalendarCheck,
                title: 'End of Month Counts',
                scope: 'Departments & Inventory',
                description: 'Month-end counts designed for period-close confidence. Covering all departments and central store, with variance review and approval workflows that make closing stock figures auditable and defensible.',
                tag: 'Scheduled',
              },
              {
                icon: Target,
                title: 'Spot Counts',
                scope: 'Any item, any location',
                description: 'Fast, targeted counts triggered outside of regular cycles — on a specific item, category, or area. Ideal for investigating a discrepancy, responding to a concern, or verifying a high-risk item without delay.',
                tag: 'On-Demand',
              },
              {
                icon: Search,
                title: 'Audit Counts',
                scope: 'Full-inventory or targeted',
                description: 'Formal count events built for high-accountability review — finance-driven, management-ordered, or audit-requested. Structured for defensibility with blind count support and full approval documentation.',
                tag: 'Audit-Grade',
              },
              {
                icon: Building2,
                title: 'Departmental Counts',
                scope: 'Per-department stock governance',
                description: 'Counts scoped to individual departments — kitchen, bar, housekeeping, and others — each with its own count cycle, closing stock record, and accountability structure within the unified framework.',
                tag: 'Core',
              },
              {
                icon: Warehouse,
                title: 'Store & Inventory Counts',
                scope: 'Central store and main inventory',
                description: 'Dedicated count cycles for the main store and central inventory — separate from department counts, with their own expected-versus-actual comparison, variance review, and period-close control.',
                tag: 'Core',
              },
              {
                icon: RotateCcw,
                title: 'Cycle Counts',
                scope: 'Rolling catalogue coverage',
                description: 'Future-ready rolling count coverage ensuring every catalogue item is counted at defined intervals — spreading count effort across the operational calendar without a full-inventory event.',
                tag: 'Coming Soon',
              },
            ].map((ct, i) => {
              const Icon = ct.icon
              return (
                <motion.div
                  key={ct.title}
                  variants={fadeUpItem}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors duration-200 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-ops-teal/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-ops-teal" />
                    </div>
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${
                      ct.tag === 'Scheduled'
                        ? 'bg-ops-teal/10 border-ops-teal/25 text-ops-teal'
                        : ct.tag === 'On-Demand'
                        ? 'bg-amber-400/10 border-amber-400/25 text-amber-400'
                        : ct.tag === 'Audit-Grade'
                        ? 'bg-purple-400/10 border-purple-400/25 text-purple-400'
                        : ct.tag === 'Coming Soon'
                        ? 'bg-white/5 border-white/15 text-ops-dark-text-secondary'
                        : 'bg-sky-400/10 border-sky-400/25 text-sky-400'
                    }`}>
                      {ct.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">{ct.title}</h3>
                  <div className="text-ops-teal text-xs font-medium mb-3">{ct.scope}</div>
                  <p className="text-ops-dark-text-secondary text-sm leading-relaxed flex-1">{ct.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Layers,
                heading: 'One Unified Framework',
                body: 'All count types — scheduled, spot, and audit — managed within a single structured system. No fragmented processes. No separate spreadsheets for different count events.',
              },
              {
                icon: BarChart3,
                heading: 'Expected vs Actual Intelligence',
                body: 'System-calculated expected stock is compared against physical count entries automatically. Variance is visible immediately — not discovered after manual calculation.',
              },
              {
                icon: CalendarClock,
                heading: 'Period-Close Continuity',
                body: 'Approved closing stock can seed the opening stock of the next operational period — eliminating manual carry-forward and ensuring period continuity is system-governed.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-ops-teal/10 border border-ops-teal/20 rounded-xl px-6 py-5 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-ops-teal/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-ops-teal" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm mb-1.5">{item.heading}</div>
                    <p className="text-ops-dark-text-secondary text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── COUNT GOVERNANCE ─────────────────────────────── */}
      <section className="section-padding bg-ops-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <SectionWrapper>
              <div className="section-label">Count Intelligence & Governance</div>
              <h2 className="section-heading mb-5">
                Not just counting.<br />
                <span className="text-gradient-teal">Verifying, governing, and closing with confidence.</span>
              </h2>
              <p className="text-ops-text-secondary leading-relaxed mb-4">
                Ordinary systems record what you type into a count sheet. ITS V.Pro does considerably more. It knows what your stock should be — based on opening balances, goods received, issuances, and transfers — and automatically compares that expected position against what your team physically counts. The gap is your variance. And your variance is precisely where your risk lives.
              </p>
              <p className="text-ops-text-secondary leading-relaxed mb-6">
                Every count moves through a structured lifecycle: initiation, physical count entry, expected-versus-actual comparison, variance review, recount where needed, approval gates, and period-close control. The result is a defensible, documented count record — not a manual exercise that raises more questions than it answers.
              </p>
              <div className="space-y-3">
                {[
                  'System-calculated expected stock compared against physical counts',
                  'Variance surfaced immediately — no manual calculation required',
                  'Blind count mode conceals expected values for unbiased counting',
                  'Recount logic for items above variance tolerance thresholds',
                  'Review and approval gates before any count is finalised',
                  'Period-close control — counts lock before the period is closed',
                  "Approved closing stock seeds the next period's opening stock",
                  'Departments and main inventory counted in one unified framework',
                  'Full count event log — every entry, every reviewer, every decision',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-ops-teal flex-shrink-0 mt-0.5" />
                    <span className="text-ops-text text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="space-y-4">
                <div className="bg-white border border-ops-border rounded-2xl p-6 shadow-card">
                  <div className="text-xs font-semibold text-ops-text-muted uppercase tracking-widest mb-5">Count lifecycle</div>
                  <div className="space-y-3.5">
                    {[
                      { step: '01', label: 'Initiate Count', desc: 'A count event is opened for the defined scope — department, store, or targeted items.' },
                      { step: '02', label: 'Physical Count Entry', desc: 'Teams enter counted quantities. Blind mode conceals system expected values for independent counting.' },
                      { step: '03', label: 'Expected vs Actual', desc: 'The system calculates variance immediately — discrepancies surfaced item by item, no manual work.' },
                      { step: '04', label: 'Recount & Exception Handling', desc: 'Items above variance tolerance are flagged. A recount can be triggered before the count closes.' },
                      { step: '05', label: 'Approval & Sign-Off', desc: 'Authorised reviewers approve the count. No count finalises without documented approval.' },
                      { step: '06', label: 'Period Close & Stock Seeding', desc: 'Approved closing stock becomes the verified opening stock for the next operational period.' },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-ops-teal/10 text-ops-teal text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <div className="font-semibold text-ops-text text-sm">{item.label}</div>
                          <div className="text-ops-text-secondary text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: EyeOff,           label: 'Blind Count Support',    sublabel: 'Stronger count integrity' },
                    { icon: RotateCcw,         label: 'Recount Logic',          sublabel: 'Exception handling built in' },
                    { icon: Lock,              label: 'Period Close Control',   sublabel: 'Disciplined period closure' },
                    { icon: SlidersHorizontal, label: 'Configurable Framework', sublabel: 'Adapts to your operation' },
                  ].map(({ icon: Icon, label, sublabel }) => (
                    <div key={label} className="bg-ops-surface border border-ops-border rounded-xl p-4 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-ops-teal/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-ops-teal-dark" />
                      </div>
                      <div>
                        <div className="font-semibold text-ops-text text-xs leading-tight">{label}</div>
                        <div className="text-ops-text-muted text-[10px] mt-0.5">{sublabel}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-ops-dark rounded-xl px-5 py-4 flex items-start gap-3">
                  <BarChart3 size={16} className="text-ops-teal flex-shrink-0 mt-0.5" />
                  <p className="text-ops-dark-text-secondary text-sm leading-relaxed">
                    <span className="text-white font-semibold">Finance and auditors get count-verified stock figures.</span> Opening balances for each new period come from approved actual counts — not assumptions, not manual entries, not carry-forwards.
                  </p>
                </div>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </section>

      {/* ── INDUSTRY USE CASES ────────────────────────────── */}
      <section className="section-padding bg-ops-surface-alt">
        <div className="container-max">
          <SectionWrapper className="text-center mb-12">
            <div className="section-label justify-center">Who It's Built For</div>
            <h2 className="section-heading mx-auto max-w-3xl">
              Built for businesses where<br className="hidden md:block" />
              <span className="text-gradient-teal">stock control is not optional.</span>
            </h2>
            <p className="section-subheading mx-auto text-center">
              ITS V.Pro is not a generic inventory tool adapted for every context. It is designed for operating environments where stock moves daily, departments depend on timely issuances, and management needs real visibility — not approximations.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: Building2,
                industry: 'Hospitality & Hotels',
                description: 'Multiple departments — kitchen, bar, housekeeping, maintenance — each holding and consuming stock independently. ITS V.Pro brings structure to issuances, department balances, receiving, and monthly reconciliation across the entire property.',
                fits: ['Central store to department control', 'Per-outlet stock visibility', 'F&B department usage tracking', 'Multi-department receiving'],
              },
              {
                icon: Warehouse,
                industry: 'Bars, Restaurants & Cafés',
                description: 'Beverage and food stock moves fast. Waste, over-pouring, and receiving errors compound quickly. ITS V.Pro gives operators verified receiving, movement traceability, and the reporting needed to catch problems before they become losses.',
                fits: ['GRN verification against LPOs', 'Leakage and waste tracking', 'Opening and closing stock', 'Usage and movement reports'],
              },
              {
                icon: Layers,
                industry: 'Multi-Outlet Operations',
                description: 'Groups running multiple properties need separation between entities — different stock pools, different users, different reporting — while management retains group-level oversight. ITS V.Pro\'s multi-business architecture supports this directly.',
                fits: ['Isolated per-business environments', 'Separate user access per outlet', 'Consistent processes across sites', 'Group-level reporting potential'],
              },
              {
                icon: Cpu,
                industry: 'Manufacturing & Production',
                description: 'Raw materials, work-in-progress, and finished goods each require distinct tracking. Production environments need to see what is consumed, what is on hand, and whether materials are aligned with production schedules.',
                fits: ['Raw material tracking', 'Production consumption visibility', 'Stock movement through stages', 'Valuation and costing support'],
              },
              {
                icon: Package,
                industry: 'Warehousing & Distribution',
                description: 'High-volume receiving, transfers, and issuances require a system that keeps up without breaking down. ITS V.Pro handles structured receiving workflows, transfer controls, and movement traceability at warehouse scale.',
                fits: ['High-volume GRN management', 'Transfer control and logging', 'Reorder level management', 'Movement and balance reports'],
              },
              {
                icon: Target,
                industry: 'Stock-Driven Businesses Generally',
                description: 'Any operation where stock is a significant cost, where departments hold inventory, or where management needs clearer operational visibility will benefit from ITS V.Pro\'s control, traceability, and reporting capabilities.',
                fits: ['Central stock with departments', 'Approval-driven procurement', 'Regular stock counting', 'Management reporting needs'],
              },
            ].map((uc, i) => {
              const Icon = uc.icon
              return (
                <div key={i} className="bg-white rounded-2xl border border-ops-border p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-ops-teal-subtle flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-ops-teal-dark" />
                    </div>
                    <h3 className="font-bold text-ops-text text-sm">{uc.industry}</h3>
                  </div>
                  <p className="text-ops-text-secondary text-sm leading-relaxed mb-4 flex-1">{uc.description}</p>
                  <div className="pt-4 border-t border-ops-border space-y-2">
                    {uc.fits.map((fit, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-xs text-ops-text-secondary">
                        <div className="w-1.5 h-1.5 rounded-full bg-ops-teal flex-shrink-0" />
                        {fit}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Who uses it strip */}
          <div className="bg-ops-dark rounded-2xl px-8 py-7">
            <div className="text-center mb-6">
              <p className="text-white font-bold text-lg">Who uses ITS V.Pro within these businesses</p>
              <p className="text-ops-dark-text-secondary text-sm mt-1">The system is relevant across every team that touches stock, approvals, or reporting.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Directors & Owners', 'Operations Managers', 'Finance Teams',
                'Procurement Officers', 'Store Managers', 'Stock Controllers',
                'Heads of Department', 'Internal Auditors', 'Supervisors',
              ].map((role) => (
                <span key={role} className="px-4 py-2 bg-white/8 border border-white/12 rounded-full text-ops-dark-text text-sm font-medium">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────── */}
      <section className="section-padding bg-ops-bg">
        <div className="container-max">
          <SectionWrapper className="text-center mb-10">
            <div className="section-label justify-center">Why ITS V.Pro</div>
            <h2 className="section-heading mx-auto max-w-2xl">Spreadsheets record. Generic apps approximate. ITS V.Pro controls.</h2>
            <p className="section-subheading mx-auto text-center">
              Most businesses outgrow spreadsheets but never find a tool built for their actual operational depth. ITS V.Pro was designed to cover what everything else leaves out.
            </p>
          </SectionWrapper>

          <SectionWrapper>
            <div className="overflow-x-auto rounded-2xl border border-ops-border shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ops-surface border-b border-ops-border">
                    <th className="text-left px-6 py-4 text-ops-text font-semibold">Capability</th>
                    <th className="text-center px-6 py-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ops-teal text-white text-xs font-bold rounded-full">
                        <Zap size={10} /> ITS V.Pro
                      </div>
                    </th>
                    <th className="text-center px-6 py-4 text-ops-text-secondary font-semibold">Spreadsheet</th>
                    <th className="text-center px-6 py-4 text-ops-text-secondary font-semibold">Generic App</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={`border-b border-ops-border ${i % 2 === 0 ? 'bg-white' : 'bg-ops-surface'}`}>
                      <td className="px-6 py-3.5 text-ops-text">{row.feature}</td>
                      <td className="px-6 py-3.5 text-center"><ComparisonCell value={row.its} /></td>
                      <td className="px-6 py-3.5 text-center"><ComparisonCell value={row.spreadsheet} /></td>
                      <td className="px-6 py-3.5 text-center"><ComparisonCell value={row.generic} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── REPORTING DEPTH ───────────────────────────────── */}
      <section className="section-padding bg-ops-dark">
        <div className="container-max">
          <SectionWrapper className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ops-teal/30 bg-ops-teal/10 text-ops-teal text-xs font-semibold tracking-widest uppercase mb-4">
              Reporting
            </div>
            <h2 className="section-heading text-white mx-auto max-w-3xl">
              Reports that answer questions.<br className="hidden md:block" />
              Not reports that <span className="text-gradient-teal">create more of them.</span>
            </h2>
            <p className="section-subheading text-ops-dark-text-secondary mx-auto text-center">
              Leaders don't just need data — they need visibility. ITS V.Pro is built as a reporting engine that transforms daily operational activity into management intelligence. The right information, structured for action.
            </p>
          </SectionWrapper>

          {/* Report type grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              {
                icon: BarChart3,
                title: 'Stock Balance Reports',
                desc: 'Current stock position across your entire catalogue — by item, category, or department. Know what you hold at any moment without needing a manual count.',
              },
              {
                icon: GitBranch,
                title: 'Movement & Transfer Reports',
                desc: 'Full movement history — issuances, transfers, returns, adjustments. See exactly how a balance changed over any period and investigate any line with a reference trail.',
              },
              {
                icon: Building2,
                title: 'Department Usage Reports',
                desc: 'Consumption per department over any period. Compare usage against expectations. Identify which departments are consistently over-consuming and where to apply tighter controls.',
              },
              {
                icon: ScanLine,
                title: 'Receiving & GRN Reports',
                desc: 'Full receiving history — every GRN, supplier, quantity, and variance log. Finance and procurement can review what came in, what matched the LPO, and what was flagged.',
              },
              {
                icon: RefreshCw,
                title: 'Count & Reconciliation Reports',
                desc: 'Post-count variance summaries showing where physical stock differed from system stock, by how much, and in which items. Reconciliation support with an auditable record.',
              },
              {
                icon: DollarSign,
                title: 'Valuation Reports',
                desc: 'Stock on hand expressed in financial terms. Understand total inventory value, per-category value, and movement cost — the numbers finance needs to close the books cleanly.',
              },
              {
                icon: Clock,
                title: 'Aging & Slow-Mover Reports',
                desc: 'Identify items that have not moved within defined periods. Surface aging stock before it becomes a write-off. Support smarter purchasing decisions based on real movement history.',
              },
              {
                icon: ClipboardCheck,
                title: 'Procurement Activity Reports',
                desc: 'LPO history, approval timelines, pending orders, and supplier activity. Know what has been ordered, what is outstanding, and where procurement bottlenecks are forming.',
              },
              {
                icon: AlertTriangle,
                title: 'Variance & Exception Reports',
                desc: 'Surface anomalies automatically — items with unexpected movement, receiving discrepancies, count variances above threshold. Exception visibility so management sees what needs attention first.',
              },
            ].map((report, i) => {
              const Icon = report.icon
              return (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors duration-200">
                  <div className="w-9 h-9 rounded-xl bg-ops-teal/15 flex items-center justify-center mb-4">
                    <Icon size={16} className="text-ops-teal" />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">{report.title}</h3>
                  <p className="text-ops-dark-text-secondary text-sm leading-relaxed">{report.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Bottom conviction strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { heading: 'For Directors & Owners', body: 'Summary-level visibility into stock position, department performance, and operational health — without needing to dig through raw data.' },
              { heading: 'For Operations & Finance', body: 'Movement history, valuation reports, and reconciliation support that makes period-end cleaner, faster, and more defensible.' },
              { heading: 'For Procurement & Store Teams', body: 'Receiving history, pending LPOs, supplier variance logs, and reorder alerts — everything needed to run a tighter procurement cycle.' },
            ].map((item, i) => (
              <div key={i} className="bg-ops-teal/10 border border-ops-teal/20 rounded-xl px-6 py-5">
                <div className="font-bold text-white text-sm mb-2">{item.heading}</div>
                <p className="text-ops-dark-text-secondary text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUATION + AGING ────────────────────────────── */}
      <section className="section-padding bg-ops-teal-light">
        <div className="container-max">
          <SectionWrapper className="text-center mb-12">
            <div className="section-label justify-center">Financial & Aging Visibility</div>
            <h2 className="section-heading mx-auto max-w-3xl">
              Stock is not just items on a shelf.<br className="hidden md:block" />
              It is <span className="text-gradient-teal">money your business is holding.</span>
            </h2>
            <p className="section-subheading mx-auto text-center">
              Quantity alone is incomplete information. Management needs to understand what stock means financially — and whether the stock being held is still useful, appropriately aged, and worth its position in the operation.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Valuation card */}
            <div className="bg-white rounded-2xl border border-ops-border p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-ops-teal-subtle flex items-center justify-center flex-shrink-0">
                  <DollarSign size={22} className="text-ops-teal-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-ops-text text-lg">Stock Valuation</h3>
                  <p className="text-ops-text-secondary text-sm">Understand the financial weight of your inventory</p>
                </div>
              </div>
              <p className="text-ops-text-secondary leading-relaxed mb-5">
                ITS V.Pro provides valuation visibility across your stock — showing the monetary value of what you hold, by item and category. This gives finance teams and management a cleaner picture of inventory exposure without needing a separate calculation every time.
              </p>
              <div className="space-y-3">
                {[
                  'Stock on hand value — total and per category',
                  'Value impact of issuances, receipts, and adjustments',
                  'Support for period-end financial reporting',
                  'Cleaner visibility into inventory as a financial asset',
                  'Aids decisions around ordering, reduction, and write-offs',
                ].map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-ops-teal flex-shrink-0 mt-0.5" />
                    <span className="text-ops-text text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Aging card */}
            <div className="bg-white rounded-2xl border border-ops-border p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-ops-text text-lg">Inventory Aging</h3>
                  <p className="text-ops-text-secondary text-sm">Spot slow-moving stock before it becomes a problem</p>
                </div>
              </div>
              <p className="text-ops-text-secondary leading-relaxed mb-5">
                Aging stock is hidden risk. Items that are not moving are tying up money, occupying space, and — in perishable environments — moving towards spoilage. ITS V.Pro surfaces aging and slow-moving items so management can act while there is still time to make a good decision.
              </p>
              <div className="space-y-3">
                {[
                  'Identify items that have not moved within defined periods',
                  'Surface slow-moving stock across categories and departments',
                  'Support decisions on reordering, promotions, or write-downs',
                  'Reduce unnecessary holding costs from stale inventory',
                  'Earlier visibility into aging reduces the size of write-offs',
                ].map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-ops-text text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom callout */}
          <div className="mt-8 bg-ops-dark rounded-2xl px-8 py-7 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="text-white font-semibold text-lg leading-snug mb-1">
                Together, valuation and aging give management a financial lens on inventory — not just an operational one.
              </p>
              <p className="text-ops-dark-text-secondary text-sm leading-relaxed">
                Most businesses discover aging and valuation problems at month-end. ITS V.Pro makes them visible in real time, when action is still possible.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-ops-teal hover:bg-ops-teal-dark text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 hover:shadow-teal-glow hover:-translate-y-0.5 text-sm flex-shrink-0"
            >
              Request a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST & SECURITY ──────────────────────────────── */}
      <section className="section-padding bg-ops-surface-alt">
        <div className="container-max">
          <SectionWrapper className="text-center mb-10">
            <div className="section-label justify-center">Accountability & Control</div>
            <h2 className="section-heading mx-auto max-w-2xl">When control matters, every action must leave a trace.</h2>
            <p className="section-subheading mx-auto text-center">
              ITS V.Pro does not just record what happened. It structures who can do what, enforces approval at every critical step, and maintains a complete, unalterable record of every action — so that accountability is not a policy, it is a system reality.
            </p>
          </SectionWrapper>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {trustPoints.map((tp) => {
              const Icon = tp.icon
              return (
                <motion.div
                  key={tp.title}
                  variants={fadeUpItem}
                  className="bg-white rounded-2xl border border-ops-border p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex gap-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-ops-dark text-ops-teal flex items-center justify-center flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ops-text mb-2">{tp.title}</h3>
                    <p className="text-ops-text-secondary text-sm leading-relaxed">{tp.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <SectionWrapper className="mt-8">
            <div className="bg-ops-dark rounded-2xl px-8 py-7 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <p className="text-white font-semibold text-lg leading-snug mb-1">
                  Accountability becomes stronger when actions are visible and reviewable.
                </p>
                <p className="text-ops-dark-text-secondary text-sm leading-relaxed">
                  ITS V.Pro is designed for businesses that need to investigate quickly, reconcile cleanly, and demonstrate control clearly — to management, finance, and auditors.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-ops-teal hover:bg-ops-teal-dark text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 hover:shadow-teal-glow hover:-translate-y-0.5 text-sm flex-shrink-0"
              >
                Request a Demo <ArrowRight size={16} />
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── PERFORMANCE ───────────────────────────────────── */}
      <section className="section-padding bg-ops-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: copy */}
            <SectionWrapper>
              <div className="section-label">Performance</div>
              <h2 className="section-heading mb-5">
                A serious system must be<br />
                <span className="text-gradient-teal">deep without feeling heavy.</span>
              </h2>
              <p className="text-ops-text-secondary leading-relaxed mb-4">
                Many operational systems become slower and harder to use as data grows. Screens take longer to load. Navigation becomes sluggish. Reports feel like they are running in the background. Teams start working around the system instead of in it.
              </p>
              <p className="text-ops-text-secondary leading-relaxed mb-6">
                ITS V.Pro is being engineered from the ground up with a performance-first mindset. Fast navigation, responsive data access, minimal friction in daily workflows — designed to remain practical and usable whether you have a hundred transactions or tens of thousands.
              </p>
              <div className="space-y-3">
                {[
                  'Fast module navigation — no waiting between screens',
                  'Responsive data loading designed for real operational volume',
                  'Reports that return results quickly, not after a delay',
                  'Lightweight interface — no unnecessary bulk',
                  'Designed to stay usable as your data and team grow',
                  'Efficient under multi-user concurrent usage',
                  'Speed that supports — not slows — your daily operations',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Zap size={15} className="text-ops-teal flex-shrink-0 mt-0.5" />
                    <span className="text-ops-text text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </SectionWrapper>

            {/* Right: performance tiles */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    heading: 'Snappy Navigation',
                    body: 'Moving between modules — stock, GRNs, reports, departments — should feel instant. Slow systems frustrate teams and reduce adoption. ITS V.Pro is built to keep up with your pace of work.',
                  },
                  {
                    icon: Activity,
                    heading: 'Designed for Real Usage Volume',
                    body: 'A system is easy to build fast when it has no data. ITS V.Pro is architected with operational scale in mind — efficient queries, targeted data loads, and interfaces that do not degrade under real transaction history.',
                  },
                  {
                    icon: Cpu,
                    heading: 'Performance-First Engineering',
                    body: 'Every part of the system is built with load and usability in mind. Server-side processing for heavy operations, paginated data views, and optimised rendering keep the experience consistently fast.',
                  },
                  {
                    icon: Users,
                    heading: 'Multi-User Ready',
                    body: 'Whether one user or twenty are active simultaneously, ITS V.Pro maintains data integrity and responsiveness. Concurrency-safe workflows ensure stock counts, issuances, and approvals stay consistent under load.',
                  },
                ].map((tile, i) => {
                  const Icon = tile.icon
                  return (
                    <div key={i} className="flex items-start gap-4 bg-ops-surface border border-ops-border rounded-xl px-6 py-5">
                      <div className="w-9 h-9 rounded-xl bg-ops-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={16} className="text-ops-teal-dark" />
                      </div>
                      <div>
                        <div className="font-bold text-ops-text text-sm mb-1">{tile.heading}</div>
                        <p className="text-ops-text-secondary text-sm leading-relaxed">{tile.body}</p>
                      </div>
                    </div>
                  )
                })}

                <div className="bg-ops-dark rounded-xl px-6 py-5 flex items-start gap-3">
                  <TrendingUp size={16} className="text-ops-teal flex-shrink-0 mt-0.5" />
                  <p className="text-ops-dark-text-secondary text-sm leading-relaxed">
                    <span className="text-white font-semibold">Speed is not a luxury.</span> In a live operation, a system that makes teams wait is a system that gets abandoned. ITS V.Pro is engineered to stay out of the way and in the flow.
                  </p>
                </div>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </section>

      {/* ── WHY ITS V.PRO IS DIFFERENT ────────────────────── */}
      <section className="section-padding bg-ops-dark">
        <div className="container-max">
          <SectionWrapper className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ops-teal/30 bg-ops-teal/10 text-ops-teal text-xs font-semibold tracking-widest uppercase mb-4">
              Why It's Different
            </div>
            <h2 className="section-heading text-white mx-auto max-w-3xl">
              Many systems stop at recordkeeping.<br className="hidden md:block" />
              <span className="text-gradient-teal">ITS V.Pro is built to control, understand, and act.</span>
            </h2>
            <p className="section-subheading text-ops-dark-text-secondary mx-auto text-center">
              The difference is not just features. It is the philosophy behind the design — operational realism, accountability orientation, and reporting that genuinely helps management make better decisions.
            </p>
          </SectionWrapper>

          {/* Main differentiators: left label + right detail */}
          <div className="max-w-4xl mx-auto space-y-5 mb-12">
            {[
              {
                label: 'Operational realism — not screen design',
                detail: 'ITS V.Pro is built by people who understand how stock actually moves in real businesses — through departments, between stores, across receiving docks, and through reconciliation cycles. The workflows match reality. The system does not make you adapt your operation to fit its logic.',
              },
              {
                label: 'Department-level thinking from the ground up',
                detail: 'Most inventory systems treat stock as one flat number. ITS V.Pro understands that businesses operate in layers — central store, departments, sub-stores — and every module is built around that reality. Department accountability is not an add-on. It is foundational.',
              },
              {
                label: 'Approvals and control as core design principles',
                detail: 'Control is not added after the fact as a permission layer. Every critical transaction in ITS V.Pro — LPO creation, GRN verification, stock issuance, count approval — is designed with structured authorisation from the start. The system enforces discipline so you do not have to rely on hoping people follow policy.',
              },
              {
                label: 'Reporting built for decision-making, not just compliance',
                detail: 'Reports in ITS V.Pro are not just data exports. They are structured to answer the questions management actually asks — what moved, where did it go, what was received, what is aging, what is the current value, where are the variances. The output is decision-grade, not raw dump.',
              },
              {
                label: 'Performance engineered, not assumed',
                detail: 'Most systems are built first for functionality and optimised later — if ever. ITS V.Pro treats performance as a product requirement from the beginning. Fast navigation, efficient data loading, and responsive interfaces are not aspirations. They are built into the architecture.',
              },
              {
                label: 'Built for real businesses under real operational pressure',
                detail: 'This is not software designed for a demo. It is designed for the daily reality of a restaurant at peak service, a warehouse under receiving pressure, a manufacturer mid-production run, a hotel balancing multiple departments simultaneously. The system is built to hold up where it matters.',
              },
            ].map((diff, i) => (
              <div key={i} className="flex gap-5 bg-white/5 border border-white/8 rounded-xl px-6 py-5 group hover:bg-white/8 transition-colors duration-200">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-ops-teal/20 flex items-center justify-center mt-0.5">
                  <CheckCircle2 size={14} className="text-ops-teal" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm mb-1.5">{diff.label}</div>
                  <p className="text-ops-dark-text-secondary text-sm leading-relaxed">{diff.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom transformation strip */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl px-7 py-6">
                <div className="text-ops-dark-text-secondary text-xs font-semibold uppercase tracking-widest mb-4">Before ITS V.Pro</div>
                <div className="space-y-2.5">
                  {[
                    'Fragmented stock visibility across departments',
                    'Receiving done without structured verification',
                    'Movement unlogged or tracked in spreadsheets',
                    'Variances discovered at month-end or not at all',
                    'Reports that require manual assembly',
                    'Accountability based on trust, not traceability',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-ops-dark-text-secondary">
                      <X size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-ops-teal/10 border border-ops-teal/25 rounded-2xl px-7 py-6">
                <div className="text-ops-teal text-xs font-semibold uppercase tracking-widest mb-4">With ITS V.Pro</div>
                <div className="space-y-2.5">
                  {[
                    'Clear department stock positions and usage visibility',
                    'Verified receiving with GRN-to-LPO comparison',
                    'Every transfer logged with reference and owner',
                    'Variances surfaced in real time, not month-end',
                    'Management reports structured and ready to use',
                    'Full audit trail — every action, every user, every time',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-white">
                      <CheckCircle2 size={14} className="text-ops-teal flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────── */}
      <section className="section-padding bg-ops-teal-light">
        <div className="container-max">
          <SectionWrapper>
            <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl border border-ops-border p-10 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-ops-teal-subtle flex items-center justify-center mx-auto mb-5">
                <CalendarClock size={22} className="text-ops-teal-dark" />
              </div>
              <h2 className="text-2xl font-bold text-ops-text mb-3">Pricing tailored to your operation.</h2>
              <p className="text-ops-text-secondary leading-relaxed mb-6">
                ITS V.Pro pricing is structured around the size of your operation, the number of users, and your support requirements. We don't publish a one-size-fits-all price because we don't offer a one-size-fits-all product.
              </p>
              <p className="text-ops-text-secondary leading-relaxed mb-8">
                Contact us and we'll put together a clear, itemised proposal based on a conversation about your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-ops-teal hover:bg-ops-teal-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-teal-glow hover:-translate-y-0.5"
                >
                  Request Pricing <ArrowRight size={16} />
                </Link>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-ops-border hover:border-ops-teal text-ops-text hover:text-ops-teal font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=ITS V.Pro Pricing Enquiry`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-ops-border hover:border-ops-teal text-ops-text hover:text-ops-teal font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Mail size={16} /> Email Us
                </a>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────── */}
      <section className="section-padding bg-ops-surface-alt">
        <div className="container-max">
          <SectionWrapper className="text-center mb-8">
            <div className="section-label justify-center">Questions</div>
            <h2 className="section-heading mx-auto max-w-2xl">Common questions about ITS V.Pro</h2>
            <p className="section-subheading mx-auto text-center">
              Everything you need to understand the system, the implementation process, and whether it is the right fit for your operation.
            </p>
          </SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <AccordionFAQ items={itsFaqs} />
          </div>
        </div>
      </section>

      <CTAStrip
        heading="See ITS V.Pro in action."
        subheading="Book a demo and we'll walk you through the system using a real hospitality scenario."
        showBookCall={false}
      />

      {/* Final CTA */}
      <section className="py-10 px-4 bg-ops-surface-alt">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-ops-teal hover:bg-ops-teal-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-teal-glow hover:-translate-y-0.5"
          >
            Request a Demo <ArrowRight size={18} />
          </Link>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-ops-teal text-ops-teal hover:bg-ops-teal hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
        </div>
      </section>
    </>
  )
}
