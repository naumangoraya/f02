import React, { useEffect, useState } from "react";
import Home from "../../images/Home/home-icon.svg";
import Chatbot from "../../images/Chatbot/chatbot.svg";
import Upload_file from "../../images/upload-file/upload-file.svg";
import Chart from "../../images/chart/chart.svg";
import SidebarNavLink from "../SidebarNavLink";
import leftarrow from "../../images/sidebar/collapse.svg";
import rightarrow from "../../images/sidebar/expand.svg";
import Image from "next/image";
export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <nav
      className={`${
        isCollapsed
          ? "h-[calc(100vh-66px)] bg-gray-800 text-white mb-5 w-20 border rounded border-none"
          : "h-[calc(100vh-66px)] bg-gray-800 text-white mb-5 pb-5 w-48 border rounded border-none"
      }`}
    >
      {/* Toggle Button */}
      <div className="sticky top-0 px-4 py-2 mt-1 bg-gray-800 flex justify-between items-center">
        {!isCollapsed && <span className="font-bold text-lg">Menu</span>}
        <button
          onClick={toggleSidebar}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          {isCollapsed ? (
            <Image
              src={rightarrow}
              alt="nothing"
              className="w-12 h-10 border border-gray-700 shadow-lg rounded-lg transform transition-all duration-300 hover:shadow-2xl hover:translate-y-1"
            />
          ) : (
            <Image
              src={leftarrow}
              alt="nothing"
              className="w-12 h-10 border border-gray-700 shadow-lg rounded-lg transform transition-all duration-300 hover:shadow-2xl hover:translate-y-1"
            />
          )}
        </button>
      </div>

      {/* Search Form */}
      {!isCollapsed && (
        <div className="px-3 py-4">
          <form>
            <input
              type="text"
              placeholder="Search"
              className="flex items-center px-2 py-2 w-40 h-10 text-gray-300 bg-gray-700 border border-gray-600 rounded outline-none"
            />
          </form>
        </div>
      )}

      {/* Scrollable Navigation Area */}
      <div
        className={`h-[calc(100%-88px)] overflow-y-auto px-4 ${
          isCollapsed
            ? "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-500"
            : "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-500"
        }`}
      >
        {/* Static Links */}
        <SidebarNavLink
          href="/"
          icon={Home}
          label="HOME"
          isCollapsed={isCollapsed}
        />
        <SidebarNavLink
          href="/chatbot"
          icon={Chatbot}
          label="CHATBOT"
          isCollapsed={isCollapsed}
        />
        <SidebarNavLink
          href="/chart"
          icon={Chart}
          label="CHART"
          isCollapsed={isCollapsed}
        />
        <SidebarNavLink
          href="/email"
          icon={Chart}
          label="EMAIL"
          isCollapsed={isCollapsed}
        />
        <SidebarNavLink
          href="/upload"
          icon={Upload_file}
          label="UPLOAD FILE"
          isCollapsed={isCollapsed}
        />
        <SidebarNavLink
          href="/notification"
          icon={Upload_file}
          label="NOTIFICATIONS"
          isCollapsed={isCollapsed}
        />

        <hr className="my-4 border-gray-700" />

        {Array.from({ length: 10 }, (_, index) => (
          <SidebarNavLink
            key={`page-${index}`}
            href={`/page${index}`}
            icon={Upload_file}
            label={`PAGE${index}`}
            isCollapsed={isCollapsed}
          />
        ))}

        <hr className="my-4 border-gray-700" />

        {/* Additional Static Pages */}
        <SidebarNavLink
          href="/profile"
          icon={Chatbot}
          label="PROFILE PAGE"
          isCollapsed={isCollapsed}
        />
        <SidebarNavLink
          href="/login"
          icon={Upload_file}
          label="LOGIN"
          isCollapsed={isCollapsed}
        />
        <SidebarNavLink
          href="/signup"
          icon={Upload_file}
          label="SIGN UP"
          isCollapsed={isCollapsed}
        />

        <hr className="my-4 border-gray-700" />
      </div>
    </nav>
  );
}
