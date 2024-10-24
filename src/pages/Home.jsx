import React from 'react';
import Hero from "../components/Hero";
import Work from "../components/Work";
import Service from '../components/Service';
import Client from '../components/Client';
import Bento from '../components/Bento';
import HeroNew from '@/components/HeroNew';

const Home = () => {
  return (
    <section className='bg-[#FAF7F0]'>
      {/* <Hero /> */}
      <HeroNew/>
      <Work/>
      <Service/>
      <Client/>
      <Bento/>
    </section>
  )
}

export default Home