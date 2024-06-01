import React from "react";
import Heading from "./Heading";
import Description from "./Description";
import Button from "./Button";

const Banner = ({ image, bannerHeading }) => {
  return (
    <>
      <div className="bg-hero  !h-[475px] opacity-[0.7] w-full  absolute z-40 top-[-26px]">
            {/* <Heading heading={bannerHeading} className={"!text-white text-center"} /> */}
          </div>
      <div className="relative !h-[450px] ">
        <div
          className="absolute inset-0 bg-cover z-0 bg-center flex flex-col items-center justify-center pt-16"
          style={{
            backgroundImage: `linear-gradient(155deg,rgba(0, 0, 0, 0.65) 31%,rgba(0, 0, 0, 0.65) 95%), url(${image})`,
          }}
        >
        
        </div>
      </div>
    </>
  );
};

export default Banner;
