import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Minus,
  MapPin,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import type { IProduct } from "@/type/Product";

interface SingleProductProps {
  product: IProduct;
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  const markets = product.markets ?? [];
  const minPrice = markets.length
    ? Math.min(...markets.map((m) => Number(m.min) || 0))
    : Number(product.today);
  const maxPrice = markets.length
    ? Math.max(...markets.map((m) => Number(m.max) || 0))
    : Number(product.today);

  const avgPrice = markets.length
    ? Math.round(
        markets.reduce(
          (sum, m) => sum + (Number(m.min) + Number(m.max)) / 2,
          0,
        ) / markets.length,
      )
    : Number(product.today);

  const diff = Math.abs(
    Number(product.today) - Number(product.yesterday || product.today),
  );

  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";

  return (
    <div className="space-y-6">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-2xs transition hover:bg-emerald-50 hover:text-emerald-700 sm:text-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-emerald-950 dark:hover:text-emerald-300"
        >
          <ArrowLeft size={16} />
          <span>মূল তালিকায় ফিরে যান</span>
        </Link>
      </div>

      {/* Main product card */}
      <div className="overflow-hidden rounded-3xl border border-gray-200/90 bg-white p-5 sm:p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 text-3xl shadow-xs ring-1 ring-emerald-200/70 dark:from-emerald-950 dark:to-teal-950 dark:ring-emerald-800">
              {product.categoryIcon || "🛒"}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-black text-gray-900 sm:text-3xl dark:text-white">
                  {product.nameBn}
                </h1>
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">
                  {product.categoryNameBn}
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                {product.nameEn} • প্রতি {product.unit} এর বর্তমান খুচরা বাজার
                দর
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:items-end">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-gray-900 sm:text-4xl dark:text-white">
                ৳ {Number(product.today).toLocaleString("bn-BD")}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                / {product.unit}
              </span>
            </div>

            <div className="mt-1.5 flex items-center gap-1.5">
              {isUp && (
                <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-bold text-rose-700 dark:bg-rose-950/70 dark:text-rose-300">
                  <TrendingUp size={13} />
                  <span>
                    গতকালের তুলনায় আজ ৳ {diff.toLocaleString("bn-BD")} বেড়েছে (+
                    {product.change.pct}%)
                  </span>
                </span>
              )}
              {isDown && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">
                  <TrendingDown size={13} />
                  <span>
                    গতকালের তুলনায় আজ ৳ {diff.toLocaleString("bn-BD")} কমেছে (-
                    {Math.abs(Number(product.change.pct))}%)
                  </span>
                </span>
              )}
              {!isUp && !isDown && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  <Minus size={13} />
                  <span>গতকালের সাথে মূল্য অপরিবর্তিত রয়েছে</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Price Summary 3-Card Grid */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <BarChart3
            size={18}
            className="text-emerald-600 dark:text-emerald-400"
          />
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
            দামের সারসংক্ষেপ
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Min price */}
          <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/60 to-white p-5 shadow-2xs dark:border-emerald-950 dark:from-emerald-950/30 dark:to-gray-900">
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              সর্বনিম্ন বাজার দর
            </span>
            <div className="mt-2 text-2xl font-black text-emerald-700 sm:text-3xl dark:text-emerald-400">
              ৳ {minPrice.toLocaleString("bn-BD")}
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              সবচেয়ে সাশ্রয়ী দামের বাজার
            </p>
          </div>

          {/* Average price */}
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/60 to-white p-5 shadow-2xs dark:border-blue-950 dark:from-blue-950/30 dark:to-gray-900">
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-400">
              গড় বাজার দর
            </span>
            <div className="mt-2 text-2xl font-black text-blue-700 sm:text-3xl dark:text-blue-400">
              ৳ {avgPrice.toLocaleString("bn-BD")}
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              সকল বাজারের মধ্যবর্তী দর
            </p>
          </div>

          {/* Max price */}
          <div className="rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50/60 to-white p-5 shadow-2xs dark:border-rose-950 dark:from-rose-950/30 dark:to-gray-900">
            <span className="text-xs font-semibold text-rose-700 dark:text-rose-400">
              সর্বোচ্চ বাজার দর
            </span>
            <div className="mt-2 text-2xl font-black text-rose-700 sm:text-3xl dark:text-rose-400">
              ৳ {maxPrice.toLocaleString("bn-BD")}
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              সর্বোচ্চ খুচরা বাজার
            </p>
          </div>
        </div>
      </div>

      {/* Market Breakdown Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900">
        <div className="border-b border-gray-100 p-4 sm:p-5 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <MapPin
              size={18}
              className="text-emerald-600 dark:text-emerald-400"
            />
            <h3 className="text-base font-bold text-gray-900 sm:text-lg dark:text-white">
              বাজারভিত্তিক আজকের দরতালিকা
            </h3>
          </div>
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
            বিভিন্ন বিভাগ ও স্থানীয় বাজারের বিস্তারিত তথ্য
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs font-semibold text-gray-600 dark:bg-gray-800/80 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3.5 sm:px-6">বাজারের নাম</th>
                <th className="px-4 py-3.5 sm:px-6">বিভাগ</th>
                <th className="px-4 py-3.5 text-right sm:px-6">সর্বনিম্ন</th>
                <th className="px-4 py-3.5 text-right sm:px-6">সর্বোচ্চ</th>
                <th className="px-4 py-3.5 text-right sm:px-6">গড় দর</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {markets.length > 0 ? (
                markets.map((item, index) => {
                  const itemAvg = Math.round(
                    (Number(item.max) + Number(item.min)) / 2,
                  );
                  return (
                    <tr
                      key={index}
                      className="transition-colors hover:bg-gray-50/70 dark:hover:bg-gray-800/50"
                    >
                      <td className="px-4 py-3.5 font-semibold text-gray-900 sm:px-6 dark:text-white">
                        {item.market || "সাধারণ বাজার"}
                      </td>
                      <td className="px-4 py-3.5 sm:px-6">
                        <span className="inline-flex rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                          {item.division || "বাংলাদেশ"}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-right font-medium text-emerald-600 sm:px-6 dark:text-emerald-400">
                        ৳ {Number(item.min).toLocaleString("bn-BD")}
                      </td>
                      <td className="px-4 py-3.5 text-right font-medium text-rose-600 sm:px-6 dark:text-rose-400">
                        ৳ {Number(item.max).toLocaleString("bn-BD")}
                      </td>
                      <td className="px-4 py-3.5 text-right font-bold text-gray-900 sm:px-6 dark:text-white">
                        ৳ {itemAvg.toLocaleString("bn-BD")}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="p-8 text-center text-sm text-gray-500"
                  >
                    কোনো বাজারভিত্তিক তথ্য পাওয়া যায়নি।
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
