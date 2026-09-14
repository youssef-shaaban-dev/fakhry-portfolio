"use client";

import { useState } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import clsx from "clsx";

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
  const [activeIndex, setActiveIndex] = useState(1); // Default to middle item if 3 items

  return (
    <section className="w-full py-32 px-6 lg:px-12 relative z-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full">
        <FadeUp>
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-bold font-heading mb-4">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? "text-[var(--accent)]" : ""}>{word} </span>
              ))}
            </h2>
            <p className="text-[var(--foreground)]/60 max-w-2xl text-lg">
              {subtitle}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2} y={50}>
          <div className="relative w-full h-[500px] flex items-center justify-center mt-12 perspective-[2000px]">
            {items.map((item, index) => {
              // Calculate relative position to active index
              const offset = index - activeIndex;
              const isCenter = offset === 0;
              const isLeft = offset < 0;
              const isRight = offset > 0;
              
              // Base z-index: center is highest
              const zIndex = isCenter ? 30 : 20 - Math.abs(offset);
              
              // Translation and rotation based on position
              // We'll hardcode 3 main positions for simplicity, but it handles up to 5 decently
              let transform = "";
              let opacity = 1;
              
              if (isCenter) {
                transform = "translateX(0) scale(1) rotateY(0deg)";
                opacity = 1;
              } else if (isLeft) {
                transform = `translateX(-${40 + Math.abs(offset) * 10}%) scale(0.85) rotateY(15deg)`;
                opacity = 0.5;
              } else if (isRight) {
                transform = `translateX(${40 + Math.abs(offset) * 10}%) scale(0.85) rotateY(-15deg)`;
                opacity = 0.5;
              }

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className="absolute w-[70%] max-w-[700px] aspect-[16/9] transition-all duration-700 ease-out cursor-pointer rounded-2xl overflow-hidden shadow-2xl border border-[var(--foreground)]/10 bg-[#16161d]"
                  style={{
                    transform,
                    zIndex,
                    opacity,
                  }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-[75%] object-cover" />
                  
                  {/* Card Content Footer */}
                  <div className="absolute bottom-0 left-0 w-full h-[25%] bg-[#1a1a24] p-6 flex flex-col justify-center border-t border-[var(--foreground)]/10">
                    <h3 className="text-xl font-bold font-heading text-white mb-2">{item.title}</h3>
                    <div className="flex gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-black/40 border border-[var(--foreground)]/10 rounded-full text-[10px] font-bold text-[var(--foreground)]/70 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Overlay for non-active items */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-black/50 transition-opacity hover:bg-black/30"></div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Custom pagination / slider track */}
          <div className="mt-16 max-w-md mx-auto h-1 bg-[var(--foreground)]/10 rounded-full overflow-hidden relative">
            <div 
              className="absolute top-0 bottom-0 bg-[var(--accent)] transition-all duration-500 rounded-full"
              style={{
                left: `${(activeIndex / Math.max(1, items.length - 1)) * 80}%`,
                width: '20%'
              }}
            ></div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
