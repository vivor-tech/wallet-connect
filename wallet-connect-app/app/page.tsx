import { WalletConnectHero } from "@/components/wallet-connect-hero"
import { FeatureGrid } from "@/components/feature-grid"
import { WalletConnectFooter } from "@/components/wallet-connect-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <WalletConnectHero />
      <FeatureGrid />
      <WalletConnectFooter />
    </main>
  )
}
