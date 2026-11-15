import React from "react";
import { ShoppingBag } from "lucide-react";
import { fetchProducts } from "@/lib/bazar-data";
import ProductAlll from "./ProductAlll";

const AllProduct = async () => {
  const products = await fetchProducts();

  return (
    <section id="all-products" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            <ShoppingBag size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
              সব নিত্যপ্রয়োজনীয় পণ্য
            </h2>
            <p className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
              দৈনিক বাজার মূল্যের হালনাগাদ তালিকা
            </p>
          </div>
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
          মোট {products.length.toLocaleString("bn-BD")} টি পণ্য
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductAlll key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProduct;
