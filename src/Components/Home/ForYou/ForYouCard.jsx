import React from "react";

const ForYouCard = (props) => {
  return (
    <div className=" flex flex-col gap-3 items-center">
      {/*Product Cover*/}
      <div className=" bg-[#D3E2D7]">
        <img src={props.imgSource} className=" h-72" />
      </div>
      {/* Product Description */}
      <div className=" flex flex-col items-center">
        <div className=" flex flex-col items-center gap-3">
          <p className=" font-poppins font-bold">{props.title}</p>
          <p className=" font-poppins font-medium text-center text-sm">
            {props.description.map((line, index) => {
              return (
                <p key={index}>
                  {line}
                  <br />
                </p>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForYouCard;
