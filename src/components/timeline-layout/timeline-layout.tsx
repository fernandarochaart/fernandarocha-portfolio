import { getTranslations } from "next-intl/server";
import { jobs } from "@/shared/data/getJobsData";

export default async function TimelineLayout() {
  const t = await getTranslations("Jobs");

  return (
    <div className="relative">
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

      <div className="flex flex-col">
        {jobs.map((job, index) => {
          const isEven = index % 2 === 0;
          const title = t(job.titleKey as string);
          const description = t(job.descriptionKey as string);
          const category = t(job.categoryKey as string);

          return (
            <div
              key={job.id}
              className="relative flex py-16 border-b border-border last:border-b-0 lg:border-b-0"
            >
              <div
                className={`w-full space-y-4 lg:w-1/2 ${
                  isEven
                    ? "lg:ml-auto lg:text-right lg:pr-16 lg:pl-4"
                    : "lg:mr-auto lg:text-left lg:pl-16 lg:pr-4"
                }`}
              >
                <div
                  className={`flex items-center gap-3 flex-wrap ${
                    isEven ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {job.year}
                  </span>
                  <span className="text-xs text-muted-foreground">—</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {category}
                  </span>
                  {job.agency && (
                    <>
                      <span className="text-xs text-muted-foreground">—</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">
                        {job.agency}
                      </span>
                    </>
                  )}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {job.link ? (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline underline-offset-4 transition-all"
                    >
                      {title}
                    </a>
                  ) : (
                    title
                  )}
                </h2>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {description}
                </p>

                {job.platforms && job.platforms.length > 0 && (
                  <div
                    className={`flex flex-wrap gap-2 ${
                      isEven ? "lg:justify-end" : "lg:justify-start"
                    }`}
                  >
                    {job.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="text-xs px-3 py-1 bg-foreground text-background rounded-full font-medium"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                )}

                <div
                  className={`flex flex-wrap gap-2 ${
                    isEven ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  {job.tagsKeys.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-border rounded-full text-muted-foreground"
                    >
                      {t(tag)}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-foreground border-2 border-background ring-1 ring-border z-10" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
