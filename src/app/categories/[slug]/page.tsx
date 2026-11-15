import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers } from "lucide-react";
import ProductSotr from "@/components/ProductSotr";
import { fetchProducts, fetchCategories } from "@/lib/bazar-data";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const [allProducts, categories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ]);

  const currentCategory = categories.find(
    (c) =>
      c.slug.toLowerCase() === decodedSlug.toLowerCase() ||
      c.nameBn === decodedSlug ||
      (c.nameEn && c.nameEn.toLowerCase() === decodedSlug.toLowerCase())
  );

  const filteredProducts = allProducts.filter((p) => {
    return (
      p.categorySlug?.toLowerCase() === decodedSlug.toLowerCase() ||
      p.categoryNameBn === decodedSlug ||
      p.categoryNameEn?.toLowerCase() === decodedSlug.toLowerCase()
    );
  });

  const categoryTitle =
    currentCategory?.nameBn || decodedSlug;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-2xs transition hover:bg-emerald-50 hover:text-emerald-700 sm:text-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200"
        >
          <ArrowLeft size={16} />
          <span>সকল ক্যাটাগরিতে ফিরে যান</span>
        </Link>
      </div>

      {/* Category banner */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50/70 via-white to-teal-50/50 p-6 shadow-xs dark:border-emerald-950 dark:from-emerald-950/40 dark:via-gray-900 dark:to-teal-950/20">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-2xl text-white shadow-md shadow-emerald-500/20">
            {currentCategory?.icon || <Layers size={26} />}
          </div>
          <div>
            <h1 className="text-2xl font-black text-gray-900 sm:text-3xl dark:text-white">
              {categoryTitle}
            </h1>
            <p className="mt-1 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
              {filteredProducts.length.toLocaleString("bn-BD")} টি পণ্যের আজকের বাজার দর ও মূল্য পরিবর্তন
            </p>
          </div>
        </div>
      </div>

      {/* Sorted & searchable grid */}
      <ProductSotr products={filteredProducts} />
    </div>
  );
};

export default CategoryPage;
