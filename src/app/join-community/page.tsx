import EventOfTech from "@/component/Events";
import Gallery from "@/component/Gallery";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

const JoinCommunity = () => {
  const FeaturedEvents = [
    {
      imageSrc: "/event1.jpg",
      headerEvent: "AI & Innovation Summit",
      description:
        "A global conference on Artificial Intelligence, featuring keynotes, workshops, and networking opportunities for developers, researchers, and entrepreneurs.",
      dateOfEvent: "March 10, 2026",
      readMore: "https://www.aiinnovationsummit.in/?utm_source=chatgpt.com",
    },
    {
      imageSrc: "/event2.jpg",
      headerEvent: "Global Hackathon",
      description: "A 48-hour coding competition where developers and innovators come together in teams to design and build creative software solutions.",
      dateOfEvent: "July 18, 2026",
      readMore: "https://raise.mit.edu/events/global-ai-hackathon-2025/?utm_source=chatgpt.com",
    },
    {
      imageSrc: "/event3.jpg",
      headerEvent: "Tech Convergence 2.0",
      description: "A one-day event in Abuja bringing together Nigeria's tech leaders to discuss digital growth. Focused on the .ng domain, DNS, and local platforms ",
      dateOfEvent: "October 14, 2025",
      readMore: "https://nira.org.ng/techconvergence/?utm_source=chatgpt.com",
    },
    {
      imageSrc: "/event4.jpg",
      headerEvent: "Africa Technology Expo (ATE) 2025",
      description: "The Africa Technology Expo (ATE) is an enterprise-first event bringing together senior executives and innovators to showcase advancements in hardware.",
      dateOfEvent: "June 21, 2025",
      readMore: "https://www.africatechnologyexpo.com/?utm_source=chatgpt.com",
    },
  ];
  return (
    <div className="bg-white min-h-screen w-full ">
      <div className="relative w-full h-[30rem]">
        <Image
          src="/community.jpg"
          alt="community"
          fill
          className="absolute object-cover z-10 object-[4%-20%] md:object-[30%_20%]"
        />

        <div className="absolute z-20 left-8 lg:left-9 top-10 md:top-30 justify-center items-center md:w-60 lg:w-77 w-49">
          <h1 className=" text-base md:text-[20px]     lg:text-[27px] font-bold ">
            Join A Tech Community
          </h1>
          <p className="text-gray-600 md:text-[12px] lg:text-sm text-[11px] text-justify md:mt-4 mt-2">
            Join a tech community where innovation meets collaboration. By
            connecting with like-minded professionals, you gain access to
            knowledge, mentorship, and opportunities that accelerate growth. A
            strong community is more than networking, it is a space to share
            ideas, solve challenges, and shape the future of technology
            together.
          </p>
          <div className="w-full flex mt-3 ">
            <button className="to-blue-950 hover:bg-blue-900 px-5 py-2 bg-blue-950 text-white text-sm rounded">
              Join Now
            </button>
          </div>
        </div>
      </div>

      <div className="py-5 px-5  lg:px-10 md:py-10 w-full flex flex-col md:flex-row md:my-5 lg:my-10">
        <h1 className=" text-base lg:text-2xl font-bold text-blue-950 md:py-0 p-3">
          Unlock Opportunity to Connect Learn Grow and Shape the Future of
          Technology
        </h1>
        <p className="lg:w-[40%] md:w-[50%] text-sm pr-4 text-justify text-gray-500">
          Connecting with the right people opens doors to knowledge,
          collaboration, and growth. Our WhatsApp group brings together
          innovators, developers, and tech enthusiasts who share ideas, inspire
          progress, and build meaningful relationships. It is more than just a
          chat space, it is a community where learning never stops and
          opportunities to shape the future of technology are always within
          reach.
        </p>
        <Link
          href=""
          className="lg:w-[10%] flex justify-start items-start  py-5 md:py-0"
        >
          <button className="px-5 py-2 text-sm bg-blue-950 text-white cursor-pointer rounded md:rounded hover:bg-blue-900 ">
            Join On WhatsApp
          </button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row mb-20 md:mt-20">
        <div className="flex-1">
          <div className="relative w-full h-[20rem]">
            <Image
              src="/skill.jpg"
              fill
              alt=""
              className="absolute object-cover "
            />

            <div className="inset-0 bg-blue-900/50 absolute z-10" />

            <div className="absolute z-20 opacity-80 text-blue-950 flex flex-col md:p-5 p-10 lg:p-8 h-full justify-between ">
              <h1 className="lg:text-xl  md:text-lg font-bold ">
                A Space for Growth and Innovation
              </h1>
              <p className="text-[12px] mt-3  text-blue-950">
                This community is more than a gathering place, it is a hub where
                creativity meets opportunity. Innovators and tech enthusiasts
                come together to learn, share ideas, and collaborate. It is a
                supportive space that inspires growth, fresh perspectives, and
                bold steps toward the future of technology.
              </p>

              <Link
                href="/read-more"
                className="flex flex-row mt-5 justify-start items-center cursor-pointer"
              >
                <h3 className="font-bold  text-blue-950 flex  text-sm">
                  Read More
                </h3>{" "}
                <IoMdArrowDropright className="flex  text-blue-950" size={13} />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:flex-1 lg:flex-1/2 bg-gray-200">
          <div className="p-5 md:py-6 py-10 lg:py-10 my-auto">
            <h1 className="text-3xl text-blue-950 text-center">
              What Sets Us Apart?
            </h1>
            <p className="mt-10 lg:text-sm md:text-xs text-sm text-gray-500 px-4 text-justify">
              What makes this community unique is its focus on genuine
              connection, knowledge sharing, and collaboration. We are not just
              a network, we are a supportive environment where members can learn
              from one another, exchange valuable insights, and find
              opportunities that drive both personal and professional growth. By
              fostering innovation and encouraging meaningful interactions, we
              create a space where every voice matters and every idea has the
              potential to make an impact.
            </p>
          </div>
        </div>
      </div>

      <div className="p-2 bg-gray-100 md:p-10">
        <div className="my-10 ">
          <h1 className="font-bold text-2xl text-blue-950 ">
            What&#39;s happening?
          </h1>
          <p className="text-sm text-blue-950 opacity-50">
            Our featured events
          </p>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="flex-1">
            <div className=" flex flex-col items-center bg-white rounded overflow-hidden ">
              <div className="relative w-full h-90 ">
                <Image
                  src="/techevent.jpg"
                  fill
                  alt="event image"
                  className="absolute z-0 object-cover"
                />
              </div>

              <div className="mt  z-20  p-5">
                <h1 className="text-2xl font-bold my-4">Google I/O</h1>
                <p className="text-sm text-gray-400 text-justify">
                  It&#39;s Google&#39;s annual developer conference where they
                  showcase new technologies, launch products, and hold sessions
                  on topics like artificial intelligence, cloud computing,
                  Android development, and web technologies. Developers,
                  engineers, and tech enthusiasts from around the world join to
                  learn, network, and explore the latest innovations.
                </p>
              </div>

              <div className="flex flex-row justify-between w-full px-10 items-center py-5">
                <h1 className="text-blue-950 font-bold  text-sm">
                  May 20, 2026.
                </h1>
                <Link
                  href="https://io.google/2025/"
                  target="_blank"
                  className="flex flex-row  justify-start items-center cursor-pointer"
                >
                  <h3 className="font-bold  text-blue-950 flex  text-sm">
                    Read More
                  </h3>{" "}
                  <IoMdArrowDropright
                    className="flex  text-blue-950"
                    size={13}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <div
              className=" px-7 py-15 md:py-0 grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-5 ml-3
              "
            >
              {FeaturedEvents.map((event, index) => (
                <div className="shadow bg-white" key={index}>
                  <EventOfTech key={index} {...event} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



       <Gallery/>
    </div>
  );
};

export default JoinCommunity;
