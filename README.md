# ApplyEasy

A modern, AI-powered job search platform that recommends jobs and agencies tailored to your profile—no more endless scrolling on Seek, Indeed, or LinkedIn. ApplyEasy delivers a clean, user-focused experience with advanced filtering, beautiful UI, and transparency in recommendations.

![ApplyEasy Logo](public/assets/logo.png)

---

## Features

- **AI-Powered Recommendations:**  
  Get job and agency suggestions matched to your skills, preferences, and experience.

- **Modern, Clean UI:**  
  Built with best practices, accessibility, and reusability in mind.

- **Sidebar Navigation:**  
  Quick access to Home, Recommended Jobs, Applications, Agencies, Resume & Cover Letter, Interview Prep, Saved Jobs, and Settings.

- **Recruitment Agencies:**

  - Search & filter agencies by industry, location, and rating.
  - View agency profiles in a beautiful modal.
  - Save/bookmark agencies for later.

- **Recommended Jobs:**

  - Profile summary bar with editable preferences.
  - Advanced job filters (search, sort, dropdowns, filter chips, animated transitions).
  - Paginated, loading-aware job list with skeletons.
  - Job details page with full description, company info, and "Why this job?" AI match section.
  - Save/bookmark and share jobs.

- **Reusable Components:**

  - Cards, modals, skeletons, pagination, filter bars, and more.

- **Breadcrumb Navigation:**

  - Context-aware breadcrumbs for easy navigation and orientation.

- **Responsive & Mobile-Friendly:**
  - Optimized for all devices.

---

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **UI:** [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide](https://lucide.dev/), [react-icons](https://react-icons.github.io/react-icons/)
- **State & Forms:** [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Other:** [Supabase](https://supabase.com/) (optional, for backend), [Radix UI](https://www.radix-ui.com/)

---

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/apply-easy.git
   cd apply-easy
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## Folder Structure

- `app/` — Next.js app directory (routes, pages, API)
- `components/` — Reusable UI components
- `public/assets/` — Images and logos
- `public/icons/` — SVG icons
- `hooks/`, `lib/` — Custom hooks and utilities

---

## Customization

- **AI Integration:**  
  Swap out mock data for your AI/ML backend or API.
- **Theming:**  
  Easily customize with Tailwind and shadcn/ui.
- **Extensible:**  
  Add more job sources, agency integrations, or user features as needed.

---

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/)

---

**ApplyEasy — Find your next job, the smart way.**
