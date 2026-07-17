import Link from "next/link"

import { SectionHeading } from "@/components/section-heading"
import { featuredProjects } from "@/lib/site-content"

const linkClass =
  "font-mono text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border py-14 lg:py-16">
      <SectionHeading
        title="Selected work"
        description="A mix of professional work and personal projects. Private client work stays high-level; the goal is clarity, not theater."
      />

      <div className="divide-y divide-border">
        {featuredProjects.map((project) => (
          <article key={project.slug} className="py-10 first:pt-0 last:pb-0">
            <h3 className="text-lg font-medium text-foreground">
              <Link href={`/projects#${project.slug}`} className="transition-colors hover:text-primary">
                {project.title}
              </Link>
            </h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {project.kind} · {project.status} · {project.stack.slice(0, 3).join(" · ")}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

            <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
              <Link href={`/projects#${project.slug}`} className={linkClass}>
                Case study
              </Link>
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Site
                </a>
              ) : null}
              {project.repoUrl ? (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Source
                </a>
              ) : null}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
