import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content p-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
    
    {/* Logo & Company Info */}
    <div className="flex flex-col items-center md:items-start">
      <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
        <path d="M22.672 15.226l-2.432.811..."></path>
      </svg>
      <p className="text-lg font-semibold mt-2">News Industries Ltd.</p>
      <p className="text-gray-600 text-sm">Providing reliable news since 1992</p>
    </div>

    {/* Services Section */}
    <div>
      <h6 className="footer-title">Services</h6>
      <ul className="space-y-2">
        <li><a className="link link-hover">Branding</a></li>
        <li><a className="link link-hover">Design</a></li>
        <li><a className="link link-hover">Marketing</a></li>
        <li><a className="link link-hover">Advertisement</a></li>
      </ul>
    </div>

    {/* Company Section */}
    <div>
      <h6 className="footer-title">Company</h6>
      <ul className="space-y-2">
        <li><a className="link link-hover">About us</a></li>
        <li><a className="link link-hover">Contact</a></li>
        <li><a className="link link-hover">Jobs</a></li>
        <li><a className="link link-hover">Press kit</a></li>
      </ul>
    </div>

    {/* Legal Section */}
    <div>
      <h6 className="footer-title">Legal</h6>
      <ul className="space-y-2">
        <li><a className="link link-hover">Terms of use</a></li>
        <li><a className="link link-hover">Privacy policy</a></li>
        <li><a className="link link-hover">Cookie policy</a></li>
      </ul>
    </div>
    
  </div>
</footer>


      
    );
};

export default Footer;