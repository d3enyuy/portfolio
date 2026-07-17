import type { Metadata } from "next"

import { upcomingNotes } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Notes",
  description: "Planned engineering notes and short-form writing by Lambiv Gills Dzenyuy.",
}

export default function NotesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 pb-24 pt-24">
      <header>
        <h1 className="text-2xl font-medium text-foreground">Notes</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          I have not published notes here yet. When this section goes live, the goal is short, useful writing rather
          than padded blog posts. These are the topics I expect to start with.
        </p>
      </header>

      <ul className="mt-16 max-w-xl divide-y divide-border">
        {upcomingNotes.map((topic) => (
          <li key={topic} className="py-4 text-sm leading-relaxed text-muted-foreground first:pt-0 last:pb-0">
            {topic}
          </li>
        ))}
      </ul>
    </main>
  )
}
