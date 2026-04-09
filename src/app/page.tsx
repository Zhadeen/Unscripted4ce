"use client";

import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";

const ProjectShowcase = lazy(() => import("@/components/ProjectShowcase"));
const MarqueeSection = lazy(() => import("@/components/MarqueeSection"));
const VideoSection = lazy(() => import("@/components/VideoSection"));
const TeamSection = lazy(() => import("@/components/TeamSection"));

function SectionFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />

      <Suspense fallback={<SectionFallback />}>
        <ProjectShowcase />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <MarqueeSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <VideoSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <TeamSection />
      </Suspense>
    </div>
  );
}
