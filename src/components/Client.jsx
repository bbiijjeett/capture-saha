import React,{useRef,useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { 
    "id": 1,
    "companyName": "Modern Living Architects",
    "testimonial": "The team brought our vision to life with a sleek and modern website. Their attention to detail and ability to capture our brand essence exceeded expectations!",
    "client": "Sarah M., Head Architect",
    "image":"https://static.wixstatic.com/media/3d4741_bf227dbff4dc47ee9402ad6915b67af8~mv2.jpg/v1/fill/w_438,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/nedladdning%20(22)_edited.jpg"
  },
  { 
    "id": 2,
    "companyName": "GreenLeaf Eco Solutions",
    "testimonial": "Their social media campaigns increased our engagement by 200%! We love how they creatively market our eco-friendly products.",
    "client": "John D., Marketing Director",
    "image":"https://static.wixstatic.com/media/3d4741_d22a2ed787544823bc300211b5d9334e~mv2.jpg/v1/fill/w_438,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/JOOOOLI_edited%20(1)_edited.jpg"
  },
  { 
    "id": 3,
    "companyName": "Bluewave Fitness Studio",
    "testimonial": "They transformed our website into a dynamic, user-friendly platform. Membership signups skyrocketed, and the design perfectly reflects our energetic brand!",
    "client": "Amanda P., Studio Owner",
    "image":"https://static.wixstatic.com/media/3d4741_c8c389ebd3654ec7950a3f02756718dd~mv2.png/v1/fill/w_438,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/roza_edited.png"
  },
  {
    "id": 4,
    "companyName": "Apex Real Estate",
    "testimonial": "Their performance marketing strategies have consistently delivered high-quality leads. We've seen a huge ROI in our digital ad spend.",
    "client": "Paul H., CEO",
    "image":"https://static.wixstatic.com/media/3d4741_7b03f9ea1e1d4e1fa6ff6fa19503b7fb~mv2.jpg/v1/fill/w_438,h_438,fp_0.39_0.21,q_80,usm_0.66_1.00_0.01,enc_auto/favo-instagram-1---kopia_edited.jpg"
  },
  {
    "id": 5,
    "companyName": "Tasteville Restaurant Group",
    "testimonial": "Our website redesign brought us into the digital age, with seamless online reservations and a mouthwatering menu layout. Customers love the new experience!",
    "client": "Liam K., Co-Founder",
    "image":"https://static.wixstatic.com/media/3d4741_bb40fc086580434ebef0b32515f31529~mv2.png/v1/fill/w_438,h_438,fp_0.53_0.35,q_85,usm_0.66_1.00_0.01,enc_auto/LOTTA_edited%20(1)_edited_edited_edited.png"
  },
  {
    "id": 6,
    "companyName": "UrbanStyle Fashion",
    "testimonial": "The eCommerce site they built for us is a game-changer. Not only does it look great, but it's also boosted our sales by 30% in just 3 months!",
    "client": "Emma R., Brand Manager",
    "image":"https://static.wixstatic.com/media/3d4741_4a983889c4954b00b6c9d2f943acb439~mv2.jpg/v1/fill/w_438,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DALL%C2%B7E%202023-06-05%2017_41_00%20-%20prolong%20the%20background%20of%20the%20imager_edited.jpg"
  }
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
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-white">


      <div className="absolute inset-0 h-screen rounded-tl-3xl rounded-tr-3xl p-5 flex items-center justify-center z-0" >
        <h1 className="font-black text-4xl sm:text-6xl md:text-7xl lg:text-9xl">
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
              <div className="absolute top-0 left-0 w-3/5 h-full p-4 bg-gradient-to-r from-black to-transparent opacity-0 group-hover:opacity-100  transition-all duration-500 ease-in-out">
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