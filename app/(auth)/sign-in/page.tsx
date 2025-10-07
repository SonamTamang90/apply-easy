import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import SocialAuth from "@/components/auth/SocialAuth";

const page = () => {
  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Image
              width={100}
              height={100}
              alt="Your Company"
              src="/logo.svg"
              className="h-10 w-auto"
            />
            <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm/6 text-gray-500">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold text-gray-900 hover:text-gray-700"
              >
                Start a 14 day free trial
              </a>
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form action="#" method="POST" className="space-y-6">
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
                      autoComplete="current-password"
                      className="focus-visible:border-primary focus-visible:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <Checkbox id="remember-me" name="remember-me" />
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

                <div>
                  <Button
                    type="submit"
                    size="lg"
                    variant="brand"
                    className="w-full"
                  >
                    Sign in
                  </Button>
                </div>
              </form>
            </div>

            <SocialAuth />
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:flex lg:items-center lg:justify-center lg:p-6">
        <div className="relative w-full h-full">
          <Image
            alt=""
            src="/auth-bg.png"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
