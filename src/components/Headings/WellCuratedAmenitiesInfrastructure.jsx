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
        Well-Cur
      </motion.span>

      <motion.span
        variants={child}
        className="heading-text gradient-text-color col-start-2 row-start-1"
      >
        ated Amenities
      </motion.span>

      <motion.span
        variants={child}
        className="heading-text col-start-2 row-start-2 "
      >
        & Infrastructure
      </motion.span>
    </motion.div>
  );
};

const WellCuratedAmenitiesInfrastructure = () => {
  return (
    <section
      className="
        overflow-hidden
        w-full flex flex-col lg:flex-row 
        max-w-[1300px] mx-auto 
        px-[20px] md:px-[40px] py-[50px] md:pt-[100px]
        gap-[30px] lg:gap-20
        justify-center md:justify-between
        items-center md:items-start
      "
    >
      <div className="w-full lg:w-[25%] lg:w-[20%] flex flex-col justify-center items-center md:items-start">
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
          The project is built on a foundation of strong infrastructure, with
          grade-levelled CC roads, landscaped boulevards, underground utilities
          and tree-lined pathways that ensure smooth movement and a clean,
          clutter-free environment. Its themed gardens, open-air zones and
          nature-framed walkways create spaces for leisure, reflection and
          everyday living, while curated activity areas support all ages and
          routines. Harmony Woods brings together landscape, planning, and
          well-curated amenities to offer a complete lifestyle experience within
          a self-sustained community.
        </p>
      </motion.div>
    </section>
  );
};

export default WellCuratedAmenitiesInfrastructure;
