import React from 'react';
import Work from "../components/Work";
import Service from '../components/Service';
import Client from '../components/Client';
import Bento from '../components/Bento';
import HeroNew from '@/components/HeroNew';
import Flywithus from '@/components/Flywithus';
import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo';

const Home = () => {
  return (
    //bg-[#FAF7F0]
    <section className=' bg-[#FAF7F0] overflow-hidden'>
      <HeroNew/>
      <Work/>
      <Service/>
      {/* <Client/> */}
      <AnimatedTestimonialsDemo/>

      {/* <Bento/> */}
      <div className='p-10'>

        <Flywithus/>
      </div>

    </section>
  )
}

export default Home