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
  video1,
  pic1,
  video2,
  pic2,
  video3
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
      <div className='w-60 h-12 rounded-full bg-white border border-black flex items-center justify-between p-1'>
        <button className='bg-black rounded-full p-2' onClick={previousWallpaper}>
        <FaArrowLeft color='white'  />
        </button>
        <p className='text-lg font-mono'>reels</p>
        <button className='bg-black rounded-full p-2' onClick={nextWallpaper}>
          <FaArrowRight color='white' />
        </button>
      </div>
    </div>
  );
};

export default PhoneMockup;
