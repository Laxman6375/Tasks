import React from "react";
import { motion } from "framer-motion";
const DraggableDiv = () => {
  return (
    <motion.div
      drag
      whileDrag={{
        scale: 1.5,
        backgroundColor: "deepskyblue",
      }}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      dragElastic={0.2}
      className=" w-44 h-44 rounded-full bg-white mt-10 mx-auto"
    ></motion.div>
  );
};

export default DraggableDiv;
