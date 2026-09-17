import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { WavyBackground } from "@/components/ui/wavy-background";

const donors = [
    {
      id: 1,
      name: 'Elena Briggs',
      designation: 'Global Health Foundation',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      name: 'Marcus Reid',
      designation: 'Aid Alliance',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
    {
      id: 3,
      name: 'Julia Zhang',
      designation: 'Community Health Trust',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      name: 'Andre Gomez',
      designation: 'Emergency Response Fund',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
  ];
  
export function OurDonors() {
  return (
    <section className="relative h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden">
       <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-4">
              Our Donors
            </h2>
            <p className="text-base md:text-lg text-white/80 text-center mb-10 max-w-2xl">
              The organizations and foundations that make emergency medical supply possible
            </p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={donors} />
            </div>
        </WavyBackground>
    </section>
  );
}