import React from "react";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import HeroImage from "../assets/images/hero-bg.jpg";
import Heading from "../components/shared/Heading";
import Description from "../components/shared/Description";
import CounterCardCenter from "../components/shared/CounterCardCenter";
import { FaFolder } from "react-icons/fa";
import HomeImg from "../assets/images/company.jpeg";
import businessConsulting from "../assets/icons/business-consulting.svg";
import webdevelopment from "../assets/icons/web-development.svg";
import seo from "../assets/icons/seo.svg";
import marketing from "../assets/icons/digital-marketing.svg";
import graphicDesign from "../assets/icons/graphic-design.svg";
import menu from "../assets/icons/menu.svg";
import mobileApps from "../assets/icons/mobile-apps.svg";
import WhyChooseUs from  "../components/WhyChooseUs"
import Portfolio from "../components/Portfolio";
const Home = () => {
  const bulletPoints = [
    {
      list: "Business Consulting",
      icon: businessConsulting,
    },
    {
      list: "Web development",
      icon: webdevelopment
    },
    {
      list: "Digital Marketing  ",
      icon: marketing
    },
    {
      list: "SEO",
      icon: seo
    },
    {
      list: "Graphic designs",
      icon: graphicDesign
    },
    {
      list: "Menu designs for restaurants",
      icon: menu
    },
    {
      list: "Mobile Apps",
      icon: mobileApps
    },
  ];

  const CounterCard = [
    {
      count: "5",
      description: "years of experience",
    },
    {
      count: "50",
      description: "Projects",
    },
    {
      count: "40",
      description: "Clients",
    },
    {
      count: "10",
      description: " Team Members",
    },
  ];
  return (
    <div>
      <Hero
        image={HeroImage}
        heroHeading="Welcome to itechgram Solutions"
        heroDescription={"Where Success Begins"}
        // heroDescription={"We are using modern technologies"}

      />
      <section className="py-10 lg:py-20">
        <div className="container m-auto lg:px-10">
          <div className="flex items-center flex-col lg:flex-row gap-5 lg:gap-20">
            <div className="w-full lg:w-1/2">
              {/* <Heading heading={"We Help you increase your productivity by developing software"} /> */}
              <h1 className="text-[22px] md:text-[1.75rem] lg:text-4xl font-bold pb-2 mb-4 md:mb-8 text-[#48bc95]">
                We help you increase your productivity by developing software
              </h1>
              <Description
                description={
                  "A team of ambitious developers and coders with marvelous skill set is always here for the customers to build mobile applications and online web solutions. Sumsols technology is a Pakistan based leading software house creating Ecommerce, CMS, ERP, Startup solutions, SaaS Solutions and many more."
                }
                className={"mt-3"}
              />
              <ul className="mt-5">
                {bulletPoints.map((item, index) => (
                  <li key={index} className="pb-1 flex items-center mt-2 ">
                    {/* <FaFolder /> */}{" "}
                    <img
                      className="w-9 "
                      src={item.icon}
                      alt="icon"
                    ></img>
                    <span className="description_text font-semibold hover:text-[#48bc95] cursor-pointer !opacity-100 ps-3">
                      {item.list}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={HomeImg}
                className=" w-full rounded-lg"
                alt="Services"
              />
            </div>
          </div>
          <div className="mt-5">
            <CounterCardCenter
              CounterCard={CounterCard}
              headingClassName="!text-black"
              descriptionClassName="opacity-[0.7] !text-[16px]"
            />
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Portfolio />
      <Testimonial />
    </div>
  );
};

export default Home;
