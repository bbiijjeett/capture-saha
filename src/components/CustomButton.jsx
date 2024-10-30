import React from 'react';

const CustomButton = ({ title, url, color }) => {
  return (
    <a 
      href={url} 
      className={`${
        color ? color : 'bg-black'
      } w-full text-white px-4 py-2 rounded-full font-semibold text-center`}
    >
      {title}
    </a>
  );
}

export default CustomButton;
