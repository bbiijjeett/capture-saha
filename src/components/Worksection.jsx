import React, { useState } from 'react';

// Sample JSON data
const projects = [
  { imgSrc: 'https://media.licdn.com/dms/image/D5612AQFp86gholx6fw/article-cover_image-shrink_720_1280/0/1708422990591?e=2147483647&v=beta&t=6rUer-Xo3IAqK2KIOVR9Z7pAH7TWxAQCp56FghCqKWM', type: 'WEB' },
  { imgSrc: 'https://images.ctfassets.net/wp1lcwdav1p1/31dUrsGyucK0UNmJEQUqj3/3c57d917e84f6500ee2ec54e8760b854/UX_vs_UI.png', type: 'UI & UX' },
  { imgSrc: 'https://giftysolutions.com/wp-content/uploads/2024/07/Graphic-Design.webp', type: 'GRAPHICS' },
  { imgSrc: 'https://storage.googleapis.com/cdn-website-bolddesk/2024/05/5e83ae24-branding-element-banner-image-compressed.jpg', type: 'BRANDING' },
  { imgSrc: 'https://www.ncsc.gov.uk/images/iStock-1704413556.jpg', type: 'SOCIAL MEDIA' },
  { imgSrc: 'https://static.wixstatic.com/media/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png/v1/fill/w_920,h_608,al_c,q_90/4a5235_43a477c4822947a5bdebaf6247304813~mv2.png', type: 'WEB' },
  // Add more items as needed
];

const filterOptions = ['All', 'WEB', 'UI & UX', 'GRAPHICS', 'BRANDING', 'SOCIAL MEDIA'];

const Worksection = () => {
  const [filter, setFilter] = useState('all');

  // Filtered projects based on selected filter
  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.type === filter);

  return (
    <div className="py-12 px-4 bg-[#1B1C1D]">
      {/* Filter Section */}
      <div className="text-center mb-8">
        <div className="flex flex-wrap justify-center space-x-2 overflow-x-auto">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-2 mb-2 font-semibold rounded ${
                filter === option ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
              } hover:bg-red-600 hover:text-white transition duration-300`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Woven Style Image Grid */}
      <div className="p-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProjects.map((project, index) => (
          <div key={index} className="overflow-hidden rounded-lg p-2">
            <img
              src={project.imgSrc}
              alt={`${project.type} project`}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Worksection;