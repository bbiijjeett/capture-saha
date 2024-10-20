import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroVideo from '../assets/video/hero.mp4';
import TextReveal from "@/components/ui/text-reveal";



gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  

  useEffect(() => {
    gsap.fromTo(
      '#first',
      { scale: 1, opacity: 1 },
      {
        scale: 0.8,
        opacity: 0.5,
        scrollTrigger: {
          trigger: '#second',
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section>
      <div className='min-h-screen bg-[#1B1C1D] flex items-center justify-center'>
        <div id="first" className='h-screen w-full overflow-hidden  lg:p-24'>
          <video className='w-full h-full rounded-3xl  object-cover hover:aspect-square' src={HeroVideo} autoPlay loop muted />
        </div>
      </div>
      <div id="second" className='min-h-screen w-full bg-[#1B1C1D] flex flex-row '>
          <div className=' w-full' >
            <TextReveal className='text-white' text="We are KreateWave. We are a team of talented individuals who are passionate about creating innovative solutions for our clients." />
          </div>
      </div>
    </section>

  )
}

export default Hero