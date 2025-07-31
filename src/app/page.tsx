import Slider from "@/component/Slider";
import FlipCard from "@/component/FlipCard";
import TextFadeIn from "@/component/TextFadeIn";
import { Slides } from "@/lib/Slide";
import { div } from "framer-motion/client";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 md:px-8 py-5 flex flex-col items-center space-y-8">
      <Slider slides={Slides} />

      <div className="flex flex-col justify-center items-center md:text-left w-full">
        {/* the welcome page*/}
        <div className="flex flex-row items-center space-x-2 md:space-x-4">
          <TextFadeIn className="text-4xl md:text-3xl font-light py-3">
            Go
          </TextFadeIn>

          <TextFadeIn className="text-4xl md:text-4xl font-bold">
            Digital
          </TextFadeIn>
        </div>

        <TextFadeIn className="text-justify text-[12px] md:text-[14px] font-light w-full">
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

          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex justify-center w-full">
              <FlipCard
                flipOnHover={false}
                front={
                  <div className="w-full h-full flex flex-col justify-center items-center bg-[var(--maincolor)] text-white">
                    Front Side
                  </div>
                }
                back={
                  <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300 text-black">
                    Back Side
                  </div>
                }
              />
            </div>

            <div className="flex justify-center w-full">
              <FlipCard
                flipOnHover={false}
                front={
                  <div className="w-full h-full flex flex-col justify-center items-center bg-[var(--maincolor)] text-white">
                    Front Side
                  </div>
                }
                back={
                  <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300 text-black">
                    Back Side
                  </div>
                }
              />
            </div>

            <div className="flex justify-center w-full">
              <FlipCard
                flipOnHover={false}
                front={
                  <div className="w-full h-full flex flex-col justify-center items-center bg-[var(--maincolor)] text-white">
                    Front Side
                  </div>
                }
                back={
                  <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300 text-black">
                    Back Side
                  </div>
                }
              />
            </div>

            <div className="flex justify-center w-full">
              <FlipCard
                flipOnHover={false}
                front={
                  <div className="w-full h-full flex flex-col justify-center items-center bg-[var(--maincolor)] text-white">
                    Front Side
                  </div>
                }
                back={
                  <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300 text-black">
                    Back Side
                  </div>
                }
              />
            </div>
          </div>
        </TextFadeIn>
      </div>
    </div>
  );
};

export default Home;
