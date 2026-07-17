import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SelectedWork } from "@/components/selected-work"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-24">
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
