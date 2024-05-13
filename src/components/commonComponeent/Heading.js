import React from 'react'

export default function Heading({ className, heading }) {
    return (
        <div>
            <h1 className={`text-[28px] lg:text-[40px] text-gray-800 font-[700] ${className}`}>{heading}</h1>
        </div>
    )
}
