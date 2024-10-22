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
          <div className="flex h-[60vh] w-full items-center justify-center">
            <div className="grid h-full w-full gap-4 p-2 grid-cols-4 grid-rows-4 rounded-lg ">
            
              <div 
                className="col-span-1 row-span-2 bg-[#232323] rounded-3xl shadow-md justify-between flex p-5 text-white flex-col"
              > 
                <div>
                  <h1 className='text-5xl'>50+</h1>
                  <h3 className='text-2xl'>Projects</h3>
                </div>
                <p className='text-gray-500'>Across Branding, Packaging, SEO, Product design and development! </p>
              </div>
            
              <div 
                className="col-span-1 row-span-4 bg-[#4D28BD] rounded-3xl shadow-md justify-between flex p-5 text-white flex-col"
              >
                <h1 className='text-5xl'>5+</h1>
                <div>
                  <h3 className='text-2xl'>Team Members</h3>
                  <p className='mt-2'>A dynamic team of creatives shaping ideas into stunning realities</p>
                </div>
              </div>
            
              <div 
                className="col-span-1 row-span-2 bg-[yellow-200] rounded-3xl shadow-md flex items-center justify-center overflow-hidden"
              >
                <img className='object-fill h-full w-full'  src='https://framerusercontent.com/images/0TlX1hQrCmmwZcND6Z9Ygdv3w.png?scale-down-to=512' />
              </div>
            
              <div 
                className="col-span-1 row-span-4 bg-[#232323] rounded-3xl shadow-md justify-between flex p-5 text-white flex-col"
              >
                <h1 className='text-5xl'>5+</h1>
                <div>
                  <h3 className='text-2xl'>Impressions </h3>
                  <p className='mt-2 text-gray-500'>Generated 5M + impressions and over 3M + views in one year</p>
                </div>
              </div>
            
              <div 
                className="col-span-1 row-span-2 bg-green-200 rounded-3xl shadow-md flex items-center justify-center overflow-hidden"
              >
               <img className='object-fill h-full w-full'  src='https://framerusercontent.com/images/FPTwMu9Y8yV0vAeSiodXOXSpA.png?scale-down-to=512' />
              </div>
            
              <div 
                className="col-span-1 row-span-2 bg-[#FFFFFF] rounded-3xl shadow-md flex justify-between  p-5 text-black flex-col"
              >
                <div>
                  <h1 className='text-5xl'>20+</h1>
                  <h3 className='text-2xl'>Clients</h3>
                </div>
                <p className='text-gray-500'>Across Technology, Healthcare, Finance, and beyond </p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About