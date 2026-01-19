import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
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
     
        w-fit
        mx-auto md:mx-0
      "
    >
      <motion.span
        variants={child}
        className="heading-text gradient-text-color col-start-1 row-start-1"
      >
        Future
      </motion.span>

      <motion.span
        variants={child}
        className="heading-text gradient-text-color col-start-2 row-start-1"
      >
        -Ready
      </motion.span>

      <motion.span
        variants={child}
        className="heading-text col-start-2 ml-2 row-start-2"
      >
        Locale
      </motion.span>
    </motion.div>
  );
};

const PremiumVillaPlots = () => {
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
      <div className="w-full lg:w-[25%] lg:w-[20%] flex flex-col justify-center items-center md:items-start">
        <StaggeredText />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full lg:w-[70%] overflow-hidden flex flex-col justify-center items-center md:items-start"
      >
        <p className="text-left">
          Set in the serene expanse of Thummaloor, Harmony Woods enjoys a
          location that balances green surroundings with exceptional
          connectivity. Positioned near the Srisailam Highway and minutes from
          the ORR, it offers quick access to emerging hubs like Future City, AI
          City, major institutions and Hyderabad’s business districts. The
          address combines long-term growth potential with everyday convenience,
          making it a destination that appreciates while keeping residents close
          to the city’s most significant upcoming developments.
        </p>
      </motion.div>
    </section>
  );
};

export default PremiumVillaPlots;
