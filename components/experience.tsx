import { SectionHeading } from "@/components/section-heading"
import { experienceItems } from "@/lib/site-content"

export function Experience() {
  const featuredExperience = experienceItems.filter((item) => item.featured)
  const earlierExperience = experienceItems.filter((item) => !item.featured)

  return (
    <section id="experience" className="scroll-mt-24 border-t border-border py-14 lg:py-16">
      <SectionHeading title="Experience" />

      <div className="divide-y divide-border">
        {featuredExperience.map((item) => (
          <article key={`${item.company}-${item.period}`} className="py-10 first:pt-0">
            <h3 className="text-lg font-medium text-foreground">
              {item.role}, {item.company}
            </h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {item.period} · {item.location}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{item.summary}</p>

            <ul className="mt-4 max-w-xl space-y-2 text-sm leading-relaxed text-muted-foreground">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden className="select-none text-border">
                    —
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 max-w-xl font-mono text-xs leading-loose text-muted-foreground">
              {item.stack.join(" · ")}
            </p>
          </article>
        ))}

        <div className="py-10 last:pb-0">
          <h3 className="font-mono text-xs text-muted-foreground">Earlier</h3>
          <ul className="mt-4 space-y-3">
            {earlierExperience.map((item) => (
              <li
                key={`${item.company}-${item.period}`}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
              >
                <span className="text-sm text-foreground">
                  {item.role}, {item.company}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
