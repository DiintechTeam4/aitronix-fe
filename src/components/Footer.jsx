import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-[#122442] text-[#fff] py-10 px-6 md:px-20 rounded-2xl">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      <div>
        <p className="text-lg font-semibold mb-4">A Complete AI Powered Hardware And Software Solution Provider in India.</p>
        <div className="footer-contact-info">
          <h5 className="text-xl font-semibold mb-2">Contact:</h5>
          <ul>
            <li>
              <span className="font-semibold">Call:</span>{" "}
              <a className="text-blue-400 hover:text-blue-300" href="tel:+91-9555070779">+91-9555070779</a>
            </li>
           
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a className="text-blue-400 hover:text-blue-300" href="mailto:sales@smartinfovision.com">support@aitronix.in</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a className="hover:text-blue-400" href="/home">Home</a></li>
          <li><a className="hover:text-blue-400" >About Us</a></li>
          <li><a className="hover:text-blue-400" >Blogs</a></li>

        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Products</h3>
        <ul className="space-y-2">
          <li><a className="hover:text-blue-400" >Studio Setup</a></li>
          <li><a className="hover:text-blue-400" >Microphones</a></li>
          <li><a className="hover:text-blue-400" >Camera Accessories</a></li>
          <li><a className="hover:text-blue-400" >Digital Boards</a></li>
          <li><a className="hover:text-blue-400" >Display Solution</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Services</h3>
        <ul className="space-y-2">
          <li><a className="hover:text-blue-400" >Smart Class Studio</a></li>
          <li><a className="hover:text-blue-400" >Wireless Microphone</a></li>
          <li><a className="hover:text-blue-400" >MAXPRO 13 IFP</a></li>
          <li><a className="hover:text-blue-400" >Galaxy 13 IFP</a></li>
          <li><a className="hover:text-blue-400" >Alpha 13 Pro IFP</a></li>
          <li><a className="hover:text-blue-400" >Anti Flicker Light</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Solutions</h3>
        <ul className="space-y-2">
          <li><a className="hover:text-blue-400">Smart Class Studio</a></li>
          <li><a className="hover:text-blue-400">Wireless Microphone</a></li>
          <li><a className="hover:text-blue-400">MAXPRO 13 IFP</a></li>
          <li><a className="hover:text-blue-400">Galaxy 13 IFP</a></li>
          <li><a className="hover:text-blue-400">Alpha 13 Pro IFP</a></li>
          <li><a className="hover:text-blue-400">Anti Flicker Light</a></li>
        </ul>
      </div>
    </div>
  </div>


<div className="copyright-area mt-5">
  <div className="container">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div>
        <p className="flex flex-wrap gap-4 justify-center sm:justify-start text-center sm:text-left">
          Copyright 2025-26 | All Rights Reserved
          <a className="hover:text-white" title="VRD Creative" rel="dofollow">
            | Privacy Policy
          </a>
          <a className="hover:text-white" title="VRD Creative" rel="dofollow">
            | Shipping Policies
          </a>
          <a className="hover:text-white" title="VRD Creative" rel="dofollow">
            | Warranty Policy
          </a>
          <a className="hover:text-white" title="VRD Creative" rel="dofollow">
            | T & C
          </a>
          <a className="hover:text-white" title="VRD Creative" rel="dofollow">
            | Refund Policy and Cancellation Policy
          </a>
          
        </p>
      </div>
    </div>
  </div>
</div>

    </footer>
  );
}
