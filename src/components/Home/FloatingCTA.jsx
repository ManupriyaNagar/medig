"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show the CTA after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClose = () => {
    setIsVisible(false);
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25 
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-sm border border-blue-100">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">Special Offer!</h3>
              <button 
                onClick={handleClose}
                className="text-white hover:text-blue-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-blue-800 font-semibold mb-2">First-time customer?</p>
                <p className="text-gray-600 mb-4">Get 15% off on your first order with code:</p>
                
                <motion.div 
                  className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center mb-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-mono font-bold text-xl text-blue-700 tracking-wider">WELCOME15</span>
                </motion.div>
                
                <motion.button
                  className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Shop Now
                </motion.button>
              </motion.div>
            </div>
            
            <motion.div 
              className="absolute -z-10 -top-10 -right-10 w-40 h-40 rounded-full bg-blue-200 opacity-50"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}