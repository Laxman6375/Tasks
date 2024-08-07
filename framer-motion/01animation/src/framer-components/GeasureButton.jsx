import React from "react";
import { motion } from "framer-motion";
const GeasureButton = () => {
  return (
    <div className="flex justify-center mt-10">
      <motion.button
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
        whileTap={{
          scale: 0.7,
        }}
        className=" bg-white p-2 rounded-full w-44 text-gray-700 font-bold"
      >
        Submit
      </motion.button>
    </div>
  );
};

export default GeasureButton;
