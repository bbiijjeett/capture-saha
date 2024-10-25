import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { IoMdLock } from "react-icons/io";
import { IoMdUnlock } from "react-icons/io";

const ImageCard = ({ image }) => {
    return (
      <div className="w-32 md:w-40 h-40 md:h-48 relative group">
        <div className='absolute inset-0 text-white h-full w-full flex items-center justify-center group-hover:hidden z-20'>
            <IoMdUnlock size={25} />
        </div>
        <div className='bg-white/10 backdrop-blur-sm border border-white/20 shadow-md absolute inset-0  h-full w-full group-hover:hidden z-10 rounded-lg'></div>
        <img
            src={image}
            alt="Unlocked Image"
            className="w-full h-full object-cover shadow-xl rounded-lg z-0"     
        />
        {/* <img
            src={image}
            alt="Unlocked Image"
            className="w-full h-full object-cover shadow-xl rounded-lg blur-sm group-hover:blur-none transition-all duration-300"     
        /> */}
      </div>
    );
  };

const HeroNew = () => {
    const containerRef = useRef(null);
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const images = containerRef.current.querySelectorAll('.image-card');
            
            gsap.to(images, {
                x: (index) => (clientX - window.innerWidth / 2) * 0.01 * (index + 1),
                y: (index) => (clientY - window.innerHeight / 2) * 0.01 * (index + 1),
                duration: 0.5,
                ease: 'power2.out',
            });
        };
        
        const container = containerRef.current;
        container.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    
    return (
        <section className="relative text-white py-16 h-screen flex items-center">
            <div className="mx-auto  max-w-7xl relative z-10 text-center">
                <div className="">
                    <h1 className="text-6xl uppercase md:text-[8rem] font-black text-black text-wrap">
                        <div className="line ">monetize</div>
                        <div className="line">your</div>
                        <div className="line">content</div>
                    </h1>
                    <div className="mt-8">
                        <a href="#" className="text-lg text-white bg-black hover:bg-red-500 transition-colors duration-300 px-4 py-2 rounded-full font-semibold">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
            <div className='absolute inset-0 z-0 bg-[#FAF7F0] mt-20'>
                <div ref={containerRef} className='relative w-full h-full'>
                    <div className='top-[9%] md:top-[9%] left-[16%] md:left-[26%] absolute image-card'>
                        <ImageCard image='https://cdn.prod.website-files.com/64007f153bd777327e919f25/66d71b78469bb834c92fe556_hero_img-02.webp' />
                    </div>
                    <div className='top-[40%] md:top-[29%] left-[8%] absolute image-card'>
                        <ImageCard image='https://cdn.prod.website-files.com/64007f153bd777327e919f25/66d71b7849d25bc70063cf2d_hero_img-01.webp' />
                    </div>
                    <div className='bottom-[10%] md:bottom-[10%] left-[16%] md:left-[22.5%] absolute image-card'>
                        <ImageCard image='https://cdn.prod.website-files.com/64007f153bd777327e919f25/66d71b78f9c8bc3de537d8e9_hero_img-04.webp' />
                    </div>
                    <div className='top-[9%] md:top-[9%] right-[16%] md:right-[26%] absolute image-card'>
                        <ImageCard image='https://cdn.prod.website-files.com/64007f153bd777327e919f25/66d71b78e83f2a75427c8e6e_hero_img-03.webp ' />
                    </div>
                    <div className='top-[40%] md:top-[29%] right-[12%] md:right-[8%] absolute image-card'>
                        <ImageCard image='https://cdn.prod.website-files.com/64007f153bd777327e919f25/66d71b78199c5822e7274022_hero_img-06.webp' />
                    </div>
                    <div className='bottom-[10%] md:bottom-[10%] right-[16%] md:right-[22.5%] absolute image-card'>
                        <ImageCard image='https://cdn.prod.website-files.com/64007f153bd777327e919f25/66d71b78ea5b3a33ffc86ec6_hero_img-05.webp' />
                    </div>
                </div>
            </div>
        </section>
    );
};  

export default HeroNew;