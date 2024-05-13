"use client";
import React, { useEffect, useRef, useState } from "react";

const CounterCardCenter = ({
  CounterCard,
  headingClassName,
  descriptionClassName,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const countersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect the observer once the element is in the viewport
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={countersRef} className='flex flex-wrap pt-5 md:pt-12'>
        {CounterCard.map((card, index) => (
          <div
            key={index}
            className={`w-1/2 lg:w-1/4 text-center mb-2 lg:mb-0 `}
          >
            <h2
              className={`text-xl cursor-default sm:text-[36px] font-[700] mb-[5px] lg:pb-[20px] ${index === CounterCard.length - 1
                  ? ""
                  : "lg:border-r-2 border-r-[#ACACAC]"
                } ${headingClassName}`}
            >
              {isVisible ? (
                <CounterAnimation
                  end={parseInt(card.count.replace("+", ""))}
                  duration={1300}
                />
              ) : (
                0
              )}
              {"+"}
            </h2>
            <p
              className={`description_sub_text cursor-default mx-3 ${descriptionClassName}`}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

const CounterAnimation = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const totalSteps = Math.ceil(duration / 20);
    const stepValue = end / totalSteps;

    const interval = setInterval(() => {
      if (count < end) {
        setCount((prevCount) => Math.min(prevCount + stepValue, end));
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [count, end, duration]);

  return <span>{Math.round(count)}</span>;
};

export default CounterCardCenter;
