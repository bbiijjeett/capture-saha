import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const Flywithus = () => {
  return (
    <div  className='relative h-[60vh] w-full  flex flex-col p-10 gap-10 justify-center items-center rounded-3xl border overflow-hidden bg-[#FAF7F0]'>
        <h1 className='text-5xl sm:text-7xl font-bold text-center'>Fly With Us</h1>
        <p className='font-normal text-xl text-center w-full md:w-1/2'>It's time to take your brand to new heights! In 2024, prioritizing your brand identity and image will be crucial for companies to stand out. Give your brand the exceptional branding it merits.</p>
        <button className='bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-center flex items-center justify-center gap-2'>
            <FaArrowCircleRight  />
            Book a Discovery call
        </button>
    </div>
  )
}

export default Flywithus