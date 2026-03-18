import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ops-bg': '#FFFFFF',
        'ops-surface': '#F8FAFC',
        'ops-surface-alt': '#F1F5F9',
        'ops-border': '#E2E8F0',
        'ops-border-hover': '#CBD5E1',
        'ops-text': '#0F172A',
        'ops-text-secondary': '#64748B',
        'ops-text-muted': '#94A3B8',
        'ops-teal': '#14B8A6',
        'ops-teal-dark': '#0D9488',
        'ops-teal-hover': '#0F766E',
        'ops-teal-light': '#F0FDFA',
        'ops-teal-subtle': '#CCFBF1',
        'ops-dark': '#0E1117',
        'ops-dark-surface': '#121826',
        'ops-dark-border': '#232A36',
        'ops-dark-text': '#E6EAF0',
        'ops-dark-text-secondary': '#9AA4B2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
        'card-hover': '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.06)',
        'nav': '0 1px 0 0 rgb(226 232 240 / 1)',
        'nav-scrolled': '0 4px 20px -2px rgb(0 0 0 / 0.08)',
        'teal-glow': '0 0 0 3px rgb(20 184 166 / 0.2)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
