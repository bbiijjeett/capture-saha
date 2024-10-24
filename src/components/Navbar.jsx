import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // If scrolling down, hide the navbar; if scrolling up, show the navbar
    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  return (
    <nav  className={`bg-[#1B1C1D] w-full p-4 absolute z-50 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <nav className="flex items-center justify-between md:pl-10 md:pr-10">
        
        <div className="flex items-center">
          <a href="/" className="text-2xl text-white font-light">[ kreatewave ]</a>
        </div>

        <div className="hidden md:flex space-x-8 p-2 rounded-full bg-[#292a2b]">
          <a
            href="/"
            className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300"
          >
            Home
          </a>
          <a
            href="/about-kreatewave"
            className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300"
          >
            About
          </a>
          <a
            href="/our-services"
            className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300"
          >
            Services
          </a>
          <a
            href="#work"
            className="text-white hover:text-gray-400 hover:bg-[#3a3c3d] px-4 py-2 rounded-full transition-all duration-300"
          >
            Our Work
          </a>
        </div>


        {/* Connect Button */}
        <div className="flex items-center space-x-4">
          <a href="/say-hello" className="border-2 border-white rounded-full italic px-4 py-2 text-white hover:bg-white hover:text-black">
            Say Hello
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
