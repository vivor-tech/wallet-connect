"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Wallet, Shield, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export function WalletConnectHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 mt-8 container mx-auto px-4 text-center">
        {/* Logo/Brand */}
        <div
          className={`flex items-center justify-center gap-3 mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="p-3 glass rounded-xl animate-glow">
            <Wallet className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">WALLET CONNECT</h1>
        </div>

        {/* Main heading */}
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-balance mb-6 px-2">
            <span className="text-primary">Secure Communication</span>
            <br />
            <span className="text-foreground">for Web3</span>
          </h2>
        </div>

        {/* Description */}
        <div
          className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty px-4">
            WALLET CONNECT is an open protocol to communicate securely between Wallets and Dapps (Web3 Apps). The
            protocol establishes a remote connection using a Bridge server.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Link href="/wallet">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-glow"
            >
              Connect Wallet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
          >
            Collab Join
          </Button>
        </div>

        {/* Feature highlights */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Link href="/wallet">
            <div className="glass p-6 rounded-xl text-center group hover:scale-105 transition-transform cursor-pointer">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Secure Protocol</h3>
              <p className="text-sm text-muted-foreground">End-to-end encryption for all communications</p>
            </div>
          </Link>
          <Link href="/wallet">
            <div className="glass p-6 rounded-xl text-center group hover:scale-105 transition-transform cursor-pointer">
              <Zap className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">Instant connection and transaction processing</p>
            </div>
          </Link>
          <Link href="/wallet">
            <div className="glass p-6 rounded-xl text-center group hover:scale-105 transition-transform cursor-pointer">
              <Wallet className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Multi-Wallet</h3>
              <p className="text-sm text-muted-foreground">Support for all major wallet providers</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
