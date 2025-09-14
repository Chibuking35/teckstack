import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

type EventOfTechprops = {
  imageSrc: string;
  headerEvent: string;
  description: string;
  dateOfEvent: string;
  readMore: string;
};

const EventOfTech = ({
  imageSrc,
  headerEvent,
  description,
  dateOfEvent,
  readMore,
}: EventOfTechprops) => {
  return (
    <div className="flex flex-col items-center bg-white rounded overflow-hidden">
      <div className="w-full h-30 relative">
        <Image src={imageSrc} alt={headerEvent} fill className="object-cover" />
      </div>
      <div className="z-20 px-5 py-1.5 ">
        <h1 className="text-lg font-bold my-2 ">{headerEvent}</h1>

        <p className="text-[11px] text-gray-400 text-justify">{description}</p>
      </div>

      <div className="flex flex-row justify-between w-full p-5 items-center py-2">
        <h1 className="text-blue-950 font-bold text-sm ">{dateOfEvent}</h1>
        <Link
          href={readMore}
          target="_blank"
          className="flex flex-row justify-start items-center cursor-pointer"
        >
          <h3 className="font-bold text-blue-950 flex text-sm">Read More</h3>

          <IoMdArrowDropright className="flex  text-blue-950" size={13} />
        </Link>
      </div>
    </div>
  );
};

export default EventOfTech;
