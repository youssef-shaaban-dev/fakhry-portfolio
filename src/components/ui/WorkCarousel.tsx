"use client";

import { useEffect, useRef } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface WorkItem {
  id: string;
  title: string;
  tags: string[];
  image: string;
}

interface WorkCarouselProps {
  title: string;
  subtitle: string;
  items: WorkItem[];
  accentColor?: string;
}

export function WorkCarousel({ title, subtitle, items, accentColor = "var(--accent)" }: WorkCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !cardsWrapperRef.current) return;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>('.work-card');
        
        // Initialize cards 3D layout
        gsap.set(cards, {
          xPercent: (i) => i * 85, // Space them out horizontally 85% of their width
          rotateY: (i) => i === 0 ? 0 : -20, // First is flat, others are tilted backwards
          scale: (i) => i === 0 ? 1 : 0.75, // First is full size
          opacity: (i) => i === 0 ? 1 : 0.4, // First is fully opaque
          zIndex: (i) => 50 - i
        });

        // Create a scrub timeline tied to the pinned section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center", 
            end: `+=${items.length * 800}`, // Scroll distance dictates animation duration
            pin: true,
            scrub: 1, // Smooth scrubbing
          }
        });

        // For each step (transitioning from card i to i+1)
        for (let i = 0; i < items.length - 1; i++) {
          // We move ALL cards left by 85%
          tl.to(cards, {
            xPercent: `-=${85}`,
            ease: "none",
            duration: 1
          }, i); // At time 'i'
          
          // The card coming into view (i + 1)
          tl.to(cards[i + 1], {
            rotateY: 0,
            scale: 1,
            opacity: 1,
            zIndex: 50, // Bring to front
            ease: "power2.inOut",
            duration: 1
          }, i);

          // The card leaving view to the left (i)
          tl.to(cards[i], {
            rotateY: 20, // Tilt it the other way
            scale: 0.75,
            opacity: 0.4,
            zIndex: 40 - i, // Send to back
            ease: "power2.inOut",
            duration: 1
          }, i);
        }
      });
      
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, [items.length]);

  return (
    <section ref={containerRef} className="w-full md:h-screen flex flex-col justify-center px-0 md:px-6 lg:px-12 relative z-10 overflow-hidden bg-[var(--background)] py-20 md:py-0">
      <div className="max-w-[1600px] mx-auto w-full flex flex-col items-center">
        <FadeUp>
          <div className="mb-12 text-center px-6 md:px-0">
            <h2 className="text-5xl md:text-7xl font-bold font-heading mb-4">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? "text-[var(--accent)]" : ""}>{word} </span>
              ))}
            </h2>
            <p className="text-[var(--foreground)]/60 max-w-2xl mx-auto text-lg">
              {subtitle}
            </p>
          </div>
        </FadeUp>

        {/* 3D Carousel Wrapper (Desktop) / Native Scroll Snapping (Mobile) */}
        <div 
          ref={cardsWrapperRef} 
          className="relative w-full h-[450px] md:h-[500px] mt-4 md:mt-8 flex md:items-center md:justify-center md:perspective-[2000px] overflow-x-auto overflow-y-hidden snap-x snap-mandatory md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 md:px-0 gap-6 md:gap-0"
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className="work-card flex-none relative md:absolute w-[85vw] md:w-[80%] max-w-[800px] h-[400px] md:h-auto md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-[var(--foreground)]/10 bg-card-hover snap-center"
              style={{ transformOrigin: "center center" }}
            >
              <img src={item.image} alt={item.title} className="w-full h-[65%] md:h-[75%] object-cover" />
              
              <div className="absolute bottom-0 left-0 w-full h-[35%] md:h-[25%] bg-panel p-5 md:p-6 flex flex-col justify-center border-t border-[var(--foreground)]/10">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-[var(--foreground)] mb-2">{item.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black/40 border border-[var(--foreground)]/10 rounded-full text-[10px] md:text-xs font-bold text-[var(--foreground)]/70 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="absolute inset-0 bg-black/30 pointer-events-none mix-blend-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
