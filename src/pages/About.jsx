import Flywithus from '@/components/Flywithus';
import React from 'react';
import bijeet from '../assets/img/bijeet.jpeg';
import somo from '../assets/img/somo.webp';
import adit from '../assets/img/adit.webp';
import soubhick from '../assets/img/soubhick.webp';
import ambar from '../assets/img/ambar.jpeg';
import apos1 from '../assets/img/apos1.png';
import apos2 from '../assets/img/apos2.png';
import { FaInstagram } from "react-icons/fa";
import video3 from '../assets/video/video2.gif';
import 'animate.css';
import TitleMagic from '@/components/TitleMagic';

const About = () => {
  return (
    <section className='flex flex-col gap-5 min-h-screen py-20 md:py-28 px-5 md:px-10  bg-[#1B1C1D] '>

      <div className='bg-[#FAF7F0] rounded-3xl  py-2'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <h1 className=' text-4xl md:text-6xl lg:text-8xl font-black mt-10 transition-transform '>Artisan<span className='text-red-500 text-4xl md:text-6xl lg:text-8xl'>Crew</span>.co</h1>
          {/* <TitleMagic /> */}
          <p className='w-[90%] md:w-full font-light text-base md:text-2xl text-center'>We are the one who bring the wave of creativity to your brand.</p>
        </div>

        <div id='teampic' className='flex flex-col gap-5 my-14'>
          <div className="flex h-full w-full items-center justify-center">
            <div className="grid h-full w-full gap-4 p-2 grid-cols-1 md:grid-cols-3 grid-rows-1 ">
              <div
                className="col-span-1 row-span-1 flex flex-col items-center justify-center hover:scale-105 transition-transform ease-in-out duration-300"
              >
                <img className='h-[15rem] w-[15rem] rounded-full object-cover grayscale mb-1' src={somo} />
                {/* <p className='font-semibold'>soumajyoti</p> */}
                
                <a href='https://www.linkedin.com/in/saumajyoti-saha/'>@soumajyoti</a>
              </div>
              <div
                className="col-span-1 row-span-1 flex flex-col items-center justify-center hover:scale-105 transition-transform ease-in-out duration-300"
              >
                <img className='h-[15rem] w-[15rem] rounded-full object-cover grayscale mb-1' src={bijeet} />
                {/* <p className='font-semibold'>Bijeet </p> */}
                <a href='https://www.linkedin.com/in/bbiijjeett/'>@bijeet</a>
              </div>

              <div
                className="col-span-1 row-span-1 flex flex-col items-center justify-center hover:scale-105 transition-transform ease-in-out duration-300"
              >
                <img className='h-[15rem] w-[15rem] rounded-full object-cover grayscale mb-1' src={adit} />
                {/* <p className='font-semibold'>Adit</p> */}
                <a href='https://www.linkedin.com/in/adit-saha-a40b34212/'>@adit</a>
              </div>

            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center ">
            <div className="grid h-full w-full gap-4 md:px-28 grid-cols-1 md:grid-cols-2 grid-rows-1 ">
              <div
                className="col-span-1 row-span-1 flex flex-col items-center justify-center hover:scale-105 transition-transform ease-in-out duration-300"
              >
                <img className='h-[15rem] w-[15rem] rounded-full object-cover grayscale mb-1' src={soubhick} />
                {/* <p className='font-semibold'>Soubhick</p> */}
                <a href='https://www.linkedin.com/in/soubhick/'>@soubhick</a>
              </div>
              <div
                className="col-span-1 row-span-1 flex flex-col items-center justify-center hover:scale-105 transition-transform ease-in-out duration-300"
              >
                <img className='h-[15rem] w-[15rem] rounded-full object-cover grayscale mb-1' src={ambar} />
                {/* <p className='font-semibold'>Ambar</p> */}
                <a href='https://www.linkedin.com/in/ambar-saha-a971b3143/'>@ambar</a>
              </div>
            </div>
          </div>
        </div>

        

        <div id="Values" className='flex flex-col gap-10 mt-10 px-10 w-full'>
          <div className='w-full text-center flex flex-col justify-center items-center'>
            <p className='w-[80%] md:w-[60%]  text-xl'>
              {/* <span className='mr-0'>
                <img src={apos2} className='h-3 w-3 inline translate-y-2 ' />
              </span> */}
                "At ArtisanCrew.co, we believe that the driving forces behind every successful brand are curiosity and creativity.These values fuel our passion for innovation and guide every decision we make."
              {/* <span className='ml-0'>
                <img src={apos2} className='h-3 rotate-180 w-3 inline translate-y-2 ' />
              </span> */}
            </p>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <div className="grid h-full w-full  gap-4  p-2 grid-cols-2 grid-rows-1 rounded-lg ">
              <div className="col-span-2 md:col-span-1 row-span-1 flex flex-col md:p-10">
                <p className='font-normal'>On</p>
                <h1 className='font-semibold text-5xl md:w-1/2'>Curiosity</h1>
              </div>
              <div className="col-span-2 md:col-span-1 row-span-1 flex flex-col gap-4 items-center justify-center md:pr-10 font-normal">
                <p className='text-justify'>We are always eager to learn, explore, and question the status quo. This relentless curiosity helps us uncover new opportunities and push boundaries in the digital world. By staying ahead of industry trends and continuously expanding our knowledge, we ensure that our clients benefit from cutting-edge strategies that set them apart from the competition. </p>
              </div>
            </div>
          </div>

          <div className="flex h-full w-full items-center justify-center">
            <div className="grid h-full w-full  gap-4  p-2 grid-cols-2 grid-rows-1 rounded-lg ">
              <div className="col-span-2 md:col-span-1 row-span-1 flex flex-col md:p-10">
                <p className='font-normal'>On</p>
                <h1 className='font-semibold text-5xl md:w-1/2'>Creativity</h1>
              </div>
              <div className="col-span-2 md:col-span-1 row-span-1 flex flex-col gap-4 items-center justify-center md:pr-10 font-normal">
                <p className='text-justify'>Every brand has a story, and we are here to tell it in the most compelling way. Our team thrives on creative challenges, turning bold ideas into impactful solutions. We take pride in crafting unique and engaging content, designs, and campaigns that resonate with audiences and leave lasting impressions.</p>
              </div>
            </div>
          </div>

          {/* <div className="flex h-full w-full items-center justify-center">
            <div className="grid h-full w-full gap-4  p-2 grid-cols-2 grid-rows-1 rounded-lg ">
              <div className="col-span-2 md:col-span-1 row-span-1  flex flex-col md:p-10">
                <p className='font-normal'>Our Mission</p>
                <h1 className='font-semibold text-5xl md:w-1/2'>To Help Our Clients Win</h1>
              </div>
              <div className="col-span-2 md:col-span-1 row-span-1 flex flex-col gap-4 items-center justify-center md:pr-10 font-normal">
                <p>Our mission is to elevate brands through insight-driven design. As brand building takes center stage in 2024, we fuse strategic understanding with stunning visual solutions to help companies communicate their purpose and connect more deeply with customers. </p>
                <p>Guided by curiosity and imagination, our passionate team of creative thinkers spots opportunities for brands to make meaningful progress in their industries and communities. We empower their visions to take flight.</p>
              </div>
            </div>
          </div> */}

        </div>

        <div id='bentoGrid' className='p-5 my-14'>
          <div className="flex h-fit lg:h-[60vh] w-full items-center justify-center">
            <div className="grid h-full w-full gap-4 p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 md:grid-rows-6 lg:grid-rows-4 rounded-lg ">

              <div className="col-span-1   row-span-1 md:row-span-2 lg:row-span-2 bg-[#232323] rounded-3xl shadow-md justify-between flex overflow-hidden  text-white flex-col">
                {/* <div>
                  <h1 className='text-5xl'>50+</h1>
                  <h3 className='text-2xl'>Projects</h3>
                </div>
                <p className='text-gray-500'>Across Branding, Packaging, SEO, Product design and development! bg-[#4D28BD] </p> */}
                <iframe className='object-fill min-h-[10rem] w-full ' src="https://www.behance.net/embed/project/166456529?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
              </div>

              <div className="col-span-1  row-span-1 md:row-span-4 lg:row-span-4 bg-cover object-cover bg-[url('https://res.cloudinary.com/dgtcjadsp/image/upload/v1729975242/IMG_7567_b3k40g.jpg')]  rounded-3xl shadow-md justify-between flex overflow-hidden text-white flex-col">
                {/* <div className="absolute inset-0 bg-cover object-cover bg-[url('https://res.cloudinary.com/dgtcjadsp/image/upload/v1729975242/IMG_7567_b3k40g.jpg')]"></div> */}
                {/* <h1 className='text-5xl'>5+</h1>
                <div>
                  <h3 className='text-2xl'>Team Members</h3>
                  <p className='mt-2'>A dynamic team of creatives shaping ideas into stunning realities</p>
                </div> */}
                {/* <iframe className='object-fill min-h-[10rem] w-full ' src="https://www.behance.net/embed/project/180138645?ilo0=1" height="100%"  width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe> */}
                {/* <iframe className='object-fill min-h-[10rem] w-full ' src="https://www.behance.net/embed/project/159393157?ilo0=1" height="100%" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe> */}
                {/* <img className='object-fill h-full w-full aspect-video' src={video3} /> */}
              </div>

              <div className="bg-center object-cover bg-[url('https://res.cloudinary.com/dgtcjadsp/image/upload/v1729972744/IMG_7740_compressed_wrg1at.gif')]  col-span-1 row-span-3 lg:row-span-2 rounded-3xl shadow-md hidden lg:flex items-center justify-center overflow-hidden">
                {/* bg-[#232323] <img className='object-fill h-full w-full' src='https://mockuptree.com/wp-content/uploads/edd/2024/07/Stationery_Mockup_psd-960x640.jpg' /> */}
                {/* <iframe className='object-fill h-full w-full ' src="https://www.behance.net/embed/project/146533785?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe> */}
              </div>

              <div className="col-span-1 min-h-[20rem] row-span-1 md:row-span-2 lg:row-span-4 bg-cover  bg-[url('https://res.cloudinary.com/dgtcjadsp/image/upload/v1729975819/DSC01942_1_sjnasn.webp')]  rounded-3xl shadow-md justify-between flex p-5 text-white flex-col">
                {/* <h1 className='text-8xl font-semibold'>5+</h1>
                <div>
                  <h3 className='text-2xl'>Impressions </h3>
                  <p className='mt-2 text-gray-500'>Generated 5M + impressions and over 3M + views in one year</p>
                </div> */}
              </div>

              <div className="col-span-1  row-span-1 md:row-span-2 lg:row-span-2 bg-green-200 rounded-3xl shadow-md hidden md:flex items-center justify-center overflow-hidden">
                {/* <img className='object-fill h-full w-full' src='https://framerusercontent.com/images/FPTwMu9Y8yV0vAeSiodXOXSpA.png?scale-down-to=512' /> */}
                <iframe className='object-fill h-full w-full' src="https://www.behance.net/embed/project/156623489?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
              </div>

              <div className="  col-span-1 row-span-1 md:row-span-2 lg:row-span-2 rounded-3xl shadow-md flex justify-between overflow-hidden  text-black flex-col">
                {/* 
                bg-cover bg-center object-cover bg-[url('https://res.cloudinary.com/dgtcjadsp/image/upload/v1729960723/DSC01702_zbrmjl.webp')]
                  <div>
                  <h1 className='text-5xl'>20+</h1>
                  <h3 className='text-2xl'>Clients</h3>
                </div>
                <p className='text-gray-500'>Across Technology, Healthcare, Finance, and beyond </p> */}
                <img className='object-cover h-full w-full'  src='https://res.cloudinary.com/dgtcjadsp/image/upload/v1729976782/DSC01702_zbrmjl-sqaure_euql83.webp' />
                {/* <iframe className='object-fill h-full w-full' src="https://www.behance.net/embed/project/134211901?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe> */}
                {/* <iframe className='object-fill min-h-[10rem] w-full' src="https://www.behance.net/embed/project/135696725?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe> */}
              </div>

            </div>
          </div>
        </div>

      </div>

      <Flywithus/>
    </section>
  )
}

export default About