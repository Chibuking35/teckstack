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
      <div className="relative w-full h-[10rem] md:h-[15rem]">
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

      <div className="flex w-full  mt-20  bg-gray-300">
        <div
          className=" p-3 md:px-10 w-full h-fit py-5 md:py-30
    "
        >
          {" "}
          <div className="flex justify-center items-center flex-col px-2 "></div>
          <TextFadeIn>
            <IconGrid items={features} />
          </TextFadeIn>
        </div>
      </div>

      <div className="w-full min-h-[20rem] bg-white"></div>
    </div>
  );
};
export default Services;
