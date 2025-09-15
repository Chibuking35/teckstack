"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { z } from "zod";

// Zod schema
const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  position: z.string().min(2, "Position is required"),
  portfolio: z.string().url("Invalid URL").optional().or(z.literal("")),
  motivation: z.string().min(10, "Please provide at least 10 characters"),
  resume: z.instanceof(File, { message: "Resume file is required" }),
});

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "",
    portfolio: "",
    motivation: "",
    resume: null as File | null,
  });

  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form with Zod
    const validation = schema.safeParse(formData);

    if (!validation.success) {
      const newErrors: Record<string, string> = {};
      validation.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        newErrors[field] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    try {
      // Prepare FormData for API (since we’re sending a file)
      const body = new FormData();
      body.append("fullName", formData.fullName);
      body.append("email", formData.email);
      body.append("position", formData.position);
      if (formData.portfolio) body.append("portfolio", formData.portfolio);
      if (formData.motivation) body.append("motivation", formData.motivation);
      if (formData.resume) body.append("resume", formData.resume);

      // Send request to backend API
      const res = await fetch("/api/careerApi", {
        method: "POST",
        body,
      });

      const result = await res.json();

      if (!res.ok) {
        setPopupMessage(` Failed: ${result.error || "Something went wrong."}`);
        return;
      }

      // Show success popup
      setPopupMessage(
        ` Thank you ${formData.fullName}, your application for ${formData.position} has been submitted!`
      );

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        position: "",
        portfolio: "",
        motivation: "",
        resume: null,
      });
    } catch (err) {
      console.error("Submit error:", err);
      setPopupMessage(" Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Banner */}
      <div className="relative w-full h-[10rem] justify-center items-center flex">
        <Image
          src="/career.jpg"
          alt="career"
          fill
          className="object-cover object-[30%_10%] z-10 absolute"
        />
        <div className="inset-0 bg-black/70 z-20 absolute" />
        <div className="absolute z-30 text-2xl text-white font-bold">
          Career
        </div>
      </div>



      {/* Heading */}
      <div className="flex w-full p-5 justify-center items-center flex-col mt-7">
        <h1 className="text-3xl text-blue-950 mt-4">
          <span className="font-bold text-3xl text-blue-950">Join</span> Our
          Team
        </h1>
        <p className="text-sm text-center mt-2 max-w-lg text-gray-500">
          Be part of a team that values excellence, collaboration, and
          innovation. At Tech-Hike, we provide an environment where your skills
          are nurtured, your ideas are heard, and your contributions drive real
          impact. Together, we build solutions that inspire progress and create
          lasting value.
        </p>
      </div>


<div className="h-[1px] w-full bg-gray-200 mt-5 md:mt-15"/>
            <div className="flex w-full flex-col md:flex-row py-5 md:py-10 px-5 md:px-20 mt-5 md:mt-5">
        {/* Image Section */}
        <div className="flex-1 w-full relative h-[16rem] md:h-[20rem]">
          <div className="w-full relative h-[16rem] md:h-[20rem]">
            <Image
              src="/skill1.jpg"
              alt="join community"
              fill
              className="object-cover "
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 mt-10 md:mt-0 ">
          <div className="w-full flex justify-start items-center px-3 md:px-5 py-5 flex-col ">
            <h1 className="text-2xl font-bold text-blue-950 w-full mb-5">
              Do You Have a Skill?
            </h1>
            <p className="text-sm  font-light text-gray-500 text-justify  first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-1 first-letter:leading-[0.8]">
              Every skill has value, whether in design, development,
              communication, or leadership. At our organization, we believe that
              passion and creativity, combined with the drive to grow, are just
              as important as experience. We are building a team where diverse
              talents come together to achieve remarkable results. If you have a
              skill, we invite you to bring it. If you are still refining your
              expertise, we will provide the support and opportunities to help
              you excel.
              <span className="block mt-4">
                In the world of today, skills open doors and create
                opportunities for growth and impact. At our organization, we
                value talent, dedication, and innovation, and we provide the
                right environment for individuals to thrive. Together, we turn
                skills into results that make a lasting difference.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Flex Section */}
      <div className="flex flex-col md:flex-row mt-15 p-10">
        {/* Job Roles */}
        <div className="xl:flex-1/2 flex-1 md:mr-10 mb-10 md:mt-0">
          <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg">
            {/* UI/UX */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-400">UI/UX Designer</h1>
              <span className="text-sm text-green-600 font-semibold">
                Filled
              </span>
            </div>

            {/* Frontend */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-400">Frontend Developer</h1>
              <span className="text-sm text-green-600 font-semibold">Open</span>
            </div>

            {/* Backend */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-400">Backend Developer</h1>
              <span className="text-sm text-red-600 font-semibold">Closed</span>
            </div>

            {/* Mobile Developer */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-400">
                Mobile App Developer
              </h1>
              <span className="text-sm text-green-600 font-semibold">Open</span>
            </div>

            {/* DevOps Engineer */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-400">DevOps Engineer</h1>
              <span className="text-sm text-green-600 font-semibold">Open</span>
            </div>

            {/* Cloud Engineer */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-400">Cloud Engineer</h1>
              <span className="text-sm text-red-600 font-semibold">Closed</span>
            </div>

            {/* Data Scientist */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-400">Data Scientist</h1>
              <span className="text-sm text-green-600 font-semibold">Open</span>
            </div>

            {/* Cybersecurity Analyst */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-400">
                Cybersecurity Analyst
              </h1>
              <span className="text-sm text-red-600 font-semibold">Closed</span>
            </div>

            {/* QA Engineer */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-400">
                QA Engineer &#40;Tester&#41;
              </h1>
              <span className="text-sm text-green-600 font-semibold">Open</span>
            </div>

            {/* Product Manager */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-400">Product Manager</h1>
              <span className="text-sm text-green-600 font-semibold">
                Filled
              </span>
            </div>

            {/* Networking Engineer */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-400">Networking Engineer</h1>
              <span className="text-sm text-green-600 font-semibold">Open</span>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="flex-1 ">
          <div className="flex flex-col gap-0 bg-gray-100 px-3 py-8 rounded-md shadow-sm mb-9 md:mb-0">
            <div className="flex justify-center items-center py-7">
              <h1 className="text-blue-950 text-2xl">Join Our Team</h1>
            </div>

            <div className="flex justify-center items-center bg-gray-50">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg"
              >
                {/* Full Name */}
                <div className="mb-6 relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm focus:border-blue-500 focus:outline-none"
                  />
                  <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs">
                    Full Name
                  </label>
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-6 relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm focus:border-blue-500 focus:outline-none"
                  />
                  <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs">
                    Email Address
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Position */}
                <div className="mb-6 relative">
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm focus:border-blue-500 focus:outline-none"
                  />
                  <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs">
                    Position Applying For
                  </label>
                  {errors.position && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.position}
                    </p>
                  )}
                </div>

                {/* Portfolio */}
                <div className="mb-6 relative">
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm focus:border-blue-500 focus:outline-none"
                  />
                  <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs">
                    Portfolio / LinkedIn / GitHub
                  </label>
                  {errors.portfolio && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.portfolio}
                    </p>
                  )}
                </div>

                {/* Motivation */}
                <div className="mb-6 relative">
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={4}
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm focus:border-blue-500 focus:outline-none"
                  />
                  <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-[11px]">
                    Why do you want to join our team?
                  </label>
                  {errors.motivation && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.motivation}
                    </p>
                  )}
                </div>

                {/* Resume Upload */}
                <div className="mb-6">
                  <label className="block text-xs font-medium text-gray-600 mb-3 italic">
                    Upload Resume / CV
                  </label>
                  <div className="flex items-center gap-4 flex-col">
                    <label className="cursor-pointer bg-gray-200 text-gray-500 px-4 py-2 w-full text-center rounded-lg text-sm hover:bg-gray-300 hover:text-white transition">
                      {formData.resume ? "Change File" : "Choose File"}
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    {formData.resume && (
                      <div className="text-sm text-gray-700 flex w-full">
                        <p className="font-medium flex-1">
                          {formData.resume.name}
                        </p>
                        <p className="text-gray-500 flex-1 text-right">
                          {(formData.resume.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    )}
                  </div>
                  {errors.resume && (
                    <p className="text-red-500 text-xs mt-1">{errors.resume}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-800 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>



      {/* Popup */}
      <AnimatePresence>
        {popupMessage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopupMessage(null)}
          >
            <motion.div
              className="bg-gray-200 p-6 rounded-xl shadow-lg max-w-sm text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="mb-4">{popupMessage}</p>
              <button
                onClick={() => setPopupMessage(null)}
                className="bg-blue-950 text-sm text-white px-4 py-1 rounded hover:bg-blue-900"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Career;
