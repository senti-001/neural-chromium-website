"use client"

import Script from "next/script"
import { Mic2, MessageSquareText } from "lucide-react"

export function InvestorConcierge() {
    return (
        <>
            <div className="rounded-xl border border-border/50 bg-card p-6 shadow-sm flex flex-col justify-center items-center text-center bg-gradient-to-b from-card to-primary/5 h-full">
                <div className="mb-4 rounded-full bg-primary/10 p-3 ring-1 ring-primary/20">
                    <MessageSquareText className="h-6 w-6 text-primary" />
                </div>

                <h4 className="text-lg font-bold tracking-tight text-foreground mb-1">Investor Relations</h4>
                <p className="text-xs text-muted-foreground mb-4 max-w-[200px]">
                    Launch our AI-driven voice portal for investment inquiries.
                </p>

                <a
                    href="https://agent.jotform.com/019c5149774973eba96df2610d62da643ca3/voice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-mono font-bold text-primary-foreground transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                >
                    <Mic2 className="h-3.5 w-3.5" />
                    ACTIVATE VOICE AGENT
                </a>
            </div>

            <Script
                src="https://cdn.jotfor.ms/agent/embedjs/019c5149774973eba96df2610d62da643ca3/embed.js?isVoice=1"
                strategy="lazyOnload"
            />
        </>
    )
}
