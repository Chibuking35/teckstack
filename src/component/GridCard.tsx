import Image from "next/image";

type GridCardprops = {
  imageSrc: string;
  header: string;
  description: string;
  icons?: React.ReactNode;
};

const GridCard = ({ imageSrc, header, description, icons }: GridCardprops) => {
  return (
    <div className="relative flex flex-col items-center bg-white rounded-lg overflow-hidden">
      <div className="w-full h-40 relative">
        <Image src={imageSrc} alt={header} fill className="object-cover" />
      </div>

      {/*Circle with Icon   */}
      <div className="absolute top-32 bg-white w-17 h-17 p-1 rounded-full flex items-center shadow-md border border-gray-200 justify-center">
        {icons }
      </div>
      {/*Header*/}
      <div className="mt-16 text-center">
        <h2 className="text-xl font-bold">{header}</h2>
      </div>
      {/*description*/}
      <div className="p-4 text-center">
        <p className="text-gray-600 md:text-sm">{description} </p>
      </div>
    </div>
  );
};

export default GridCard;
