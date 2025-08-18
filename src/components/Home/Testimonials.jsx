"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Regular Customer",
    image: "/img1.webp",
    content: "MediGlucks has been a lifesaver for my family. The medicine delivery is always on time, and their customer service is exceptional. I've been using their services for over a year now and have never been disappointed.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Diabetic Patient",
    image: "/img2.webp",
    content: "As someone who needs regular medication for diabetes, MediGlucks has made my life so much easier. Their subscription service ensures I never run out of my essential medicines. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Senior Citizen",
    image: "/img3.webp",
    content: "At my age, going to pharmacies was becoming difficult. MediGlucks delivers all my medications right to my doorstep. Their app is also very easy to use, even for someone not very tech-savvy like me.",
    rating: 4,
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Healthcare Professional",
    image: "/img4.webp",
    content: "As a doctor, I often recommend MediGlucks to my patients. Their wide range of medicines and health products, combined with reliable delivery, makes them a trustworthy option for healthcare needs.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gray-50 py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">What Our Customers Say</h2>
          <p className="text-sm md:text-base text-gray-600">Trusted by thousands of customers across India</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop view - side by side cards */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-4 md:p-5 lg:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start mb-3 md:mb-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-3 md:mr-4 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                  />
                  <div>
                    <h3 className="font-semibold text-base md:text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-3 w-3 md:h-4 md:w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic text-xs md:text-sm">{testimonial.content}</p>
              </div>
            ))}
          </div>

          {/* Mobile view - carousel */}
          <div className="md:hidden relative">
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-3 sm:mb-4">
                <Image 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  width={50}
                  height={50}
                  className="rounded-full mr-3 w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{testimonials[activeIndex].role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-3 w-3 sm:h-4 sm:w-4 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic text-xs sm:text-sm">{testimonials[activeIndex].content}</p>
            </div>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-1 sm:px-2">
              <button 
                onClick={prevTestimonial}
                className="bg-white rounded-full p-1.5 sm:p-2 shadow-md hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white rounded-full p-1.5 sm:p-2 shadow-md hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-3 sm:mt-4">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 w-1.5 sm:h-2 sm:w-2 mx-1 rounded-full ${index === activeIndex ? 'bg-green-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}