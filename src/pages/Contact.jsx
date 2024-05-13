import React from 'react';
import Hero from '../components/Hero';
import Contactimg from "../assets/images/Contactus.jpg";
import LocationIcon from "../assets/images/location.svg";
import EmailIcon from "../assets/images/gmail1.png";
import MsgIcon from "../assets/images/Phone.png";

const Contact = () => {
    return (
        <div className='mb-12'>
            <Hero image={Contactimg} title="Contact Us" />
            <div className="p-8">
                <div className='w-[95%] flex justify-center items-center gap-2 mt-10'>
                    <div className='h-[2px] bg-[#f15a2d] w-[40%]'></div>
                    <div className='flex justify-center items-center text-gray-900'>
                        <h2 className="text-[15px] md:text-[25px] font-bold whitespace-nowrap">
                            Get in Touch
                        </h2>
                    </div>
                    <div className='h-[2px] w-[40%] bg-[#f15a2d]'></div>
                </div>
                <p className="text-xl leading-relaxed justify-center flex text-center text-gray-800 items-center mt-5 mb-10">
                    Ready to transform your space? Contact us today to schedule a consultation and experience the Quality Care Painting difference.
                </p>
                <div className='flex justify-center md:basis-[30%] flex-col md:flex-row gap-4 mt-8'>
                    <div className="flex flex-col items-center mx-5 text-center">
                        <img src={LocationIcon} alt="Location Icon" className="w-20 h-20 mx-auto" />
                        <p className="text-lg font-semibold mt-2 text-paragraphcolor font-nunito">
                            2219 North ridge trail,<br />
                            Oakville ON<br />
                            L6H 6W2
                        </p>
                    </div>
                    <div className="flex flex-col items-center mx-5 text-center">
                        <img src={EmailIcon} alt="Email Icon" className="w-20 h-20 mx-auto" />
                        <a href="mailto:services.qcp@gmail.com">
                            <p className="text-lg font-semibold mt-2 text-paragraphcolor font-nunito cursor-pointer">
                                services.qcp@gmail.com
                            </p>
                        </a>
                    </div>
                    <div className="flex flex-col items-center mx-5 text-center">
                        <img src={MsgIcon} alt="Message Icon" className="w-20 h-20 mx-auto" />
                        <p className="text-lg font-semibold mt-2 text-paragraphcolor font-nunito">
                            +1 (647) 806-3030
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;
