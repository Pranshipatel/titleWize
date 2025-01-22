import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <header className="navbar flex items-center justify-between px-4 py-4 bg-white md:px-8 md:py-4">
      {/* Logo */}
      <a href="/" className="nav-logo flex items-center">
        <img
          src="/Titlewize_logo.png"
          alt="TitleWize"
          className="h-10 w-auto md:h-12"
        />
      </a>

      {/* Navigation */}
      <nav className="nav-tags flex items-center text-lg gap-10 md:gap-14">
        <Link
          to="feature-section"
          smooth={true}
          duration={1000} // Duration in milliseconds
          className="text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Features
        </Link>
        <Link
          to="benefit-section"
          smooth={true}
          duration={1000}
          className="text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Benefits
        </Link>
        <Link
          to="partner-section"
          smooth={true}
          duration={1000}
          className="text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Partners
        </Link>
      </nav>

      {/* Auth Buttons */}
      <div className="nav-login flex items-center space-x-4 md:space-x-5">
        <a href="/login" className="text-gray-600 hover:text-gray-900">
          Login
        </a>
        <Link
          href="/request-access"
          className="nav-btn px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
        >
          Request Access
        </Link>
      </div>
    </header>
  );
}
