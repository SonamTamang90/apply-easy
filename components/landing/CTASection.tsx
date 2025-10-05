import Container from "../layout/Container";
import { Button } from "../ui/button";
import { FadeIn } from "./FadeIn";

const CTASection = () => {
  return (
    <section className="py-24">
      <FadeIn>
        <Container className="">
          <div className="w-full text-left py-32 px-24 bg-gray-950 rounded-4xl">
            <p className="mt-2 text-balance text-4xl font-bold tracking-tight text-white sm:text-4xl font-heading">
              Your career deserves better
            </p>
            <p className="mt-6 max-w-lg text-pretty text-base text-white/90">
              Stop applying manually. Start getting interviews with smart
              automation that works around the clock.
            </p>
            <Button size="lg" variant="brand" className="mt-8">
              <a href="/sign-up">Get Started</a>
            </Button>
          </div>
        </Container>
      </FadeIn>
    </section>
  );
};

export default CTASection;
