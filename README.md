🌱 GONAGRI - Agricultural Marketplace Platform
Direct to Market. Direct to Growth.

https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js
https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript
https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css
https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge

📖 Overview
GONAGRI is a B2B digital marketplace connecting African farmers directly with commercial buyers (restaurants, hotels, supermarkets, processors). Our platform eliminates middlemen, ensures fair pricing for farmers, and provides buyers with reliable access to fresh, high-quality produce.

Live Demo: https://gonagri.com (Coming Soon Page)

🎯 Mission
To empower African farmers with direct market access and digital tools that unlock their full economic potential, while providing businesses with a streamlined, transparent, and reliable agricultural supply chain.

✨ Features
👨‍🌾 For Farmers
Digital Storefront - Create and manage product listings with photos

Inventory Tracking - Real-time stock management

Secure Wallet - Receive and manage payments in-app

SMS Notifications - Get order alerts on any phone

Order Management - View, accept, and track orders

🏢 For Buyers
Bulk Ordering - Place large orders across multiple farms

Verified Farm Profiles - Source from trusted, platform-verified farmers

Transparent Pricing - Clear costs with no hidden fees

Quality Grading - Filter by standardized quality grades (A, B, C)

Delivery Scheduling - Choose pickup or delivery options

⚙️ Platform Core
Escrow Payments - Secure transactions with funds held until delivery confirmation

Tiered Commission - 5% (<₦50k) / 15% (≥₦50k) platform fees

Verification System - KYC checks for farmers and buyers

Rating System - Build trust through community feedback

Logistics Integration - Connect with vetted delivery partners

🏗️ Tech Stack
Frontend
Framework: Next.js 14 (App Router)

Language: TypeScript

Styling: Tailwind CSS

State Management: React Context + Custom Hooks

Form Handling: React Hook Form + Zod Validation

Icons: Lucide React

HTTP Client: Axios

Backend (Separate Repository)
Runtime: Node.js + Express.js

Database: PostgreSQL with Prisma ORM

Authentication: JWT with refresh tokens

Payments: Flutterwave/Paystack Integration

SMS: Twilio or local providers

Deployment: Railway/Render

📁 Project Structure
text
gonagri-frontend/
├── public/                    # Static assets
│   ├── fonts/                # Custom fonts (Inter, Poppins)
│   ├── images/               # Images and illustrations
│   └── icons/                # SVG icons
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── coming-soon/      # Launch page (CURRENTLY LIVE)
│   │   ├── (main-app)/       # Full application (IN DEVELOPMENT)
│   │   │   ├── (auth)/       # Authentication pages
│   │   │   ├── (marketplace)/ # Public marketplace
│   │   │   ├── farmer/       # Farmer dashboard
│   │   │   ├── buyer/        # Buyer dashboard
│   │   │   ├── admin/        # Admin panel
│   │   │   └── layout.tsx    # Main app layout
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/           # Reusable components
│   │   ├── coming-soon/      # Launch page components
│   │   ├── ui/               # Base UI components
│   │   ├── marketplace/      # Marketplace components
│   │   ├── farmer/           # Farmer-specific components
│   │   ├── buyer/            # Buyer-specific components
│   │   └── shared/           # Shared components
│   ├── lib/                  # Utilities and helpers
│   │   ├── api/              # API client configurations
│   │   ├── constants/        # App constants
│   │   ├── utils/            # Utility functions
│   │   └── validation/       # Form validation schemas
│   ├── hooks/                # Custom React hooks
│   ├── types/                # TypeScript type definitions
│   └── styles/               # Additional styles
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
🚀 Getting Started
Prerequisites
Node.js 18.x or higher

npm or yarn

Git

Installation
Clone the repository

bash
git clone https://github.com/gonagri/gonagri-frontend.git
cd gonagri-frontend
Install dependencies

bash
npm install
# or
yarn install
Set up environment variables

bash
cp .env.example .env.local
Edit .env.local with your configuration:

env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
Run the development server

bash
npm run dev
# or
yarn dev
Open your browser
Navigate to http://localhost:3000

📱 Development Workflow
Current Phase: Coming Soon Launch
Primary Branch: main (hosts coming-soon page)

Development Branch: develop (full app development)

Feature Branches: feature/* for new features

Branch Strategy
text
main            → Production (coming-soon page)
└── develop     → Development (full app)
    ├── feature/farmer-dashboard
    ├── feature/buyer-marketplace
    └── feature/auth-system
Commit Convention
feat: New feature

fix: Bug fix

docs: Documentation

style: Code style/formatting

refactor: Code refactoring

test: Adding tests

chore: Maintenance

🧪 Testing
bash
# Run unit tests
npm test

# Run end-to-end tests
npm run test:e2e

# Run linting
npm run lint

# Type checking
npm run type-check
🚢 Deployment
Vercel (Recommended)
bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
Manual Build
bash
# Build for production
npm run build

# Start production server
npm start
👥 Team Structure
Core Team
Founder & CEO: Product vision & strategy

CTO: Technical architecture & backend

Product Manager: Feature prioritization & user stories

UI/UX Designer: User experience & interface design

Frontend Developers: (2) Next.js implementation

Backend Developers: (2) API & database

System Architect: Infrastructure & scalability

Contributors
AI/Data Specialist: Machine learning models

DevOps Engineer: Deployment & CI/CD

QA Engineer: Testing & quality assurance

📊 Project Status
Component	Status	Timeline
Coming Soon Page	✅ Live	Week 1
Farmer Dashboard	🚧 In Development	Week 3-4
Buyer Marketplace	🚧 In Development	Week 4-5
Authentication	🚧 In Development	Week 2
Payment Integration	📅 Planned	Week 6
Admin Panel	📅 Planned	Week 7
💰 Business Model
Revenue Streams
Transaction Fees: 5-15% commission on sales

Delivery Fees: Percentage from logistics partners

Premium Subscriptions: Advanced features for farmers

Verification Fees: Fast-track verification service

Data Insights: Market analytics for enterprises

Pricing Tiers
Farmers: Free basic account, ₦2,500/month for Pro features

Buyers: No subscription, pay per transaction

Logistics: 10-15% of delivery fee

🔒 Security
Authentication: JWT with refresh token rotation

Payments: PCI DSS compliant through Flutterwave

Data: Encryption at rest and in transit

Compliance: GDPR, Nigeria Data Protection Regulation

📄 License
This project is proprietary and confidential. All rights reserved.

© 2024 GONAGRI. Unauthorized copying, distribution, or use is prohibited.

🤝 Contact
Email: contact@gonaagri.com
Website: https://gonagri.com
Twitter: @GonagriApp

🌟 Acknowledgments
African farmers who inspired this platform

Our dedicated development team

Early supporters and beta testers

Built with ❤️ for the future of African agriculture. 🚜🌍

Last Updated: November 2024
*Version: 1.0.0-beta*

