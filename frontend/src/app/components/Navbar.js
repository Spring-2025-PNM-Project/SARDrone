"use client"

import { useState } from "react"
import Link from "next/link"
import { Inter } from "next/font/google"
import { motion } from "framer-motion"  // Import motion from framer-motion

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] })

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle mobile menu state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <motion.nav
      className={`bg-black ${inter.className}`}
      initial={{ y: -100 }}  // Start from above the screen
      animate={{ y: 0 }}     // Move to the original position
      transition={{ type: "spring", stiffness: 50 }}  // Add a smooth transition
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-32 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg
                  className="block w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Center MERIT text with plus sign behind it */}
          <div className="flex flex-1 items-center justify-center relative">
            {/* Plus sign positioned behind the text */}
            <span className="absolute text-7xl font-thin text-gray-600 opacity-50 z-0">+</span>
            <h1 className="text-6xl font-extrabold bg-gradient-to-b from-red-500 via-red-600 via-40% to-red-700 to-80% text-transparent bg-clip-text z-10">
              MERIT
            </h1>
            <h1 className="text-white text-4xl">+</h1>
          </div>

          {/* Right navigation links - hidden on mobile */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Link href="/" passHref>
                <span className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  Home
                </span>
              </Link>
              <Link href="/map" passHref>
                <span className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  Map
                </span>
              </Link>
              <Link href="/about" passHref>
                <span className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  About
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link href="/" passHref>
              <span className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Home
              </span>
            </Link>
            <Link href="/map" passHref>
              <span className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Map
              </span>
            </Link>
            <Link href="/about" passHref>
              <span className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                About
              </span>
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  )
}
