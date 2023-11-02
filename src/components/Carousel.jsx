import { useState, useEffect } from "react";
import { feedBack } from "../constants/index";
import { yellowArrow, Union } from "../assets";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const goToSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const goToNextSlide = () => {
    if (currentSlide < feedBack.length) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(1);
    }
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div id="carousel-example" className="relative w-full">
      <div className="relative overflow-hidden  lg:h-[350px] bg-white flex items-center justify-center">
        {feedBack.map((item, index) => (
          <div
            key={index}
            id={`carousel-item-${index + 1}`}
            className={`${
              currentSlide === index + 1 ? "block" : "hidden"
            } flex flex-wrap lg:flex-nowrap items-center gap-[53px] lg:ml-[100px] ml-[4vw]`}
          >
            <div className="flex items-center mt-8 lg:mt-0">
              <img
                src={item.avatar}
                className="  w-[140px] h-[140px] sm:w-[165px] sm:h-[165px] md:w-[208px] md:h-[208px] rounded-[50%] max-w-none"
                alt={`Slide ${index + 1}`}
              />
              <img
                src={yellowArrow}
                className="w-[112.115px] h-[100px]  md:w-[160.163px] md:h-[160.163px] max-w-none"
                alt={`YellowArrow`}
              />
            </div>
            <img src={Union} alt="Union" className="lg:hidden w-[82.787px] h-[109px] md:w-auto md:h-auto absolute right-0 top-[45px]"/>
            <div className="flex flex-col items-center ">
              <p className="self-stretch text-black font-inter xl:text-[24px] md:text-[22px] text-[20px] leading-[140.523%] mb-[20px]">
                {item.comment} 
              </p>
              <p className="self-stretch text-[#F9AB00] font-google-sd xl:text-[32px] md:text-[30px] text-[28px] leading-[140.523%] font-bold mb-[6px] capitalize">
                {item.Fname}
              </p>
              <p className="self-stretch text-[#F9AB00] font-inter xl:text-[20px] md:text-[18px] text-[16px] leading-[140.523%] font-bold mb-4 capitalize">
                {item.occupation}
              </p>
            </div>
            <img src={Union} alt="Union" className="hidden lg:inline-block"/>
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 top-5 left-1/2 sm:bottom-5 sm:top-auto sm:left-auto lg:left-1/2 sm:right-0 lg:right-auto">
        {feedBack.map((item, index) => (
          <button
            key={index}
            id={`carousel-indicator-${index + 1}`}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index + 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-current={currentSlide === index + 1}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
