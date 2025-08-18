"use client";

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Diabetes: Symptoms, Causes, and Management",
    excerpt: "Learn about the early warning signs of diabetes, risk factors, and effective strategies for managing blood sugar levels.",
    image: "/img2.webp",
    category: "Diabetes",
    date: "June 15, 2023",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Importance of Vitamin D: Are You Getting Enough?",
    excerpt: "Discover why Vitamin D is crucial for your health and how to ensure you're meeting your daily requirements.",
    image: "/img3.webp",
    category: "Nutrition",
    date: "May 28, 2023",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Heart Health: Simple Lifestyle Changes for a Stronger Heart",
    excerpt: "Small daily habits that can significantly improve your cardiovascular health and reduce the risk of heart disease.",
    image: "/img4.webp",
    category: "Cardiology",
    date: "April 10, 2023",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Mental Wellness: Strategies for Managing Stress and Anxiety",
    excerpt: "Practical techniques to help you cope with stress, anxiety, and improve your overall mental wellbeing.",
    image: "/img5.webp",
    category: "Mental Health",
    date: "March 22, 2023",
    readTime: "7 min read",
  },
];

export default function HealthBlog() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-2 sm:gap-0">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Health Articles & Tips</h2>
            <p className="text-gray-600 text-sm md:text-base mt-1">Stay informed with the latest health insights</p>
          </div>
          <Link 
            href="/blog" 
            className="text-green-600 text-sm md:text-base font-medium hover:text-green-700 flex items-center mt-2 sm:mt-0"
          >
            View all articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-40 sm:h-44 md:h-48">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 bg-green-600 text-white text-xs font-semibold px-2 md:px-3 py-0.5 md:py-1 rounded-br-lg">
                  {post.category}
                </div>
              </div>
              <div className="p-3 md:p-4 lg:p-5">
                <div className="flex items-center text-gray-500 text-xs mb-2 md:mb-3">
                  <span>{post.date}</span>
                  <span className="mx-1 md:mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`} 
                  className="text-green-600 text-xs md:text-sm font-medium hover:text-green-700 inline-flex items-center"
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Health Tips Box */}
        <div className="mt-8 md:mt-12 bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="mb-3 sm:mb-0">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Quick Health Tips</h3>
              <p className="text-gray-600 text-sm md:text-base">Simple daily habits for better health</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-white rounded-full p-1.5 md:p-2 shadow-sm hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="bg-white rounded-full p-1.5 md:p-2 shadow-sm hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2 md:mb-3">
                <div className="bg-blue-100 p-1.5 md:p-2 rounded-full mr-2 md:mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm md:text-base">Stay Hydrated</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">Drink at least 8 glasses of water daily to maintain proper bodily functions and energy levels.</p>
            </div>

            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2 md:mb-3">
                <div className="bg-green-100 p-1.5 md:p-2 rounded-full mr-2 md:mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm md:text-base">Balanced Diet</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">Include fruits, vegetables, whole grains, lean proteins, and healthy fats in your daily meals.</p>
            </div>

            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2 md:mb-3">
                <div className="bg-purple-100 p-1.5 md:p-2 rounded-full mr-2 md:mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm md:text-base">Quality Sleep</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">Aim for 7-9 hours of quality sleep each night to support physical and mental health.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}