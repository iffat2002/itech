import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../assets/images/transparent-logo.png";
import Heading from "./shared/Heading";
import Description from "./shared/Description";
import Button from "./shared/Button";

const Hero = ({ image, title, heroHeading, heroDescription }) => {
  // Split the heading into individual characters, including spaces
  const headingChars = Array.from(heroHeading);

  // Variants for the animation
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative h-[500px] lg:h-screen">
      <div
        className="absolute font-poppins font-light inset-0 bg-cover bg-center flex flex-col items-center justify-center pt-16"
        style={{
          backgroundImage: `linear-gradient(155deg,rgba(0, 0, 0, 0.65) 31%,rgba(0, 0, 0, 0.65) 95%), url(${image})`,
        }}
      >
        <div className="px-2">
          {/* <motion.div
            className="flex justify-center flex-wrap text-4xl max-md:text-3xl font-bold max-sm:text-[1.3rem]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headingChars.map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                className="!text-white text-center "
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div> */}
          <div className="items-center text-center ">
            <img className="w-[550px] m-auto mr-8" src={Logo} alt="itech logo"></img>
          </div>
          <p
            className={
              "mt-[-65px] mb-10 !text-white tracking-wide text-center text-xl max-md:text-base font-extralight leading-relaxed"
            }
          >
            {heroDescription}
          </p>
          <div className="text-center">
            {/* <Button
              title="Best Business Consultant"
              className={
                "text-white mt-2 bg-theme !px-5 box-border  hover:text-theme hover:bg-transparent hover:border hover:border-theme cursor-pointer"
              }
            /> */}
            <Button
              title="Business Consulting"
              className={
                "text-white mt-2 bg-theme !px-5 box-border  hover:text-theme hover:bg-transparent hover:border hover:border-theme cursor-pointer"
              }
            />
            <Button
              title="IT & Marketing Solutions"
              className={
                "text-white m-auto block mt-3 bg-theme !px-5 box-border  hover:text-theme hover:bg-transparent hover:border hover:border-theme cursor-pointer"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
