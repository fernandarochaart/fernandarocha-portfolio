"use client";

import { Instagram, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { FooterLink, FooterSection, SocialLink } from "@/types/footer";

export type FooterLinks = Record<FooterSection, FooterLink[]>;

export default function Footer() {
  const t = useTranslations("Footer");

  const footerLinks: FooterLinks = {
    navigation: [
      { href: "/jobs", label: t("jobs") },
      { href: "/about", label: t("about") },
      { href: "/contact", label: t("contact") },
    ],
    legal: [{ href: "/privacypolicy", label: t("privacy") }],
  };

  const socialLinks: SocialLink[] = [
    {
      href: "https://www.instagram.com/fernandaarocha_",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/fernanda-padilha-da-rocha-mktecomunicacao/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "mailto:fernandarochaart@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="border-t border-stone-800 bg-stone-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold bg-linear-to-r text-white bg-clip-text">
                {t("brandName")}
              </span>
            </Link>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
              {t("description")}
            </p>

            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-stone-900 hover:bg-linear-to-br hover:from-blue-600 hover:to-purple-600 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {t("navigation")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {t("legal")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-stone-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} {t("brandName")}
            </p>

            <p className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              {t("developedBy")}{" "}
              <Link
                href="https://www.victorzarzar.com.br"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("developerName")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
