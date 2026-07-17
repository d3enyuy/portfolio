import { SectionHeading } from "@/components/section-heading"
import { coreStack, focusAreas } from "@/lib/site-content"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-14 lg:py-16">
      <SectionHeading title="About" />

      <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          I&apos;m Lambiv, a software engineer with a computer science background and experience working across
          distributed teams in Europe and Africa.
        </p>
        <p>
          The work I enjoy most sits where product clarity meets technical rigor: backend systems, streaming and
          analytics infrastructure, protocols that have to survive hostile network conditions, and software that has to
          stay dependable after launch.
        </p>
        <p>
          I am not aiming to build the loudest interface. I care more about making the product understandable, reducing
          friction, and choosing technology for the problem instead of the other way around.
        </p>
      </div>

      <dl className="mt-12 max-w-xl space-y-6">
        {focusAreas.map((item) => (
          <div key={item.title}>
            <dt className="text-base font-medium text-foreground">{item.title}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-12 max-w-xl font-mono text-sm leading-loose text-muted-foreground">
        <span className="text-foreground">Core stack</span> — {coreStack.join(" · ")}
      </p>
    </section>
  )
}
