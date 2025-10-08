"use client";

import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/ui/form-error";
import AuthLayout from "@/components/layout/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  resetPasswordSchema,
  type ResetPasswordFormData,
} from "@/lib/validations/auth";
import { useState, useEffect, Suspense } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

const ResetPasswordContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [isLoading, setIsLoading] = useState(false);
  const [isValidatingToken, setIsValidatingToken] = useState(true);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);

  // Initialize React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onBlur",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // Watch password for hint display
  const password = watch("password");

  // Validate token on mount
  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setIsTokenValid(false);
        setIsValidatingToken(false);
        return;
      }

      try {
        // TODO: Replace with actual token validation API call
        console.log("Validating token:", token);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // For demo purposes, accept any token
        setIsTokenValid(true);
      } catch (error) {
        setIsTokenValid(false);
        toast.error("Invalid or expired reset link");
        console.error("Token validation error:", error);
      } finally {
        setIsValidatingToken(false);
      }
    };

    validateToken();
  }, [token]);

  // Form submission handler
  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      setIsLoading(true);

      // TODO: Replace with actual password reset API call
      console.log("Resetting password with token:", token);
      console.log("New password:", data.password);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setPasswordReset(true);
      toast.success("Password reset successfully!");

      // Redirect to sign in after 3 seconds
      setTimeout(() => {
        router.push("/sign-in");
      }, 3000);
    } catch (error) {
      toast.error("Failed to reset password. Please try again.");
      console.error("Reset password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Validating token state
  if (isValidatingToken) {
    return (
      <AuthLayout title="Verifying reset link...">
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-gray-600">Please wait...</p>
        </div>
      </AuthLayout>
    );
  }

  // Invalid or expired token state
  if (!isTokenValid) {
    return (
      <AuthLayout title="Invalid reset link">
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="rounded-full bg-red-100 p-3">
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-gray-900">
                This password reset link is invalid or has expired
              </p>
              <p className="text-sm text-gray-600">
                Reset links expire after 15 minutes for security reasons.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              type="button"
              size="lg"
              variant="brand"
              className="w-full"
              onClick={() => router.push("/forgot-password")}
            >
              Request new reset link
            </Button>

            <Link
              href="/sign-in"
              className="block text-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Back to sign in
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  // Password reset success state
  if (passwordReset) {
    return (
      <AuthLayout title="Password reset successful!">
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-gray-900">
                Your password has been reset successfully
              </p>
              <p className="text-sm text-gray-600">
                You can now sign in with your new password.
              </p>
            </div>
          </div>

          <Button
            type="button"
            size="lg"
            variant="brand"
            className="w-full"
            onClick={() => router.push("/sign-in")}
          >
            Continue to sign in
          </Button>
        </div>
      </AuthLayout>
    );
  }

  // Main reset password form
  return (
    <AuthLayout
      title="Reset your password"
      subtitleLink={{
        text: "Remember your password?",
        href: "/sign-in",
        linkText: "Sign in",
      }}
    >
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <p className="text-sm text-gray-600">
            Enter your new password below. Make sure it&apos;s strong and secure.
          </p>

          {/* New Password Field */}
          <div>
            <Label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              New password
            </Label>
            <div className="mt-2">
              <PasswordInput
                id="password"
                autoComplete="new-password"
                placeholder="Min 8 characters"
                {...register("password")}
                className="focus-visible:border-primary focus-visible:ring-primary/20 placeholder:text-sm"
                aria-invalid={errors.password ? "true" : "false"}
                autoFocus
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

          {/* Confirm Password Field */}
          <div>
            <Label
              htmlFor="confirmPassword"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Confirm new password
            </Label>
            <div className="mt-2">
              <PasswordInput
                id="confirmPassword"
                autoComplete="new-password"
                placeholder="Re-enter your password"
                {...register("confirmPassword")}
                className="focus-visible:border-primary focus-visible:ring-primary/20 placeholder:text-sm"
                aria-invalid={errors.confirmPassword ? "true" : "false"}
              />
              <FormError message={errors.confirmPassword?.message} />
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
              {isLoading ? "Resetting password..." : "Reset password"}
            </Button>
          </div>

          {/* Back to Sign In Link */}
          <div className="text-center">
            <Link
              href="/sign-in"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Back to sign in
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

const ResetPasswordPage = () => {
  return (
    <Suspense
      fallback={
        <AuthLayout title="Loading...">
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-gray-600">Please wait...</p>
          </div>
        </AuthLayout>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
};

export default ResetPasswordPage;
