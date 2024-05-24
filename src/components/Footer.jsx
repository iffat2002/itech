import React from "react";
import { Link } from "react-router-dom";
import ItechLogo from "../assets/images/Itech.jpg";
import Facebook from "../assets/images/Facebook.png";
import Tiktok from "../assets/images/Tiktok.png";
import Instagram from "../assets/images/Instgram.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-5 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Address Section */}
        <div className="footer-section text-center lg:text-left">
          <img src={ItechLogo} alt="Itechlogo" className="mx-auto lg:mx-0 w-48 mb-4 cursor-pointer" />
          <h2 className="mb-4 text-2xl font-bold uppercase hover:text-theme">Address</h2>
          <p className="font-bold hover:text-theme">Mississauga ON</p>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section text-center lg:text-left">
          <h2 className="mb-4 text-2xl font-bold uppercase hover:text-theme">Contact</h2>
          <p className="font-bold hover:text-theme">+1 (437) 2620900</p>
          <a href="mailto:services.qcp@gmail.com" className="block mt-2 text-lg font-bold hover:text-theme">
            services@itechgram.com
          </a>
        </div>

        {/* More Information Section */}
        <div className="footer-section text-center lg:text-left">
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
              <a target="_blank" href="https://www.instagram.com/itechgramsolutions">
                <img src={Instagram} alt="Instagram" className="w-10 cursor-pointer" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center py-4">
        <h2 className="text-sm px-5">
          &copy; 2024 Right Reserved - Powered By Itechgram
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
