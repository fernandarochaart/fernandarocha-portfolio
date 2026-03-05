"use client";

import * as Sentry from "@sentry/nextjs";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
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

  useEffect(() => {
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
      Sentry.captureException(error);
    }
  }, [demo, t]);

  return (
    <motion.div
      key="cookieAlertComponent"
      className={`fixed
                   bottom-0 sm:bottom-5
                   right-0 sm:right-5
                   z-40
                   font-regular
                   w-full sm:max-w-sm
                   p-3
                   bg-pink
                   text-blue
                 `}
      initial={{ y: "150%" }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <div
        className={cn(
          "fixed z-40 bottom-0 left-0 right-0 sm:bottom-8 sm:left-auto sm:right-6 w-full sm:max-w-sm transition-all duration-500 ease-out",
          !isOpen
            ? "translate-y-full sm:translate-y-8 opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100",
          hide && "hidden",
        )}
      >
        <div className="mx-4 sm:mx-0 mb-12 sm:mb-0 bg-pink rounded-xl shadow-2xl overflow-hidden p-4 bg-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🍪</span>
            <h1 className="text-base font-semibold text-blue">{t("title")}</h1>
          </div>

          <p className="text-sm leading-relaxed text-blue mb-3">
            {t("message")}
          </p>

          <div className="flex items-center gap-2">
            <Button
              onClick={decline}
              variant="ghost"
              className="flex-1 text-blue hover:bg-pink/80 font-medium transition-all duration-200"
            >
              {t("decline")}
            </Button>

            <Link
              href="/privacypolicy"
              className="flex-1 inline-flex items-center justify-center text-sm font-medium text-blue hover:underline underline-offset-2 transition-colors"
            >
              {t("privacyLink")}
            </Link>

            <Button
              onClick={accept}
              className="flex-1 bg-stone-800 hover:bg-stone-700 text-gray-200 font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              {t("accept")}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
