/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { TypographySection } from './components/TypographySection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { KnowSeller } from './components/KnowSeller';
import { Parallax } from './components/Parallax';

import { Background3D } from './components/Background3D';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
    });

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Navbar />
      <main className="relative z-10 flex flex-col items-center">
        <div className="w-full bg-black relative z-20">
          <Hero />
        </div>
        
        {/* Container for the rest of the page with the 3D background */}
        <div className="relative w-full z-0">
          {/* Sticky 3D Background */}
          <div className="sticky top-0 h-screen w-full pointer-events-none z-0">
            <Background3D />
          </div>

          {/* Content layered on top */}
          <div className="relative z-10 w-full -mt-[100vh]">
            <div className="h-[10vh] md:h-[20vh] w-full" />
            
            <Parallax offset={100} className="w-full">
              <Features />
            </Parallax>



            <Parallax offset={80} className="w-full">
              <Contact />
            </Parallax>

            <div className="w-full relative overflow-hidden">
              <div className="relative z-10 w-full">
                <TypographySection />
                <KnowSeller />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
