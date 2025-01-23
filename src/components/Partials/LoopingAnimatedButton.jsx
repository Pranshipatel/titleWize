import React from "react";
import { motion } from "framer-motion";
import { BsCurrencyDollar } from "react-icons/bs";

function LoopingAnimatedButton() {
  return (
    <button className="relative w-[90%] h-12 bg-gradient-to-r from-white to-[#EF3639] rounded-full overflow-hidden focus:outline-none">
      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold z-10"></div>
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center"
        animate={{
          x: [0, 300, 0], // Path of the ball
        }}
        transition={{
          duration: 7, // Increased duration for slower movement
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <div className="w-full h-full bg-[#EF3639] rounded-full flex items-center justify-center text-white">
          <BsCurrencyDollar />
        </div>
      </motion.div>
    </button>
  );
}

export default LoopingAnimatedButton;
