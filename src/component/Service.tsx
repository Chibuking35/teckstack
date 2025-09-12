import {
  AppWindow,
  Bot,
  ChartNoAxesCombined,
  CirclePoundSterling,
  Cloudy,
  Database,
  EthernetPort,
  ShieldCheck,
} from "lucide-react";

const Services = () => {
  return (
    <div className="bg-gray-100 w-full px-5 py-10 md:py-10 mt-5 md:mt-10 md:px-11 lg:px-20 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {/* software engineering  */}
        <div className="relative w-80 h-20 ">
          <div className="absolute shadow-xl h-14 w-70 right-0 flex justify-center items-center  my-auto z-10 rounded bg-gray-200 top-1/2 -translate-y-1/2">
            <h1 className="text-blue-950">Software Development</h1>
          </div>
          <div className="w-18 h-18 shadow-xl top-1/2 -translate-y-1/2 absolute z-20 bg-gray-200  ring-2 ring-blue-950 flex items-center justify-center rounded-full my-auto ">
            {" "}
            <AppWindow className=" text-blue-950" />
          </div>
        </div>
        {/* Cybersecurity Solutions */}
        <div className="relative w-80 h-20 ">
          <div className="absolute shadow-xl h-14 w-70 right-0 flex justify-center items-center  my-auto z-10 rounded bg-gray-200 top-1/2 -translate-y-1/2">
            <h1 className="text-blue-950">Cybersecurity Solutions</h1>
          </div>
          <div className="w-18 h-18 shadow-xl top-1/2 -translate-y-1/2 absolute z-20 bg-gray-200  ring-2 ring-blue-950 flex items-center justify-center rounded-full my-auto ">
            {" "}
            <ShieldCheck className=" text-blue-950" />
          </div>
        </div>

        {/* Networking  */}
        <div className="relative w-80 h-20 ">
          <div className="absolute shadow-xl h-14 w-70 right-0 flex justify-center items-center  my-auto z-10 rounded bg-gray-200 top-1/2 -translate-y-1/2">
            <h1 className="text-blue-950">Networking</h1>
          </div>
          <div className="w-18 h-18 shadow-xl top-1/2 -translate-y-1/2 absolute z-20 bg-gray-200  ring-2 ring-blue-950 flex items-center justify-center rounded-full my-auto ">
            {" "}
            <EthernetPort className=" text-blue-950" />
          </div>
        </div>
        {/* Data Analytics  */}
        <div className="relative w-80 h-20 ">
          <div className="absolute shadow-xl h-14 w-70 right-0 flex justify-center items-center  my-auto z-10 rounded bg-gray-200 top-1/2 -translate-y-1/2">
            <h1 className="text-blue-950">Data Analytics</h1>
          </div>
          <div className="w-18 h-18 shadow-xl top-1/2 -translate-y-1/2 absolute z-20 bg-gray-200  ring-2 ring-blue-950 flex items-center justify-center rounded-full my-auto ">
            {" "}
            <ChartNoAxesCombined className=" text-blue-950" />
          </div>
        </div>
        {/* Cloud Computing  */}
        <div className="relative w-80 h-20 ">
          <div className="absolute shadow-xl h-14 w-70 right-0 flex justify-center items-center  my-auto z-10 rounded bg-gray-200 top-1/2 -translate-y-1/2">
            <h1 className="text-blue-950">Cloud Computing</h1>
          </div>
          <div className="w-18 h-18 shadow-xl top-1/2 -translate-y-1/2 absolute z-20 bg-gray-200  ring-2 ring-blue-950 flex items-center justify-center rounded-full my-auto ">
            {" "}
            <Cloudy className=" text-blue-950" />
          </div>
        </div>
        {/* Machine Learning */}
        <div className="relative w-80 h-20 ">
          <div className="absolute shadow-xl h-14 w-70 right-0 flex justify-center items-center  my-auto z-10 rounded bg-gray-200 top-1/2 -translate-y-1/2">
            <h1 className="text-blue-950">Machine Learning</h1>
          </div>
          <div className="w-18 h-18 shadow-xl top-1/2 -translate-y-1/2 absolute z-20 bg-gray-200  ring-2 ring-blue-950 flex items-center justify-center rounded-full my-auto ">
            {" "}
            <Bot className=" text-blue-950" />
          </div>
        </div>
        {/* Database Management */}
        <div className="relative w-80 h-20 ">
          <div className="absolute shadow-xl h-14 w-70 right-0 flex justify-center items-center  my-auto z-10 rounded bg-gray-200 top-1/2 -translate-y-1/2">
            <h1 className="text-blue-950">Database Management</h1>
          </div>
          <div className="w-18 h-18 shadow-xl top-1/2 -translate-y-1/2 absolute z-20 bg-gray-200  ring-2 ring-blue-950 flex items-center justify-center rounded-full my-auto ">
            {" "}
            <Database className=" text-blue-950" />
          </div>
        </div>
        {/* Digital Marketing */}
        <div className="relative w-80 h-20 ">
          <div className="absolute shadow-xl h-14 w-70 right-0 flex justify-center items-center  my-auto z-10 rounded bg-gray-200 top-1/2 -translate-y-1/2">
            <h1 className="text-blue-950">Digital Marketing</h1>
          </div>
          <div className="w-18 h-18 shadow-xl top-1/2 -translate-y-1/2 absolute z-20 bg-gray-200  ring-2 ring-blue-950 flex items-center justify-center rounded-full my-auto ">
            {" "}
            <CirclePoundSterling className=" text-blue-950" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
