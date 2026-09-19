import { Link } from "react-router-dom";
import { ShadButton } from "@/components/ui/base/ShadButton";

const webinars = [
	{
	  slug: "supply-chain-fundamentals",
	  title: "Supply Chain Fundamentals",
	  description: "Core principles of medical supply chain management in humanitarian contexts. Covers procurement, inventory control, and last-mile delivery in crisis settings.",
	  isFeatured: true
	},
	{
	  slug: "crisis-coordination",
	  title: "Crisis Coordination",
	  description: "How to align multiple actors — NGOs, governments, donors — during emergency responses. Case studies from recent disaster zones.",
	  isFeatured: false
	},
	{
	  slug: "inventory-tech",
	  title: "Inventory Technology",
	  description: "Practical guide to barcode systems, real-time dashboards, and offline-first tools for field inventory tracking.",
	  isFeatured: true
	},
	{
	  slug: "donor-engagement",
	  title: "Donor Engagement",
	  description: "Transparency best practices that build donor trust. How to report impact without overwhelming non-technical stakeholders.",
	  isFeatured: false
	},
	{
	  slug: "cold-chain-logistics",
	  title: "Cold Chain Logistics",
	  description: "Maintaining vaccine and biologic integrity from warehouse to clinic. Temperature monitoring, cold packs, and contingency planning.",
	  isFeatured: false
	},
	{
	  slug: "data-ethics",
	  title: "Data Ethics in Aid",
	  description: "Protecting beneficiary data while enabling cross-org coordination. Consent, encryption, and responsible data sharing frameworks.",
	  isFeatured: false
	}
  ];

const UpComingWebinars = () => {
  return (
	 <section className="relative py-24 overflow-hidden">
		<div className="absolute inset-0 bg-gradient-to-b from-black via-surface/20 to-black -z-10" />
		
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="text-center mb-16">
				<p className="text-sm font-semibold tracking-widest uppercase text-health-accent mb-3">
					Learning hub
				</p>
				<h2 className="text-3xl md:text-4xl font-bold text-surface-foreground tracking-tight">
					Upcoming Webinars
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{webinars.map((webinar) => (
					<div key={webinar.slug} className="glass rounded-2xl p-6">
						<h3 className="text-lg font-semibold text-surface-foreground mb-2">{webinar.title}</h3>
						<p className="text-sm text-surface-foreground/70">{webinar.description}</p>
					</div>
				))}
			</div>

			<div className="mt-12 text-center">
				<ShadButton 
					variant="outline"
					className="border-glass-border text-surface-foreground hover:bg-surface/10 hover:text-health-accent"
				>
					<Link to="/">View All Webinars</Link>
				</ShadButton>
			</div>
		</div>
	</section>
  )
}

export default UpComingWebinars