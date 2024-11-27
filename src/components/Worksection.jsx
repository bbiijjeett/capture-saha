
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    imgSrc: 'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729991525/iphone15pro_jungj9.webp',
    type: 'WEB',
    title: 'iphone 15 pro clone site',
    description: 'A brief description of the web project.',
    link: 'https://iphone-15pro.vercel.app/'
  },
  {
    imgSrc: 'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729998104/socialmedia1_fu5v4p.png',
    type: 'SOCIAL MEDIA',
    title: 'Social media Project',
    description: 'A brief description of the Social media project.',
    link: 'https://www.behance.net/gallery/156623489/Nakab-'
  },
  {
    imgSrc: 'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729997315/uiux1_jayt4b.jpg',
    type: 'UI & UX',
    title: 'UI & UX Project',
    description: 'A brief description of the UI & UX project.',
    link: 'https://www.behance.net/gallery/167541775/Travel-Group-App'
  },
  {
    imgSrc: 'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729998458/WhatsApp_Image_2024-10-27_at_8.37.18_AM_ms6elv.jpg',
    type: 'GRAPHICS',
    title: 'Graphic Design Project',
    description: 'A brief description of the Graphic Design project.',
    link: '#'
  },
  {
    imgSrc: 'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729997455/branding_pyehep.jpg',
    type: 'BRANDING',
    title: 'Branding Project',
    description: 'A brief description of the Branding project.',
    link: 'https://www.behance.net/gallery/146533785/ITSY-KIDSY-Brand-guide'
  },
  {
    imgSrc: 'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729998554/uiux3_i4funa.jpg',
    type: 'UI & UX',
    title: 'UI & UX Project',
    description: 'A brief description of the UI & UX project.',
    link: 'https://www.behance.net/gallery/134211901/CarSpace-Car-Website'
  },
  {
    imgSrc: 'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729998243/socialmedia2_ywhfxs.jpg',
    type: 'SOCIAL MEDIA',
    title: 'Social media Project',
    description: 'A brief description of the Social media project.',
    link: 'https://www.behance.net/gallery/166457849/Moonlight'
  },
  {
    imgSrc: 'https://res.cloudinary.com/dgtcjadsp/image/upload/v1729991524/hoobee_ccsyip.webp',
    type: 'WEB',
    title: 'Web Project',
    description: 'A brief description of the Web project.',
    link: 'https://hoo-bee.vercel.app/'
  }
  // Add more items as needed
];

const filterOptions = ['All', 'WEB', 'UI & UX', 'GRAPHICS', 'BRANDING', 'SOCIAL MEDIA'];

const Worksection = () => {
  // const { scrollY } = useScroll();
  // const scale = useTransform(scrollY, [2500, 3000], [1, 0.8]);

  const [filter, setFilter] = useState('All');
  const cardRefs = useRef([]);

  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.type === filter);

  useEffect(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const front = card.querySelector('.front');
        const back = card.querySelector('.back');
        
        // Initial setup: front visible, back hidden by rotation
        gsap.set(front, { rotationY: 0, zIndex: 10, backfaceVisibility: 'hidden' });
        gsap.set(back, { rotationY: -180, zIndex: 0, backfaceVisibility: 'hidden' });

        // Set up hover animations
        card.addEventListener('mouseenter', () => {
            gsap.to(front, { rotationY: 180, zIndex: 0, duration: 0.6 });
            gsap.to(back, { rotationY: 0, zIndex: 10, duration: 0.6 });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(front, { rotationY: 0, zIndex: 10, duration: 0.6 });
            gsap.to(back, { rotationY: -180, zIndex: 0, duration: 0.6 });
        });
    });
  }, [filteredProjects]);

  return (
    <div   className="py-12 px-4 bg-[#1B1C1D]">
      <div className="text-center mb-8">
        {/* <div className="flex flex-wrap justify-center space-x-2 overflow-x-auto">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-2 mb-2 font-semibold rounded ${
                filter === option ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
              } hover:bg-red-600 hover:text-white transition duration-300`}
            >
              {option}
            </button>
          ))}
        </div> */}
        <div className="flex flex-wrap justify-center space-x-2 overflow-x-auto">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-2 mb-2 font-semibold md:text-xl ${
                filter === option ? ' text-[#8C52FF]' : 'text-white/50'
              }  hover:text-[#8C52FF] hover:-translate-y-1 transition duration-300`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

          
      <motion.div   className="p-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 perspective-1000">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="relative w-full h-64 perspective-1000 transform-style-3d"
          >
            
            <div className="front absolute w-full h-full bg-white overflow-hidden rounded-xl backface-hidden z-10">
              <img
                src={project.imgSrc}
                alt={`${project.type} project`}
                className="object-cover w-full h-full"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
              />
            </div>
            
            <div className="back absolute w-full h-full bg-white rounded-xl p-6 flex flex-col justify-center items-center text-center backface-hidden">
              {/* <h3 className="text-lg font-semibold text-white">{project.title}</h3> */}
              {/* <p className="text-sm text-gray-300 mt-2">{project.description}</p> */}
              {/* <a
                href={project.link}
                className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 transition duration-300"
              >
                View Project
              </a> */}
              {/* <div class="flex px-6 pb-8 sm:px-8">
                <a class="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-white hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  href={project.link}>
                  Get started
                </a>
              </div> */}
               
                <div class="px-6 py-8 sm:p-10 sm:pb-6">
                  <div class="grid items-center justify-center w-full grid-cols-1 text-left">
                    <div>
                      <h2
                        class="text-lg font-medium tracking-tighter text-gray-800 lg:text-3xl"
                      >
                        {project.title}
                      </h2>
                      <p class="mt-2 text-sm text-gray-500">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div class="flex px-6 pb-8 sm:px-8">
                  <a
                    aria-describedby="tier-company"
                    class="flex items-center justify-center w-full px-6 py-2.5 text-center font-semibold text-white duration-200 bg-green-500 hover:border rounded-full nline-flex hover:bg-white hover:border-red-500 hover:text-red-500 focus:outline-none focus-visible:outline-red-500 text-sm "
                    href={project.link}
                  >
                    Link
                  </a>
                </div>
               
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Worksection;

