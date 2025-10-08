"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/ui/form-error";
import AuthLayout from "@/components/layout/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/lib/validations/auth";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ForgotPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  // Initialize React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // Form submission handler
  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      setIsLoading(true);

      // TODO: Replace with actual password reset API call
      console.log("Password reset requested for:", data.email);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success state
      setEmailSent(true);
      toast.success("Password reset link sent!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Forgot password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title={emailSent ? "Check your email" : "Forgot your password?"}
      subtitleLink={
        !emailSent
          ? {
              text: "Remember your password?",
              href: "/sign-in",
              linkText: "Sign in",
            }
          : undefined
      }
    >
      <div>
        {emailSent ? (
          // Success state - Email sent confirmation
          <div className="space-y-6">
            <div className="rounded-lg bg-green-50 p-4 border border-green-200">
              <p className="text-sm text-green-800">
                We&apos;ve sent a password reset link to{" "}
                <span className="font-semibold">{getValues("email")}</span>
              </p>
            </div>

            <div className="space-y-4 text-sm text-gray-600">
              <p>Please check your email and click the link to reset your password.</p>
              <p>
                The link will expire in <span className="font-medium">15 minutes</span> for
                security reasons.
              </p>
            </div>

            <div className="space-y-3">
              <Button
                type="button"
                size="lg"
                variant="brand"
                className="w-full"
                onClick={() => setEmailSent(false)}
              >
                Resend email
              </Button>

              <Link
                href="/sign-in"
                className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to sign in
              </Link>
            </div>
          </div>
        ) : (
          // Initial state - Email input form
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <p className="text-sm text-gray-600">
              Enter your email address and we&apos;ll send you a link to reset your
              password.
            </p>

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
                  autoFocus
                />
                <FormError message={errors.email?.message} />
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
                {isLoading ? "Sending..." : "Send reset link"}
              </Button>
            </div>

            {/* Back to Sign In Link */}
            <div className="text-center">
              <Link
                href="/sign-in"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to sign in
              </Link>
            </div>
          </form>
        )}
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
