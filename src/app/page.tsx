import Slider from "@/component/Slider";
import WordCase from "@/component/WordCase";
import FlipCard from "@/component/FlipCard";
import TextFadeIn from "@/component/TextFadeIn";
import { Slides } from "@/lib/Slide";
import {
  AppWindow,
  Bot,
  ChartNoAxesCombined,
  CirclePoundSterling,
  Cloudy,
  Database,
  EthernetPort,
  Handshake,
  Lightbulb,
  Settings,
  Shield,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import CounterCard from "@/component/counterCard";
import IconGrid, { GridItem } from "@/component/IconGrid";
import RequestQuoteForm from "@/component/RequestQuote";
import TestimonialCarousel from "@/component/TestimonialCarousel";
import TeamMembers from "@/component/TeamMembers";

const Home = () => {
  const features: GridItem[] = [
    {
      imageSrc: "/softwareS.jpg",
      header: "Software Development",
      description:
        "Custom software solutions that streamline processes, boost efficiency, and bring your ideas to life.",
      icons: <AppWindow className="flex" />,
      url: "/software-development"
    },
    {
      imageSrc: "/cyberS.jpg",
      header: "Cybersecurity Solutions",
      description:
        "Advanced cybersecurity solutions that safeguard your data, protect your systems, and keep your business safe.",
      icons: <ShieldCheck />,
    url: "/cybersecurity"
    },
    {
      imageSrc: "/networkS.jpg",
      header: "Networking",
      description:
        "Reliable networking solutions that keep your business connected, fast, and secure",
      icons: <EthernetPort />,
      url: "/networking-services"
    },
    {
      imageSrc: "/dataS.jpg",
      header: "Data Analytics",
      description:
        "Data analytics solutions that turn raw information into actionable insights for smarter decisions.",
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
        "Machine learning solutions that unlock patterns, automate processes, and drive smarter business outcomes.",
      icons: <Bot />,
      url: "/machine-learning",
    },
    {
      imageSrc: "/digitalS.jpg",
      header: "Digital Marketing",
      description:
        "Digital learning solutions that make knowledge accessible, engaging, and tailored to your growth.",
      icons: <CirclePoundSterling />,
      url: "/digital-marketing",
    },
    {
      imageSrc: "/database.jpg",
      header: "Database Management",
      description:
        "Database management solutions that organize, secure, and optimize your data for reliable access and performance.",
      icons: <Database />,
      url: "/database-management"
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900  flex flex-col items-center md:py-8">
      <div className="w-full md:px-5">
        <Slider slides={Slides} />
      </div>

      <div className="px-4 flex justify-center mt-15">
        <div className="flex flex-col justify-center items-center md:text-left w-full">
          {/* Welcome Section */}
          <div className="flex flex-row items-center space-x-2 md:space-x-4">
            <TextFadeIn className="text-4xl md:text-3xl font-light py-3">
              Go
            </TextFadeIn>
            <TextFadeIn className="text-4xl md:text-4xl font-bold">
              Digital
            </TextFadeIn>
          </div>

          <TextFadeIn className="text-justify text-[12px] md:text-[14px] font-light w-full text-gray-700">
            <span className="font-bold text-[14px]">
              At Tech-Hike, we empower businesses to grow and adapt through
              innovative digital solutions.
            </span>{" "}
            Our services cover a wide range of needs from custom software
            development and robust cybersecurity to data analytics, cloud
            computing, and machine learning. We also provide expert digital
            marketing strategies and reliable IT support, ensuring your business
            stays secure, efficient, and ahead of the curve.
          </TextFadeIn>

          {/* Why Choose Tech-Hike */}
          <TextFadeIn className="text-justify text-[12px] md:text-[14px] font-light w-full">
            <div className="mx-2 w-full p-2">
              <h1 className="text-xl md:text-2xl text-center font-bold text-black mt-13 mb-2 md:mb-5">
                Why Choose Tech-Hike?
              </h1>
            </div>

            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="flex justify-center w-full">
                <FlipCard
                  flipOnHover={false}
                  front={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-[var(--maincolor)] text-white p-5">
                      <Lightbulb className="m-3" size={50} />
                      <h1 className="text-center text-lg font-light  ">
                        Innovative
                      </h1>
                    </div>
                  }
                  back={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300 p-5">
                      <div className="md:m-3">
                        <h1 className="text-center md:mt-3 font-bold text-lg md:text-sm mb-3 md:mb-0 text-gray-700">
                          Innovative
                        </h1>

                        <p className="text-justify md:text-[13px] font-light text-gray-700 md:mb-4">
                          We stay ahead of trends, delivering cutting-edge IT
                          and digital solutions that are strategically designed
                          and tailored to meet your unique business needs,
                          ensuring you stay competitive in today&apos;s
                          fast-paced digital landscape.
                        </p>
                      </div>
                    </div>
                  }
                />
              </div>

              {/* Card 2 */}
              <div className="flex justify-center w-full">
                <FlipCard
                  flipOnHover={false}
                  front={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-[var(--maincolor)] text-white">
                      <Shield className="m-3" size={50} />
                      <h1 className="text-center text-lg font-light">
                        Enterprise Grade Security
                      </h1>
                    </div>
                  }
                  back={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300 p-5">
                      <div className="md:m-3">
                        <h1 className="text-center md:mt-3 font-bold text-lg md:text-sm mb-3 md:mb-0 text-gray-700">
                          Enterprise Grade Security
                        </h1>
                        <p className="text-justify md:text-[13px] mt-2 font-light text-gray-700 md:mb-4">
                          Your data and infrastructure are safeguarded by
                          advanced cybersecurity protocols, real-time threat
                          detection, and 24/7 monitoring to ensure maximum
                          protection and peace of mind.
                        </p>
                      </div>
                    </div>
                  }
                />
              </div>

              {/* Card 3 */}
              <div className="flex justify-center w-full">
                <FlipCard
                  flipOnHover={false}
                  front={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-[var(--maincolor)] text-white">
                      <Settings size={50} className="m-3" />
                      <h1 className="text-center text-lg font-light">
                        Customized Solutions
                      </h1>
                    </div>
                  }
                  back={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300 p-5 md:p-7">
                      <div className="md:m-3">
                        <h2 className="text-center md:mt-3 font-bold text-lg md:text-sm mb-3 md:mb-0 text-gray-700">
                          Customized Solutions
                        </h2>
                        <p className="text-justify md:text-[13px] mt-2 font-light text-gray-700 md:mb-4">
                          We develop flexible and scalable systems that are
                          precisely tailored to your business objectives,
                          avoiding generic templates in favor of bespoke and
                          future-ready solutions.
                        </p>
                      </div>
                    </div>
                  }
                />
              </div>

              {/* Card 4 */}
              <div className="flex justify-center w-full">
                <FlipCard
                  flipOnHover={false}
                  front={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-[var(--maincolor)] text-white">
                      <Handshake size={50} className="mt-3" />
                      <h1 className="text-center text-lg font-light">
                        Expert Assistance & Guidance
                      </h1>
                    </div>
                  }
                  back={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300 p-5 md:p-7">
                      <div className="md:m-3">
                        <h2 className="text-center md:mt-3 font-bold text-lg md:text-sm mb-3 md:mb-0 text-gray-700">
                          Expert Assistance & Guidance
                        </h2>
                        <p className="text-justify md:text-[13px] mt-2 font-light text-gray-700 md:mb-4">
                          Our expert support team is always available to guide
                          you, troubleshoot issues, and ensure your operations
                          run smoothly and efficiently.
                        </p>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </TextFadeIn>
        </div>
      </div>
      <TextFadeIn className="w-full m-0 mt-10 md:mt-20">
        <div className="relative h-96 md:h-[30rem] w-full overflow-hidden my-2 flex items-center justify-start">
          <Image
            src="/photo.jpg"
            alt="background photo"
            fill
            className="object-cover z-0 md:rounded"
          />

          {/* Gradient overlay (left side dark fade) */}
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />

          {/* Text content – only within gradient area */}
          <div className="absolute z-20 p-6 text-white  max-w-xl w-[80%]">
            <h2 className="md:text-sm font-bold mb-3  pb-1 border-b-3 border-amber-300">
              Empowering Digital Progress
            </h2>
            <p className=" md:mt-2 text-xs md:text-sm">
              We help businesses grow by delivering tailored software solutions,
              managing them seamlessly, and securing digital assets with
              industry-grade protection. At Tech-hike, we combine innovation,
              reliability, and security to move your vision forward.
            </p>
          </div>

         
        </div>
      </TextFadeIn>

      <div>
 <WordCase/>

      </div>
      {/* counters*/}

      <div className="w-full px-4 py-10 bg-gray-200 h-fit justify-center items-center">
        <TextFadeIn className="  gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
          <CounterCard endNumber={700} label="projects Completed" />
          <CounterCard endNumber={250} label="Happy Clients" />
          <CounterCard endNumber={20} label="Award" />
          <CounterCard endNumber={13} label="Years of Experience" />
        </TextFadeIn>
      </div>

      {/* <div className="absoulte">
      <div className="oluaka">Oluaka</div>
    </div> */}

      <div
        className="bg-[var(--maincolor)] p-3 md:px-10 w-full h-fit py-30
    "
      >
        {" "}
        <div className="flex justify-center items-center flex-col px-2 ">
          <TextFadeIn>
            {" "}
            <h1 className="text-center flex text-xl mb-5  border-b-3 border-white text-white justify-center items-center ">
              Our Services
            </h1>
          </TextFadeIn>

          <TextFadeIn>
            <p className=" text-white font-thin tracking-wide text-justify  py-10 text-[12px]">
              We believe that innovation becomes stronger when driven by
              collaboration. That is why we are open to partnering with any tech
              company that shares our vision for growth, creativity, and
              excellence. Through these partnerships, we are able to combine
              expertise, explore new opportunities, and leverage a wider range
              of technologies. This collaborative approach not only strengthens
              the solutions we provide but also creates room for greater impact,
              allowing us to deliver more value to businesses and their
              customers while shaping the future of technology together
            </p>
          </TextFadeIn>
        </div>
        <TextFadeIn>
          <IconGrid items={features} />
        </TextFadeIn>
      </div>

      <div className="w-full py-20 md:py-20 bg-white h-fit justify-center items-center">

        <TextFadeIn>
          <div className="flex justify-center items-center px-3 md:mb-3 mb-2 mt-9">
          <h1 className="text-center text-2xl md:text-3xl font-bold mb-5 border-b-2 border-blue-950 text-blue-950">
            Request a Quote
          </h1></div>
        </TextFadeIn>

      <RequestQuoteForm />
      </div>

      <div className="py-25  w-full  bg-gray-200 px-10 md:px-20">
      <TestimonialCarousel/>
      </div> 
      
      {/* <TeamMembers/> */}
      

<TeamMembers/>

    </div>
  );
};

export default Home;
