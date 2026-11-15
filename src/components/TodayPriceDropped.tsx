import React from "react";
import { TrendingDown, Sparkles } from "lucide-react";
import { fetchProducts } from "@/lib/bazar-data";
import DroppedPrice from "./DroppedPrice";

const TodayPriceDropped = async () => {
  const products = await fetchProducts();
  const droppedProducts = products
    .filter((product) => product.change?.dir === "down")
    .slice(0, 6);

  if (!droppedProducts.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50/80 via-white to-emerald-50/40 p-4 sm:p-5 shadow-xs dark:border-emerald-950/60 dark:from-emerald-950/40 dark:via-gray-900 dark:to-emerald-950/20">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20">
            <Sparkles size={24} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                আজ দাম কমেছে
              </h2>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="mt-0.5 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
              বাজারে যেসব পণ্যের দাম গতকালের তুলনায় সাশ্রয়ী হয়েছে
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-100/70 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
          <TrendingDown size={14} />
          <span>{droppedProducts.length.toLocaleString("bn-BD")} টি পণ্য</span>
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {droppedProducts.map((product) => (
          <DroppedPrice key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TodayPriceDropped;
