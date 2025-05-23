import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    // Replace dots with lines
    customPaging: (i) => (
      <div className="h-1 w-10 bg-white/40 rounded-full transition-all duration-300"></div>
    ),
    appendDots: (dots) => (
      <div className="mt-8">
        <ul className="flex justify-center items-center gap-4">{dots}</ul>
      </div>
    ),
  };

  const slides = [
    [
      {
        name: "Ashish",
        feedback:
          "Purchased for my kids, really helped me a lot. Kids love the interface and it really increased their learning time.",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        place: "Delhi",
        institute: "Bright Future Academy",
      },
      {
        name: "Jaydev",
        feedback:
          "Premium material and has side adjustments. Nice product under affordable price.",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        place: "Ahmedabad",
        institute: "Gyan Jyoti School",
      },
    ],
    [
      {
        name: "Neha",
        feedback: "Really good quality and fast delivery. Highly recommend!",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        place: "Pune",
        institute: "Excel Learning Center",
      },
      {
        name: "Amit",
        feedback: "Customer support was very helpful and friendly.",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        place: "Bangalore",
        institute: "Smart Edge Coaching",
      },
    ],
  ];

  return (
    <section className="testimonials min-h-screen w-full text-white pt-10 bg-transparent">
      <div className="z-10 w-full mx-auto py-20 px-4 max-w-7xl">
        <h3 className="text-4xl font-semibold text-center mb-5 tracking-widest">
          TESTIMONIALS
        </h3>
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Client Says
        </h2>

        <Slider {...settings}>
          {slides.map((pair, index) => (
            <div className="flex md:flex-row flex-col w-full h-full gap-10 mx-auto my-10 p-10">
              <div
                key={index}
                className="flex md:flex-row flex-col gap-10 justify-center mx-auto"
              >
                {pair.map((item, idx) => (
                  <div
                    key={idx}
                    className="feedback p-6 rounded-2xl w-full shadow-lg text-left bg-white text-black"
                  >
                    <div className="text-4xl mb-4 ">“</div>
                    <p className=" text-base mb-6 leading-relaxed">
                      {item.feedback}
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                      <div className="flex flex-col">
                        <p className="font-bold text-lg text-black">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {item.place} - {item.institute}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
