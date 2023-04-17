import React from "react";
import { BiSearch } from "react-icons/bi";
import {RiArrowDropDownLine} from "react-icons/ri";
function MainContent(props) {
  return (
    <>
      
        <div className="flex justify-center items-center mt-40 ">
          <b className="text-white text-5xl leading-relaxed text-center tracking-normal block ">
            FoodMood
            <br />
            So Fast,So hot
          </b>
        </div>
        <div className="flex justify-evenly gap-3 ">
          <form className="flex items-center ">
          <input
                type="text"
                className="bg-white border border-gray-300 text-gray-900 text-sm  block w-30 pl-10 p-2.5 md:w-96  dark:placeholder-gray-400 dark:text-white "
                placeholder="Search"
                required
              />
              <div className="absolute pt-5 ">
                <i className="text-gray-500 pr-6">
                  <BiSearch size={30} />
                </i>
              </div>

          </form>
          <form className="flex items-center">
              <input
                type="text"
                className="bg-white border border-gray-300 text-gray-900 text-sm  block w-30 pl-10 p-2.5 md:w-96  dark:placeholder-gray-400 dark:text-white "
                placeholder="Product"
                required
              />
              <div className="absolute pt-5 ">
                <i className="text-gray-500 pr-6">
                  <RiArrowDropDownLine size={30} />
                </i>
              </div>
            </form>
            <div>
          <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800  font-medium w-40 text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 ">SEARCH</button>
          </div>

        </div>
        
      
    </>
  );
}

export default MainContent;
