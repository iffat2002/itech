// Portfolio.js

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Heading from './shared/Heading';
import Description from './shared/Description';
import portfolio3 from "../assets/images/portfolio3.jpeg";
import portfolio4 from "../assets/images/portfolio4.jpeg";
import portfolio5 from "../assets/images/portfolio5.jpeg";
import portfolio6 from "../assets/images/portfolio6.jpeg";
import SubHeading from './shared/SubHeading';
import dashboard from '../assets/images/dashboard.png';
import ecommerce from '../assets/images/ecommercew.jpg';
import Button from './shared/Button';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const portfolioContent = [
    {
      image: dashboard,
      heading: 'Dashboards',
      description: 'ReactDash is a responsive dashboard template built using React.js, designed to provide a sleek and intuitive user interface for managing data and visualizing key metrics. The dashboard features interactive charts, customizable widgets, and a clean, modern design that adapts seamlessly to different screen sizes.'
    },
    {
      image: ecommerce,
      heading: 'E commerce websites',
      description: 'ShopNest is a full-fledged e-commerce website built with React.js and Node.js, offering a seamless shopping experience for customers. The website features a wide range of products, intuitive navigation, secure payment gateways, and a responsive design for optimal viewing on all devices.'
    },
    {
      image: portfolio3,
      heading: 'Digital Marketing',
      description: 'Browse through our digital marketing portfolio to see how we have helped clients enhance their online presence and drive results. From engaging social media campaigns to targeted PPC ads, our portfolio demonstrates our ability to deliver impactful digital marketing solutions.'
    },
    {
      image: portfolio4,
      heading: 'Graphic Design',
      description: 'Immerse yourself in our graphic design portfolio, showcasing a diverse range of creative projects. From eye-catching logos to stunning branding materials, each design reflects our passion for creativity and attention to detail.'
    },
    {
      image: portfolio5,
      heading: 'Menu Designs for Restaurants',
      description: 'Feast your eyes on our portfolio of restaurant menu designs, highlighting our ability to blend aesthetic appeal with practical functionality. Discover how we have helped restaurants enhance their branding and elevate the dining experience through visually enticing menus.'
    },
    {
      image: portfolio6,
      heading: 'Mobile Apps',
      description: 'Explore our mobile app portfolio to see the innovative apps we have developed for clients across industries. From intuitive user interfaces to seamless functionality, each app demonstrates our commitment to delivering engaging mobile experiences that delight users.'
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className='py-10 lg:py-20' id="portfolio">
        <div className="container m-auto lg:px-10">
          <Heading heading={"Portfolio"} className={"text-center"} />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-8'>
            {portfolioContent.map((item, index) => (
              <Card key={index} item={item} index={index} cardVariants={cardVariants} />
            ))}
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
      id='portfolio'
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <img src={item.image} className="w-full h-[200px] rounded-lg" alt="Services" />
      <div className='mt-2'>
        <SubHeading subHeading={item.heading} />
        <Description description={item.description} className={"mt-2 mb-3"} />
        <div className=''>
          <Link to="/services">
            <Button title={"Our Services"} className={"bg-[#4ecca2] font-mediam text-[12px] text-white"} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
