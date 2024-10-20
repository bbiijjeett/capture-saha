import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const urls = [
  { id: 1, url: 'https://www.rmcad.edu/wp-content/uploads/2024/04/shutterstock_434383288.jpg' },
  { id: 2, url: 'https://www.rmcad.edu/wp-content/uploads/2024/04/shutterstock_434383288.jpg' },
  { id: 3, url: 'https://www.rmcad.edu/wp-content/uploads/2024/04/shutterstock_434383288.jpg' },
  { id: 4, url: 'https://www.rmcad.edu/wp-content/uploads/2024/04/shutterstock_434383288.jpg' },
  { id: 5, url: 'https://www.rmcad.edu/wp-content/uploads/2024/04/shutterstock_434383288.jpg' }
];

const Workscroll = () => {
  const scrollRef = useRef();
  const postsRef = useRef([]);
  const bgRef = useRef();

  useEffect(() => {
    // ScrollTrigger for background layers
    gsap.fromTo(
      bgRef.current, 
      { y: "0%" }, 
      {
        y: "50%", // Move the background vertically
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top top", 
          end: "bottom bottom",
          scrub: true, // Makes it move with the scroll
        },
      }
    );

    // GSAP animations for posts
    postsRef.current.forEach((post) => {
      if (post) {
        gsap.fromTo(
          post,
          { opacity: 0, y: 100, x: () => Math.random() * 300 * (Math.random() < 0.5 ? -1 : 1) },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: post,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div ref={scrollRef} className="relative mt-screen">
      {/* Fixed background section */}
      <div 
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full bg-gray-300 z-[-1]" // Add z-index to keep it behind
      >
        {/* Background Layers */}
        <div className="w-full h-full bg-white opacity-80 absolute"></div>
        <div className="w-full h-full bg-gray-500 opacity-50 absolute flex items-center justify-center"><h1 className="font-black text-9xl">PROJECTS<span className="text-red-500">.</span></h1></div>
      </div>

      {/* Posts that animate in from the bottom */}
      <div className="space-y-10">
        {urls.map((item, id) => (
          <div
            key={id}
            ref={el => postsRef.current[id] = el}
            className="bg-gray-200 h-64 w-64 mx-auto"
          >
            <img src={item.url} alt="project" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workscroll;
