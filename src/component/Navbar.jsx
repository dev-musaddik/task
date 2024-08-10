// src/components/Navbar.jsx
import React, { useState } from "react";
import { FaTimes, FaChevronDown } from 'react-icons/fa';
import { MdLightbulb } from "react-icons/md";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [task,setTask]=useState(false)
    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
      setTask(true)
      
    };
  return (
    <nav className=" bg-white text-black p-4 flex justify-between w-4/5">
      <div className="nav-left-side flex flex-grow w-4/12">
      <button 
        onClick={toggleDropdown} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className="flex items-center justify-start w-full  hover:bg-green-400 hover:text-lime-50 py-2 px-3 text-gray-900 rounded  group"
       >
        {isOpen ? <FaTimes className="text-red-500 mx-3 group-hover:pointer-events-none" /> : <FaChevronDown className="text-green-500 mx-3 group-hover:pointer-events-none" />}
     
     Browse Categories </button>
      {isOpen && (
       <div
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       style={{
         top: '3.3rem',
         width: '19.5%'
       }}
       className="absolute left-30 bg-gray-100 text-gray-800 group-hover:block"
     >
       <ul className="list-none p-2">
         <li className="py-2 px-4 hover:bg-gray-200 border-b border-gray-300 last:border-b-0">
           <a href="/browse/daily-offers" className="block text-gray-800 hover:text-gray-600">
             Daily offers
           </a>
         </li>
         <li className="py-2 px-4 hover:bg-gray-200 border-b border-gray-300 last:border-b-0">
           <a href="/browse/gift-ideals" className="block text-gray-800 hover:text-gray-600">
             Gift Ideals
           </a>
         </li>
         <li className="py-2 px-4 hover:bg-gray-200 border-b border-gray-300 last:border-b-0">
           <a href="/browse/beds" className="block text-gray-800 hover:text-gray-600">
             Beds
           </a>
         </li>
         <li className="py-2 px-4 hover:bg-gray-200 border-b border-gray-300 last:border-b-0">
           <a href="/browse/lighting" className="block text-gray-800 hover:text-gray-600">
             Lighting
           </a>
         </li>
         <li className="py-2 px-4 hover:bg-gray-200 border-b border-gray-300 last:border-b-0">
           <a href="/browse/sofas-sleeper-sofas" className="block text-gray-800 hover:text-gray-600">
             Sofas & Sleeper sofas
           </a>
         </li>
         <li className="py-2 px-4 hover:bg-gray-200 border-b border-gray-300 last:border-b-0">
           <a href="/browse/storage" className="block text-gray-800 hover:text-gray-600">
             Storage
           </a>
         </li>
         <li className="py-2 px-4 hover:bg-gray-200 border-b border-gray-300 last:border-b-0">
           <a href="/browse/armchairs-chinese" className="block text-gray-800 hover:text-gray-600">
             Armchairs & Chinese
           </a>
         </li>
         <li className="py-2 px-4 hover:bg-gray-200 border-b border-gray-300 last:border-b-0">
           <a href="/browse/decoration" className="block text-gray-800 hover:text-gray-600">
             Decoration
           </a>
         </li>
         <li className="py-2 px-4 hover:bg-gray-200 border-b border-gray-300 last:border-b-0">
           <a href="/browse/kitchen-cabinets" className="block text-gray-800 hover:text-gray-600">
             Kitchen Cabinets
           </a>
         </li>
         <li className="py-2 px-4 hover:bg-gray-200 border-b border-gray-300 last:border-b-0">
           <a href="/browse/coffee-tables" className="block text-gray-800 hover:text-gray-600">
             Coffee & Tables
           </a>
         </li>
         <li className="py-2 px-4 hover:bg-gray-200 border-b border-gray-300 last:border-b-0">
           <a href="/browse/outdoor-furniture" className="block text-gray-800 hover:text-gray-600">
             Outdoor Furniture
           </a>
         </li>
       </ul>
     </div>
     
      )}
      </div>
      <div className="nav-right-side container flex justify-between flex-grow">
        <div className="nav-items flex w-full justify-between items-center">
          <div className="relative group w-full">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex p-5 items-center justify-center w-full py-2 px-2 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-dark md:dark:hover:text-blue-500 dark:focus:text-black  "
            >
              Home{" "}
              <svg
                className="w-2.5 text-gray-400 ms-2 flex items-end h-full "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 hidden bg-white text-gray-800 group-hover:block" 
            style={{
                width: '100%'
              }}>
              <a href={`/home/1`} className="block px-4 py-2 hover:bg-gray-100">
                Item 1
              </a>
              <a href={`/home/2`} className="block px-4 py-2 hover:bg-gray-100">
                Item 2
              </a>
              <a href={`home/3`} className="block px-4 py-2 hover:bg-gray-100">
                Item 3
              </a>
            </div>
          </div>
          <div className="relative group w-full">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-dark md:dark:hover:text-blue-500 dark:focus:text-black "
            >
              Shop{" "}
              <svg
                className="w-2.5 h-2.5 text-gray-400 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 hidden bg-white text-gray-800 group-hover:block">
              <a href="/shop/1" className="block px-4 py-2 hover:bg-gray-100">
                Item 1
              </a>
              <a href="/shop/2" className="block px-4 py-2 hover:bg-gray-100">
                Item 2
              </a>
              <a href="/shop/3" className="block px-4 py-2 hover:bg-gray-100">
                Item 3
              </a>
            </div>
          </div>
          <div className="relative group w-full">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-dark md:dark:hover:text-blue-500 dark:focus:text-black "
            >
              Product{" "}
              <svg
                className="w-2.5 h-2.5 text-gray-400 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 hidden bg-white text-gray-800 group-hover:block">
              <a href="/product/1" className="block px-4 py-2 hover:bg-gray-100">
                Item 1
              </a>
              <a href="/product/2" className="block px-4 py-2 hover:bg-gray-100">
                Item 2
              </a>
              <a href="/product/3" className="block px-4 py-2 hover:bg-gray-100">
                Item 3
              </a>
            </div>
          </div>
          <div className="relative group w-full">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex p-5 items-center justify-center w-full py-2 px-2 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-dark md:dark:hover:text-blue-500 dark:focus:text-black  "
            >
              Pages{" "}
              <svg
                className="w-2.5 text-gray-400 ms-2 flex items-end h-full "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 hidden bg-white text-gray-800 group-hover:block">
              <a href="/pages/1" className="block px-4 py-2 hover:bg-gray-100">
                Item 1
              </a>
              <a href="/pages/2" className="block px-4 py-2 hover:bg-gray-100">
                Item 2
              </a>
              <a href="/pages/3" className="block px-4 py-2 hover:bg-gray-100">
                Item 3
              </a>
            </div>
          </div>
          <div className="relative group w-full">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-dark md:dark:hover:text-blue-500 dark:focus:text-black "
            >
              Blog{" "}
              <svg
                className="w-2.5 h-2.5 text-gray-400 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 hidden bg-white text-gray-800 group-hover:block">
              <a href="/blog/1" className="block px-4 py-2 hover:bg-gray-100">
                Item 1
              </a>
              <a href="/blog/2" className="block px-4 py-2 hover:bg-gray-100">
                Item 2
              </a>
              <a href="/blog/3" className="block px-4 py-2 hover:bg-gray-100">
                Item 3
              </a>
            </div>
          </div>
          <div className="relative group w-full">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-dark md:dark:hover:text-blue-500 dark:focus:text-black "
            >
              Elements{" "}
              <svg
                className="w-2.5 h-2.5 text-gray-400 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 hidden bg-white text-gray-800 group-hover:block">
              <a href="/element/1" className="block px-4 py-2 hover:bg-gray-100">
                Item 1
              </a>
              <a href="/element/2" className="block px-4 py-2 hover:bg-gray-100">
                Item 2
              </a>
              <a href="/element/3" className="block px-4 py-2 hover:bg-gray-100">
                Item 3
              </a>
            </div>
          </div>
        </div>
        <div className="discount flex items-center justify-center w-4/12 border-l-2 border-gray-300">
          <span className=" mr-4"><MdLightbulb/></span>
          <span>Clearance Up to 30% off</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
