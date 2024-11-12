import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="bg-custom-green text-white min-h-screen flex flex-col items-center pt-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 mt-16 animate-slideFromTop">
        My <span className="text-[#F3F33B]">Education</span>
      </h1>
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-6 relative px-4 sm:px-0 mb-16 animate-slideInLeft">
        {/* Timeline container */}
        <div className="border-l-4 border-[#F3F33B]  relative">

          {/* Education Block - Right */}
          <div className="mb-8 md:mb-10 ml-6 sm:ml-10 flex flex-col md:flex-row-reverse items-start">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#F3F33B]  rounded-full animate-pulse mt-1 sm:mr-4"></div>
            <div className="mt-2 md:mt-0">
              <p className="text-[#F3F33B] font-semibold text-sm sm:text-lg">2010</p>
              <div className="bg-sky-800 p-3 sm:p-4 rounded-lg border-2 border-[#F3F33B] mt-2 hover:shadow-[0_4px_20px_rgba(128,0,128,0.6)] hover:shadow-[#F3F33B] ">
                <h3 className="font-semibold text-base sm:text-lg">O-Levels</h3>
                <p className="text-xs sm:text-sm">
                  Completed O-levels at Beacon Askari O-level School, specializing in science subjects.
                </p>
              </div>
            </div>
          </div>

          {/* Education Block - Left */}
          <div className="mb-8 md:mb-10 ml-6 sm:ml-10 flex flex-col md:flex-row items-start">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#F3F33B]  rounded-full animate-pulse mt-1 sm:mr-4"></div>
            <div className="mt-2 md:mt-0">
              <p className="text-[#F3F33B]  font-semibold text-sm sm:text-lg">2011 - 2012</p>
              <div className="bg-sky-800 p-3 sm:p-4 rounded-lg border-2 border-[#F3F33B]  mt-2 hover:shadow-[0_4px_20px_rgba(128,0,128,0.6)] hover:shadow-[#F3F33B] ">
                <h3 className="font-semibold text-base sm:text-lg">A-Level Part 1</h3>
                <p className="text-xs sm:text-sm">
                  Pursued A-level studies privately, focusing on advanced science subjects.
                </p>
              </div>
            </div>
          </div>

          {/* Education Block - Right */}
          <div className="mb-8 md:mb-10 ml-6 sm:ml-10 flex flex-col md:flex-row-reverse items-start">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#F3F33B] rounded-full animate-pulse mt-1 sm:mr-4"></div>
            <div className="mt-2 md:mt-0">
              <p className="text-[#F3F33B] font-semibold text-sm sm:text-lg">2022</p>
              <div className="bg-sky-800 p-3 sm:p-4 rounded-lg border-2 border-[#F3F33B]  mt-2 hover:shadow-[0_4px_20px_rgba(128,0,128,0.6)] hover:shadow-purple-500">
                <h3 className="font-semibold text-base sm:text-lg">Freelancer Course (Canva)</h3>
                <p className="text-xs sm:text-sm">
                  Completed Canva freelancing course at Social Media Incubator by Rehan Allahwala.
                </p>
              </div>
            </div>
          </div>

          {/* Education Block - Left */}
          <div className="mb-8 md:mb-10 ml-6 sm:ml-10 flex flex-col md:flex-row items-start">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#F3F33B] rounded-full animate-pulse mt-1 sm:mr-4"></div>
            <div className="mt-2 md:mt-0">
              <p className="text-[#F3F33B] font-semibold text-sm sm:text-lg">2023 - Present</p>
              <div className="bg-sky-800 p-3 sm:p-4 rounded-lg border-2 border-[#F3F33B]  mt-2 hover:shadow-[0_4px_20px_rgba(128,0,128,0.6)] hover:shadow-purple-500">
                <h3 className="font-semibold text-base sm:text-lg">Artificial Intelligence, Web 3.0, and Metaverse Program</h3>
                <p className="text-xs sm:text-sm">
                  Currently enrolled in the Governor Sindh Initiative for Generative AI, Web 3.0, and Metaverse, gaining cutting-edge skills in AI and blockchain technologies.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;
