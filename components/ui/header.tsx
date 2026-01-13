"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [top, setTop] = useState(true);

  // This detects if you scroll down to add a shadow
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Site Branding / Logo */}
          <div className="shrink-0 mr-4">
            <Link href="/" className="block text-blue-600 font-bold text-xl">
              Chill Thrive
            </Link>
          </div>

          {/* Desktop Navigation (Added 'flex' to force visibility) */}
          <nav className="flex grow">
            <ul className="flex grow justify-end flex-wrap items-center gap-6">
              <li>
                <Link
                  href="/"
                  className="font-medium text-gray-600 hover:text-gray-900 px-3 py-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-medium text-gray-600 hover:text-gray-900 px-3 py-2"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/awareness"
                  className="font-medium text-gray-600 hover:text-gray-900 px-3 py-2"
                >
                  About/Awareness
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-gray-600 hover:text-gray-900 px-3 py-2"
                >
                  Contact
                </Link>
              </li>

              {/* Book Now Button */}
              <li>
                <Link
                  href="/bookings"
                  className="btn-sm bg-blue-600 text-white px-4 py-2 rounded shadow-sm hover:bg-blue-700 ml-3"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}