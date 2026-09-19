import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import React from 'react';
import profile from "../assets/profile.jpg";
import { MapPin, Calendar, ArrowRight, Phone } from "lucide-react";
import Balls from "./Balls";

const Hero = () => {

  const multiple_text = useRef(null);

  useEffect(() => {
    if (multiple_text.current) {
      const typed = new Typed(multiple_text.current, {
        strings: [ ' Web Developer',  'Web Designer'],
        typeSpeed: 80,
        backSpeed: 80,
        color: '#adff2f',
        backDelay: 1200,
        loop: true
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);


  return (
      <section className="min-h-screen  relative flex  px-4 sm:px-6 lg:px-8 pt-19 lg:pt-20
       sm:pt-28 xl:pt-25 pb-8 sm:pb-8 bg-black ">
       
        
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="flex flex-col lg:grid lg:grid-cols-[3fr_4.2fr] gap-6 sm:gap-6 lg:gap-6
               items-center text-center lg:text-left pt-10 ">
               

                  {/* Profile image */}
                    <div className="flex justify-center lg:justify-start mb-6 lg:mb-0 p-10 px-6  ">
                      <img  src={profile} alt="Profile" 
                      className="h-[28vw] w-[28vw] cursor-pointer rounded-full shadow-[0_0_18px_0_#adff2f] 
                      hover:shadow-[0_0_25px_red]
                       transition-[all] duration-[400ms] ease-out animate-floatImage"/>
                    </div>
                    
                    {/* Introduction section */}

                <div className="ml-0 w-full text-white flex flex-col items-start font-mono tracking-tight ">
                    <div>
                      
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">Hello, I am</h3>
                    </div>

                    
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 sm:mb-4">
                      <span className="text-white block mb-0.5 sm:mb-1 font-bold whitespace-nowrap">
                        Oluwaseyi Awoderu
                      </span>
                    </h1>

                    
                    <h3 className="text-2xl sm:text-4xl font-bold mb-3">
                      and I'm a <span className="text-red-500" ref={multiple_text}> Web Developer </span>
                    </h3>

                    <p className="text-md sm:text-base lg:text-lg  max-w-2xl mx-auto lg:mx-0 mb-4 sm:mb-5 leading-relaxed max-w-200px">
                      I am a passionate Web Developer specializing in creating dynamic and responsive web applications. 
                      <code className="bg-gray-200 text-gray-800 rounded px-1 py-0.5"> — focused on delivering high-quality user experiences.</code>
                    </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                  <a href="/form"><button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-red-500
                   text-green-100 backdrop-blur-sm border-4 border-red-500 hover:border-red-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] 
                   rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-black 
                   hover:text-green-400 hover:scale-[1.02] active:bg-white active:text-blue-950 active:scale-[1.02] 
                   focus-visible:scale-[1.02] flex items-center justify-center space-x-2">
                        <div className="flex items-center space-x-2">
                          <Calendar  className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Download CV</span>
                        </div>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 group-active:translate-x-1 transition-transform duration-300" />
                  </button></a>
            </div>
          </div>
{/* --------------------------------------------------------------------- */}


              </div>
            </div>
    </section>
  );
};

export default Hero;