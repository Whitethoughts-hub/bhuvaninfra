import ContactForm from "./Form";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="w-full flex justify-center bg-white">
        <motion.div
          className="w-full max-w-[1300px] px-[20px] md:px-[40px] pt-[50px] md:pt-[70px] flex flex-col items-start"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            className="leading-11 mb-[15px] gradient-text-color text-left"
            variants={itemVariant}
          >
            Contact Us
          </motion.h2>

          <motion.p
            className="w-full md:w-[60%] text-left mb-[15px]"
            variants={itemVariant}
          >
            Reach out to explore residential plots, farm plots or venture
            opportunities. <br className="md:block hidden" />
            Our team responds promptly and guides you through every step.
          </motion.p>

          <motion.p
            variants={itemVariant}
            className="text-left text-size-28 leading-8"
          >
            We value every enquiry and treat it with care.
          </motion.p>
        </motion.div>
      </section>

      <section className="w-full flex justify-center bg-white">
        <motion.div
          className="w-full max-w-[1300px] px-[20px] md:px-[40px] pt-[15px] md:pt-[100px] pb-[50px] md:pb-[100px] flex flex-col md:flex-row gap-[25px]"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full md:w-[60%] flex flex-col justify-between gap-[15px]">
            <motion.div variants={itemVariant}>
              <a href="tel:+91 40 2311 8484">
                {/* <h3 className="gradient-text-color inline-block cursor-pointer font-size-cus">
                  +91 XXXX XXXX XX
                </h3> */}
              </a>{" "}
              <br />
              <a href="mailto:info@bhuvaninfra.in">
                <h4 className="text-[18px] gradient-text-color inline-block cursor-pointer font-size-cus">
                  info@bhuvaninfra.com
                </h4>
              </a>
            </motion.div>

            <motion.div
              variants={itemVariant}
              className="w-full flex justify-start"
            >
              <div className="w-full md:w-4/5">
                <iframe
                  title="Sample Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0664712825924!2d78.35107527493525!3d17.408597383482274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95bcaaac55d5%3A0x327148d7169ea949!2sVaishnavi%20Cymbol!5e0!3m2!1sen!2sin!4v1766387122083!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            <div>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                className="text-[16px] gradient-text-color"
                variants={itemVariant}
                viewport={{ once: true }}
              >
                Address
              </motion.h3>

              <motion.p
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Vaishnavi's Cymbol, 1A, First Floor,
                <br className="hidden sm:block" />
                Opp: Nanakramguda Toll Gate,
                <br className="sm:block hidden" />
                Hyderabad, 500032.
              </motion.p>
            </div>
          </div>

          <motion.div
            className="w-full md:w-[50%] flex justify-end items-start md:items-end "
            variants={itemVariant}
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
