"use client";

import Image from "next/image";
import { useState } from "react";

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "",
    portfolio: "",
    motivation: "",
    resume: null as File | null,
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your application has been submitted!");
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
        <p className="text-xs text-center mt-2 max-w-lg text-gray-500">
          Be part of a team that values excellence, collaboration, and
          innovation. At Tech-Hike, we provide an environment where your skills
          are nurtured, your ideas are heard, and your contributions drive real
          impact. Together, we build solutions that inspire progress and create
          lasting value.
        </p>
      </div>

      {/* Flex Section */}
      <div className="flex flex-col md:flex-row mt-15 p-10">
        {/* Job Roles */}
        <div className="xl:flex-1/2 flex-1 md:mr-10 mb-10 md:mt-0">
          <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg">
            {/* UI/UX */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-500">UI/UX Designer</h1>
              <span className="text-sm text-green-600 font-semibold">
                Filled
              </span>
            </div>

            {/* Frontend */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-500">Frontend Developer</h1>
              <span className="text-sm text-green-600 font-semibold">Open</span>
            </div>

            {/* Backend */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-500">Backend Developer</h1>
              <span className="text-sm text-red-600 font-semibold">Closed</span>
            </div>

            {/* Mobile Developer */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-500">
                Mobile App Developer
              </h1>
              <span className="text-sm text-green-600 font-semibold">Open</span>
            </div>

            {/* DevOps Engineer */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-800">DevOps Engineer</h1>
              <span className="text-sm text-green-600 font-semibold">Open</span>
            </div>

            {/* Cloud Engineer */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-500">Cloud Engineer</h1>
              <span className="text-sm text-red-600 font-semibold">Closed</span>
            </div>

            {/* Data Scientist */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-500">Data Scientist</h1>
              <span className="text-sm text-green-600 font-semibold">Open</span>
            </div>

            {/* Cybersecurity Analyst */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-500">
                Cybersecurity Analyst
              </h1>
              <span className="text-sm text-red-600 font-semibold">Closed</span>
            </div>

            {/* QA Engineer */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-500">
                QA Engineer &#40;Tester&#41;
              </h1>
              <span className="text-sm text-green-600 font-semibold">Open</span>
            </div>

            {/* Product Manager */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-500">Product Manager</h1>
              <span className="text-sm text-green-600 font-semibold">
                Filled
              </span>
            </div>

            {/* Networking Engineer */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
              <h1 className="font-medium text-gray-500">Networking Engineer</h1>
              <span className="text-sm text-green-600 font-semibold">Open</span>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="flex-1 ">
          <div className="flex flex-col gap-0 bg-gray-100 px-3 py-9 rounded-md shadow-sm mb-9 md:mb-0">
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
                    required
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm focus:border-blue-500 focus:outline-none"
                  />
                  <label
                    className="
    absolute left-1 top-2 text-gray-500 text-sm transition-all
    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm
    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600
    peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs
  "
                  >
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="mb-6 relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm focus:border-blue-500 focus:outline-none"
                  />
                  <label
                    className="
    absolute left-1 top-2 text-gray-500 text-sm transition-all
    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm
    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600
    peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs
  "
                  >
                    Email Address
                  </label>
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
                  <label
                    className="
    absolute left-1 top-2 text-gray-500 text-sm transition-all
    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm
    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600
    peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs
  "
                  >
                    Position Applying For
                  </label>
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
                  <label
                    className="
    absolute left-1 top-2 text-gray-500 text-sm transition-all
    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm
    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600
    peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs
  "
                  >
                    Portfolio / LinkedIn / GitHub
                  </label>
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
                  <label
                    className="
    absolute left-1 top-2 text-gray-500 text-sm transition-all
    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm
    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600
    peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs
  "
                  >
                    Why do you want to join our team?
                  </label>
                </div>

                {/* Resume Upload (Custom) */}
                <div className="mb-6">
                  <label className="block text-xs font-medium text-gray-600 mb-3 italic ">
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
                      <div className="text-sm text-gray-700 flex  w-full">
                        <p className="font-medium flex-1">
                          {formData.resume.name}
                        </p>
                        <p className="text-gray-500 flex-1 text-right">
                          {(formData.resume.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    )}
                  </div>
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
    </div>
  );
};

export default Career;
