import BeginnerApplicationForm from "@/component/BeginnerApplication";
import Image from "next/image";
import z, { email } from "zod";


const schema = z.object({
  fullName: z.string().min(2, "full name is required"),
  email: z.string().email("invalid email address"),
  phone: z.string().min(1, "phone number is needed is required"),
  LearningArea: z.enum(
    ["beginner", "intermediate", "advanced"],
    "select learning stage(Beginner, Intermediate, Advanced)"
  ),
  countryFrom: z.string().min(3, "Country is required"),
});

const Beginner = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <h1 className=" text-blue-950 text-2xl md:text-3xl text-center my-5">
        Get into Tech
      </h1>

      <div className="w-full flex justify-center items-center">
      <p className="text-sm text-gray-500 self-center text-center my- px-5 md:px-10 max-w-2xl">
        Starting your journey in technology opens the door to exciting
        opportunities. At the beginner stage, you&#39;ll learn the basics of
        coding, design, and digital tools in a clear and practical way, giving
        you the confidence to grow and take your first steps into the tech
        world.
      </p></div>
      {/* line */}
      <div className="h-[1px] w-full bg-gray-200 my-5" />

      <div className="flex flex-col md:flex-row p-5 md:p-10 w-full">
        <div className="flex-1">
         <BeginnerApplicationForm/>
        </div>
        <div className="flex-1">
          <div className="relative flex w-full h-[30rem]">
            <Image src="/beginner.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beginner;
