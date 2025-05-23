import React from 'react';

export default function Bookdemo() {
  return (
    <div
      id="bookdemo"
      className="max-w-7xl mx-auto pt-20 px-4 md:px-8 text-white rounded-xl shadow-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left: Form */}
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
            Book A <span className="text-[#00d4ff]">Demo</span>
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: 'name', label: 'Your Name', type: 'text' },
              { id: 'contact', label: 'Your Contact', type: 'number' },
              { id: 'email', label: 'Your Email', type: 'email' },
              { id: 'product', label: 'Product', type: 'text' },
              { id: 'date', type: 'date' },
              { id: 'states', label: 'Your State', type: 'text' },
              { id: 'addresses', label: 'Your Address', type: 'text' },
            ].map(({ id, label, type }) => (
              <div key={id} 
              className={`relative ${id === "addresses" ? "md:col-span-2" : "col-span-1"}`}>
              <input
                  type={type}
                  id={id}
                  required
                  className="peer w-full bg-transparent border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] text-white"
                />
                <label
                  htmlFor={id}
                  className="absolute left-4 top-3 text-gray-400 text-sm peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#00d4ff] transition-all bg-transparent px-1"
                >
                  {label}
                </label>
              </div>
            ))}

            {/* Full-width button */}
            <div className="md:col-span-2 text-center pt-4">
              <button
                type="submit"
                className="bg-[#00d4ff] text-black font-bold px-10 py-3 rounded-md shadow-md hover:bg-[#00c3e6] hover:scale-105 transition-transform duration-300"
              >
                Book Demo
              </button>
            </div>
          </form>
        </div>

        {/* Right: Image */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg group">
          <img
            src="/demo.webp"
            alt="Demo"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}
