export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  industry: string
  quote: string
  outcome?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'General Manager',
    role: 'General Manager',
    company: 'Bar & Restaurant, Uganda',
    industry: 'Hospitality',
    quote:
      'Before Ops X, we were constantly running out of stock mid-service and had zero idea where our margins were going. They came in, assessed our entire operation, and within three months we had proper receiving procedures, a working stock system, and our food cost dropped by nearly 8 percentage points. It was a game-changer.',
    outcome: 'Food cost reduced by 7.8 percentage points in 90 days.',
  },
  {
    id: '2',
    name: 'Business Owner',
    role: 'Owner',
    company: 'Café Group, Uganda',
    industry: 'F&B',
    quote:
      'I\'d tried running inventory on a spreadsheet I made myself — it worked for a while, but when we grew to two outlets it completely broke down. Ops X built us a proper Google Sheets system that actually matched how we operate. Reconciliation that used to take us all day now takes an hour. Highly recommended.',
    outcome: 'Month-end reconciliation time reduced from 8 hours to under 1 hour.',
  },
  {
    id: '3',
    name: 'Operations Director',
    role: 'Operations Director',
    company: 'Hotel Group, Uganda',
    industry: 'Hotels',
    quote:
      'We engaged Ops X to help us develop KPIs and a management reporting structure for our three-property group. What impressed us most was how they translated complex operational data into clear, actionable dashboards our department heads could actually use. The accountability culture has improved significantly.',
    outcome: 'Implemented KPI framework across 3 properties within 6 weeks.',
  },
  {
    id: '4',
    name: 'Finance Manager',
    role: 'Finance Manager',
    company: 'Beverages Manufacturer, Uganda',
    industry: 'Manufacturing',
    quote:
      'Our production costing was a mess — different people using different methods, nobody confident in the numbers. Ops X standardised our entire cost allocation methodology, and for the first time we have a clear, defensible cost per unit that our pricing team can actually rely on. The clarity alone was worth every shilling.',
    outcome: 'Standardised product costing across 12 SKUs. Pricing strategy revised for improved margin.',
  },
]
