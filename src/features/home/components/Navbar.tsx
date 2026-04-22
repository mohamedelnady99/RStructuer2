import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#002819]/95 backdrop-blur-sm border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <svg
              viewBox="0 0 32 32"
              className="w-8 h-8 text-[#D4AF37]"
              fill="currentColor"
            >
              <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 4a2 2 0 110 4 2 2 0 010-4zm6 18H10v-2l2-1v-7l-2-1v-2h8v2l-2 1v7l2 1v2z" />
            </svg>
            <span className="text-white text-xl font-bold tracking-tight">
              Camel<span className="text-[#D4AF37]">Track</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm font-medium"
            >
              How It Works
            </a>
            <a
              href="#cta"
              className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm font-medium"
            >
              Pricing
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/auth"
              className="text-white text-sm font-medium hover:text-[#D4AF37] transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/auth/sign-up"
              className="bg-[#D4AF37] text-[#002819] text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#c9a430] transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#D4AF37]/20 space-y-4">
            <a
              href="#features"
              className="block text-gray-300 hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block text-gray-300 hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#cta"
              className="block text-gray-300 hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col gap-3 pt-2">
              <Link
                to="/auth"
                className="text-white font-medium hover:text-[#D4AF37] transition-colors"
              >
                Log In
              </Link>
              <Link
                to="/auth/sign-up"
                className="bg-[#D4AF37] text-[#002819] font-bold px-4 py-2 rounded-lg text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
