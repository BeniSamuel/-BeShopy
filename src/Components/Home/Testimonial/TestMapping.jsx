import React, { useState } from "react";
import testData from "../../../Data/Testimonials/Testimonials";
import right from "../../../assets/Testimonial/Testimonial_Right.svg";
import left from "../../../assets/Testimonial/Testimonial_Left.svg";
import icon from "../../../assets/Testimonial/Testimonial_Icon.svg"

const TestMapping = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex == 0 ? testData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" flex flex-col items-center gap-12">
      <div className=" flex flex-col gap-8 md:flex-row">
        {testData.map((data, index) => {
          return (
            <div
              key={data.id}
              className={` p-6 rounded-lg shadow-lg mb-4 transition-all duration-300 ease-in-out
                ${
                  index === currentIndex
                    ? "bg-[#C2EFD4] text-black"
                    : "bg-white text-[#6F6F6F]"
                }'
            ${index !== currentIndex && "opacity-50"}
            `}
            >
              <div className=" flex flex-col gap-4">
                <img src={icon} className=" h-10 w-7"/>
                <p className=" font-roboto font-bold">{data.name}</p>
                <p className=" font-poppins">
                  {data.description.map((line, index) => {
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
          );
        })}
      </div>

      <div className=" flex flex-row gap-8">
        <button
          onClick={handlePrev}
          className=" flex flex-col items-center justify-center px-5 py-3 shadow-slate-300 shadow-lg bg-white rounded-lg hover:bg-[#C2EFD4] transition"
        >
          <img src={right} />
        </button>

        <button
          onClick={handleNext}
          className=" flex flex-col items-center justify-center px-5 py-3 bg-[#C2EFD4] shadow-lg shadow-slate-300 rounded-lg hover:bg-white hover:shadow-lg hover:shadow-slate-300 transition"
        >
          <img src={left} />
        </button>
      </div>
    </div>
  );
};

export default TestMapping;
