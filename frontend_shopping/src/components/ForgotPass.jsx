import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ForgotPass = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://full-stack-project-cw6d.onrender.com/api/forgotpassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
          }),
        },
      );

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);

        navigate("/verify-otp", {
          state: {
            email: email.trim(),
          },
        });
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="relative w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-700 text-xl"
        >
          <IoIosCloseCircle />
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800">
          Forgot Password 🔐
        </h2>

        <p className="text-sm text-gray-500 text-center mt-2 mb-6">
          Enter your email to receive an OTP.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="block text-sm text-gray-700 mb-2">Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
            className="w-full border border-gray-500 rounded-tl-md rounded-br-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-500 hover:bg-purple-700 disabled:bg-gray-400 text-white py-2 mt-6 font-semibold rounded-tl-md rounded-br-md"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-5">
          Remember your password?
          <Link
            to="/login"
            className="text-green-600 font-medium hover:underline ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPass;
