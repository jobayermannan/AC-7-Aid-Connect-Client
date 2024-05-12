

import { Link } from "react-router-dom";
import { HoverEffect } from "../components/ui/card-hover-effect";



const UpComingWebinars = () => {

	const AidWebiners = [
		{
		  slug: "brain-and-behavior",
		  title: "Brain and Behavior",
		  description: "Discover the structure and function of the brain as it relates to specific psychological processes and behaviors. This course covers topics such as brain anatomy, neuroplasticity, and the neurological basis of memory, emotion, language, and mental disorders.",
		  isFeatured: true
		},
		{
		  slug: "forensic-psychology",
		  title: "Forensic Psychology",
		  description: "Learn about the application of psychological knowledge to legal issues and court cases. This course covers topics such as criminal profiling, eyewitness testimony, jury decision-making, and the assessment and treatment of offenders.",
		  isFeatured: false
		},
		{
		  slug: "developmental-psychology",
		  title: "Developmental Psychology",
		  description: "Examine the psychological changes that occur throughout a person's life span, from infancy through adulthood. Topics include cognitive and emotional development, language acquisition, and social identity formation.",
		  isFeatured: true
		},
		{
		  slug: "social-psychology",
		  title: "Social Psychology",
		  description: "Study how individuals influence and are influenced by other people and by their social and physical environments. This course covers topics such as attitudes, group behavior, prejudice, interpersonal attraction, and conflict resolution.",
		  isFeatured: false
		},
		{
		  slug: "social-psychology",
		  title: "Social Psychology",
		  description: "Study how individuals influence and are influenced by other people and by their social and physical environments. This course covers topics such as attitudes, group behavior, prejudice, interpersonal attraction, and conflict resolution.",
		  isFeatured: false
		},
		{
		  slug: "social-psychology",
		  title: "Social Psychology",
		  description: "Study how individuals influence and are influenced by other people and by their social and physical environments. This course covers topics such as attitudes, group behavior, prejudice, interpersonal attraction, and conflict resolution.",
		  isFeatured: false
		}
	  ];
	  
	 
  return (
	 <div className="p-12 bg-gray-900">
	  <div className= "max-w-7xl mx-auto px-4 sm:px-6">
	  <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Journey</p>

        </div>
			<div className="mt-10 text-center">
				<HoverEffect
				 items={AidWebiners.map((webinar)=>(
					{
						title:webinar.title,
						description:webinar.description,
						link:'/'
					}
				 ))}
				/>
			</div>
			<div className="mt-10 text-center">
			<Link to={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
			</div>
	  </div>

	 </div>
  )
}

export default UpComingWebinars