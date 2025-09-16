import Image from "next/image";
import Link from "next/link";

const Learning = () => {
  return (
    <div className="bg-white w-full min-h-[100vh] ">
      <div className="relative w-full h-[10rem] md:h-[33rem]">
        <Image
          src="/Lphoto.jpg"
          alt="background"
          fill
          className="object-cover "
        />

        <Image
          src="/Lphoto.jpg"
          alt="background"
          fill
          className="object-cover "
        />
        <div className="z-20 bg-black/60  absolute inset-0" />

             <div className="absolute z-30 w-full h-full justify-center items-center md:hidden flex ">
          <h1 className="flex   text-2xl text-white font-bold">
            Learning
          </h1>
        </div>

        <div className="absolute z-30 hidden md:flex top-15 w-full justify-center items-center">
          <div className="md:w-[70%] w-[90%] flex justify-center items-center flex-col">
            <h1 className="text-base md:text-lg lg:text-2xl font-bold text-gray-400 text-center mb-3">
              Empower your future by gaining the skills that matter today
            </h1>
            <p className="text-xs text-gray-500 md:text-center  text-justify md:w-[90%] lg:w-[70%]">
              Empower your future by gaining the skills that matter today. In a
              fast-changing world, learning skills like coding, design, and
              digital tools gives you an edge and opens new opportunities. Every
              skill you master builds confidence and brings you closer to
              success.
            </p>

            <Link
              href="/applyForSkill"
              className="flex w-full justify-center items-center mt-10"
            >
              <button className="px-10 cursor-pointer py-1 md:py-2 rounded-md bg-red-700 text-gr text-gray-300">
                {" "}
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute z-30  bottom-4 w-full  hidden md:flex justify-center items-center">
          <div className="bg-blue-950/70 w-[80%] px-7 py-10 flex flex-col md:flex-row">
            <div className="flex-1">
              <h1 className="text-center mb-2 text-gray-400 text-sm">
                Do you have a skill?
              </h1>
              <p className="text-xs text-gray-500 px-4 text-justify">
                Do you want to learn a tech skill? Coding and digital skills
                open doors to new opportunities—start now and shape your future.
              </p>
            </div>
            <div className="h-fill mx-1 bg-gray-600 w-[2px]" />
            <div className="flex-1">
              <h1 className="text-center mb-2 text-gray-400 text-sm">
                Ready to learn a skill?
              </h1>
              <p className="text-xs text-gray-500 px-4 text-justify">
                Ready to learn a skill? Gain confidence, unlock opportunities,
                and take the first step toward your future today.
              </p>
            </div>
            <div className="h-fill mx-1 bg-gray-600 w-[2px]" />
            <div className="flex-1">
              <h1 className="text-center mb-2 text-gray-400 text-sm">
                Want to master a skill?
              </h1>
              <p className="text-xs text-gray-500 px-4 text-justify">
                Want to master a skill? With dedication, you can build
                confidence, unlock opportunities, and shape your future.
              </p>
            </div>
          </div>
        </div>
      </div>






      <div className="p-5 py-10 mt-4 block md:hidden">
            <div className="w-full flex justify-center items-center flex-col">
            <h1 className=" font-bold text-sm text-gray-500 text-center mb-3">
              Empower your future by gaining the skills that matter today
            </h1>
            <p className="text-xs text-gray-500 md:text-center  text-justify md:w-[90%] lg:w-[70%]">
              Empower your future by gaining the skills that matter today. In a
              fast-changing world, learning skills like coding, design, and
              digital tools gives you an edge and opens new opportunities. Every
              skill you master builds confidence and brings you closer to
              success.
            </p>

            <Link
              href="/applyForSkill"
              className="flex w-full justify-center items-center mt-7"
            >
              <button className="px-10 text-sm cursor-pointer py-2 md:py-2 rounded-md bg-blue-950 text-gr text-gray-300">
                {" "}
                Apply Now
              </button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Learning;
