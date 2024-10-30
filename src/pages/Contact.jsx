// import Footer from '@/components/Footer'
import Flywithus from '@/components/Flywithus'
import camera  from '../assets/img/camera.webp'
import max  from '../assets/img/max.webp'
import letter  from '../assets/img/letter.webp'
import phone  from '../assets/img/phone.webp'
import emoji from '../assets/img/emoji.webp'
import map from '../assets/img/map.jpeg'
import React, { useRef } from 'react';
import { gsap } from 'gsap';

const Contact = () => {

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
    <section className='flex flex-col gap-5 h-full py-20 md:py-28 px-5 md:px-10  bg-[#1B1C1D] '>
      <div className='flex-col h-[80vh] md:h-[70vh] justify-between  md:flex-row bg-[#FAF7F0]  rounded-3xl p-5 text-[#333435]  flex overflow-hidden'>
        <div className='w-1/2 flex flex-col justify-between'>
          <div className='hover:text-red-500 transition-all duration-300 text-7xl md:text-8xl hover:scale-95 cursor-pointer'>
            <a href='https://wa.me/919366797368'>
              <p className=' font-bold'>SAY</p>
              <p className=' font-bold'>HELLO<span className='text-red-500'>.</span></p>
            </a>
          </div>
          <div className='hidden md:flex'>
            <img src={emoji} className='animate-spin' alt='rotating emoji' />
          </div>
        </div>
  
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

        <div className='w-1/2 flex flex-col md:flex-col'>
          <div className='p-2 flex flex-col gap-2'>
            <h1 className='font-bold text-4xl'>Social</h1>
            <a 
              href='https://www.instagram.com/capturewithsaha/' 
              className='font-light hover:text-red-500' 
              onMouseEnter={() => handleMouseEnter(cameraRef)} 
              onMouseLeave={() => handleMouseLeave(cameraRef)}
            >
              Instagram
            </a>
            <a 
              href='https://www.linkedin.com/in/saumajyoti-saha/' 
              className='font-light hover:text-red-500' 
              onMouseEnter={() => handleMouseEnter(maxRef)} 
              onMouseLeave={() => handleMouseLeave(maxRef)}
            >
              Linked.in
            </a>
            
          </div>
          <div className='p-2 flex flex-col gap-2'>
            <h1 className='font-bold text-4xl'>Contact</h1>
            <a 
              href='mailto:workwithsaumajyoti@gmail.com' 
              className='font-light hover:text-red-500' 
              onMouseEnter={() => handleMouseEnter(letterRef)} 
              onMouseLeave={() => handleMouseLeave(letterRef)}
            >
              workwithsaumajyoti@gmail.com
            </a>
            {/* <a 
              href='#' 
              className='font-light hover:text-red-500'   
              onMouseEnter={() => handleMouseEnter(phoneRef)} 
              onMouseLeave={() => handleMouseLeave(phoneRef)}
            >
              +91-9999999999
            </a> */}
            
          </div>
          <div className='p-2 flex flex-col gap-2'>
            <h1 className='font-bold text-4xl'>Address</h1>
            <p className='font-light'>Bengaluru, Karnataka</p>
            <img className='rounded-3xl h-24 w-48 md:h-32 md:w-64 hover:scale-105 shadow-lg transition-all duration-300' src={map} />
          </div>
        </div>
      </div>
      
      <Flywithus/>
    </section>
  )
}

export default Contact;