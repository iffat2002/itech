import React from 'react'

export default function Button({ className, title }) {
    return (
        <>
            <button className={`border-[1px] border-white rounded-full text-[20px] py-2.5 px-5 ${className}`} >{title}</button>
        </>
    )
}
