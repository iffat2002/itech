import React from "react";
import ItechLogo from "../assets/images/transparent-logo.png";
import tick from "../assets/icons/checkMark.svg";
export const BusinessConsult = () => {
  return (
    <div className="w-screen py-10">
      <div className="bg-business w-screen h-screen bg-center bg-cover">
        <div className="container py-10 ">
          <img
            src={ItechLogo}
            className="w-[350px] "
            alt="itech sulutions logo"
          ></img>
          <h1 className="w-[50%] max-sm:text-4xl max-md:text-5xl font-poppins uppercase pl-20 max-sm:pl-10  text-6xl text-white">
            Business Consulting
          </h1>
          <p className="w-[52%] max-md:w-[90%] max-sm:w-[95%]  pl-20 max-sm:pl-10   text-xl mt-10 text-white">
            Unlock the full potential of your business with our comprehensive
            business consulting services. Our expert team specializes in a range
            of services, including:
          </p>
        </div>
      </div>
      <div className="container p-10 max-sm:px-0 py-12 mt-10 w-[90%] m-auto">
        <ul className="bullets">
          <li>
            <img src={tick} className="w-8 inline-block"></img>{" "}
            <span className="font-bold max-sm:text-base text-lg">Strategic Planning</span>
            <p className="ml-10 mt-[-6px] w-[65%] max-sm:w-[90%]">
              Develop actionable plans to achieve long-term business goals,
              aligning your vision with market opportunities and internal
              capabilities.
            </p>
          </li>

          <li>
            <img src={tick} className="w-8 inline-block"></img>{" "}
            <span className="font-bold max-sm:text-base text-lg">Market Research</span>
            <p className="ml-10 mt-[-6px] w-[65%] max-sm:w-[90%]">
              Gain insights into market trends, customer needs, and competitive
              landscapes, enabling you to make informed decisions and stay
              ahead.
            </p>
          </li>

          <li>
            <img src={tick} className="w-8 inline-block"></img>{" "}
            <span className="font-bold max-sm:text-base text-lg">Financial Consulting</span>
            <p className="ml-10 mt-[-6px] w-[65%] max-sm:w-[90%] ">
              Optimize your financial performance with expert advice on
              budgeting, forecasting, and financial strategy, ensuring
              sustainable growth and profitability.
            </p>
          </li>

          <li>
            <img src={tick} className="w-8 inline-block"></img>{" "}
            <span className="font-bold max-sm:text-base text-lg">
              Business Process Optimization
            </span>
            <p className="ml-10 mt-[-6px] w-[65%] max-sm:w-[90%] ">
              Streamline your operations with business process optimization,
              aimed at improving efficiency, reducing costs, and enhancing
              overall productivity.
            </p>
          </li>

          <li>
            <img src={tick} className="w-8 inline-block"></img>{" "}
            <span className="font-bold max-sm:text-base text-lg">
              Marketing and Business Strategy
            </span>
            <p className="ml-10 mt-[-6px] w-[65%] max-sm:w-[90%] ">
              Craft powerful marketing strategies tailored to your business
              goals, boosting your brand's visibility, engaging your target
              audience, and driving growth.
            </p>
          </li>
          <li>
            <p className="mt-4 text-justify">
              These are just a few examples of how we can help your business
              thrive. Let us empower your leadership team, enhance customer
              satisfaction, and mitigate risks for long-term resilience. With
              our guidance, your business will thrive in today's competitive
              landscape. Choose itechgram as your trusted partner in
              business consulting.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
