import React from 'react';
import { motion } from 'framer-motion';

function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center text-white">

<div className="h-[10vh] w-full border border-black flex justify-between items-center px-8">
      <div className="flex">
        <div className=""> 
          <img src="" alt='logo' />
        </div>
        <h1 className="text-2xl">TMS</h1>

      </div>
        <div className="">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Features</li>
            <li>Reviews</li>
            <li>About Us</li>
          </ul>
        </div>


    </div>





      <div className="text-center px-6 py-12 md:px-12 lg:px-24">
        {/* Hero Section */}
        <motion.div 
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Task Management"
            className="w-32 h-32 mx-auto mb-6 rounded-full shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.h1 
            className="text-4xl font-extrabold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Welcome to TaskMaster
          </motion.h1>
          <motion.p 
            className="text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Your productivity hub. Organize, plan, and execute tasks like never before.
          </motion.p>
          
          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <a
              href="/dashboard"
              className="inline-block bg-yellow-400 text-gray-800 font-semibold text-lg py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:bg-yellow-500"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="Feature 1"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold">Task Creation</h3>
            <p className="text-gray-200">Easily create, manage, and track tasks with a few clicks.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="Feature 2"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold">Collaboration</h3>
            <p className="text-gray-200">Work seamlessly with your team to get tasks done faster.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="Feature 3"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold">Notifications</h3>
            <p className="text-gray-200">Stay up-to-date with reminders and task updates.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Welcome;

