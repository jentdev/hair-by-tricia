import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { motion, MotionConfig } from "framer-motion";

export const MobileBtn = () => {
  const { setMenuOpen } = useContext(AppContext);
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.button
        className="hamburger-btn z-50"
        initial={false}
        onClick={() => (
          setMenuOpen((prev) => !prev), setActive((prev) => !prev)
        )}
        animate={active ? "open" : "closed"}
      >
        <motion.span
          className="top"
          style={{
            left: "50%",
            top: "30%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["30%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "30%"],
            },
          }}
        />

        <motion.span
          className="middle"
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />

        <motion.span
          className="bottom"
          style={{
            left: "calc(50% + 3px)",
            bottom: "30%",
            x: "-50%",
            y: "50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: "50%",
              bottom: ["30%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              left: "calc(50% + 4px)",
              bottom: ["50%", "50%", "30%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};
