import React from "react";
import { Link } from "react-router-dom";


function NavLinks(props) {
  const links = [
    {
      name: "RESTAURANTS",
      submenu: true,
      sublinks: [
        {
          name: "KFC",
          link: "/",
        },
        {
          name: " Hankook Sarang Korean Resturant",
          link: "/",
        },
        {
          name: "Cozy Corner",
          link: "/",
        },
        {
          name: "RoadHouse Cafe",
          link: "/",
        },
        {
          name: "Japanese Resturant",
          link: "/",
        },
        {
          name: "See More..",
          link: "/",
        },
      ],
    },
    {
      name: "BAKERIES",
      submenu: true,
      sublinks: [
        {
          name: " Goodday Bakeries",
          link: "/",
        },
        {
          name: "  Taja bakery and coffee shop",
          link: "/",
        },
        {
          name: " Panda bites",
          link: "/",
        },
        {
          name: " The cake shop",
          link: "/",
        },
        {
          name: "See More..",
          link: "/",
        },
      ],
    },
    {
      name: "BEVERAGE",
      submenu: true,
      sublinks: [
        {
          name: " Frozen Items",
          link: "/",
        },
        {
          name: " Goods Delivery",
          link: "/",
        },
      ],
    },
    { name: `LOGIN` ,
    link:'/login'
  
  },
    { name: "REGISTER",
    link:'/register'
  
  },
  ];
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left  md:cursor-pointer hover:text-red-500 group">
          <Link to={link.name} className="hover:text-red-500">{link.name} </Link>
                          
            {/* <h1 className="py-7 ">{link.name} </h1> */}
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-3.5">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <li className="text-sm text-gray-600 my-2.5">
                          <Link
                            to={mysublinks.name}
                            className="hover:text-red-500"
                          >
                           
                            {mysublinks.name}
                          </Link>
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      {/* <LoginModal/> */}
      {/* <RegisterModal/> */}
    </>
  );
}

export default NavLinks;
