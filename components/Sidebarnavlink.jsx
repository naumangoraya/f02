"use client";
import Link from "next/link";
import Image from "next/image";

export default function SidebarNavLink({ href, icon, label, isCollapsed }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 py-2 px-2 rounded mb-2 hover:bg-gray-600 ${
        isCollapsed ? "justify-center" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <Image
          src={icon}
          alt="nothing"
          className={`${isCollapsed ? "w-10 h-10" : "w-5 h-5"}`}
        />

        {!isCollapsed && <span className="text-sm">{label}</span>}
      </div>
    </Link>
  );
}
