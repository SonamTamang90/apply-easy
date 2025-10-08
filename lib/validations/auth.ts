import { z } from "zod";

/**
 * Sign In Validation Schema
 *
 * Validates user credentials for login
 */
export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required"),

  rememberMe: z.boolean().optional(),
});

/**
 * Sign Up Validation Schema
 *
 * Validates new user registration with comprehensive password requirements
 */
export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must not exceed 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Full name can only contain letters, spaces, hyphens, and apostrophes"
    ),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    )
    .regex(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .regex(
      /^(?=.*\d)/,
      "Password must contain at least one number"
    )
    .regex(
      /^(?=.*[@$!%*?&#])/,
      "Password must contain at least one special character (@$!%*?&#)"
    ),

  terms: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must accept the Terms of Service and Privacy Policy",
    }),
});

/**
 * TypeScript types inferred from Zod schemas
 * These provide type safety throughout your application
 */
export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
