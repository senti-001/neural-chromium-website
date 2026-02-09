import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const GITHUB_URL = "https://github.com/senti-001/neural-chromium"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/50" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl shadow-2xl shadow-primary/20 transition-transform hover:scale-105 sm:h-48 sm:w-48">
              <Image
                src="/Untitled design (2).png"
                alt="Neural Chromium Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary sm:mb-6 sm:px-4 sm:py-1.5 sm:text-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Under Active Development
          </div>

          <h1 id="hero-heading" className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            The Web Runtime
            <br />
            <span className="text-primary">Built for Agents</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            Neural Chromium is an agentic web runtime powered by Chromium, NATS JetStream, and Python.
            Designed from the ground up for programmatic control by AI agents.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button size="lg" className="w-full gap-2 font-mono text-sm sm:w-auto" asChild>
              <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full gap-2 bg-transparent font-mono text-sm sm:w-auto" asChild>
              <Link href="#overview">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl sm:mt-16">
          <div className="overflow-x-auto rounded-xl border border-border/50 bg-card p-3 font-mono text-xs shadow-lg sm:p-4 sm:text-sm" role="presentation" aria-label="Terminal showing installation commands">
            <div className="flex items-center gap-2 pb-3 text-xs text-muted-foreground">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60 sm:h-3 sm:w-3" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-chart-4/60 sm:h-3 sm:w-3" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/60 sm:h-3 sm:w-3" aria-hidden="true" />
              <span className="ml-2">terminal</span>
            </div>
            <div className="space-y-1.5 text-muted-foreground">
              <p className="whitespace-nowrap">
                <span className="text-primary">$</span> git clone https://github.com/senti-001/neural-chromium.git
              </p>
              <p>
                <span className="text-primary">$</span> cd neural-chromium
              </p>
              <p>
                <span className="text-primary">$</span> python3 nexus_agent.py --vlm openai
              </p>
              <p className="text-muted-foreground/60">
                {"// Running the Neural Chromium agent..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
