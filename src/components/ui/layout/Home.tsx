import FeaturedSection from "@/pages/FeaturedSection";
import Banner from "@/pages/HeroSection";
import { Spotlight } from "../Spotlight";
import ProviderTestimonials from "@/pages/ProviderTestimonials";
import WhoWeAre from "@/pages/WhoWeAre";
import UpComingWebinars from "@/pages/UpComingWebinars";
import { OurDonors } from "@/pages/OurDonors";




const Home = () => {
  return (
	 <div>
		 
		<Banner></Banner> 
	
	<FeaturedSection></FeaturedSection>
	<ProviderTestimonials></ProviderTestimonials>
	
	
	<Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />


	<WhoWeAre></WhoWeAre>
	<UpComingWebinars></UpComingWebinars>
	<OurDonors></OurDonors>
	 </div>
  );
};

export default Home;







