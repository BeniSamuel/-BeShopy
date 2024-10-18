import React from "react";
import TestMapping from "./TestMapping";

const Testimonial = () => {
  return (
    <div className=" py-14 flex flex-col gap-9 items-center">
      <div>
        <p className=" text-3xl font-bold text-[#224F34] font-roboto">
          Feedback Corner
        </p>
      </div>
      <div>
        <TestMapping/>
      </div>
    </div>
  );
};

export default Testimonial;
