# Ops X Consulting — Marketing Website

A modern, conversion-optimised marketing website for **Ops X Consulting** and its inventory system product **ITS V.Pro**.

Built with: **React 18 + Vite 5 + TypeScript + Tailwind CSS + Framer Motion**

---

## Project Structure

```
opsx-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky navbar with mobile hamburger
│   │   │   └── Footer.tsx        # Footer with links, contact, social
│   │   └── ui/
│   │       ├── AccordionFAQ.tsx  # Animated expand/collapse FAQ
│   │       ├── AnimatedCounter.tsx # Scroll-triggered number counter
│   │       ├── Badge.tsx         # Pill labels
│   │       ├── Button.tsx        # Primary/secondary/ghost/white variants
│   │       ├── CTAStrip.tsx      # Reusable dark CTA band
│   │       └── SectionWrapper.tsx # Framer Motion scroll-reveal wrapper
│   ├── data/
│   │   ├── articles.ts           # 6 placeholder insight articles
│   │   ├── services.ts           # All 3 service categories + FAQs
│   │   └── testimonials.ts       # 4 realistic placeholder testimonials
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx           # Formspree form + WhatsApp + mailto fallback
│   │   ├── Home.tsx
│   │   ├── ITSVPro.tsx
│   │   ├── Resources.tsx
│   │   └── Services.tsx
│   ├── App.tsx                   # Router + layout + AnimatePresence
│   ├── index.css                 # Tailwind + custom utilities
│   └── main.tsx
├── tailwind.config.ts
├── vite.config.ts
├── .env.example
└── package.json
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services (Operations, Stock, Costing) |
| `/its-vpro` | ITS V.Pro Product Page |
| `/contact` | Contact / Book Consultation |
| `/resources` | Resources & Insights |

---

## Running Locally

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

### Setup

```bash
# 1. Clone or download the project
cd opsx-website

# 2. Install dependencies
npm install

# 3. Copy environment file
cp .env.example .env

# 4. (Optional) Add your Formspree form ID to .env
#    Get a free form at https://formspree.io
#    VITE_FORMSPREE_ID=your_form_id_here

# 5. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Building for Production

```bash
# Standard build (for Vercel or Netlify)
npm run build

# The dist/ folder contains the production build
# Preview it locally:
npm run preview
```

---

## Contact Form Setup (Formspree — Free)

1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form (free tier: 50 submissions/month)
3. Copy your form ID (e.g., `xpzgkwql`)
4. Add it to your `.env` file:
   ```
   VITE_FORMSPREE_ID=xpzgkwql
   ```
5. Deploy/rebuild — the contact form will now deliver emails to your Formspree inbox

> **Without a Formspree ID:** The form will fall back to a `mailto:` link that opens the user's email client with the form data pre-filled. No submissions are lost.

---

## Deploying for Free

### Option 1: Vercel (Recommended — Zero Config)

Vercel automatically detects Vite projects and deploys with no configuration needed.

**Via Vercel Dashboard (Easiest):**
1. Push your project to a GitHub repository
2. Go to [https://vercel.com](https://vercel.com) and sign up/log in with GitHub
3. Click **"Add New Project"**
4. Import your `opsx-website` repository
5. Vercel auto-detects Vite — settings are correct by default:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add your environment variable:
   - Go to **Settings → Environment Variables**
   - Add `VITE_FORMSPREE_ID` with your Formspree form ID
7. Click **Deploy** — your site is live in ~2 minutes

**Via Vercel CLI:**
```bash
npm install -g vercel
vercel login
vercel --prod
```

**Custom Domain (Free):**
- In Vercel dashboard → **Settings → Domains** → Add your domain (e.g., `opsxconsulting.com`)
- Update your domain's DNS records as instructed by Vercel

---

### Option 2: Netlify

**Via Netlify Dashboard:**
1. Push your project to GitHub
2. Go to [https://netlify.com](https://netlify.com) → Sign up/log in
3. Click **"Add new site" → "Import an existing project"**
4. Connect to GitHub and select your repository
5. Set build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Add environment variable:
   - Go to **Site Settings → Environment Variables**
   - Add `VITE_FORMSPREE_ID` = your Formspree form ID
7. Click **Deploy site**

**Important for Netlify — SPA Routing:**
Create a `public/_redirects` file (already handled if you add it):
```
/*    /index.html    200
```
This ensures React Router routes work correctly when users refresh or navigate directly to a URL.

```bash
# Add the redirects file:
echo "/*    /index.html    200" > public/_redirects
```

**Via Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --build --prod
```

---

### Option 3: GitHub Pages (Alternative)

GitHub Pages requires a base path adjustment because your site lives at `https://username.github.io/opsx-website/`.

**Step 1: Set the base path**
Rename `.env.example` to `.env` and set:
```
VITE_GITHUB_PAGES=true
```

This tells `vite.config.ts` to use `/opsx-website/` as the base path.

**Step 2: Build**
```bash
npm run build
```

**Step 3: Deploy using gh-pages**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json (add under "scripts"):
# "deploy:gh": "gh-pages -d dist"

# Deploy
npm run deploy:gh
```

**Step 4: Configure GitHub**
- Go to your repository → **Settings → Pages**
- Set Source to **Deploy from a branch** → `gh-pages` branch → `/ (root)`
- Your site will be live at: `https://yourusername.github.io/opsx-website/`

> **Note on React Router with GitHub Pages:** The `HashRouter` is an alternative if you have routing issues on GitHub Pages. To switch, edit `src/App.tsx` and change `BrowserRouter` to `HashRouter` (both are imported from `react-router-dom`). URLs will use `#` instead of clean paths (e.g., `/#/about` instead of `/about`).

---

## Domain Setup Tips

| Platform | Custom Domain | Free SSL |
|---|---|---|
| Vercel | Yes — add in dashboard | Yes (auto) |
| Netlify | Yes — add in dashboard | Yes (auto) |
| GitHub Pages | Yes — add CNAME file | Yes (auto) |

For a domain like `opsxconsulting.com`:
1. Purchase the domain from a registrar (Namecheap, Porkbun, etc.)
2. Point the domain's DNS to your chosen platform as instructed
3. Add the domain in your platform's dashboard
4. SSL certificate issues automatically within minutes

---

## Making Content Updates

### Update contact information
Edit `src/components/layout/Footer.tsx` and `src/pages/Contact.tsx`

### Update testimonials
Edit `src/data/testimonials.ts`

### Update services
Edit `src/data/services.ts` — each service has `name`, `description`, `whoItsFor`, `whatYouGet`, and `outcome`

### Add article cards
Edit `src/data/articles.ts` — add new entries to the array

### Replace logo
1. Add your logo file to `src/assets/` (SVG recommended)
2. In `src/components/layout/Navbar.tsx`, replace the `<div className="bg-teal-gradient...">` section with an `<img src={logo} alt="Ops X Consulting">` tag
3. Do the same in `src/components/layout/Footer.tsx`

### Update WhatsApp number
Search for `WA_LINK` across the codebase — change the number in the URL `https://wa.me/256XXXXXXXXX`

---

## Performance Notes

- All pages are **lazy-loaded** — initial bundle is minimal
- **Framer Motion** animations use `whileInView` to avoid loading off-screen elements
- No heavy image assets — all sections use CSS gradients and tailwind utilities
- Google Fonts loaded via `<link rel="preconnect">` for faster font loading
- Tailwind CSS purges unused styles in production — final CSS bundle is small

---

## Tech Stack Versions

| Package | Version |
|---|---|
| React | 18.3 |
| Vite | 5.4 |
| TypeScript | 5.4 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |
| React Router | 6.22 |
| Lucide React | 0.344 |
| React Helmet Async | 2.0 |
| @formspree/react | 2.5 |

---

## Support

For questions about the website, contact: **opsxconsulting@gmail.com**
