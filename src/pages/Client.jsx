import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientLogos = [
  "/kashiai.jpg",
  "/KitabAI.png",
  "/aitota.png",
  "/British.png",
  "/Mobishaala.png",
  "/WIZZMEDIA.png",
  // Add more as needed
];

const settings = {
  infinite: true,
  speed: 3000,              // Smooth transition speed
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,         // Continuous scroll
  cssEase: "linear",        // Smooth scrolling
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export default function Client() {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-100">
      <div className="w-full mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Clients</h2>
        <p className="text-gray-500 mb-10 text-lg">
          Trusted by leading brands across industries
        </p>

        <Slider {...settings}>
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="px-4 flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-16 w-auto object-contain transition duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
