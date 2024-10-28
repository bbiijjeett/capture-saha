import React,{useState} from 'react';
import Flywithus from '@/components/Flywithus';
import CustomButton  from '@/components/CustomButton';
import { MdRadioButtonChecked } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import LockUnlockbtn from '@/components/LockUnlockbtn';

const services = [
  {
    "title": "Branding and Social media",
    "description": "A service centered on establishing a cohesive brand presence across social media platforms, aligning with the company's values while engaging and expanding its audience."
  },
  {
    "title": "Website Design & Development",
    "description": "A service dedicated to designing and building dynamic websites that not only showcase the brand’s identity but also provide a seamless user experience, driving engagement and conversions."
  },
  {
    "title": "Graphic Design & Illustrations",
    "description": "A service focused on creating captivating graphic designs and illustrations that communicate the brand's message effectively and enhance its visual storytelling."
  }
]

const socialMediaPackages = [
  {
    "name": "12 Custom Social Media Creatives/Month",
  },
  {
    "name": "Tailored Social Media Strategy"
  },
  {
    "name": "Dedicated Social Media Manager"
  },
  {
    "name": "Professional Copywriting Services"
  },
  {
    "name": "Unlimited Design Revisions"
  },
  {
    "name": "Flexible Pause Option"
  },
  {
    "name": "Monthly Performance Reports",
  }
];

const litePackage = [
  {
    "name": "2 Packs of Your Choice"
  },
  {
    "name": "48-Hour Turnaround Time"
  },
  {
    "name": "Dedicated Project Team"
  },
  {
    "name": "Flexible Pause Option"
  },
  {
    "name": "Single Milestone Delivery",
  },
  {
    "name": "Post-Delivery Support"
  },
  {
    "name": "Monthly Performance Reports",
  }
];

const customPackage = [
  {
    "name": "Tailored Project Proposal"
  },
  {
    "name": "Create Your Own Package"
  },
  {
    "name": "Customizable Project Timeline"
  },
  {
    "name": "Milestone-Based Delivery"
  },
  {
    "name": "Defined Scope of Work"
  },
  {
    "name": "Weekly Design Sync Meetings"
  },
  {
    "name": "Monthly Performance Reports",
  },
  {
    "name": "Post-Delivery Support"
  }
];

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
            className="w-full text-xl text-left py-10 px-6 font-semibold bg-[#FFFFFF] shadow-sm rounded-3xl focus:outline-none"
            onClick={() => handleToggle(index)}
          >
            {item.title}
            {openIndex === index && (
            <div className="py-4 bg-[#FFFFFF] font-light text-base text-gray-700">
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
          <div className='md:w-1/2 py-5 sm:p-10'>
            <p className='font-light text-sm mb-2'>Branding and Social media</p>
            <h1 className='font-semibold text-lg mb-2'>Building Identities and Digital Connections</h1>
            <p className='font-normal text-base lg:w-2/3 text-gray-500 mb-5'>Helping brands define their identity and connect with audiences through impactful branding and engaging social media strategies.</p>
            {/* <button className='bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-center'>Unlock Now</button> */}
            <LockUnlockbtn/>
          </div>
          <div className=' md:w-1/2  overflow-hidden'>
            <img className='aspect-video h-full w-full rounded-3xl' src='https://framerusercontent.com/images/rKtachec8bWSlLf3AJFraLaXEs.gif' />
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row p-5'>
          <div className='md:w-1/2  overflow-hidden'>
            <img className='aspect-video h-full w-full rounded-3xl' src='https://framerusercontent.com/images/feZKpDJv0jnJKp1Xwh5sy8SxSY.gif' />
          </div>
          <div className='md:w-1/2 py-5 sm:p-10'>
            <p className='font-light text-sm mb-2'>Website Design & Development</p>
            <h1 className='font-semibold text-lg mb-2'>Crafting Engaging Digital Experiences</h1>
            <p className='font-normal text-base lg:w-2/3 text-gray-500 mb-5'>Building responsive, user-centered websites that blend design and functionality to elevate your online presence.</p>
            {/* <button className='bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-center'>Unlock Now</button> */}
            <LockUnlockbtn/>
          </div>
        </div>
        <div className='flex flex-col md:flex-row p-5'>
          <div className='md:w-1/2 py-5 sm:p-10'>
            <p className='font-light text-sm mb-2'>Graphic Design & Illustrations</p>
            <h1 className='font-semibold text-lg mb-2'>Bringing Ideas to Life with Artful Precision and Creativity</h1>
            <p className='font-normal text-base lg:w-2/3 text-gray-500 mb-5'>We create visually stunning designs that not only capture attention but also effectively convey your brand's message.</p>
            {/* <button className='bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-center'>Unlock Now</button> */}
            <LockUnlockbtn/>
          </div>
          <div className='md:w-1/2  overflow-hidden'>
            <img className='aspect-video h-full w-full rounded-3xl' src='https://framerusercontent.com/images/Mh7W5IkUcHeA1Usj0CnzNmuJvns.gif' />
          </div>
        </div>
        <div className='p-2 md:p-10 flex flex-col md:flex-row gap-5'>
          <div className='w-full md:w-1/2'>
            <h1 className='font-bold text-5xl md:text-6xl mb-5'>Our Bundles</h1>
            <p className='font-light text-2xl md:w-2/3 text-pretty'>We specialize in creating striking visuals, unique brand identities, cutting-edge products, and engaging websites, all driven by a team of talented young professionals.</p>
          </div>
          <div className=' w-full md:w-1/2'>
            <Accordion items={services} />
          </div>
        </div>
      </div>
      {/* <div className='flex flex-col h-[110vh] gap-5 my-10'>
        <h1 className='font-bold text-7xl text-white text-center'>Pricing</h1>
        <div className='flex h-full px-28 justify-center items-center gap-5'>
          <div className='bg-white h-full w-1/3 rounded-xl'>
            <div className='flex flex-col p-10'>
              <p className='font-light text-lg capitalize'>Social media package</p>
              <h1 className='font-bold text-5xl'>$397/m</h1>
              <p className='font-normal text-xl'>Perfect to get started with kyte</p>
            </div>
            <div className='flex flex-col justify-center items-center px-10 mb-5'>
              <CustomButton  title={'Get Started'} />
            </div>
            <div className='flex flex-col justify-center items-center px-10 gap-2'>
              {
                socialMediaPackages.map((item, index) => (
                  <div key={index} className='bg-[#E6E6E6] w-full text-black px-4 py-2 rounded-full font-semibold text-center'>
                    <p className='font-light text-lg flex place-items-center'><MdRadioButtonChecked size={24} style={{ marginRight: '5px' }} />{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='bg-white h-full w-1/3 rounded-xl'>
            <div className='flex flex-col p-10'>
              <p className='font-light text-lg capitalize'>Lite Package</p>
              <h1 className='font-bold text-5xl'>$1997/m</h1>
              <p className='font-normal text-xl'>For Small And Midsize Business</p>
            </div>
            <div className='flex flex-col justify-center items-center px-10 mb-5'>
              <CustomButton  title={'Get Started'} />
            </div>
            <div className='flex flex-col justify-center items-center px-10 gap-2'>
              {
                litePackage.map((item, index) => (
                  <div key={index} className='bg-neutral-200 w-full text-black px-4 py-2 rounded-full font-semibold text-center'>
                    <p className='font-light text-lg flex place-items-center'><MdRadioButtonChecked size={24} style={{ marginRight: '5px' }} />{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='bg-white h-full w-1/3 rounded-xl'>
            <div className='flex flex-col p-10'>
              <p className='font-light text-lg capitalize'>Single project</p>
              <h1 className='font-bold text-5xl'>Custom </h1>
              <p className='font-normal text-xl'>Cost Effective Tailored Solutions</p>
            </div>
            <div className='flex flex-col justify-center items-center px-10 gap-3 mb-5'>
              <CustomButton  title={'Request Quote'} />
              <CustomButton  title={'Book Discovery Session'} />
            </div>
            <div className='flex flex-col justify-center items-center px-10 gap-2'>
              {
                customPackage.map((item, index) => (
                  <div key={index} className='bg-neutral-200 w-full text-black px-4 py-2 rounded-full font-semibold text-center'>
                    <p className='font-light text-lg flex place-items-center'><MdRadioButtonChecked size={24} style={{ marginRight: '5px' }} />{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div> */}
      <div className='flex flex-col h-auto gap-5 my-10 mx-2 md:mx-10'>
        <h1 className='font-bold text-5xl md:text-7xl text-white text-center mb-2'>Pricing</h1>
        <div className='flex flex-col lg:flex-row h-full px-2 md:px-5 lg:px-20 justify-center items-center gap-5'>
          
          {/* Social Media Package */}
          <div className='bg-white h-full sm:min-h-[100vh] w-full lg:w-1/3 rounded-xl py-5'>
            <div className='flex flex-col p-5 md:p-10'>
              <p className='font-light text-base md:text-lg capitalize'>Social media package</p>
              <h1 className='font-bold text-4xl md:text-5xl'>$399/m</h1>
              <p className='font-normal text-lg md:text-xl'>Perfect to get started with kyte</p>
            </div>
            <div className='flex flex-col justify-center items-center px-5 md:px-10 mb-5'>
              <CustomButton title={'Get Started'} />
            </div>
            <div className='flex flex-col justify-center items-center px-5 md:px-10 gap-2'>
              {socialMediaPackages.map((item, index) => (
                <div key={index} className="bg-[#EFEFEF] w-full text-black px-4 py-2 rounded-full font-semibold ">
                  <p className="font-light text-lg flex items-center">
                    <MdRadioButtonChecked size={24} style={{ marginRight: '5px' }} />
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lite Package */}
          <div className='bg-white h-full sm:min-h-[100vh] w-full lg:w-1/3 rounded-xl py-5'>
            <div className='flex flex-col p-5 md:p-10'>
              <p className='font-light text-base md:text-lg capitalize'>Lite Package</p>
              <h1 className='font-bold text-4xl md:text-5xl'>$699/m</h1>
              <p className='font-normal text-lg md:text-xl'>For Small And Midsize Business</p>
            </div>
            <div className='flex flex-col justify-center items-center px-5 md:px-10 mb-5'>
              <CustomButton title={'Get Started'} />
            </div>
            <div className='flex flex-col justify-center items-center px-5 md:px-10 gap-2'>
              {litePackage.map((item, index) => (
                <div key={index} className='bg-[#EFEFEF] w-full text-black px-4 py-2 rounded-full font-semibold text-center'>
                  <p className='font-light text-lg flex place-items-center'><MdRadioButtonChecked size={24} style={{ marginRight: '5px' }} />{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Single Project */}
          <div className='bg-white h-full sm:min-h-[100vh] w-full lg:w-1/3 rounded-xl py-5   '>
            <div className='flex flex-col p-5 md:p-10'>
              <p className='font-light text-base md:text-lg capitalize'>Single project</p>
              <h1 className='font-bold text-4xl md:text-5xl'>Custom</h1>
              <p className='font-normal text-lg md:text-xl'>Cost Effective Tailored Solutions</p>
            </div>
            <div className='flex flex-col justify-center items-center px-5 md:px-10 gap-3 mb-5'>
              <CustomButton title={'Request Quote'} />
              <CustomButton title={'Book Discovery Session'} />
            </div>
            <div className='flex flex-col justify-center items-center px-5 md:px-10 gap-2'>
              {customPackage.map((item, index) => (
                <div key={index} className='bg-[#EFEFEF] w-full text-black px-4 py-2 rounded-full font-semibold text-center'>
                  <p className='font-light text-lg flex place-items-center'><MdRadioButtonChecked size={24} style={{ marginRight: '5px' }} />{item.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>


      {/* <div className='flex flex-col gap-5 my-5 lg:my-10 h-fit'>
        <h1 className='font-bold text-7xl text-white text-center'>Still Unsure?</h1>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 px-10 lg:px-20'>
          <div className='w-full md:w-1/2 h-full  bg-white rounded-2xl p-10'>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black p-2 mb-4">
              <FaPhoneAlt className="text-white" size={25} />
            </div>
            <p className='font-light text-sm'>WE'LL GIVE YOU A</p>
            <h1 className='font-semibold text-4xl mb-2'>Personalised Tour</h1>
            <p className='font-normal text-base mb-4'>We will introduce you to our extensive services and answer all your questions!</p>
            <CustomButton  title={'Book Discovery Session'} />
          </div>
          <div className='w-full md:w-1/2 h-full  bg-white  rounded-2xl p-10'>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black p-2 mb-4">
              <IoIosMail className="text-white" size={25} />
            </div>
            <p className='font-light text-sm'>WE'LL ANSWER ALL YOUR  </p>
            <h1 className='font-semibold text-4xl mb-2'>Questions!</h1>
            <p className='font-normal text-base mb-4'>Share your questions with us via email and get answers to questions on pricing or services from our experts!</p>
            <CustomButton  title={'Share Your Questions'} />
          </div>
        </div>
      </div> */}
      <Flywithus/>
    </section>
  )
}

export default Services


