import React, { useState, useEffect, useRef } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mobNavRef = useRef(null); // Ref for mobile navbar
  const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === '/';

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Add a threshold to prevent flickering
    if (Math.abs(currentScrollY - lastScrollY) < 50) return;

    // If scrolling down, hide the navbar; if scrolling up, show the navbar
    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  const openMenu = () => {
    gsap.to(mobNavRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
    setShowMenu(true);
    document.body.classList.add('overflow-hidden'); // Prevent scrolling on body
  };

  const closeMenu = () => {
    gsap.to(mobNavRef.current, { x: '100%', duration: 0.5, ease: 'power3.in', onComplete: () => {
      setShowMenu(false);
      document.body.classList.remove('overflow-hidden'); // Re-enable scrolling on body
    }});
  };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup event listener bg-[#1b1c1d]
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [lastScrollY]);
//   <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//   <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//   <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
//     Border Magic
//   </span>
// </button>

  return (
    <nav className={`${isHomePage ? 'bg-transparent' : 'bg-[#1B1C1D]'} w-full p-4 absolute z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="flex items-center justify-between md:pl-10 md:pr-10">
        <div className="flex items-center">
          <a href="/" className={`text-2xl  ${isHomePage ? 'text-[#1b1c1d]' : 'text-white'} font-light`}>[ KreateWave ]</a>
        </div>

        <div className="hidden md:flex space-x-8 p-2 rounded-full bg-[#292a2b]">
          <a href="/" className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300">Home</a>
          <a href="/about-kreatewave" className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300">About</a>
          <a href="/our-services" className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300">Services</a>
          <a href="/say-hello" className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          {/* <a href="https://wa.me/919366797368" className={`border-2  rounded-full italic px-4 py-2 ${isHomePage ? 'text-[#1b1c1d] hover:bg-[#1b1c1d] hover:text-white border-[#1b1c1d]' : 'text-white hover:bg-white hover:text-black border-white'} `}>Say Hello</a> */}
          
          <a href="https://wa.me/919366797368">
            <button className="relative font-bold inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full ${isHomePage ? 'bg-[#FAF7F0] hover:text-white hover:bg-[#1b1c1d] text-[#1b1c1d]':'bg-slate-950 text-white' }  px-3 py-1 text-sm font-medium  backdrop-blur-3xl`}>
              Say Hello
              </span>
            </button>
          </a>

          <div className="md:hidden flex items-center">
            <button className={`${isHomePage ? 'text-[#1b1c1d]' : 'text-white'}  focus:outline-none`} onClick={openMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {showMenu && (
          <div ref={mobNavRef} id='mobNav' className='h-screen w-full bg-[#3a3c3d] fixed inset-0 p-5'>
            <button className='absolute right-5' onClick={closeMenu}>
              <IoMdCloseCircleOutline style={{ height: '48px', width: '48px', color: 'white' }} />
            </button>
            <div className='flex flex-col gap-5 p-10 text-6xl mt-10'>
              <a href="/" className="text-white hover:text-gray-400 transition-all duration-300">Home</a>
              <a href="/about-kreatewave" className="text-white hover:text-gray-400 transition-all duration-300">About</a>
              <a href="/our-services" className="text-white hover:text-gray-400 transition-all duration-300">Services</a>
              <a href="/say-hello" className="text-white hover:text-gray-400 transition-all duration-300">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect, useRef } from 'react';
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { gsap } from 'gsap';

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [showMenu, setShowMenu] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const mobNavRef = useRef(null); // Ref for mobile navbar

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;

//     // If scrolling down, hide the navbar; if scrolling up, show the navbar
//     if (currentScrollY > lastScrollY) {
//       setShowNavbar(false);
//     } else {
//       setShowNavbar(true);
//     }
//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY]);

//   // Function to show menu with GSAP animation
//   const openMenu = () => {
//     gsap.to(mobNavRef.current, { x: 0, duration: 0.5, ease: 'power3.out' }); // Slide in animation
//     setShowMenu(true);
//   };

//   // Function to hide menu with GSAP animation
//   const closeMenu = () => {
//     gsap.to(mobNavRef.current, { x: '100%', duration: 0.5, ease: 'power3.in', onComplete: () => setShowMenu(false) }); // Slide out animation
//   };


//   return (
//     <nav  className={`bg-[#1B1C1D] w-full p-4 absolute z-50 ${
//         showNavbar ? 'translate-y-0' : '-translate-y-full'
//       }`}>
//       <nav className="flex items-center justify-between md:pl-10 md:pr-10">
        
//         <div className="flex items-center">
//           <a href="/" className="text-2xl text-white font-light">[ kreatewave ]</a>
//         </div>

//         <div className="hidden md:flex space-x-8 p-2 rounded-full bg-[#292a2b]">
//           <a
//             href="/"
//             className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300"
//           >
//             Home
//           </a>
//           <a
//             href="/about-kreatewave"
//             className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300"
//           >
//             About
//           </a>
//           <a
//             href="/our-services"
//             className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300"
//           >
//             Services
//           </a>
//           <a
//             href="/say-hello"
//             className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300"
//           >
//             Contact
//           </a>
//           {/* <a
//             href="#work"
//             className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300"
//           >
//             Our Work
//           </a> */}
//         </div>


//         {/* Connect Button */}
//         <div className="flex items-center space-x-4">
//           <a href="https://wa.me/919366797368" className="border-2 border-white rounded-full italic px-4 py-2 text-white hover:bg-white hover:text-black">
//             Say Hello
//           </a>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button className="text-white focus:outline-none" onClick={openMenu}>
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//               </svg>
//             </button>
//           </div>
//         </div>

//         {
//           showMenu && (
//             <div ref={mobNavRef} id='mobNav' className='h-screen w-full bg-[#3a3c3d] fixed inset-0 p-5'>
//               <button className='absolute right-5' onClick={closeMenu}>
//                 <IoMdCloseCircleOutline  style={{ height: '48px', width: '48px', color: 'white' }} />
//               </button>
//               <div className='flex flex-col gap-5 p-10 text-6xl mt-10'>
//                 <a
//                   href="/"
//                   className="text-white hover:text-gray-400 transition-all duration-300"
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/about-kreatewave"
//                   className="text-white hover:text-gray-400 transition-all duration-300"
//                 >
//                   About
//                 </a>
//                 <a
//                   href="/our-services"
//                   className="text-white hover:text-gray-400 transition-all duration-300"
//                 >
//                   Services
//                 </a>
//                 <a
//                   href="/say-hello"
//                   className="text-white hover:text-gray-400 transition-all duration-300"
//                 >
//                   Contact
//                 </a>
//                 {/* <a
//                   href="#work"
//                   className="text-white hover:text-gray-400 transition-all duration-300"
//                 >
//                   Our Work
//                 </a> */}
//               </div>
//             </div>
//           )
//         }

//       </nav>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect, useRef } from 'react';
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { gsap } from 'gsap';

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [showMenu, setShowMenu] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const mobNavRef = useRef(null); // Ref for mobile navbar

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;

//     // Add a threshold to prevent flickering
//     if (Math.abs(currentScrollY - lastScrollY) < 50) return;

//     // If scrolling down, hide the navbar; if scrolling up, show the navbar
//     if (currentScrollY > lastScrollY) {
//       setShowNavbar(false);
//     } else {
//       setShowNavbar(true);
//     }
//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY]);

//   // Function to show menu with GSAP animation
//   const openMenu = () => {
//     gsap.to(mobNavRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
//     setShowMenu(true);
//   };

//   // Function to hide menu with GSAP animation
//   const closeMenu = () => {
//     gsap.to(mobNavRef.current, { x: '100%', duration: 0.5, ease: 'power3.in', onComplete: () => setShowMenu(false) });
//   };

//   return (
//     <nav className={`bg-[#1B1C1D] w-full p-4 absolute z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
//       <nav className="flex items-center justify-between md:pl-10 md:pr-10">
        
//         <div className="flex items-center">
//           <a href="/" className="text-2xl text-white font-light">[ kreatewave ]</a>
//         </div>

//         <div className="hidden md:flex space-x-8 p-2 rounded-full bg-[#292a2b]">
//           <a href="/" className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300">Home</a>
//           <a href="/about-kreatewave" className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300">About</a>
//           <a href="/our-services" className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300">Services</a>
//           <a href="/say-hello" className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300">Contact</a>
//         </div>

//         <div className="flex items-center space-x-4">
//           <a href="https://wa.me/919366797368" className="border-2 border-white rounded-full italic px-4 py-2 text-white hover:bg-white hover:text-black">Say Hello</a>

//           <div className="md:hidden flex items-center">
//             <button className="text-white focus:outline-none" onClick={openMenu}>
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//               </svg>
//             </button>
//           </div>
//         </div>

//         {showMenu && (
//           <div ref={mobNavRef} id='mobNav' className='h-screen w-full bg-[#3a3c3d] fixed inset-0 p-5'>
//             <button className='absolute right-5' onClick={closeMenu}>
//               <IoMdCloseCircleOutline style={{ height: '48px', width: '48px', color: 'white' }} />
//             </button>
//             <div className='flex flex-col gap-5 p-10 text-6xl mt-10'>
//               <a href="/" className="text-white hover:text-gray-400 transition-all duration-300">Home</a>
//               <a href="/about-kreatewave" className="text-white hover:text-gray-400 transition-all duration-300">About</a>
//               <a href="/our-services" className="text-white hover:text-gray-400 transition-all duration-300">Services</a>
//               <a href="/say-hello" className="text-white hover:text-gray-400 transition-all duration-300">Contact</a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </nav>
//   );
// };

// export default Navbar;
