import React from 'react';
import Work from "../components/Work";
import Service from '../components/Service';
import Client from '../components/Client';
import Bento from '../components/Bento';
import HeroNew from '@/components/HeroNew';
import Flywithus from '@/components/Flywithus';

const Home = () => {
  return (
    <section className='bg-[#FAF7F0]'>
      <HeroNew/>
      <Work/>
      <Service/>
      <Client/>
      {/* <Bento/> */}
      <div className='p-10'>

        <Flywithus/>
      </div>

    </section>
  )
}

export default Home