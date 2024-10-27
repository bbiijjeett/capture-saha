import React, { useEffect,useRef } from 'react';
import { gsap } from 'gsap';
import '../components/WaveText.css';

const Test = () => {

  return (
    <section className='bg-white'>
      <div className='h-screen w-full flex justify-center items-center bg-white'>
        <h1   className="text-6xl uppercase md:text-[8rem] font-black text-black text-wrap">
          <div className="line absolute text-transparent stroke-text top-[10%]">Where</div>
          <div className="line absolute animated-text top-[10%]">Where</div>
          <div className="line absolute text-transparent stroke-text top-[25%]">Ideas</div>
          <div className="line absolute animated-text top-[25%]">Ideas</div>
          <div className="line absolute text-transparent stroke-text top-[40%]">Rave!</div>
          <div className="line absolute animated-text top-[40%]">Rave!</div>
        </h1>
      </div>
      {/* <div className='h-screen w-full flex justify-center items-center bg-white section'>1</div>
      <div className='h-screen w-full flex justify-center items-center bg-black rounded-tl-3xl rounded-tr-3xl section'>2</div>
      <div className='h-screen w-full flex justify-center items-center bg-white rounded-tl-3xl rounded-tr-3xl section'>3</div>
      <div className='h-screen w-full flex justify-center items-center bg-black rounded-tl-3xl rounded-tr-3xl section'>4</div>
      <div className='h-screen w-full flex justify-center items-center bg-white rounded-tl-3xl rounded-tr-3xl section'>5</div> */}
    </section>
  );
};

export default Test;

// const filterOptions = ['All', 'WEB', 'UI & UX', 'GRAPHICS', 'BRANDING', 'SOCIAL MEDIA'];

// const Worksection = () => {
//   const [filter, setFilter] = useState('All');

//   // Filtered projects based on selected filter
//   const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.type === filter);

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