"use client";
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    name: "Karan",
    role: "QA Associate",
    text: "I started my career here as a Fresher & was welcomed by an incredible team that values personal & professional growth. My experience here has been a journey of constant learning & upskilling.",
    rating: 4.5,
    image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg",
    type: "Patient Testimonials",
  },
  {
    id: 2,
    name: "Prathiksha Shetty",
    role: "Ass. Software Developer",
    text: "In my time here, I've experienced firsthand the support system that Vinove has in place. From continuous training & development opportunities to upskilling of already present skills.",
    rating: 4.5,
    image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg",
    type: "Patient Testimonials",
  },
  {
    id: 3,
    name: "Ram",
    role: "Associate Software Developer",
    text: "What makes Vinove special is the way they help employees grow. The best part is that senior colleagues are always there to help and guide. Their mentoring has been a big part of my success.",
    rating: 4.5,
    image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg",
    type: "Patient Testimonials",
  },
  {
    id: 4,
    name: "Anita",
    role: "UI/UX Designer",
    text: "The culture here is supportive and collaborative. I’ve learned so much from my peers and leaders alike.",
    rating: 5,
    image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg",
    type: "Client Testimonials",
  },
  {
    id: 5,
    name: "Vivek",
    role: "Backend Engineer",
    text: "I’ve grown professionally thanks to the opportunities and mentorship. Every project has been a new learning experience.",
    rating: 4.5,
    image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg",
    type: "Patient Testimonials",
  },
  {
    id: 6,
    name: "Rohit",
    role: "Frontend Developer",
    text: "Amazing workplace culture and opportunities to explore new tech.",
    rating: 4.5,
    image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg",
    type: "Patient Testimonials",
  },
  {
    id: 7,
    name: "Sneha",
    role: "HR",
    text: "Supportive management and great work-life balance!",
    rating: 4.5,
    image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg",
    type: "Patient Testimonials",
  },
  {
    id: 8,
    name: "Ajay",
    role: "Tester",
    text: "Good projects, friendly environment, lots to learn.",
    rating: 4.5,
    image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg",
    type: "Patient Testimonials",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const totalDots = 7; // 👈 Always show 7 dots

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalDots - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalDots - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Client Success and Team Pride</h2>
        <p className="text-gray-600 mt-2">
          Let the success stories of our clients and the pride of our team speak for themselves.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Cards container */}
        <div className="flex gap-6 overflow-hidden">
          {testimonials.slice(current, current + visibleCount).map((item) => (
            <div key={item.id} className="flex-1 text-center max-w-sm">
            <div
  key={item.id}
  className="flex-1 text-center max-w-sm"
>
  <div className="relative bg-gray-100 rounded-2xl p-6 w-full h-[340px] flex flex-col justify-between border-t-0 border-r-0 border-l-0 border-gray-200 border-9">
    
    {/* Stars */}
    <div className="flex justify-center mb-4 text-yellow-400">
      {[...Array(4)].map((_, i) => (
        <FaStar key={i} />
      ))}
      <FaStarHalfAlt />
    </div>

    {/* Quote */}
    <p className="text-black text-lg flex-1 text-left">
      “{item.text}”
    </p>

    {/* User */}
    <div className="flex items-center gap-3">
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="text-left">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-500">{item.role}</p>
      </div>
    </div>

    {/* Downward Arrow - now inside */}
    <div className="absolute left-1/2 -bottom-[0.9rem] transform -translate-x-1/2">
      <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-200"></div>
    </div>
  </div>

  {/* Label below */}
  <p className="mt-6 text-sm font-medium text-gray-800">{item.type}</p>
</div>


          
            </div>
          ))}
        </div>

        {/* Navigation with dots */}
        <div className="flex items-center justify-center mt-6 space-x-4">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="bg-white rounded-full p-2 hover:bg-gray-100 shadow"
          >
            <HiChevronLeft className="text-2xl" />
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {Array.from({ length: totalDots }).map((_, i) => (
              <span
                key={i}
                className={`h-2 w-8 rounded-full cursor-pointer transition ${current === i ? "bg-black" : "bg-gray-300"
                  }`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="bg-white rounded-full p-2 hover:bg-gray-100 shadow"
          >
            <HiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
