import React from "react";
import HeroImage from "../assets/images/hero-bg.jpg";
import ItechLogo from "../assets/images/transparent-logo.png";
const ContactUs = () => {
  return (
    <div className="relative h-[500px] lg:h-screen">
      <div
        className="absolute font-poppins font-light inset-0 bg-cover flex flex-row items-center  bg-center  pt-24"
        style={{
          backgroundImage: `linear-gradient(155deg,rgba(0, 0, 0, 0.65) 31%,rgba(0, 0, 0, 0.65) 95%), url(${HeroImage})`,
        }}
      >
        <div className="bg-black w-[55%] h-[95%]  rounded-lg">
          <div className="pl-20">
            <img
              src={ItechLogo}
              alt="Itechlogo"
              className=" w-[400px] max-sm:w-[300px] cursor-pointer"
            />
            <h1 className="font-normal w- uppercase text-5xl leading-[58px] font-poppins text-theme ">
              CONTACT ITECHGRAM SOLUTIONS
            </h1>
            <p className="font-normal w-[70%] mt-8 text-xl font-poppins text-white">
              Marketing Company In Kanata, Ontario specializing in career and
              personal development within the sales and marketing industry
            </p>
          </div>
        </div>
        <div className="w-[40%] h-[70%] bg-cover bg-center bg-blocks rounded-3xl ml-[-15px]">
            
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
