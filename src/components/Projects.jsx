import Heading from "./Heading";
import ResidentialVillas from "../assets/residential-villas.jpg";
import GrandEntryImage from "../assets/entryandexit.jpg";
import PremiusCloubhouse from "../assets/premiumclubhouse.jpg";
import About from "../assets/about.jpg";
import ResdentialVillas from "../components/Headings/ResdentialVillas";
import FarmHouses from "../components/Headings/FarmHouses";
import ConventionCenters from "../components/Headings/ConventionCenters";
import { motion } from "framer-motion";
import PlotImage from "../assets/Plot-image.png";
const Projects = () => {
  const listContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section className="flex flex-col justify-center items-center pt-[50px] md:pt-[100px]">
      <h2 className="text-center gradient-text-color w-full">
        Project Highlights
      </h2>

      <ResdentialVillas />
      <div className="max-w-[1300px] w-full overflow-hidden px-[20px] md:px-[40px]">
        <img
          src={ResidentialVillas}
          alt="Sample"
          className="w-full h-full object-cover"
        />
      </div>

      <FarmHouses />
      <div className="max-w-[1300px] w-full overflow-hidden px-[20px] md:px-[40px]">
        <img
          src={GrandEntryImage}
          alt="Sample"
          className="w-full h-full object-cover"
        />
      </div>
      <ConventionCenters />

      <div className="max-w-[1300px] w-full overflow-hidden px-[20px] md:px-[40px] pb-[50px] md:pb-[100px]">
        <img
          src={PremiusCloubhouse}
          alt="Sample"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex justify-center pb-[50px] md:pb-[100px] bg-image">
        <div
          className="w-full max-w-[1300px] px-[20px] md:px-[40px]
         flex flex-col md:flex-row justify-between gap-10"
        >
          {/* LEFT: Heading - NO CHANGE */}
          <div className="w-full md:w-[25%] flex flex-col justify-end leading-10 ">
            <h2 className="text-[40px]">
              <span className="block gradient-text-color text-center md:text-left lg:text-left">
                What Sets <br className="hidden md:block" /> Us Apart
              </span>
            </h2>
          </div>

          {/* CENTER: Image - only motion added */}
          <motion.div
            className="w-full md:w-[33%] flex justify-center items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img
              src={PlotImage}
              alt="What Sets Us Apart"
              className="w-full max-w-full object-cover rounded-3xl "
            />
          </motion.div>

          {/* RIGHT: Bullet Points - stagger animation only */}
          <div className="w-full md:w-[35%] flex items-center">
            <motion.ul
              className="space-y-2  text-[18px] font-weight-custom leading-relaxed list-disc pl-5"
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.li variants={listItem}>Decades-long Expertise</motion.li>
              <motion.li variants={listItem}>
                Strong Land Development Discipline
              </motion.li>
              <motion.li variants={listItem}>
                Practical, Future-Ready Layout Planning
              </motion.li>
              <motion.li variants={listItem}>
                Steady On-Ground Execution
              </motion.li>
              <motion.li variants={listItem}>
                Consistent Infrastructure Delivery
              </motion.li>
              <motion.li variants={listItem}>
                Long-Term Land Value Appreciation
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
