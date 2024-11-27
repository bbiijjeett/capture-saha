import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import Flywithus from '@/components/Flywithus';
import emoji from '../assets/img/emoji.webp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/919366797368?text=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="flex flex-col gap-5 py-20 md:py-28 px-5 md:px-10 bg-[#1B1C1D]">
      <div className="flex-col items-center md:items-stretch h-auto justify-between md:flex-row bg-[#FAF7F0] rounded-3xl p-5 text-[#333435] flex overflow-hidden">
        <div className="w-1/2 hidden md:flex flex-col justify-between">
          <div className="hover:text-red-500 transition-all duration-300 text-7xl md:text-8xl hover:scale-95 cursor-pointer">
            <a href="https://wa.me/919366297461">
              <p className="font-bold">SAY</p>
              <p className="font-bold">
                HELLO<span className="text-red-500">.</span>
              </p>
            </a>
          </div>
          <div className="hidden md:flex">
            <img src={emoji} className="animate-spin" alt="rotating emoji" />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="container">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="font-bold text-2xl mb-2 text-gray-900">Get in Touch</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base italic">
                Have questions or need assistance? We&apos;re here to help.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 font-semibold text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#FAF7F0] rounded border border-gray-300 focus:border-[#8C52FF] text-[#8C52FF] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm font-semibold text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#FAF7F0] rounded border border-gray-300 focus:border-[#8C52FF] text-base outline-none text-[#8C52FF] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm font-semibold text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#FAF7F0] rounded border border-gray-300 focus:border-[#8C52FF] h-32 text-base outline-none text-[#8C52FF] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-[#8C52FF] border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded-3xl text-lg"
                  >
                    Send
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a href="mailto:artisancrewworks@gmail.com" className="text-[#8C52FF]">
                    artisancrewworks@gmail.com
                  </a>
                  <p className="leading-normal my-1">Bengaluru, Karnataka</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Flywithus />
    </section>
  );
};

export default Contact;
