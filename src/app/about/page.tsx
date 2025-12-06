'use client'


import Image from "next/image";
import { useState } from "react";

const About = () => {

    const [isOpen, setIsOpen]= useState(false)

  return (
    <div className=" bg-white w-full h-screen">
      <div className=" relative w-full h-[20rem] md:h-[30rem] ">
        <Image src="/about.jpg" 
        alt="" 
        fill className=" object-cover"/>
        <div className="bg-black/60 absolute z-10 inset-0" />
        <div className="bottom-20 md:bottom-0 md:inset-0 z-30 flex items-center justify-center absolute px-5 md:px-10"> 
            <div className="flex flex-col gap-1 md:gap-4 ">
            <h1 className="text-white text-2xl md:text-4xl font-bold">About Us</h1>
            <p className="text-gray-400 text-xs md:text-sm max-w-sm md:max-w-lg">tech-hick is a tech company dedicated in solving your day to day problem thet involve information comunication technology. from bulding an app, scaling the app and securing the app 
                tech-hick got you covered. 
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
