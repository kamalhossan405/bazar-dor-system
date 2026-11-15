"use client";

import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

const HeaderDate = () => {
  const [dateStr, setDateStr] = useState<string>("");

  useEffect(() => {
    try {
      const today = new Date();
      const formatted = today.toLocaleDateString("bn-BD", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setDateStr(formatted);
    } catch {
      setDateStr("আজকের বাজার দর");
    }
  }, []);

  return (
    <div className="flex items-center gap-1.5 text-xs text-emerald-800/80 font-medium bg-emerald-50/80 px-2.5 py-1 rounded-full border border-emerald-100">
      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
      <span>{dateStr || "তারিখ লোড হচ্ছে..."}</span>
    </div>
  );
};

export default HeaderDate;
