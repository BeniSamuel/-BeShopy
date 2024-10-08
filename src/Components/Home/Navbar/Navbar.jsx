import React, {useState} from "react";

const Navbar = () => {
    const [section, setSection] = useState("home");
  return (
    <div className=" bg-[#C5F5D6]  flex md:justify-between px-20 items-center h-20">
      <div className=" font-bold text-xl text-[#224F34]">BeShopy</div>

      <ul className=" flex gap-9">
        <li className=" font-medium text-[#224F34] flex flex-col items-center cursor-pointer" onClick={() => {setSection("home")}}>HOME {section === "home" ? <hr className=" bg-[#224F34] w-12 h-1 rounded-xl"/>: " "}</li>
        <li className=" font-medium text-[#224F34] flex flex-col items-center cursor-pointer" onClick={() => {setSection("shop")}}>SHOP {section === "shop" ? <hr className=" bg-[#224F34] w-11 h-1 rounded-xl"/>: " "}</li>
        <li className=" font-medium text-[#224F34] flex flex-col items-center cursor-pointer" onClick={() => {setSection("features")}}>FEATURES {section === "features" ? <hr className=" bg-[#224F34] w-20 h-1 rounded-xl"/>: " "}</li>
        <li className=" font-medium text-[#224F34] flex flex-col items-center cursor-pointer" onClick={() => {setSection("contact")}}>CONTACT {section === "contact" ? <hr className=" bg-[#224F34] w-16 h-1 rounded-xl"/>: " "}</li>
      </ul>

      <div>
        <button className=" border-[#224F34] border-2 px-7 py-2 text-[#224F34]">LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
