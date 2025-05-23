import React from "react";

export default function Services() {
  return (
    <div id="service" className="product w-full min-h-screen 
     px-6 py-6 pt-20 bg-transparent">
      {/* Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          OUR <span className="text-[#00d4ff]">SERVICES</span>
        </h1>
        <div className="mt-3 w-24 h-1 mx-auto bg-[#00d4ff] rounded-full animate-pulse"></div>
        <p className="text-lg text-gray-300 mt-2">We are specialized in delivering cutting-edge audio-video solutions tailored to<br/> your unique needs.</p>
      </section>

      {/* Product Grid */}
      <section className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="h-72 overflow-hidden">

            <img
              src="/podcast1.jpeg"
              alt="podcast1"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                Classroom Studio
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Next-gen classroom studio setup for immersive education.
              </p>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="h-72 overflow-hidden">

            <img
              src="/podcast2.jpeg"
              alt="podcast 2"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
               Podcast Studio            
               </h2>
              <p className="text-sm text-gray-600 mt-2">
                Engage students with high-tech smart board solutions.
              </p>
            </div>
          </div>



        </div>
      </section>
    </div>
  );
}
