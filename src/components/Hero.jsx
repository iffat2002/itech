import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from "../assets/icons/Logo.png"
import Heading from './shared/Heading';
import Description from './shared/Description';
import Button from './shared/Button';

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
      <div className="absolute inset-0 bg-cover bg-center flex flex-col items-center justify-center pt-16"
        style={{ backgroundImage: `linear-gradient(155deg,rgba(0, 0, 0, 0.65) 31%,rgba(0, 0, 0, 0.65) 95%), url(${image})` }}>
        <div className='px-2'>
          <motion.div
            className="flex justify-center flex-wrap text-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headingChars.map((char, index) => (
              <motion.span key={index} variants={charVariants} className="!text-white text-center">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
          <Description description={heroDescription} className={'my-3 !text-white text-center'} />
          <div className='text-center'>
            <Button title="Best Business Consultant" className={"text-white mt-2 bg-theme  hover:text-theme hover:bg-transparent hover:border hover:border-theme cursor-pointer"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
