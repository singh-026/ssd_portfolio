import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import Typed from "typed.js";
import { profileImage } from "../assets";
import "../index.css";

const Hero = () => {
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);

  console.log("width: ", windowWidth.current);
  console.log("height: ", windowHeight.current);
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "a React Developer",
        "a React Native Developer",
        "a friday Dev ;) ",
      ],
      typeSpeed: 100,
      loop: true,
      backDelay: 1000,
      backSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm Siddharth
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am&nbsp;
            <span ref={el} className="text-[#915EFF]" />
          </p>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="profilePicDiv"
      >
        <img src={profileImage} className="profilePic" />
      </motion.div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
