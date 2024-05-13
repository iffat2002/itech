import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, StarHalf } from "lucide-react";
import Heading from "./commonComponeent/Heading";

const testimonialList = [
    {
        author: {
            fullName: "Jennifer Brown",
            picture: "https://cdn.easyfrontend.com/pictures/users/user18.jpg",
        },
        rating: 4,
        description:
            "Thanks to their insightful consulting, our business saw a remarkable transformation. iTechgram Solution's strategic guidance propelled us toward success!"
    },
    {
        author: {
            fullName: "Sarah Thompson",
            picture: "https://cdn.easyfrontend.com/pictures/users/user22.jpg",
        },
        rating: 3.5,
        description:
            "We're thrilled with the mobile app iTechgram Solution developed for us. It's user-friendly, aesthetically pleasing, and has helped us better engage with our customers."
    },
    {
        author: {
            fullName: "Michael Rodriguez",
            picture: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
        },
        rating: 4,
        description:
            "Our restaurant's menu received a complete makeover thanks to iTechgram Solution. The new design not only looks fantastic but also resonates with our diners"
    },
    {
        author: {
            fullName: "Emily Johnson",
            picture: "https://cdn.easyfrontend.com/pictures/users/user20.jpg",
        },
        rating: 5,
        description:
            "Their graphic design work was top-notch! iTechgram Solution's creativity and attention to detail shone through in every design they produced."
    },
    {
        author: {
            fullName: "David Smith",
            picture: "https://cdn.easyfrontend.com/pictures/users/user21.jpg",
        },
        rating: 3.5,
        description:
            "Choosing iTechgram Solution for our digital marketing needs was a game-changer. Their campaigns brought in tangible results, and their team was a pleasure to work with."
    },
    {
        author: {
            fullName: "Jennifer Brown",
            picture: "https://cdn.easyfrontend.com/pictures/users/user18.jpg",
        },
        rating: 4,
        description:
            "iTeghram Solution's SEO services gave our online visibility a significant boost. We now rank higher in search results, attracting more organic traffic than ever before."
    },
    {
        author: {
            fullName: "Jennifer Brown",
            picture: "https://cdn.easyfrontend.com/pictures/users/user18.jpg",
        },
        rating: 4,
        description:
            "The website iTechgram Solution developed for us not only looks stunning but also functions flawlessly. They truly exceeded our expectations!"
    },

];

const Rating = ({ rating, showLabel, className }) => (
    <p className={className}>
        {[...Array(5)].map((_, i) => {
            const index = i + 1;
            let content = "";
            if (index <= Math.floor(rating))
                content = <Star key={i} className="text-yellow-500" />;
            else if (rating > i && rating < index + 1)
                content = <StarHalf key={i} className="text-yellow-500" />;
            else if (index > rating)
                content = <Star key={i} className="text-yellow-200 dark:text-opacity-20" />;

            return <Fragment key={i}>{content}</Fragment>;
        })}
        {showLabel && <span>{rating.toFixed(1)}</span>}
    </p>
);

const TestimonialItem = ({ testimonial }) => (
    <div className="bg-white border mr-2 rounded-2xl p-6 lg:p-8 h-[280px] md:h-[250px] cursor-pointer">
        {/* <img
            src={testimonial.author.picture}
            alt={testimonial.author.fullName}
            className="h-auto rounded-full mb-6 border"
            width="100"
        /> */}
        <h4 className="text-xl font-medium mb-1">{testimonial.author.fullName}</h4>
        <Rating rating={testimonial.rating} showLabel={false} className="mb-6 flex flex-row" />
        <p className="opacity-80">{testimonial.description}</p>
    </div>
);

const ClientsReview = () => {
    const sliderSettings1 = {
        // dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        cssEase: 'linear',
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <section className="ezy__testimonial7 light py-12 px-8 bg-[#f2f5f7]">
            <div className="container  mx-auto">
                <div className="grid grid-cols-12 mb-6 md:mb-12">
                    <div className="col-span-12 lg:col-span-5">
                        <Heading heading={"Everyone should believe in What Our Client Say."} />
                    </div>
                </div>

                <Slider {...sliderSettings1} className="flex justify-center mb-8">
                    {testimonialList.map((testimonial, i) => (
                        <div key={i}>
                            <TestimonialItem testimonial={testimonial} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ClientsReview;
