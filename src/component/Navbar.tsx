"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuWrapperRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/service" },
    { name: "Contact", href: "/contact" },
    { name: "Career", href: "/career" },
    { name: "Join Community", href: "/community" },
    { name: "Learning", href: "/learning" },
    { name: "About", href: "/about" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      setMenuOpen(false);
    };



    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 shadow bg-blue-950 px-5 py-2 md:px-10 relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl text-white">
          Tech <span className="text-sm font-light">Hike</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name} className="flex flex-col items-center relative">
                <Link
                  href={link.href}
                  className="transition duration-300 ease-in-out text-white text-sm"
                >
                  {link.name}
                </Link>
                {isActive && (
                  <div className="mt-0.5 w-full h-0.4 bg-white rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Toggle and Menu Wrapper */}
        <div ref={menuWrapperRef} className="md:hidden relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="toggle menu"
            className="text-white"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute top-10 right-0 bg-blue-950 py-4 rounded flex flex-col gap-2 w-48 text-center shadow-md z-50">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 transition text-sm ${
                      isActive ? "text-blue-600" : "text-white"
                    }`}
                  >
                    {link.name}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-green-100 to-transparent mt-1" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
