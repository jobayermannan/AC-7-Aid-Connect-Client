import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

const whoWeAre = [
	{
	  title: "Our Mission",
	  description: "To save lives and support healthcare systems worldwide by providing timely and efficient delivery of medical supplies to those in need, especially in crisis situations."
	},
	{
	  title: "Our Vision",
	  description: "A world where every community has access to the medical supplies they need to maintain health, respond to emergencies, and support long-term healthcare sustainability."
	},
	{
	  title: "Our History",
	  description: "Founded by healthcare professionals and humanitarian aid workers, we have over two decades of experience in medical logistics, serving communities around the globe."
	},
	{
	  title: "Our Expertise",
	  description: "Specializing in the procurement, management, and distribution of medical supplies, we leverage our expertise to overcome logistical challenges and ensure supplies reach their destination."
	},
	{
	  title: "Our Approach",
	  description: "We combine innovative logistics solutions with a deep understanding of healthcare needs to provide responsive, reliable, and cost-effective supply chain services."
	},
	{
	  title: "Our Team",
	  description: "Our team comprises dedicated professionals from diverse backgrounds, including healthcare, logistics, technology, and humanitarian aid, all united by a common goal to make a difference."
	},
	{
	  title: "Our Partners",
	  description: "We collaborate with a global network of suppliers, NGOs, healthcare providers, and governments to maximize our impact and reach underserved communities."
	},
	{
	  title: "Our Commitment to Quality",
	  description: "We adhere to the highest standards of quality and safety, ensuring that all supplies meet international healthcare regulations and are delivered in optimal condition."
	},
	{
	  title: "Our Technology",
	  description: "Utilizing the latest in supply chain technology, we ensure transparency, efficiency, and real-time tracking of all shipments, from warehouse to delivery."
	},
	{
	  title: "Our Impact",
	  description: "With operations in over 50 countries, we have directly supported millions of individuals by providing essential medical supplies, improving healthcare access, and strengthening healthcare systems."
	}
  ];
  
const WhoWeAre = () => {
  return (
	 <section className="relative py-24 overflow-hidden">
		<div className="absolute inset-0 bg-gradient-to-b from-black via-surface/20 to-black -z-10" />
		
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="text-center mb-16">
				<p className="text-sm font-semibold tracking-widest uppercase text-health-accent mb-3">
					Who we are
				</p>
				<h2 className="text-3xl md:text-4xl font-bold text-surface-foreground tracking-tight">
					Built for the moments that matter most
				</h2>
			</div>

			<div className="glass rounded-3xl p-1 overflow-hidden">
				<StickyScroll content={whoWeAre} />
			</div>
		</div>
	 </section>
  )
}

export default WhoWeAre