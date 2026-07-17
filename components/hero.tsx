import Link from "next/link"

const linkClass =
  "text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"

export function Hero() {
  return (
    <section id="hero" className="pb-16 pt-12 lg:pb-20 lg:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Lambiv Gills Dzenyuy</h1>

      <p className="mt-5 max-w-xl text-xl leading-snug text-muted-foreground md:text-2xl">
        I build systems that keep working in hostile conditions — low bandwidth, strict rights, real-time constraints.
      </p>

      <p className="mt-10 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground">
        <span aria-hidden className="mr-2 inline-block h-2 w-2 rounded-full bg-primary motion-safe:animate-pulse" />
        <span className="text-foreground">Now</span> — core contributor to{" "}
        <Link href="/projects#bunkercoin-shortwave-blockchain" className={linkClass}>
          BunkerCoin
        </Link>
        , an open-source blockchain that runs over shortwave radio.
      </p>

      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
        <li>
          <a href="https://github.com/d3enyuy" target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/lambiv-dzenyuy"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:gillslambiv@gmail.com" className={linkClass}>
            Email
          </a>
        </li>
        <li>
          <a href="/cv.pdf" download="Lambiv_Gills_Dzenyuy_CV.pdf" className={linkClass}>
            CV
          </a>
        </li>
      </ul>
    </section>
  )
}
