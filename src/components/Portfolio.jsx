// Portfolio.js

import React from "react";
import { motion } from "framer-motion";
import { MdDashboardCustomize } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import Heading from "./shared/Heading";
import Description from "./shared/Description";
import portfolio3 from "../assets/images/portfolio3.jpeg";
import portfolio4 from "../assets/images/portfolio4.jpeg";
import portfolio5 from "../assets/images/portfolio5.jpeg";
import portfolio6 from "../assets/images/portfolio6.jpeg";
import SubHeading from "./shared/SubHeading";
import dashboard from "../assets/images/dashboard.png";
import ecommerce from "../assets/images/ecommercew.jpg";
import Button from "./shared/Button";
import { Link } from "react-router-dom";
import mobileApps from "../assets/icons/mobile-apps.svg";
import newdashboard from "../assets/icons/dashboard.svg";
import newecommerce from "../assets/icons/ecommerce.svg";
import marketing from "../assets/icons/digital-marketing.svg";
import graphicDesign from "../assets/icons/graphic-design.svg";
import menu from "../assets/icons/menu.svg";
// import { FaShoppingCart } from "react-icons/fa";
// import { HiSpeakerphone } from "react-icons/hi";
import { MdMenuBook } from "react-icons/md";
// import { MdAppShortcut } from "react-icons/md";
// import { HiPaintBrush } from "react-icons/hi2";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FiMonitor } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { HiMiniCreditCard } from "react-icons/hi2";
import { FaCode } from "react-icons/fa6";
export default function Portfolio() {
  const portfolioContent = [
    {
      image: 
        <BsGraphUp className="w-full h-[50px] text-[#1A1819]" />,
   
      heading: "SEO Optimization",
      description:
        "ReactDash is a responsive dashboard template built using React.js, designed to provide a sleek and intuitive user interface for managing data and visualizing key metrics. The dashboard features interactive charts, customizable widgets, and a clean, modern design that adapts seamlessly to different screen sizes.",
    },
    {
      image: <HiMiniCreditCard className="w-full h-[50px] text-[#1A1819]" />,
      heading: "E commerce websites",
      description:
        "ShopNest is a full-fledged e-commerce website built with React.js and Node.js, offering a seamless shopping experience for customers. The website features a wide range of products, intuitive navigation, secure payment gateways, and a responsive design for optimal viewing on all devices.",
    },
    {
      image: <HiOutlineSpeakerphone className="w-full h-[50px] text-[#1A1819]" />,
      heading: "Digital Marketing",
      description:
        "Browse through our digital marketing portfolio to see how we have helped clients enhance their online presence and drive results. From engaging social media campaigns to targeted PPC ads, our portfolio demonstrates our ability to deliver impactful digital marketing solutions.",
    },
    {
      image: <FiMonitor
      className="w-full h-[50px] text-[#1A1819]" />,
      heading: "Graphic Design",
      description:
        "Immerse yourself in our graphic design portfolio, showcasing a diverse range of creative projects. From eye-catching logos to stunning branding materials, each design reflects our passion for creativity and attention to detail.",
    },
    {
      image: <MdMenuBook className="w-full h-[50px] text-[#1A1819]" />,
      heading: "Menu Designs for Restaurants",
      description:
        "Feast your eyes on our portfolio of restaurant menu designs, highlighting our ability to blend aesthetic appeal with practical functionality. Discover how we have helped restaurants enhance their branding and elevate the dining experience through visually enticing menus.",
    },
    {
      image: <FaCode className="w-full h-[50px] text-[#1A1819]" />,
      heading: "Mobile Apps",
      description:
        "Explore our mobile app portfolio to see the innovative apps we have developed for clients across industries. From intuitive user interfaces to seamless functionality, each app demonstrates our commitment to delivering engaging mobile experiences that delight users.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section
        className="pt-10 bg-office  bg-no-repeat bg-cover bg-center lg:pt-40 "
        id="portfolio"
      >
        <div className="bg-[#1A1819] bg-opacity-[0.9] text-white py-12">
          <div className="container m-auto lg:px-10 mb-12">
            <Heading
              heading={"Portfolio"}
              className="text-center text-[#48bc95] text-4xl "
            />
            <p className="w-[80%] mt-0 m-auto">
              Welcome to our Portfolio section! Here, you'll find a showcase of
              our diverse and innovative IT projects, highlighting our expertise
              and commitment to delivering top-notch solutions. Explore our work
              and see how we've helped businesses like yours achieve their goals
              through technology.
            </p>
          </div>
          <div className="bg-[#48bc95] w-full py-6">
            <div className="grid w-[90%] m-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-8">
              {portfolioContent.map((item, index) => (
                <Card
                  key={index}
                  item={item}
                  index={index}
                  cardVariants={cardVariants}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ item, index, cardVariants }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      id="portfolio"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {item.image}
      <div className="mt-2 text-center">
        <SubHeading subHeading={item.heading} />
        <Description description={item.description} className={"mt-1 mb-3"} />
        {/* <div className=''>
          <Link to="/services">
            <Button title={"Our Services"} className={"bg-[#4ecca2] font-mediam text-[12px] text-white"} />
          </Link>
        </div> */}
      </div>
    </motion.div>
  );
}
