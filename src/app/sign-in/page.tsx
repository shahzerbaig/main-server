"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";



export default function SignIn() {
  const router = useRouter();

  // State for form inputs and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    if (email === "admin" && password === "admin") {
      setError(""); // Clear any previous error
      router.push("/admin");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl text-black font-bold mb-4">Sign In</h2>
        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-red-500 focus:border-red-700 focus:ring-2 focus:ring-red-300 rounded py-2 px-3 text-[0.8rem] text-black mb-4 transition-transform transform hover:scale-100 active:scale-95"
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-red-500 focus:border-red-700 focus:ring-2 focus:ring-red-300 rounded py-2 px-3 text-[0.8rem] text-black mb-4 transition-transform transform hover:scale-100 active:scale-95"
          placeholder="Password"
        />

        <button
          onClick={handleSignIn}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform active:scale-95 mb-4"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
