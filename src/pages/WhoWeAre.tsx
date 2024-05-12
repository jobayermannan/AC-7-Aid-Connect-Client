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
 
 console.log(whoWeAre);

const WhoWeAre = () => {
  return (
	 <div className="p-10">
		<StickyScroll content={whoWeAre}/>
	 </div>
  )
}

export default WhoWeAre