"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { User, Mail, LogOut, Check, ShieldCheck } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [updating, setUpdating] = useState(false);

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
      </div>
    );
  }

  const user = session?.user;

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("সফলভাবে সাইন আউট হয়েছেন");
      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;

      if (!name.trim()) {
        toast.warning("অনুগ্রহ করে আপনার নাম লিখুন");
        return;
      }

      const { data } = await updateUser({
        name,
      });

      if (data) {
        toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে");
        router.refresh();
      }
    } catch (error) {
      toast.error("আপডেট করতে সমস্যা হয়েছে");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-black text-gray-900 sm:text-3xl dark:text-white">
          আমার প্রোফাইল
        </h1>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm dark:text-gray-400">
          আপনার অ্যাকাউন্ট ও ব্যক্তিগত তথ্য পরিচালনা করুন
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Left card: User badge & sign out */}
        <div className="rounded-3xl border border-gray-200/90 bg-white p-6 shadow-xs md:col-span-1 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col items-center text-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-emerald-500/20 shadow-md">
              {user?.image ? (
                <Image
                  alt={user.name || "ব্যবহারকারী"}
                  src={user.image}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-700 text-2xl font-bold text-white">
                  {user?.name?.charAt(0).toUpperCase() || <User size={36} />}
                </div>
              )}
            </div>

            <h2 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              {user?.name || "ব্যবহারকারী"}
            </h2>
            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              {user?.email || "ইমেইল নেই"}
            </p>

            <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              <ShieldCheck size={14} />
              <span>যাচাইকৃত অ্যাকাউন্ট</span>
            </div>

            <button
              onClick={handleSignOut}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50/60 py-2.5 text-xs font-bold text-rose-700 transition hover:bg-rose-100 dark:border-rose-900 dark:bg-rose-950/60 dark:text-rose-300 dark:hover:bg-rose-900"
            >
              <LogOut size={16} />
              <span>সাইন আউট করুন</span>
            </button>
          </div>
        </div>

        {/* Right card: Edit Information */}
        <div className="rounded-3xl border border-gray-200/90 bg-white p-6 shadow-xs md:col-span-2 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            অ্যাকাউন্ট তথ্য হালনাগাদ
          </h3>
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
            এখানে আপনার অ্যাকাউন্টের নাম পরিবর্তন করতে পারেন
          </p>

          <form onSubmit={handleUpdateProfile} className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-700 dark:text-gray-300">
                পূর্ণ নাম
              </label>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={user?.name || ""}
                  required
                  placeholder="আপনার নাম"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 pl-10 pr-4 text-sm text-gray-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-700 dark:text-gray-300">
                ইমেইল ঠিকানা (পরিবর্তনযোগ্য নয়)
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  disabled
                  value={user?.email || ""}
                  className="w-full rounded-xl border border-gray-200 bg-gray-100 py-2.5 pl-10 pr-4 text-sm text-gray-500 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={updating}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 sm:text-sm"
            >
              <Check size={16} />
              <span>{updating ? "আপডেট হচ্ছে..." : "তথ্য সংরক্ষণ করুন"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
