
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


const Service = () => {

  const serviceRefs = useRef([]);
  const serviceTitleRefs = useRef([]);

  const imgRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const elmtRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const directions = [
    { x: -100, y: 0 }, // from left
    { x: 100, y: 0 },  // from right
    { x: 0, y: -100 }, // from top
    { x: 0, y: 100 },  // from bottom
    { x: -100, y: 100 }, // from top-left
    { x: 100, y: -100 }  // from bottom-right
  ];

  useEffect(() => {
    elmtRefs.forEach((elmtRefs, i) => {
      gsap.fromTo(
        elmtRefs.current,
        { opacity: 0, x: directions[i].x, y: directions[i].y, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elmtRefs.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.fromTo(
      serviceRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: serviceRefs.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      serviceTitleRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: serviceTitleRefs.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

  }, []);

  const animateImage = (imgRef, scale, rotateZ) => {
    gsap.to(imgRef.current, {
      scale,
      rotateZ,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <section  className="bg-[#1B1C1D]">
      <div id='serviceSection'  className="h-fit bg-[#FAF7F0] rounded-tl-3xl rounded-tr-3xl p-10 md:p-24 text-[#1B1C1D]">
        <h1 ref={serviceRefs} id="serviceTag" className="text-center text-4xl md:text-7xl font-bold mb-2">Our Services</h1>
        <p ref={serviceTitleRefs} className="text-center text-lg md:text-2xl font-medium mb-5">
          We specialize in creating eye-catching visuals, modern brand identities, innovative products, and immersive websites.
        </p>
        <div  className="h-full w-full">
          <div className="flex h-full w-full items-center justify-center">
            <div className="grid h-full text-black w-full gap-4 p-2 grid-cols-4 md:grid-cols-4 grid-rows-4 md:grid-rows-8 lg:grid-rows-4">
              
              <div ref={elmtRefs[0]}  className="col-span-4 md:col-span-2 lg:col-span-1 row-span-1 md:row-span-4 lg:row-span-2 bg-[#77aaff] rounded-3xl flex flex-col items-start justify-between p-5">
              
                <img
                  ref={imgRefs[0]}
                  onMouseEnter={() => animateImage(imgRefs[0], 1.05, -5)}
                  onMouseLeave={() => animateImage(imgRefs[0], 1, 0)}
                  className="w-2/3 object-cover"
                  
                  src="https://opendoodles.s3-us-west-1.amazonaws.com/clumsy.svg"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                />
                <h1 className="font-semibold text-2xl">Branding</h1>
                <p className="font-light text-lg">Brand Identity, Style Guide, and Collateral Design.</p>
              </div>

              
              <div ref={elmtRefs[1]} className="col-span-4 md:col-span-2 lg:col-span-1 row-span-1 md:row-span-2 bg-[#EB2C5D] rounded-3xl shadow-md flex flex-col items-start justify-between p-5">
               
                <img
                  ref={imgRefs[1]}
                  onMouseEnter={() => animateImage(imgRefs[1], 1.05, -5)}
                  onMouseLeave={() => animateImage(imgRefs[1], 1, 0)}
                  className="w-2/3 object-cover"
                  src="https://opendoodles.s3-us-west-1.amazonaws.com/zombieing.svg"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                />
                <h1 className="font-semibold text-2xl">Graphic Design</h1>
                <p className="font-light text-lg">Social Media Content, Pitch Decks, Ad Campaigns, and More.</p>
              </div>

             
              <div ref={elmtRefs[2]} className="col-span-4 md:col-span-2 lg:col-span-1 row-span-1 md:row-span-2 bg-[#C7D88E] rounded-3xl shadow-md flex flex-col items-start justify-between p-5">
            
                <img
                  ref={imgRefs[2]}
                  onMouseEnter={() => animateImage(imgRefs[2], 1.05, -5)}
                  onMouseLeave={() => animateImage(imgRefs[2], 1, 0)}
                  className="  w-2/3 object-cover"
                  src="https://opendoodles.s3-us-west-1.amazonaws.com/reading-side.svg"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                />
                <h1 className="font-semibold text-2xl">Video & Animation</h1>
                <p className="font-light text-lg">Editing for Short and Long-Form Video Content.</p>
              </div>


              <div ref={elmtRefs[3]}  className="col-span-4 md:col-span-2 lg:col-span-1 row-span-1 md:row-span-2 bg-[#F8C93C] rounded-3xl shadow-md flex flex-col items-start justify-between p-5">
 
                <img
                  ref={imgRefs[3]}
                  onMouseEnter={() => animateImage(imgRefs[3], 1.05, -5)}
                  onMouseLeave={() => animateImage(imgRefs[3], 1, 0)}
                  className="  w-2/3 object-cover"
                  src="https://opendoodles.s3-us-west-1.amazonaws.com/sprinting.svg"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                />
                <h1 className="font-semibold text-2xl">Photography</h1>
                <p className="font-light text-lg">Capturing moments with stunning visual storytelling.</p>
              </div>

              <div ref={elmtRefs[4]}  className="col-span-4 md:col-span-2 row-span-1 md:row-span-2 bg-[#FC6840] rounded-3xl shadow-md flex flex-col items-start justify-between p-5">
                
                <img
                  ref={imgRefs[4]}
                  onMouseEnter={() => animateImage(imgRefs[4], 1.05, -5)}
                  onMouseLeave={() => animateImage(imgRefs[4], 1, 0)}
                  className="  w-1/2 sm:w-1/3 object-cover"
                  src="https://opendoodles.s3-us-west-1.amazonaws.com/meditating.svg"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                />
                <h1 className="font-semibold text-2xl">UX Design and Dev</h1>
                <p className="font-light text-lg">App Design, Prototyping, Web Design, and Web Development.</p>
              </div>

              
              <div ref={elmtRefs[5]}  className="col-span-4  md:col-span-4 lg:col-span-2 row-span-1 md:row-span-2 bg-[#74b8e1] rounded-3xl shadow-md flex flex-col items-start justify-between p-5">
                
                <img
                  ref={imgRefs[5]}
                  onMouseEnter={() => animateImage(imgRefs[5], 1.05, -5)}
                  onMouseLeave={() => animateImage(imgRefs[5], 1, 0)}
                  className=" w-1/2 sm:w-1/3   object-cover"
                  src="https://opendoodles.s3-us-west-1.amazonaws.com/loving.svg"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                />
                <h1 className="font-semibold text-2xl">Social Media Marketing and SEO</h1>
                <p className="font-light text-lg">Boost Your Social Media Presence Effortlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
