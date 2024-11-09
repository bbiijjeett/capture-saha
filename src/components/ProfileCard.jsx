"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const ProfileCard = ({ imageUrl, profileLink, name , containerClassName }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.a
      href={profileLink}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={`col-span-1 row-span-1 flex flex-col items-center justify-center cursor-pointer ${containerClassName}`}
    >
      <img
        className="h-[15rem] w-[15rem] rounded-full object-cover grayscale mb-1"
        src={imageUrl}
        alt="profile"
      />
      <p>@{name}</p>
    </motion.a>
  );
};
