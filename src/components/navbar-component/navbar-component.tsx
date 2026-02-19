"use client";
import { LanguagesIcon, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LangToggler from "@/components/language-selector/language-selector";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navigation");

  const navItems = [
    { href: "/jobs", label: t("jobs") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fernanda Rocha
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-gray-700 pb-1
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                  after:bg-blue-600 after:transition-all after:duration-300
                  hover:after:w-full hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}

            <LangToggler
              trigger={
                <button type="button">
                  <LanguagesIcon />
                </button>
              }
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <LangToggler
                trigger={
                  <button type="button">
                    <LanguagesIcon />
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
