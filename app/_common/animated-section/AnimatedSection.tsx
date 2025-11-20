"use client";
import { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface AnimatedSectionProps {
  children: ReactNode;
  animationType?: "fade-up";
  delay?: 1 | 2 | 3 | 4;
  className?: string;
}

export default function AnimatedSection({
  children,
  animationType = "fade-up",
  delay,
  className = "",
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView();

  const delayClass = delay ? `${animationType}-delay-${delay}` : "";
  const animateClass = isInView ? "animate" : "";

  return (
    <div
      ref={ref}
      className={`${animationType} ${delayClass} ${animateClass} ${className}`}
    >
      {children}
    </div>
  );
}
