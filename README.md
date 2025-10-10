# ApplyEasy

**Simplify your job search with AI-powered tools**

ApplyEasy is a modern job application management platform designed to streamline the job search process for job seekers. Built with Next.js and React, it provides intelligent tools to help you create compelling application materials, efficiently track your job applications, and prepare for interviews.

> **Note:** This is a fully frontend application with no backend implementation.

## Features

**Landing Page**
- Modern, responsive design optimized for all devices
- Clear value proposition and feature showcase
- Testimonials and social proof section
- Call-to-action for user onboarding

**Application Features**

*AI-Powered Application Tools*
- AI cover letter generator - Create tailored cover letters for each position
- AI resume generator - Build professional resumes optimized for your target roles
- Intelligent content suggestions based on job requirements

*Application Management*
- Track and manage all your job applications in one place
- Monitor application status and progress
- Organize applications with advanced filtering and search
- Never miss a deadline or follow-up

*Job Discovery*
- Smart job recommendations
- Save and bookmark interesting opportunities
- Comprehensive job search with advanced filters

*Interview Preparation*
- AI-powered interview practice
- Role-specific and language-specific interview questions
- Mock interview sessions with feedback

## Technology Stack

**Frontend Framework**
- Next.js - React framework with App Router
- React - UI library
- TypeScript - Type-safe development

**UI & Styling**
- Tailwind CSS - Utility-first CSS framework
- shadcn/ui - Re-usable component library

## Getting Started

### Prerequisites
- Node.js 18+ with npm/yarn
- Modern browser

### Installation & Development

```bash
git clone https://github.com/your-username/apply-easy.git
cd apply-easy
npm install
npm run dev
```

Visit `http://localhost:3000` to view the application.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
apply-easy/
├── app/                           # Next.js App Router (v15)
│   ├── (auth)/                   # Auth route group
│   │   ├── sign-in/             # Sign in page
│   │   ├── sign-up/             # Sign up page
│   │   ├── forgot-password/     # Password recovery
│   │   └── reset-password/      # Password reset
│   ├── (dashboard)/             # Dashboard route group
│   │   ├── layout.tsx           # Shared dashboard layout with sidebar
│   │   └── dashboard/           # Main dashboard page
│   │       ├── page.tsx         # Dashboard content
│   │       └── data.json        # Dashboard data
│   ├── (marketing)/             # Marketing route group
│   │   ├── layout.tsx           # Marketing layout
│   │   └── page.tsx             # Landing page
│   └── layout.tsx               # Root layout
│
├── components/                   # React components
│   ├── auth/                    # Authentication components
│   │   └── SocialAuth.tsx       # Social login buttons
│   ├── dashboard/               # Dashboard components
│   │   ├── sidebar/             # Sidebar components
│   │   │   ├── app-sidebar.tsx  # Main sidebar
│   │   │   ├── nav-main.tsx     # Main navigation
│   │   │   ├── nav-documents.tsx
│   │   │   ├── nav-secondary.tsx
│   │   │   ├── nav-user.tsx     # User profile section
│   │   │   └── index.ts         # Barrel exports
│   │   └── index.ts             # Barrel exports
│   ├── landing/                 # Landing page components
│   │   ├── Header.tsx           # Site header
│   │   ├── HeroSection.tsx      # Hero section
│   │   ├── FeaturesSection.tsx  # Features showcase
│   │   ├── HowItWorksSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingSection.tsx   # Pricing plans
│   │   ├── FAQSection.tsx       # FAQ accordion
│   │   ├── CTASection.tsx       # Call to action
│   │   ├── Footer.tsx           # Site footer
│   │   └── ...                  # Other sections
│   ├── layout/                  # Layout components
│   │   ├── Container.tsx        # Container wrapper
│   │   └── AuthLayout.tsx       # Auth pages layout
│   └── ui/                      # shadcn/ui components
│       ├── button.tsx           # Button component
│       ├── card.tsx             # Card component
│       ├── form.tsx             # Form components
│       ├── input.tsx            # Input field
│       ├── sidebar.tsx          # Sidebar primitives
│       ├── table.tsx            # Table component
│       ├── chart.tsx            # Chart components
│       └── ...                  # Other UI components
│
├── hooks/                       # Custom React hooks
│   └── use-mobile.ts           # Mobile detection hook
│
├── lib/                         # Utilities and helpers
│   ├── utils.ts                # Utility functions
│   ├── types/                  # Type definitions
│   └── validations/            # Form validations
│       └── auth.ts             # Auth validation schemas
│
├── types/                       # TypeScript type definitions
│   └── dashboard.ts            # Dashboard types
│
├── styles/                      # Global styles
│   └── globals.css             # Tailwind & global CSS
│
└── public/                      # Static assets
    ├── assets/                 # Images and media
    └── icons/                  # Icon files
```

---

<div align="center">

**ApplyEasy**

*Simplify your job search journey*

Built with Next.js, React, TypeScript, and Tailwind CSS

</div>
