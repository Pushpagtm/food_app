import React, { useState } from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar(props) {
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav className="bg-white ">
        <div className="flex justify-around items-center ">
          <div className="z-50 p-4 md:w-auto w-full flex justify-between ">
            <img
              src="https://img.freepik.com/premium-photo/print-skull-with-flowers-roses-pumpkins-halloween-vector-illustration-autumn-halloween-holiday-vintage-old_78450-2155.jpg?w=740"
              className="h-10  rounded-3xl md:cursor-pointer"
              alt="logo"
            />
            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer md:hidden"
            >
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
          </div>

          <ul className="md:flex hidden items-center gap-8">
            <li>
              <Link
                to="/"
                className="py-7 px-3 inline-block hover:text-red-500"
              >
                HOME
              </Link>
            </li>
      
        
            <NavLinks />
          </ul>
          <div className="md:block hidden">
            <i className="mt-3 hover:text-red-500  cursor-pointer">
              <BsFillBasket2Fill size={20} />
            </i>
          </div>
          {/* Mobile nav */}
          <ul
            className={`md:hidden  bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
              nav ? "left-0" : "left-[-100%]"
            } cursor-pointer`}
          >
            <li>
              <Link
                to="/"
                className="py-7 px-3 inline-block hover:text-red-500 "
              >
                HOME
              </Link>
            </li>
            <NavLinks />
          </ul>
        </div>
      </nav>
       
    </>
  );
}

export default Navbar;
