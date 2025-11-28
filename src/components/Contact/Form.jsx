import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [selectedCountry, setSelectedCountry] = useState("in");
  const [countryCode, setCountryCode] = useState("+91");

  const [errors, setErrors] = useState({});

  const nameRegex = /^[A-Za-z.\s]*$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const urlRegex = /(https?:\/\/[^\s]+)/gi;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (country, countryData) => {
    setSelectedCountry(country);
    setCountryCode(`+${countryData.dialCode}`);
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name || !nameRegex.test(formData.name))
      newErrors.name = "Please enter a valid name.";

    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email.";

    if (!formData.mobile || formData.mobile.replace(/\D/g, "").length < 7)
      newErrors.mobile = "Enter a valid phone number.";

    if (
      !formData.message ||
      formData.message.length > 150 ||
      urlRegex.test(formData.message)
    )
      newErrors.message = "Invalid message (no URLs, max 150 chars).";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form Submitted:", {
      ...formData,
      fullPhoneNumber: `${countryCode}${formData.mobile}`,
    });

    setFormData({ name: "", email: "", mobile: "", message: "" });
    setSelectedCountry("in");
    setCountryCode("+91");
    setErrors({});
  };

  return (
    <div className="bg-[#FAFAFA] h-full w-full px-4 md:px-8 py-6 md:py-10 rounded-xl flex flex-col items-start justify-center">
      <h2 className="gradient-text-color text-left pb-[10px]">Get In Touch</h2>

      <div className="w-full max-w-[420px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start w-full gap-1"
        >
          <style>
            {`
              .form-input {
                width: 100%;
                border: none;
                border-bottom: 1px solid #ccc;
                padding: 4px 2px;
                outline: none;
                text-align: left;
                background-color: transparent;
                transition: border-color 0.3s ease;
                font-size: 16px;
              }
              .form-input:focus {
                border-color: #007643;
                outline: none;
                box-shadow: none;
              }
              .error-container {
                height: 18px; /* fixed height to avoid layout shift */
                display: flex;
                justify-content: flex-start;
                align-items: center;
              }
              .error-text {
                 background: -webkit-linear-gradient(#d11b23, #820a10);
                 -webkit-background-clip: text;
                 -webkit-text-fill-color: transparent;
                 font-size: 10px !important;
                 text-align: left;
                 visibility: visible;
              }
              .error-hidden {
                visibility: hidden;
              }
            `}
          </style>

          {/* Full Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input text-left"
            placeholder="Full Name*"
          />
          <div className="error-container">
            <p
              className={errors.name ? "error-text" : "error-text error-hidden"}
            >
              {errors.name || "placeholder"}
            </p>
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="Email Address*"
          />
          <div className="error-container">
            <p
              className={
                errors.email ? "error-text" : "error-text error-hidden"
              }
            >
              {errors.email || "placeholder"}
            </p>
          </div>

          {/* Phone Number */}
          <div className="w-full border-b border-gray-300 flex items-center gap-3 relative">
            {/* Country Flag Selector */}
            <div className="flex items-center">
              <PhoneInput
                country={selectedCountry}
                value=""
                onChange={(value, country) =>
                  handleCountryChange(country.countryCode, country)
                }
                inputStyle={{
                  display: "none",
                }}
                buttonStyle={{
                  border: "none",
                  backgroundColor: "transparent",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
                containerStyle={{ width: "auto" }}
                dropdownStyle={{ zIndex: 1000 }}
              />
            </div>

            {/* Country Code Display */}
            <span className="text-gray-700 font-semibold text-base ml-8 mt-[5px] ">
              {countryCode}
            </span>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-300"></div>

            {/* Phone Number Input */}
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setFormData({ ...formData, mobile: value });
              }}
              placeholder="Phone Number*"
              maxLength="10"
              className="flex-1 border-none outline-none bg-transparent text-left transition-colors"
            />

            {/* Error Message */}
            <div className="absolute left-0 bottom-[-18px] w-full">
              <p
                className={
                  errors.mobile ? "error-text" : "error-text error-hidden"
                }
              >
                {errors.mobile || "placeholder"}
              </p>
            </div>
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input mt-4"
            placeholder="Message / Query*"
            rows="2"
          ></textarea>
          <div className="error-container">
            <p
              className={
                errors.message ? "error-text" : "error-text error-hidden"
              }
            >
              {errors.message || "placeholder"}
            </p>
          </div>

          {/* Submit */}
          <button
            className=" px-8 rounded-3xl py-1 bg-white border border-[#506C64] hover-gradient hover:text-white transition-all duration-300 mt-[10px]"
            type="submit"
          >
            Submit
          </button>
        </form>

        <p className="text-center color-red pt-[15px] error-text">
          Note: We keep your information strictly confidential and we don’t spam
          your email.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
