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
//     height: '100%', // Example height, adjust as needed   bg-[#FAF7F0]
//   };


const Flywithus = () => {
  return (
    <div className={`relative   h-[60vh] w-full  flex flex-col p-10 gap-10 justify-center items-center rounded-3xl border-black overflow-hidden `}>
        <div className="absolute z-10 inset-0 bg-cover blur-sm object-top bg-[url('https://res.cloudinary.com/dgtcjadsp/image/upload/v1729960720/447586436_1175614883773261_2047765867233244242_n_1_c4pcj6.webp')]"></div>
        <h1 className='text-3xl sm:text-5xl text-yellow-100 z-20 md:text-8xl font-bold text-center'>Ready to Surf Wave?</h1>
        <p className='font-normal shadow-sm text-yellow-100 z-20 text-xl text-center w-full md:w-3/4'>Whether you're looking to build a powerful personal brand, enhance your online presence, or create captivating content, KreateWave is here to help you achieve your goals. Let&apos;s collaborate and bring your vision to life.</p>
        <a href='https://calendly.com/workwithsaumajyoti/30min' className='bg-red-500 z-20 text-white px-4 py-2 rounded-full font-semibold text-center flex items-center justify-center gap-2'>
            <FaArrowCircleRight  />
            
            Book a Discovery call
        </a>
        
    </div>
  )
}

export default Flywithus