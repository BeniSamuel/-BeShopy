import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-white flex justify-between px-20 items-center h-20">
      <div className=" font-bold text-xl text-black">BeShopy</div>

      <ul className=" flex gap-9">
        <li className=" font-medium text-black">HOME</li>
        <li className=" font-medium text-black">SHOP</li>
        <li className=" font-medium text-black">FEATURES</li>
        <li className=" font-medium text-black">CONTACT</li>
      </ul>

      <div>
        <button className=" border-[#224F34] border-2 px-7 py-2 text-[#224F34]">LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
