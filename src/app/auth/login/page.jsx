"use client";
import { useLoginMutation } from "@/services/public/auth";
import { onLoggedIn } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const result = await login(formData).unwrap();
      console.log("Login successful:", result);

      // Store token or user data (adjust based on your API response)
      if (result.data) {
        dispatch(onLoggedIn(result.data));
      }

      // Redirect to home or dashboard
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
      if (error.data) {
        setErrors(error.data);
      } else {
        setErrors({ general: "Login failed. Please try again." });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Login into your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-800"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Dont have an account?{" "}
          <a href="/auth/register" className="text-blue-700 font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
