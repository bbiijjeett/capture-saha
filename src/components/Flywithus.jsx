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
    <div id='flywithus' className={`relative h-full md:h-[60vh] w-full  flex flex-col p-10 gap-10 justify-center items-center rounded-3xl border-black overflow-hidden `}>
        <div className="absolute z-10 inset-0 bg-cover blur-sm object-top bg-[url('https://res.cloudinary.com/dgtcjadsp/image/upload/v1729960720/447586436_1175614883773261_2047765867233244242_n_1_c4pcj6.webp')]"></div>
        <h1 className='text-3xl sm:text-5xl text-yellow-100 z-20 md:text-8xl font-bold text-center'>Ready to Surf Wave?</h1>
        <p className='font-normal shadow-sm text-yellow-100 z-20 text-xl text-center w-full md:w-3/4'>Whether you're looking to build a powerful personal brand, enhance your online presence, or create captivating content, ArtisanCrew is here to help you achieve your goals. Let&apos;s collaborate and bring your vision to life.</p>
        {/* <a href='https://calendly.com/workwithsaumajyoti/30min' className='bg-red-500 z-20 text-white px-4 py-2 rounded-full font-semibold text-center flex items-center justify-center gap-2'>
            <FaArrowCircleRight  />
            
            Book a Discovery call
        </a> */}
        <a
          href='https://calendly.com/workwithsaumajyoti/30min'
          class="flex justify-center text-red-500 gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
        >
          Schedule call
          <svg
            class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-red-500 ease-linear duration-300 rounded-full border border-red-500 group-hover:border-none p-2 rotate-45"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
          
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              class="fill-red-500 group-hover:fill-gray-800"
            ></path>
          </svg>
        </a>
                
    </div>
  )
}

export default Flywithus