import { motion } from "framer-motion";
import {  textVariant } from "../utils/motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ParticlesContainer from "./ParticlesContainer";
import { Avatar, useMediaQuery } from "@mui/material";

const Hero = () => {
  const isSmallScreen = useMediaQuery("(max-width:640px)");

  return (
    <section
      className={`flex-between-center relative mx-auto h-screen w-full flex-col`}
    >
      <ParticlesContainer />
      <div className="flex-between-center">
        <div
          className={`top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
            <div className="violet-gradient h-40 w-1 sm:h-80" />
          </div>
          <motion.div variants={textVariant()}>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-pink-600">Amit Maddheshiya</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop Full Stack Wep Applications, using{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text"> MERN Stack</span>
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={textVariant()}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="z-[1] h-full"
        >
         
         <Avatar
          className="rounded-full w-60 h-60 sm:w-40 sm:h-40 border border-[#915EFF]"
            alt="my image"
            src="./myImage1.jpeg"
            sx={
              !isSmallScreen
                ? { width: 240, height: 240 }
                : { width: 100, height: 100 }
            }
          />
           
          
        </motion.div>
      </div>

      <div className="flex-center-center mb-40 w-full ">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");