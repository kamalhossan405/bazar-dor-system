import React from "react";
import BrandLogo from "./BrandLogo";
import UserInfo from "./UserInfo";
import Navbar from "./Navbar";
import HeaderDate from "./HeaderData";

const HeaderPage = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Crisp, Beautiful Vector Brand Logo */}
          <BrandLogo />

          {/* Center Date Badge - Tablet & Desktop */}
          <div className="hidden md:flex items-center">
            <HeaderDate />
          </div>

          {/* Right User Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <UserInfo />
          </div>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <Navbar />
    </header>
  );
};

export default HeaderPage;
