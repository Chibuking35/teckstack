"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCircle,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const team = [
  {
    name: "Chibueze Nwigwe",
    role: "Software Developer",
    education: `I am a passionate software developer studying Software Engineering, 
    with experience building scalable web applications using modern frameworks. My academic
     journey has strengthened my problem-solving skills and foundation in algorithms, databases, and system design.
      I also work on personal and team projects applying AI, cloud computing, and full-stack development.`,
    bio: `I am a passionate software developer currently pursuing a degree in Software Engineering
      at Oluaka Institute of Technology. With a strong foundation in full-stack development
      and a growing interest in emerging technologies such as AI and cloud computing,
      I strive to create efficient, user-centered solutions. My focus is on continuous learning,
      problem-solving, and building impactful software products that address real-world challenges.`,
    skills: ["JavaScript", "React.js", "SQL", "Flutter", "React Native"],
    socials: {
      facebook: "https://web.facebook.com/?_rdc=1&_rdr#",
      twitter: "https://x.com/",
      instagram: "https://www.instagram.com/accounts/login/?hl=en",
    },
    profileImg: "/profilepics.png",
  },
  {
    name: "Gloria Daniel",
    role: "Data Analyst",
    education: `I am a dedicated data analyst with a strong background in statistics and data-driven decision making.
      I have gained hands-on experience in analyzing large datasets, building dashboards, and using tools such as SQL, Python, and Excel.
      My academic journey has strengthened my analytical thinking and problem-solving skills, and I have a solid foundation in data visualization, database management, and statistical modeling.`,
    bio: `As a data analyst, I specialize in turning raw data into actionable insights that drive strategic decisions.
      I am passionate about uncovering trends, patterns, and correlations from complex datasets.
      I focus on continuous learning, applying emerging analytical techniques, and creating impactful reports that help organizations optimize performance and achieve their goals.`,
    skills: [
      "SQL",
      "Python",
      "Excel",
      "Power BI",
      "Tableau",
      "Data Visualization",
      "Statistical Analysis",
    ],
    socials: {
      facebook: "https://web.facebook.com/?_rdc=1&_rdr#",
      twitter: "https://x.com/",
      instagram: "https://www.instagram.com/accounts/login/?hl=en",
    },
    profileImg: "/profilepics2.png",
  },
  {
    name: "Brian",
    role: "Cyber Security Specialist",
    education: `I am a cybersecurity enthusiast with a strong foundation in network security, ethical hacking, and risk assessment. I have experience protecting systems from cyber threats, performing vulnerability assessments, and implementing security protocols. My studies have strengthened my problem-solving skills and understanding of encryption, firewalls, and incident response.`,
    bio: `As a cybersecurity specialist, I focus on safeguarding digital assets and ensuring the integrity and confidentiality
      of information systems. I am passionate about identifying potential threats, mitigating risks, and implementing
      security best practices. My goal is to help organizations maintain secure systems while staying ahead of evolving
      cyber threats.`,
    skills: [
      "Network Security",
      "Ethical Hacking",
      "Penetration Testing",
      "Firewalls",
      "Encryption",
      "Incident Response",
    ],
    socials: {
      facebook: "https://web.facebook.com/?_rdc=1&_rdr#",
      twitter: "https://x.com/",
      instagram: "https://www.instagram.com/accounts/login/?hl=en",
    },
    profileImg: "/profilepics3.png",
  },
];

const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Profile swipe animation variant
const profileSwipeVariant = (direction: "left" | "right") => ({
  hidden: { opacity: 0, x: direction === "left" ? 300 : -300 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: direction === "left" ? -300 : 300 },
});

const TeamMembers = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right">(
    "left"
  );

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) {
      setSwipeDirection("left");
      setActiveMemberIndex((prev) => (prev + 1) % team.length);
    } else if (deltaX < -50) {
      setSwipeDirection("right");
      setActiveMemberIndex((prev) => (prev - 1 + team.length) % team.length);
    }
  };

  const handlePrev = () => {
    setSwipeDirection("right");
    setActiveMemberIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const handleNext = () => {
    setSwipeDirection("left");
    setActiveMemberIndex((prev) => (prev + 1) % team.length);
  };

  const member = team[activeMemberIndex];

  return (
    <div
      className="w-full mt-10 md:mt-20"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-[59rem] md:h-[500px] lg:h-[600px] overflow-visible flex items-center justify-center">
        <Image
          src="/techb.jpg"
          alt="background"
          fill
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 w-[93%] h-[80%] flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image src="/pics.jpg" alt="team" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="absolute inset-0 flex py-4 px-4 text-center z-30">
            {/* Left Tabs & Logo */}
            <div className="flex-1 flex flex-row gap-6 items-start">
              <div className="flex justify-end h-full">
                <div className="flex flex-col gap-6 justify-end h-full">
                  {["education", "bio", "skills"].map((tab) => (
                    <button
                      key={tab}
                      className={`${
                        activeTab === tab
                          ? "text-gray-600 border-l-2 border-amber-300"
                          : "text-gray-600"
                      } [writing-mode:vertical-lr]`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-1">
                <div className="flex items-baseline gap-2">
                  <Image
                    src="/tecklogo.png"
                    alt="logo"
                    width={40}
                    height={40}
                  />
                  <h1 className="text-gray-400 text-2xl font-thin text-center">
                    Tech Hick
                  </h1>
                </div>
                {/* Mobile info & tabs */}
                <div className="text-left block md:hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={member.name}
                      variants={fadeVariant}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                    >
                      <div className="h-[3px] bg-amber-300 w-[50%] mt-2 mb-2" />
                      <h1 className="text-2xl font-bold text-white">
                        {member.name}
                      </h1>
                      <p className="text-sm text-gray-400">{member.role}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="max-w-xl mt-2 w-[95%] block md:hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${member.name}-${activeTab}`}
                      variants={fadeVariant}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-justify">
                        {activeTab === "education" && (
                          <p className="mt-2 text-sm font-thin text-gray-300">
                            {member.education}
                          </p>
                        )}
                        {activeTab === "bio" && (
                          <p className="mt-2 text-xs font-thin text-gray-300">
                            {member.bio}
                          </p>
                        )}
                        {activeTab === "skills" && (
                          <div>
                            <p className="mt-2 text-sm font-thin text-gray-300">
                              I have developed strong technical and creative
                              skills through hands-on experience and academic
                              training. My expertise covers both frontend and
                              backend development, as well as design.
                            </p>
                            <ul className="flex flex-wrap mt-4 text-xs font-thin text-gray-300 gap-2">
                              {member.skills.map((skill) => (
                                <li
                                  key={skill}
                                  className="flex items-center gap-1"
                                >
                                  <FaCircle className="text-[6px] text-amber-300" />
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-4 justify-center items-center mt-4">
                        <Link href={member.socials.facebook}>
                          <FaFacebook className="text-amber-300" size={20} />
                        </Link>
                        <Link href={member.socials.twitter}>
                          <FaSquareXTwitter
                            className="text-amber-300"
                            size={20}
                          />
                        </Link>
                        <Link href={member.socials.instagram}>
                          <FaInstagram className="text-amber-300" size={20} />
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 md:flex hidden flex-col items-start p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={member.name}
                  variants={fadeVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-left">
                    <div className="h-[3px] bg-amber-300 w-[50%] mt-7 mb-4" />
                    <h1 className="text-2xl font-bold text-white">
                      {member.name}
                    </h1>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${member.name}-${activeTab}`}
                  variants={fadeVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="max-w-xl mt-10 rounded-xl shadow-lg text-justify"
                >
                  {activeTab === "education" && (
                    <p className="mt-2 text-xs font-thin text-gray-300">
                      {member.education}
                    </p>
                  )}
                  {activeTab === "bio" && (
                    <p className="mt-2 text-xs font-thin text-gray-300">
                      {member.bio}
                    </p>
                  )}
                  {activeTab === "skills" && (
                    <div>
                      <p className="mt-2 text-xs font-thin text-gray-300">
                        I have developed strong technical and creative skills
                        through hands-on experience and academic training. My
                        expertise covers both frontend and backend development,
                        as well as design.
                      </p>
                      <ul className="list-disc list-inside mt-2 text-xs font-thin text-gray-300">
                        {member.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )}
              
<div className="flex gap-4 justify-start items-center mt-4 md:mt-2 lg:mt-10">
             
                  <Link href={member.socials.facebook}>
                    <FaFacebook className="text-amber-300" size={20} />
                  </Link>
                  <Link href={member.socials.twitter}>
                    <FaSquareXTwitter className="text-amber-300" size={20} />
                  </Link>
                  <Link href={member.socials.instagram}>
                    <FaInstagram className="text-amber-300" size={20} />
                  </Link></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Profile Picture with swipe */}
          <AnimatePresence mode="wait">
            <motion.div
              key={member.profileImg}
              variants={profileSwipeVariant(swipeDirection)}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute -bottom-7 left-18 z-50 hidden lg:block"
            >
              <Image
                src={member.profileImg}
                alt="profile"
                width={350}
                height={350}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={member.profileImg}
              variants={profileSwipeVariant(swipeDirection)}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute -bottom-7 left-18 z-50 md:hidden block"
            >
              <Image
                src={member.profileImg}
                alt="profile"
                width={350}
                height={350}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={member.profileImg}
              variants={profileSwipeVariant(swipeDirection)}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute -bottom-5 left-13 z-50 hidden md:block lg:hidden"
            >
              <Image
                src={member.profileImg}
                alt="profile"
                width={270}
                height={270}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-150 md:top-80 -right-4 -translate-y-1/2 z-50 flex flex-col">
            <button
              className="p-2 bg-amber-400 shadow-lg hover:bg-amber-500"
              onClick={handlePrev}
            >
              <FaArrowLeft />
            </button>
            <button
              className="p-2 bg-amber-400 shadow-lg hover:bg-amber-500"
              onClick={handleNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
