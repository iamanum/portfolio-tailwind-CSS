"use client";

import React from 'react';
import TextEffect from './TextEffect';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import profile from "@/assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="bg-custom-green py-28 lg:py-44 flex flex-col lg:flex-row items-center">
      {/* Profile Image */}
      <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0 lg:order-2 animate-slideInLeft">
        <div className="relative rounded-full w-48 sm:w-60 md:w-72 lg:w-96 h-48 sm:h-60 md:h-72 lg:h-96 overflow-hidden shadow-[0_8px_48px_rgba(0,255,255,0.9)] shadow-[#F3F33B] animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-fuchsia-700 rounded-full" />
          <Image
            src={profile}
            alt="Anum Munir"
            className="absolute inset-0 w-full h-full rounded-full object-cover"
            width={208}
            height={208}
            quality={100}
          />
        </div>
      </div>

      {/* Left Side Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left px-6 lg:px-24 text-white animate-slideInFromBottom">
        <h2 className="text-xl lg:text-3xl font-bold">Hello, It&apos;s Me</h2>
        <h1 className="mt-3 font-bold text-3xl lg:text-5xl">Anum Munir</h1>
        <TextEffect />
        <p className="mt-3">
          <i>
          I am a dedicated graphic designer, digital marketer, and web developer with a strong focus on crafting user-centric, impactful designs and websites. Currently, I am also advancing my expertise as a student in the Governor Sindh Initiative for Generative AI, Web 3.0, and the Metaverse.
          </i>
        </p>

        {/* Social Links */}
        <div className="mt-8 flex justify-center lg:justify-start gap-6">
          <Link href="https://www.linkedin.com/in/anum-munir-52444624a/" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-800 hover:bg-purple-700 shadow-[0_4px_20px_rgba(0,255,255,0.6)] shadow-cyan-500 transition duration-900 ease-in-out transform hover:scale-105">
              <FaLinkedin className="w-6 h-6 text-white hover:text-[#F3F33B] transition" />
            </div>
          </Link>
          <Link href="https://github.com/iamanum" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 shadow-[0_4px_20px_rgba(0,255,255,0.6)] shadow-cyan-500 transition duration-900 ease-in-out transform hover:scale-105">
              <FaGithub className="w-6 h-6 text-white hover:text-[#F3F33B] transition" />
            </div>
          </Link>
          <Link href="https://www.instagram.com/iamanummunir/profilecard/?igsh=MWxmeWd5amE1YmU1Mg==" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-600 hover:bg-pink-500 shadow-[0_4px_20px_rgba(0,255,255,0.6)] shadow-cyan-500 transition duration-900 ease-in-out transform hover:scale-105">
              <FaInstagram className="w-6 h-6 text-white hover:text-[#F3F33B] transition" />
            </div>
          </Link>
          <Link href="email:iamanummunir@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 shadow-[0_4px_20px_rgba(0,255,255,0.6)] shadow-cyan-500 transition duration-900 ease-in-out transform hover:scale-105">
              <FaEnvelope className="w-6 h-6 text-white hover:text-[#F3F33B] transition" />
            </div>
          </Link>
        </div>

        {/* CV Download Button */}
        <Link href="/mycv.jpeg" target="_blank" rel="noopener noreferrer" download="AnumMunir_CV.jpeg">
  <button className="mt-12 px-3 py-1.5 lg:px-6 lg:py-3 bg-[#F3F33B] text-black font-bold rounded-full text-lg shadow-lg hover:bg-cyan-300 inline-flex items-center justify-center">
    DOWNLOAD CV <ArrowDownTrayIcon className="w-5 h-5 mt-1 ml-2" />
  </button>
</Link>
      </div>
    </section>
  );
};

export default Hero;
