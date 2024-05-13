import React from 'react'

export default function SubHeading({ className, subHeading }) {
    return (
        <>
            <h3 className={`text-[18px] lg:text-[24px] text-gray-800 font-[700] ${className}`}>{subHeading}</h3>
        </>
    )
}
