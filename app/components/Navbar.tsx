'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const applyTheme = () => {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      document.documentElement.classList.toggle('dark', darkModeQuery.matches);
    };
    
    applyTheme();
    
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => {
      document.documentElement.classList.toggle('dark', darkModeQuery.matches);
    };
    
    darkModeQuery.addEventListener('change', handleThemeChange);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      darkModeQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-slate-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Image
                src="/images/trc_logo.png"
                alt="Thinking Robot Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                Thinking Robot
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                Smart IoT Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Thinking-Robot-Tech/Thinking-Robot/releases/download/v1.0.0/PICO.IOT.APP.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shine-effect"
            >
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://github.com/Thinking-Robot-Tech/Thinking-Robot/releases/download/v1.0.0/PICO.IOT.APP.apk"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all"
              >
                Download App
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
