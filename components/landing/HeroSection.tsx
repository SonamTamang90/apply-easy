import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FadeIn, FadeInStagger } from "./FadeIn";

function AvatarGroup() {
  return (
    <div className="flex flex-col items-start gap-3 mt-8">
      <div className="flex -space-x-2">
        <Avatar className="w-11 h-11 border-2 border-white">
          <AvatarImage
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            alt="User 1"
          />
        </Avatar>
        <Avatar className="w-11 h-11 border-2 border-white">
          <AvatarImage
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
            alt="User 2"
          />
        </Avatar>
        <Avatar className="w-11 h-11 border-2 border-white">
          <AvatarImage
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            alt="User 3"
          />
        </Avatar>
        <Avatar className="w-11 h-11 border-2 border-white">
          <AvatarImage
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
            alt="User 4"
          />
        </Avatar>
        <Avatar className="w-11 h-11 border-2 border-white bg-black text-white">
          <AvatarFallback className="bg-black text-white text-sm font-medium">
            100+
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="text-base text-muted-foreground">
        <span className="font-medium">100+ job seekers</span> already landed
        their dream jobs
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="w-full min-h-full flex items-center py-14 bg-white">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-14">
          <FadeIn className="">
            <h1 className="text-5xl sm:text-6xl leading-[74px] font-heading font-semibold text-black mb-6">
              Simplify your <br />
              <span className="bg-brand/25 px-2">Career</span> search
            </h1>
            <p className="text-base text-muted-foreground max-w-xl">
              Streamline your career search with AI-powered applications. Find,
              apply, and track your dream job opportunities effortlessly.
            </p>
          </FadeIn>
          <FadeInStagger className="space-y-8">
            <FadeIn className="flex flex-col min-[480px]:flex-row gap-4">
              <Link href="/sign-up">
                <Button size="lg" variant="brand">
                  Get Started Free
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button variant="outline" size="lg">
                  See How It Works
                </Button>
              </Link>
            </FadeIn>
            <FadeIn>
              <AvatarGroup />
            </FadeIn>
          </FadeInStagger>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/hero.png"
              alt="Professional working on laptop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
