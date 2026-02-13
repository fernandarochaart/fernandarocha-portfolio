"use client";
import { CookieIcon, X } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CookieConsentProps } from "@/types/cookies";

export default function CookieConsentComponent({
  demo = false,
  onAcceptAction,
  onDeclineAction,
}: CookieConsentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const t = useTranslations("Cookies");

  function setCookie(name: string, value: string, days = 180) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const attributes: string[] = [
      `expires=${date.toUTCString()}`,
      "path=/",
      "SameSite=Strict",
    ];
    if (
      typeof window !== "undefined" &&
      window.location.protocol === "https:"
    ) {
      attributes.push("Secure");
    }
    document.cookie = `${name}=${encodeURIComponent(value)}; ${attributes.join("; ")}`;
  }

  function accept() {
    setIsOpen(false);
    setCookie("cookieConsent", "true");
    localStorage.setItem("cookieConsent", "true");
    setTimeout(() => {
      setHide(true);
    }, 180);
    onAcceptAction?.();
  }

  function decline() {
    setIsOpen(false);
    setCookie("cookieConsent", "declined");
    localStorage.setItem("cookieConsent", "declined");
    setTimeout(() => {
      setHide(true);
    }, 180);
    onDeclineAction?.();
  }

  React.useEffect(() => {
    try {
      setIsOpen(true);
      const cookies = document.cookie;
      if (
        cookies.includes("cookieConsent=true") ||
        cookies.includes("cookieConsent=declined")
      ) {
        if (!demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch (error) {
      toast.error(t("error"));
      throw error;
    }
  }, [demo, t]);

  return (
    <div
      className={cn(
        "fixed z-200 bottom-0 left-0 right-0 sm:bottom-6 sm:left-auto sm:right-6 w-full sm:max-w-md transition-all duration-500 ease-out",
        !isOpen
          ? "translate-y-full sm:translate-y-8 opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100",
        hide && "hidden",
      )}
    >
      <div className="mx-4 sm:mx-0 mb-4 sm:mb-0 backdrop-blur-sm bg-white/95 dark:bg-stone-950/95 rounded-xl border border-gray-200 dark:border-stone-800 shadow-2xl overflow-hidden">
        <div className="relative">
          <div className="relative border-b border-gray-200 dark:border-stone-800 bg-linear-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <CookieIcon className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {t("title")}
              </h1>
            </div>
          </div>

          <div className="px-5 py-5">
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {t("message")}
            </p>
            <Link
              href="/privacypolicy"
              className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline underline-offset-2"
            >
              {t("privacyLink")}
              <span className="text-xs">→</span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 px-5 py-4 bg-gray-50/80 dark:bg-stone-900/50 border-t border-gray-200 dark:border-stone-800">
            <Button
              onClick={accept}
              className="flex-1 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white dark:text-gray-200 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer font-medium"
            >
              {t("accept")}
            </Button>
            <Button
              onClick={decline}
              className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-gray-700 dark:text-gray-300 cursor-pointer font-medium transition-all duration-200"
              variant="secondary"
            >
              {t("decline")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
