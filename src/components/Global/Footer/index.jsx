'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            {/* <h3 className="text-xl font-semibold mb-4 text-primary-600">MediGlucks</h3> */}
            <img src="/nav.png" alt="" className='w-full -ml-2'/>
            <p className="text-gray-600 mb-4">
              Your trusted partner for all healthcare needs. We provide quality medicines, health products, and wellness solutions.
            </p>
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-600">123 Healthcare Avenue, Medical District</span>
            </div>
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-600">support@mediglucks.com</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-600">+1 (800) MEDI-HELP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/lab-tests" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Lab Tests
                </Link>
              </li>
              <li>
                <Link href="/health-blog" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link href="/store-locator" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-600">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary-600 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-600">Download Our App</h3>
            <p className="text-gray-600 mb-4">
              Get access to exclusive offers and manage your prescriptions on the go.
            </p>
            <div className="flex flex-col space-y-3">
              <Link href="#" className="inline-block">
                <Image 
                  src="/img8.png" 
                  alt="Download on App Store" 
                  width={140} 
                  height={42} 
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="#" className="inline-block">
                <Image 
                  src="/img8.png" 
                  alt="Get it on Google Play" 
                  width={140} 
                  height={42} 
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-primary-600">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-medium text-gray-600 mb-2">We Accept</h4>
              <div className="flex space-x-4">
                <span className="bg-white p-2 rounded shadow-sm">
                  <svg className="h-6 w-10" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="24" rx="4" fill="white"/>
                    <path d="M15.4 14.8L16.4 9.2H14.8L13.8 14.8H15.4Z" fill="#3C4043"/>
                    <path d="M21.2 14.9C22.4 14.9 23.4 14.2 23.7 13.1L23.6 13.3L24.1 9.9H22.6L22.3 11.7C22.2 12.1 21.8 12.5 21.3 12.5C20.8 12.5 20.5 12.1 20.6 11.7L21 9.9H19.5L19 12.4C18.8 13.8 19.7 14.9 21.2 14.9Z" fill="#3C4043"/>
                    <path d="M26.9 14.8H28.4L29.4 9.2H27.9L26.9 14.8Z" fill="#3C4043"/>
                    <path d="M11.5 9.2L10 14.8H11.5L13 9.2H11.5Z" fill="#3C4043"/>
                    <path d="M17.9 9.2C16.7 9.2 15.7 9.9 15.4 11L15.5 10.8L15 14.2H16.5L16.8 12.4C16.9 12 17.3 11.6 17.8 11.6C18.3 11.6 18.6 12 18.5 12.4L18.1 14.2H19.6L20.1 11.7C20.3 10.3 19.4 9.2 17.9 9.2Z" fill="#3C4043"/>
                  </svg>
                </span>
                <span className="bg-white p-2 rounded shadow-sm">
                  <svg className="h-6 w-10" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="24" rx="4" fill="white"/>
                    <path d="M22.2 12C22.2 14.4 20.2 16.4 17.8 16.4C15.4 16.4 13.4 14.4 13.4 12C13.4 9.6 15.4 7.6 17.8 7.6C20.2 7.6 22.2 9.6 22.2 12Z" fill="#EB001B"/>
                    <path d="M26.6 12C26.6 14.4 24.6 16.4 22.2 16.4C19.8 16.4 17.8 14.4 17.8 12C17.8 9.6 19.8 7.6 22.2 7.6C24.6 7.6 26.6 9.6 26.6 12Z" fill="#F79E1B"/>
                    <path d="M24.4 12C24.4 10.8 23.4 9.8 22.2 9.8C21 9.8 20 10.8 20 12C20 13.2 21 14.2 22.2 14.2C23.4 14.2 24.4 13.2 24.4 12Z" fill="#FF5F00"/>
                  </svg>
                </span>
                <span className="bg-white p-2 rounded shadow-sm">
                  <svg className="h-6 w-10" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="24" rx="4" fill="white"/>
                    <path d="M14.5 9.5H25.5V14.5H14.5V9.5Z" fill="#172B85"/>
                    <path d="M15 10H25V14H15V10Z" fill="#172B85"/>
                    <path d="M19.5 11.2C19.5 12.2 18.7 13 17.7 13C16.7 13 15.9 12.2 15.9 11.2C15.9 10.2 16.7 9.4 17.7 9.4C18.7 9.4 19.5 10.2 19.5 11.2Z" fill="white"/>
                    <path d="M17.7 12.8C16.8 12.8 16 12 16 11.1C16 10.2 16.8 9.4 17.7 9.4C18.6 9.4 19.4 10.2 19.4 11.1C19.4 12 18.6 12.8 17.7 12.8Z" fill="white"/>
                    <path d="M24.1 13H23.1L23.8 10.2H24.8L24.1 13Z" fill="white"/>
                    <path d="M22.5 13H21.5L21.9 10.2H22.9L22.5 13Z" fill="white"/>
                    <path d="M21 13H19.8L20.4 10.2H21.6L21 13Z" fill="white"/>
                  </svg>
                </span>
                <span className="bg-white p-2 rounded shadow-sm">
                  <svg className="h-6 w-10" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="24" rx="4" fill="white"/>
                    <path d="M23 15.5C20.8 15.5 19 13.7 19 11.5C19 9.3 20.8 7.5 23 7.5C25.2 7.5 27 9.3 27 11.5C27 13.7 25.2 15.5 23 15.5Z" fill="#FFB600"/>
                    <path d="M17 15.5C14.8 15.5 13 13.7 13 11.5C13 9.3 14.8 7.5 17 7.5C19.2 7.5 21 9.3 21 11.5C21 13.7 19.2 15.5 17 15.5Z" fill="#1A1876"/>
                    <path d="M20 11.5C20 10.1 19.4 8.8 18.5 7.9C17.6 8.8 17 10.1 17 11.5C17 12.9 17.6 14.2 18.5 15.1C19.4 14.2 20 12.9 20 11.5Z" fill="#E2574C"/>
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} MediGlucks. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;