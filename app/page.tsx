import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { PhoenixProtocol } from "@/components/phoenix-protocol"
import { StatusSection } from "@/components/status-section"
import { NeuralTokenomics } from "@/components/neural-tokenomics"
import { GatewaySection } from "@/components/gateway-section"
import { ModuleBountyBoard } from "@/components/module-bounty-board"
import { SentiSection } from "@/components/senti-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <PhoenixProtocol />
        <StatusSection />
        <NeuralTokenomics />
        <GatewaySection />
        <ModuleBountyBoard />
        <SentiSection />
      </main>
      <Footer />
    </div>
  )
}
