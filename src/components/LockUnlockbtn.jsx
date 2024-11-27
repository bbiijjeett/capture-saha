import React, { useState } from 'react';
import { MdLock, MdLockOpen } from 'react-icons/md';

const LockUnlockbtn = () => {
  const [isLocked, setIsLocked] = useState(true);
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector('#ourbundles');
    target.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <a href='#' onClick={handleScroll}>
      <button
        className={`bg-[#8C52FF] text-white px-4 py-2 rounded-full font-semibold text-center flex items-center transition-transform duration-300 ease-in-out ${isLocked ? 'transform scale-100' : 'transform scale-105'}`}
        onMouseEnter={() => setIsLocked(false)}  // Unlock on hover
        onMouseLeave={() => setIsLocked(true)}   // Lock when not hovering
      > 
        
          {isLocked ? (
            <MdLock size={24} style={{ marginRight: '5px', transition: 'opacity 0.3s' }} />
          ) : (
            <MdLockOpen size={24} style={{ marginRight: '5px', transition: 'opacity 0.3s' }} />
          )}
          Unlock Now
        
      </button>
    </a>
  );
}

export default LockUnlockbtn;
    