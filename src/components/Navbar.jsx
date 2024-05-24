import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from "../assets/images/Itech.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const location = useLocation();

  const isHome = location.pathname === '/' && location.hash === '';
  const isPortfolio = location.pathname === '/' && location.hash === '#portfolio';

  return (
    <nav className={`absolute w-full z-20 top-0 bg-black bg-opacity-80 backdrop-blur-sm ${isMenuOpen ? 'h-auto' : 'h-[85px]'} transition-all duration-300`} style={{ boxShadow: "0px 25px 20px -29px rgba(0,0,0,0.45)" }}>
      <div className="container m-auto px-8">
        <div className="flex flex-wrap items-center justify-between mx-auto py-2">
          <Link to="/" className="flex items-center">
            <div className='w-60 h-20 flex items-center justify-center'>
              <img src={Logo} alt="Flowbite Logo" className="h-full w-full object-contain" />
            </div>
          </Link>
          <button onClick={toggleMenu} type="button" className="mr-[25px] inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-theme hover:text-black focus:outline-none focus:ring-2 focus:ring-theme" aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col font-medium items-center md:flex-row md:border-0 w-full md:w-auto mt-4 md:mt-0 md:bg-transparent sm:p-4 md:p-0">
              <li className='ml-0 md:ml-8 lg:text-[15pt] uppercase font-semibold'>
                <Link to="/" className={`block py-2 px-3 text-lg text-white hover:text-theme transition-all duration-300 rounded md:bg-transparent ${isHome ? 'text-orange-500' : ''}`} aria-current="page" onClick={handleMenuClick}>Home</Link>
                {isHome && <div className="border-b-[2px] border-theme "></div>}
              </li>
              <li className='ml-0 md:ml-8 lg:text-[15pt] uppercase font-semibold'>
                <Link to="/services" className={`block py-2 px-3 text-lg text-white hover:text-theme transition-all duration-300 rounded md:bg-transparent ${location.pathname === '/services' ? 'text-orange-500' : ''}`} aria-current="page" onClick={handleMenuClick}>Services</Link>
                {location.pathname === '/services' && <div className="border-b-[2px] border-theme "></div>}
              </li>
              <li className='ml-0 md:ml-8 lg:text-[15pt] uppercase font-semibold'>
                <HashLink smooth to="/#portfolio" className={`block py-2 px-3 text-lg text-white hover:text-theme transition-all duration-300 rounded md:bg-transparent ${isPortfolio ? 'text-orange-500' : ''}`} aria-current="page" onClick={handleMenuClick}>Portfolio</HashLink>
                {isPortfolio && <div className="border-b-[2px] border-theme"></div>}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
