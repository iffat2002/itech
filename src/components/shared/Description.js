import React from 'react'

export default function Description({ className, description }) {
    return (
        <div>
            <p className={`text-sm md:text-base leading-relaxed text-gray-800  ${className}`}>{description}</p>
        </div>
    )
}
