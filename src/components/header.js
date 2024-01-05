import React from 'react';

const Header = () => {
  return (
    <header className="bg-deepBlue">
      <div className="w-11/12 mx-auto max-w-[1080px] relative flex justify-between items-center text-white font-mullish">
        {/* Logo */}
        <div className="pr-7 py-7">
          <a href="/" className="cursor-pointer">
            <img
              src="Images/logo.svg"
              width="125px"
              height="30px"
              loading="lazy"
              alt="Logo"
            />
          </a>
        </div>
        {/* Navlink */}
        <ul className="flex space-x-6 pr-7 items-stretch">
          <li className="py-7 hover:text-lightBlue group cursor-pointer transition-all duration-200 flex items-center relative">
            <a href="#">Payments</a>
            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
          </li>
          <li className="py-7 hover:text-lightBlue group cursor-pointer transition-all duration-200 flex items-center relative">
            <a href="#">Banking</a>
            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
          </li>
          <li className="py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 flex items-center relative">
            <a href="#">Corporate Card</a>
          </li>
          <li className="py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 flex items-center relative">
            <a href="#">Payroll</a>
          </li>
          <li className="py-7 hover:text-lightBlue group cursor-pointer transition-all duration-200 flex items-center relative">
            <a href="#">Resources</a>
            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
          </li>
          <li className="py-7 hover:text-lightBlue group cursor-pointer transition-all duration-200 flex items-center relative">
            <a href="#">Support</a>
            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
          </li>
          <li className="py-7 hover:text-lightBlue group cursor-pointer transition-all duration-200 flex items-center relative">
            <a href="#">Pricing</a>
            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
          </li>
        </ul>
        {/* Buttons */}
      <div className="flex items-center space-x-3">
        {/* Flag */}
        <img src="./Images/india-flag.svg" alt="" />

        {/* Login Button */}
        <button className="py-3 px-5 border border-lightBlue text-sm font-bold rounded-sm">
          Log in
        </button>

        {/* Sign Up Button */}
        <button className="flex justify-center items-center text-lightBlue300 bg-white text-sm py-3 px-4 rounded-sm font-bold border transition-all duration-200 hover:text-lightBlue500">
          Sign Up
          <svg viewBox="0 0 24 24" focusable="false" className="w-[14px] h-[14px] ml-3">
            <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
          </svg>
        </button>
      </div>
      </div>
    </header>
  );
};

export default Header;
