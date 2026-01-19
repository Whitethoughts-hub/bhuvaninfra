import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Projects states
  const [projectsOpen, setProjectsOpen] = useState(false); // mobile
  const [open, setOpen] = useState(false); // desktop dropdown

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-1500 h-[70px] bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="w-full max-w-[1300px] mx-auto h-full flex items-center justify-between px-[20px] md:px-[40px]">
          <NavLink
            to="/"
            onClick={() => {
              setIsOpen(false);
              setProjectsOpen(false);
              setOpen(false);
            }}
          >
            <img src={Logo} alt="logo" className="h-10" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-black">
            <NavLink
              to="/"
              className="h-12 flex items-center justify-center px-3 hover:text-[#A31919] text-[18px]"
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              className="h-12 flex items-center justify-center px-3 hover:text-[#A31919] text-[18px]"
            >
              ABOUT US
            </NavLink>

            {/* PROJECTS Dropdown */}
            <div
              ref={dropdownRef}
              className="relative h-12 flex items-center justify-center px-3 cursor-pointer text-[18px] hover:text-[#A31919]"
              onMouseEnter={() => {
                if (window.innerWidth >= 1024) setOpen(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024) setOpen(false);
              }}
              onClick={() => {
                if (window.innerWidth < 1024 && window.innerWidth >= 768) {
                  setOpen((prev) => !prev);
                }
              }}
            >
              <div>PROJECTS</div>

              <div
                className={`absolute top-[50px] left-0 bg-white shadow-xl p-2 min-w-max transition-all duration-300 ${
                  open ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <a
                  href="https://wtbindia.in/staging/2025/harmonywoods/"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-2 text-[18px] text-black hover:text-[#A31919]"
                >
                  Harmony Woods
                </a>
              </div>
            </div>

            <NavLink
              to="/contact-us"
              className="h-12 flex items-center justify-center px-3 hover:text-[#A31919] text-[18px]"
            >
              CONTACT US
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
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

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden fixed top-[70px] left-0 w-full bg-white z-40 overflow-hidden text-black
            ${isOpen ? "animate-menuDrop shadow-xl" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col">
            <NavLink
              to="/"
              onClick={() => {
                setIsOpen(false);
                setProjectsOpen(false);
              }}
              className={`h-12 flex items-center justify-center border-b border-gray-200 text-[16px] font-mono
                ${isOpen ? "animate-textFade" : "opacity-0"}
              `}
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => {
                setIsOpen(false);
                setProjectsOpen(false);
              }}
              className={`h-12 flex items-center justify-center border-b border-gray-200 text-[16px] font-mono
                ${isOpen ? "animate-textFade" : "opacity-0"}
              `}
            >
              ABOUT US
            </NavLink>

            {/* PROJECTS Mobile Dropdown */}
            <button
              className={`h-12 flex items-center justify-center border-b border-gray-200 text-[16px] font-mono w-full
                ${isOpen ? "animate-textFade" : "opacity-0"}
              `}
              onClick={() => setProjectsOpen(!projectsOpen)}
            >
              PROJECTS
            </button>

            {projectsOpen && (
              <div className="flex flex-col border-b border-gray-200">
                <a
                  href="https://wtbindia.in/staging/2025/harmonywoods/"
                  target="_blank"
                  rel="noreferrer"
                  className="h-12 flex items-center justify-center text-[15px] font-mono hover:text-[#A31919]"
                  onClick={() => {
                    setProjectsOpen(false);
                    setIsOpen(false);
                  }}
                >
                 Harmony Woods
                </a>
              </div>
            )}

            <NavLink
              to="/contact-us"
              onClick={() => {
                setIsOpen(false);
                setProjectsOpen(false);
              }}
              className={`h-12 flex items-center justify-center border-b border-gray-200 text-[16px] font-mono
                ${isOpen ? "animate-textFade" : "opacity-0"}
              `}
            >
              CONTACT US
            </NavLink>
          </div>
        </div>
      </nav>

      <div style={{ height: "70px" }} />
    </>
  );
};

export default Navbar;
