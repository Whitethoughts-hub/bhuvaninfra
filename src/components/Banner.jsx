import { Link } from "react-router-dom";
import BannerImage from "../assets/Banner.jpg";

const Banner = () => {
  const text = "Enquire Now";
  return (
    <>
      <section
        className="w-full relative flex items-center"
        style={{
          height: "calc(100vh - 70px)", // full screen minus navbar
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for text */}
        <div className="w-full max-w-[1300px] px-[20px] md:px-[40px] mx-auto">
          <div className="flex flex-col justify-center h-full text-white items-center md:items-start text-center md:text-left md:w-1/2">
            <h2 className="leading-10">
              Strong Builds.
              <br />
              Steady Vision.
              <br />
              Lasting Value.
            </h2>
            <Link
              to="/contact-us"
              className="mt-[10px] inline-block gradient text-white px-6 py-2 transition duration-300 group relative overflow-hidden"
            >
              <span className="flex justify-center items-center text-[16px]">
                {"Enquire Now".split("").map((char, idx) => (
                  <span
                    key={idx}
                    className={`duration-700 [transition-delay:${
                      idx * 0.02
                    }s] md:group-hover:[transform:rotateY(360deg)]`}
                  >
                    {char === " " ? "\u00A0" : char}{" "}
                    {/* replace space with non-breaking space */}
                  </span>
                ))}
              </span>
            </Link>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center items-center py-[100px]">
        {/* Outer container with max width */}
        <div className="w-full max-w-[1300px] flex justify-center px-[20px] md:px-[40px]">
          {/* Inner content taking 70% width on md and larger */}
          <div className="w-full md:w-[70%] text-center">
            <h2 className="leading-11 mb-[25px] gradient-text-color">
              Welcome to Real Estate <br className="hidden md:block" /> Rooted
              in Responsibility
            </h2>
            <p>
              At Ananta Realty, we create spaces shaped by strong planning and
              dependable workmanship. Our projects focus on practical layouts,
              measured detailing and long-lasting build quality. We work with a
              steady approach that respects both the land and the people who
              will live or gather within our community.
            </p>

            <Link
              to="/about"
              className="group relative inline-flex items-center overflow-hidden px-6 py-2 gradient text-white font-medium transition-transform duration-300 hover:scale-105 mt-[25px]"
            >
              <span className="relative z-10 text-[16px]">Know More</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
