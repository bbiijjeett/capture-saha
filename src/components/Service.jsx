import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Service = () => {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  // Handle hover in (onMouseEnter)
  const handleMouseEnter1 = () => {
    gsap.to(cardRef1.current, {
      rotateZ: -5,    // Rotate a bit
      scale: 1.05,    // Slightly scale up
      duration: 0.8,
      ease: "power3.out",
    });
  };

  // Handle hover out (onMouseLeave)
  const handleMouseLeave1 = () => {
    gsap.to(cardRef1.current, {
      rotateZ: 0,   // Reset rotation
      scale: 1,       // Reset scale
      duration: 0.8,
      ease: "power3.out",
    });
  };

  // Handle hover in (onMouseEnter)
  const handleMouseEnter2 = () => {
    gsap.to(cardRef2.current, {
      rotateZ: -5,    // Rotate a bit
      scale: 1.05,    // Slightly scale up
      duration: 0.8,
      ease: "power3.out",
    });
  };

  // Handle hover out (onMouseLeave)
  const handleMouseLeave2 = () => {
    gsap.to(cardRef2.current, {
      rotateZ: 0,   // Reset rotation
      scale: 1,       // Reset scale
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <section className=' bg-white'>
      <div className='h-fit bg-[#1B1C1D] rounded-tl-3xl rounded-tr-3xl p-10 md:p-24 text-white'>
        <h1 className='text-center text-4xl md:text-7xl font-bold mb-2'>Our Services</h1>
        <p className='text-center text-lg md:text-2xl font-medium mb-5'>We specialise in creating eye-catching visuals, modern brand identities, innovative products, and immersive websites.</p>
        <div className='h-full w-full'>
          <div className="flex h-full w-full items-center justify-center">
            <div className="grid h-full text-black w-full gap-4 p-2 grid-cols-4 md:grid-cols-4 grid-rows-4 md:grid-rows-8 lg:grid-rows-4  ">
            
              <div 
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1} 
                  className="col-span-4 md:col-span-2 lg:col-span-1 row-span-1  md:row-span-4 lg:row-span-2  bg-[#C3B2E7] rounded-3xl flex flex-col items-start justify-between p-5"
              >
                <img 
                  ref={cardRef1}
                  src='https://framerusercontent.com/images/wFZnFg2QuRUX8dfQ76F3mEHw.png?scale-down-to=512' 
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateZ(0deg)", // Initial state from your HTML
                  }}
                />
                <h1 className='font-semibold text-2xl'>Branding</h1>
                <p className='font-light text-lg'>Visual Identity, Brand Style Guide & Collateral Design</p>
              </div>
            
              <div 
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2} 
              className="col-span-4 md:col-span-2 lg:col-span-1 row-span-1  md:row-span-2 bg-[#F682A5] rounded-3xl shadow-md flex flex-col items-start justify-between p-5">
                <img 
                  ref={cardRef2}
                  src='https://framerusercontent.com/images/RYpKKSBoLFgB7aqmjNh8WP5qw.png?scale-down-to=512' 
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateZ(0deg)", // Initial state from your HTML
                  }}
                />
                <h1 className='font-semibold text-2xl'>Graphic Design</h1>
                <p className='font-light text-lg'>Social Media Posts, Pitch Decks, Ad Sets & More </p>
              </div>
            
              <div className="col-span-4 md:col-span-2 lg:col-span-1 row-span-1  md:row-span-2 bg-[#C7D88E] rounded-3xl shadow-md flex flex-col items-start justify-between p-5">
                <img src='https://framerusercontent.com/images/NNxAIIEmTcDY7V3SfE18W74BY.png?scale-down-to=512' />
                <h1 className='font-semibold text-2xl'>Video & Animation</h1>
                <p className='font-light text-lg'>Short and Long form video content</p>
              </div>
            
              <div className="col-span-4 md:col-span-2 lg:col-span-1 row-span-1  md:row-span-2 bg-[#FEDF6F] rounded-3xl shadow-md flex flex-col items-start justify-between p-5">
                <img src='https://framerusercontent.com/images/tpf8QGix2GTOb6HkST9kfujmY.png?scale-down-to=512' />
                <h1 className='font-semibold text-2xl'>AI Image Gen</h1>
                <p className='font-light text-lg'>Transforming Concepts into Stunning Visuals</p>
              </div>
            
              <div className="col-span-4 md:col-span-2 row-span-1  md:row-span-2 bg-[#F9A474] rounded-3xl shadow-md flex flex-col items-start justify-between p-5">
                <img className='h-[10rem]' src='https://framerusercontent.com/images/lj05O0hguBD6eSyg4PvW0Qi8Ckg.png?scale-down-to=512' />
                {/* <img className='h-[10rem]' src='https://miro.medium.com/v2/resize:fit:1200/0*5oiuLeF3ZzHCLBCc.gif' /> */}
                
                <h1 className='font-semibold text-2xl'>UX Design and Dev</h1>
                <p className='font-light text-lg'>App Design, Prototyping, Interaction Design, 2D Motion Design & App Development</p>
              </div>
            
              <div className="col-span-4 md:col-span-4 lg:col-span-2 row-span-1  md:row-span-2 bg-[#B8CEDC] rounded-3xl shadow-md flex flex-col items-start justify-between p-5">
                <img className='h-[10rem]' src='https://framerusercontent.com/images/kbgzlNWmK2r8sS8NRzN9FDabr6s.png?scale-down-to=512' />
                <h1 className='font-semibold text-2xl'>Social SEO</h1>
                <p className='font-light text-lg'>Skyrocket your Social Media Presence on Autopilot with little to no Additional Time or Effort Required.</p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service