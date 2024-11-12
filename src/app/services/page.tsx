import React from "react";
import {  FaMobileAlt, FaServer, FaShoppingCart, FaPenNib, FaBullhorn, FaLaptopCode } from "react-icons/fa";

const services = [

  {
    icon: <FaLaptopCode size={30} />,
    title: "Web Development",
    description:
      "Building high-performance, responsive websites that are tailored to your business needs. I specialize in creating clean, user-friendly web applications using modern technologies.",
  },
  {
    icon: <FaPenNib size={30} />,
    title: "Graphic Design",
    description:
      "Creating visually striking designs for brands, marketing materials, logos, and more. My designs are tailored to represent your vision and communicate your message effectively.",
  },
  {
    icon: <FaBullhorn size={30} />,
    title: "Digital Marketing",
    description:
      "Developing strategic digital marketing campaigns to increase brand visibility and drive customer engagement through SEO, social media marketing, and paid advertising.",
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "Frontend Development",
    description: "Developing user-friendly interfaces that adapt to any device.",
  },
  {
    icon: <FaServer size={30} />,
    title: "Backend Development",
    description: "Building reliable server-side solutions to support your applications.",
  },
  {
    icon: <FaShoppingCart size={30} />,
    title: "E-commerce Development",
    description: "Creating scalable solutions tailored for online shopping platforms.",
  },
  
  {
    icon: <FaPenNib size={30} />,
    title: "UI/UX Design",
    description: "Designing visually appealing and intuitive user interfaces.",
  },
];

const Services = () => {
    return (
      <div className="bg-custom-green pt-24 sm:pt-20 pb-12 px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 mt-8 sm:mb-12 animate-slideFromTop">
          My <span className="text-[#F3F33B]">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 mb-12 animate-slideInFromBottom">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-custom-green text-white p-6 sm:p-8 rounded-xl lg:rounded-xl shadow-lg flex flex-col items-start transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-[#F3F33B] mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Services;