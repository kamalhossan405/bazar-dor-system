import Link from "next/link";
import React from "react";
import { ShoppingBag, TrendingUp } from "lucide-react";

interface BrandLogoProps {
  size?: "compact" | "default";
}

export default function BrandLogo({ size = "default" }: BrandLogoProps) {
  const isCompact = size === "compact";

  return (
    <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 select-none">
      {/* Crisp Modern Vector Icon Badge */}
      <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-md shadow-emerald-600/30 ring-1 ring-emerald-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-emerald-600/40">
        <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] transition-transform duration-300 group-hover:rotate-[-6deg]" />
        
        {/* Subtle decorative live beacon dot */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 ring-2 ring-white"></span>
        </span>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-emerald-700 transition duration-200">
            বাজার দর
          </span>
          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100/90 text-emerald-800 border border-emerald-200/60">
            <TrendingUp className="w-2.5 h-2.5" /> লাইভ
          </span>
        </div>
        {!isCompact && (
          <span className="text-[11px] text-slate-500 hidden sm:block font-medium">
            দৈনিক নিত্যপণ্যের বাজার মনিটরিং
          </span>
        )}
      </div>
    </Link>
  );
}
