"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/locale";

const order: Locale[] = ["en", "es", "pt"];

function nextLocale(current: Locale): Locale {
  const idx = order.indexOf(current);
  if (idx === -1) {
    return order[0];
  }
  return order[(idx + 1) % order.length];
}

export function LocaleLink({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const label = locale.toUpperCase();
  const to = nextLocale(locale);

  function handleClick() {
    if (isPending) {
      return;
    }
    startTransition(() => {
      router.replace(pathname, { locale: to });
    });
  }

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={handleClick}
      aria-label={`Change language to ${to.toUpperCase()}`}
      className={cn(
        "relative inline-flex h-9 items-center justify-center px-2 text-sm font-medium uppercase",
        "text-gray-700 bg-clip-text after:transition-all after:duration-300",
        "hover:after:w-full hover:text-black-900 relative pb-1",
        "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0",
        "after:bg-gray-900 hover:text-black-900",
        className,
      )}
    >
      {label}
    </button>
  );
}
