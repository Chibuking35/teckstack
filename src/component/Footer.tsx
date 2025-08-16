import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-blue-950 p-3 pt-7 px-8 pb-2 w-full md:px-10">
      <div className="flex flex-col md:flex-row  gap-4 py-10 opacity-70">
        {/* first */}
        <div className="flex-1 justify-center items-center gap-3 flex-col">
          <div className="justify-center items-baseline flex gap-3">
            <div className="flex ">
              {" "}
              <Image src="/tecklogo.png" alt="logo" width={40} height={40} />
            </div>
            <h1 className="text-gray-400 text-thin text-center text-2xl">
              Tech Hick
            </h1>
          </div>

          <p className="text-gray-400 text-xs text-center flex mt-4 tracking-wider">
            At Tech-Hike, we help businesses thrive and adapt through innovative
            digital solutions. Our services range from custom software
            development and advanced cybersecurity to data analytics, cloud
            computing, and machine learning. We also deliver expert digital
            marketing strategies and dependable IT support, keeping your
            business secure, efficient, and ahead of the competition.
          </p>
          <div className="flex flex-row gap-4 justify-center items-center my-5">
               <Link href="https://web.facebook.com/?_rdc=1&_rdr#"> <FaFacebook
              className="text-gray-400
          "
              size={25}
            />{" "}</Link>
            <Link href="https://x.com/">
        <FaSquareXTwitter className="text-gray-400" size={25} />{" "}</Link>

            <Link href="https://www.instagram.com/accounts/login/?hl=en"><FaInstagram className="text-gray-400" size={25} />{" "}</Link>
            <Link href="https://web.telegram.org/a/"><FaTelegram className="text-gray-400" size={27} /></Link>
          </div>
        </div>
        {/* second */}
        <div className="flex-1 md:pl-5">
          <div className="flex flex-col items-start text-left text-gray-400 text-sm">
            <h1 className="text-xl my-4 ">Navigation</h1>
            <Link href="/" className="block">
              Home
            </Link>
            <Link href="/service">Service</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/career">Career</Link>
            <Link href="/join-community">Join Community</Link>
            <Link href="/learning">Learning</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        {/* third */}
        <div className="flex-1">
          <div className="flex flex-col items-start text-left text-gray-400 text-sm">
            <h1 className="text-xl my-4">Services</h1>

            <Link href="/software-development">Software Development</Link>
            <Link href="/cybersecurity-soulution">Cybersecurity Solution</Link>
            <Link href="/networking">Networking</Link>
            <Link href="/Data-analysis">Data Analysis</Link>
            <Link href="/Cloud-computing">Cloud Computing</Link>
            <Link href="/machine-learning">Machine Learning</Link>
            <Link href="/digital-marketing">Digital Marketing</Link>
          </div>
        </div>
        {/* fouth */}
        <div className="felx-1">
          <div className="flex flex-col items-start text-left text-gray-400">
            <h1 className="text-xl my-4">Contact us</h1>
            <p className="font-light text-sm">
              <span className="font-bold">Email: </span>techhike@gmail.com
            </p>
            <p className="font-light text-sm mt-2">
              <span className="font-bold">Phone: </span>
              <br /> +234-916-163-7046, <br /> +234-810-678-1068 <br />
              +234-811-406-4607.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-5">
        &copy; {new Date().getFullYear()} Tech-Hike. All rights reserved.{" "}
      </div>
    </div>
  );
};
export default Footer;
