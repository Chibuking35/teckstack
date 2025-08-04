import Slider from "@/component/Slider";
import FlipCard from "@/component/FlipCard";
import TextFadeIn from "@/component/TextFadeIn";
import { Slides } from "@/lib/Slide";
import { Handshake, Lightbulb, Settings, Shield } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900  md:px-8  flex flex-col items-center md:mt-6">
      <Slider slides={Slides} />
      <div className="px-4 flex justify-center item mt-15">
        <div className="flex flex-col justify-center items-center md:text-left w-full">
          {/* the welcome page*/}
          <div className="flex flex-row items-center space-x-2 md:space-x-4 ">
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

          {/* why choose tech-hike */}
          <TextFadeIn className="text-justify text-[12px] md:text-[14px] font-light w-full">
            <div className="mx-2 w-full p-2 ">
              <h1 className="text-xl md:text-2xl text-center  font-bold text-black mt-13 mb-2 md:mb-5">
                why Choose Tech-Hike?
              </h1>
            </div>

            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid -cols-3 lg:grid-cols-4">
              <div className="flex justify-center w-full">
                <FlipCard
                  flipOnHover={false}
                  front={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-[var(--maincolor)] text-white p-5">
                      <Lightbulb className="flex m-3 font-light" size={50} />
                      <h1 className="text-center flex text-lg font-light ">
                        Innovative
                      </h1>
                    </div>
                  }
                  back={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300  p-5 ">
                      <h2 className="font-bold text-lg mb-3 text-gray-700">
                        Innovative
                      </h2>
                      <h1 className="text-justify flex  font-light text-gray-700">
                        We stay ahead of trends, delivering cutting-edge IT and
                        digital solutions that are strategically designed and
                        tailored to meet your unique business needs, ensuring
                        you stay competitive in today's fast-paced digital
                        landscape.
                      </h1>
                    </div>
                  }
                />
              </div>

              <div className="flex justify-center w-full">
                <FlipCard
                  flipOnHover={false}
                  front={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-[var(--maincolor)] text-white">
                      <Shield className="flex m-3 " size={50} />
                      <h1 className="text-center flex text-lg font-light">
                        Enterprise Grade Security
                      </h1>
                    </div>
                  }
                  back={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300  p-5 ">
                      <h1 className="font-bold text-lg mb-3 text-gray-700 md:text-[20px]">
                        Enterprise Grade Security
                      </h1>
                      <h1 className="text-justify flex font-light text-gray-700">
                        Your data and infrastructure are safeguarded by advanced
                        cybersecurity protocols, real-time threat detection, and
                        24/7 monitoring to ensure maximum protection and peace
                        of mind.
                      </h1>
                    </div>
                  }
                />
              </div>

              <div className="flex justify-center w-full">
                <FlipCard
                  flipOnHover={false}
                  front={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-[var(--maincolor)] text-white ">
                      <Settings size={50} className="flex m-3" />
                      <h1 className="flex text-center text-lg font-light">
                        Customized Solutions
                      </h1>
                    </div>
                  }
                  back={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300  p-5 md:p-7">
                      <h2 className="font-bold text-lg mb-3 text-gray-700">
                        Customized Solutions
                      </h2>
                      <h1 className="text-justify flex font-light text-gray-700">
                        We develop flexible and scalable systems that are
                        precisely tailored to your business objectives, avoiding
                        generic templates in favor of bespoke and future-ready
                        solutions.
                      </h1>
                    </div>
                  }
                />
              </div>

              <div className="flex justify-center w-full">
                <FlipCard
                  flipOnHover={false}
                  front={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-[var(--maincolor)] text-white">
                      <Handshake size={50} className="mt-3 flex" />
                      <h1 className="flex text-center text-lg font-light">
                        Expert Assistance & Guidance
                      </h1>
                    </div>
                  }
                  back={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300 p-5 md:p-7">
                      <h2 className="font-bold text-lg mb-3 text-gray-700">
                        Expert Assistance & Guidance
                      </h2>
                      <h1 className="text-justify flex font-light text-gray-700">
                        Our expert support team is always available to guide
                        you, troubleshoot issues, and ensure your operations run
                        smoothly and efficiently.
                      </h1>
                    </div>
                  }
                />
              </div>
            </div>
          </TextFadeIn>
        </div>
      </div>
    </div>
  );
};

export default Home;
