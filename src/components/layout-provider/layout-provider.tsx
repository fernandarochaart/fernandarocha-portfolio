"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import type React from "react";
import { useEffect, useState } from "react";
import CookieConsentComponent from "@/components/cookie-consent/cookie-consent";
import { Toaster } from "@/components/ui/sonner";
import Footer from "../footer-component/footer-component";
import Navbar from "../navbar-component/navbar-component";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    if (document.cookie.includes("cookieConsent=true")) {
      setHasConsented(true);
    }
  }, []);

  function handleAccept() {
    setHasConsented(true);
  }

  function handleDecline() {
    setHasConsented(false);
  }

  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        {children}
        <Toaster position="top-right" expand={true} />
        {hasConsented && <Analytics />}
        <SpeedInsights />
        <CookieConsentComponent
          onAcceptAction={handleAccept}
          onDeclineAction={handleDecline}
        />
        <Footer />
      </ThemeProvider>
    </>
  );
}
