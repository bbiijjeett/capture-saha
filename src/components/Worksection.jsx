
// // Sample JSON data
// const projects = [
//   { imgSrc: 'https://media.licdn.com/dms/image/D5612AQFp86gholx6fw/article-cover_image-shrink_720_1280/0/1708422990591?e=2147483647&v=beta&t=6rUer-Xo3IAqK2KIOVR9Z7pAH7TWxAQCp56FghCqKWM', type: 'WEB' },
//   { imgSrc: 'https://images.ctfassets.net/wp1lcwdav1p1/31dUrsGyucK0UNmJEQUqj3/3c57d917e84f6500ee2ec54e8760b854/UX_vs_UI.png', type: 'UI & UX' },
//   { imgSrc: 'https://giftysolutions.com/wp-content/uploads/2024/07/Graphic-Design.webp', type: 'GRAPHICS' },
//   { imgSrc: 'https://storage.googleapis.com/cdn-website-bolddesk/2024/05/5e83ae24-branding-element-banner-image-compressed.jpg', type: 'BRANDING' },
//   { imgSrc: 'https://www.ncsc.gov.uk/images/iStock-1704413556.jpg', type: 'SOCIAL MEDIA' },
//   { imgSrc: 'https://static.wixstatic.com/media/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png/v1/fill/w_920,h_608,al_c,q_90/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png', type: 'WEB' },
//   // Add more items as needed
// ];



import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

// Sample JSON data
const projects = [
  {
    imgSrc: 'https://media.licdn.com/dms/image/D5612AQFp86gholx6fw/article-cover_image-shrink_720_1280/0/1708422990591?e=2147483647&v=beta&t=6rUer-Xo3IAqK2KIOVR9Z7pAH7TWxAQCp56FghCqKWM',
    type: 'WEB',
    title: 'Web Project 1',
    description: 'A brief description of the web project.',
    link: '#'
  },
  {
    imgSrc: 'https://images.ctfassets.net/wp1lcwdav1p1/31dUrsGyucK0UNmJEQUqj3/3c57d917e84f6500ee2ec54e8760b854/UX_vs_UI.png',
    type: 'UI & UX',
    title: 'UI & UX Project',
    description: 'A brief description of the UI & UX project.',
    link: '#'
  },
  {
    imgSrc: 'https://giftysolutions.com/wp-content/uploads/2024/07/Graphic-Design.webp',
    type: 'GRAPHICS',
    title: 'Graphic Design Project',
    description: 'A brief description of the Graphic Design project.',
    link: '#'
  },
  {
    imgSrc: 'https://storage.googleapis.com/cdn-website-bolddesk/2024/05/5e83ae24-branding-element-banner-image-compressed.jpg',
    type: 'BRANDING',
    title: 'Branding Project',
    description: 'A brief description of the Branding project.',
    link: '#'
  },
  {
    imgSrc: 'https://www.ncsc.gov.uk/images/iStock-1704413556.jpg',
    type: 'SOCIAL MEDIA',
    title: 'Social media Project',
    description: 'A brief description of the Social media project.',
    link: '#'
  },
  {
    imgSrc: 'https://static.wixstatic.com/media/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png/v1/fill/w_920,h_608,al_c,q_90/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png',
    type: 'WEB',
    title: 'Web Project',
    description: 'A brief description of the Web project.',
    link: '#'
  }
  // Add more items as needed
];

const filterOptions = ['All', 'WEB', 'UI & UX', 'GRAPHICS', 'BRANDING', 'SOCIAL MEDIA'];

const Worksection = () => {
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
    <div className="py-12 px-4 bg-[#1B1C1D]">
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
                filter === option ? ' text-red-500' : 'text-white/50'
              }  hover:text-red-500 hover:-translate-y-1 transition duration-300`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

          
      <div className="p-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 perspective-1000">
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
            
            <div className="back absolute w-full h-full bg-gray-800 rounded-xl p-6 flex flex-col justify-center items-center text-center backface-hidden">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Worksection;

