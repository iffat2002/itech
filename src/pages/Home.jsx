import React from "react";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import HeroImage from "../assets/images/hero-bg.jpg";
import Heading from "../components/commonComponeent/Heading";
import Description from "../components/commonComponeent/Description";
import CounterCardCenter from "../components/commonComponeent/CounterCardCenter";
import { FaFolder } from "react-icons/fa";
import HomeImg from "../assets/images/company.jpeg";
import Portfolio from "../components/Portfolio";
const Home = () => {
  const bulletPoints = [
    {
      list: "Business Consulting",
    },
    {
      list: "Web development",
    },
    {
      list: "Digital Marketing  ",
    },
    {
      list: "SEO",
    },
    {
      list: "Graphic designs",
    },
    {
      list: "Menu designs for restaurants",
    },
    {
      list: "Mobile Apps",
    },
  ];

  const CounterCard = [
    {
      count: "5",
      description: "years of experiance",
    },
    {
      count: "50",
      description: " Projects",
    },
    {
      count: "40",
      description: "Client",
    },
    {
      count: "7",
      description: " Team Members",
    },
  ];
  
  return (
    <div>
      <Hero
        image={HeroImage}
        heroHeading="Welcome to iTechgram Solutions"
        heroDescription={"We are using modern technologies"}
      />

      <section className="py-10 lg:py-20">
        <div className="container m-auto lg:px-10">
          <div className="flex items-center flex-col lg:flex-row gap-5 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <Heading
                heading={
                  "We Help you increase your productivity by developing software"
                }
              />

              <Description
                description={
                  "A team of ambitious developers and coders with marvelous skill set is always here for the customers to build mobile applications and online web solutions. Sumsols technology is a Pakistan based leading software house creating Ecommerce, CMS, ERP, Startup solutions, SaaS Solutions and many more."
                }
                className={"mt-3"}
              />
              <ul className="mt-5">
                {bulletPoints.map((item, index) => (
                  <li key={index} className="pb-1 flex items-center mt-2 ">
                    <FaFolder />
                    <span className="description_text  !opacity-100 ps-3">
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
      <Portfolio />
      <Testimonial />
    </div>
  );
};

export default Home;
