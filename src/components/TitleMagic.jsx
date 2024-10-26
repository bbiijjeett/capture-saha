
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './TitleMagic.css';

const TitleMagic = () => {

  const letters = ['K', 'r', 'e', 'a', 't','e','W','a','v','e'];
  const letterRefs = useRef([]);

  useEffect(() => {
    letterRefs.current.forEach((el, idx) => {
      // Initial animations with delay
      // Apply initial animations using GSAP
    //   gsap.fromTo(
    //     el,
    //     { opacity: 0, y: -50 },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       delay: 0.5 * idx,
    //       duration: 0.8,
    //       ease: 'power3.out',
    //     }
    //   );
    setTimeout(() => {
        el.classList.add('active');
      }, 500 * idx);

      


      el.addEventListener('click', () => {
        el.classList.add('active');
      });

      el.addEventListener('animationend', () => {
        el.classList.remove('active');
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center  text-[#333333] font-anton">
      <div className="word flex space-x-2 mt-20">
        {letters.map((letter, idx) => (
          <span
            key={idx}
            ref={(el) => (letterRefs.current[idx] = el)}
            className="cursor-pointer font-black   text-4xl md:text-7xl  lg:text-9xl leading-none select-none"
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TitleMagic