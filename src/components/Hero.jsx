import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/icons/Logo.png"
import Heading from './commonComponeent/Heading';
import Description from './commonComponeent/Description';
import Button from './commonComponeent/Button';

const Hero = ({ image, title, heroHeading, heroDescription }) => {
  return (
    <div className="relative h-[500px] lg:h-screen">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div> */}
      <div className="absolute inset-0 bg-cover bg-center flex flex-col items-center justify-center pt-16"
        style={{ backgroundImage: `linear-gradient(155deg,rgba(0, 0, 0, 0.65) 31%,rgba(0, 0, 0, 0.65) 95%), url(${image})` }}>
        <div className='px-2'>
          <Heading heading={heroHeading} className={"!text-white text-center"} />
          <Description description={heroDescription} className={'my-3 !text-white text-center'} />
          <div className='text-center'>
            <Button title="Best Business Consultant" className={"text-white mt-2"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
