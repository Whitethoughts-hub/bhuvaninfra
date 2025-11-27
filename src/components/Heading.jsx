import React from "react";

// Staggered text component (left side)
const StaggeredText = ({ firstWord, secondWord }) => {
  return (
    <div className="inline-grid grid-rows-2 grid-cols-[max-content_1fr]">
      {/* First word */}
      <span className="row-start-1 col-start-1 heading-text gradient-text-color leading-none">
        {firstWord}
      </span>

      {/* Second word starts under the last letter of first word */}
      <span className="row-start-2 col-start-2 heading-text  leading-none">
        {secondWord}
      </span>
    </div>
  );
};

// Full SplitText section component
const SplitTextSection = ({ firstWord, secondWord, paragraph }) => {
  return (
    <section className="w-full flex flex-col md:flex-row max-w-[1300px] mx-auto px-5 md:px-10 py-10 gap-8 md:gap-20 justify-between">
      {/* Left side - staggered text */}
      <div className="w-full md:w-[25%] lg:w-[20%] flex flex-col justify-center">
        <StaggeredText firstWord={firstWord} secondWord={secondWord} />
      </div>

      {/* Right side - normal text */}
      <div className="w-full md:w-[30%] flex flex-col justify-center mt-5 md:mt-0">
        <p>{paragraph}</p>
      </div>
    </section>
  );
};

export default SplitTextSection;
