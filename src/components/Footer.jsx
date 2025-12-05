import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex justify-center footer-background">
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
          © 2025 All rights reserved | Designed & Developed by{" "}
          <br className="hidden md:block" />
          <a href="https://whitethoughts.in" target="_blank">
            White Thoughts & Branding
          </a>
        </p>
        <div className="flex gap-4 text-[16px]">
          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/profile.php?id=61584428188508"
            aria-label="Facebook"
            target="_blank"
            className="
      w-7 h-7 flex items-center justify-center
       shadow text-white  rounded shadow-md  group transition-all duration-300
    "
          >
            <FaFacebookF className="transition-transform duration-300 hover:scale-125" />
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/bhuvan_infra/"
            aria-label="Instagram"
            target="_blank"
            className="
      w-7 h-7 flex items-center justify-center
      shadow text-white  rounded shadow-md  group transition-all duration-300
    "
          >
            <FaInstagram className="transition-transform duration-300 hover:scale-125" />
          </a>

          {/* LINKEDIN */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="
      w-7 h-7 flex items-center justify-center
      text-white rounded shadow-md  group transition-all duration-300
    "
          >
            <FaLinkedinIn className="transition-transform duration-300 hover:scale-125" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
