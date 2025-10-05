"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeInStaggerContext = createContext(false);
const viewport = { once: true, margin: "0px 0px -200px" };

export const FadeIn = (
  props: React.ComponentPropsWithoutRef<typeof motion.div>
) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
};

export const FadeInStagger = ({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
};

export const FadeInImage = (
  props: React.ComponentPropsWithoutRef<typeof motion.div>
) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        clipPath: shouldReduceMotion ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 80% 0%)",
      }}
      whileInView={{
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
      }}
      viewport={viewport}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      }}
      {...props}
    />
  );
};
