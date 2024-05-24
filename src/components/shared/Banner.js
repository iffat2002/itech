import React from 'react';
import Heading from './Heading';
import Description from './Description';
import Button from './Button';


const Banner = ({ image, bannerHeading, }) => {
    return (
        <div className="relative !h-[450px]">
            <div className="absolute inset-0 bg-cover bg-center flex flex-col items-center justify-center pt-16"
                style={{ backgroundImage: `linear-gradient(155deg,rgba(0, 0, 0, 0.65) 31%,rgba(0, 0, 0, 0.65) 95%), url(${image})` }}>
                <div className='px-2'>
                    {/* <Heading heading={bannerHeading} className={"!text-white text-center"} /> */}
                </div>
            </div>
        </div>
    );
}

export default Banner;
