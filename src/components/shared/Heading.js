import React from 'react'

export default function Heading({ className, heading }) {
    return (
        <div>
            {/* <h1 className={`text-[28px] lg:text-[40px] text-gray-800 font-[700] ${className}`}>{heading}</h1> */}

            <h1 className={`text-[22px] md:text-[1.75rem] lg:text-4xl font-bold pb-2 mb-4 md:mb-8 relative ${className}`}>
                {heading}
                <span
                    className="absolute bottom-0 right-1/2 transform -translate-x-1/2 bg-theme"
                    style={{ height: "4px", width: "40px" }}
                ></span>
            </h1>

        </div>
    )
}
