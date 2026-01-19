import { motion } from "framer-motion";
import FounderProfile from "../assets/FounderProfile.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const AboutUs = () => {
  const leftFade = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightFade = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <section className="w-full flex flex-col items-center justify-center bg-[white]">
          <div className="max-w-[1300px] px-[20px] md:px-[40px] pt-[50px] md:pt-[70px] flex flex-col items-start">
            <motion.h2
              className="text-left pb-[10px] w-full md:w-[60%] gradient-text-color"
              variants={leftFade}
              initial="hidden"
              animate="visible"
            >
              About Us
            </motion.h2>

            <motion.p
              className="text-left w-full md:w-[60%]"
              variants={leftFade}
              initial="hidden"
              animate="visible"
            >
              At Bhuvan Infra, we follow a practical approach to land
              development that emphasises strong groundwork, meaningful layouts
              and reliable execution. Our journey is rooted in the belief that
              well-planned land should serve people for generations.This
              philosophy guides every plotted community we create, from
              residential ventures to farm plot retreats. We take the time to
              study the land, understand its natural strengths and plan layouts
              that offer both clarity and long-term value. Each project carries
              our commitment to purpose, stability and responsible development.
            </motion.p>
          </div>

          <div className="max-w-[1300px] px-[20px] md:px-[40px] py-[50px] md:py-[100px] w-full flex flex-col md:flex-row items-start gap-[30px]">
            <motion.div
              className="w-full md:w-[60%] text-left"
              variants={leftFade}
              initial="hidden"
              animate="visible"
            >
              <h2 className="pb-[10px] gradient-text-color">
                Founder’S Profile
              </h2>
              <p className="w-full">
                K. Anil Reddy began his journey in 2002 with a focus on
                dependable building practices and intricate planning. He has
                completed more than 26 projects and shaped over 10,00,000 sq.
                ft. of constructed area across the twin cities. His work has
                earned the trust of hundreds of residents, with 7,00,000 sq. ft.
                under construction and 5,00,000 sq. ft. in the pipeline. His
                approach remains simple: “build with sincerity, follow sound
                design principles and deliver real value to every person who
                chooses your work.”
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-[40%] flex justify-center md:justify-end"
              variants={rightFade}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={FounderProfile}
                alt="About Us"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </section>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full max-w-[1300px] px-[20px] md:px-[40px] pb-[50px] md:pb-[100px] flex flex-col">
            <motion.h2
              className="text-left gradient-text-color pb-[10px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              Our Philosophy
            </motion.h2>

            <div className="w-full flex pl-[20px] justify-between items-center flex-wrap gap-y-[15px] md:gap-y-[20px] md:pt-[50px]">
              <motion.li
                className="w-full md:w-[20%] text-[16px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Plan with purpose,  <br class='hidden md:block' />not haste",
                }}
              />

              <motion.li
                className="w-full md:w-[20%] text-[16px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Create layouts that  <br class='hidden md:block' />  stand the test of time",
                }}
              />

              <motion.li
                className="w-full md:w-[20%] text-[16px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Keep zoning practical <br class='hidden md:block' /> and people-focused",
                }}
              />
            </div>

            <div className="w-full flex pl-[20px] justify-between items-center flex-wrap gap-y-[15px] md:gap-y-[20px] pt-[15px] md:pt-[20px] md:pt-[30px]">
              <motion.li
                className="w-full md:w-[20%] text-[16px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Maintain steady quality <br class='hidden md:block' /> across all stages",
                }}
              />

              <motion.li
                className="w-full md:w-[20%] text-[16px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Hold transparency <br class='hidden md:block' /> as a core value",
                }}
              />

              <motion.li
                className="w-full md:w-[20%] text-[16px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Deliver ventures with<br class='hidden md:block' /> enduring worth",
                }}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
