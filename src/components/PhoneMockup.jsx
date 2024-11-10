import React, { useState } from 'react';
import Iphone15Pro from './ui/iphone-15-pro';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa"
import video1 from '../assets/video/video1.gif';
import video2 from '../assets/video/video2.gif';
import video3 from '../assets/video/video2.gif';
import pic1 from '../assets/img/pic1.jpeg';
import pic2 from '../assets/img/pic2.jpeg';

const wallpapers = [
  video3,
  pic1,
  video2,
  pic2,
  video1
  // Add more wallpaper URLs as needed
];

const PhoneMockup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextWallpaper = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % wallpapers.length);
  };

  const previousWallpaper = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + wallpapers.length) % wallpapers.length
    );
  };

  return (
    <div className='flex flex-col gap-5 items-center justify-center h-full'>
      <Iphone15Pro src={wallpapers[currentIndex]} />
      <div className='w-60 h-12 rounded-full bg-[#FAF7F0] border border-black flex items-center justify-between p-1'>
        <button className='bg-black rounded-full p-2 group/button' onClick={previousWallpaper}>
        <FaArrowLeft color='white' className='group-hover/button:rotate-12 transition-transform duration-300' />
        </button>
        <p className='text-lg font-mono'>reels</p>
        <button className='bg-black rounded-full p-2 group/button' onClick={nextWallpaper}>
          <FaArrowRight color='white' className='group-hover/button:-rotate-12 transition-transform duration-300' />
        </button>
      </div>
    </div>
  );
};

export default PhoneMockup;

// import React, { useState, useRef, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { gsap } from 'gsap';
// import Iphone15Pro from './ui/iphone-15-pro';
// import video1 from '../assets/video/video1.gif';
// import video2 from '../assets/video/video2.gif';
// import video3 from '../assets/video/video2.gif';
// import pic1 from '../assets/img/pic1.jpeg';
// import pic2 from '../assets/img/pic2.jpeg';

// const wallpapers = [
//   video3,
//   pic1,
//   video2,
//   pic2,
//   video1
//   // Add more wallpaper URLs as needed
// ];

// const PhoneMockup = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const imageRef = useRef(null);

//   const nextWallpaper = () => {
//     animateWallpaper((currentIndex + 1) % wallpapers.length, 'down');
//   };

//   const previousWallpaper = () => {
//     animateWallpaper((currentIndex - 1 + wallpapers.length) % wallpapers.length, 'up');
//   };

//   const animateWallpaper = (newIndex, direction) => {
//     // Define direction for vertical slide
//     const startY = direction === 'down' ? 100 : -100;
//     const endY = direction === 'down' ? -100 : 100;

//     // Slide out current image
//     gsap.fromTo(
//       imageRef.current,
//       { y: 0, opacity: 1 },
//       { y: endY, opacity: 1, duration: 0.5, onComplete: () => {
//         setCurrentIndex(newIndex); // Update the image source once animation completes
//         gsap.fromTo(imageRef.current, { y: startY, opacity: 1 }, { y: 0, opacity: 1, duration: 0.5 });
//       }}
//     );
//   };

//   return (
//     <div className='flex flex-col gap-5 items-center justify-center h-full'>
//       <div className="relative w-[300px] h-[600px] overflow-hidden rounded-lg">
//         <Iphone15Pro src={wallpapers[currentIndex]} ref={imageRef} />
//       </div>
//       <div className='w-60 h-12 rounded-full bg-[#FAF7F0] border border-black flex items-center justify-between p-1'>
//         <button className='bg-black rounded-full p-2 group/button' onClick={previousWallpaper}>
//           <FaArrowLeft color='white' className='group-hover/button:rotate-12 transition-transform duration-300' />
//         </button>
//         <p className='text-lg font-mono'>reels</p>
//         <button className='bg-black rounded-full p-2 group/button' onClick={nextWallpaper}>
//           <FaArrowRight color='white' className='group-hover/button:-rotate-12 transition-transform duration-300' />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PhoneMockup;
