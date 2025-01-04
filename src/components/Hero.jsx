import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="/hero" className="bg-gradient-to-r from-blue-900 to-blue-400 text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center fon">
        <div className="w-full md:w-1/2 pr-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Forget Busy Work, Start Your Next Vacation
          </h1>
          <p className="mb-6 text-lg md:text-xl font-semibold">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moment.
          </p>
          <button className="bg-yellow-500 text-white text-xl font-bold px-6 py-3 rounded-lg transition duration-300 hover:scale-105">
            Show Me Now
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <motion.img
            src="/assets/picture.svg"
            alt="Vacation"
            className="w-3/4 md:w-full h-auto object-contain"
            animate={{ rotate: [0, 5, 0] }} 
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
