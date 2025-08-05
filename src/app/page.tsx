import Slider from "@/component/Slider";
import FlipCard from "@/component/FlipCard";
import TextFadeIn from "@/component/TextFadeIn";
import { Slides } from "@/lib/Slide";
import { Handshake, Lightbulb, Settings, Shield } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 md:px-8 flex flex-col items-center md:mt-6">
      <Slider slides={Slides} />
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
                      <h1 className="text-center text-lg font-light">
                        Innovative
                      </h1>
                    </div>
                  }
                  back={
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300 p-5">
                      <h2 className="font-bold text-lg mb-3 text-gray-700">
                        Innovative
                      </h2>
                      <p className="text-justify font-light text-gray-700">
                        We stay ahead of trends, delivering cutting-edge IT and
                        digital solutions that are strategically designed and
                        tailored to meet your unique business needs, ensuring
                        you stay competitive in today’s fast-paced digital
                        landscape.
                      </p>
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
                      <h1 className="font-bold text-lg mb-3 text-gray-700 md:text-[20px]">
                        Enterprise Grade Security
                      </h1>
                      <p className="text-justify font-light text-gray-700">
                        Your data and infrastructure are safeguarded by advanced
                        cybersecurity protocols, real-time threat detection, and
                        24/7 monitoring to ensure maximum protection and peace
                        of mind.
                      </p>
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
                      <h2 className="font-bold text-lg mb-3 text-gray-700">
                        Customized Solutions
                      </h2>
                      <p className="text-justify font-light text-gray-700">
                        We develop flexible and scalable systems that are
                        precisely tailored to your business objectives, avoiding
                        generic templates in favor of bespoke and future-ready
                        solutions.
                      </p>
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
                      <h2 className="font-bold text-lg mb-3 text-gray-700">
                        Expert Assistance & Guidance
                      </h2>
                      <p className="text-justify font-light text-gray-700">
                        Our expert support team is always available to guide
                        you, troubleshoot issues, and ensure your operations run
                        smoothly and efficiently.
                      </p>
                    </div>
                  }
                />
              </div>
            </div>
          </TextFadeIn>
        </div>
      </div>
      <TextFadeIn className="w-full my-20 ">
      <div className="relative h-96 w-full overflow-hidden my-2 flex items-center justify-start">
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
    <h2 className="md:text-2xl font-bold mb-3 border-b-4 border-blue-500 inline-block pb-1">
      Empowering Digital Progress
    </h2>
    <p className=" md:mt-2 text-xs md:text-sm">
     We help businesses grow by delivering tailored software solutions, managing them seamlessly, and securing digital assets with industry-grade protection. At Tech-hike, we combine innovation, reliability, and security to move your vision forward.
    </p>
  </div>
</div>


      </TextFadeIn>
    </div>
  );
};

export default Home;
