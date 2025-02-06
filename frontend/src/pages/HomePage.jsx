import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full filter blur-3xl top-20 left-1/3 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500 opacity-20 rounded-full filter blur-3xl bottom-20 right-1/3 animate-pulse"></div>
      </div>
      
      {/* Main Content */}
      <motion.div
        className="backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-lg z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-6 text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Our Investment Platform
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mb-8 max-w-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Grow your wealth with secure and smart investments. Join us today!
        </motion.p>
        <motion.div
          className="flex space-x-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link
            to="/register"
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-900 hover:to-black text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Login
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
