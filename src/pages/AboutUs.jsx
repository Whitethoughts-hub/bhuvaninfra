import SampleImage from "../assets/about.jpg"; // replace with your image path
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="w-full flex flex-col items-center justify-center bg-[white]">
        <div className="max-w-[1300px] px-[20px] md:px-[40px] pt-[70px]  flex flex-col items-start">
          {/* Heading */}
          <h2 className="text-left pb-[10px] w-full md:w-[60%] gradient-text-color ">
            ABOUT US
          </h2>

          {/* Paragraph */}
          <p className="text-left w-full md:w-[60%]">
            At Ananta Realty, we adopt a practical approach to development that
            emphasises strong foundations, thoughtful layouts, and reliable
            craftsmanship. Our journey is rooted in the belief that quality real
            estate should serve people well for years, not just for fleeting
            moments. This philosophy shapes our planning of residential
            communities, farm retreats, and convention spaces. We take the time
            to carefully consider each decision, ensuring that every building
            possesses strength, purpose, and character over the long term.
          </p>
        </div>

        {/* Second Split Section */}
        <div className="max-w-[1300px] px-[20px] md:px-[40px]  py-[100px] w-full flex flex-col md:flex-row items-start gap-8">
          {/* Left Side Text */}
          <div className="w-full md:w-[60%] text-left">
            <h2 className="pb-[10px] gradient-text-color ">
              FOUNDER’S PROFILE
            </h2>
            <p>
              K. Anil Reddy began his journey in 2002 with a focus on dependable
              building practices and intricate planning. He has completed more
              than 26 projects and shaped over 10,00,000 sq. ft. of constructed
              area across the twin cities. His work has earned the trust of
              hundreds of residents, with 7,00,000 sq. ft. under construction
              and 5,00,000 sq. ft. in the pipeline. His approach remains simple:
              “build with sincerity, follow sound design principles and deliver
              real value to every person who chooses your work.”
            </p>
          </div>

          {/* Right Side Image with Fixed Size */}
          <div className="w-full md:w-[40%] flex justify-center md:justify-end">
            <img
              src={SampleImage}
              alt="About Us"
              className="w-[400px] h-[300px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
