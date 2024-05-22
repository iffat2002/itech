import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/images/Itech.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    // Check if menu is open
    if (isMenuOpen) {
      // Toggle menu to close
      toggleMenu();
    }
  };

  const location = useLocation();


  return (
    <nav className={`!bg-black absolute w-full z-20 top-0 start-0 ${isMenuOpen ? '' : ''}  relatve bg-white`} style={{ boxShadow: "0px 25px 20px -29px rgba(0,0,0,0.45)" }}>
      <div className="container m-auto">
        <div className="flex flex-wrap items-center justify-between mx-auto py-2">
          <Link to={"/"} className="flex items-center ">
            <img src={Logo} alt="Flowbite Logo" className="h-20 w-60" />
          </Link>
          <button onClick={toggleMenu} type="button" className="mr-[25px] inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`items-center justify-between  ${isMenuOpen ? 'flex h-0 mt-10' : 'hidden h-[46px]'}  w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className={` ${isMenuOpen ? 'p-6' : ''} flex flex-col font-medium items-center md:flex-row md:mt-0 md:border-0 w-full md:w-auto bg-black mt-20 md:bg-transparent sm:p-4 md:p-0`}>
              <li className='ml-0 md:ml-8 lg:text-[15pt] uppercase font-[100]'>
                <Link to="/" className={`block py-2 px-3 text-lg text-white  rounded md:bg-transparent ${location.pathname === '/' ? 'text-orange-500' : ''}`} aria-current="page" onClick={handleMenuClick}>Home</Link>
                {location.pathname === '/' && <div className="border-b-[1px] border-white" ></div>}
              </li>
              <li className='ml-0 md:ml-8 lg:text-[15pt] uppercase font-[100]'>
                <Link to="/services" className={`block py-2 px-3 text-lg text-white  rounded md:bg-transparent ${location.pathname === '/services' ? 'text-orange-500' : ''}`} aria-current="page" onClick={handleMenuClick}>Services</Link>
                {location.pathname === '/services' && <div className="border-b-[1px] border-white" ></div>}
              </li>

              {/* <li className='ml-0 md:ml-8 lg:text-[15pt] uppercase font-[100]'>
            <Link to="/price" className='block py-2 px-5 bg-gray-800 text-white rounded-[200px] uppercase' onClick={handleMenuClick}>Free Quote</Link>
          </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
