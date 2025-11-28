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
              <a href="mailto:info@csrestates.com">
                <h4 className="text-[18px] gradient-text-color inline-block cursor-pointer">
                  info@bhuvaninfra.in
                </h4>
              </a>
            </motion.div>

            {/* MAP */}
            <motion.div variants={itemVariant}>
              <iframe
                title="Sample Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.188272612912!2d78.385201!3d17.44549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915fdb812229%3A0x54646b51e61ed53c!2sCSR%20Estate!5e0!3m2!1sen!2sin!4v1757667577672!5m2!1sen!2sin"
                className="border-0 w-full md:w-[80%] h-[200px] md:h-[150px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            {/* ADDRESS */}
            <motion.p variants={itemVariant}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br className="hidden sm:block" />
              Adipisci harum fugit in amet ab illum blanditiis suscipit numquam
              <br className="hidden sm:block" /> Autem dolorum quo doloremque,
              facilis, minus voluptas.
              <br className="sm:block hidden" />
              minima perspiciatis tenetur
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
