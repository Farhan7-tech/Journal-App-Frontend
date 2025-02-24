import React, { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/journal/public/signup", // API endpoint for Sign Up
        formData
      );
      if (response.status === 200) {
        alert("Sign Up successful! You can now log in.");
        // Optionally, redirect to login page
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex w-full overflow-hidden">
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-full shadow-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">DD</span>
            </div>
            <span className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-green-600 text-transparent bg-clip-text drop-shadow-lg">
              Daily Dairy
            </span>
          </div>

          <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text animate-text-glow">
            Create an Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                UserName
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your UserName"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your Email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-green-600 text-white py-3 px-6 rounded-full shadow-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:from-green-600 hover:to-orange-500"
            >
              SIGN UP
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-orange-600 font-semibold relative transition-all duration-300 hover:text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
