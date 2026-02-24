import { getTranslations } from "next-intl/server";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "@/i18n/navigation";

export default async function SeeAllProjects() {
  const t = await getTranslations("Jobs");

  return (
    <div className="pt-6 flex">
      <Link
        href="https://www.behance.net/fernandarocha"
        target="_blank"
        rel="noreferrer"
        className="
          group inline-flex items-center gap-2
          text-sm font-medium
          text-neutral-900
          transition-colors"
      >
        <span>{t("seeAll")}</span>

        <HiArrowRight
          className="
            transition-transform
            group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
