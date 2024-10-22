import Flywithus from '@/components/Flywithus'
import React from 'react'

const About = () => {
  return (
    <section className='flex flex-col gap-5 min-h-screen py-20 md:py-28 px-5 md:px-10  bg-[#1B1C1D] '>

      <div className='bg-[#FAF7F0] rounded-3xl mt-5 py-2'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <h1 className='text-5xl font-bold'>Design Driven</h1>
          <p className='font-light text-lg text-center'>We are the architects of brand strategy, crafting visual identities and narratives that resonate with audiences.</p>
        </div>

        <div id='bentoGrid' className='p-5'>
          <div className="flex h-fit lg:h-[60vh] w-full items-center justify-center">
            <div className="grid h-full w-full gap-4 p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 md:grid-rows-6 lg:grid-rows-4 rounded-lg ">

              <div className="col-span-1 row-span-1 md:row-span-2 lg:row-span-2 bg-[#232323] rounded-3xl shadow-md justify-between flex p-5 text-white flex-col">
                <div>
                  <h1 className='text-5xl'>50+</h1>
                  <h3 className='text-2xl'>Projects</h3>
                </div>
                <p className='text-gray-500'>Across Branding, Packaging, SEO, Product design and development! </p>
              </div>

              <div className="col-span-1 row-span-1 md:row-span-4 lg:row-span-4 bg-[#4D28BD] rounded-3xl shadow-md justify-between flex p-5 text-white flex-col">
                <h1 className='text-5xl'>5+</h1>
                <div>
                  <h3 className='text-2xl'>Team Members</h3>
                  <p className='mt-2'>A dynamic team of creatives shaping ideas into stunning realities</p>
                </div>
              </div>

              <div className="col-span-1 row-span-3 lg:row-span-2 bg-[yellow-200] rounded-3xl shadow-md hidden lg:flex items-center justify-center overflow-hidden">
                <img className='object-fill h-full w-full' src='https://framerusercontent.com/images/0TlX1hQrCmmwZcND6Z9Ygdv3w.png?scale-down-to=512' />
              </div>

              <div className="col-span-1 row-span-1 md:row-span-2 lg:row-span-4 bg-[#232323] rounded-3xl shadow-md justify-between flex p-5 text-white flex-col">
                <h1 className='text-5xl'>5+</h1>
                <div>
                  <h3 className='text-2xl'>Impressions </h3>
                  <p className='mt-2 text-gray-500'>Generated 5M + impressions and over 3M + views in one year</p>
                </div>
              </div>

              <div className="col-span-1 row-span-1 md:row-span-2 lg:row-span-2 bg-green-200 rounded-3xl shadow-md hidden md:flex items-center justify-center overflow-hidden">
                <img className='object-fill h-full w-full' src='https://framerusercontent.com/images/FPTwMu9Y8yV0vAeSiodXOXSpA.png?scale-down-to=512' />
              </div>

              <div className="col-span-1 row-span-1 md:row-span-2 lg:row-span-2 bg-[#FFFFFF] rounded-3xl shadow-md flex justify-between  p-5 text-black flex-col">
                <div>
                  <h1 className='text-5xl'>20+</h1>
                  <h3 className='text-2xl'>Clients</h3>
                </div>
                <p className='text-gray-500'>Across Technology, Healthcare, Finance, and beyond </p>
              </div>

            </div>
          </div>
        </div>

        <div id="Values" className='flex flex-col gap-10 mt-10 px-10'>

          <div className="flex h-full w-full items-center justify-center">
            <div className="grid h-full w-full  gap-4  p-2 grid-cols-2 grid-rows-1 rounded-lg ">
              <div className="col-span-2 md:col-span-1 row-span-1 flex flex-col md:p-10">
                <p className='font-normal'>Our Values</p>
                <h1 className='font-semibold text-5xl md:w-1/2'>Curiosity & Creativity</h1>
              </div>
              <div className="col-span-2 md:col-span-1 row-span-1 flex flex-col gap-4 items-center justify-center md:pr-10 font-normal">
                <p>We believe that by nurturing these qualities, we unlock the potential for groundbreaking innovations in web design. Our relentless curiosity propels us to explore new technologies, while our boundless creativity allows us to envision and actualize unique solutions. We encourage a culture of constant learning, pushing boundaries, and thinking outside the box. </p>
                <p>Our dedication to curiosity and creativity enables us to stay at the forefront of the industry, delivering cutting-edge features and empowering our users to bring their boldest ideas to life.</p>
              </div>
            </div>
          </div>

          <div className="flex h-full w-full items-center justify-center">
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
          </div>

        </div>

        <div id='teampic' className='flex flex-col gap-5 my-14'>
          <div className="flex h-full w-full items-center justify-center">
            <div className="grid h-full w-full gap-4 p-2 grid-cols-1 md:grid-cols-3 grid-rows-1 ">
              <div
                className="col-span-1 row-span-1 flex flex-col items-center justify-center"
              >
                <img className='h-[20rem] w-[20rem] rounded-full' src='https://framerusercontent.com/images/vW2W5WyGYGBPp2yxSETCHJxyz3M.jpeg' />
                <p>Name</p>
                <a>@instagram</a>
              </div>
              <div
                className="col-span-1 row-span-1 flex flex-col items-center justify-center"
              >
                <img className='h-[20rem] w-[20rem] rounded-full' src='https://framerusercontent.com/images/vW2W5WyGYGBPp2yxSETCHJxyz3M.jpeg' />
                <p>Name</p>
                <a>@instagram</a>
              </div>

              <div
                className="col-span-1 row-span-1 flex flex-col items-center justify-center"
              >
                <img className='h-[20rem] w-[20rem] rounded-full' src='https://framerusercontent.com/images/vW2W5WyGYGBPp2yxSETCHJxyz3M.jpeg' />
                <p>Name</p>
                <a>@instagram</a>
              </div>

            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <div className="grid h-full w-full gap-4 md:px-28 grid-cols-1 md:grid-cols-2 grid-rows-1 ">
              <div
                className="col-span-1 row-span-1 flex flex-col items-center justify-center"
              >
                <img className='h-[20rem] w-[20rem] rounded-full' src='https://framerusercontent.com/images/vW2W5WyGYGBPp2yxSETCHJxyz3M.jpeg' />
                <p>Name</p>
                <a>@instagram</a>
              </div>
              <div
                className="col-span-1 row-span-1 flex flex-col items-center justify-center"
              >
                <img className='h-[20rem] w-[20rem] rounded-full' src='https://framerusercontent.com/images/vW2W5WyGYGBPp2yxSETCHJxyz3M.jpeg' />
                <p>Name</p>
                <a>@instagram</a>
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