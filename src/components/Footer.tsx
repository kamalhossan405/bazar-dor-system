import React from "react";
import Link from "next/link";
import { ExternalLink, Globe } from "lucide-react";

const FooterPage = () => {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            <span className="font-bold text-emerald-600">বাজার দর</span> —
            প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            সকল দাম সম্ভাব্য; স্থানীয় বাজার পরিস্থিতির ওপর নির্ভর করে পরিবর্তিত হতে পারে।
          </p>
        </div>

        {/* Live Link Badge */}
        <div className="flex items-center gap-3">
          <a
            href="https://bazar-dor-dam.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 shadow-2xs transition hover:bg-emerald-100 hover:text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 dark:hover:bg-emerald-900"
          >
            <Globe size={14} />
            <span>Live Preview</span>
            <ExternalLink size={12} className="opacity-70" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
