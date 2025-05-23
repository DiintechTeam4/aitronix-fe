import React, { useState } from "react";

export default function Products() {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const products = [
    {
      id: 1,
      name: "Digital Panel",
      description: "Next-gen classroom studio setup for immersive education.",
      image: "/digital panel.jpeg"
    },
    {
      id: 2,
      name: "BMT 4k PTZ Camera",
      description: "Engage students with high-tech smart board solutions.",
      image: "/camera.webp"
    },
    {
      id: 3,
      name: "BMT Anti Flicker Light",
      description: "Next-gen classroom studio setup for immersive education.",
      image: "/light.png"
    },
    {
      id: 4,
      name: "Wall Mount",
      description: "Next-gen classroom studio setup for immersive education.",
      image: "/wall.png"
    },
    {
      id: 5,
      name: "Interactive Whiteboard",
      description: "Advanced touch-enabled display for collaborative learning.",
      image: "/whiteboard.jpg"
    },
    {
      id: 6,
      name: "Document Camera",
      description: "High-resolution camera for real-time document sharing.",
      image: "/document-camera.jpg"
    },
    {
      id: 7,
      name: "Audio System",
      description: "Crystal clear sound system for enhanced learning experience.",
      image: "/audio-system.jpg"
    },
    {
      id: 8,
      name: "Student Response System",
      description: "Interactive polling and assessment tools for classrooms.",
      image: "/response-system.jpg"
    }
  ];

  const visibleProducts = showAllProducts ? products : products.slice(0, 4);

  return (
    <div
      id="product"
      className="product w-full min-h-screen 
    bg-transparent
    py-16 px-6 pt-20"
    >
      {/* bg-gradient-to-b from-[#000428] to-[#003d72]  */}

      {/* Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          OUR <span className="text-[#00d4ff]">PRODUCTS</span>
        </h1>
        <div className="mt-3 w-24 h-1 mx-auto bg-[#00d4ff] rounded-full animate-pulse"></div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {visibleProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-xl py-5">
              <div className="w-[250px] h-[250px] overflow-hidden flex justify-center items-center m-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[250px] h-[250px] object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAllProducts && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllProducts(true)}
              className="bg-[#00d4ff] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#00c3e6] transition duration-300"
            >
              View More Products
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
