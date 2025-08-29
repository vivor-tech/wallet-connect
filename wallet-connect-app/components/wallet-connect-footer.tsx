import { Button } from "@/components/ui/button"
import { Github, Twitter, MessageCircle, Globe } from "lucide-react"

export function WalletConnectFooter() {
  return (
    <footer className="border-t border-border/50 bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Distribution Stats */}
        <div className="glass p-8 rounded-2xl mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Distribution</h3>
              <p className="text-muted-foreground">Current network statistics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 max-w-2xl">
              <div className="text-center p-4 bg-primary/10 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">37%</div>
                <div className="text-sm text-muted-foreground">Active Wallets</div>
              </div>
              <div className="text-center p-4 bg-destructive/10 rounded-xl">
                <div className="text-2xl font-bold text-destructive mb-1">47%</div>
                <div className="text-sm text-muted-foreground">Fraudulent Scams</div>
              </div>
              <div className="text-center p-4 bg-accent/10 rounded-xl">
                <div className="text-2xl font-bold text-accent mb-1">45%</div>
                <div className="text-sm text-muted-foreground">Contributors</div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-sm text-muted-foreground mb-3">Ready to create blockchain history?</p>
              <p className="text-xs text-muted-foreground mb-4">We are here to provide help</p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">W</span>
              </div>
              <span className="font-bold text-foreground">WalletConnect</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              The open protocol for connecting Wallets to Dapps. Secure, decentralized, and built for the future of
              Web3.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10">
                <Globe className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Protocol</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  SDK
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Bug Reports
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">Copyright 2024 Dev Tools</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
