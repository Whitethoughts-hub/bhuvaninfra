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
        leading-10
        w-fit
        mx-auto md:mx-0
      "
    >
      <motion.span
        variants={child}
        className="heading-text gradient-text-color col-start-1 row-start-1"
      >
        Grand E
      </motion.span>

      <motion.span
        variants={child}
        className="heading-text gradient-text-color col-start-2 row-start-1"
      >
        ntry
      </motion.span>

      <motion.span
        variants={child}
        className="heading-text col-start-2 row-start-2 "
      >
        And Exit
      </motion.span>
    </motion.div>
  );
};

const SplitTextSection = () => {
  return (
    <section
      className="
        overflow-hidden
        w-full flex flex-col md:flex-row 
        max-w-[1300px] mx-auto 
        px-[20px] md:px-[40px] py-[50px] md:pt-[100px]
        gap-[50px] md:gap-20
        justify-center md:justify-between
        items-center md:items-start
      "
    >
      {/* LEFT */}
      <div className="w-full md:w-[25%] lg:w-[20%] flex flex-col justify-center items-center md:items-start">
        <StaggeredText />
      </div>

      {/* RIGHT */}
      <motion.div
        className="w-full md:w-[70%] overflow-hidden"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-center md:text-left">
          A grand entry and exit zone that creates a strong first impression
          with its spacious avenues, refined landscaping and clean architectural
          presence. The arrival experience reflects the scale and quality of the
          community, offering smooth movement, clear visibility and a sense of
          exclusivity from the moment you enter.
        </p>
      </motion.div>
    </section>
  );
};

export default SplitTextSection;
