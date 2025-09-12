"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

const requestQuoteSchema = z.object({
  name: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone Number is required"),
  service: z.string().min(1, "Service Needed is required"),
  description: z.string().min(1, "Project Description is required"),
  budget: z.string().refine((val) => {
    const num = Number(val.replace(/\D/g, ""));
    return !isNaN(num) && Number.isInteger(num) && num >= 0;
  }, "Budget must be a non-negative whole number"),
  timeline: z.string().min(1, "Timeline / Deadline is required"),
  company: z.string().optional(),
  contactMethod: z.enum(
    ["email", "phone"],
    "Select a preferred contact method"
  ),
  terms: z
    .boolean()
    .refine(
      (val) => val === true,
      "You must agree to the Terms & Privacy Policy."
    ),
});

// Type for react-phone-input-2 data object
interface PhoneInputData {
  dialCode: string;
  countryCode: string;
  name?: string;
  format?: string;
  priority?: number;
  areaCodes?: string[] | null;
}

export default function RequestQuoteFormForCantactPage() {
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [budgetValue, setBudgetValue] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fileObject, setFileObject] = useState<File | null>(null);
  const [phoneValue, setPhoneValue] = useState("");
  const [descFocused, setDescFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("ng");

  // Handle phone input changes
  const handlePhoneChange = (value: string, data: PhoneInputData) => {
    if (data.countryCode !== selectedCountry) {
      setSelectedCountry(data.countryCode);
    }

    let digits = value.replace(/\D/g, "");

    if (data.countryCode === "ng" && digits.startsWith("0")) {
      digits = digits.slice(1);
    }

    if (digits.length > 6) {
      digits = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(
        6,
        10
      )}`;
    } else if (digits.length > 3) {
      digits = `${digits.slice(0, 3)}-${digits.slice(3)}`;
    }

    setPhoneValue(digits);
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    setBudgetValue(raw ? `$${raw}` : "");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setFilePreview(null);
      setFileObject(null);
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      setPopupMessage("Only JPG, PNG, or PDF files are allowed.");
      setFilePreview(null);
      setFileObject(null);
      return;
    }

    setFileObject(file);
    if (file.type.startsWith("image/")) {
      setFilePreview(URL.createObjectURL(file));
    } else {
      setFilePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setPopupMessage(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const rawData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: phoneValue,
      service: (form.elements.namedItem("service") as HTMLInputElement).value,
      description: (
        form.elements.namedItem("description") as HTMLTextAreaElement
      ).value,
      budget: budgetValue.replace(/\D/g, ""),
      timeline: (form.elements.namedItem("timeline") as HTMLInputElement).value,
      company:
        (form.elements.namedItem("company") as HTMLInputElement).value || "",
      contactMethod: (
        form.elements.namedItem("contactMethod") as HTMLSelectElement
      ).value as "email" | "phone",
      terms: (form.elements.namedItem("terms") as HTMLInputElement).checked,
    };

    const validation = requestQuoteSchema.safeParse(rawData);

    if (!validation.success) {
      const errors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) errors[String(issue.path[0])] = issue.message;
      });
      setFieldErrors(errors);

      const allEmpty = Object.values(rawData).every(
        (val) => val === "" || val === false
      );
      if (allEmpty) setPopupMessage("Please complete the form to continue.");

      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(rawData).forEach(([key, value]) =>
        formData.append(key, value as string)
      );
      if (fileObject) formData.append("file", fileObject);

      const res = await fetch("/api/request-quote", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setPopupMessage(
          "Your request is being reviewed. Please check your email for confirmation."
        );
        form.reset();
        setBudgetValue("");
        setFilePreview(null);
        setFileObject(null);
        setPhoneValue("");
        setFieldErrors({});
        setSelectedCountry("ng");
      } else {
        setPopupMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setPopupMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const floatingInput = (
    id: string,
    type: string,
    placeholder: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    extraClass?: string
  ) => (
    <div className={`relative w-full mb-4 ${extraClass || ""}`}>
      <input
        type={type}
        name={id}
        id={id}
        placeholder=" "
        className="peer w-full border-b border-gray-300 p-2 pt-9 focus:outline-none focus:border-blue-600 text-sm"
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="absolute left-2 top-2 text-gray-400 text-sm transition-all duration-200
                   peer-placeholder-shown:top-9 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                   peer-focus:top-2 peer-focus:text-blue-600 peer-focus:text-sm"
      >
        {placeholder}
      </label>
      {fieldErrors[id] && (
        <p className="text-red-600 text-xs mt-1">{fieldErrors[id]}</p>
      )}
    </div>
  );

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row p-5 md:p-10 lg:p-30 mx-auto bg-white rounded shadow overflow-hidden gap-8">
        {/* flex 1 */}
        <div className="flex-1 mb-30 md:mb-0">
          <div className=" h-full pr-10 md:pl-2 p-2 ">
            <h3 className="text-sm font-light mb-10">Lets talk</h3>
            <h1 className=" mb-10 text-2xl first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-1 first-letter:leading-[0.8] text-blue-950">
              We are always ready to assist you and provide clear answers to
              your questions, ensuring you get the right guidance at every step
              of your software journey.
            </h1>

            <h3 className="text-xs text-gray-600 mb-20">
              Providing you with the right solutions begins with a simple
              conversation. Our team is committed to understanding your needs,
              addressing your questions, and offering expert guidance at every
              stage. Call us today to get started on the path to software
              success.
            </h3>
            {/* the phone and location  div  */}
            <div className="flex flex-row mb-10">
              {/* first  */}
              <div className="flex-1">
                <h1 className="font-bold text-xl">Call Center</h1>
                <p className="font-light text-sm mt-2 text-gray-600">
                  <span className="font-bold">Phone: </span>
                  <br /> +234-916-163-7046, <br /> +234-810-678-1068, <br />
                  +234-811-406-4607.
                </p>
              </div>
              {/* second  */}
              <div className="flex-1">
                <h1 className="text-xl font-bold">Our Location</h1>
                <p className="font-light text-[12px] mt-2 text-gray-600">
                  Headquartered in Imo State, Nigeria &#40;within the Federal
                  University of Technology Owerri&#41; PMB 1526, Owerri, Imo
                  State, Nigeria &#40;Postal Code: 460114&#41;{" "}
                  <span className="font-bold text-black">
                    {" "}
                    Delivering Innovative Software solutions worldwide.
                  </span>
                </p>
              </div>
            </div>
            {/* the email and social media div  */}
            <div className="flex flex-row ">
              {/* first  */}
              <div className="flex-1">
                <h1 className="font-bold text-xl">Email</h1>
                <p className="font-light text-sm mt-2 text-gray-600">
                  techhike@gmail.com
                </p>
              </div>
              {/* second  */}
              <div className="flex-1">
                <h1 className="text-xl font-bold">Follow Us</h1>
                <div className="flex flex-row gap-4 justify-start items-center mt-2">
                  <Link href="https://web.facebook.com/?_rdc=1&_rdr#">
                    {" "}
                    <FaFacebook
                      className="text-gray-400
          "
                      size={20}
                    />{" "}
                  </Link>
                  <Link href="https://x.com/">
                    <FaSquareXTwitter className="text-gray-400" size={20} />{" "}
                  </Link>

                  <Link href="https://www.instagram.com/accounts/login/?hl=en">
                    <FaInstagram className="text-gray-400" size={20} />{" "}
                  </Link>
                  <Link href="https://web.telegram.org/a/">
                    <FaTelegram className="text-gray-400" size={22} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* flex 2 */}
        <div className="flex-1 bg-gray-200 p-6 rounded-xl">
          <div className="py-4 ">
            <h1 className="text-blue-950 text-2xl">Request a Quote</h1>
            <p className="text-gray-600 text-[12px] mt-3 ">
              Ready to bring your software ideas to life? Share your project
              details with us and receive a tailored estimate that matches your
              needs and budget. Our team will carefully review your requirements
              and provide a clear proposal to help you make the right decision.
              Get started today by requesting your personalized quote.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {floatingInput(
              "name",
              "text",
              "Full Name",
              undefined,
              undefined,
              "mb-10 md:mb-12"
            )}
            {floatingInput(
              "email",
              "email",
              "Email Address",
              undefined,
              undefined,
              "mb-10 md:mb-12"
            )}

            {/* Phone Input */}
            <div className="relative w-full mb-8">
              <label
                htmlFor="phone"
                className={`absolute left-2 transition-all duration-200
      ${
        phoneFocused
          ? "-top-8 text-blue-600 text-sm"
          : "-top-6 text-gray-400 text-sm"
      }`}
              >
                Phone Number
              </label>
              <PhoneInput
                country="ng"
                value={phoneValue}
                onChange={handlePhoneChange}
                enableSearch
                inputProps={{
                  name: "phone",
                  className:
                    "w-full border-b pl-14 border-gray-300 p-3 pt-9 focus:outline-none focus:border-blue-600 text-sm",
                  placeholder: " ",
                  onFocus: () => setPhoneFocused(true),
                  onBlur: () => setPhoneFocused(false),
                }}
              />
              {fieldErrors["phone"] && (
                <p className="text-red-600 text-xs mt-1">
                  {fieldErrors["phone"]}
                </p>
              )}
            </div>

            {floatingInput(
              "service",
              "text",
              "Service Needed",
              undefined,
              undefined,
              "mb-10 md:mb-12"
            )}

            {/* Description */}
            <div className="relative w-full mb-8">
              <label
                htmlFor="description"
                className={`absolute left-2 transition-all duration-200
      ${
        descFocused
          ? "-top-8 text-blue-600 text-sm"
          : "-top-6 text-gray-400 text-sm"
      }`}
              >
                Project Description
              </label>
              <textarea
                name="description"
                id="description"
                placeholder=" "
                className="peer w-full border-b border-gray-300 p-3 pt-9 focus:outline-none focus:border-blue-600 text-sm resize-none"
                rows={4}
                onFocus={() => setDescFocused(true)}
                onBlur={() => setDescFocused(false)}
              />
              {fieldErrors["description"] && (
                <p className="text-red-600 text-xs mt-1">
                  {fieldErrors["description"]}
                </p>
              )}
            </div>

            {floatingInput(
              "budget",
              "text",
              "Budget (whole number)",
              budgetValue,
              handleBudgetChange
            )}
            {floatingInput("timeline", "text", "Timeline / Deadline")}
            {floatingInput("company", "text", "Company / Organization Name")}

            {/* File Upload */}
            <div className="relative w-full mb-4">
              <input
                type="file"
                name="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
              />
              <p className="mt-1 ml-2 text-blue-950 text-xs italic">
                To help us better understand your requirements, you may upload a
                sample or reference document here &#40;Image or
                pdf&#41;
              </p>

              {fileObject && (
                <p className="mt-3 text-gray-700">{fileObject.name}</p>
              )}
              {filePreview && (
                <img
                  src={filePreview}
                  alt="File Preview"
                  className="max-h-40 mt-2 border rounded"
                />
              )}
            </div>
            <label
              htmlFor="fileInput"
              className="inline-block   text-black text-sm px-10 py-3 rounded cursor-pointer hover:bg-gray-300"
            >
              {fileObject ? (
                <CiEdit size={30} />
              ) : (
                <IoCloudUploadOutline size={30} />
              )}
            </label>

            {/* Contact Method */}
            <div className="relative w-full mb-4">
              <select
                name="contactMethod"
                className="peer w-full border-b border-gray-300 p-2 pt-6 focus:outline-none focus:border-blue-600 text-sm"
              >
                <option value="" className="text-gray-400">
                  Preferred Contact Method
                </option>
                <option value="email" className="text-gray-400">
                  Email
                </option>
                <option value="phone" className="text-gray-400">
                  Phone
                </option>
              </select>
              {fieldErrors["contactMethod"] && (
                <p className="text-red-600 text-xs mt-1">
                  {fieldErrors["contactMethod"]}
                </p>
              )}
            </div>

            <label className="flex items-center space-x-2 mb-4">
              <input type="checkbox" name="terms" />
              <span className="text-gray-400">
                I agree to the Terms & Privacy Policy
              </span>
            </label>
            {fieldErrors["terms"] && (
              <p className="text-red-600 text-xs mt-1">
                {fieldErrors["terms"]}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-950 text-sm text-white px-10 py-2 rounded-full hover:bg-blue-900"
            >
              {loading ? "Submiting..." : "Submit"}
            </button>
          </form>
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
            onClick={() => setPopupMessage(null)} // Close when clicking outside
          >
            <motion.div
              className="bg-gray-200 p-6 rounded-xl shadow-lg max-w-sm text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
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
}
