"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { ChevronDown } from "lucide-react";
import { getNames } from "country-list"; // ✅ Import country-list

// Zod Schema
const learningFormSchema = z.object({
  name: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone Number is required"),
  stage: z
    .enum(["beginner", "intermediate", "advanced"] as const)
    .refine((val) => !!val, { message: "Select a learning stage" }),
  interest: z
    .enum([
      "Software Development",
      "Cybersecurity Solutions",
      "Networking",
      "Data Analytics",
      "Cloud Computing",
      "Machine Learning",
      "Database Management",
      "Digital Marketing",
    ] as const)
    .refine((val) => !!val, { message: "Select an area of interest" }),
  country: z.string().min(1, "Country is required"),
  mode: z
    .enum(["online", "onsite", "hybrid"] as const)
    .refine((val) => !!val, { message: "Select a preferred learning mode" }),
});

// PhoneInput types
interface PhoneInputData {
  dialCode: string;
  countryCode: string;
}

interface CountryOption {
  value: string;
  label: string;
}

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  name: string;
  error?: string;
}

// Custom Dropdown Component
function CustomDropdown({
  options,
  placeholder = "Select an option",
  value,
  onChange,
  name,
  error,
}: CustomDropdownProps) {
  const [open, setOpen] = useState(false);
  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div className="relative w-full mb-6">
      <input type="hidden" name={name} value={value || ""} />

      <button
        type="button"
        className={`w-full flex justify-between items-center px-4 py-2 bg-white border-b ${
          error ? "border-red-500" : "border-gray-300"
        } text-gray-700 focus:outline-none text-sm`}
        onClick={() => setOpen(!open)}
      >
        <span className={value ? "" : "text-gray-400"}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <ul className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10 max-h-52 overflow-y-auto">
          {options.map((opt) => (
            <li
              key={opt.value}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default function LearningApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneFocused, setPhoneFocused] = useState(false);

  // Country select state
  const [country, setCountry] = useState<CountryOption | null>(null);
  const countryOptions: CountryOption[] = getNames().map((name) => ({
    value: name,
    label: name,
  }));

  // Interest state for custom dropdown
  const [interest, setInterest] = useState<string>("");

  // Handle phone changes
  const handlePhoneChange = (value: string, data: PhoneInputData) => {
    setPhoneValue(value);
  };

  // Floating input reusable component
  const floatingInput = (
    id: string,
    type: string,
    placeholder: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  ) => (
    <div className="relative w-full mb-6">
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

  // Handle submit
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
      stage: (form.elements.namedItem("stage") as HTMLSelectElement).value as
        | "beginner"
        | "intermediate"
        | "advanced",
      interest: interest as
        | "Software Development"
        | "Cybersecurity Solutions"
        | "Networking"
        | "Data Analytics"
        | "Cloud Computing"
        | "Machine Learning"
        | "Database Management"
        | "Digital Marketing",
      country: country ? country.label : "",
      mode: (form.elements.namedItem("mode") as HTMLSelectElement).value as
        | "online"
        | "onsite"
        | "hybrid",
    };

    const validation = learningFormSchema.safeParse(rawData);

    if (!validation.success) {
      const errors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) errors[String(issue.path[0])] = issue.message;
      });
      setFieldErrors(errors);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/learning-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rawData),
      });

      if (res.ok) {
        setPopupMessage("Your application has been submitted successfully!");
        form.reset();
        setPhoneValue("");
        setCountry(null);
        setInterest("");
      } else {
        setPopupMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setPopupMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="relative">
      <div className="bg-gray-200 p-6">
        <div className="py-4 mb-8">
          <h1 className="text-blue-950 text-2xl">
            Start Your Learning Journey
          </h1>
          <p className="text-gray-600 text-[12px] py-3">
            New to tech? Just fill out the form, select your learning stage, and
            we&#39;ll guide you step by step. Our team will help you build
            skills and confidence as you grow.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {floatingInput("name", "text", "Full Name")}
          {floatingInput("email", "email", "Email Address")}

          {/* Phone Input */}
          <div className="relative w-full mb-6 mt-6">
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

          {/* Learning Stage */}
          <div className="relative w-full mb-6">
            <select
              name="stage"
              defaultValue="beginner"
              disabled
              className="peer w-full border-b border-gray-300 p-2 pt-6 text-gray-500 focus:outline-none focus:border-blue-600 text-sm"
            >
              <option value="">Select Learning Stage</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            {fieldErrors["stage"] && (
              <p className="text-red-600 text-xs mt-1">
                {fieldErrors["stage"]}
              </p>
            )}
          </div>

          {/* Area of Interest - Custom Dropdown */}
          <CustomDropdown
            name="interest"
            options={[
              { value: "Software Development", label: "Software Development" },
              { value: "Cybersecurity Solutions", label: "Cybersecurity Solutions" },
              { value: "Networking", label: "Networking" },
              { value: "Data Analytics", label: "Data Analytics" },
              { value: "Cloud Computing", label: "Cloud Computing" },
              { value: "Machine Learning", label: "Machine Learning" },
              { value: "Database Management", label: "Database Management" },
              { value: "Digital Marketing", label: "Digital Marketing" },
            ]}
            placeholder="Select Area of Interest"
            value={interest}
            onChange={(val) => setInterest(val)}
            error={fieldErrors["interest"]}
          />

          {/* Country Dropdown */}
          <div className="relative w-full mb-6">
            <Select
              options={countryOptions}
              value={country}
              onChange={(val) => setCountry(val as CountryOption)}
              placeholder="Select your country"
              className="text-sm"
            />
            {fieldErrors["country"] && (
              <p className="text-red-600 text-xs mt-1">
                {fieldErrors["country"]}
              </p>
            )}
          </div>

          {/* Preferred Mode */}
          <div className="relative w-full mb-6">
            <select
              name="mode"
              defaultValue="online"
              disabled
              className="peer w-full border-b border-gray-300 text-gray-500 p-2 pt-6 focus:outline-none focus:border-blue-600 text-sm"
            >
              <option value="online">Online</option>
              <option value="onsite">Onsite</option>
              <option value="hybrid">Hybrid</option>
            </select>
            {fieldErrors["mode"] && (
              <p className="text-red-600 text-xs mt-1">{fieldErrors["mode"]}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-950 text-sm text-white px-10 py-2 rounded-full hover:bg-blue-900"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
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
}
