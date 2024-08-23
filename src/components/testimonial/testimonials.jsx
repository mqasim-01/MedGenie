import React, { useState, useEffect } from 'react';
import TestimonialCard from './testimonialcard';
import assets from '../../assets/images';

const testimonialsData = [
    {
        text: "I’ve had an excellent experience with MmedGenie. It’s an invaluable tool for reaching out to patients who need my expertise. The platform is well-designed and promotes a collaborative approach to healthcare.",
        author: "John Doe",
        image: assets.John, 
    },
    {
        text: "Finding a reliable doctor was daunting until I discovered MedGenie. The process was seamless, and I found the perfect specialist who understood my needs. Highly recommended!",
        author: "Ivy Smith",
        image: assets.Ivy, 
    },
    {
        text: "As a healthcare provider, I appreciate platforms like MedGenie that connect me directly with patients seeking specialized care. It’s efficient, user-friendly, and enhances patient-doctor communication.",
        author: "Michael Johnson",
        image: assets.Michael, 
    },
    {
        text: "Registering on MedGenie was straightforward, and within minutes, I was able to schedule an appointment with a doctor who specializes in my condition. The entire process was efficient and stress-free.    ",
        author: "Emily Brown",
        image: assets.Emily, 
    },
    {
        text: "Navigating healthcare options for a loved one is challenging. MedGenie made it easier by providing comprehensive information and connecting us with compassionate doctors who genuinely cared.",
        author: "Daisy Wilson",
        image: assets.Daisy, 
    },
    {
        text: "I’ve been using MedGenie for years now, and it continues to exceed my expectations. It’s not only a platform for connecting with patients but also a community where healthcare professionals can share insights and best practices.",
        author: "Sarah Thompson",
        image: assets.Sarah, 
    }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % testimonialsData.length);
  };

  
  const prevSlide = () => {
      setCurrentSlide((currentSlide - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentSlide((currentSlide + 1) % testimonialsData.length);
      }, 2500); 

      return () => clearInterval(interval);
  }, [currentSlide]);

  return (
      <div className="bg-gray-100 py-12">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                  <div className="flex justify-center items-center">
                      <div className="overflow-hidden relative w-full max-w-6xl">
                          <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentSlide * (100 / testimonialsData.length)}%)` }}>
                              {testimonialsData.map((testimonial, index) => (
                                  <div key={index} className="flex-shrink-0 w-full md:w-96 px-4">
                                      <TestimonialCard testimonial={testimonial} />
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
                  {/* Left arrow button */}
                  <button
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 font-bold py-2 px-4 rounded-l"
                      onClick={prevSlide}
                     
                  >
                      &#8249;
                  </button>
                  {/* Right arrow button */}
                  <button
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 font-bold py-2 px-4 rounded-r"
                      onClick={nextSlide}
                      
                  >
                      &#8250;
                  </button>
              </div>
          </div>
      </div>
  );
};

export default Testimonials;
