import { SectionHeading } from "@/components/section-heading"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-14 lg:py-16">
      <SectionHeading title="Contact" />

      <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
        Email is the best place to start. If you want to talk about backend systems, product engineering, or a
        practical software problem, write to{" "}
        <a
          href="mailto:gillslambiv@gmail.com"
          className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        >
          gillslambiv@gmail.com
        </a>
        .
      </p>

      <footer className="mt-20 border-t border-border pt-6">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lambiv Gills Dzenyuy · Next.js &amp; Tailwind CSS
        </p>
      </footer>
    </section>
  )
}
