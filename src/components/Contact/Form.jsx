import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const nameRegex = /^[A-Za-z.\s]*$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^[6-9][0-9]{9}$/;
  const urlRegex = /(https?:\/\/[^\s]+)/gi;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name || !nameRegex.test(formData.name))
      newErrors.name = "Please enter a valid name.";

    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email.";

    if (!formData.mobile || !phoneRegex.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit number starting with 6-9.";

    if (
      !formData.message ||
      formData.message.length > 150 ||
      urlRegex.test(formData.message)
    )
      newErrors.message = "Invalid message (no URLs, max 150 chars).";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("✅ Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
        setErrors({});
      } else {
        alert("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending mail:", error);
      alert("⚠️ Something went wrong while sending the message.");
    }
  };

  return (
    <div className="bg-[#FAFAFA] h-full w-full px-2 md:px-12 py-6 md:py-10 rounded flex flex-col items-center justify-center">
      <h2 className="gradient-text-color text-[27px] text-center pb-[10px]">
        Get In Touch <br /> With Us
      </h2>

      <div className="w-full max-w-[420px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full gap-1"
        >
          <style>
            {`
              .form-input {
                width: 100%;
                border: none;
                border-bottom: 1px solid #ccc;
                padding: 4px 2px;
                outline: none;
                text-align: center;
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
                height: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .error-text {
                 background: -webkit-linear-gradient(#d11b23, #820a10);
                 -webkit-background-clip: text;
                 -webkit-text-fill-color: transparent;
                 font-size: 10px !important;
                 text-align: center;
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
            className="form-input"
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
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="form-input"
            placeholder="Phone Number*"
            maxLength="10"
          />
          <div className="error-container">
            <p
              className={
                errors.mobile ? "error-text" : "error-text error-hidden"
              }
            >
              {errors.mobile || "placeholder"}
            </p>
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
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
