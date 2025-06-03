import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full pt-24 pb-12 bg-background flex flex-col items-center text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight text-white leading-tight">
          <span className="italic font-serif">Growth</span> made
          <br className="hidden sm:block" /> easy with AI
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 mt-2 max-w-xl">
          The AI-powered solution to automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold shadow-lg"
          >
            Get started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-semibold"
          >
            Learn more
          </Button>
        </div>
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="flex -space-x-3 justify-center">
            <Image
              src="/assets/user1.jpg"
              alt="User 1"
              width={40}
              height={40}
              className="rounded-full border-2 border-background"
            />
            <Image
              src="/assets/user2.jpg"
              alt="User 2"
              width={40}
              height={40}
              className="rounded-full border-2 border-background"
            />
            <Image
              src="/assets/user3.jpg"
              alt="User 3"
              width={40}
              height={40}
              className="rounded-full border-2 border-background"
            />
            <Image
              src="/assets/user4.jpg"
              alt="User 4"
              width={40}
              height={40}
              className="rounded-full border-2 border-background"
            />
            <Image
              src="/assets/user5.jpg"
              alt="User 5"
              width={40}
              height={40}
              className="rounded-full border-2 border-background"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="font-semibold">5.0</span>
            <span>From 8,000+ users</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-muted bg-muted/80 max-w-5xl w-full">
          <Image
            src="/assets/dashboard-screenshot.png"
            alt="ApplyEasy Dashboard Screenshot"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
