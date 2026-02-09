import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const siteUrl = "https://neuralchromium.dev"

export const metadata: Metadata = {
  title: {
    default: "Neural Chromium — The Agentic Web Runtime",
    template: "%s | Neural Chromium",
  },
  description:
    "Neural Chromium is an agentic web runtime built on Chromium, NATS JetStream, and Python. Designed from the ground up for programmatic control by AI agents.",
  keywords: [
    "Neural Chromium",
    "agentic web runtime",
    "AI agents",
    "Chromium",
    "NATS JetStream",
    "Python",
    "browser automation",
    "Senti-001",
    "OpenClaw",
    "programmatic browser",
  ],
  authors: [{ name: "Senti-001", url: "https://github.com/senti-001" }],
  creator: "Senti-001",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/Untitled design (4).png",
    shortcut: "/Untitled design (4).png",
    apple: "/Untitled design (4).png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Neural Chromium",
    title: "Neural Chromium — The Agentic Web Runtime",
    description:
      "An agentic web runtime built on Chromium, NATS JetStream, and Python. Designed for programmatic control by AI agents.",
    images: [
      {
        url: "/Untitled design (4).png",
        width: 1200,
        height: 1200,
        alt: "Neural Chromium Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neural Chromium — The Agentic Web Runtime",
    description:
      "An agentic web runtime built on Chromium, NATS JetStream, and Python. Designed for programmatic control by AI agents.",
    images: ["/Untitled design (4).png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Neural Chromium",
              description:
                "An agentic web runtime built on Chromium, NATS JetStream, and Python.",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Cross-platform",
              author: {
                "@type": "Organization",
                name: "Senti-001",
                url: "https://github.com/senti-001",
              },
              url: siteUrl,
              codeRepository:
                "https://github.com/senti-001/neural-chromium-website",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
