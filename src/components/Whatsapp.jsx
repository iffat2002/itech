import React from 'react'
import Whatsappicon from "../assets/icons/whatsapp (2).png"

const Whatsapp = () => {
    return (
        <div className="fixed z-10 right-0 bottom-0 ">
            <a href="https://api.whatsapp.com/send?phone=14372620900"
                class="whatsapp-button" target="_blank"
            // style={{ position: "fixed", bottom: "30px", right: '0px' }}
            >
                <img src={Whatsappicon} alt="whatsapp" className='h-25 w-56 max-md:w-40 max-sm:w-28' />
            </a>
        </div>
    )
}

export default Whatsapp;