import Slider from "@/component/Slider";
import TextFadeIn from "@/component/TextFadeIn";
import { Slides } from "@/lib/Slide";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 md:px-8 pt-4 pb-4 flex flex-col items-center">
      <Slider slides={Slides} />
      
      <div className="flex flex-col md:text-left w-full">
        <div className="flex flex-row items-center space-x-2 md:space-x-4">
          <TextFadeIn className="text-4xl md:text-3xl font-light py-3">
            Go
          </TextFadeIn>

          <TextFadeIn className="text-4xl md:text-4xl font-bold">
            Digital
          </TextFadeIn>
        </div>

        <TextFadeIn className="text-justify text-[12px] md:text-[14px] font-light w-[90%]">
          <span className="font-bold text-[14px]">
            At Tech-Hike, we empower businesses to grow and adapt through innovative digital solutions.
          </span>{" "}
          Our services cover a wide range of needs — from custom software development and robust cybersecurity
          to data analytics, cloud computing, and machine learning. We also provide expert digital marketing
          strategies and reliable IT support, ensuring your business stays secure, efficient, and ahead of the curve.
        </TextFadeIn>
      </div>
    </div>
  );
};

export default Home;
