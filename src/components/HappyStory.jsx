import React from "react";
import { motion } from "framer-motion";

function HappyStory() {
  return (
    <section id="happy-story" className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Happy Story
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
            <motion.img
              src="/assets/happy-story.svg"
              alt="Happy Story"
              className="w-full h-auto max-h-80 object-cover rounded-lg shadow-xl"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="w-full md:w-1/2 ml-0 md:ml-12 text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800 uppercase tracking-wider">
              Happy Family
            </h4>
            <div className="flex justify-center md:justify-start items-center space-x-2 mt-3">
              <img
                src="/assets/ic_star.svg"
                alt="star"
                className="w-6 h-6 text-yellow-400"
              />
              <img
                src="/assets/ic_star.svg"
                alt="star"
                className="w-6 h-6 text-yellow-400"
              />
              <img
                src="/assets/ic_star.svg"
                alt="star"
                className="w-6 h-6 text-yellow-400"
              />
              <img
                src="/assets/ic_star.svg"
                alt="star"
                className="w-6 h-6 text-yellow-400"
              />
              <img
                src="/assets/ic_star.svg"
                alt="star"
                className="w-6 h-6 text-yellow-400"
              />
            </div>
            <h3 className="text-3xl font-semibold text-gray-900 mt-5">
              What a great trip with my family, I should try again next time
              soon...
            </h3>
            <h5 className="text-lg font-medium text-gray-600 mt-3">
              Angga - Product Designer
            </h5>
            <button className="mt-6 py-3 px-6 text-1xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-xl hover:bg-gradient-to-l focus:outline-none transition duration-300">
              Read Their Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HappyStory;
