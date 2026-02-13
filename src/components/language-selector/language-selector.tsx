"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Props } from "@/types/language";

const LangToggler = ({ trigger, defaultOpen, align = "end" }: Props) => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const en = "/en.svg";
  const es = "/es.svg";
  const pt = "/pt.svg";

  function onChange(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger asChild disabled={isPending}>
        {trigger}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align={align}
        className="w-44 dark:bg-stone-950 bg-white"
      >
        <DropdownMenuRadioGroup value={locale} onValueChange={onChange}>
          <DropdownMenuRadioItem
            value="en"
            className="data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground pl-2 text-base [&>span]:hidden"
          >
            <div className="flex items-center gap-2">
              <Image src={en} alt="English" width={18} height={18} />
              {t("english")}
            </div>
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value="es"
            className="data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground pl-2 text-base [&>span]:hidden"
          >
            <div className="flex items-center gap-2">
              <Image src={es} alt="Español" width={18} height={18} />
              {t("spanish")}
            </div>
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value="pt"
            className="data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground pl-2 text-base [&>span]:hidden"
          >
            <div className="flex items-center gap-2">
              <Image src={pt} alt="Português" width={18} height={18} />
              {t("portuguese")}
            </div>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangToggler;
