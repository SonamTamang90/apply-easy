import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full pt-24 pb-12 bg-background flex flex-col items-center text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <div className="mb-8 p-[2px] rounded-full bg-gradient-to-r from-[#338AFF] via-[#5A8FFF] to-[#338AFF] shadow-[0_0_12px_2px_rgba(51,138,255,0.25)] w-fit">
          <Button
            variant="outline"
            className="relative rounded-full bg-[#0A0C1B] px-4 py-2 flex items-center gap-2 text-[#338AFF] font-medium shadow-none hover:bg-[#15172A] hover:text-[#338AFF] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none overflow-hidden"
          >
            {/* Shine effect */}
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[90%] h-1/2 rounded-t-full bg-gradient-to-b from-white/40 via-white/0 to-transparent opacity-60" />
            <span className="bg-[#338AFF] text-xs text-white font-bold rounded-full px-2 py-0.5 mr-2 z-10">
              NEW
            </span>
            <span className="text-sm sm:text-base font-medium tracking-wide z-10">
              EXPLORE THE V-2.0
            </span>
          </Button>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight text-white leading-tight">
          <span className="italic font-serif">Growth</span> made
          <br className="hidden sm:block" /> easy with AI
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 mt-2 max-w-xl">
          Impactly transform your workflow with AI-powered automation for
          greater results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <Button
            size="lg"
            className="relative px-8 py-6 text-lg font-semibold bg-gradient-to-r from-[#338AFF] to-[#5A8FFF] hover:from-[#2A7AFF] hover:to-[#4A7FFF] text-white border-0 shadow-[0_8px_32px_rgba(51,138,255,0.3)] hover:shadow-[0_12px_40px_rgba(51,138,255,0.4)] transition-all duration-300 transform hover:scale-105 focus:scale-105 active:scale-95 rounded-xl overflow-hidden group"
          >
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Get started</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-semibold bg-transparent border-2 border-[#338AFF]/30 text-[#338AFF] hover:bg-[#338AFF]/10 hover:border-[#338AFF]/50 shadow-[0_4px_20px_rgba(51,138,255,0.1)] hover:shadow-[0_8px_30px_rgba(51,138,255,0.2)] transition-all duration-300 transform hover:scale-105 focus:scale-105 active:scale-95 rounded-xl backdrop-blur-sm"
          >
            Learn more
          </Button>
        </div>
        {/* <div className="flex flex-col items-center gap-2 mb-8">
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
        </div> */}
      </div>
      <div className="w-full flex justify-center mt-4">
        <div className="rounded-2xl ring-2 ring-gradient-to-r from-[#338AFF] via-[#5A8FFF] to-[#338AFF] ring-offset-2 ring-offset-background overflow-hidden shadow-2xl border-6 border-muted bg-muted/80 max-w-5xl w-full">
          <Image
            src="/assets/dashboard.avif"
            alt="ApplyEasy Dashboard Screenshot"
            width={1200}
            height={600}
            className="rounded-2xl ring-4 ring-[#338AFF] ring-offset-4 ring-offset-background w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
