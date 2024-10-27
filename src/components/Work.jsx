import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhoneMockup from './PhoneMockup';
import Worksection from './Worksection';


gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    // Animation for scaling down and fading the h1 text when scrolling
    gsap.fromTo(
      "#project",
      { scale: 1, opacity: 1 },
      {
        scale: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: "#project",
          start: "top center",
          end: "top top",
          scrub: true,
        },
      }
    );

    // Animation for sliding in from the right
    gsap.from("#moveright", {
      x: "100%",
      opacity: 0,
      scrollTrigger: {
        trigger: "#moveright",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });

    // Animation for sliding in from the left
    gsap.from("#moveleft", {
      x: "-100%",
      opacity: 0,
      scrollTrigger: {
        trigger: "#moveleft",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });

   
  }, []);

  return (
    <section>
      <div id='firstdiv' className="h-[40vh] md:h-[70vh] bg-[#1B1C1D] rounded-tl-3xl rounded-tr-3xl p-5 flex items-center justify-center">
        <h1 id="project" className="font-black text-6xl text-[#FAF7F0]  md:text-8xl lg:text-9xl">
          PROJECTS<span className="text-red-500">.</span>
        </h1>
      </div>
      <div id='snddiv' className=" bg-[#1B1C1D] h-screen p-10 md:p-5 w-full flex gap-2"> 
        <div id="moveleft" className="w-1/3   hidden md:flex items-center justify-center">
          <p className="font-bold text-[#FAF7F0] px-20 text-wrap text-5xl text-center">
          Social media connects and inspires communities.
          </p>
          <img className='absolute h-36 w-36 top-[9%] left-[46%] -rotate-12' src='https://res.cloudinary.com/dgtcjadsp/image/upload/v1729996901/t_1_nvyvbo.png' />
          <img className='absolute h-36 w-36 bottom-[9%] left-[46%] rotate-12' src='https://res.cloudinary.com/dgtcjadsp/image/upload/v1729996901/t_1_nvyvbo.png' />
        </div>
        <div id="yellow" className="w-full md:w-1/3 flex   items-center justify-center">
          <PhoneMockup />
        </div>
        <div id="moveright" className="w-1/3 hidden md:flex   items-center justify-center">
          <p className="font-thin text-[#FAF7F0] px-20 text-wrap text-xl text-center p-5">
            So many voices unite, shaping our digital world every day.
          </p>
        </div>
      </div>
      <Worksection/>
    </section>
  );
}

export default Work;
