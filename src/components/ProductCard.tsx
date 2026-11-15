import React from "react";
import Link from "next/link";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { IProduct } from "@/type/Product";

interface ProductCardProps {
  product: IProduct;
  variant?: "default" | "rising" | "dropped";
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variant = "default",
}) => {
  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";

  // Color schemes based on change
  const badgeClasses = isUp
    ? "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-900"
    : isDown
    ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-900"
    : "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700";

  const accentBorder = isUp
    ? "hover:border-rose-300 dark:hover:border-rose-700"
    : isDown
    ? "hover:border-emerald-300 dark:hover:border-emerald-700"
    : "hover:border-emerald-300 dark:hover:border-emerald-700";

  return (
    <Link
      href={`/products/${product.id}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200/90 bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 ${accentBorder}`}
    >
      {/* Top row: Category icon, Product Name, Category badge */}
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 text-2xl shadow-xs ring-1 ring-emerald-200/60 dark:from-emerald-950/80 dark:to-teal-950/80 dark:ring-emerald-800/40">
              {product.categoryIcon || "🛒"}
            </span>
            <div>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-700 sm:text-lg dark:text-white dark:group-hover:text-emerald-400">
                {product.nameBn}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {product.nameEn} • {product.categoryNameBn}
              </p>
            </div>
          </div>

          <span
            className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold ${badgeClasses}`}
          >
            {isUp && (
              <>
                <TrendingUp size={13} className="text-rose-600" />
                <span>+{product.change?.pct}%</span>
              </>
            )}
            {isDown && (
              <>
                <TrendingDown size={13} className="text-emerald-600" />
                <span>-{Math.abs(Number(product.change?.pct))}%</span>
              </>
            )}
            {!isUp && !isDown && (
              <>
                <Minus size={13} className="text-gray-500" />
                <span>{product.change?.pct || 0}%</span>
              </>
            )}
          </span>
        </div>

        {/* Price display */}
        <div className="mt-4 flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl dark:text-white">
              ৳ {Number(product.today).toLocaleString("bn-BD")}
            </span>
            <span className="ml-1.5 text-xs text-gray-500 dark:text-gray-400">
              /{product.unit}
            </span>
          </div>

          {product.yesterday ? (
            <div className="text-right text-xs text-gray-400 dark:text-gray-500">
              গতকাল: ৳ {Number(product.yesterday).toLocaleString("bn-BD")}
            </div>
          ) : null}
        </div>
      </div>

      {/* Bottom hint bar */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
        <span>বাজারের বিস্তারিত দেখুন</span>
        <span className="font-semibold text-emerald-600 group-hover:translate-x-0.5 transition-transform dark:text-emerald-400">
          বিস্তারিত →
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
