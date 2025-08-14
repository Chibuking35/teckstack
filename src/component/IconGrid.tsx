import GridCard from "./GridCard";


export type GridItem = {
  imageSrc: string;
  header: string;
  description: string;
  icons?: React.ReactNode;
};

type IconGridProps = {
  items: GridItem[];
};

const IconGrid = ({ items }: IconGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 gap-5 ">
      {items.map((item, index) => (
        <GridCard key={index} {...item} />
      ))}
    </div>
  );
};

export default IconGrid