"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { signInSchema, registerSchema } from "@/lib/validations";

interface AuthFormProps {
  mode: "sign-in" | "register";
}

type SignInValues = z.infer<typeof signInSchema>;
type RegisterValues = z.infer<typeof registerSchema>;

type FormValues = SignInValues | RegisterValues;

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const router = useRouter();
  const [supabaseError, setSupabaseError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(mode === "register" ? registerSchema : signInSchema),
    defaultValues:
      mode === "register"
        ? { name: "", email: "", password: "", confirmPassword: "" }
        : { email: "", password: "" },
  });

  const handleSubmit = async (values: FormValues) => {
    setSupabaseError(null);
    setLoading(true);
    try {
      if (mode === "sign-in") {
        const { error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });
        if (error) setSupabaseError(error.message);
        else router.push("/dashboard");
      } else {
        const { error } = await supabase.auth.signUp({
          email: (values as RegisterValues).email,
          password: (values as RegisterValues).password,
          options: { data: { name: (values as RegisterValues).name } },
        });
        if (error) setSupabaseError(error.message);
        else router.push("/dashboard");
      }
    } catch (err: unknown) {
      if (err instanceof Error) setSupabaseError(err.message);
      else setSupabaseError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSocial = async (provider: "google" | "github") => {
    setSupabaseError(null);
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo: `${window.location.origin}/dashboard` },
      });
      if (error) setSupabaseError(error.message);
      // Supabase will redirect on success
    } catch (err: unknown) {
      if (err instanceof Error) setSupabaseError(err.message);
      else setSupabaseError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 w-full max-w-md mx-auto"
        noValidate
      >
        {/* Social Login Buttons */}
        <div className="space-y-2">
          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center gap-2 justify-center"
            onClick={() => handleSocial("google")}
            disabled={loading}
          >
            <Image
              src="/icons/google.svg"
              alt="Google"
              width={20}
              height={20}
            />{" "}
            Continue with Google
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center gap-2 justify-center"
            onClick={() => handleSocial("github")}
            disabled={loading}
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={20}
              height={20}
            />{" "}
            Continue with GitHub
          </Button>
        </div>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>
        {supabaseError && (
          <p className="text-red-500 text-sm text-center">{supabaseError}</p>
        )}
        {mode === "register" && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    disabled={loading}
                    autoComplete="name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  type="email"
                  {...field}
                  disabled={loading}
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
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
                <Input
                  placeholder="Password"
                  type="password"
                  {...field}
                  disabled={loading}
                  autoComplete={
                    mode === "register" ? "new-password" : "current-password"
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {mode === "register" && (
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    {...field}
                    disabled={loading}
                    autoComplete="new-password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Loading..." : mode === "sign-in" ? "Sign In" : "Register"}
        </Button>
        <div className="text-center text-sm mt-2">
          {mode === "sign-in" ? (
            <span>
              Not a member?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </span>
          ) : (
            <span>
              Already a member?{" "}
              <Link href="/sign-in" className="text-blue-600 hover:underline">
                Sign In
              </Link>
            </span>
          )}
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
