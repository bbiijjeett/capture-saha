import Footer from '@/components/Footer'
import camera  from '../assets/img/camera.webp'
import max  from '../assets/img/max.webp'
import letter  from '../assets/img/letter.webp'
import phone  from '../assets/img/phone.webp'
import React, { useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {

  const cameraRef = useRef(null);
  const maxRef = useRef(null);
  const letterRef = useRef(null);
  const phoneRef = useRef(null);

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, { 
      display: 'block',
      opacity: 1, 
      y: 0, 
      duration: 0.5, 
      ease: "power2.out" 
    });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, { 
      opacity: 0, 
      y: 20, 
      duration: 0.5, 
      ease: "power2.out" 
    });
  };

  return ( 
    <section className='flex flex-col gap-5 min-h-screen py-20 md:py-28 px-5 md:px-10  bg-[#1B1C1D] '>
      <div className='flex-col h-[80vh] md:h-[70vh] justify-between  md:flex-row bg-[#333435]  rounded-3xl p-5 text-white flex overflow-hidden'>
        <div className='w-1/2 flex flex-col justify-between'>
          <div>
            <p className='text-7xl font-bold'>SAY</p>
            <p className='text-7xl font-bold'>HELLO<span className='text-red-500'>.</span></p>
          </div>
          <div className='hidden md:flex'>
            emoji
          </div>
        </div>
        {/* <div className='w-1/2 flex justify-center items-center relative'>
          <div className='flex flex-col justify-center items-center'>
            <img className='absolute md:translate-y-28 lg:-translate-x-36' src={camera} alt="Camera" />
            <img className='absolute md:translate-y-44 lg:-translate-x-24' src={max} alt="Max" />
            <img className='absolute md:translate-y-[6rem] -rotate-45 lg:left-20' src={letter} alt="Letter" />
            <img className='absolute md:translate-y-28 lg:-translate-x-30' src={phone} alt="Phone" />
          </div>
        </div> */}
        <div className='w-1/2 hidden lg:flex justify-center items-center relative translate-y-32'>
          {/* Image for Instagram */}
          <img 
            ref={cameraRef} 
            className='absolute hidden opacity-0 translate-y-5' 
            src={camera} 
            alt="Camera" 
            // onMouseEnter={() => handleMouseEnter(cameraRef)} 
            // onMouseLeave={() => handleMouseLeave(cameraRef)} 
          />

          {/* Image for LinkedIn */}
          <img 
            ref={maxRef} 
            className='absolute hidden opacity-0 translate-y-5' 
            src={max} 
            alt="Max" 
            // onMouseEnter={() => handleMouseEnter(maxRef)} 
            // onMouseLeave={() => handleMouseLeave(maxRef)} 
          />

          {/* Image for Email */}
          <img 
            ref={letterRef} 
            className='absolute hidden opacity-0 translate-y-5' 
            src={letter} 
            alt="Letter" 
            // onMouseEnter={() => handleMouseEnter(letterRef)} 
            // onMouseLeave={() => handleMouseLeave(letterRef)} 
          />

          {/* Image for Phone */}
          <img 
            ref={phoneRef} 
            className='absolute hidden opacity-0 translate-y-5' 
            src={phone} 
            alt="Phone" 
            // onMouseEnter={() => handleMouseEnter(phoneRef)} 
            // onMouseLeave={() => handleMouseLeave(phoneRef)} 
          />
        </div>

        <div className='w-1/2 flex flex-col justify-around md:flex-row'>
          <div className='p-2 flex flex-col gap-2'>
            <h1 className='font-bold text-2xl'>Social</h1>
            <a 
              href='#' 
              className='font-light hover:text-red-500' 
              onMouseEnter={() => handleMouseEnter(cameraRef)} 
              onMouseLeave={() => handleMouseLeave(cameraRef)}
            >
              Instagram
            </a>
            <a 
              href='#' 
              className='font-light hover:text-red-500' 
              onMouseEnter={() => handleMouseEnter(maxRef)} 
              onMouseLeave={() => handleMouseLeave(maxRef)}
            >
              Linked.in
            </a>
            
          </div>
          <div className='p-2 flex flex-col gap-2'>
            <h1 className='font-bold text-2xl'>Contact</h1>
            <a 
              href='#' 
              className='font-light hover:text-red-500' 
              onMouseEnter={() => handleMouseEnter(letterRef)} 
              onMouseLeave={() => handleMouseLeave(letterRef)}
            >
              hello@kreatewave.com
            </a>
            <a 
              href='#' 
              className='font-light hover:text-red-500' 
              onMouseEnter={() => handleMouseEnter(phoneRef)} 
              onMouseLeave={() => handleMouseLeave(phoneRef)}
            >
              +91-9999999999
            </a>
            
          </div>
          <div className='p-2 flex flex-col gap-2'>
            <h1 className='font-bold text-2xl'>Address</h1>
            <p className='font-light'>Bengaluru, Karnataka</p>
          </div>
        </div>
      </div>
      
      <Footer/>
    </section>
  )
}

export default About