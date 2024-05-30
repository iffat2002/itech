import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { SiAircanada } from "react-icons/si";
import { GoGoal } from "react-icons/go";
import { GiLevelEndFlag } from "react-icons/gi";
import { PiStarThin } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
const WhyChooseUs = () => {
    return (
        <div className="container mx-auto p-4">
          <div className="section-head mb-15 text-center">
            <h4 className="relative font-poppins text-4xl font-bold text-[#1A1819] mb-7">
              Why choose <span className='text-[#48bc95]'>itechgram?</span>
              <span className="block w-15 h-0.75 bg-[#f91942] absolute left-0 bottom-[-10px] right-0 mx-auto"></span>
            </h4>
            <p className="text-center text-[#818181] w-[80%] max-sm:w-[90%] m-auto text-base leading-6">At itechgram, we bring a wealth of experience and expertise to the table, gained through successful projects across the globe. Here's why you should partner with us:
</p>
          </div>
    
          
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Item 1 */}
            <div className="item  bg-white text-center p-7 shadow-lg rounded-lg border-5 cursor-ponter border-opacity-25 border-black transition-all hover:bg-[#48bc95] hover:shadow-xl hover:text-white">
              <div className="icon item text-4xl mb-6 text-[#48bc95]  rounded-full bg-white m-auto w-12 h-12 leading-none flex items-center justify-center">
              <SiAircanada />
              </div>
              <h6 className="mb-3 text-xl font-semibold text-inherit hover:text-white ">Canadian Foundation</h6>
              <p className="text-base leading-6">With our headquarters in Canada, itechgram has established a strong foundation for delivering exceptional services globally.
</p>
            </div>
    
            {/* Item 2 */}
            <div className="item  bg-white text-center p-7 shadow-lg rounded-lg border-5 cursor-ponter border-opacity-25 border-black transition-all hover:bg-[#48bc95] hover:shadow-xl hover:text-white">
              <div className="icon item text-4xl mb-6 text-[#48bc95]  rounded-full bg-white m-auto w-12 h-12 leading-none flex items-center justify-center">
              <CiGlobe />
              </div>
              <h6 className="mb-3 text-xl font-semibold text-inherit hover:text-white ">Global Experience</h6>
              <p className="text-base leading-6">Our diverse portfolio of projects spans Canada, USA, UAE and more, allowing us to hone our skills in diverse markets and industries. Our international experience gives us a unique perspective and the ability to tackle challenges with creativity and innovation.

</p>
            </div>
    
            {/* Item 3 */}
            <div className="item  bg-white text-center p-7 shadow-lg rounded-lg border-5 cursor-ponter border-opacity-25 border-black transition-all hover:bg-[#48bc95] hover:shadow-xl hover:text-white">
              <div className="icon item text-4xl mb-6 text-[#48bc95]  rounded-full bg-white m-auto w-12 h-12 leading-none flex items-center justify-center">
              <GiLevelEndFlag />
              </div>
              <h6 className="mb-3 text-xl font-semibold text-inherit hover:text-white ">Proven Track Record</h6>
              <p className="text-base leading-6">itechgram has a proven track record of delivering exceptional results for clients around the world. From startups to multinational corporations, we've helped businesses of all sizes achieve their goals and exceed their expectations.


</p>
            </div>
{/* item 4 */}

            <div className="item  bg-white text-center p-7 shadow-lg rounded-lg border-5 cursor-ponter border-opacity-25 border-black transition-all hover:bg-[#48bc95] hover:shadow-xl hover:text-white">
              <div className="icon item text-4xl mb-6 text-[#48bc95]  rounded-full bg-white m-auto w-12 h-12 leading-none flex items-center justify-center">
              <GoGoal />
              </div>
              <h6 className="mb-3 text-xl font-semibold text-inherit hover:text-white ">Tailored Solutions</h6>
              <p className="text-base leading-6">We understand that every business is unique, which is why iTechGram offers customized solutions tailored to your specific needs and objectives. Whether you're looking for digital marketing, IT solutions, or business consulting, we'll work closely with you to develop strategies that drive growth and success.
</p>
            </div>


            <div className="item  bg-white text-center p-7 shadow-lg rounded-lg border-5 cursor-ponter border-opacity-25 border-black transition-all hover:bg-[#48bc95] hover:shadow-xl hover:text-white">
              <div className="icon item text-4xl mb-6 text-[#48bc95]  rounded-full bg-white m-auto w-12 h-12 leading-none flex items-center justify-center">
              <PiStarThin />
              </div>
              <h6 className="mb-3 text-xl font-semibold text-inherit hover:text-white ">Customer-Centric Approach</h6>
              <p className="text-base leading-6">Our clients are our top priority at iTechGram. We prioritize open communication, transparency, and collaboration to ensure that we're always aligned with your goals and objectives. Your success is our success.

</p>
            </div>

            <div className="item  bg-white text-center p-7 shadow-lg rounded-lg border-5 cursor-ponter border-opacity-25 border-black transition-all hover:bg-[#48bc95] hover:shadow-xl hover:text-white">
              <div className="icon item text-4xl mb-6 text-[#48bc95]  rounded-full bg-white m-auto w-12 h-12 leading-none flex items-center justify-center">
              <MdOutlineSupportAgent />
              </div>
              <h6 className="mb-3 text-xl font-semibold text-inherit hover:text-white ">Exceptional Support</h6>
              <p className="text-base leading-6 "> Our dedication to your success doesn't end with project delivery. itechgram offers ongoing support and guidance to help you navigate challenges, optimize performance, and stay ahead of the competition, no matter where you are in the world.
</p>
            </div>

          </div>
          <p className="text-center text-[#818181] py-10 w-[80%] max-sm:w-[90%] m-auto text-base leading-7">Choose itechgram as your global partner, and let's embark on a journey of success together.</p>
        </div>
      );
    };
export default WhyChooseUs