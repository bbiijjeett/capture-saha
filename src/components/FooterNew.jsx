import React from 'react';
import { useLocation } from 'react-router-dom';

const team = [
    
    { id:'1',name: 'Soumajyoti Saha', ig: 'https://www.linkedin.com/in/saumajyoti-saha/' },
    { id:'2',name: 'Bijeet Nath', ig: 'https://www.linkedin.com/in/bbiijjeett/' },
    { id:'3',name: 'Adit Saha', ig: 'https://www.linkedin.com/in/adit-saha-a40b34212/' },
    { id:'4',name: 'Soubhick Bhattacharjee', ig: 'https://www.linkedin.com/in/soubhick/' },
    { id:'5',name: 'Ambar Saha', ig: 'https://www.linkedin.com/in/ambar-saha-a971b3143/' },
    { id:'6',name: 'Aditya Aurodipta', ig: 'https://www.linkedin.com/in/adityaaurodipta/' },
]

const FooterNew = () => {
    const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === '/';

  return (
    <footer className={`${isHomePage ? 'rounded-tl-3xl rounded-tr-3xl' : ' '}  flex flex-col md:flex-row gap-5 md:gap-0 text-center items-center md:items-baseline justify-around bg-[#1b1c1d] py-10`}>
        <div className='flex flex-col md:items-start gap-1'>
            <p className='text-white font-black text-2xl'>Artisan<span className='text-red-500 text-2xl'>Crew</span>.co</p>
            <p className='text-white font-light text-sm'>© 2024 ArtisanCrew.co</p>
            <p className='text-white font-light text-sm'>All rights reserved.</p>
        </div>
        <div className='flex flex-col md:items-start gap-2'>
            <h1 className='text-white font-semibold'>Team</h1>
            <ul className='flex flex-col md:items-start gap-2'>
                {team.map((member)=>(
                    <li key={member.id}>
                        <a href={member.ig} className='font-normal text-gray-400 hover:text-white  transition-all duration-300'>{member.name}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className='flex flex-col md:items-start gap-2'>
            <h1 className='text-white font-semibold'>Contact</h1>
            <a href='mailto:workwithsaumajyoti@gmail.com' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>workwithsaumajyoti@gmail.com</a>
            <a href='https://calendly.com/workwithsaumajyoti/30min' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>Speak with Us</a>
            <h1 className='text-white font-semibold'>Follow Us</h1>
            <a href='https://www.instagram.com/artisancrewco/' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>On Instagram</a>
            <a href='https://www.linkedin.com/in/saumajyoti-saha/' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>On Linked.in</a>
            {/* <a href='#' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>On Facebook.in</a> */}
        </div>
        
        <div className='flex flex-col md:items-start gap-2'>
            <h1 className='text-white font-semibold'>Learn more</h1>
            {/* <p className='font-normal text-gray-400 hover:text-white transition-all duration-300'>+91-999999999</p> */}
            {/* <a href='https://www.linkedin.com/in/saumajyoti-saha/' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>Linked.in</a> */}
            {/* <a href='mailto:workwithsaumajyoti@gmail.com' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>workwithsaumajyoti@gmail.com</a> */}
            {/* <a href='https://calendly.com/workwithsaumajyoti/30min' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>Speak with Us</a> */}
            <a href='https://merchant.razorpay.com/policy/PNWqxHpxSB92lt/terms' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>Terms and Conditions</a>
            <a href='https://merchant.razorpay.com/policy/PNWqxHpxSB92lt/privacy' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>Privacy Policy</a>
            <a href='https://merchant.razorpay.com/policy/PNWqxHpxSB92lt/refund' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>Cancellations and Refunds</a>
            <a href='https://merchant.razorpay.com/policy/PNWqxHpxSB92lt/shipping' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>Shipping Policy</a>
        </div>
        
        
        
    </footer>
  )
}

export default FooterNew