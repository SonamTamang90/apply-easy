import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import SocialAuth from "@/components/auth/SocialAuth";
import AuthLayout from "@/components/layout/AuthLayout";
import Link from "next/link";

const page = () => {
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
        <form action="#" method="POST" className="space-y-6">
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
                name="fullName"
                type="text"
                required
                autoComplete="name"
                placeholder="John Doe"
                className="focus-visible:border-primary focus-visible:ring-primary/20"
              />
            </div>
          </div>

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
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="focus-visible:border-primary focus-visible:ring-primary/20"
              />
            </div>
          </div>

          <div>
            <Label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Password
            </Label>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                placeholder="Min 8 characters"
                className="focus-visible:border-primary focus-visible:ring-primary/20"
              />
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <Checkbox id="terms" name="terms" required className="mt-1" />
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

          <div>
            <Button
              type="submit"
              size="lg"
              variant="brand"
              className="w-full"
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>

      <SocialAuth />
    </AuthLayout>
  );
};

export default page;
