"use client";

import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormError } from "@/components/ui/form-error";
import SocialAuth from "@/components/auth/SocialAuth";
import AuthLayout from "@/components/layout/AuthLayout";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpFormData } from "@/lib/validations/auth";
import { useState } from "react";
import { toast } from "sonner";

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur", // Validate on blur for better UX
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  // Watch password field for strength indicator (optional enhancement)
  const password = watch("password");

  // Form submission handler
  const onSubmit = async (data: SignUpFormData) => {
    try {
      setIsLoading(true);

      // TODO: Replace with actual registration API call
      console.log("Sign up data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Account created successfully! Redirecting...");

      // TODO: Redirect to onboarding or dashboard
      // router.push('/onboarding');
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Sign up error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitleLink={{
        text: "Already have an account?",
        href: "/sign-in",
        linkText: "Sign in",
      }}
    >
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name Field */}
          <div>
            <Label
              htmlFor="fullName"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Full Name
            </Label>
            <div className="mt-2">
              <Input
                id="fullName"
                type="text"
                autoComplete="name"
                placeholder="John Doe"
                {...register("fullName")}
                className="focus-visible:border-primary focus-visible:ring-primary/20 placeholder:text-sm"
                aria-invalid={errors.fullName ? "true" : "false"}
              />
              <FormError message={errors.fullName?.message} />
            </div>
          </div>

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
                placeholder="you@example.com"
                {...register("email")}
                className="focus-visible:border-primary focus-visible:ring-primary/20 placeholder:text-sm"
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
                autoComplete="new-password"
                placeholder="Min 8 characters"
                {...register("password")}
                className="focus-visible:border-primary focus-visible:ring-primary/20 placeholder:text-sm"
                aria-invalid={errors.password ? "true" : "false"}
              />
              <FormError message={errors.password?.message} />

              {/* Password Requirements Hint */}
              {!errors.password && password && password.length > 0 && (
                <p className="text-xs text-gray-600 mt-2">
                  Password must contain: uppercase, lowercase, number, and
                  special character (@$!%*?&#)
                </p>
              )}
            </div>
          </div>

          {/* Terms & Conditions */}
          <div>
            <div className="flex gap-3 items-start">
              <Checkbox
                id="terms"
                {...register("terms")}
                className="mt-1"
                aria-invalid={errors.terms ? "true" : "false"}
              />
              <Label htmlFor="terms" className="text-sm/6 text-gray-900">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-semibold text-gray-950 hover:text-gray-700"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-gray-950 hover:text-gray-700"
                >
                  Privacy Policy
                </Link>
              </Label>
            </div>
            <FormError message={errors.terms?.message} />
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
              {isLoading ? "Creating account..." : "Sign up"}
            </Button>
          </div>
        </form>
      </div>

      <SocialAuth />
    </AuthLayout>
  );
};

export default SignUpPage;
