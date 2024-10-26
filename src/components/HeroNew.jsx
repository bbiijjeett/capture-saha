import React, { useEffect, useRef,useLayoutEffect  } from 'react';
import { gsap } from 'gsap';
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
    const headerRef = useRef(null);
    const mainTextRef = useRef(null);
    const getStartedRef = useRef(null);
    
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

    useLayoutEffect(() => {
        const timeline = gsap.timeline();
        let centerY;
        if (window.innerWidth < 768) { // Mobile breakpoint
            centerY = 250;
        } else { // Desktop
            centerY = 380;
        }
        // First part of the header animation - appear in the center of the page
        timeline.fromTo(
            headerRef.current, 
            { opacity: 0.5, y: centerY-150, scale: 0.5 }, 
            { opacity: 1, y: centerY-150, scale: 1, duration: 1 }
        );
    
        // Set up all remaining animations to happen together after the first one completes
        timeline.to(headerRef.current, { y: 0, duration: 0.5 });

        const images = containerRef.current.querySelectorAll('.image-card');
        timeline.from(images, { rotation: 45, opacity: 0, duration: 1, stagger: 0.1, ease: 'power2.out' }, "-=0.5");

        timeline.fromTo(mainTextRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, "-=0.5");

        timeline.fromTo(getStartedRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, "-=0.5");
    
    }, []);

    return (
        <section className="relative text-white py-16 h-screen flex items-center overflow-hidden ">
            <div className="mx-auto  max-w-7xl relative z-10 text-center )]">
                <div className="">
                    <h1 ref={headerRef} className='text-[#1b1c1d] font-light text-2xl'>[ kreatewave ]</h1>
                    <h1 ref={mainTextRef} className="text-6xl uppercase md:text-[8rem] font-black text-black text-wrap">
                        <div className="line ">Where</div>
                        <div className="line">Ideas</div>
                        <div className="line">Rave!</div>
                    </h1>
                    <div ref={getStartedRef} className="mt-8">
                        <a href="#" className="text-lg text-white bg-black hover:bg-red-500 transition-colors duration-300 px-4 py-2 rounded-full font-semibold">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-0 bg-[#FAF7F0] mt-20">
                <div ref={containerRef} className='relative w-full h-full'>
                    <div className='top-[9%] md:top-[5%] left-[16%] md:left-[26%] absolute image-card'>
                        <ImageCard image='https://res.cloudinary.com/dgtcjadsp/image/upload/w_320,h_384,q_auto,f_auto/v1729960722/DSC02487_cftagw.webp' />
                    </div>
                    <div className='top-[40%] md:top-[29%] -left-[12%] md:left-[12%] absolute image-card'>
                        <ImageCard image='https://res.cloudinary.com/dgtcjadsp/image/upload/w_320,h_384,q_auto,f_auto/v1729960721/DSC00140_m7bohr.webp' />
                    </div>
                    <div className='bottom-[10%] md:bottom-[10%] left-[16%] md:left-[22.5%] absolute image-card'>
                        <ImageCard image='https://res.cloudinary.com/dgtcjadsp/image/upload/w_320,h_384,q_auto,f_auto/v1729960722/DSC02364_1_fuerni.webp' />
                    </div>
                    <div className='top-[9%] md:top-[9%] right-[16%] md:right-[26%] absolute image-card'>
                        <ImageCard image='https://res.cloudinary.com/dgtcjadsp/image/upload/w_320,h_384,q_auto,f_auto/v1729960723/DSC01702_zbrmjl.webp' />
                    </div>
                    <div className='top-[40%] md:top-[29%] -right-[12%] md:right-[8%] absolute image-card'>
                        <ImageCard image='https://res.cloudinary.com/dgtcjadsp/image/upload/w_320,h_384,q_auto,f_auto/v1729960722/DSC08544_t7nd82.webp' />
                    </div>
                    <div className='bottom-[10%] md:bottom-[10%] right-[16%] md:right-[22.5%] absolute image-card'>
                        <ImageCard image='https://res.cloudinary.com/dgtcjadsp/image/upload/w_320,h_384,q_auto,f_auto/v1729960721/DSC02285_t7a7dz.webp' />
                    </div>
                </div>
            </div>
        </section>
    );
};  

export default HeroNew;