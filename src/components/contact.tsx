'use client'
import React, { useState } from 'react';
import { FaMapMarker, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";
// import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='text-[#1d4d85] app min-w-[280px] min-h-screen bg-background flex'>
      <div className='m-auto max-w-[1250px] px-5 md:px-16 mb-[20vh]'>
        <section className="pt-24 md:pt-32">
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
          <p className="text-lg md:text-base lg:text-xl my-10 text-center max-w-2xl mx-auto">
            We would love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='grid grid-cols-1 gap-4'>
              {/* Top Row: Address and Email */}
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <FaMapMarker className="text-2xl cursor-pointer hover:text-red-600 mr-2" />
                  <h2 className="text-lg font-medium">Address:</h2>
                </div>
                <p>Kigali-Gikondo</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <FaEnvelope className="text-2xl cursor-pointer hover:text-red-600 mr-2" />
                  <h2 className="text-lg font-medium">Email:</h2>
                </div>
                <p>
                  <a href="mailto:trustdriving9@gmail.com" className="text-blue-600">{'trustdriving9@gmail.com'}</a>
                </p>
              </div>

              {/* Bottom Row: Phone and Schedule */}
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <FaPhoneAlt className="text-2xl cursor-pointer hover:text-red-600 mr-2" />
                  <h2 className="text-lg font-medium">Phone:</h2>
                </div>
                <p>0788688690 / 0784040192</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <FaClock className="text-2xl cursor-pointer hover:text-red-600 mr-2" />
                  <h2 className="text-lg font-medium">Schedule:</h2>
                </div>
                <a href="#ourhours" className="text-blue-600">Check our schedule</a>
              </div>
            </div>

            {/* Form Section */}
            <div className='bg-gray-50 p-10 rounded-lg shadow'>
              <form onSubmit={handleSubmit} className="mx-auto">
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px- 3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows={4}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-[#1d4d85] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}