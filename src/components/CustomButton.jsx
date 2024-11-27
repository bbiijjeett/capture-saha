import React from 'react';

const CustomButton = ({ title, url, color }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector('#flywithus');
    target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      // href='#flywithus' 
      onClick={handleScroll}
      className={`${
        color ? color : 'bg-black'
      } w-full text-white px-4 py-2 hover:bg-[#8C52FF] rounded-full font-semibold text-center`}
    >
      {title}
    </button>
  );
}

export default CustomButton;
