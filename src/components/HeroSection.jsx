import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-[95%] h-[500px] container">
      <Slider {...settings}>
        
        {/* Slide 1 */}
        <div
      className="md:h-[500px] h-[300px] md:w-full flex flex-col items-center justify-center text-center px-10 md:px-20 md:mt-10 mt-0">
      <div className="md:flex justify-center gap-20 md:h-[500px] md:w-full h-[300px] flex-row">
        {/* Left Section - Text */}
        <div className="flex flex-col gap-6 w-full md:m-5 ">
          <h1 className="text-2xl md:text-5xl font-extrabold text-white">
            Welcome to <span className="text-[#00d4ff]">AITRONIX</span><br />
            Revolutionizing Education with Smart Class Studio Electronics
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
            AITRONIX delivers cutting-edge smart classroom studio electronics that empower educators and inspire students. 
            {/* Experience interactive learning tools at the best prices.  */}
            {/* Revolutionize your educational environment with 
            innovation and affordability, tailored for today's classrooms. */}
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="md:h-[400px] h-[400px] md:w-full flex justify-center mt-5">
          <img
            src="/hero.jpg"
            alt="AITRONIX Smart Classroom"
            className="rounded-xl shadow-lg transform hover:scale-105 transition duration-500 md:w-[400px] md:h-[400px] w-[300px] h-[200px]"
          />
        </div>
      </div>
    </div>

        {/* Slide 2 */}
        <div className="md:h-[500px] flex items-center justify-center mt-20 md:mt-0 w-full">
          <img
            src="/BANNER.png"
            alt="Home 1"
            className=" shadow-lg hover:scale-105 transition-transform duration-500 md:w-full md:h-[500px] w-full h-[300px]"
          />
        </div>

        {/* Slide 3 */}
        <div className="md:h-[500px] flex items-center justify-center mt-20 md:mt-0 w-full">
          <img
            src="/BANNER1.png"
            alt="Home 2"
            className=" shadow-lg hover:scale-105 transition-transform duration-500 md:w-full md:h-[500px] w-full h-[300px]"
          />
        </div>

      </Slider>
    </div>
  );
}
