import { Link } from "react-router-dom";
import BannerImage from "../assets/Banner.jpg";
import KnowMoreImage from "../assets/KnowMoreSection.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Banner = () => {
  const text = "Enquire Now";

  // State to check if animation already ran
  const [alreadyAnimated, setAlreadyAnimated] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("banner-animated");
    if (visited) {
      setAlreadyAnimated(true);
    } else {
      sessionStorage.setItem("banner-animated", "true");
    }
  }, []);

  // Heading line animation
  const headingVariant = {
    hidden: { opacity: 0, y: alreadyAnimated ? 0 : 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: alreadyAnimated ? 0 : i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: alreadyAnimated ? 0 : 0.2,
      },
    },
  };

  const parentVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between each child
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // faster for smooth feel
    },
  };

  return (
    <>
      <section
        className="w-full relative flex items-center"
        style={{
          height: "calc(100vh - 70px)",
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-[1300px] px-[20px] md:px-[40px] mx-auto">
          <div className="flex flex-col justify-center h-full text-white items-center md:items-start text-center md:text-left md:w-1/2">
            {/* Heading */}
            {["Strong Planning.", "Steady Vision.", "Lasting Value."].map(
              (line, idx) => (
                <motion.h2
                  key={idx}
                  className="leading-10 text-4xl md:text-5xl font-bold"
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={headingVariant}
                >
                  {line}
                </motion.h2>
              )
            )}

            {/* Enquire Now Button */}
            <Link
              to="/contact-us"
              className="mt-[20px] inline-block gradient text-white px-6 py-2 relative overflow-hidden"
            >
              <motion.span
                className="flex justify-center items-center text-[16px] cursor-pointer"
                initial="hidden"
                animate="visible"
                whileTap={{ scale: 0.95 }} // <-- CLICK EFFECT
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: alreadyAnimated ? 0 : 0.03,
                    },
                  },
                  hover: {
                    transition: {
                      staggerChildren: alreadyAnimated ? 0 : 0.02,
                    },
                  },
                }}
              >
                {"Enquire Now".split("").map((char, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-block"
                    initial={{
                      opacity: 0,
                      y: alreadyAnimated ? 0 : 10,
                      rotateY: 0,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotateY: 0,
                    }}
                    variants={{
                      visible: { opacity: 1, y: 0, rotateY: 0 },
                      hover: { rotateY: 360, y: 0 },
                    }}
                    transition={{
                      duration: 0.9,
                      delay: alreadyAnimated ? 0 : idx * 0.02,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </Link>
          </div>
        </div>
      </section>

      <div
        className="w-full flex justify-center items-center bg-[#E5EED8]"
        style={{
          height: "calc(100vh - 70px)",
          backgroundImage: `url(${KnowMoreImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-[1300px] flex justify-center px-[20px] md:px-[40px]">
          {/* PARENT — controls stagger on scroll */}
          <motion.div
            className="w-full md:w-[70%] text-center"
            variants={parentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* CHILD 1 — Heading */}
            <motion.h2
              className="leading-11 mb-[25px] gradient-text-color"
              variants={itemVariant}
            >
              Welcome to Plot Development
              <br className="hidden md:block" /> Rooted in Responsibility
            </motion.h2>

            {/* CHILD 2 — Paragraph */}
            <motion.p variants={itemVariant}>
              At Bhuvan Infra, we shape land into planned plot communities
              defined by quality, structure and long-term potential. Our layouts
              are designed with practical zoning, dependable groundwork and
              mindful land development. Every project is guided by a steady,
              responsible approach that respects the terrain and the people who
              will invest, build and grow within these spaces.
            </motion.p>

            {/* CHILD 3 — Button */}
            <motion.div variants={itemVariant}>
              <Link
                to="/about"
                className="group relative inline-flex items-center overflow-hidden px-6 py-2 gradient text-white font-medium transition-transform duration-300 hover:scale-105 mt-[25px]"
              >
                <span className="relative z-10 text-[16px]">Know More</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
