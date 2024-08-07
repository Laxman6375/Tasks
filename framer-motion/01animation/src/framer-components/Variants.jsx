import React, { useState } from "react";
import { delay, motion } from "framer-motion";

const Variant1 = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const Variant2 = {
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 1,
    },
  }),

  hide: {
    opacity: 0,
    x: -100,
  },
};

const emojiArray = ["💌", "🩰", "🎧", "🪞", "🦢"];

const Variants = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  return (
    <div>
      <motion.div
        animate={showEmoji ? "show" : "hide"}
        className=" mt-10 flex flex-col justify-center items-center space-y-6"
      >
        <motion.div
          variants={Variant1}
          className=" rounded-full p-4 flex items-center justify-evenly w-80 h-12
         bg-white "
        >
          {emojiArray.map((emoji, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={Variant2}
              className="bg-transparent"
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
        <button
          onClick={() => setShowEmoji(!showEmoji)}
          className=" bg-sky-500 text-white font-semibold py-2 px-8 cursor-pointer rounded-md"
        >
          {!showEmoji ? "Show emojis" : "Hide Emojis"}
        </button>
      </motion.div>
    </div>
  );
};

export default Variants;
