import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import { Button } from "@/components/ui/button";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { FadeIn, FadeInStagger, FadeInImage } from "./FadeIn";

const HERO_USERS = [
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    alt: "User 1",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    alt: "User 2",
  },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    alt: "User 3",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    alt: "User 4",
  },
];

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
            <FadeIn className="flex flex-col min-[430px]:flex-row gap-4">
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
              <AvatarGroup
                users={HERO_USERS}
                max={4}
                countText="100+"
                description={
                  <>
                    <span className="font-medium">100+ job seekers</span> already
                    landed their dream jobs
                  </>
                }
              />
            </FadeIn>
          </FadeInStagger>
        </div>

        <FadeInImage className="relative">
          <div className="aspect-[4/5] relative rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src="/hero.png"
              alt="Professional working on laptop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeInImage>
      </Container>
    </section>
  );
}
