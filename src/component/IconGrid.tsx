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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 gap-15 md:gap-6 ">
      {items.map((item, index) => (
        <GridCard key={index} {...item} />
      ))}
    </div>
  );
};

export default IconGrid