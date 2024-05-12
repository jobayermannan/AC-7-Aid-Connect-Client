'use client'

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";



const medicalSupply = [
	{
	  quote: "Empowering communities through health education.",
	  name: "Public Health Basics",
	  title: "Learn about the fundamentals of public health, including disease prevention, health promotion, and the importance of community health initiatives. This course covers topics such as epidemiology, global health challenges, and strategies for health advocacy."
	},
	{
	  quote: "Bridging the gap between emergency response and long-term recovery.",
	  name: "Disaster Response and Recovery",
	  title: "Explore the principles of effective disaster response and recovery efforts, focusing on the role of medical supplies and healthcare services. Topics include emergency medical response, supply chain management in crises, and the psychosocial aspects of disaster recovery."
	},
	{
	  quote: "Understanding the essentials of life-saving support.",
	  name: "First Aid and Emergency Care",
	  title: "Gain essential knowledge and skills in first aid and emergency care, crucial for immediate post-disaster scenarios. This course covers basic life support, wound care, and the management of common injuries and emergencies."
	},
	{
	  quote: "Strengthening the foundation of community health.",
	  name: "Healthcare System Strengthening",
	  title: "Dive into the strategies for strengthening healthcare systems, especially in resource-limited settings. Learn about health system components, the role of technology and innovation, and approaches to improve healthcare delivery and patient outcomes."
	},
	{
	  quote: "Navigating the complexities of mental health in crisis situations.",
	  name: "Mental Health in Disasters",
	  title: "Focus on the importance of mental health support during and after disasters. This course provides insights into common mental health challenges, trauma-informed care, and strategies for supporting community resilience and recovery."
	},
	{
	  quote: "The art and science of delivering care in challenging environments.",
	  name: "Mobile Clinics and Field Medicine",
	  title: "Examine the operation of mobile clinics and the practice of field medicine in disaster zones and remote areas. Topics include logistical challenges, the adaptation of medical practices to field conditions, and the importance of flexibility and innovation in healthcare delivery."
	}
 ];
 

 


const ProviderTestimonials = () => {
  return (
	 <div className=" h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
		<h2 className="text-3xl text-center font-bold z-100 mb-10"> Hear Our  Harmony: Voices of Success</h2>
	           <div className="w-full  flex justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
					<div className="w-full max-w-6xl">
					<InfiniteMovingCards
        items={ medicalSupply}
        direction="right"
        speed="normal"
      />
					</div>
				  </div>
	 </div>
  )
}

export default ProviderTestimonials