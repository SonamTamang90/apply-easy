import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  subtitleLink?: {
    text: string;
    href: string;
    linkText: string;
  };
}

const AuthLayout = ({
  children,
  title,
  subtitle,
  subtitleLink,
}: AuthLayoutProps) => {
  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Link href="/">
              <Image
                width={100}
                height={100}
                alt="Your Company"
                src="/logo.svg"
                className="h-10 w-auto"
              />
            </Link>

            <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">
              {title}
            </h2>
            {(subtitle || subtitleLink) && (
              <p className="mt-2 text-sm/6 text-gray-500">
                {subtitle}
                {subtitleLink && (
                  <>
                    {subtitleLink.text}{" "}
                    <Link
                      href={subtitleLink.href}
                      className="font-semibold text-gray-900 hover:text-gray-700"
                    >
                      {subtitleLink.linkText}
                    </Link>
                  </>
                )}
              </p>
            )}
          </div>

          <div className="mt-10">{children}</div>
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

export default AuthLayout;
