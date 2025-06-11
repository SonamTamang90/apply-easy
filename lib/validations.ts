import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const registerSchema = signInSchema
  .extend({
    name: z.string().min(2, { message: "Name is required" }),
    confirmPassword: z.string().min(6, { message: "Confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const coverLetterSchema = z.object({
  jobTitle: z.string().min(2, { message: "Job title is required" }),
  companyName: z.string().min(2, { message: "Company name is required" }),
  jobDescription: z.string().optional(),
  interest: z
    .string()
    .min(10, { message: "Please explain your interest (min 10 characters)" }),
  experience: z.string().min(10, {
    message: "Please describe your experience (min 10 characters)",
  }),
  fit: z.string().min(10, {
    message: "Please explain why you're a good fit (min 10 characters)",
  }),
  generated: z.string().optional(),
  versionName: z.string().min(2, { message: "Please name this version" }),
});
