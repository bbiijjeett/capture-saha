import React from 'react';
import { MdPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa6";

const footerElements = [
    { icon: <MdPhone />, text: 'Phone' }, 
    { icon: <HiOutlineMail />, text: 'Email' },
    { icon: <BsInstagram />, text: 'Instagram' },
    { icon: <MdOutlinePrivacyTip />, text: 'Privacy' },
    { icon: <FaAngleUp />, text: 'Top of the page' }
];

const Footer = () => {
  return (
    <footer className='flex justify-center items-center'>
        <ul className='flex flex-row justify-center items-center gap-5'>
            {footerElements.map((element, index) => (
                <li key={index} className='p-2 bg-[#949494] rounded-full'>
                    <div className='text-black hover:text-white'>
                      {React.cloneElement(element.icon, { className: 'transition-colors duration-300' })}
                    </div>
                </li>
            ))}
        </ul>
    </footer>
  );
}

export default Footer;
