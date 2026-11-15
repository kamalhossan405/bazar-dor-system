"use client";

import React, { useState, useMemo } from "react";
import type { IProduct } from "@/type/Product";
import CategoriesCard from "./CategoriesCard";
import { Search, ArrowUpDown, Filter } from "lucide-react";

interface ProductSortProps {
  products: IProduct[];
}

const ProductSotr: React.FC<ProductSortProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<
    "default" | "high" | "low" | "rising" | "dropping"
  >("default");

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Search filter
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (p) =>
          p.nameBn.toLowerCase().includes(q) ||
          (p.nameEn ? p.nameEn.toLowerCase().includes(q) : false) ||
          p.categoryNameBn.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === "high") {
      list.sort((a, b) => b.today - a.today);
    } else if (sortBy === "low") {
      list.sort((a, b) => a.today - b.today);
    } else if (sortBy === "rising") {
      list.sort((a, b) => (b.change?.pct || 0) - (a.change?.pct || 0));
    } else if (sortBy === "dropping") {
      list.sort((a, b) => (a.change?.pct || 0) - (b.change?.pct || 0));
    }

    return list;
  }, [products, searchTerm, sortBy]);

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="flex flex-col gap-3 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-xs sm:flex-row sm:items-center sm:justify-between dark:border-gray-800 dark:bg-gray-900">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="পণ্য বা আইটেম খুঁজুন..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50/60 py-2.5 pl-10 pr-4 text-sm text-gray-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <ArrowUpDown size={16} className="text-gray-400 shrink-0" />
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as
                  | "default"
                  | "high"
                  | "low"
                  | "rising"
                  | "dropping"
              )
            }
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            <option value="default">ডিফল্ট ক্রম</option>
            <option value="low">দাম: কম থেকে বেশি</option>
            <option value="high">দাম: বেশি থেকে কম</option>
            <option value="dropping">সর্বাধিক দাম কমেছে</option>
            <option value="rising">সর্বাধিক দাম বেড়েছে</option>
          </select>
        </div>
      </div>

      {/* Result Count */}
      <div className="flex items-center justify-between text-xs text-gray-500 sm:text-sm dark:text-gray-400">
        <p>
          মোট{" "}
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            {filteredProducts.length.toLocaleString("bn-BD")}
          </span>{" "}
          টি পণ্য পাওয়া গেছে
        </p>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <CategoriesCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center dark:border-gray-800 dark:bg-gray-900">
          <p className="text-gray-500 dark:text-gray-400">
            আপনার অনুসন্ধানের সাথে মিল রেখে কোনো পণ্য পাওয়া যায়নি।
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductSotr;
