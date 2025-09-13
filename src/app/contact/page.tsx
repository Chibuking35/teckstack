import GoogleMap from "@/component/Map";
import RequestQuoteFormForCantactPage from "@/component/RequestQuoteFormForCantactPage";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-white w-full min-h-[100vh]">
      <div className="w-full h-[10rem] relative justify-center items-center flex">
        <Image
          src="/contact.jpg"
          fill
          alt="cantack background picture"
          className="object-cover absolute z-10  object-[30%_60%]"
        />

        <div className="bg-black/70 z-20 absolute inset-0" />

        <h1 className="absolute z-30 text-white text-2xl ">Contact Us</h1>
      </div>
      <div className="mt-5 md:mt-8">
        <RequestQuoteFormForCantactPage />
      </div>
      <div className="py-10 pt-30 md:pt-5 px-3 md:px-10 bg-gray-100">
        <GoogleMap />
      </div>


      
    </div>
  );
};

export default Contact;
