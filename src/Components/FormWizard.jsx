// 29. Multi-step form wizard — state across steps
import React, { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
  });

  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      setEmailError("");
    }
  };

  const nextStep = () => {
    if (step === 1) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(formData.email)) {
        setEmailError("Please enter a valid email address.");
        return;
      }

      setEmailError("");
    }

    setStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-md">

        {!submitted ? (
          <>
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              Multi-Step Form
            </h1>

            <p className="mb-6 text-gray-500">
              Step {step} of 3
            </p>

            <form onSubmit={handleSubmit}>

              {step === 1 && (
                <div>
                  <h2 className="mb-4 text-xl font-semibold">
                    Personal Information
                  </h2>

                  <div className="mb-4">
                    <label className="mb-1 block font-medium">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="mb-1 block font-medium">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />

                    {emailError && (
                      <p className="mt-2 text-sm text-red-500">
                        {emailError}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
                  >
                    Next
                  </button>
                </div>
              )}

             
              {step === 2 && (
                <div>
                  <h2 className="mb-4 text-xl font-semibold">
                    Address
                  </h2>

                  <div className="mb-4">
                    <label className="mb-1 block font-medium">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="mb-1 block font-medium">
                      Country
                    </label>

                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Enter your country"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={previousStep}
                      className="w-1/2 rounded-lg border border-gray-300 px-4 py-3 font-semibold"
                    >
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-1/2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

             
              {step === 3 && (
                <div>
                  <h2 className="mb-6 text-xl font-semibold">
                    Confirm Your Information
                  </h2>

                  <div className="mb-6 space-y-3 rounded-lg bg-gray-50 p-4">
                    <p>
                      <strong>Name:</strong> {formData.name}
                    </p>

                    <p>
                      <strong>Email:</strong> {formData.email}
                    </p>

                    <p>
                      <strong>City:</strong> {formData.city}
                    </p>

                    <p>
                      <strong>Country:</strong> {formData.country}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={previousStep}
                      className="w-1/2 rounded-lg border border-gray-300 px-4 py-3 font-semibold"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="w-1/2 rounded-lg bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </form>
          </>
        ) : (
          <div className="text-center">
            <h1 className="mb-3 text-3xl font-bold text-green-600">
              Submitted!
            </h1>

            <p className="text-gray-600">
              Your form has been successfully submitted.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;