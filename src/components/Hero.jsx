import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="/hero" className="bg-gradient-to-r from-blue-500 to-blue-900 text-white py-16">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div className="w-1/2 pr-8">
          <h1 className="text-5xl font-semibold mb-4">
            Forget Busy Work, Start Your Next Vacation
          </h1>
          <p className="mb-6 text-xl">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moment.
          </p>
          <button className="bg-yellow-500 text-white text-1xl font-bold px-6 py-3 rounded-lg transition duration-300 hover:scale-105">
            Show Me Now
          </button>
        </div>
        <div className="w-1/2 flex justify-end pl-8">
          <motion.img
            src="/assets/picture.svg"
            alt="Vacation"
            className="w-full h-auto"
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
