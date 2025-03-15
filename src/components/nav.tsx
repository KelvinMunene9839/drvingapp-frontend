import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="bg-white w-full h-30 py-5 border-b border-gray-300 text-[#1e3a8a] sticky top-0 z-10">
      <div className="w-4/5 mx-auto flex items-center justify-between">
       
        <div className="text-xl font-bold flex items-center">
          <a href="#" className="flex items-center">
            <div className="relative w-32 h-20 -ml-12"> 
              <Image
                src="/images/logo.jpeg" 
                alt="logo"
                layout="fill" 
                objectFit="contain" 
                priority // Optional: Use priority if this image is critical for the initial render
              />
            </div>
            <div className="text-xl font-bold">
              <span className="hover:underline">Trust Driving School</span>
            </div>
          </a>
        </div>
        
       

        <div className="hidden lg:flex space-x-8" id="menu-items">
          <a href="#" className="hover:underline">
            <i className="fa-solid fa-home mr-2" /> Home
          </a>
          <a href="#aboutus" className="hover:underline">
            <i className="fa-solid fa-lightbulb mr-2" /> About Us
          </a>
          <a href="#ourhours" className="hover:underline">
            <i className="fa-solid fa-book-open mr-2" /> Our Hours
          </a>
          <Link href="./components/payments.tsx" className="hover:underline">
            <i className="fa-solid fa-book-open mr-2" /> Do exams
          </Link>
          <a href="#contact" className="hover:underline">
            <i className="fa-solid fa-envelope mr-2" /> Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;