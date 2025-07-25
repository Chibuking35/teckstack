"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/service" },
    { nwme: "Contact", href: "/contact" },
    { nwme: "Careers", href: "/careers" },
    { name: "Join Community", href: "/community" },
    { name: "Learning", href: "/learning" },
    { name: "About", href: "/about" }, // 🔧 added missing "/"
  ];

  return (
    <nav className="bg-blue-950  px-5 p-2 md:px-10">
      <div className="flex justify-between">
        {/*logo*/}
        <div className="flex">
          <h1 className="text-xl  text-white">
            Tech <span className="text-sm font-light">Hike</span>
          </h1>
        </div>
        {/*desktop menu*/}

        <div className="hidden md:flex items-center gap-6">
          {navLink.map((linkObj) => {
            const label = linkObj.name ?? linkObj.nwme ?? "Unnamed";
            const isActive = pathname === linkObj.href;

            return (
              <div key={label} className="flex flex-col items-center relative">
                <Link
                  href={linkObj.href}
                  className="transition  duration-300 ease-in-out text-white text-sm"
                >
                  {label}
                </Link>

                {isActive && (
                  <div className="mt-0.5 w-full h-0.5 bg-white rounded-full" />
                )}
              </div>
            );
          })}
        </div>
        {/* Mobile menu button */}

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
