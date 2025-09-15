import IconGrid, { GridItem } from "@/component/IconGrid";

import TextFadeIn from "@/component/TextFadeIn";
import {
  AppWindow,
  Bot,
  ChartNoAxesCombined,
  CirclePoundSterling,
  Cloudy,
  Database,
  EthernetPort,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

const Services = () => {
  const features: GridItem[] = [
    {
      imageSrc: "/softwareS.jpg",
      header: "Software Development",
      description:
        "Custom software solutions that streamline processes, boost efficiency, enhance productivity, and bring your ideas to life.",
      icons: <AppWindow className="flex" />,
      url: "/software-development",
    },
    {
      imageSrc: "/cyberS.jpg",
      header: "Cybersecurity Solutions",
      description:
        "Advanced cybersecurity solutions that safeguard your data, protect your systems, ensure compliance, and keep your business safe.",
      icons: <ShieldCheck />,
      url: "/cybersecurity",
    },
    {
      imageSrc: "/networkS.jpg",
      header: "Networking",
      description:
        "Reliable networking solutions that keep your business connected, fast, secure, resilient, and ready for future growth and innovation.",
      icons: <EthernetPort />,
      url: "/networking-services",
    },
    {
      imageSrc: "/dataS.jpg",
      header: "Data Analytics",
      description:
        "Data analytics solutions that turn raw information into actionable insights, improve performance, and drive smarter decisions.",
      icons: <ChartNoAxesCombined />,
      url: "/data-analytics",
    },
    {
      imageSrc: "/cloudS.jpg",
      header: "Cloud Computing",
      description:
        "Cloud computing solutions that enhance flexibility, improve scalability, and keep your business connected anywhere.",
      icons: <Cloudy />,
      url: "/cloud-computing",
    },
    {
      imageSrc: "/machineS.jpg",
      header: "Machine Learning",
      description:
        "Powerful machine learning solutions that unlock patterns, automate processes, and drive smarter business outcomes.",
      icons: <Bot />,
      url: "/machine-learning",
    },
    {
      imageSrc: "/digitalS.jpg",
      header: "Digital Marketing",
      description:
        "Digital learning solutions that make knowledge accessible, engaging, and personalized to support your growth and success.",
      icons: <CirclePoundSterling />,
      url: "/digital-marketing",
    },
    {
      imageSrc: "/database.jpg",
      header: "Database Management",
      description:
        "Database management solutions that organize, secure, and optimize your data for reliable access and performance.",
      icons: <Database />,
      url: "/database-management",
    },
  ];
  return (
    <div className="w-full min-h-[100vh]  bg-white">
      <div className="relative w-full h-[9rem] md:h-[10rem]">
        <Image
          src="/serviceb.jpg"
          alt=""
          fill
          className="object-cover z-0 object-[30%_30%]"
        />
        <div className="z-10 bg-black/70 inset-0 absolute" />

        <div className="absolute z-30 w-full h-full justify-center items-center flex">
          <h1 className="flex md:text-4 xl text-2xl text-white font-bold">
            Services
          </h1>
        </div>
      </div>
      {/* <div className=" p-4 text-center md:px-40 mt-9">
        <h1 className=" text-2xl md:text-4xl  text-blue-950 font-bold text-center">
          Transform your business now with{" "}
          <span className=" bg-gradient-to-r from-amber-500 to-pink-600 bg-clip-text text-transparent decoration-amber-400/60 decoration-2">
           
            innovative technology that drives growth
          </span>
        </h1>
      </div> */}
      <div className="flex w-full p-6 py-30 mt-20 md:p-10 flex-col md:flex-row ">
        <div className="flex-1 ">
          <div className="relative flex p-4 w-full h-[22rem] ">
            <Image
              src="/seviceq.jpg"
              alt=""
              fill
              className="object-cover rounded-2xl z-0 "
            />{" "}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-6 md:px-7 md:py-0 py-6">
            <h1 className=" text-2xl text-blue-950 font-bold">Our mission</h1>
            <p className="text-base text-justify text-gray-500 first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-1 first-letter:leading-[0.8]">
              Our mission is to enhance and transform businesses with
              technology. By leveraging innovative solutions, we empower
              organizations to achieve efficiency, scalability, and long-term
              growth. We believe in delivering value-driven results that make a
              lasting impact across industries.
            </p>
            <div className="flex justify-start">
              <button className="px-4 py-2 bg-blue-950 flex rounded  text-white text-sm">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </div>
      <TextFadeIn className="flex-col flex justify-center py-10 items-center bg-blue-950 mt-4 md:mt-20 md:py-12">
        <h1 className="flex text-2xl text-gray-200  font-bold">Services</h1>
        <p className="flex py-2 px-3 md:px-20 text-base text-center text-gray-400 font-light">
          {" "}
          Our team delivers trusted technology solutions designed to help
          businesses grow and stay secure. From software development to
          networking, IT support, and cybersecurity, we provide reliable
          services that make your operations more efficient and your systems
          more resilient. We focus on quality, innovation, and long-term results
          for every client.
        </p>
      </TextFadeIn>
      <div className="flex w-full py-15  m-0 bg-gray-300 flex-col">
        <TextFadeIn>
          <IconGrid items={features} />
        </TextFadeIn>
      </div>

      <div className="w-full  bg-white p-5  md:p-20">
        <div className="md:flex hidden flex-col md:flex-row gap-5 md:gap-10 w-full ">
          {/* the first box */}

          <div className="flex-1 relative w-full  md:h-[20rem md:h-[15rem]">
            <Image src="/plan.jpg" alt="" fill className="object-cover z-0" />

            <div className="absolute z-10 bottom-0 w-full h-[70%] bg-blue-950 opacity-80" />
            <div className="absolute z-20 bottom-0 w-full p-5 h-[70%]">
              <h1 className="font-bold   text-gray-400 mb-2 text-sm">
                Start A Good Plan
              </h1>
              <p className="text-gray-400 md:text-[8px] lg:text-xs mb-3">
                Every successful journey begins with a well-thought-out plan.
                Taking time to outline your goals, resources, and possible
                challenges helps you stay focused and organized. A good plan
                acts as a roadmap,
              </p>
              <Link
                href="/read-more"
                className="flex flex-rowv justify-start items-center cursor-pointer"
              >
                <h3 className="font-bold  text-gray-400 flex underline text-sm">
                  Read More
                </h3>{" "}
                <IoMdArrowDropright className="flex  text-gray-400" size={13} />
              </Link>
            </div>
          </div>

          {/* the second box */}

          <div className="flex-1 relative w-full  md:h-[20rem md:h-[15rem]">
            <Image src="/exp.jpg" alt="" fill className="object-cover z-0" />

            <div className="absolute z-10 bottom-0 w-full h-[20%] bg-blue-950 opacity-80" />

            <h1 className="font-bold text-sm   text-gray-400 mb-2 absolute z-40 bottom-0.5 left-10 ">
              Set Clear Goals
            </h1>
          </div>

          {/* the third box */}

          <div className="flex-1 relative w-full  md:h-[20rem md:h-[15rem]">
            <Image src="/disc.jpg" alt="" fill className="object-cover z-0" />

            <div className="absolute z-10 bottom-0 w-full h-[20%] bg-blue-950 opacity-80" />

            <h1 className="font-bold text-[12px] lg:text-sm left-10  absolute z-30 bottom-0.5  text-gray-400 mb-2 ">
              Connect with Experts
            </h1>
          </div>
        </div>
      </div>

      <div className="py-5 md:py-7  md:px-10 justify-center items-center">
        {/* the heading */}

        <div className="flex justify-center flex-col items-center p-4">
          <h1 className="font-bold  text-xl text-blue-950 ">Why Choose us?</h1>
          <p className="font-light text-sm md:w-120 mt-3 text-gray-500 text-center">
            Creativity is at the heart of everything we do. By combining fresh
            ideas with innovative technology, we design solutions that inspire,
            engage, and drive real business growth.
          </p>
        </div>
        {/* the body and image  */}

        <div className=" mt-20 flex w-[80%] mx-auto flex-col md:flex-row gap-10 md:gap-3">
          {/* Left text section */}

          {/* content */}
          <div className="flex-1 ">
            {/* number one  */}
            <div className="flex flex-row pr-4 mb-5">
              <h1 className="mr-4 font-bold text-2xl text-blue-950">01</h1>
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-lg font-bold text-blue-950">
                  Creative and Responsive Software
                </h3>
                <p className="text-gray-500 text-xs">
                  We build creative and responsive software solutions tailored
                  to your business needs, ensuring seamless performance,
                  scalability, and an engaging user experience.
                </p>
              </div>
            </div>
            {/* number two  */}
            <div className="flex flex-row pr-4 mb-5">
              <h1 className="mr-4 font-bold text-2xl text-blue-950">02</h1>
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-lg font-bold text-blue-950">
                  Advanced Security Solutions
                </h3>
                <p className="text-gray-500 text-xs ">
                  We embed cybersecurity into every stage of our process,
                  delivering enterprise-grade solutions that protect sensitive
                  data, defend against evolving threats, safeguard critical
                  operations, and ensure business continuity with confidence and
                  resilience.
                </p>
              </div>
            </div>
            {/* number three  */}
            <div className="flex flex-row pr-4 mb-5">
              <h1 className="mr-4 font-bold text-2xl text-blue-950">03</h1>
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-lg font-bold text-blue-950">Professional & Detailed</h3>
                <p className="text-gray-500 text-xs">
                  We deliver software development solutions that combine
                  creativity, innovation, and technical expertise to build
                  applications that enhance productivity, streamline operations,
                  and drive measurable business results.
                </p>
              </div>
            </div>
          </div>

          {/* Right images section */}
          <div className="flex-1">
            <div className="relative w-full h-[400px]">
              {/* Top image */}
              <Image
                src="/why.jpg"
                alt="Top"
                width={300}
                height={300}
                className="absolute left-0 z-30 rounded"
              />

              {/* Bottom image */}
              <Image
                src="/why2.jpg"
                alt="Bottom"
                width={400}
                height={400}
                className="absolute bottom-0 md:bottom-15 lg:bottom-7 left-10 right-0 z-20 opacity-20 rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-30 px-5 p-5 w-[80%] justify-center">
       <Link className="" href='/contact'> <button className="flex bg-blue-950 px-4 py-3 text-white text-sm cursor-pointer rounded ">Start a Project</button></Link>
      </div>
    </div>
  );
};
export default Services;
