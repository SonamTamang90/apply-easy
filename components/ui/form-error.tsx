import { cn } from "@/lib/utils";

interface FormErrorProps {
  message?: string;
  className?: string;
}

/**
 * FormError Component
 *
 * Displays validation error messages with consistent styling
 * Only renders when a message is provided
 *
 * @param message - The error message to display
 * @param className - Optional additional CSS classes
 */
export function FormError({ message, className }: FormErrorProps) {
  if (!message) return null;

  return (
    <p
      className={cn(
        "text-sm font-medium text-red-600 mt-1.5",
        className
      )}
      role="alert"
      aria-live="polite"
    >
      {message}
    </p>
  );
}
