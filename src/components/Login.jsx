import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => { // 리액트는 화면이 변하는 곳에 state를 둔다 - 데이터가 변하는 곳
  const [email, setEmail] = useState(""); // 이건 뭔 문법이여?
  const [password, setPassword] = useState("");

  const handleLogin = (e) => { //로그인 이벤트에 넣을 함수
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
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
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // 스테이트 비워두고 이걸로 채우나보다
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
        <p className="text-center mt-4 text-sm text-gray-600">
          <Link to ="/forgot-password" className = "text-blue-500 hover:underline">
            Forgot your password?
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
