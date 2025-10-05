import clsx from "clsx";

import Container from "../layout/Container";
import { FadeIn } from "./FadeIn";

const SectionIntro = ({
  title,
  children,
  smaller = false,
  invert = false,
  ...props
}: Omit<
  React.ComponentPropsWithoutRef<typeof Container>,
  "title" | "children"
> & {
  title: string;
  children?: React.ReactNode;
  smaller?: boolean;
  invert?: boolean;
}) => {
  return (
    <Container {...props}>
      <FadeIn className="max-w-4xl">
        <h2
          className={clsx(
            "font-heading tracking-tight [text-wrap:balance] mb-6",
            smaller
              ? "text-2xl font-semibold"
              : "text-3xl md:text-[40px] font-bold",
            invert ? "text-white" : "text-gray-900"
          )}
        >
          {title}
        </h2>
        {children && (
          <div
            className={clsx(
              "text-base max-w-lg",
              invert ? "text-neutral-300" : "text-gray-700"
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  );
};

export default SectionIntro;
