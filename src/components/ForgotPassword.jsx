import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-4 sm:p-8 lg:p-12">
      <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Check Your Email
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">
              If an account with the entered email exists, you’ll receive a reset link shortly.
            </p>
            <p className="text-center mt-4 text-sm md:text-base lg:text-lg">
              <Link to="/" className="text-blue-500 hover:underline">
                Back to Login
              </Link>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6">
              Forgot Password
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base lg:text-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 text-sm md:text-base lg:text-lg"
            >
              Send Reset Link
            </button>
            <p className="text-center mt-4 text-sm md:text-base lg:text-lg text-gray-600">
              <Link to="/login" className="text-blue-500 hover:underline">
                Back to Login
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
