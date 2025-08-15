"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
  contactMethod: z.enum(["email", "phone"], "Select a preferred contact method"),
  terms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the Terms & Privacy Policy."),
});

export default function RequestQuoteForm() {
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [budgetValue, setBudgetValue] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fileObject, setFileObject] = useState<File | null>(null);
  const [phoneValue, setPhoneValue] = useState("");

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
      description: (form.elements.namedItem("description") as HTMLTextAreaElement).value,
      budget: budgetValue.replace(/\D/g, ""),
      timeline: (form.elements.namedItem("timeline") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value || "",
      contactMethod: (form.elements.namedItem("contactMethod") as HTMLSelectElement)
        .value as "email" | "phone",
      terms: (form.elements.namedItem("terms") as HTMLInputElement).checked,
    };

    const validation = requestQuoteSchema.safeParse(rawData);

    if (!validation.success) {
      const errors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) errors[String(issue.path[0])] = issue.message;
      });
      setFieldErrors(errors);

      const allEmpty = Object.values(rawData).every((val) => val === "" || val === false);
      if (allEmpty) setPopupMessage("Please fill out the form.");

      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(rawData).forEach(([key, value]) => formData.append(key, value as string));
      if (fileObject) formData.append("file", fileObject);

      const res = await fetch("/api/request-quote", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setPopupMessage("✅ Your request has been received! Check your email for details.");
        form.reset();
        setBudgetValue("");
        setFilePreview(null);
        setFileObject(null);
        setPhoneValue("");
        setFieldErrors({});
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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  ) => (
    <div className="relative w-full mb-4">
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
      {/* Form layout */}
      <div className="flex flex-col md:flex-row max-w-4xl mx-auto bg-white rounded shadow overflow-hidden">
        <div className="w-full md:w-1/2 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {floatingInput("name", "text", "Full Name")}
            {floatingInput("email", "email", "Email Address")}

            <div className="relative w-full mb-4 gap-4">
              <PhoneInput
                country={"us"}
                value={phoneValue}
                onChange={setPhoneValue}
                enableSearch={true}
                inputProps={{
                  name: "phone",
                  className:
                    "w-full border-b border-gray-300 p-2 pt-9 focus:outline-none focus:border-blue-600 text-sm",
                  placeholder: " ",
                }}
              />
              <label className="absolute left-2 top-2 text-gray-400 text-sm transition-all duration-200">
                Phone Number
              </label>
              {fieldErrors["phone"] && (
                <p className="text-red-600 text-xs mt-1">{fieldErrors["phone"]}</p>
              )}
            </div>

            {floatingInput("service", "text", "Service Needed")}

            <div className="relative w-full mb-4">
              <textarea
                name="description"
                id="description"
                placeholder=" "
                className="peer w-full border-b border-gray-300 p-2 pt-9 focus:outline-none focus:border-blue-600 text-sm"
              />
              <label
                htmlFor="description"
                className="absolute left-2 top-2 text-gray-400 text-sm transition-all duration-200
                           peer-placeholder-shown:top-9 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                           peer-focus:top-2 peer-focus:text-blue-600 peer-focus:text-sm"
              >
                Project Description
              </label>
              {fieldErrors["description"] && (
                <p className="text-red-600 text-xs mt-1">{fieldErrors["description"]}</p>
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

            <div className="relative w-full mb-4">
              <input
                type="file"
                name="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="fileInput"
                className="inline-block bg-blue-950 text-white text-sm px-4 py-3 rounded cursor-pointer hover:bg-blue-900"
              >
                {fileObject ? "Change File" : "Upload picture or pdf"}
              </label>

              {fileObject && <p className="mt-2 text-gray-700">{fileObject.name}</p>}
              {filePreview && (
                <img
                  src={filePreview}
                  alt="File Preview"
                  className="max-h-40 mt-2 border rounded"
                />
              )}
            </div>

            <div className="relative w-full mb-4">
              <select
                name="contactMethod"
                className="peer w-full border-b border-gray-300 p-2 pt-6 focus:outline-none focus:border-blue-600 text-sm"
              >
                <option value="">Preferred Contact Method</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
              {fieldErrors["contactMethod"] && (
                <p className="text-red-600 text-xs mt-1">{fieldErrors["contactMethod"]}</p>
              )}
            </div>

            <label className="flex items-center space-x-2 mb-4">
              <input type="checkbox" name="terms" />
              <span>I agree to the Terms & Privacy Policy</span>
            </label>
            {fieldErrors["terms"] && (
              <p className="text-red-600 text-xs mt-1">{fieldErrors["terms"]}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900"
            >
              {loading ? "Sending..." : "Request Quote"}
            </button>
          </form>
        </div>

        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center justify-center items-center"
          style={{
            backgroundImage: "url('/teche.jpg')",
            minHeight: "100%",
          }}
        >
          <div className="flex justify-center items-center h-full">
            <h2 className="text-2xl text-white flex font-bold">
              Tech- <span className="font-light ">Hike</span>
            </h2>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {popupMessage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white/50 bg-opacity-50 backdrop-blur-sm z-50"
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
                className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900"
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
