"use client";

import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormError } from "@/components/ui/form-error";
import SocialAuth from "@/components/auth/SocialAuth";
import AuthLayout from "@/components/layout/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInFormData } from "@/lib/validations/auth";
import { useState } from "react";
import { toast } from "sonner";

const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  // React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // Form submission handler
  const onSubmit = async (data: SignInFormData) => {
    try {
      setIsLoading(true);

      // TODO: Replace with actual authentication API call
      console.log("Sign in data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Sign in successful!");

      // TODO: Redirect to dashboard or home page
      // router.push('/dashboard');
    } catch (error) {
      toast.error("Invalid email or password. Please try again.");
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Sign in to your account"
      subtitleLink={{
        text: "Not a member?",
        href: "/sign-up",
        linkText: "Start a 14 day free trial",
      }}
    >
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <Label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </Label>
            <div className="mt-2">
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
                className="focus-visible:border-primary focus-visible:ring-primary/20"
                aria-invalid={errors.email ? "true" : "false"}
              />
              <FormError message={errors.email?.message} />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <Label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Password
            </Label>
            <div className="mt-2">
              <PasswordInput
                id="password"
                autoComplete="current-password"
                {...register("password")}
                className="focus-visible:border-primary focus-visible:ring-primary/20"
                aria-invalid={errors.password ? "true" : "false"}
              />
              <FormError message={errors.password?.message} />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <Checkbox id="remember-me" {...register("rememberMe")} />
              <Label
                htmlFor="remember-me"
                className="block text-sm/6 text-gray-900"
              >
                Remember me
              </Label>
            </div>

            <div className="text-sm/6">
              <a
                href="#"
                className="font-semibold text-gray-950 hover:text-gray-700"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              size="lg"
              variant="brand"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </div>
        </form>
      </div>

      <SocialAuth />
    </AuthLayout>
  );
};

export default SignInPage;
