import React, { useState,useEffect, useRef,useLayoutEffect  } from 'react';
import { gsap } from 'gsap';
import { IoMdUnlock } from "react-icons/io";
// import '../components/WaveText.css';
import { motion, useScroll, useTransform } from 'framer-motion';

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
      </div>
    );
  };

const HeroNew = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const mainTextRef = useRef(null);
    const getStartedRef = useRef(null);

    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 0.8]);
    const opacity = useTransform(scrollY, [0, 200], [1, 0.95 ]);
    
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

    const images = [
        'https://media.contented.ru/wp-content/uploads/2023/06/image13.png',
        'https://img.freepik.com/free-vector/design-word-concept_23-2147844787.jpg',
        'https://images.ctfassets.net/1o0msnomnlhl/gUno4iSEyUCqe3pAXRtE9/06088e030fc01d547e56fb0658ecedd6/shutterstock_1172906944.jpg?h=500'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [width, setWidth] = useState("8vh"); // Default to mobile width

    useEffect(() => {
        // Function to update width based on window size
        const updateWidth = () => {
            if (window.innerWidth >= 768) {
                setWidth("16vh"); // Set to 16vh for medium screens and larger
            } else {
                setWidth("8vh"); // Set to 8vh for small screens
            }
        };

        // Set initial width and add event listener for resizing
        updateWidth();
        window.addEventListener("resize", updateWidth);

        // Clean up event listener on unmount
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500); // 1s delay + 2.5s animation duration = 3.5s total

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <motion.section style={{ scale, opacity }}  className="relative text-white py-16 h-screen flex items-center  overflow-hidden ">
            <div className="mx-auto  max-w-7xl relative z-10 text-center ">
                <div className="">
                    <h1 ref={headerRef} className='text-[#1b1c1d] font-black text-2xl'>Artisan<span className='text-2xl text-[#8C52FF]'>Crew</span>.co</h1>
                    <h1 ref={mainTextRef} className="text-6xl uppercase md:text-[8rem] font-black text-black text-wrap flex flex-col justify-center items-center">
                        <div className="line ">Designs</div>
                        <div className="line flex items-center justify-center gap-5">
                            <p>
                                That
                            </p>
                            {/* <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "8vw" }}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1,delay:2.5 }}
                                className="mr-1 rounded-md w-[8vw] h-[8vw] relative  bg-cover bg-[url('https://irp.cdn-website.com/91bc380f/dms3rep/multi/webworks.webp')]"
                            ></motion.div>  */}
                            <motion.div
                                key={currentImageIndex} // Change key to re-trigger animation
                                initial={{ width: 0 }}
                                animate={{ width }}
                                exit={{ width: 0 }}
                                transition={{
                                    ease: [0.76, 0, 0.24, 1],
                                    duration: 1,
                                    repeat: 1,
                                    repeatType: "mirror",
                                    repeatDelay: 1
                                }}
                                className="rounded-3xl h-[8vh] md:h-[16vh] relative bg-cover top-1"
                                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                            ></motion.div>
                        </div>
                        <div className="line">Woo!</div>
                    </h1>
                    <div ref={getStartedRef} className="mt-8">
                        <a href="#flywithus" className="text-lg text-white hover:bg-black bg-[#8C52FF] transition-colors duration-300 px-4 py-2 rounded-full font-semibold">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="absolute inset-0 z-0 bg-[#FAF7F0] mt-20">
                <div ref={containerRef} className='relative w-full h-full'>
                    <div className='top-[6%] md:top-[5%] left-[16%] md:left-[26%] absolute image-card'>
                        <ImageCard image='https://res.cloudinary.com/dgtcjadsp/image/upload/w_320,h_384,q_auto,f_auto/v1729975243/DSC05763_hv0j5d.jpg' />
                    </div>
                    <div className='top-[40%] md:top-[29%] -left-[12%] md:left-[12%] absolute image-card'>
                        <ImageCard image='https://res.cloudinary.com/dgtcjadsp/image/upload/w_320,h_384,q_auto,f_auto/v1729960721/DSC00140_m7bohr.webp' />
                    </div>
                    <div className='bottom-[10%] md:bottom-[10%] left-[16%] md:left-[22.5%] absolute image-card'>
                        <ImageCard image='https://res.cloudinary.com/dgtcjadsp/image/upload/w_320,h_384,q_auto,f_auto/v1729960722/DSC02364_1_fuerni.webp' />
                    </div>
                    <div className='top-[6%] md:top-[9%] right-[16%] md:right-[26%] absolute image-card'>
                        <ImageCard image='https://res.cloudinary.com/dgtcjadsp/image/upload/w_320,h_384,q_auto,f_auto/v1730000632/pratik_hgsfmn.jpg' />
                    </div>
                    <div className='top-[40%] md:top-[29%] -right-[12%] md:right-[8%] absolute image-card'>
                        <ImageCard image='https://res.cloudinary.com/dgtcjadsp/image/upload/w_320,h_384,q_auto,f_auto/v1729960722/DSC08544_t7nd82.webp' />
                    </div>
                    <div className='bottom-[10%] md:bottom-[10%] right-[16%] md:right-[22.5%] absolute image-card'>
                        <ImageCard image='https://res.cloudinary.com/dgtcjadsp/image/upload/w_320,h_384,q_auto,f_auto/v1729975240/429187786_707299028156629_9194629566961149844_n_tbuxjx.jpg' />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};  

export default HeroNew;