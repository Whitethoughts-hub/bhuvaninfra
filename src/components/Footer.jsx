import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex justify-center gradient">
      <footer
        className="
          w-full max-w-[1300px] text-white 
          flex flex-col md:flex-row 
          items-center md:items-center justify-between 
          gap-4 md:gap-0
          text-center md:text-left
          px-[20px] md:px-[40px] py-[15px]
        "
      >
        <p className="text-sm md:text-base leading-tight">
          © 2025 All rights reserved | Privacy Policy <br />
          Designed & Developed by{" "}
          <a href="https://whitethoughts.in" target="_blank">
            White Thoughts & Branding
          </a>
        </p>

        <div className="flex gap-4 text-lg">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
