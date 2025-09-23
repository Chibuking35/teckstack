import CounterCard from "@/component/counterCard";
import LearningSlider from "@/component/LearningSlider";

import { LearningSlides } from "@/lib/learningSlider";
import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import {
  MdIndeterminateCheckBox,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

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
        <div className="z-20 bg-black/50  absolute inset-0" />

        <div className="absolute z-30 w-full h-full justify-center items-center md:hidden flex ">
          <h1 className="flex   text-2xl text-white font-bold">Learning</h1>
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
              <button className="px-10 cursor-pointer py-1 md:py-2 rounded-md bg-white hover:bg-gray-200 text-blue-950">
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
          <h1 className=" text-3xl font-light text-gray-500 text-center mb-3">
            Empower your future by gaining the skills that matter today
          </h1>
          <p className="text-xs text-gray-500 md:text-center  text-justify md:w-[90%] lg:w-[70%]">
            Empower your future by gaining the skills that matter today. In a
            fast-changing world, learning skills like coding, design, and
            digital tools gives you an edge and opens new opportunities. Every
            skill you master builds confidence and brings you closer to success.
          </p>

          <Link
            href="/applyForSkill"
            className="flex w-full justify-center items-center mt-7"
          >
            <button className="px-10 text-sm cursor-pointer py-2 md:py-2 rounded-md hover:bg-blue-800 bg-blue-950 text-gr text-gray-300">
              {" "}
              Apply Now
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-5 md:p-10  mt-4 md:mt-10">
        <div className="flex-1 ">
          <h1 className="text-start font-bold text-lg text-blue-950 mb-4 md:mb-0">
            Who We Are?
          </h1>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 text-justify md:text-left">
            We are a tech company dedicated to building innovative software
            solutions while also sharing our knowledge with those who want to
            learn. Beyond creating technology, we provide practical, hands-on
            training in areas like coding, design, and digital tools, helping
            learners gain real-world skills. With a focus on growth and
            innovation, we aim to empower both our clients and learners to
            achieve success and unlock their potential.
          </p>
        </div>
      </div>

      <div className="flex w-full p-5 gap-10 py-10 mt-4 flex-col lg:flex-row">
        <div className="flex-1">
          <div className="inset-0 rounded-2xl bg-blue-950 p-5 md:p-8">
            <MdIndeterminateCheckBox size={30} className="text-white" />

            <div className="mt-3 text-xs text-gray-500">
              <span className="text-sm   text-gray-300">
                {" "}
                At our core, we are a technology company that builds powerful
                software to solve real-world challenges.
              </span>{" "}
              Beyond development, we extend our knowledge through training
              programs designed for anyone looking to grow in tech. From coding
              to design and digital tools, we combine practical experience with
              learning opportunities,
              <span className="text-sm  text-gray-300">
                {" "}
                ensuring both our clients and learners are prepared for success
                in a fast-changing digital world.
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative w-full lg:h-full  h-60">
            <Image
              src="/enpower.jpg"
              fill
              alt="plan"
              className="object-cover rounded-2xl"
            />

            <div className="absolute z-20 w-full h-full justify-center items-center flex">
              <h1 className=" px-10 py-2 rounded-full bg-white/50 backdrop-blur-sm  text-sm text-blue-950">
                Empowering People
              </h1>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="p-5 md:p-8 w-full h-full bg-gray-200 rounded-2xl">
            <h1 className="text-5xl text-gray-500 ">100+</h1>
            <h5 className="text-gray-500 text-sm font-bold pt-2">
              Pro Software Engineer
            </h5>
            <p className="font-light text-xs text-gray-500 py-2">
              Our Pro Software Engineers train learners in coding, design, and
              digital tools with real-world experience.
            </p>

            <div className="flex-row  flex mt-4 ">
              <div className="flex-col flex text-gray-600 text-sm gap-2">
                {/* beginners div  */}
                <div className="flex flex-row  justify-between items-center gap-4">
                  <div className="flex-1">
                    <div>Beginners</div>
                  </div>
                  <div className="flex-1 ">
                    <div className="flex flex-row gap-0.5">
                      {" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                    </div>
                  </div>
                  <div className="flex-1">
                    {" "}
                    <h1 className="text-end font-bold">57</h1>
                  </div>
                </div>
                <div className="flex flex-row  justify-between items-center gap-4">
                  <div className="flex-1">
                    <div> Intermidiate</div>
                  </div>
                  <div className="flex-1 ">
                    <div className="flex flex-row gap-0.5">
                      {" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                    </div>
                  </div>
                  <div className="flex-1">
                    {" "}
                    <h1 className="text-end font-bold">40</h1>
                  </div>
                </div>
                <div className="flex flex-row  justify-between items-center gap-4">
                  <div className="flex-1">
                    <div>Advanced</div>
                  </div>
                  <div className="flex-1 ">
                    <div className="flex flex-row gap-0.5">
                      {" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                      <FaCircle size={10} className="text-blue-950" />{" "}
                    </div>
                  </div>
                  <div className="flex-1">
                    {" "}
                    <h1 className="text-end font-bold">20</h1>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* a few more fact about us */}
      <div className="py-5 md:py-10 px-3 md:px-10 mt-3 w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl text-blue-950 ">Facts about Us </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-5 py-5 md:py-10 mt-3">
          <CounterCard label="Hours of training" suffix="+" endNumber={12000} />
          <CounterCard label="Student's Attention" suffix="%" endNumber={88} />
          <CounterCard label="Active mentors" suffix="+" endNumber={300} />
        </div>
      </div>

      {/* line  */}
      <div className="h-[1px] w-full bg-gray-200 my-10 md:my-15" />

      {/* another detail  */}

      <div className="flex flex-col md:flex-row w-full py-5 md:mb-15 px-5 gap-15 md:gap-5 ">
        <div className="flex-1">
          <div className="flex-col flex  items-start">
            <Link href="/services" className="flex">
              <button className="ring-1 ring-blue-950 rounded-full py-1 px-4 text-blue-950 text-[11px] ">
                {" "}
                Services
              </button>
            </Link>

            <p className="text-[11px] py-5 text-gray-500 ">
              Explore our wide range of services beyond training. From custom
              software development and web design to innovative digital
              solutions, we provide reliable and practical technology that helps
              businesses and individuals grow. Our goal is to make technology
              simple, effective, and impactful for everyone.
            </p>

            <Link href="/services">
              <button className="ring-1 cursor-pointer bg-blue-950 rounded py-2 mt-5 px-4 text-white text-[11px] justify-center items-center flex flex-row gap-3">
                {" "}
                Explore More <MdOutlineKeyboardDoubleArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="h-[17rem] md:w-full  w-full  relative ">
            <Image
              src="/learning.jpg"
              fill
              alt=""
              className="object-cover rounded-2xl"
            />

            <div className="absolute z-20 w-full top-5 left-4 flex">
              <h1 className=" px-10 py-2 rounded-full bg-white/50 backdrop-blur-sm  text-sm text-blue-950">
                Training Programme
              </h1>
            </div>
            <div className="absolute z-20 w-full bottom-5 left-4 flex">
              <h1 className="   rounded px-5   text-sm text-blue-950 py-2 bg-white/50 backdrop-blur-sm">
                Programme designed for <br /> all ages and abilities
              </h1>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <LearningSlider LearningSlides={LearningSlides} />
        </div>
      </div>

      <div className="py-5 md:py-20 px-3 md:px-5 flex w-full flex-col md:flex-row bg-gray-200">
        <div className="flex-1/4 md:px-10">
          {/* <div className="flex w-full flex-col gap-2 justify-center items-center   h-[10rem] px-6 py-12  rounded-2xl bg-blue-500  ">

    
             <h1 className="  rounded-full px-5   text-sm text-blue-950 py-1 bg-white/50 backdrop-blur-sm self-start">
              Get into tech
              </h1> 
              <div className="w-full flex flex-row justify-between my-2">
                <h1 className="text-white text-2xl">Pro membership</h1>
                <h1 className="text-white text-2xl">50$  <span className="text-xs">month </span></h1>
              </div>
              <div className="w-full flex flex-row justify-between">
                <h1 className="ring-1  md:px-2 px-1 py-1 ring-white rounded-full flex flex-row gap-3 items-center text-white text-[9px] md:text-sm"><GoDotFill />Personalized Guidance</h1>
                <h1 className="ring-1  md:px-2 px-1 py-1 ring-white rounded-full flex flex-row gap-1 md:gap-3 items-center text-white text-[9px] md:text-sm"><GoDotFill />Faster Growth</h1>
                <h1 className="ring-1  md:px-2 px-1 py-1 ring-white rounded-full flex flex-row gap-1 md:gap-3 items-center text-white text-[9px] md:text-sm"><GoDotFill />Accountability</h1>
                <h1 className="ring-1  md:px-2 px-1 py-1 ring-white rounded-full flex flex-row gap-1 md:gap-3 items-center text-white text-[9px] md:text-sm"><GoDotFill />Confidence Boost</h1>

              </div>
          
        </div> */}

          <div className="flex w-full flex-col py-10 md:py-0">
            <h1 className="text-2xl font-light mb-2">
              <span className="text-3xl font-bold">Get </span> into Tech
            </h1>
            <p className="text-[11px] text-gray-500 text-justify mb-6">
              Everyone has a place in tech, whether you are just beginning your
              journey, strengthening your skills at the intermediate level, or
              advancing to new professional heights. Our tutorship program is
              designed to provide personalized guidance, practical training, and
              continuous support to help you grow. With the right mentorship,
              you can build confidence, achieve your goals, and step boldly into
              the world of technology with the skills and knowledge needed to
              succeed.
            </p>

            <Link
              className="w-full bg-gray-300 mt-4  hover:bg-gray-400 text-gray-600 flex flex-row justify-between  hover:text-white px-3 md:px-5 py-2 md:mt-3 rounded"
              href="/Beginners"
            >
              <h1>Beginner</h1> <BsBoxArrowInUpRight />{" "}
            </Link>
            <Link
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-600 flex flex-row justify-between  hover:text-white px-3 md:px-5 py-2 mt-3 rounded"
              href="/Intermediate"
            >
              <h1>Intermediate</h1> <BsBoxArrowInUpRight />{" "}
            </Link>
            <Link
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-600 flex flex-row justify-between  hover:text-white px-3 md:px-5 py-2 mt-3 rounded"
              href="/Advanced"
            >
              <h1>Advanced</h1> <BsBoxArrowInUpRight />{" "}
            </Link>

            <Link
              href="/applyForSkill"
              className="flex w-full justify-center items-center mt-7"
            >
              <button className="px-10 text-sm cursor-pointer py-2 md:py-2 rounded-md hover:bg-blue-800 bg-blue-950 text-gr text-gray-300">
                {" "}
                Apply Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 p-5 md:p-7">
          <div className="bg-white rounded-2xl p-6 w-full flex flex-col">
            <h1 className="font-bold text-blue-950 text-2xl text-center mb-3">
              Don't Stop Growing
            </h1>
            <p className="text-[11px] text-gray-500 mb-4">
              Every step you take in tech brings you closer to new
              opportunities. No matter your current level, there is always more
              to learn, more to create, and more to achieve. Keep pushing
              forward, stay curious, and let our tutorship program guide you
              toward your next milestone.
            </p>

            <Image  src='/complb.jpg'
            className="opacity-80 rounded-2xl"
            alt=""
            width={500}
            height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
