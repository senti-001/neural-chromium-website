import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"

const GITHUB_URL = "https://github.com/senti-001/neural-chromium"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 sm:py-12" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2" aria-label="Neural Chromium home">
            <div className="relative flex h-8 w-8 items-center justify-center">
              <Image
                src="/Untitled design (4).png"
                alt="Neural Chromium Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-mono text-sm text-muted-foreground">
              Neural Chromium
            </span>
          </Link>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="#overview"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Overview
            </Link>
            <Link
              href="#status"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Status
            </Link>
            <Link
              href="#community"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Community
            </Link>
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Neural Chromium on GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
          </nav>
        </div>

        <div className="mt-6 border-t border-border/50 pt-6 text-center sm:mt-8 sm:pt-8">
          <p className="text-xs text-muted-foreground sm:text-sm">
            Built by{" "}
            <Link
              href="https://github.com/senti-001"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-foreground transition-colors hover:text-primary"
            >
              Senti-001
            </Link>
            . Open source under the project license.
          </p>
        </div>
      </div>
    </footer>
  )
}
