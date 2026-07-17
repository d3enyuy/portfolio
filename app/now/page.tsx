import type { Metadata } from "next"

import { nowItems } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Now",
  description: "What Lambiv Gills Dzenyuy is currently focused on.",
}

export default function NowPage() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 pb-24 pt-24">
      <header>
        <h1 className="text-2xl font-medium text-foreground">Now</h1>
        <p className="mt-1 font-mono text-xs text-muted-foreground">Last updated July 2026</p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          A short snapshot of what currently has my attention.
        </p>
      </header>

      <ul className="mt-16 max-w-xl divide-y divide-border">
        {nowItems.map((item) => (
          <li key={item.title} className="py-6 first:pt-0 last:pb-0">
            <p className="text-base font-medium text-foreground">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
