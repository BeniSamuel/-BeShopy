import React from "react";
import forYou from "../../../Data/ForYou/ForYou.js";
import ForCard from "./ForYouCard.jsx"

const ForMapping = () => {
    return (
        <div className=" flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-8 ">
            {forYou.map((product) => {
                return (
                    <ForCard
                        key={product.id}
                        imgSource={product.imgSource}
                        title={product.title}
                        description={product.description}
                    />
                );
            })}
        </div>
    );
};

export default ForMapping;
