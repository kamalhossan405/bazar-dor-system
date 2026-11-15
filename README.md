# 🛒 Bazar Dor (বাজার দর) — Daily Commodity Price Tracking System

[![Live Demo](https://img.shields.io/badge/Live_Demo-bazar--dor--dam.vercel.app-emerald?style=for-the-badge&logo=vercel)](https://bazar-dor-dam.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

> **Bazar Dor** is a modern, high-performance web application designed to track and monitor daily essential commodity prices across major wholesale and retail markets in Bangladesh. Users can quickly analyze daily price fluctuations, track rising and dropped prices, explore market breakdowns by division, and search for daily grocery items.

---

## 🌐 Live Preview

Experience the live application here:

👉 **[https://bazar-dor-dam.vercel.app/](https://bazar-dor-dam.vercel.app/)**

---

## 🛠️ Technology Stack

This project is built using a modern, production-grade technology stack:

### 1. **Core Framework & Runtime**
- **[Next.js 16 (App Router)](https://nextjs.org/):** Utilizes the latest Next.js 16 features including Server Components (RSC), Turbopack bundler, route handlers, dynamic proxy routing, and optimized font & image rendering.
- **[React 19](https://react.dev/):** The latest version of React featuring React Server Components, Concurrent Mode, and improved rendering performance.
- **[TypeScript](https://www.typescriptlang.org/):** Strict static typing across all components, API routes, and data models to eliminate runtime errors.

### 2. **Styling & UI Design**
- **[Tailwind CSS v4](https://tailwindcss.com/):** The next-generation utility-first CSS framework providing ultra-fast compilation, modern theme variables, and responsive design utilities.
- **[DaisyUI v5](https://daisyui.com/):** Clean, semantic UI components for buttons, modals, dropdowns, and form inputs.
- **[Lucide React](https://lucide.dev/):** A comprehensive, lightweight vector icon library providing sharp, scalable icons across all viewports.
- **Typography & Localization:** [Google Fonts](https://fonts.google.com/) (`Noto Serif Bengali` & `Plus Jakarta Sans`) with native Bengali numeral localization (`bn-BD`).

### 3. **Authentication & User Management**
- **[Better-Auth](https://better-auth.com/):** Modern, framework-native authentication library supporting secure sessions, credential authentication, and social OAuth.
- **Social OAuth Providers:** Google & GitHub authentication.
- **Database Adapter:** `@better-auth/mongo-adapter` for scalable user profile persistence.

### 4. **Database & Persistence**
- **[MongoDB](https://www.mongodb.com/):** Official Node.js driver (`mongodb ^7.7.0`) for storing user credentials, linked accounts, and session data.

### 5. **Libraries & Utilities**
- **[React Toastify](https://fkhadra.github.io/react-toastify/):** Interactive notifications for auth events and user feedback.
- **[React Marquee Text](https://www.npmjs.com/package/react-marquee-text):** Smooth, responsive ticker bar for live commodity price updates.

### 6. **Deployment & DevOps**
- **[Netlify](https://www.netlify.com/):** Configured with `netlify.toml` and `@netlify/plugin-nextjs` for seamless continuous deployment.
- **[Vercel](https://vercel.com/):** Fully compatible with edge runtime and serverless functions.

---

## ✨ Key Features

- **📊 Live Price Monitoring:** Real-time prices for rice, lentils, edible oils, vegetables, fish, meat, eggs, and spices.
- **📈 Price Trend Analysis:**
  - **Today's Price Rising (আজ দাম বেড়েছে):** Highlights items with price hikes (🔺).
  - **Today's Price Dropped (আজ দাম কমেছে):** Showcases discounted or cheaper items (⏷).
- **🏪 Detailed Market Breakdown:** For every item, view lowest price, highest price, average price, and market rates across Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.
- **🔍 Search & Filter:** Filter by category, sort by price (low to high / high to low), or search by item name in both Bengali and English.
- **📱 100% Fully Responsive:** Tailored experiences for smartphones, tablets, laptops, and desktop displays.
- **🛡️ Resilient Data Fetching:** Seamless offline fallback data ensure zero build crashes or broken pages during deployment.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.18+ or 20+
- npm or pnpm
- MongoDB instance (local or MongoDB Atlas connection string)

### 1. Clone the repository
```bash
git clone https://github.com/kamalhossan405/bazar-dor.git
cd bazar-dor
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory:
```env
# MongoDB Connection String (MongoDB Atlas or Local MongoDB)
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/bazar-dor?retryWrites=true&w=majority
BETTER_AUTH_DB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/bazar-dor?retryWrites=true&w=majority

# App & Auth Secrets
BETTER_AUTH_SECRET=your-secret-key-at-least-32-characters-long
BETTER_AUTH_URL=http://localhost:3000

# Social Authentication (Optional)
BETTER_AUTH_GOOGLE_CLIENT_ID=your-google-client-id
BETTER_AUTH_GOOGLE_CLIENT_SECRET=your-google-client-secret
BETTER_AUTH_GITHUB_CLIENT_ID=your-github-client-id
BETTER_AUTH_GITHUB_CLIENT_SECRET=your-github-client-secret
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the app.

---

## 📦 Production Build

```bash
npm run build
npm start
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
