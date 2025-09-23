"use client";
import { useSignUpMutation } from "@/services/public/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const [signUp, { isLoading }] = useSignUpMutation();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Basic validation
    if (formData.password !== formData.confirm_password) {
      setErrors({ confirm_password: "Passwords do not match" });
      return;
    }

    try {
      const result = await signUp(formData).unwrap();
      console.log("Registration successful:", result);

      // Redirect to login or home page
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      if (error.data) {
        setErrors(error.data);
      } else {
        setErrors({ general: "Registration failed. Please try again." });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Create your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <input
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-1/2 p-2 border rounded"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-1/2 p-2 border rounded"
            />
          </div>

          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          {errors.confirm_password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirm_password}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-800"
          >
            {isLoading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-700 font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
