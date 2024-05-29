import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, StarHalf } from "lucide-react";
import Heading from "./shared/Heading";

const testimonialList = [
  {
    author: {
      fullName: "Akira Tanaka",
      picture: "https://cdn.easyfrontend.com/pictures/users/user22.jpg",
    },
    rating: 3.5,
    description:
      "The AI-powered solutions from Hims have boosted my confidence significantly. I'm happy with the results!",
  },
  {
    author: {
      fullName: "Sofia Martinez",
      picture: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
    },
    rating: 4,
    description:
      "Hims' AI solutions have made a noticeable difference for me. Highly recommended!",
  },
  {
    author: {
      fullName: "Asmar Naeem",
      picture: "https://cdn.easyfrontend.com/pictures/users/user20.jpg",
    },
    rating: 5,
    description:
      "Being part of the Hims community has been fantastic. Their tech-driven healthcare is seamless and effective.",
  },
  {
    author: {
      fullName: "Amina Mohammed",
      picture: "https://cdn.easyfrontend.com/pictures/users/user21.jpg",
    },
    rating: 3.5,
    description:
      "Hims' AI innovations have personalized my wellness journey. The testimonials are true!",
  },
  {
    author: {
      fullName: "Elena Petrova",
      picture: "https://cdn.easyfrontend.com/pictures/users/user18.jpg",
    },
    rating: 4,
    description:
      "Hims' AI healthcare solutions are transformative. I'm very pleased with the positive changes I've experienced.",
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
        content = (
          <Star key={i} className="text-yellow-200 dark:text-opacity-20" />
        );

      return <Fragment key={i}>{content}</Fragment>;
    })}
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

const TestimonialItem = ({ testimonial }) => (
  <div className="bg-white border mr-2 rounded-2xl p-6 lg:p-8 cursor-pointer md:h-[250px] h-[280px]">
    {/* <img
      src={testimonial.author.picture}
      alt={testimonial.author.fullName}
      className="h-auto rounded-full mb-6 border"
      width="100"
    /> */}
    <h4 className="text-xl font-medium mb-1">{testimonial.author.fullName}</h4>
    <Rating
      rating={testimonial.rating}
      showLabel={false}
      className="mb-6 flex flex-row"
    />
    <p className="opacity-80">{testimonial.description}</p>
  </div>
);

const Testimonial = () => {
  const sliderSettings1 = {
    // dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
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

  const sliderSettings2 = {
    // dots: true
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    rtl: true, // Right to left slider
    cssEase: "linear",
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
    <section className="ezy__testimonial7 light py-12 bg-[rgb(233,239,244)]">
      <div className="container lg:px-8 mx-auto">
        <div className="text-center mb-5">
          <Heading heading={"Testimonials"} />
        </div>

        <Slider {...sliderSettings1} className="flex justify-center mb-8">
          {testimonialList.map((testimonial, i) => (
            <div key={i}>
              <TestimonialItem testimonial={testimonial} />
            </div>
          ))}
        </Slider>

        <Slider {...sliderSettings2} className="flex justify-center">
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

export default Testimonial;
