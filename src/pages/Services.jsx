import React,{useState} from 'react';
import Flywithus from '@/components/Flywithus'

const services = [
  {
    "title": "Brand Identity",
    "description": "A service focused on creating and developing a unique brand identity that reflects the company's values and differentiates it in the market."
  },
  {
    "title": "Website Design & Development",
    "description": "A service that offers professional website design and development, creating user-friendly and visually appealing websites to enhance online presence."
  },
  {
    "title": "Graphic Design & Illustrations",
    "description": "A service that provides creative graphic design and illustrations, including logos, marketing materials, and custom artwork, to enhance brand visuals."
  }
]

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full  flex flex-col gap-5">
      {items.map((item, index) => (
        <div key={index} className="">
          <button
            className="w-full text-xl text-left py-10 px-6 font-semibold bg-[#eadfdf] rounded-3xl focus:outline-none"
            onClick={() => handleToggle(index)}
          >
            {item.title}
            {openIndex === index && (
            <div className="py-4 bg-[#eadfdf] font-light text-base text-gray-700">
              {item.description}
            </div>
          )}
          </button>
          
        </div>
      ))}
    </div>
  );
};


const Services = () => {
  return (
    <section className='min-h-screen py-20 md:py-28 px-5 md:px-10  bg-[#1B1C1D]'>
      <div></div>
      <div className='bg-[#FAF7F0] h-fit w-full rounded-3xl p-5'>
        <div className='flex flex-col md:flex-row p-5 '>
          <div className='md:w-1/2 p-10'>
            <p className='font-light text-sm mb-2'>Branding and Graphic design</p>
            <h1 className='font-semibold text-lg mb-2'>Visual Communication and Strategic Branding</h1>
            <p className='font-normal text-base lg:w-2/3 text-gray-500 mb-5'>We transform brands through visual storytelling and meaningful design. Combining strategic branding with compelling creative, we enable brands to communicate powerfully and authentically.</p>
            <button className='bg-black text-white px-4 py-2 rounded-full font-semibold text-center'>Start Today</button>
          </div>
          <div className=' md:w-1/2  overflow-hidden'>
            <img className='aspect-video h-full w-full rounded-3xl' src='https://framerusercontent.com/images/rKtachec8bWSlLf3AJFraLaXEs.gif' />
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row p-5'>
          <div className='md:w-1/2  overflow-hidden'>
            <img className='aspect-video h-full w-full rounded-3xl' src='https://framerusercontent.com/images/feZKpDJv0jnJKp1Xwh5sy8SxSY.gif' />
          </div>
          <div className='md:w-1/2 p-10'>
            <p className='font-light text-sm mb-2'>Branding and Graphic design</p>
            <h1 className='font-semibold text-lg mb-2'>Visual Communication and Strategic Branding</h1>
            <p className='font-normal text-base lg:w-2/3 text-gray-500 mb-5'>We transform brands through visual storytelling and meaningful design. Combining strategic branding with compelling creative, we enable brands to communicate powerfully and authentically.</p>
            <button className='bg-black text-white px-4 py-2 rounded-full font-semibold text-center'>Start Today</button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row p-5'>
          <div className='md:w-1/2 p-10'>
            <p className='font-light text-sm mb-2'>Branding and Graphic design</p>
            <h1 className='font-semibold text-lg mb-2'>Visual Communication and Strategic Branding</h1>
            <p className='font-normal text-base lg:w-2/3 text-gray-500 mb-5'>We transform brands through visual storytelling and meaningful design. Combining strategic branding with compelling creative, we enable brands to communicate powerfully and authentically.</p>
            <button className='bg-black text-white px-4 py-2 rounded-full font-semibold text-center'>Start Today</button>
          </div>
          <div className='md:w-1/2  overflow-hidden'>
            <img className='aspect-video h-full w-full rounded-3xl' src='https://framerusercontent.com/images/Mh7W5IkUcHeA1Usj0CnzNmuJvns.gif' />
          </div>
        </div>
        <div className='p-10 flex flex-col md:flex-row gap-5'>
          <div className='w-full md:w-1/2'>
            <h1 className='font-bold text-6xl mb-5'>Packs</h1>
            <p className='font-light text-2xl md:w-2/3'>We are experts in crafting bold visuals, distinctive brand identities, innovative products, and immersive websites.</p>
          </div>
          <div className=' w-full md:w-1/2'>
            <Accordion items={services} />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5 my-10'>
        <h1 className='font-bold text-7xl text-white text-center'>Pricing</h1>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className='flex flex-col gap-5 my-10'>
        <h1 className='font-bold text-7xl text-white text-center'>Still Unsure?</h1>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Flywithus/>
    </section>
  )
}

export default Services