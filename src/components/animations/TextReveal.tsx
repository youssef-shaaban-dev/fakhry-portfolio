"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TextReveal({ text, delay = 0, className = "" }: TextRevealProps) {
  const container = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!container.current) return;
    
    // Simple word splitting
    const words = container.current.querySelectorAll('.word');
    
    gsap.fromTo(
      words,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        delay,
        stagger: 0.05,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
        }
      }
    );
  }, { scope: container });

  return (
    <div className={`overflow-hidden ${className}`} ref={container}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word inline-block mr-[0.3em] last:mr-0 opacity-0 transform translate-y-full">
          {word}
        </span>
      ))}
    </div>
  );
}
