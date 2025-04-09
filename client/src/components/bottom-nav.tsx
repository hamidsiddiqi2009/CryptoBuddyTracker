import React from "react";
import { Link, useLocation } from "wouter";
import { Home, ChartBar, UserPlus, User } from "lucide-react";

const BottomNav: React.FC = () => {
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1E1E1E] border-t border-[#333333] flex justify-around py-2 z-10">
      <Link href="/">
        <a className={`flex flex-col items-center py-1 ${isActive("/") ? "text-[#F2C94C]" : "text-gray-400"}`}>
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </a>
      </Link>
      <Link href="/quantitative">
        <a className={`flex flex-col items-center py-1 ${isActive("/quantitative") ? "text-[#F2C94C]" : "text-gray-400"}`}>
          <ChartBar className="h-5 w-5" />
          <span className="text-xs mt-1">Quantify</span>
        </a>
      </Link>
      <Link href="/invite">
        <a className={`flex flex-col items-center py-1 ${isActive("/invite") ? "text-[#F2C94C]" : "text-gray-400"}`}>
          <UserPlus className="h-5 w-5" />
          <span className="text-xs mt-1">Invite Friends</span>
        </a>
      </Link>
      <Link href="/profile">
        <a className={`flex flex-col items-center py-1 ${isActive("/profile") ? "text-[#F2C94C]" : "text-gray-400"}`}>
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Me</span>
        </a>
      </Link>
    </nav>
  );
};

export default BottomNav;
