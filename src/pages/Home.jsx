import React from 'react';
import Hero from "../components/Hero";
import Work from "../components/Work";
import Service from '../components/Service';
import Client from '../components/Client';
import Bento from '../components/Bento';

const Home = () => {
  return (
    <section className='bg-[#1b1c1d]'>
      <Hero />
      <Work/>
      <Service/>
      <Client/>
      <Bento/>
    </section>
  )
}

export default Home