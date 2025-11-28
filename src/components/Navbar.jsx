import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-1500 h-[70px] bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="w-full max-w-[1300px] mx-auto h-full flex items-center justify-between px-[20px] md:px-[40px]">
          {/* LOGO */}
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img src={Logo} alt="logo" className="h-10" />
          </NavLink>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-6 text-black">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/about" },
              { name: "CONTACT US", path: "/contact-us" },
            ].map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="h-12 flex items-center justify-center px-3 hover:text-[#A31919] text-[18px]"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-6 h-8 gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
        {/* MOBILE MENU */}
        <div
          className={`md:hidden fixed top-[70px] left-0 w-full bg-white z-40 overflow-hidden text-black
    ${isOpen ? "animate-menuDrop shadow-xl" : "max-h-0 opacity-0"}
  `}
        >
          <div className="flex flex-col">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/about" },
              { name: "CONTACT US", path: "/contact-us" },
            ].map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`h-12 flex items-center justify-center border-b border-gray-200 text-[16px] font-mono
          ${isOpen ? "animate-textFade" : "opacity-0"}
        `}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* SPACE FOR FIXED NAV */}
      <div style={{ height: "70px" }} />
    </>
  );
};

export default Navbar;
