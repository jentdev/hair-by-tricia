import React, { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';

export const MenuBtn3Bars = () => {

    const [ active, setActive ] = useState(false);

  return (
    <MotionConfig
        transition={{
            duration: 0.5,
            ease: "easeInOut",
        }}
    >
        <motion.button
            initial={false}
            className="animated-menu-btn"
            onClick={() => setActive((prev) => !prev)}
            animate={active ? 'open' : 'closed'}
        >
            <motion.span
                className="animated-menu-btn-span-top"
                style={{
                    left: "50%",
                    top: "35%",
                    x: "-50%",
                    y: "-50%"
                }}
                
                variants={{
                    open: {
                        rotate: ["0deg", "0deg", "45deg"],
                        top: ["35%", "50%", "50%"]
                    },
                    closed: {
                        rotate: ["45deg", "0deg", "0deg"],
                        top: ["50%", "50%", "35%"]
                    }
                }}
            />

            <motion.span
                className="animated-menu-btn-span-middle"
                style={{
                    left: "50%",
                    top: "50%",
                    x: "-50%",
                    y: "-50%"
                }}
                variants={{
                    open: {
                        rotate: ["0deg", "0deg", "-45deg"],

                    },
                    closed: {
                        rotate: ["-45deg", "0deg", "0deg"],

                    }
                }}        
            />

            <motion.span
                className="animated-menu-btn-span-bottom"
                style={{
                    left: "calc(50% + 9px)",
                    bottom: "35%",
                    x: "-50%",
                    y: "50%"
                }}
                variants={{
                    open: {
                        rotate: ["0deg", "0deg", "45deg"],
                        left: "50%",
                        bottom: ["35%", "50%", "50%"]
                    },
                    closed: {
                        rotate: ["45deg", "0deg", "0deg"],
                        left: "calc(50% + 9px)",
                        bottom: ["50%", "50%", "35%"]
                    }
                }}
            />
        </motion.button>
    </MotionConfig>
  )
};