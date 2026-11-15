import React from "react";
import Link from "next/link";
import { fetchCategories } from "@/lib/bazar-data";
import { LayoutGrid } from "lucide-react";
import { ICategory } from "@/type/Category";

const Navbar = async () => {
  const categoryData: ICategory[] = await fetchCategories();

  return (
    <nav className="w-full bg-white/70 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-none scroll-smooth">
          <Link
            href="/"
            className="shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-600 text-white shadow-xs hover:bg-emerald-700 transition"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>সব পণ্য</span>
          </Link>

          {categoryData.map((item) => (
            <Link
              key={item.id || item.slug}
              href={`/categories/${item.slug}`}
              className="shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-700 bg-slate-100/80 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 border border-slate-200/60 transition group"
            >
              <span className="text-sm transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <span>{item.nameBn}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
