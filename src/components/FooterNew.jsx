import React from 'react';
import { useLocation } from 'react-router-dom';

const team = [
    
    { id:'1',name: 'Soumajyoti Saha', ig: 'https://www.instagram.com/soumajyoti_saha/' },
    { id:'2',name: 'Bijeet Nath', ig: 'https://www.instagram.com/bbiijjeett/' },
    { id:'3',name: 'Adit Saha', ig: 'https://www.instagram.com/_illumin_adi_/' },
    { id:'4',name: 'Soubhick Bhattacharjee', ig: 'https://www.instagram.com/_random_guy_/' },
    { id:'5',name: 'Ambar Saha', ig: 'https://www.instagram.com/the.saha.sky/' },
]

const FooterNew = () => {
    const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === '/';

  return (
    <footer className={`${isHomePage ? 'rounded-tl-3xl rounded-tr-3xl' : ' '}  flex flex-col md:flex-row gap-5 md:gap-0 text-center items-center md:items-baseline justify-around bg-[#1b1c1d] py-10`}>
        <div className='flex flex-col md:items-start gap-2'>
            <p className='text-white font-semibold text-2xl'>[ KreateWave ]</p>
        </div>
        <div className='flex flex-col md:items-start gap-2'>
            <h1 className='text-white font-semibold'>Contact</h1>
            {/* <p className='font-normal text-gray-400 hover:text-white transition-all duration-300'>+91-999999999</p> */}
            {/* <a href='https://www.linkedin.com/in/saumajyoti-saha/' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>Linked.in</a> */}
            <a href='mailto:hello@kreatewave.com' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>workwithsaumajyoti@gmail.com</a>
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
            <h1 className='text-white font-semibold'>Follow Us</h1>
            <a href='https://www.instagram.com/capturewithsaha/' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>On Instagram</a>
            <a href='https://www.linkedin.com/in/saumajyoti-saha/' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>On Linked.in</a>
            {/* <a href='#' className='font-normal text-gray-400 hover:text-white transition-all duration-300'>On Facebook.in</a> */}
        </div>
    </footer>
  )
}

export default FooterNew