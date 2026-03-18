export interface ServiceItem {
  id: string
  name: string
  description: string
  whoItsFor: string
  whatYouGet: string
  outcome: string
}

export interface ServiceCategory {
  id: string
  name: string
  tagline: string
  icon: string
  color: string
  services: ServiceItem[]
  faqs: { question: string; answer: string }[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'operations',
    name: 'Operations Consulting',
    tagline: 'Build systems that run without chaos.',
    icon: 'Settings',
    color: 'teal',
    services: [
      {
        id: 'operational-audits',
        name: 'Operational Audits',
        description:
          'A structured, end-to-end review of your current operations — processes, workflows, staffing, and controls. We find where value is leaking and where effort is wasted.',
        whoItsFor: 'Businesses that feel "busy but not productive" — including restaurants, bars, lounges, and hotels.',
        whatYouGet:
          'A detailed audit report with findings, risk flags, and actionable recommendations. No fluff — just honest analysis.',
        outcome: "Clear picture of what's working, what isn't, and exactly what to fix first.",
      },
      {
        id: 'process-development',
        name: 'Process Development',
        description:
          'We design processes from scratch — job descriptions, standard operating procedures (SOPs), shift handover protocols, quality checks, and more.',
        whoItsFor: 'Growing businesses that are scaling but have never formalised how things get done.',
        whatYouGet: 'Written, tested SOPs and process maps your team can actually follow.',
        outcome: 'Consistency in execution, reduced dependence on individual heroes, and a base for training.',
      },
      {
        id: 'process-assessment',
        name: 'Process Assessment',
        description:
          'An objective review of existing processes to determine whether they are fit for purpose, compliant with best practice, and correctly followed by staff.',
        whoItsFor: 'Operations managers who suspect procedures exist on paper but not in practice.',
        whatYouGet: 'Assessment scorecard, compliance gaps, and practical upgrade recommendations.',
        outcome: "Confidence that your procedures are being followed — and clarity on where they aren't.",
      },
      {
        id: 'process-restructuring',
        name: 'Process Re-Structuring',
        description:
          "When existing processes are broken or outdated, we don't patch them — we rebuild. We redesign workflows to eliminate bottlenecks, confusion, and duplication.",
        whoItsFor: 'Businesses dealing with persistent operational problems that workarounds haven\'t solved.',
        whatYouGet: 'Redesigned processes with clear ownership, steps, and accountability at each stage.',
        outcome: 'Fewer breakdowns, less firefighting, and smoother day-to-day operations.',
      },
      {
        id: 'workflow-optimization',
        name: 'Workflow Optimisation',
        description:
          'We map your current workflows, identify friction points, and implement leaner, faster ways of working — reducing time spent on low-value tasks.',
        whoItsFor: 'Teams where tasks take longer than they should, or where handoffs between departments cause problems.',
        whatYouGet: 'Optimised workflow diagrams, time-saving adjustments, and staff briefing materials.',
        outcome: 'Faster service delivery, fewer errors at handoff points, and a more efficient team.',
      },
      {
        id: 'cost-reduction',
        name: 'Cost Reduction Strategies',
        description:
          'We identify and eliminate unnecessary costs — from over-ordering to labour inefficiencies to energy waste. Practical cost reduction without sacrificing quality.',
        whoItsFor: 'Businesses seeing margins shrink without a clear understanding of why.',
        whatYouGet: 'Cost analysis, targeted reduction strategies, and an implementation roadmap.',
        outcome: 'Measurable cost savings within agreed timelines — not just theory.',
      },
      {
        id: 'training-development',
        name: 'Training & Development Programs',
        description:
          'Bespoke training programmes for operational staff — covering SOPs, customer handling, stock management, food safety, hygiene, and accountability.',
        whoItsFor: 'Businesses with high staff turnover, inconsistent service, or recent operational upheaval.',
        whatYouGet: 'Custom training content, facilitated sessions, and follow-up assessments.',
        outcome: 'A more capable, confident team that understands what\'s expected and can deliver it.',
      },
      {
        id: 'customer-experience',
        name: 'Customer Experience Enhancement',
        description:
          'We assess your customer journey from entry to exit — identifying pain points, improving service touchpoints, and helping you build loyalty through consistency.',
        whoItsFor: 'Hospitality businesses that want to turn satisfied customers into repeat and referring ones.',
        whatYouGet: 'Customer journey maps, service improvement recommendations, and training on CX standards.',
        outcome: 'Improved reviews, higher retention, and a reputation for reliability.',
      },
      {
        id: 'data-analysis',
        name: 'Data Analysis & Reporting',
        description:
          'We help you collect the right data, interpret it correctly, and turn it into decisions. From sales patterns to waste trends to cost variances.',
        whoItsFor: 'Business owners drowning in numbers but not sure what they mean or what to do next.',
        whatYouGet: 'Custom reports, dashboards (Google Sheets or system-based), and regular review formats.',
        outcome: 'Decisions grounded in evidence, not instinct. Fewer surprises at month-end.',
      },
      {
        id: 'kpi-development',
        name: 'Performance Metrics & KPI Development',
        description:
          'We define the right Key Performance Indicators for your business, set realistic targets, and build the frameworks to track and review them consistently.',
        whoItsFor: 'Owners and managers who want to hold their teams accountable with clear, fair metrics.',
        whatYouGet: 'KPI framework, measurement templates, and management review protocols.',
        outcome: 'A culture of accountability. Every team member knows what "good" looks like.',
      },
    ],
    faqs: [
      {
        question: 'How long does an operational audit typically take?',
        answer:
          'For most hospitality businesses, an initial audit takes 2–5 business days depending on the size and complexity of the operation. We provide a timeline estimate during our free discovery call.',
      },
      {
        question: 'Will we need to stop operations during the engagement?',
        answer:
          'No. Our assessments and implementations are designed to run alongside your live operations. We build around your schedule to minimise disruption.',
      },
      {
        question: 'Do you provide ongoing support after the project?',
        answer:
          'Yes. We offer post-engagement monitoring and check-ins. Many clients retain us on a part-time basis to ensure new systems and processes are sustained.',
      },
    ],
  },
  {
    id: 'stock',
    name: 'Stock Management',
    tagline: 'Know exactly what you have, where it is, and what it\'s worth.',
    icon: 'Package',
    color: 'teal',
    services: [
      {
        id: 'resource-allocation',
        name: 'Resource Allocation & Management',
        description:
          'We help you match resources — labour, equipment, and materials — to actual operational demand, eliminating both waste and shortages.',
        whoItsFor: 'Businesses that regularly run out of key items or consistently over-order.',
        whatYouGet: 'Resource planning models, allocation guidelines, and procurement triggers.',
        outcome: 'Right resources, right time, right quantity. Reduced emergency purchases and idle stock.',
      },
      {
        id: 'supply-chain',
        name: 'Supply Chain Management',
        description:
          'We review and strengthen your supplier relationships, order cycles, lead times, and delivery controls to reduce disruption and cost.',
        whoItsFor: 'Businesses that depend on reliable supply but experience frequent stockouts or late deliveries.',
        whatYouGet: 'Supplier evaluation framework, reorder schedules, and contingency sourcing plans.',
        outcome: 'More reliable supply, fewer emergencies, and better negotiating leverage with vendors.',
      },
      {
        id: 'inventory-management',
        name: 'Inventory Management',
        description:
          'End-to-end inventory management consulting — from how stock is received and stored to how it\'s issued, tracked, and reconciled.',
        whoItsFor: 'Any hospitality or production business that handles physical stock regularly.',
        whatYouGet: 'Inventory policies, cycle count procedures, physical count formats, and reconciliation templates.',
        outcome: 'Accurate stock counts, fewer discrepancies at month-end, and a clear audit trail.',
      },
      {
        id: 'vendor-management',
        name: 'Vendor & Supplier Management',
        description:
          'We help you manage your vendor relationships professionally — including performance tracking, credit terms, payment discipline, and dispute resolution.',
        whoItsFor: 'Businesses with multiple suppliers and no formal system for managing them.',
        whatYouGet: 'Vendor assessment templates, performance scorecards, and communication protocols.',
        outcome: 'More professional supplier relationships, better terms, and reduced dependency on a single source.',
      },
      {
        id: 'quality-control',
        name: 'Quality Control',
        description:
          'We design and implement quality control checks for both incoming stock and outgoing products — ensuring what you receive and what you serve meets your standards.',
        whoItsFor: 'Food & beverage businesses where quality inconsistency affects customer experience.',
        whatYouGet: 'QC checklists, rejection/return procedures, and staff training on standards.',
        outcome: 'Consistent product quality, fewer customer complaints, and reduced wastage from substandard stock.',
      },
      {
        id: 'sheets-systems',
        name: 'Google Sheets Stock Management Systems',
        description:
          'For businesses not yet ready for full software, we build powerful, structured stock management and costing systems in Google Sheets — customised to your operation.',
        whoItsFor: 'Small to mid-size hospitality businesses that want structure without heavy software investment.',
        whatYouGet: 'Custom Google Sheets workbook with stock tracking, costing, variance, and reporting tabs.',
        outcome: 'Full stock visibility at near-zero cost. A system that works even for staff without IT skills.',
      },
    ],
    faqs: [
      {
        question: 'We\'re a small bar. Do we really need formal stock management?',
        answer:
          'Yes — especially as a small bar. The smaller the margin, the more damaging uncontrolled stock loss becomes. Even a basic but consistent system can save you significantly.',
      },
      {
        question: 'What\'s the difference between the Google Sheets system and ITS V.Pro?',
        answer:
          'The Google Sheets system is a great starting point — low cost, easy for staff, and customisable. ITS V.Pro is a dedicated web application with formal workflows, approvals, role-based access, and audit logs. We help businesses graduate from Sheets to ITS V.Pro when they\'re ready.',
      },
      {
        question: 'How quickly can we have a working stock system in place?',
        answer:
          'For a Google Sheets-based system, typically 5–10 business days. For ITS V.Pro implementation, we schedule an onboarding timeline during the discovery call.',
      },
    ],
  },
  {
    id: 'costing',
    name: 'Costing Services',
    tagline: 'Price for profit, not just for sales.',
    icon: 'Calculator',
    color: 'teal',
    services: [
      {
        id: 'cost-analysis',
        name: 'Cost Analysis & Breakdown',
        description:
          'A detailed breakdown of all costs in your business — direct, indirect, fixed, and variable. We make the invisible visible.',
        whoItsFor: 'Businesses that are generating revenue but not sure where the money goes.',
        whatYouGet: 'Full cost breakdown report, cost pool mapping, and cost-driver analysis.',
        outcome: 'A complete picture of your cost structure. No more guessing where profit is leaking.',
      },
      {
        id: 'cost-allocation',
        name: 'Cost Allocation & Management',
        description:
          'We build systems for correctly allocating shared costs across departments, products, or outlets — giving each unit an accurate view of its true cost.',
        whoItsFor: 'Businesses with multiple departments, outlets, or product lines sharing resources.',
        whatYouGet: 'Cost allocation model, departmental cost reports, and management review templates.',
        outcome: 'Accurate per-unit costing, better departmental accountability, and clearer performance visibility.',
      },
      {
        id: 'product-costing',
        name: 'Product Costing & Pricing Strategy',
        description:
          'We cost individual products — dishes, drinks, manufactured items — to the last detail, then help you price them for profitability.',
        whoItsFor: 'Restaurants, bars, and manufacturers who suspect some products are losing them money.',
        whatYouGet: 'Product cost cards, contribution margin analysis, and pricing recommendations.',
        outcome: 'Every item on your menu or catalogue is priced to contribute positively to your bottom line.',
      },
      {
        id: 'investment-support',
        name: 'Investment Decision Support',
        description:
          'Before you spend on equipment, expansion, or a new outlet — we model the numbers. Feasibility, payback periods, break-even, and risk.',
        whoItsFor: 'Business owners considering significant capital expenditure or expansion.',
        whatYouGet: 'Investment analysis report with scenario modelling and a clear recommendation.',
        outcome:
          'Make expensive decisions with confidence, not guesswork. Protect capital. Pursue only viable opportunities.',
      },
      {
        id: 'budgeting-forecasting',
        name: 'Budgeting & Forecasting',
        description:
          'We build realistic budgets based on your actual cost structure and revenue patterns — and create rolling forecasts you can actually manage against.',
        whoItsFor: 'Businesses that operate without a budget or whose budgets are consistently missed.',
        whatYouGet: 'Annual budget model, monthly forecast templates, and variance reporting format.',
        outcome: 'Financial discipline. Management by targets, not by surprise.',
      },
      {
        id: 'cost-reduction-efficiency',
        name: 'Cost Reduction & Efficiency Improvement',
        description:
          'A focused engagement to identify and eliminate the top 5–10 cost inefficiencies in your operation — from procurement to production to service delivery.',
        whoItsFor: 'Businesses whose costs are growing faster than their revenue.',
        whatYouGet: 'Prioritised cost reduction roadmap, savings estimates, and a 90-day implementation plan.',
        outcome: 'Tangible, measurable cost savings within a defined timeframe.',
      },
      {
        id: 'cost-control',
        name: 'Cost Control & Monitoring',
        description:
          'We build the controls and checking cadence to keep costs in line after reduction efforts — so savings don\'t erode over time.',
        whoItsFor: 'Businesses that have cut costs before, only to see them creep back up.',
        whatYouGet: 'Control protocols, daily/weekly cost monitoring tools, and escalation procedures.',
        outcome: 'Costs stay controlled, not just reduced. Sustainable financial performance.',
      },
      {
        id: 'financial-reporting',
        name: 'Financial Reporting & Analysis',
        description:
          'We help you produce meaningful financial reports — P&L, cost-per-cover, food cost %, beverage cost %, labour cost % — and understand what they\'re telling you.',
        whoItsFor: 'Managers and owners who receive financial reports but aren\'t sure how to use them.',
        whatYouGet: 'Custom reporting templates, monthly review structure, and analysis training.',
        outcome: 'Financial reports that drive decisions. Numbers that mean something to everyone in the room.',
      },
    ],
    faqs: [
      {
        question: 'What\'s a good food cost percentage for a restaurant?',
        answer:
          'For most full-service restaurants in Uganda, a well-managed food cost sits between 28–35%. Bars with a heavy beverage focus typically target 18–25% on beverages. However, these targets vary by concept and pricing strategy — we\'ll help you determine the right target for your specific business.',
      },
      {
        question: 'We already have an accountant. Why do we need costing services?',
        answer:
          'Accountants focus on financial compliance and reporting. Costing services focus on operational cost control — which products generate margin, where waste occurs, how to price competitively. These are complementary, not overlapping.',
      },
      {
        question: 'Can you help us cost a menu from scratch?',
        answer:
          'Absolutely. Menu costing is one of our most requested services. We cost every item, model contribution margins, and advise on pricing — including how to handle seasonal ingredient costs.',
      },
    ],
  },
]
