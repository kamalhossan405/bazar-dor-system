import React from "react";
import { TrendingUp, Flame } from "lucide-react";
import { fetchProducts } from "@/lib/bazar-data";
import RisingProduct from "./RisingProduct";

const TodayPriceRising = async () => {
  const products = await fetchProducts();
  const risingProducts = products
    .filter((product) => product.change?.dir === "up")
    .slice(0, 6);

  if (!risingProducts.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-rose-100 bg-gradient-to-r from-rose-50/80 via-white to-rose-50/40 p-4 sm:p-5 shadow-xs dark:border-rose-950/60 dark:from-rose-950/40 dark:via-gray-900 dark:to-rose-950/20">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-md shadow-rose-500/20">
            <Flame size={24} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                আজ দাম বেড়েছে
              </h2>
              <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            </div>
            <p className="mt-0.5 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
              বাজারে যেসব পণ্যের দাম গতকালের তুলনায় বৃদ্ধি পেয়েছে
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-100/70 px-3 py-1.5 text-xs font-bold text-rose-700 dark:border-rose-800 dark:bg-rose-900/60 dark:text-rose-300">
          <TrendingUp size={14} />
          <span>{risingProducts.length.toLocaleString("bn-BD")} টি পণ্য</span>
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {risingProducts.map((product) => (
          <RisingProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TodayPriceRising;
