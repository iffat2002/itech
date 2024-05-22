import React from 'react';
import ClientsReview from '../components/ClientsReview';
import HeroImage from "../assets/images/paint2.png";
import service1 from "../assets/images/service1.jpeg";
import service2 from "../assets/images/service2.jpeg";
import service3 from "../assets/images/service3.jpeg";
import service4 from "../assets/images/seocon.jpg";
import service5 from "../assets/images/graphicscon.jpg";
import service6 from "../assets/images/service6.jpeg";
import service7 from "../assets/images/mobilecon.jpg";
import business from '../assets/images/business.jpg';
import itbg from '../assets/images/it.jpg';
import web from '../assets/images/web.jpg';
import { Link } from 'react-router-dom';
import Banner from '../components/commonComponeent/Banner';
import ServiceItem from '../components/ServiceItem';

const Services = () => {
    const data = [
        {
            title: "Business Consulting",
            text: "Our business consulting services offer tailored strategies and expert guidance to optimize your operations and drive sustainable growth. From market analysis to strategic planning, we provide actionable insights to help you stay ahead in today's competitive landscape.",
            image: business,
        },
        {
            title: "Web Development",
            text: "Elevate your online presence with our professional web development services. Our experienced team combines creativity with technical expertise to design and develop responsive, user-friendly websites that captivate your audience and drive engagement.",
            image: web,
        },
        {
            title: "Digital Marketing",
            text: "Reach your target audience effectively with our comprehensive digital marketing solutions. From social media management to email campaigns, we leverage data-driven strategies and cutting-edge techniques to enhance your online visibility, attract customers, and maximize ROI.",
            image: service3,
        },
        {
            title: "SEO(search engine optimization)",
            text: "Improve your search engine rankings and drive organic traffic to your website with our SEO services. Our proven strategies focus on keyword optimization, content creation, and technical enhancements to help you climb the search engine results pages and increase visibility.",
            image: service4,
        },
        {
            title: "Graphic Design",
            text: " Make a lasting impression with our professional graphic design services. Whether you need branding materials, promotional collateral, or digital assets, our creative team delivers stunning designs that resonate with your audience and elevate your brand image.",
            image: service5,
        },
        {
            title: "Menu Designs for Restaurants",
            text: " Enhance your restaurant's appeal and showcase your offerings with our menu design services. From eye-catching layouts to mouth-watering imagery, we create visually appealing menus that entice diners and enhance their dining experience.",
            image: service6,
        },
        {
            title: "Mobile Apps",
            text: "Stay connected with your audience on the go with our custom mobile app development services. From iOS to Android, we design and develop intuitive, user-friendly mobile apps that engage users, drive conversions, and enhance brand loyalty.",
            image: service7,
        },
    ];

    return (
        <div>
            <Banner image={itbg} />
            <div className='bg-cover bg-center p-4 mt-5'>
                <h2 className="text-[15px] md:text-[25px] text-center font-bold whitespace-nowrap">
                    Our Services
                </h2>
                <p className="text-xl leading-relaxed justify-center flex text-center text-gray-800 items-center mt-2">
                    Explore Our Range of Expert Services to Elevate Your Business
                </p>
            </div>
            {data.map((item, index) => (
                <ServiceItem key={index} item={item} index={index} />
            ))}
            <ClientsReview />
        </div>
    );
}

export default Services;
