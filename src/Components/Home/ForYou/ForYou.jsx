import React from "react";
import ForMapping from "./ForMapping";

const ForYou = () => {
    return (
        <div className=" py-16 flex flex-col gap-9 items-center">
            <p className=" text-3xl font-bold text-[#224F34] font-roboto">
                Designer Clothes For You
            </p>
            <p className=" text-[#224F34] text-sm font-medium font-poppins">
                Immerse yourself in the world of luxury fashion with our meticulously
                crafted designer clothes!
            </p>
            <ForMapping />
        </div>
    );
};

export default ForYou;
