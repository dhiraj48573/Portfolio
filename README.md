# Dhiraj Kumar — Developer Portfolio

**Software Development Engineer | Full-Stack | AI & Agentic Systems Enthusiast**

A production-grade, highly optimized portfolio application built with **Next.js 15 (App Router)**, React 19, and Tailwind CSS v4. Designed with a premium dark-mode aesthetic and engineered for maximum SEO performance to strengthen the canonical personal brand of Dhiraj Kumar.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start local development server (opens on http://localhost:3000)
npm run dev

# Create a production static export
npm run build

# Preview the static export locally
npx serve@latest out
```

---

## 📂 Architecture & Project Structure

This project has been migrated from Vite to a modern Next.js 15 static-export architecture, allowing for superior SEO, routing, and performance.

```text
portfolio/
├── app/                        # Next.js App Router
│   ├── globals.css             # Tailwind v4 configuration and global styles
│   ├── layout.jsx              # Root layout, global SEO metadata, and JSON-LD schema
│   ├── page.jsx                # Homepage (aggregates all portfolio sections)
│   ├── blog/
│   │   └── [slug]/page.jsx     # Dynamic blog post routes (SSG)
│   └── projects/
│       └── [slug]/page.jsx     # Dynamic project detail routes (SSG)
├── public/                     # Static assets
│   ├── Photo-dhiru.jpeg        # Profile image
│   ├── ai-agents-cover.png     # Blog featured images
│   └── Dhiraj_Kumar_Resume.pdf # Downloadable resume
├── src/
│   ├── data/
│   │   └── candidate.js        # Single source of truth for all content & blog data
│   └── components/             # Reusable React UI components
│       ├── Hero.jsx            # Animated hero with CSS terminal
│       ├── AboutMe.jsx         # Biography and metrics
│       ├── Projects.jsx        # Case studies grid
│       ├── Blog.jsx            # Blog post listing
│       ├── BlogPost.jsx        # Rich text blog content renderer
│       ├── Contact.jsx         # EmailJS wired contact form
│       └── ...                 # Other UI components (Nav, Footer, etc.)
├── next.config.mjs             # Next.js configuration (configured for output: 'export')
└── package.json                # Dependencies and scripts
```

---

## ⚙️ Content Management

All data for the portfolio (including the resume details, projects, and full-length blog articles) is centralized in a single file: `src/data/candidate.js`. 

To update the portfolio, simply modify the exported objects in this file:
- **`candidate`**: Basic info, social links, education.
- **`projects`**: Portfolio case studies.
- **`blogPosts`**: Articles rendered by the dynamic routing system.
- **`skills` / `experiences` / `certs`**: Professional background.

---

## 🌐 SEO & Personal Branding Strategy

This portfolio acts as the canonical source for the "Dhiraj Kumar" entity on search engines. It utilizes:
- **Next.js Metadata API**: Dynamically generates optimized `<title>`, `<meta>`, and OpenGraph tags for every page and article.
- **JSON-LD Structured Data**: Injects highly accurate `Person`, `WebSite`, and `BlogPosting` schemas to help Google construct a Knowledge Graph connecting the portfolio to external profiles (GitHub, LinkedIn, LeetCode).
- **Static Site Generation (SSG)**: Ensures lighting-fast page loads and perfect indexability for web crawlers.

---

## ✉️ Configuring EmailJS (Contact Form)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages directly to your inbox without a backend server.

1. Sign up at EmailJS and create an Email Service.
2. Create an Email Template with variables like `{{from_name}}`, `{{from_email}}`, and `{{message}}`.
3. Open `src/components/Contact.jsx` and replace the placeholder constants with your keys:
   ```javascript
   const EMAILJS_SERVICE_ID = 'service_xxxxxxx';
   const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx';
   const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxx';
   ```

---

## 🚀 Deployment (Hostinger / Static Hosting)

This project is configured as a Static Export (`output: 'export'` in `next.config.mjs`), making it incredibly cheap and fast to host on platforms like Hostinger, GitHub Pages, or Netlify.

1. Run the build command:
   ```bash
   npm run build
   ```
2. Next.js will generate an `out/` folder containing the compiled HTML, CSS, and JS files.
3. Upload the **contents** of the `out/` folder to your Hostinger `public_html` directory via FTP or hPanel.

---

## 🎨 Design & Aesthetics

- **Framework**: Tailwind CSS v4 
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: JetBrains Mono (code/accents) & DM Sans (body) via `next/font/google`.
- **Theme**: Premium dark-mode aesthetic with interactive hover states, glassmorphism, and neon accents.

---

**Built by Dhiraj Kumar** · Haridwar, Uttarakhand · [dhirajsinghmichal@gmail.com](mailto:dhirajsinghmichal@gmail.com)