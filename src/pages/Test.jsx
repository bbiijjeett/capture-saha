import React, { useEffect,useRef } from 'react';
import { gsap } from 'gsap';
import CursorImage from '@/components/CursorImage';
import ImageTrail from '@/components/ImageTrail';
import PhoneMockup from '@/components/PhoneMockup';

const Test = () => {

  return (
    <section className='bg-white h-screen p-32'>
      {/* <CursorImage /> */}
      {/* <ImageTrail /> */}
      <PhoneMockup />
    </section>
  );
};

export default Test;

// const filterOptions = ['All', 'WEB', 'UI & UX', 'GRAPHICS', 'BRANDING', 'SOCIAL MEDIA'];

// https://www.makemepulse.com/
// https://console.cloudinary.com/console/c-2f871e3b8bb6d7319c4245839b2f14/media_library/homepage
// https://react-icons.github.io/react-icons/search/#q=love
// https://ui.aceternity.com/components/wobble-card

// const Worksection = () => {
//   const [filter, setFilter] = useState('All');

//   // Filtered projects based on selected filter
//   const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.type === filter);
//https://www.youtube.com/watch?v=Z6Fh5_PDd9s&list=PL8bX3D8aBEpmXCdk8z8H7HOi7NS-4AdGr&index=12
//https://www.youtube.com/watch?v=FM4ekrZJv2s
//https://www.youtube.com/results?search_query=Image+Trail+Effect+On+MouseMove+react
//   return (
//     <div className="py-12 px-4 bg-[#1B1C1D]">
//       {/* Filter Section */}
      // <div className="text-center mb-8">
      //   <div className="flex flex-wrap justify-center space-x-2 overflow-x-auto">
      //     {filterOptions.map((option) => (
      //       <button
      //         key={option}
      //         onClick={() => setFilter(option)}
      //         className={`px-4 py-2 mb-2 font-semibold rounded ${
      //           filter === option ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
      //         } hover:bg-red-600 hover:text-white transition duration-300`}
      //       >
      //         {option.charAt(0).toUpperCase() + option.slice(1)}
      //       </button>
      //     ))}
      //   </div>
      // </div>

//       {/* Woven Style Image Grid */}
//       <div className="p-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {filteredProjects.map((project, index) => (
//           <div key={index} className="overflow-hidden rounded-lg p-2">
//             <img
//               src={project.imgSrc}
//               alt={`${project.type} project`}
//               className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Worksection;