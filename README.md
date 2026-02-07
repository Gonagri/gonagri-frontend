<h1 align="center">
  🌱 GONAGRI
</h1>

<p align="center">
  <strong>Direct to Market. Direct to Growth.</strong>
</p>

<p align="center">
  A B2B digital marketplace connecting African farmers directly with commercial buyers.
</p>

<p align="center">
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-features">Features</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-team">Team</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind">
  <img src="https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Status-In%20Development-yellow?style=flat-square" alt="Status">
</p>

---

## 🚀 Overview

**GONAGRI** revolutionizes agricultural trade by eliminating middlemen and connecting farmers directly with restaurants, hotels, supermarkets, and food processors.

### Why GONAGRI?
- **For Farmers:** Fair prices, direct market access, digital tools
- **For Buyers:** Reliable sourcing, transparent pricing, quality assurance
- **For Everyone:** Secure payments, verified users, efficient logistics

---

## ✨ Key Features

### 👨‍🌾 **Farmer Dashboard**
- Digital storefront with product listings
- Inventory management system
- Secure payment wallet
- Order tracking & notifications

### 🏢 **Buyer Marketplace**
- Bulk ordering from multiple farmers
- Quality grading & transparent pricing
- Verified farm profiles
- Delivery scheduling

### ⚙️ **Platform Core**
- Escrow payment system (5-15% commission)
- User verification & rating system
- Logistics partner integration
- SMS/email notifications

---

## 🛠 Tech Stack

### Frontend
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

### Backend (Separate Repo)
- **Runtime:** Node.js + Express.js
- **Database:** PostgreSQL + Prisma
- **Auth:** JWT with refresh tokens
- **Payments:** Flutterwave/Paystack
- **Deployment:** Railway/Render

---

## 🚦 Quick Start

### Prerequisites
```bash
Node.js >= 18.0.0
npm or yarn
Git
# 1. Clone the repository
git clone https://github.com/your-org/gonagri-frontend.git
cd gonagri-frontend

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env.local

# 4. Start development server
npm run dev

Visit http://localhost:3000 to see the app.

Available Scripts
bash
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
npm run type-check  # TypeScript check

