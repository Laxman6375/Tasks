import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ExitEnterAnimation = () => {
  const [removeInner, setRemoveInner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRemoveInner(true);
    }, 10000);
  });
  return (
    <div>
      <div className=" bg-white h-32 w-32 rounded-full mx-auto mt-10">
        <AnimatePresence>
          {removeInner === false && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 40 }}
              transition={{
                duration: 5,
              }}
              exit={{
                opacity: 0,
                y: 100, 
              }}
              className=" bg-red-700  h-24 w-24 rounded-full "
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExitEnterAnimation;
