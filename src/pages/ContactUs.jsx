import React from "react";
import HeroImage from "../assets/images/hero-bg.jpg";
import ItechLogo from "../assets/images/transparent-logo.png";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="overflow-hidden h-max">
      <div
        className=" font-poppins font-light inset-0 bg-cover flex items-center flex-row max-md:flex-col bg-center "
        // style={{
        //   backgroundImage: `linear-gradient(155deg,rgba(0, 0, 0, 0.65) 31%,rgba(0, 0, 0, 0.65) 95%), url(${HeroImage})`,
        // }}
      >
        <div className="bg-black w-[55%] max-md:w-screen max-md:h-fit h-screen rounded-br-2xl">
          <div className="">
            <img
              src={ItechLogo}
              alt="Itechlogo"
              className=" w-[400px] max-sm:w-[300px] max-md:m-auto cursor-pointer"
            />
            <div className="max-md:hidden">
            <h1 className="font-normal max-lg:text-4xl w-[90%] uppercase text-5xl leading-[58px] pl-20 font-poppins text-theme ">
              CONTACT ITECHGRAM SOLUTIONS
            </h1>
            <p className="font-normal w-[70%] mt-8  pl-20 text-2xl max-lg:text-lg   font-poppins text-white">
              Marketing Company In Kanata, Ontario specializing in career and
              personal development within the sales and marketing industry
            </p>
            </div>
          </div>
        </div>
        <div className="w-[40%] relative max-md:w-screen max-md:mr-0  items center mr-[8%] h-[70%]">
          <div>
            {" "}
            {!isOpen && (
              <button
                className="fixed top-4 right-4 z-50 flex flex-col items-center justify-center w-10 h-10 rounded cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <div className="flex flex-col hover:gap-1">
                  <span className="block w-7 h-0.5 bg-black max-md:bg-white mb-1 "></span>
                  <span className="block w-7 h-0.5 bg-black max-md:bg-white mb-1"></span>
                  <span className="block w-7 h-0.5 max-md:bg-white bg-black"></span>
                </div>
              </button>
            )}
            {/* Sidebar */}
            <Transition
              show={isOpen}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
                
                  <button
                    className="absolute text-white top-4 right-10 text-5xl font-thin"
                    onClick={() => setIsOpen(false)}
                  >
                    &times;
                  </button>
                  <ul className=" w-full flex flex-col justify-center h-full items-center text-center space-y-4 text-white font-bold uppercase">
                    <li className="text-xl w-40 hover:border border-white cursor-pointer p-2 transition-transform transform translate-x-full delay-100">
                      Home
                    </li>
                    <li className="text-xl w-40 hover:border border-white cursor-pointer p-2 transition-transform transform translate-x-full delay-300">
                      Services
                    </li>
                    <li className="text-xl w-40  bg-white text-gray-700 cursor-pointer p-2 transition-transform transform translate-x-full delay-500">
                      Contact Us
                    </li>
                  </ul>
                
              </div>
            </Transition>
          </div>
          <div className="flex flex-row justify-end max-md:justify-center items-center mb-4 max-md:w-screen text-gray-700 max-md:text-white border border-white max-md:bg-black max-md:mb-0 max-md:h-16">
          <a href="tel: +1 (437) 2620900" className="max-md:w-[50%] h-full max-md:px-[22px]"> <FaPhoneAlt className="border-l  border-r  border-black  m-auto text-base w-12 max-md:h-full max-md:p-[10px]" /></a>
        <a href="mailto: services@itechgram.com" className="max-md:w-[50%] max-md:px-[22px] h-full border-l max-md:border-white "><MdEmail className=" border-black text-lg m-auto max-md:h-full max-md:p-[10px]  w-12" /> </a>
          </div>
         <div className="block max-md:w-screen h-[400px] max-w-screen bg-cover bg-center max-md:rounded-none bg-blocks rounded-3xl ml-[-10%] max-md:ml-0"></div>
         
        </div>
      </div>
      <div className="max-md:block hidden text-center h-max  bg-black w-screen p-10">
          <div className="w-11/12 m-auto">
            <h1 className="font-normal max-lg:text-4xl  uppercase text-5xl leading-[58px]  font-poppins text-theme ">
              CONTACT ITECHGRAM SOLUTIONS
            </h1>
            <p className="font-normal  mt-8   text-2xl max-lg:text-lg   font-poppins text-white">
              Marketing Company In Kanata, Ontario specializing in career and
              personal development within the sales and marketing industry
            </p>
            </div>
            </div>
      <div className="container mt-20 m-auto">
      <div className="w-11/12 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            {/* Item 1 */}
            <div className="item  bg-white text-center p-7 shadow-lg rounded-lg border-5 cursor-ponter border-opacity-25 border-black transition-all hover:shadow-xl ">
              <div className="icon item text-6xl mb-6 text-white  rounded-full bg-theme m-auto w-24 h-24 leading-none flex items-center justify-center">
           <CiLocationOn />
              </div>
              <h6 className="mb-3 text-xl font-semibold  t-white uppercase ">Address</h6>
              <p className="text-base leading-6">Mississauga, Ontario, Canada
</p>
            </div>
    
    {/* Item 1 */}
    <div className="item  bg-white text-center p-7 shadow-lg rounded-lg border-5 cursor-ponter border-opacity-25 border-black transition-all hover:shadow-xl ">
              <div className="icon item text-6xl mb-6 text-white  rounded-full bg-theme m-auto w-24 h-24 leading-none flex items-center justify-center">
              <FiPhone />
              </div>
              <h6 className="mb-3 text-xl font-semibold   uppercase ">Phone</h6>
              <p className="text-base leading-6">+1 (437) 2620900
</p>
            </div>


            <div className="item  bg-white text-center p-7 shadow-lg rounded-lg border-5 cursor-ponter border-opacity-25 border-black transition-all hover:shadow-xl ">
              <div className="icon item text-6xl mb-6 text-white  rounded-full bg-theme m-auto w-24 h-24 leading-none flex items-center justify-center">
              <MdOutlineEmail />
              </div>
              <h6 className="mb-3 text-xl font-semibold  uppercase ">EMAIL</h6>
              <p className="text-base leading-6">services@itechgram.com
</p>
            </div>

            <div className="item  bg-white text-center p-7 shadow-lg rounded-lg border-5 cursor-ponter border-opacity-25 border-black transition-all hover:shadow-xl ">
              <div className="icon item text-6xl mb-6 text-white  rounded-full bg-theme m-auto w-24 h-24 leading-none flex items-center justify-center">
              <MdOutlineAccessTime />
              </div>
              <h6 className="mb-3 text-xl font-semibold  h uppercase ">working hours</h6>
              <p className="text-base leading-6">8AM-5AM-MON-FRI
</p>
            </div>
           
      </div>
      </div>
      <div className="container  m-auto w-11/12 text-white text-center text-lg font-semibold p-10 bg-[#48bc95] my-16 ">
<ul>
  <li className="mb-4">Get in Touch with itechgram Solutions</li>
  <li  className="mb-4">We are here to assist you with any inquiries or questions. Whether you're looking for marketing solutions or want to discuss a potential project, we are eager to hear from you.</li>
  <i  className="mb-4">Please feel free to contact us using the contact details provided above or by filling out the form below. We value your feedback and strive to provide exceptional service to our clients</i>
</ul>

      </div>
    </div>
  );
};

export default ContactUs;
