import React from "react";
import HeaderDate from "./HeaderData";
import Link from "next/link";
import Banner from "@/assets/bazar-hero.png";
import Image from "next/image";
import { ArrowRight, Sparkles, Store, TrendingDown } from "lucide-react";

const HeroSectionPage = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/40 p-6 shadow-sm sm:p-10 lg:p-12 dark:border-emerald-950 dark:from-emerald-950/40 dark:via-gray-900 dark:to-teal-950/20">
        <div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row lg:gap-12">
          {/* Content */}
          <div className="w-full lg:w-7/12">
            <div className="mb-4">
              <HeaderDate />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800 shadow-2xs dark:border-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>লাইভ বাজার দর আপডেট</span>
            </div>

            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              নিত্যপণ্যের সঠিক বাজার দর{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                এক ক্লিকে
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
              চাল, ডাল, তেল, সবজি, মাছ ও মাংসের আজকের খুচরা ও পাইকারি বাজার দর। 
              প্রতিদিনের মূল্য বৃদ্ধি ও হ্রাস জেনে সাশ্রয়ী কেনাকাটা করুন।
            </p>

            {/* Feature Pills */}
            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 text-xs font-medium text-gray-700 dark:text-gray-300">
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white/80 px-3 py-1.5 shadow-2xs backdrop-blur-sm dark:border-gray-800 dark:bg-gray-800/80">
                <Store size={14} className="text-emerald-600" />
                <span>১২+ পাইকারি ও খুচরা বাজার</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white/80 px-3 py-1.5 shadow-2xs backdrop-blur-sm dark:border-gray-800 dark:bg-gray-800/80">
                <TrendingDown size={14} className="text-emerald-600" />
                <span>দৈনিক দামের হ্রাস-বৃদ্ধি</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white/80 px-3 py-1.5 shadow-2xs backdrop-blur-sm dark:border-gray-800 dark:bg-gray-800/80">
                <Sparkles size={14} className="text-emerald-600" />
                <span>১০০% উন্মুক্ত তথ্য</span>
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#all-products"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg"
              >
                <span>আজকের পণ্যের তালিকা দেখুন</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Banner Image */}
          <div className="flex w-full items-center justify-center lg:w-5/12">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-emerald-400/20 to-teal-400/20 blur-2xl dark:from-emerald-600/20 dark:to-teal-600/20" />
              <Image
                src={Banner}
                alt="আজকের বাজারের দর — বাজার দর"
                priority
                className="relative h-auto w-full max-w-[280px] object-contain transition duration-500 hover:scale-105 sm:max-w-[340px] lg:max-w-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPage;
