<div align="center">

  # 🌟 Rashminda Aluvihare | Interactive Personal Portfolio

  <p align="center">
    <b>A high-performance, modern Glassmorphism portfolio web application built with React 19 & Vite.</b>
  </p>

  [![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![CSS3](https://img.shields.io/badge/CSS3-Vanilla_System-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://w3.org/)
  [![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.app/)

  ---

  <h3>🌐 <a href="https://rashmindaluvihare.vercel.app/">Live Web Portfolio Preview</a></h3>

</div>

<br />

## 📖 Overview

Welcome to the official repository of **Rashminda Aluvihare's Personal Portfolio**. 

This web application showcases my academic credentials, professional experience in full-stack web development and banking operations, tech stack, project case studies, accredited Cisco certifications, and extracurricular achievements.

Built with **React 19** and **Vite**, the application features a custom **Glassmorphism design system**, a dynamic background canvas animation, an integrated **AI Assistant Chatbot**, and an interactive **Certificate Lightbox Preview Modal** rendered via React Portals.

---

## ✨ Key Features & Highlights

### 🎨 Glassmorphism & Modern UI Design
- **Theme System**: Seamless **Dark Mode & Light Mode** toggle with state persistence in `localStorage`.
- **Visual Excellence**: Dark theme aesthetics with cyan & purple glow accents, glassmorphic translucent panels, dynamic hover cards, and smooth scroll animations.
- **Animated Canvas Background**: Custom dynamic node/particle background logic rendered in real-time.

### 🏆 Cisco Accredited Certifications Showcase
- **Cisco IT Essentials** *(Invictus Systems • Issued 28 Jul 2025)*
- **Networking Essentials** *(Innovate IT Institute • Issued 24 Jan 2025)*
- **Interactive Lightbox Modal**: Click any certificate to launch a high-resolution preview modal with:
  - React Portal rendering directly to `document.body` (zero stacking context overlap).
  - Zoom In / Zoom Out and image pan capabilities.
  - Next/Previous certificate slideshow navigation.
  - Browser History (`popstate`) integration (pressing phone/browser Back button closes modal cleanly).

### 🤖 Built-in AI Assistant Chatbot
- Floating interactive AI assistant chatbot powered by a custom natural language knowledge engine.
- Instant responses for questions regarding Rashminda's background, technical skills, projects, work experience, education, and contact details.

### 📱 100% Mobile Responsive
- Responsive top navigation dock with mobile drawer menu (`<Navbar />`).
- Touch-optimized cards, modal controls, and typography using responsive CSS (`clamp()`, flexbox, and grid).

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies & Tools |
| :--- | :--- |
| **Frontend Framework** | **React 19**, React DOM |
| **Build & Tooling** | **Vite 8**, ESBuild, Oxlint |
| **Styling & Design System** | Vanilla CSS3 (CSS Variables, Flexbox, Grid, Glassmorphism, Animations) |
| **Icons & Media** | **Lucide React** Icon Library |
| **Backend & Databases (Projects)** | Node.js, Express.js, PHP, MySQL RDBMS, PostgreSQL |
| **Deployment & Hosting** | Vercel Platform |

---

## 👨‍💻 Academic & Professional Background

### 🎓 Educational Qualifications
- **Higher National Diploma in Information Technology (HNDIT)** — *Sri Lanka Institute of Advanced Technological Education (SLIATE)* (Aug 2024 - Aug 2026)
  - Specialization: Software Engineering, Business Analysis, IT Project Management, & Database Architecture.
- **Diploma in Banking & Finance (DBF Level I)** — *Institute of Bankers of Sri Lanka (IBSL)*
  - Passed: IT, Digital Banking and Settlements.

### 💼 Professional Experience
- **Full-Stack Software Developer** — *Decodelabs*
  - Developed responsive React/Next.js frontends and integrated RESTful APIs.
- **Banking Operations Assistant / Trainee** — *People's Bank Sri Lanka*
  - Gained hands-on experience in customer financial workflows, credit management, and core banking operations.

---

## 🚀 Featured Projects

1. 🌾 **AgroNexa LK** — *Smart Farming Platform with Blockchain-Inspired Ledger & Marketplace*
   - Technologies: React, Node.js, Express, PostgreSQL, Tailwind CSS.
2. 💰 **FinBridge** — *AI-Based Personal Financial Health & Loan Risk Assessment Platform*
   - Technologies: Next.js, React 19, Zustand, REST APIs.
3. 🏢 **Fund Management System** — *Academic Financial Engine for SLIATE HNDIT*
   - Technologies: PHP, MySQL, JavaScript, Bootstrap.
4. 🌐 **Interactive Portfolio** — *Glassmorphic Portfolio & AI Assistant Engine*
   - Technologies: React 19, Vite, Lucide React, Custom CSS.

---

## 📂 Project Directory Structure

```text
portfolio/
├── public/                     # Static assets & favicon
├── src/
│   ├── assets/                 # Images, logos & certificates
│   ├── components/             # React UI Components
│   │   ├── About.jsx           # Personal Bio & Overview
│   │   ├── Activities.jsx      # Leadership & Extracurriculars
│   │   ├── Background.jsx      # Animated Particle Canvas
│   │   ├── Certifications.jsx  # Cisco Certifications & Lightbox Modal
│   │   ├── Chatbot.jsx         # Embedded AI Assistant Floating Bot
│   │   ├── Contact.jsx         # Contact Form & Direct Links
│   │   ├── Education.jsx       # Academic Qualifications (SLIATE & IBSL)
│   │   ├── Experience.jsx      # Work Experience Timeline
│   │   ├── Hero.jsx            # Hero Banner & Interactive Terminal
│   │   ├── Navbar.jsx          # Glassmorphic Dock & Theme Switcher
│   │   ├── Projects.jsx        # Project Cards & Case Studies
│   │   ├── Skills.jsx          # Interactive Skills Grid with Filters
│   │   └── SplashScreen.jsx    # Animated Loader Screen
│   ├── data/                   # Data arrays (Case studies, activities)
│   ├── App.jsx                 # Main Application Container
│   ├── main.jsx                # Application Entry Point
│   └── index.css               # Design Tokens, Utility Classes & Themes
├── index.html                  # HTML5 Template & Metadata
├── package.json                # Project Dependencies & Scripts
├── README.md                   # Project Documentation
└── vite.config.js              # Vite Build Configuration
```

---

## ⚙️ Local Development Setup

To run this project locally on your machine, follow these steps:

### 1. Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### 2. Clone the Repository
```bash
git clone https://github.com/rashminda-aluvihare/My-portfolio.git
cd My-portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 5. Build for Production
```bash
npm run build
```

---

## 📩 Contact & Connect

- 📧 **Email**: [rashmindaluvihare@gmail.com](mailto:rashmindaluvihare@gmail.com)
- 📱 **WhatsApp / Mobile**: [+94 77 974 3901](https://wa.me/94779743901)
- 💼 **LinkedIn**: [Rashminda Aluvihare](https://linkedin.com)
- 🐙 **GitHub**: [@rashminda-aluvihare](https://github.com/rashminda-aluvihare)

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <b>Rashminda Aluvihare</b>. © 2026 All Rights Reserved.</sub>
</div>
