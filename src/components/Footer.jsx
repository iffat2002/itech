import React from "react";
import { Link } from "react-router-dom";
import ItechLogo from "../assets/images/transparent-logo.png";
import Facebook from "../assets/images/Facebook.png";
import Tiktok from "../assets/images/Tiktok.png";
import Instagram from "../assets/images/Instgram.png";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#1A1819] text-white pb-10">
      <div className="container mx-auto ">
        {/* Address Section */}
        <div className="footer-section m-auto w-fit">
          <img
          
            src={ItechLogo}
            alt="Itechlogo"
            className=" w-[500px] max-sm:w-[300px] m-auto cursor-pointer"
          />
          {/* <h2 className="mb-4 text-2xl font-bold uppercase hover:text-theme">Address</h2>
          <p className="font-bold hover:text-theme">Mississauga ON</p> */}
        </div><div className="mt-[-48px] flex
    justify-center cursor-pointer ml-8">
        <FaLocationDot className="inline-block text-theme text-xl mr-2"/>
 <p className=" hover:text-theme text-sm inline-block">Mississauga, Ontario, Canada</p>
 </div>
        {/* Contact Information Section */}
        <div className="footer-section text-center lg:text-left w-fit m-auto py-2 pb-4">
          {/* <h2 className="mb-4 text-2xl font-bold uppercase hover:text-theme">Contact</h2>
          <p className="font-bold hover:text-theme">+1 (437) 2620900</p>
          <a href="mailto:services.qcp@gmail.com" className="block mt-2 text-lg font-bold hover:text-theme">
            services@itechgram.com
          </a> */}
          <ul className="flex flex-row gap-14 text-sm mt-10 uppercase font-semibold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <hr></hr>

        {/* More Information Section */}
        {/* <div className="footer-section text-center lg:text-left">
          <h2 className="mb-4 text-2xl font-bold uppercase hover:text-theme">More Information</h2>
          <ul className="space-y-4 text-xl font-bold">
            <li>
              <Link to="" className="hover:text-theme">Contact Us</Link>
            </li>
            <li className="flex justify-center lg:justify-start gap-4">
              {/* <a target="_blank" href="https://www.facebook.com/profile.php?id=61557566717189">
                <img src={Facebook} alt="Facebook" className="w-10 cursor-pointer" />
              </a> */}
        {/* <a target="_blank" href="https://www.tiktok.com/@qualitycarepainting?_t=8YgiFQRSzRu&_r=1">
                <img src={Tiktok} alt="Tiktok" className="w-10 cursor-pointer" />
              </a> */}
        {/* <a target="_blank" href="https://www.instagram.com/itechgramsolutions">
                <img src={Instagram} alt="Instagram" className="w-10 cursor-pointer" />
              </a>
            </li>
          </ul>
        </div> */}
        {/* Footer Bottom Section */}
        <div className="flex flex-row max-md:flex-col max-md:gap-4 items-center max-md:justify-center justify-between py-8">
          <h2 className="text-base max-sm:text-sm">
            &copy; 2024 Right Reserved - Powered By Itechgram
          </h2>
         
          <div className="flex justify-center lg:justify-start gap-2">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61557566717189"
            >
             <FaFacebookSquare  className="text-theme text-4xl" />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/itechgramsolutions"
            >   <AiFillInstagram className="text-theme text-4xl"/> </a>
             <a target="_blank" href="https://www.tiktok.com/@itechgram?_t=8meQIyxuNqX&_r=1">
              <AiFillTikTok className="text-theme text-4xl"/>
              </a> 
              <a target="_blank" href="https://www.linkedin.com/in/itechgram-solutions-5ab94530b/">
              <FaLinkedin className="text-theme text-4xl"/>
              </a> 
        
          </div>
          <div>
            <p className="font-bold hover:text-theme text-base inline-block max-sm:text-xs mr-2">
              +1 (437) 2620900
            </p>
            <span>|</span>
            <a
              href="mailto:services.qcp@gmail.com"
              className="ml-2 inline-block text-base font-bold hover:text-theme  max-sm:text-xs"
            >
              services@itechgram.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
