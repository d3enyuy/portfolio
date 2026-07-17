import type { Metadata } from "next"

import { researchInterests } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Research",
  description: "Research interests and themes explored by Lambiv Gills Dzenyuy.",
}

export default function ResearchPage() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 pb-24 pt-24">
      <header>
        <h1 className="text-2xl font-medium text-foreground">Research</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          This is less about formal publications and more about the questions I want to keep studying through writing,
          experiments, and product work.
        </p>
      </header>

      <ul className="mt-16 max-w-xl divide-y divide-border">
        {researchInterests.map((topic) => (
          <li key={topic} className="py-4 text-sm leading-relaxed text-muted-foreground first:pt-0 last:pb-0">
            {topic}
          </li>
        ))}
      </ul>
    </main>
  )
}
