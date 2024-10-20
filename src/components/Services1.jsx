import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link for navigation

const servicesItems = [
  { id: 1, name: "WEB DESIGN", href: "/our-services" },
  { id: 2, name: "SOCIAL MEDIA", href: "/our-services" },
  { id: 3, name: "BRANDING", href: "/our-services" },
];

const ServiceItem = ({ name, href, isHovered }) => {
  return (
    <div
      className={` transition-transform duration-300 ease-in-out transform ${
        isHovered ? "scale-150 z-10" : "scale-90 opacity-60"
      }`}
    >
      <h2 className=" font-bold text-xl text-white">
        {/* Replace <a> tag with <Link> for client-side routing */}
        <Link to={href} >
          {name}
        </Link>
      </h2>
    </div>
  );
};

const Services1 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col h-full  justify-between gap-4 p-8">
      {servicesItems.map((service, index) => (
        <div
          key={service.id}
          className="flex-1 transition-all duration-300 ease-in-out flex justify-center items-center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <ServiceItem name={service.name} href={service.href} isHovered={hoveredIndex === index} />
        </div>
      ))}
    </div>
  );
};

export default Services1;
