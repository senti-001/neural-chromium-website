"use client"

import Link from "next/link"
import { Code2, Shield, Cpu, TrendingUp, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"

const GITHUB_URL = "https://github.com/senti-001/neural-chromium"

interface Bounty {
    icon: any
    title: string
    description: string
    difficulty: "Advanced" | "Expert"
    scope: string
    reward: string
    githubIssue: string
    tags: string[]
}

const bounties: Bounty[] = [
    {
        icon: Code2,
        title: "Action Layer: Direct DOM-Tree Injection",
        description: "Build the action layer for direct DOM manipulation, bypassing traditional click simulation. Implement a zero-copy pathway from agent commands to browser DOM mutations.",
        difficulty: "Advanced",
        scope: "~2,000 LOC, C++ & Python",
        reward: "Developer DAO Funded",
        githubIssue: `${GITHUB_URL}/issues/new?labels=bounty,action-layer`,
        tags: ["C++", "Chromium", "DOM API"]
    },
    {
        icon: Shield,
        title: "Privacy Layer: On-Chain ZK-Browsing",
        description: "Implement zero-knowledge proof system for private browsing verification. Enable agents to prove browsing actions occurred without revealing the actual content or URLs.",
        difficulty: "Expert",
        scope: "~3,500 LOC, Rust & Solana",
        reward: "Developer DAO Funded",
        githubIssue: `${GITHUB_URL}/issues/new?labels=bounty,privacy-layer`,
        tags: ["Rust", "ZK-SNARKs", "Solana"]
    },
    {
        icon: Cpu,
        title: "Compute Layer: WebGPU Acceleration",
        description: "Integrate WebGPU for accelerated VLM inference and visual processing. Enable on-device GPU acceleration for vision models directly in the browser runtime.",
        difficulty: "Advanced",
        scope: "~1,800 LOC, C++ & WGSL",
        reward: "Developer DAO Funded",
        githubIssue: `${GITHUB_URL}/issues/new?labels=bounty,compute-layer`,
        tags: ["WebGPU", "WGSL", "VLM"]
    }
]

const difficultyColors = {
    "Advanced": "text-violet-500 bg-violet-500/10 border-violet-500/20",
    "Expert": "text-rose-500 bg-rose-500/10 border-rose-500/20"
}

export function ModuleBountyBoard() {
    return (
        <section id="bounties" className="border-b border-border/50 py-16 sm:py-24 md:py-32" aria-labelledby="bounties-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">
                        Developer DAO
                    </p>
                    <h2 id="bounties-heading" className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                        Module Bounty Board
                    </h2>
                    <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Build the future of agentic computing. Earn $NEURAL tokens by contributing critical infrastructure modules to the Sovereign Fork.
                    </p>
                </div>

                {/* Bounty Cards */}
                <div className="mt-10 space-y-6 sm:mt-16">
                    {bounties.map((bounty) => (
                        <article
                            key={bounty.title}
                            className="group rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg sm:p-8"
                        >
                            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                {/* Left: Icon & Content */}
                                <div className="flex-1">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <bounty.icon className="h-6 w-6" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <h3 className="font-mono text-lg font-semibold text-foreground sm:text-xl">
                                                    {bounty.title}
                                                </h3>
                                                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-mono font-semibold uppercase ${difficultyColors[bounty.difficulty]}`}>
                                                    {bounty.difficulty}
                                                </span>
                                            </div>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                                {bounty.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {bounty.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-md bg-muted/50 px-2 py-1 text-xs font-mono text-muted-foreground"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Scope */}
                                            <p className="mt-3 font-mono text-xs text-muted-foreground">
                                                Estimated Scope: {bounty.scope}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Reward & CTA */}
                                <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
                                    <div className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
                                        <div className="flex items-center gap-2 text-primary">
                                            <Coins className="h-4 w-4" />
                                            <span className="font-mono text-xs font-semibold uppercase">Bounty Reward</span>
                                        </div>
                                        <p className="mt-1 font-mono text-sm font-bold text-foreground">{bounty.reward}</p>
                                        <p className="mt-1 font-mono text-[10px] text-muted-foreground">10% Industrial Yield</p>
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full gap-2 font-mono text-sm lg:w-auto"
                                        asChild
                                    >
                                        <Link href={bounty.githubIssue} target="_blank" rel="noopener noreferrer">
                                            <TrendingUp className="h-4 w-4" />
                                            Claim Bounty
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Developer DAO Info */}
                <div className="mt-12 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                            <Coins className="h-5 w-5 text-emerald-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-mono text-lg font-semibold text-foreground">About the Developer DAO</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                The Developer DAO receives 10% of all Industrial Yield from the 0.3% network fee.
                                These funds are allocated to bounty rewards, grants, and community-driven development.
                                By claiming a bounty, you become part of the Sovereign Fork's economic architecture.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono">
                                <div>
                                    <span className="text-muted-foreground">Bounties Available:</span>
                                    <span className="ml-2 text-foreground font-semibold">3</span>
                                </div>
                                <div>
                                    <span className="text-muted-foreground">Bounties Claimed:</span>
                                    <span className="ml-2 text-foreground font-semibold">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional CTA */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        Have an idea for a new bounty?{" "}
                        <Link
                            href={`${GITHUB_URL}/issues/new?labels=bounty-proposal`}
                            className="text-primary hover:underline font-medium"
                        >
                            Propose it on GitHub
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
