import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


export function AnimatedTestimonialsDemo() {

  const testimonialsRefs = useRef([]);

  useEffect(() => {

    gsap.fromTo(
      testimonialsRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: testimonialsRefs.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

  }, []);

  const testimonials = [
    {
      quote:
        "Saumajyoti was a fantastic addition to the Rento team as our Content Creator and Video Editor. He knew just how to make our properties stand out and keep things looking top-notch. Highly recommended for any creative role,he will do a great job!",
      name: "Rento",
      designation: "- rental platform",
      src: "https://res.cloudinary.com/dgtcjadsp/image/upload/v1729995997/rento_iumzky.svg",
    },
    {
      quote:
        "Their social media campaigns increased our engagement by 200%! We love how they creatively market our eco-friendly products.",
      name: "Easybuy",
      designation: "- eCommerce Store",
      src: "https://res.cloudinary.com/dgtcjadsp/image/upload/v1729995999/easybuy_fuzwlq.svg",
    },
    {
      quote:
        "They transformed our website into a dynamic, user-friendly platform. Membership signups skyrocketed, and the design perfectly reflects our energetic brand!",
      name: "Eatit",
      designation: "- Food Ordering App",
      src: "https://res.cloudinary.com/dgtcjadsp/image/upload/v1729996289/eatit_s8fxlw.svg",
    },
    {
      quote:
        "Their performance marketing strategies have consistently delivered high-quality leads. We've seen a huge ROI in our digital ad spend.",
      name: "JD Institute Of Fashion Technology Official",
      designation: "- Fashion Institute",
      src: "https://res.cloudinary.com/dgtcjadsp/image/upload/v1729996288/jdinstitute_eyld70.svg",
    },
    
  ];
  return (

    

    <section className="bg-[#FAF7F0]">
        <div className="min-h-screen bg-[#1B1C1D] rounded-3xl py-20 px-10 md:p-24 text-[#1B1C1D]">

            <h1 ref={testimonialsRefs} className="text-center text-4xl md:text-7xl font-bold mb-2 text-white">Testimonials</h1>
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    
    </section>
);
}
