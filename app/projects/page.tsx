import type { Metadata } from "next"

import { featuredProjects } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected professional work and side projects by Lambiv Gills Dzenyuy.",
}

const linkClass =
  "font-mono text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 pb-24 pt-24">
      <header>
        <h1 className="text-2xl font-medium text-foreground">Projects</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          These write-ups mix professional work and personal projects. Where the work is private, I keep the
          explanation focused on the engineering shape, constraints, and decisions rather than client-sensitive
          details.
        </p>
      </header>

      <div className="mt-16 divide-y divide-border">
        {featuredProjects.map((project) => (
          <article key={project.slug} id={project.slug} className="scroll-mt-24 py-12 first:pt-0 last:pb-0">
            <h2 className="text-lg font-medium text-foreground">{project.title}</h2>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {project.kind} · {project.status}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

            <div className="mt-8 max-w-xl space-y-6">
              <div>
                <h3 className="font-mono text-xs text-muted-foreground">Problem</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
              </div>
              <div>
                <h3 className="font-mono text-xs text-muted-foreground">Approach</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.approach}</p>
              </div>
              <div>
                <h3 className="font-mono text-xs text-muted-foreground">Notes</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.detail}</p>
              </div>
            </div>

            <p className="mt-8 max-w-xl font-mono text-xs leading-loose text-muted-foreground">
              {project.stack.join(" · ")}
            </p>

            {project.liveUrl || project.repoUrl ? (
              <p className="mt-6 flex flex-wrap gap-x-5 gap-y-1">
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
            ) : null}
          </article>
        ))}
      </div>
    </main>
  )
}
