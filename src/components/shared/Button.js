import React from 'react'

export default function Button({ className, title }) {
    return (
        <>
            <button className={` rounded-full text-[20px] py-2 px-4 ${className}`} >{title}</button>
        </>
    )
}
