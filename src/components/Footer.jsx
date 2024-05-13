import React from "react";
import { Link } from "react-router-dom";
import ItechLogo from "../assets/images/Itech.jpg";
import Facebook from "../assets/images/Facebook.png";
import Tiktok from "../assets/images/Tiktok.png";
import Instagram from "../assets/images/Instgram.png";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-5 lg:px-0 pt-10 lg:pt-0 lg:!py-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Address Section */}
        <div className="footer-section">
          <img src={ItechLogo} alt="Itechlogo" className="w-64 cursor-pointer" />
          <h2 className="mb-6 ms-2 text-2xl font-bold text-white uppercase dark:text-white">
            Address
          </h2>
          <p className="text-white ms-2 font-bold">
          Mississauga ON
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
          <h2 className="mb-6 text-2xl font-bold text-white uppercase dark:text-white">
            Contact
          </h2>
          <p className="text-white font-bold">+1 (437) 2620900</p>
          <a href="mailto:services.qcp@gmail.com">
            <p className="text-lg font-bold mt-2 text-white font-nunito cursor-pointer">
            services@itechgram.com 
            </p>
          </a>
        </div>

        {/* More Information Section */}
        <div className="footer-section">
          <h2 className="mb-6 text-xl font-bold text-white uppercase dark:text-white">
            More Information
          </h2>
          <ul className="text-white font-bold dark:text-white  text-xl">
            <li className="mb-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="mb-4 flex gap-2">
              {/* <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61557566717189"
              >
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="w-[50px] cursor-pointer"
                />
              </a> */}

              {/* <a
                target="_blank"
                href="https://www.tiktok.com/@qualitycarepainting?_t=8YgiFQRSzRu&_r=1"
              >
                {" "}
                <img
                  src={Tiktok}
                  alt="Twitter"
                  className="w-[50px] rounded-xl cursor-pointer"
                />{" "}
              </a> */}

              <a
                target="_blank"
                href="https://www.instagram.com/itechgramsolutions"
              >
                {" "}
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="w-[50px] cursor-pointer"
                />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col justify-center text-center items-center pb-24 pt-4 lg:pt-0 lg:!pb-4 ">
        <h2 className="text-white text-sm px-5">
          &copy; 2024 Right Reserved - Powered By Itechgram
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
