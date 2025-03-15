'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/nav';
import Footer from '../components/footer';
import Image from 'next/image';
import Contact from '@/components/contact';
import Schedule from '@/components/schedule';



const images = [
  { src: '/images/image1.jpeg', alt: 'Driving lesson image 1' },
  { src: '/images/image2.jpeg', alt: 'Driving lesson image 2' },
  { src: '/images/image3.jpeg', alt: 'Driving lesson image 3' },
  { src: '/images/image4.jpeg', alt: 'Driving lesson image 4' },
  { src: '/images/image5.jpeg', alt: 'Driving lesson image 5' },
  { src: '/images/image6.jpeg', alt: 'Driving lesson image 6' },
];

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='text-[#1d4d85] app min-w-[280px] min-h-screen bg-background'>
      <Navbar />
      <div className='m-auto max-w-[1250px] px-5 md:px-16 mb-[20vh]'>

        <section className="pt-24 md:pt-32">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div className="tracking-wider md:tracking-normal max-w-xs lg:max-w-xl">
              <h1 className="lg:text-7xl text-4xl font-bold">
                Where Every Lesson Counts!
              </h1>
              <p className="text-xl md:text-base lg:text-xl my-10 mt-[35px]">
                With our experienced instructors and personalized lessons, you will learn essential road rules and safe driving practices. Our dedicated team will equip you to handle various driving situations, from busy city streets to highways, building your confidence along the way. We believe a solid foundation in driving prepares you for both your test and a lifetime of responsible driving. Join us to start your journey towards becoming a skilled driver!
              </p>
            </div>
            <div className="image-container">
              {images.map((image, index) => (
                <Image
                  key={index}
                  className={`image ${currentImageIndex === index ? 'active' : ''}`}
                  alt={image.alt}
                  src={image.src}
                  layout="fill"
                  objectFit="cover"
                />
              ))}
            </div>
          </div>
        </section>

        <section id='aboutus' className='mt-[100px] bg-slate-200 p-32'>
          <div className='mb-7'>
            <h1 className='text-4xl font-bold text-[#1d4d85] text-center'>About Us</h1>
            <p className='text-lg md:text-base lg:text-xl my-10 text-center max-w-2xl mx-auto'>
              At Trust Driving school, we are dedicated to providing high-quality driving education that empowers our students to become safe and confident drivers. Our team of certified instructors brings years of experience and a passion for teaching to every lesson.
            </p>
            <p className='text-lg md:text-base lg:text-xl my-10 text-center max-w-2xl mx-auto'>
              We believe that learning to drive should be an enjoyable and stress-free experience. Thats why we offer personalized lesson plans tailored to each students unique needs and learning pace. Whether you are a first-time driver or looking to refine your skills, we are here to support you every step of the way.
            </p>
            <p className='text-lg md:text-base lg:text-xl my-10 text-center max-w-2xl mx-auto'>
              Our mission is to create a safe and supportive environment where students can learn the rules of the road and develop the confidence to handle any driving situation. Join us today and take the first step towards becoming a skilled driver!
            </p>
          </div>
        </section>

        <section id='contact'>
          <Contact />
        </section>
        <section id='ourhours'>
          <Schedule />
        </section> </div>
      <section>
        <Footer />
      </section>
    </div>
  );
}