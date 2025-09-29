import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const AppyForSkill = () => {
  return (
    <div className="min-h-screen w-full py-10">
      {" "}
      <h1 className=" text-blue-950 text-2xl md:text-3xl text-center mb-3">
        Apply Your Skills
      </h1>

{/* line */}
<div className="h-[1px] w-full bg-gray-100 my-4"/>


{/* flex component */}

      <div className="flex flex-col md:flex-row w-full py-5  md:py-10">

        {/* the first flex  */}
      <div className="bg-white rounded-2xl px-6  w-full flex-1 flex-col">
        <p className="text-sm text-gray-500 text-justify  md:mb-8 mb-5 first-letter:font-bold first-letter:text-2xl first-letter:mr-0.5 first-letter:float-left first-letter:leading-[0.8] ">
          Build Your Skills with hands-on projects, guided mentorship, and
          real-world challenges designed to strengthen your knowledge and
          confidence. Whether you&apos;re just starting out or advancing in your
          tech journey, this program provides the tools, resources, and support
          you need to grow and apply your expertise in meaningful ways.
        </p>

        <div className="relative h-[20rem]">

        <Image
          src="/step.jpg"
          className="opacity-80 rounded object-cover"
          alt=""
        fill
        /></div>
      </div>
      

      {/* second flex  */}
      <div className="flex-1 mt-5 md:mt-0  px-5 md:px-10">

        <h1 className="text-2xl text-blue-950 py-5  md:py-9  text-center">Choose Your Learning Stage</h1>

              <Link
              className="w-full bg-gray-300 mt-4  hover:bg-gray-400 text-gray-600 flex flex-row justify-between  hover:text-white px-3 md:px-5 py-2 md:mt-3 rounded"
              href="/learning/applyForSkill/beginner"
            >
              <h1>Beginner</h1> <BsBoxArrowInUpRight />{" "}
            </Link>
            <Link
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-600 flex flex-row justify-between  hover:text-white px-3 md:px-5 py-2 mt-3 rounded"
              href="/learning/applyForSkill/intermediate"
            >
              <h1>Intermediate</h1> <BsBoxArrowInUpRight />{" "}
            </Link>
            <Link
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-600 flex flex-row justify-between  hover:text-white px-3 md:px-5 py-2 mt-3 rounded"
              href="/learning/applyForSkill/advanced"
            >
              <h1>Advanced</h1> <BsBoxArrowInUpRight />{" "}
            </Link>

         
      </div>
      </div>
    </div>
  );
};
export default AppyForSkill;
