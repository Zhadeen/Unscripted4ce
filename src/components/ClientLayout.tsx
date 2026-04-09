"use client";

import { useState, useCallback, Suspense, useEffect } from "react";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  // Optionally reset scroll on route change if needed, 
  // though Lenis usually handles this.
  
  return (
    <>
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}

      <CustomCursor />

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
        }}
      >
        <SmoothScroll>
          <Navigation />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    </>
  );
}
