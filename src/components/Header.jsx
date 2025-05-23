import React from 'react';

export default function Header() {
  return (
    <div id="home" className='header w-full py-2 px-4 md:px-8 bg-transparent border-b border-gray-600 text-white text-sm md:text-lg'>
      <div className='w-full flex flex-wrap md:flex-nowrap items-center justify-between gap-4'>

        {/* Social Media Section */}
        <div className='w-full md:w-auto flex items-center justify-center md:justify-start'>
          <ul className='flex flex-wrap items-center gap-3 md:gap-6'>
            <li className="whitespace-nowrap">Follow us on :</li>
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-linkedin"></i></li>
            <li><i className="fa-brands fa-youtube"></i></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className='w-full md:w-auto flex items-center justify-center md:justify-end'>
          <ul className='flex flex-wrap items-center justify-center gap-3 md:gap-6'>
            <li className='flex items-center gap-1'>
              <i className="fa-solid fa-phone"></i>
              <span>+91-9555070779</span>
            </li>
            <li className='flex items-center gap-1'>
              <i className="fa-solid fa-envelope"></i>
              <span className='break-words'>support@aitronix.in</span>
            </li>
            <li>
              <i className="fa-solid fa-user"></i>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
