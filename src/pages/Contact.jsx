import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    state: '',
    address: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    message: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', type: 'info' });

    try {
      const response = await axios.post('/api/contact', formData);
      setStatus({ 
        message: 'Message sent successfully!', 
        type: 'success' 
      });
      setFormData({
        name: '',
        contact: '',
        email: '',
        state: '',
        address: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({ 
        message: 'Failed to send message. Please try again.', 
        type: 'error' 
      });
    }
  };

  return (
    <div id="contacts" className="w-full text-white py-16 pt-20 px-4 md:px-8 min-h-screen">
      <div className="w-full min-h-screen grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Image Section */}
        <div className='w-full h-full flex justify-center items-center mx-auto rounded-2xl overflow-hidden shadow-lg group'>
          <img
            src='/contact.jpg'
            alt="Contact"
            className='w-[500px] h-[500px] object-cover aspect-square transform group-hover:scale-105 transition-transform duration-500'
          />
        </div>

        {/* Form Section */}
        <div className='w-full'>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
            Get In <span className="text-[#00d4ff]">Touch</span>
          </h2>

          {status.message && (
            <div className={`mb-4 p-4 rounded-md ${
              status.type === 'success' ? 'bg-green-500' : 
              status.type === 'error' ? 'bg-red-500' : 
              'bg-blue-500'
            }`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="relative col-span-1">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition duration-200"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 text-gray-400 text-sm peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#00d4ff] transition-all"
              >
                Your Name
              </label>
            </div>

            {/* Contact */}
            <div className="relative col-span-1">
              <input
                type="number"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition duration-200"
              />
              <label
                htmlFor="contact"
                className="absolute left-4 top-3 text-gray-400 text-sm peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#00d4ff] transition-all"
              >
                Your Contact
              </label>
            </div>

            {/* Email */}
            <div className="relative col-span-1">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition duration-200"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-400 text-sm peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#00d4ff] transition-all"
              >
                Your Email
              </label>
            </div>

            {/* State */}
            <div className="relative col-span-1">
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition duration-200"
              />
              <label
                htmlFor="state"
                className="absolute left-4 top-3 text-gray-400 text-sm peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#00d4ff] transition-all"
              >
                Your State
              </label>
            </div>

            {/* City */}
            <div className="relative col-span-1 md:col-span-2">
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition duration-200"
              />
              <label
                htmlFor="address"
                className="absolute left-4 top-3 text-gray-400 text-sm peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#00d4ff] transition-all"
              >
                Your Address
              </label>
            </div>

            {/* Subject */}
            <div className="relative col-span-1 md:col-span-2">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition duration-200"
              />
              <label
                htmlFor="subject"
                className="absolute left-4 top-3 text-gray-400 text-sm peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#00d4ff] transition-all"
              >
                Subject
              </label>
            </div>

            {/* Message */}
            <div className="relative col-span-1 md:col-span-2">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="peer w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition duration-200 resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-3 text-gray-400 text-sm peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#00d4ff] transition-all"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#00d4ff] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#00c3e6] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
