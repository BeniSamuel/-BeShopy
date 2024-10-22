import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [section, setSection] = useState("home");

  // Update section based on the current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setSection("home");
    } else if (path === "/shop") {
      setSection("shop");
    } else if (path === "/features") {
      setSection("features");
    } else if (path === "/contact") {
      setSection("contact");
    }
  }, [location.pathname]);

  return (
    <div className=" bg-[#C5F5D6] flex flex-row justify-between md:justify-between md:items-center px-20 items-center h-20 shadow-md sticky top-0 z-50">
      <div className=" text-xl text-[#224F34] font-rufina font-bold cursor-pointer">
        <Link to="/">BeShopy</Link>
      </div>

      <ul className=" flex flex-col md:flex-row gap-9">
        <li className=" font-medium text-[#224F34] flex flex-col items-center cursor-pointer font-poppins">
          <Link to="/">HOME</Link>
          {section === "home" ? <hr className=" bg-[#224F34] w-12 h-1 rounded-xl" /> : null}
        </li>
        <li className=" font-medium text-[#224F34] flex flex-col items-center cursor-pointer font-poppins">
          <Link to="/shop">SHOP</Link>
          {section === "shop" ? <hr className=" bg-[#224F34] w-11 h-1 rounded-xl" /> : null}
        </li>
        <li className=" font-medium text-[#224F34] flex flex-col items-center cursor-pointer font-poppins">
          <Link to="/features">FEATURES</Link>
          {section === "features" ? <hr className=" bg-[#224F34] w-20 h-1 rounded-xl" /> : null}
        </li>
        <li className=" font-medium text-[#224F34] flex flex-col items-center cursor-pointer font-poppins">
          <Link to="/contact">CONTACT</Link>
          {section === "contact" ? <hr className=" bg-[#224F34] w-20 h-1 rounded-xl" /> : null}
        </li>
      </ul>

      <div>
        <button className=" border-[#224F34] border-2 px-7 py-2 text-[#224F34] font-poppins">
          <Link to="/login">LOGIN</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
