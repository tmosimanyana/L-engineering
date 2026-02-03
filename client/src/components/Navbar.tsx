import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className={`text-2xl font-bold transition-colors ${
                isScrolled
                  ? "text-gray-900"
                  : "text-white drop-shadow-lg"
              }`}
            >
              YourBrand
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <NavLink href="#home" isScrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink href="#features" isScrolled={isScrolled}>
              Features
            </NavLink>
            <NavLink href="#about" isScrolled={isScrolled}>
              About
            </NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>
              Contact
            </NavLink>
            <button
              className={`rounded-full px-6 py-2 font-semibold transition-all ${
                isScrolled
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                  : "border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              }`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
  isScrolled,
}: {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}) {
  return (
    <a
      href={href}
      className={`transition-colors hover:underline ${
        isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
      }`}
    >
      {children}
    </a>
  );
}
