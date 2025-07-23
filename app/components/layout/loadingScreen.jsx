'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set the loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
          >
            {/* ECG Animation */}
            <motion.div 
              className="pulse-container"
              whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <svg 
                width="120" 
                height="60" 
                viewBox="0 0 120 60" 
                className="ecg-line"
              >
                <motion.path 
                  d="M0,30 L20,30 L25,10 L30,50 L35,5 L40,55 L45,30 L120,30" 
                  className="heartbeat-path"
                  strokeWidth="1.5" 
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 2, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                />
              </svg>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

     
    </div>
  );
}