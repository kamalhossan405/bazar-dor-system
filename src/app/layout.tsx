import type { Metadata } from "next";
import "./globals.css";
import HeaderPage from "@/components/Header";
import { ToastContainer } from "react-toastify";
import MarqueePage from "@/components/Marquee";
import FooterPage from "@/components/Footer";

export const metadata: Metadata = {
  title: "বাজার দর (Bazar Dor) — নিত্যপ্রয়োজনীয় পণ্যের বাজার দর",
  description:
    "বাংলাদেশের প্রতিদিনের চাল, ডাল, তেল, মাছ, মাংস ও শাকসবজির বাজার দর ও মূল্য পরিবর্তনের নির্ভরযোগ্য তথ্য।",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-[#F6FAF6] text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
        <HeaderPage />
        <MarqueePage />
        <main className="flex-1 pb-16">{children}</main>
        <FooterPage />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  );
}
