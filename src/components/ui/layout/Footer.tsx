import { Heart, Mail, MapPin, Phone } from "lucide-react";

function Footer() {
	return (
	  <footer className="relative border-t border-glass-border bg-black/40 backdrop-blur-xl">
		 <div className="absolute inset-0 bg-gradient-to-t from-health-accent/5 to-transparent -z-10" />
		 
		 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
			  <div>
				 <h3 className="text-lg font-semibold text-surface-foreground mb-4">About Aid Connect</h3>
				 <p className="text-surface-foreground/70 text-sm leading-relaxed">
					Enhancing post-disaster community health by streamlining the medical supply chain. Essential supplies, delivered promptly and efficiently.
				 </p>
			  </div>
			  
			  <div>
				 <h3 className="text-lg font-semibold text-surface-foreground mb-4">Quick Links</h3>
				 <ul className="space-y-3">
					<li>
					  <a href="/" className="text-sm text-surface-foreground/70 hover:text-health-accent transition-colors">
						 Home
					  </a>
					</li>
					<li>
					  <a href="/all-supplies" className="text-sm text-surface-foreground/70 hover:text-health-accent transition-colors">
						 Supplies
					  </a>
					</li>
					<li>
					  <a href="/admin" className="text-sm text-surface-foreground/70 hover:text-health-accent transition-colors">
						 Dashboard
					  </a>
					</li>
					<li>
				  <a href="/register" className="text-sm text-surface-foreground/70 hover:text-health-accent transition-colors">
					 Register
				  </a>
					</li>
				 </ul>
			  </div>
			  
			  <div>
				 <h3 className="text-lg font-semibold text-surface-foreground mb-4">Connect</h3>
				 <div className="space-y-3">
					<a href="#" className="flex items-center gap-2 text-sm text-surface-foreground/70 hover:text-health-accent transition-colors">
					  <Mail className="h-4 w-4" />
					  <span>info@aidconnect.com</span>
					</a>
					<a href="#" className="flex items-center gap-2 text-sm text-surface-foreground/70 hover:text-health-accent transition-colors">
					  <Phone className="h-4 w-4" />
					  <span>+1 (555) 123-4567</span>
					</a>
					<div className="flex items-center gap-2 text-sm text-surface-foreground/70">
					  <MapPin className="h-4 w-4" />
					  <span>New York, NY 10001</span>
					</div>
				 </div>
			  </div>
			  
			  <div>
				 <h3 className="text-lg font-semibold text-surface-foreground mb-4">Impact</h3>
				 <div className="flex items-baseline gap-2 mb-2">
					<span className="text-3xl font-bold text-health-accent">50+</span>
					<span className="text-sm text-surface-foreground/70">Countries</span>
				 </div>
				 <p className="text-xs text-surface-foreground/60">
					Supporting millions with essential medical supplies since 2002.
				 </p>
			  </div>
			</div>
			
			<div className="mt-16 pt-8 border-t border-glass-border flex flex-col sm:flex-row justify-between items-center gap-4">
			  <p className="text-xs text-surface-foreground/60">
				 © 2024 Aid Connect. All rights reserved.
			  </p>
			  <div className="flex items-center gap-1 text-xs text-surface-foreground/60">
				<span>Built with</span>
				<Heart className="h-3 w-3 text-health-accent fill-health-accent" />
				<span>for humanitarian aid</span>
			  </div>
			</div>
		 </div>
	  </footer>
	)
 }
  
 export default Footer