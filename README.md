# WisKnowledge Website

> Official website for **WisKnowledge** — an educational and digital consultancy offering IELTS coaching, spoken English, study-abroad guidance, and strategic branding services.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?logo=netlify&logoColor=white)

🔗 **Live site:** [https://wisknowledge-website.netlify.app](https://wisknowledge-website.netlify.app)

---

## 📖 Overview

This is the official website for **WisKnowledge Consultancy**, a fully responsive single-page web application built from scratch to showcase the organization's educational programs and digital services with a clean, modern look. The site emphasizes fast load times, accessibility, and search-engine visibility.

I designed and developed the entire site independently — from layout and components to deployment — under the supervision of **Dr. Abdul Fareed Brohi**.

> Built solo as a hands-on training project during my time at **WisKnowledge Consultancy**, taking the website from concept to a live, deployed product.

## ✨ Features

- **Responsive design** — adapts cleanly across mobile, tablet, and desktop
- **Smooth scroll navigation** — single-page layout with section anchors (Home, Services, Trainers, Testimonials, FAQs, About, Contact)
- **Scroll animations** — powered by AOS for an engaging, modern feel
- **SEO optimized** — JSON-LD structured data (`Course`/`Offer` schema), dynamic meta tags via React Helmet, and an auto-generated sitemap
- **Accessibility** — semantic HTML with ARIA labels and landmark roles throughout
- **Service catalog** — IELTS Coaching, Spoken English, Study Management Workshop, and a Summer Camp, each with pricing and enrollment links

## 🛠️ Tech Stack

| Category        | Technology |
| --------------- | ---------- |
| Framework       | React 19 |
| Build Tool      | Vite 6 |
| Styling         | Tailwind CSS 4 |
| Animations      | AOS, Framer Motion |
| Icons           | React Icons, Lucide React |
| Routing/Scroll  | React Router DOM, React Scroll |
| SEO             | React Helmet Async, `sitemap` |
| Hosting         | Netlify |
| Version Control | Git & GitHub |

**Why this stack:** React + Vite for a fast, component-based development experience; Tailwind CSS for rapid, consistent styling; and Netlify for continuous deployment straight from GitHub.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/roqaya-k7an/wisknowledge-website.git

# Navigate into the project
cd wisknowledge-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

> 🌐 **Deployed site:** [https://wisknowledge-website.netlify.app](https://wisknowledge-website.netlify.app)

### Available Scripts

| Command                    | Description                          |
| -------------------------- | ------------------------------------ |
| `npm run dev`              | Start the local development server   |
| `npm run build`            | Build for production                 |
| `npm run preview`          | Preview the production build locally |
| `npm run lint`             | Run ESLint                           |
| `npm run generate-sitemap` | Generate the sitemap                 |

## 📁 Project Structure

```
wisknowledge-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Page sections (Home, Services, About, etc.)
│   ├── App.jsx             # Root component & section layout
│   ├── Navbar.jsx          # Navigation bar
│   └── main.jsx            # App entry point
├── generate-sitemap.js     # Sitemap generation script
└── package.json
```

## 👩‍💻 Author

**Ruqayya Khan**
- GitHub: [@roqaya-k7an](https://github.com/roqaya-k7an)
- LinkedIn: [Ruqayya Khan](https://www.linkedin.com/in/ruqayya-khan-886a28217)

---

<p align="center">Built with ❤️ during training at WisKnowledge Consultancy.</p>
