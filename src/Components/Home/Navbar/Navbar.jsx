import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import cart from "../../../assets/cart.svg";
import CartCount from "../../Cart/CartCount";

const Navbar = () => {
  const location = useLocation();
  const [section, setSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#C5F5D6] flex justify-between items-center px-6 md:px-20 h-20 shadow-md sticky top-0 z-50">
      <div className="text-xl text-[#224F34] font-rufina font-bold cursor-pointer">
        <Link to="/">BeShopy</Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
        <div className="w-6 h-0.5 bg-[#224F34] mb-1"></div>
        <div className="w-6 h-0.5 bg-[#224F34] mb-1"></div>
        <div className="w-6 h-0.5 bg-[#224F34]"></div>
      </div>

      {/* Desktop Menu and Mobile Dropdown */}
      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:gap-[15rem] md:items-center md:shadow-none absolute md:static top-20 left-0 w-full md:w-auto bg-[#C5F5D6] p-5 md:p-0 shadow-md z-50`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-9 items-center">
          <li className="font-medium text-[#224F34] cursor-pointer font-poppins">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              HOME
            </Link>
            {section === "home" ? (
              <hr className="bg-[#224F34] w-12 h-1 rounded-xl" />
            ) : null}
          </li>
          <li className="font-medium text-[#224F34] cursor-pointer font-poppins">
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>
              SHOP
            </Link>
            {section === "shop" ? (
              <hr className="bg-[#224F34] w-11 h-1 rounded-xl" />
            ) : null}
          </li>
          <li className="font-medium text-[#224F34] cursor-pointer font-poppins">
            <Link to="/features" onClick={() => setIsMobileMenuOpen(false)}>
              FEATURES
            </Link>
            {section === "features" ? (
              <hr className="bg-[#224F34] w-20 h-1 rounded-xl" />
            ) : null}
          </li>
          <li className="font-medium text-[#224F34] cursor-pointer font-poppins">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              CONTACT
            </Link>
            {section === "contact" ? (
              <hr className="bg-[#224F34] w-20 h-1 rounded-xl" />
            ) : null}
          </li>
        </ul>

        <div className="flex flex-col md:flex-row items-center gap-5 mt-4 md:mt-0">
          <div className=" flex flex-row">
            <Link to="/cart">
              <img src={cart} className="w-7" alt="Cart Icon" />
            </Link>
            <CartCount/>
          </div>
          <button className="border-[#224F34] border-2 px-7 py-2 text-[#224F34] font-poppins">
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              LOGIN
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
