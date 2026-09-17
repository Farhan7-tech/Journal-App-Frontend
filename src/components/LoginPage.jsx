import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../lib/api";
import myImage from "/src/assets/image2.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/journal/public/login`,
        formData
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data); // Store JWT token
        navigate("/journal"); // Redirect to Journal Page
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid userName or password");
    }
  };

  return (
    <div className="min-h-screen flex w-full overflow-hidden">
      {/* Left Section */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-full shadow-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">DD</span>
            </div>
            <span className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-green-600 text-transparent bg-clip-text drop-shadow-lg">
              Daily Dairy
            </span>
          </div>

          {/* Login Form */}
          <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text animate-text-glow">
            Welcome Back!
          </h1>

          <p className="text-gray-700 text-lg italic tracking-wide mb-8 animate-fade-in">
            Please enter your details below to continue.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
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
                required
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
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-purple-600 rounded border-gray-300"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember for 30 days
                </label>
              </div>
              <a
                href="#"
                className="text-green-600 font-semibold relative transition-all duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-green-600 text-white py-3 px-6 rounded-full shadow-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:from-green-600 hover:to-orange-500"
            >
              LOGIN
            </button>

            <button
              type="button"
              className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-orange-600 font-semibold relative transition-all duration-300 hover:text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="w-1/2 p-0 flex flex-col justify-center">
        <img src={myImage} alt="Illustration" width="600" />
      </div>
    </div>
  );
};

export default LoginPage;
