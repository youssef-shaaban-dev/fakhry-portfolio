"use client";

import { useTranslations } from 'next-intl';
import { WorkCarousel } from '@/components/ui/WorkCarousel';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { JourneySection } from '@/components/sections/JourneySection';
import { ConnectSection } from '@/components/sections/ConnectSection';

export default function Home() {
  const t = useTranslations('Hero');

  return (
    <div className="w-full relative">
      <HeroSection />
      
      <AboutSection />
      
      <SkillsSection />
      
      <div id="projects" className="pt-20 -mt-20">
        {/* Video Work Section */}
        <WorkCarousel 
          title="Video Projects"
          subtitle="Cinematic AI-generated video ads and visual content crafted for global brands."
        items={[
          {
            id: "v1",
            title: "JETOUR T2 Car Showcase",
            tags: ["AI VIDEO", "RunwayML"],
            image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200"
          },
          {
            id: "v2",
            title: "RAYCON VIDEO AD BY AI",
            tags: ["AI VIDEO", "Premiere"],
            image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1200"
          },
          {
            id: "v3",
            title: "BMW Video AD By AI",
            tags: ["AI VIDEO", "Kling AI"],
            image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200"
          }
        ]}
      />
      </div>

      {/* Data Work Section */}
      <div id="data-projects" className="pt-20 -mt-20">
        <WorkCarousel 
          title="Data Analytics"
          subtitle="Complex data pipelines, visualizations, and intelligent systems."
          items={[
            {
              id: "d1",
              title: "E-Commerce Pipeline Analytics",
              tags: ["PYTHON", "POWER BI"],
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
            },
            {
              id: "d2",
              title: "Predictive Sales Modeling",
              tags: ["MACHINE LEARNING", "SQL"],
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
            },
            {
              id: "d3",
              title: "Real-time Operations Dashboard",
              tags: ["TABLEAU", "DATA WAREHOUSING"],
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
            }
          ]}
        />
      </div>
      
      
      <ConnectSection />

      <JourneySection />
    </div>
  );
}
