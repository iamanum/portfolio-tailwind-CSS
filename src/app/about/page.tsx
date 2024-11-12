import Image from 'next/image';
import AboutProfile from "@/assets/profile.jpeg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-green px-4 sm:px-8 md:px-16 pt-32 sm:pt-28"> 
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-6 flex items-center justify-center">
        <div className="absolute w-52 h-52 sm:w-64 sm:h-64 border-8 border-t-transparent bg-purple-500 rounded-full spin-slow "></div>
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border-2 border-[#F3F33B] flex items-center justify-center overflow-hidden"> 
          <Image
            src={AboutProfile}
            alt="Profile Picture"
            width={218}  
            height={218} 
            className="rounded-full object-cover" 
          />
        </div>
      </div>

      <h2 className="text-4xl font-bold text-white animate-slideInFromBottom">
        About <span className="text-[#F3F33B]">Me</span>
      </h2>
      <p className="text-2xl font-semibold text-white mt-2 animate-slideInFromBottom">Graphic Designer, Digital Marketer & Web Developer</p>

      <p className="text-center text-gray-300 mt-4 font-semibold sm:max-w-2xl lg:max-w-4xl mx-auto sm:mx-4 md:mx-8 w-full mb-24 animate-slideInFromBottom">
        Hello! I&apos;m Anum Munir, a passionate graphic designer, digital marketer, and web developer from Karachi, Pakistan. With a robust foundation in graphic design and video editing, I&apos;ve been fortunate to work locally and internationally, delivering high-quality creative work through platforms like Fiverr since 2022. Over the years, I&apos;ve expanded my expertise in digital marketing and freelancing, helping students kickstart their careers in this dynamic field.

        In addition to my work in graphic design, I&apos;m a certified expert in Google Ads, analytics, and AI-based technologies, bringing a unique combination of creativity and technical proficiency to every project. I&apos;ve trained and mentored students in freelancing, digital marketing, and graphic design, empowering them to succeed independently.

        Currently, I&apos;m advancing my skills in web development using Next.js and Tailwind CSS to build professional websites. My portfolio highlights interactive projects like my Number Guessing Game, Calculator Project, and Dynamic Resume Builder, showcasing my growth as a developer and commitment to delivering polished, user-centered designs.

        Beyond my professional work, I am engaged with the Governor Sindh Initiative for GenAI, Web3, and Metaverse, actively exploring the latest advancements in AI and Web 3.0. I&apos;m excited to continue learning, evolving, and bringing impactful projects to life in the world of digital solutions.
      </p>
    </div>
  );
};

export default About;
