'use client'

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
	{
	  quote: "Aid Connect streamlined our medical supply distribution after the earthquake. We reached 12 remote clinics in 48 hours — something that used to take weeks.",
	  name: "Dr. Sarah Chen",
	  title: "Field Coordinator, Red Cross"
	},
	{
	  quote: "The transparency features gave our donors real-time confidence. Donations increased 40% once we could show exactly where supplies went.",
	  name: "Marcus Osei",
	  title: "Director, Global Health Alliance"
	},
	{
	  quote: "In disaster zones, every minute counts. This platform cut our procurement-to-delivery timeline by more than half.",
	  name: "Nurse Amara Diallo",
	  title: "MSF Logistics Lead"
	},
	{
	  quote: "We coordinated cross-border shipments from six different warehouses without a single spreadsheet. That is the future of humanitarian logistics.",
	  name: "James Whitfield",
	  title: "Supply Chain Director, UNICEF"
	},
	{
	  quote: "Finally, a tool built for the reality of crisis response — not for a quiet office. The offline-first approach saved us when networks were down.",
	  name: "Dr. Elena Voss",
	  title: "Emergency Medicine, WHO"
	},
	{
	  quote: "Our team used to spend days reconciling donor requests with available stock. Now it happens in minutes, with full audit trails.",
	  name: "Raj Patel",
	  title: "Operations Manager, Direct Relief"
	}
  ];
  

const ProviderTestimonials = () => {
  return (
	 <section className="relative py-24 overflow-hidden">
		<div className="absolute inset-0 bg-gradient-to-b from-black via-surface/20 to-black -z-10" />
		
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="text-center mb-16">
				<p className="text-sm font-semibold tracking-widest uppercase text-health-accent mb-3">
					Trusted by humanitarian leaders
				</p>
				<h2 className="text-3xl md:text-4xl font-bold text-surface-foreground tracking-tight">
					Voices from the Field
				</h2>
			</div>

			<div className="w-full flex justify-center">
				<div className="w-full max-w-6xl glass rounded-3xl p-2">
				<InfiniteMovingCards
					items={testimonials}
				/>
				</div>
			</div>
		</div>
	 </section>
  )
}

export default ProviderTestimonials