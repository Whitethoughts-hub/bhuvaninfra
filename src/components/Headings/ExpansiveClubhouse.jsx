import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const child = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const StaggeredText = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="
        inline-grid 
        grid-cols-[max-content_max-content] 
        grid-rows-2 
        w-fit"
    >
      <motion.span
        variants={child}
        className="heading-text gradient-text-color col-start-1 row-start-1"
      >
        Expans
      </motion.span>

      <motion.span
        variants={child}
        className="heading-text gradient-text-color col-start-2 row-start-1"
      >
        ive
      </motion.span>

      <motion.span
        variants={child}
        className="heading-text col-start-2 row-start-2 -mt-1"
      >
        Clubhouse
      </motion.span>
    </motion.div>
  );
};

const ExpansiveClubHouse = () => {
  return (
    <section
      className="
        w-full flex flex-col lg:flex-row 
        max-w-[1300px] mx-auto 
        px-[20px] md:px-[40px] py-[50px] md:pt-[100px]
        gap-[30px] lg:gap-20
        justify-center md:justify-between
        items-center md:items-start
      "
    >
      <div className="w-full md:w-[100%] lg:w-[20%] flex flex-col justify-center items-center md:items-start">
        <StaggeredText />
      </div>

      <motion.div
        className="w-full lg:w-[70%] overflow-hidden"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-left">
          At the heart of Harmony Woods stands an expansive 30,000 sq. ft.
          clubhouse crafted as the social and recreational hub of the community.
          Designed as a refined retreat for wellness, leisure and gatherings, it
          includes spaces for fitness, indoor and outdoor activities,
          celebrations and moments of calm. The clubhouse elevates daily living
          with its blend of function, comfort and understated luxury, offering
          residents a well-rounded lifestyle within their own neighbourhood.
        </p>
      </motion.div>
    </section>
  );
};

export default ExpansiveClubHouse;
