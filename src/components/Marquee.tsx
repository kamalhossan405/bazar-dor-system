import React from "react";
import { fetchProducts } from "@/lib/bazar-data";
import MarqueeCard from "./MarqueeCard";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { Radio } from "lucide-react";

const MarqueePage = async () => {
  const products = await fetchProducts();

  if (!products.length) return null;

  return (
    <div className="border-b border-emerald-100 bg-white/95 backdrop-blur-xs py-1.5 shadow-2xs dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl items-center px-4">
        {/* Live badge label */}
        <div className="flex shrink-0 items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          <Radio size={14} className="animate-pulse text-emerald-600" />
          <span className="hidden sm:inline">লাইভ বাজার দর</span>
          <span className="sm:hidden">লাইভ</span>
        </div>

        {/* Scrolling text */}
        <div className="flex-1 overflow-hidden ml-3">
          <MarqueeText direction="right" duration={25}>
            {products.map((product) => (
              <MarqueeCard key={product.id} product={product} />
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default MarqueePage;
