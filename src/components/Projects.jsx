import Heading from "./Heading";
import ResidentialVillas from "../assets/residential-villas.jpg";
import Farmhouse from "../assets/farmhouse.jpg";
import About from "../assets/about.jpg";
const Projects = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-center gradient-text-color w-full pb-[50px]">
        Our Projects
      </h2>
      <Heading
        firstWord="Resdential"
        secondWord="Villas"
        paragraph="Homes built with practical layouts, solid structures and detailing for everyday living."
      />

      <div className="max-w-[1300px] w-full overflow-hidden px-[20px] md:px-[40px] pb-[50px]">
        <img
          src={ResidentialVillas}
          alt="Sample"
          className="w-full h-full object-cover"
        />
      </div>
      <Heading
        firstWord="Farm"
        secondWord="Houses"
        paragraph={
          <>
            Green retreats planned for getaways,
            <br />
            comfort in nature and peaceful leisure outings.
          </>
        }
      />

      <div className="max-w-[1300px] w-full overflow-hidden px-[20px] md:px-[40px] pb-[50px]">
        <img
          src={Farmhouse}
          alt="Sample"
          className="w-full h-full object-cover"
        />
      </div>
      <Heading
        firstWord="Convention"
        secondWord="Centers"
        paragraph={
          <>
            Large-scale venues designed for gatherings,
            <br />
            smooth movement and structural balance.
          </>
        }
      />

      <div className="max-w-[1300px] w-full overflow-hidden px-[20px] md:px-[40px] pb-[100px]">
        <img
          src={Farmhouse}
          alt="Sample"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex justify-center pb-[100px] bg-image">
        <div
          className="w-full max-w-[1300px] px-[20px] md:px-[40px]
         flex flex-col md:flex-row justify-between gap-10"
        >
          {/* LEFT: Heading - 20% */}
          <div className="w-full md:w-[25%] flex flex-col justify-end leading-10 ">
            <h2 className="text-[40px]">
              <span className="block gradient-text-color">What Sets</span>
              <span className="block gradient-text-color">Us Apart</span>
            </h2>
          </div>

          {/* CENTER: Image - 40% */}
          <div className="w-full md:w-[33%] flex justify-center items-center">
            <img
              src={About}
              alt="What Sets Us Apart"
              className="w-full max-w-full object-cover rounded-3xl "
            />
          </div>

          {/* RIGHT: Bullet Points - 40% */}
          <div className="w-full md:w-[35%] flex items-center">
            <ul className="space-y-2  text-[18px] font-weight-custom leading-relaxed list-disc pl-5">
              <li>Decades-long Expertise</li>
              <li>Strong Construction Discipline</li>
              <li>Practical, Future-Ready Planning</li>
              <li>Steady Workmanship Standards</li>
              <li>Honest, Grounded Approach</li>
              <li>Consistent Site Execution</li>
              <li>Long-Term Asset Value</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
