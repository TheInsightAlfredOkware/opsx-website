export interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  slug: string
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'How to Reduce Stock Leakage in Bars and Lounges',
    excerpt:
      'Stock leakage in a bar rarely has a single cause. Understand the most common leakage points — from unrecorded pours to unverified deliveries — and the practical controls that actually prevent them.',
    category: 'Stock Management',
    readTime: '6 min read',
    date: 'February 2026',
    slug: 'reduce-stock-leakage-bars',
  },
  {
    id: '2',
    title: 'Why GRN Verification is Your First Line of Defence Against Loss',
    excerpt:
      'A Goods Received Note is not a formality. When done correctly, GRN verification catches short deliveries, substituted items, and inflated invoices before they hit your cost line.',
    category: 'Stock Management',
    readTime: '5 min read',
    date: 'January 2026',
    slug: 'grn-verification-prevents-loss',
  },
  {
    id: '3',
    title: 'Building a Simple KPI Dashboard for Hospitality Managers',
    excerpt:
      'You don\'t need sophisticated software to manage by numbers. Learn the 10 metrics every hospitality manager should track — and how to build a review dashboard in Google Sheets over a weekend.',
    category: 'Operations',
    readTime: '8 min read',
    date: 'January 2026',
    slug: 'kpi-dashboard-hospitality',
  },
  {
    id: '4',
    title: 'Costing Basics for Manufacturing: Where to Start',
    excerpt:
      'Production costing doesn\'t have to be complicated. This guide walks through the fundamental cost components — materials, labour, and overheads — and how to build a unit cost you can trust.',
    category: 'Costing',
    readTime: '7 min read',
    date: 'December 2025',
    slug: 'costing-basics-manufacturing',
  },
  {
    id: '5',
    title: 'The Complete Inventory Audit Checklist for Restaurants',
    excerpt:
      'Monthly stock counts mean nothing if they\'re done incorrectly. Use this structured checklist to run a clean, defensible inventory audit — from counting protocols to reconciliation to sign-off.',
    category: 'Stock Management',
    readTime: '5 min read',
    date: 'November 2025',
    slug: 'inventory-audit-checklist',
  },
  {
    id: '6',
    title: '5 Common Supplier Management Mistakes That Cost You More Than You Think',
    excerpt:
      'Poor vendor management is one of the most underestimated cost drivers in hospitality. From unverified deliveries to informal credit arrangements — here\'s what to fix and how.',
    category: 'Operations',
    readTime: '6 min read',
    date: 'October 2025',
    slug: 'supplier-management-mistakes',
  },
]

export const articleCategories = ['All', 'Stock Management', 'Operations', 'Costing']
