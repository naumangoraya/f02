"use client";
import Image from "next/image";
import Link from "next/link"; // Use Next.js Link for navigation
import LogoIcon from "../images/logo/logo-icon.svg"; // Import Logo Icon
import DarkModeSwitcher from "./DarkModeSwitcher";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex w-full bg-gray-800 text-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none border-b border-gray-200 dark:border-gray-700 h-[64px]">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src={LogoIcon}
              alt="Logo"
              className="h-8 w-auto"
              width={32}
              height={32}
            />
            <span>doubleN</span>
          </Link>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />

            <li>
              <Link href="/profile" className="flex items-center gap-2">
                <span className="hidden text-sm md:block">Profile</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
