import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const images = [
    { src: "/product1.png", caption: "studio setup"},
    { src: "/product2.png", caption: "Light Flicker" },
    { src: "/studio.png", caption: "studio setup" },
    { src: "/wall.png", caption: "Wall Mount" },
    { src: "/light.png", caption: "Light Flicker" },
  ];

  return (
    <div id="gallary" className="w-full px-4 bg-transparent text-white py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Our <span className="text-[#00d4ff]">Gallery</span>
      </h2>

      <div className="md:max-w-7xl mx-auto mt-30">
        <Slider {...settings}>
          {images.map((item, idx) => (
            <div key={idx} className="px-4"> {/* small padding between slides */}
              <div className="bg-white bg-opacity-60 text-black rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-transform duration-500 group">
                <div className="flex justify-center items-center m-auto rounded-xl">
                <img
                  src={item.src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-[250px] p-5 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
                </div>
                <div className="  text-center py-2 text-sm font-medium">
                  {item.caption}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
