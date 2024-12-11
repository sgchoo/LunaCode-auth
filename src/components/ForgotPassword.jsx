import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    setSubmitted(true);
    // 서버에 비밀번호 초기화 요청 API 호출
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
            <p className="text-gray-600">
              If an account with the entered email exists, you’ll receive a reset link shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Send Reset Link
            </button>
            <p className="text-center mt-4 text-sm text-gray-600">
              <a href="/" className="text-blue-500 hover:underline">
                Back to Login
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
