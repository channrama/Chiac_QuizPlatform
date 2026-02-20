"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  PlusCircle,
  ClipboardList,
  BarChart3,
  Menu,
} from "lucide-react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Quizzes", href: "/quizzes", icon: BookOpen },
    { name: "Create", href: "/create-quiz", icon: PlusCircle },
    { name: "Attempts", href: "/attempts", icon: ClipboardList },
    { name: "Stats", href: "/stats", icon: BarChart3 },
  ];

  return (
    <html lang="en">
      <body className="bg-[#0b1220] text-slate-200">
        <div className="flex min-h-screen">

          {/* Sidebar */}
          <aside
            className={`hidden md:flex transition-all duration-300 ${
              collapsed ? "w-20" : "w-72"
            } bg-[#0f172a] border-r border-white/10`}
          >
            <div className="flex flex-col w-full">

              {/* Sidebar Top */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                {!collapsed && (
                  <h1 className="text-lg font-semibold tracking-tight">
                    Quiz Platform
                  </h1>
                )}

                <button
                  onClick={() => setCollapsed(!collapsed)}
                  className="text-slate-400 hover:text-white"
                >
                  <Menu size={20} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center ${
                        collapsed ? "justify-center" : "gap-3"
                      } px-4 py-3 rounded-xl transition
                      ${
                        isActive
                          ? "bg-indigo-600 text-white"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon size={18} />
                      {!collapsed && (
                        <span className="text-sm">
                          {item.name}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>

            </div>
          </aside>

          {/* Main Area */}
          <div className="flex-1 flex flex-col">

            {/* Topbar */}
            <header className="h-16 bg-[#0f172a] border-b border-white/10 flex items-center justify-between px-8 relative">
              <h2 className="text-sm text-slate-400 capitalize">
                {pathname === "/"
                  ? "Dashboard"
                  : pathname.replace("/", "")}
              </h2>

              {/* Profile */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition"
                >
                  <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-semibold">
                    {user
                      ? user.name?.charAt(0).toUpperCase()
                      : "?"}
                  </div>

                  {user && (
                    <span className="text-sm text-slate-300">
                      {user.name}
                    </span>
                  )}
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl bg-[#111827] border border-white/10 shadow-lg py-2 z-50"
                  >
                    {user ? (
                      <>
                        <div className="px-4 py-2 text-xs text-slate-400 border-b border-white/10">
                          Signed in as
                          <div className="text-sm text-white mt-1 truncate">
                            {user.email}
                          </div>
                        </div>

                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/5 transition"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/login"
                          className="block px-4 py-2 text-sm hover:bg-white/5 transition"
                        >
                          Login
                        </Link>

                        <Link
                          href="/register"
                          className="block px-4 py-2 text-sm hover:bg-white/5 transition"
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </motion.div>
                )}
              </div>
            </header>

            {/* Content */}
            <main className="flex-1 p-10">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="max-w-7xl mx-auto"
              >
                {children}
              </motion.div>
            </main>

          </div>
        </div>
      </body>
    </html>
  );
}
