import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { StatusSection } from "@/components/status-section"
import { GatewaySection } from "@/components/gateway-section"
import { CommunitySection } from "@/components/community-section"
import { SentiSection } from "@/components/senti-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <StatusSection />
        <GatewaySection />
        <CommunitySection />
        <SentiSection />
      </main>
      <Footer />
    </div>
  )
}
