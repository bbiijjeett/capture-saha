import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Test = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach((section, index) => {
        gsap.to(section, {
          y: scrollY * (index % 2 === 0 ? 0.5 : -0.5),
          ease: 'power2.out',
        });
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='bg-white'>
      <div className='h-screen w-full flex justify-center items-center bg-white section'>1</div>
      <div className='h-screen w-full flex justify-center items-center bg-black rounded-tl-3xl rounded-tr-3xl section'>2</div>
      <div className='h-screen w-full flex justify-center items-center bg-white rounded-tl-3xl rounded-tr-3xl section'>3</div>
      <div className='h-screen w-full flex justify-center items-center bg-black rounded-tl-3xl rounded-tr-3xl section'>4</div>
      <div className='h-screen w-full flex justify-center items-center bg-white rounded-tl-3xl rounded-tr-3xl section'>5</div>
    </section>
  );
};

export default Test;
