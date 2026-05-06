import Image from 'next/image';
import heroImg from '../../../public/images/hero.png'
import ButtonUi from '../components/layout/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: "50+", label: "Project Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "1+", label: "Years of Experience" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="relative min-h-screen  text-white flex flex-col justify-between overflow-hidden font-sans">
      
      {/* Background Decorative Text (The large "TYGAR" outline) */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden opacity-10">
        <h1 className="text-[22vw] font-bold leading-none tracking-tighter text-transparent stroke-white" 
            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>
          RAZA
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6  flex flex-col md:flex-row items-center justify-between flex-grow">
        
        {/* Left Column: Text Content */}
        <div className="max-w-2xl mb-12 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">
            Turning <span className="relative inline-block">
              <span className="text-[#C8102E]">Ideas</span>
              {/* The red box outline around "Ideas" */}
              <span className="absolute -inset-1 border border-red-600/50 rounded-sm"></span>
              <span className="absolute -top-1 -left-1 w-1 h-1 bg-red-600"></span>
              <span className="absolute -top-1 -right-1 w-1 h-1 bg-red-600"></span>
              <span className="absolute -bottom-1 -left-1 w-1 h-1 bg-red-600"></span>
              <span className="absolute -bottom-1 -right-1 w-1 h-1 bg-red-600"></span>
            </span> Into <br />
            Digital Reality
          </h1>

          <div className="flex items-center gap-6">
           <ButtonUi text="Start a Project" href="/project" />
            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
              See Our Work 
              <span className="group-hover:translate-x-1 transition-transform"><ArrowRight /></span>
            </button>
          </div>
        </div>

        {/* Right Column: Character Image */}
        <div className="relative w-full max-w-lg md:max-w-[600px]">
           {/* Replace this src with your 3D girl image */}
          <Image 
            src={heroImg} 
            alt="3D Character" 
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="relative z-10 ">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
          
          {/* Red Dot Grid Icon Left */}
          <div className="hidden lg:grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-[#C8102E] rounded-full opacity-60"></div>
            ))}
          </div>

          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-4xl md:text-5xl font-[500]">{stat.value}</span>
              <p className="text-xs md:text-sm text-gray-400 leading-tight w-20">
                {stat.label}
              </p>
            </div>
          ))}

          {/* Red Dot Grid Icon Right */}
          <div className="hidden lg:grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-[#C8102E] rounded-full opacity-60"></div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}