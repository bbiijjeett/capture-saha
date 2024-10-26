import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
//bg-[#FAF7F0]
// const svgBackground = `
//     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800" opacity="0.28" width="800" height="800">
//       <g stroke-width="0.5" stroke="hsla(0, 0%, 100%, 1.00)" fill="none">
//         ${Array.from({ length: 16 }, (_, rowIndex) => 
//           Array.from({ length: 16 }, (_, colIndex) => 
//             `<rect width="50" height="50" x="${colIndex * 50}" y="${rowIndex * 50}"></rect>`
//           ).join('')
//         ).join('')}
//       </g>
//     </svg>
//   `;

//   const backgroundStyle = {
//     backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgBackground)}")`,
//     backgroundSize: 'cover', // Adjust as needed
//     height: '100%', // Example height, adjust as needed
//   };


const Flywithus = () => {
  return (
    <div className={`relative   h-[60vh] w-full  flex flex-col p-10 gap-10 justify-center items-center rounded-3xl border overflow-hidden bg-[#FAF7F0]`}>
        <h1 className='text-5xl sm:text-7xl font-bold text-center'>Ready to Surf Wave?</h1>
        <p className='font-normal text-xl text-center w-full md:w-3/4'>Whether you're looking to build a powerful personal brand, enhance your online presence, or create captivating content, KreateWave is here to help you achieve your goals. Let&apos;s collaborate and bring your vision to life.</p>
        <button className='bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-center flex items-center justify-center gap-2'>
            <FaArrowCircleRight  />
            Book a Discovery call
        </button>
        
    </div>
  )
}

export default Flywithus