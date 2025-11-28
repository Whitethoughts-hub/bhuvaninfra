import ContactForm from "./Form";
import { motion } from "framer-motion";

const Contact = () => {
  // Parent variant for stagger
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Child variant for slide-up animation
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
      {/* -------------------- NEW CONTACT HEADING SECTION -------------------- */}
      {/* -------------------- NEW CONTACT HEADING SECTION -------------------- */}
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

      {/* ------------------------- MAIN CONTACT SECTION ------------------------- */}
      <section className="w-full flex justify-center bg-white">
        <motion.div
          className="w-full max-w-[1300px] px-[20px] md:px-[40px] pt-[15px] md:pt-[100px] pb-[50px] md:pb-[100px] flex flex-col md:flex-row gap-[25px]"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* LEFT SIDE */}
          <div className="w-full md:w-[60%] flex flex-col justify-between gap-[15px]">
            {/* PHONE */}
            <motion.div variants={itemVariant}>
              <a href="tel:+91 40 2311 8484">
                <h3 className="gradient-text-color inline-block cursor-pointer">
                  +91 XXXX XXXX XX
                </h3>
              </a>
            </motion.div>

            {/* EMAIL */}
            <motion.div variants={itemVariant}>
              <a href="mailto:info@bhuvaninfra.in">
                <h4 className="text-[18px] gradient-text-color inline-block cursor-pointer">
                  info@bhuvaninfra.in
                </h4>
              </a>
            </motion.div>

            {/* MAP */}
            <motion.div
              variants={itemVariant}
              className="w-full flex justify-start" // align left
            >
              <div className="w-full md:w-4/5">
                <iframe
                  title="Sample Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742371.5603038683!2d77.22483318545089!3d17.410173055440918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e1!3m2!1sen!2sin!4v1764334734389!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            {/* ADDRESS */}
            <motion.p variants={itemVariant}>
              Vaishnavi's Cymbol, 1A, First Floor,
              <br className="hidden sm:block" />
              Opp: Nanakramguda Toll Gate,
              <br className="sm:block hidden" />
              Hyderabad, 500032.
            </motion.p>

            {/* CIN */}
            <motion.h3
              className="text-[16px] gradient-text-color"
              variants={itemVariant}
            >
              Lorem minima perspiciatis tenetur
            </motion.h3>
          </div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            className="w-full md:w-[50%] flex justify-end items-start md:items-end"
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
