import GridCard from "./GridCard";


export type GridItem = {
  imageSrc: string;
  header: string;
  description: string;
  icons?: React.ReactNode;
  url: string;
};

type IconGridProps = {
  items: GridItem[];
};

const IconGrid = ({ items }: IconGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 gap-15 md:gap-10 ">
      {items.map((item, index) => (
        <div className="shadow-2xl bg-white" key={index}> 
        <GridCard key={index} {...item} /></div>
      ))}
    </div>
  );
};

export default IconGrid