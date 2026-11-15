import React from "react";
import Link from "next/link";
import type { IProduct } from "@/type/Product";

interface MarqueeCardProps {
  product: IProduct;
}

const MarqueeCard: React.FC<MarqueeCardProps> = ({ product }) => {
  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";

  return (
    <Link
      href={`/products/${product.id}`}
      className="inline-flex items-center gap-2 whitespace-nowrap px-3 text-xs sm:text-sm font-medium transition hover:text-emerald-600"
    >
      <span className="text-base">{product.categoryIcon || "🛒"}</span>
      <span className="font-semibold text-gray-800 dark:text-gray-200">
        {product.nameBn}:
      </span>
      <span className="font-bold text-gray-900 dark:text-white">
        ৳{Number(product.today).toLocaleString("bn-BD")}
      </span>
      <span className="text-gray-400">/{product.unit}</span>

      {isUp && (
        <span className="inline-flex items-center text-xs font-semibold text-rose-600">
          ▲ +{product.change?.pct}%
        </span>
      )}
      {isDown && (
        <span className="inline-flex items-center text-xs font-semibold text-emerald-600">
          ▼ -{Math.abs(Number(product.change?.pct))}%
        </span>
      )}
      {!isUp && !isDown && (
        <span className="text-xs text-gray-400">
          {product.change?.pct || 0}%
        </span>
      )}

      <span className="text-gray-300 dark:text-gray-700 ml-2">|</span>
    </Link>
  );
};

export default MarqueeCard;
