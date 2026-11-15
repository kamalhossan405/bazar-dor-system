"use client";

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { User, LogIn, UserPlus } from "lucide-react";

const UserInfo: React.FC = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 animate-pulse rounded-full bg-emerald-100 dark:bg-emerald-950" />
      </div>
    );
  }

  const user = session?.user;

  return (
    <div className="flex items-center gap-2">
      {user ? (
        <Link
          href="/profile"
          className="group flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/70 p-1 pr-3 text-sm font-medium text-emerald-900 transition hover:bg-emerald-100 hover:shadow-sm dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200"
          title={user.name || "আমার প্রোফাইল"}
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-emerald-500/40">
            {user.image ? (
              <Image
                alt={user.name || "ব্যবহারকারী"}
                src={user.image}
                fill
                sizes="32px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-emerald-600 text-xs font-bold text-white">
                {user.name?.charAt(0).toUpperCase() || <User size={16} />}
              </div>
            )}
          </div>
          <span className="hidden max-w-[100px] truncate text-xs font-semibold sm:inline-block md:max-w-[120px]">
            {user.name || "প্রোফাইল"}
          </span>
        </Link>
      ) : (
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/sign-in"
            className="flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700 sm:px-3 sm:py-2 sm:text-sm dark:text-gray-200 dark:hover:bg-emerald-950 dark:hover:text-emerald-400"
          >
            <LogIn size={15} className="shrink-0 " />
            <span className="text-black hover:text-emerald-500">সাইন ইন</span>
          </Link>
          <Link
            href="/sign-up"
            className="flex items-center gap-1 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-emerald-600/20 transition hover:from-emerald-700 hover:to-teal-700 hover:shadow-md sm:px-3.5 sm:py-2 sm:text-sm"
          >
            <UserPlus size={15} className="shrink-0" />
            <span>সাইন আপ</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
