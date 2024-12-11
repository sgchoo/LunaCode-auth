import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // 로그인 로직 추가
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-200 p-4 sm:p-8 lg:p-12">
      <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <form onSubmit={handleLogin}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6">
            Login
          </h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm md:text-base lg:text-lg font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base lg:text-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm md:text-base lg:text-lg font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base lg:text-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200 text-sm md:text-base lg:text-lg"
          >
            Login
          </button>
          <p className="text-center mt-4 text-sm md:text-base lg:text-lg text-gray-600">
            <Link to="/forgot-password" className="text-green-500 hover:underline">
              Forgot your password?
            </Link>
          </p>
          <p className="text-center mt-2 text-sm md:text-base lg:text-lg text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
