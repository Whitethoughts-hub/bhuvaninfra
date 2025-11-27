import ContactForm from "./Form";

const Contact = () => {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1300px] px-[20px] md:px-[40px] pt-[70px] pb-[100px] flex flex-col md:flex-row gap-[25px]">
        {/* LEFT SIDE */}
        <div className="w-full md:w-[60%] flex flex-col justify-between gap-[20px]">
          {/* PHONE */}
          <div>
            <a href="tel:+91 40 2311 8484">
              <h3 className=" gradient-text-color  inline-block cursor-pointer">
                +91 40 2311 8484
              </h3>
            </a>
          </div>

          {/* EMAIL */}
          <div>
            <a href="mailto:info@csrestates.com">
              <h4 className="text-[18px] gradient-text-color  inline-block cursor-pointer">
                info@csrestates.com
              </h4>
            </a>
          </div>

          {/* MAP */}
          <iframe
            title="Sample Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.188272612912!2d78.385201!3d17.44549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915fdb812229%3A0x54646b51e61ed53c!2sCSR%20Estate!5e0!3m2!1sen!2sin!4v1757667577672!5m2!1sen!2sin"
            className="border-0 w-full md:w-[80%] h-[200px] md:h-[150px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* ADDRESS */}
          <p>
            4th floor, CSR Estate, Plot No.8, Sector-1,{" "}
            <br className="hidden sm:block" />
            HUDA Techno Enclave, Madhapur, <br className="sm:block hidden" />
            Hyderabad - 500081
          </p>

          {/* CIN */}
          <h3 className="text-[16px] gradient-text-color ">
            CIN: U70102TG1996PLC022903
          </h3>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="w-full md:w-[40%] flex justify-end items-start md:items-end">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
