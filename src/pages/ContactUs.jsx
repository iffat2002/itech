import React from "react";
import HeroImage from "../assets/images/hero-bg.jpg";
const ContactUs = () => {
  return (
    <div className="relative h-[500px] lg:h-screen">
      <div
        className="absolute font-poppins font-light inset-0 bg-cover bg-center flex flex-col items-center justify-center pt-16"
        style={{
          backgroundImage: `linear-gradient(155deg,rgba(0, 0, 0, 0.65) 31%,rgba(0, 0, 0, 0.65) 95%), url(${HeroImage})`,
        }}
      >
        <div className="px-2"></div>
      </div>
    </div>
  );
};

export default ContactUs;
