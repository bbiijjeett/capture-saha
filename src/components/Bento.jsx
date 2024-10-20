import React from 'react'
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  RocketIcon
} from "@radix-ui/react-icons";
 
import { BentoCard, BentoGrid } from "./ui/bento-grid";
import AnimatedListDemo from "./Notification";
import Marquee from "@/components/ui/marquee";
import Services1 from "./Services1";

 
const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    // Icon: RocketIcon,
    Icon: false,
    // name: "Our Services",
    // description: "Use the calendar to filter your files by date.",
    // href: "/",
    cta: false,
    // background: <img className="absolute -right-20 -top-20 opacity-60" />,
    background: (
      <Services1 />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    // description:      "Get notified when someone shares a file or mentions you in a comment.",
    // href: "/",
    cta: false,
    // background: <img className="absolute -right-20 -top-20 opacity-60" />,
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  }

  
];



const Bento = () => {
  return (
    <section className='h-auto p-10 md:p-24'>
      <BentoGrid className="lg:grid-rows-3 ">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Bento