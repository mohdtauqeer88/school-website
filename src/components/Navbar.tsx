import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { NAV_LINKS, SITE } from "../config";
import { scrollTo } from "../lib/scroll";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleApply = () => {
    setMobileMenuOpen(false);
    scrollTo("admissions");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-50">
          <img
            src="images/cmm-facebook-1.jpg"
            alt={`${SITE.name} logo`}
            className="w-10 h-10 rounded-full object-cover bg-white shadow-md border border-white/70"
          />
          <div>
            <div
              className={`font-serif font-bold text-xl leading-none ${
                isScrolled ? "text-secondary" : "text-white"
              }`}
            >
              CMM English
            </div>
            <div
              className={`text-[10px] tracking-widest uppercase font-semibold ${
                isScrolled ? "text-primary" : "text-blue-200"
              }`}
            >
              {SITE.tagline}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                isScrolled ? "text-secondary" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={handleApply}
            className="bg-accent hover:bg-accent/90 text-secondary font-bold rounded-full px-6 shadow-md transition-transform hover:scale-105"
          >
            Apply Now
          </Button>
        </nav>

        <button
          className="lg:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-secondary" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-secondary" : "text-white"} />
          )}
        </button>

        <div
          className={`fixed inset-0 bg-secondary flex flex-col justify-center items-center transition-transform duration-500 lg:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center gap-6 w-full px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-white hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="bg-accent hover:bg-accent/90 text-secondary font-bold rounded-full px-8 py-6 text-lg mt-4 w-full shadow-lg"
              onClick={handleApply}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
