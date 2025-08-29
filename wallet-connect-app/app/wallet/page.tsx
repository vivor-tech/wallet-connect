"use client"

import { WalletConnectionPage } from "@/components/wallet-connection-page"
import { useEffect } from "react"

export default function WalletPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <WalletConnectionPage />
    </main>
  )
}
