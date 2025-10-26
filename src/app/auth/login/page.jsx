"use client";
import { useLoginMutation } from "@/services/public/auth";
import { onLoggedIn } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loginDefaultValues,
  loginSchema,
} from "../utilities/auth.schema";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefaultValues,
  });

  const onSubmit = async (e) => {
    e.preventDefault();

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
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Login into your account
        </h2>

        <Form {...form}>
          <form
            id="login-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="eg. abc@123.com" {...field} />
                  </FormControl>
                  <FormMessage className="text-[10px] font-light" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="pr-8"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-slate-500" />
                        ) : (
                          <Eye className="h-4 w-4 text-slate-500" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-[10px] font-light" />
                </FormItem>
              )}
            />

            <button
              type="submit"
              onClick={form.handleSubmit(onSubmit)}
              disabled={isLoading}
              className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-800"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </Form>

        <p className="text-center text-sm mt-4">
          Dont have an account?{" "}
          <a href="/auth/register" className="text-blue-700 font-medium">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
