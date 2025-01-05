"use client";
import "./globals.css";
import Header from "../components/Header";
import Sidebar from "../components/sidebar/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#1a222c]">
          {/* Header - Fixed at top */}
          <div className="fixed top-0 left-0 right-0 z-50">
            <Header />
          </div>

          {/* Main Content Area - Below Header */}
          <div className="flex pt-16">
            {" "}
            {/* pt-16 ensures content starts below header */}
            {/* Sidebar - Fixed position */}
            <div className="fixed left-0 w-64 top-16">
              {" "}
              {/* top-16 aligns it below header */}
              <Sidebar />
            </div>
            {/* Main Content - Adjusted margin and padding */}
            <div className="ml-64 w-full min-h-[calc(100vh-64px)] p-4">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
