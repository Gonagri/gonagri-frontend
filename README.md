# 🌾 Gonagri Agricultural Marketplace

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/gonagri/frontend)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)

**Gonagri** is a next-generation, high-premium agricultural marketplace platform designed to bridge the gap between small-scale farmers and bulk industrial buyers. By leveraging verified stakeholder identities and a secure escrow-based financial model, Gonagri ensures fair trade, transparent pricing, and sustainable growth across the agricultural supply chain.

---

## 🏗️ Technical Architecture

### Core Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router Architecture)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS (Custom Design System)
- **Icons**: Lucide React
- **Animation**: CSS Keyframes + Framer-inspired transitions
- **Infrastructure**: Turbopack-optimized production builds

### Design Philosophy
The application follows a **"Green-First" sustainable aesthetic**, utilizing:
- **Primary Color**: Emerald/Green (`#22c55e`) representing growth and agriculture.
- **Accent Color**: Amber/Amber (`#f59e0b`) for alerts, notifications, and call-to-actions.
- **Glassmorphism**: Subtle backdrop blurs and white/80 backgrounds for a modern SaaS feel.
- **Typography**: Clean, sans-serif hierarchy prioritizing readability and data density.

---

## 📂 Project Structure

```bash
app/
├── (public)/              # Marketing & Public Informational Pages
│   ├── about/             # Mission, values, and company impact
│   ├── contact/           # Support form & direct lines
│   ├── terms/             # Legal Framework & Escrow policies
│   └── page.tsx           # High-conversion landing page (10 features)
├── (auth)/                # Secure Authentication Flow
│   ├── login/             # Role-based secure sign-in
│   └── signup/            # Onboarding with verified role selection
├── (dashboard)/           # Protected Multi-Role Environments
│   ├── admin/             # 🛡️ Governance & Infrastructure
│   │   ├── audit/         # Real-time security event tracking
│   │   ├── config/        # Global fee & feature management
│   │   ├── disputes/      # Escrow mediation center
│   │   ├── verification/  # KYC/Farmer approval queue
│   │   └── transactions/  # Global ledger monitoring
│   ├── farmer/            # 👨‍🌾 Production & Sales Management
│   │   ├── analytics/     # Revenue & growth charts
│   │   ├── inventory/     # Multi-warehouse stock tracking
│   │   └── products/      # Catalog management
│   └── buyer/             # 📦 Marketplace & Procurement
│       ├── cart/          # Batch trade management
│       ├── checkout/      # Logistics & fulfillment planning
│       ├── payment/       # Secure Escrow fund locking
│       └── product/[id]/  # High-detail product specifications
├── components/            # Atomic Design Component Library
│   ├── ui/                # Base UI elements (Card, Button, Badge, etc.)
│   ├── layout/            # Navigation (Sidebar, TopBar, Navbar)
│   └── shared/            # Feature-specific shared views (Chat, Charts)
└── libs/                  # Application Core Logic
    ├── constants.ts       # Global tokens & Assets (Unsplash CDN)
    └── utils.ts           # Helper functions
```

---

## ✨ Key Platform Features

### 🌐 1. Public Marketplace Presence
- **10 Core Features Display**: Landing page showcasing Escrow, Market Prices, Direct Trading, and AI Forecasts.
- **Stakeholder Education**: Dedicated "How it Works" sections for both sides of the trade.
- **Brand Trust**: Professional About and Contact pages building corporate credibility.

### 🛡️ 2. Advanced Administration (Governance)
- **Escrow Mediation**: Dedicated interface for resolving disputes with refund/release toggles.
- **Security Audit Logs**: Comprehensive tracking of admin actions (IP tracking, severity levels).
- **User Verification Queue**: KYC-ready workflow for approving farmers and high-volume buyers.
- **Platform Configuration**: Real-time management of commission rates and system safety-toggles.

### 👨‍🌾 3. Farmer Production Suite
- **Inventory Ledger**: Track stock from harvest to warehouse with low-stock alerts.
- **Sales Analytics**: Visual data on revenue growth and top-performing produce categories.
- **Direct Negotiation**: Real-time messaging with buyers to secure volume contracts.
- **Smart Wallet**: History of secured trades and automated fund release tracking.

### 📦 4. Premium Buyer Experience
- **High-Fidelity Marketplace**: Category-filtered discovery of verified agricultural produce.
- **Verified Details**: Full moisture content, grading, and harvest date specifications.
- **Double-Layer Checkout**: Logistic preference selection followed by Bank-Grade Secure Payment.
- **Trade Protection**: Funds are held in escrow and only released upon buyer quality confirmation.

---

## 🚀 Development & Deployment

### Quick Start
1. **Clone & Install**:
   ```bash
   git clone https://github.com/gonagri/frontend.git
   npm install
   ```
2. **Environment Configuration**:
   Create a `.env.local` for API endpoints:
   ```env
   NEXT_PUBLIC_API_URL=https://api.gonagri.com/v1
   ```
3. **Run Environment**:
   ```bash
   npm run dev
   ```

### Production Build
The application is pre-optimized for production:
```bash
npm run build
npm start
```

---

## 🛣️ Future Roadmap
- [ ] **AI Yield Integration**: Predictive modeling based on farmer harvest logs.
- [ ] **Blockchain Ledger**: Moving audit logs to an immutable on-chain record.
- [ ] **Localized Pricing**: Dynamic currency conversion for cross-border African trade.
- [ ] **Mobile Native Apps**: React Native wrappers for offline-first farmer field recording.

---

## 📝 Compliance & Standards
- **Strict TypeScript**: 100% type safety across all components and props.
- **Clean Architecture**: Decoupled UI logic from business rules for easier backend integration.
- **Accessibility**: ARIA-compliant components with high-contrast color ratios.
- **Next.js 15 Standards**: Utilizing the latest caching and rendering optimization features.

---
*Gonagri - Empowering the roots of global supply.* 🌍🌾
