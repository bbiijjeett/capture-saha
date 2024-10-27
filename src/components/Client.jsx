import React,{useRef,useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { 
    "id": 1,
    "companyName": "Rento",
    "testimonial": "Saumajyoti was a fantastic addition to the Rento team as our Content Creator and Video Editor. He knew just how to make our properties stand out and keep things looking top-notch. Highly recommended for any creative role,he will do a great job!",
    "client": "Sarah M., Head Architect",
    "image":"https://res.cloudinary.com/dgtcjadsp/image/upload/v1729995997/rento_iumzky.svg"
  },
  { 
    "id": 2,
    "companyName": "Easybuy",
    "testimonial": "Their social media campaigns increased our engagement by 200%! We love how they creatively market our eco-friendly products.",
    "client": "John D., Marketing Director",
    "image":"https://res.cloudinary.com/dgtcjadsp/image/upload/v1729995999/easybuy_fuzwlq.svg"
  },
  { 
    "id": 3,
    "companyName": "Eatit",
    "testimonial": "They transformed our website into a dynamic, user-friendly platform. Membership signups skyrocketed, and the design perfectly reflects our energetic brand!",
    "client": "Amanda P., Studio Owner",
    "image":"https://res.cloudinary.com/dgtcjadsp/image/upload/v1729996289/eatit_s8fxlw.svg"
  },
  {
    "id": 4,
    "companyName": "JD Institute Of Fashion Technology Official",
    "testimonial": "Their performance marketing strategies have consistently delivered high-quality leads. We've seen a huge ROI in our digital ad spend.",
    "client": "Paul H., CEO",
    "image":"https://res.cloudinary.com/dgtcjadsp/image/upload/v1729996288/jdinstitute_eyld70.svg"
  },
];

const Client = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    // GSAP Horizontal Scroll Effect
    gsap.to(container, {
      x: () => -(container.scrollWidth - section.offsetWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => "+=" + container.scrollWidth,
        start: "top top",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#1B1C1D] rounded-3xl">


      <div className="absolute inset-0 h-screen  p-5 flex items-center justify-center z-0" >
        <h1 className="font-black text-[#FAF7F0] text-4xl sm:text-6xl md:text-7xl lg:text-9xl">
          CLIENT<span className="text-red-500">.</span>
        </h1>
      </div>


      <div 
        ref={containerRef} 
        className="h-screen bg-transparent flex items-center gap-[10rem] z-10"
        style={{ transform: 'translateX(10vw)', paddingRight: '50vw' }} // Start in the middle
      >
        {testimonials.map((i, index) => (
          <div 
            key={i.id} 
            className={`relative group w-[22rem] h-[22rem] flex-shrink-0 ${index % 2 === 0 ? 'translate-y-8' : '-translate-y-8'}`} // Conditional up/down positioning
          >
            <div className="relative w-full h-full overflow-hidden rounded-sm">
              <img
                src={i.image}
                alt="client"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0  -translate-x-1  w-3/5 h-full p-4 bg-gradient-to-r from-black to-transparent opacity-0 group-hover:opacity-100  transition-all duration-500 ease-in-out">
                <p className="text-white text-lg font-bold">{i.companyName}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100  transition-all duration-500 ease-in-out">
                <p className="text-white text-sm italic">"{i.testimonial}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;