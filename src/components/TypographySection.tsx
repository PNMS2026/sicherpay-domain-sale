import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeIn } from './FadeIn';
import { ScrollText } from './ScrollText';

export function TypographySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'start 40%']
  });
  
  const y1 = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const o1 = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const f1 = useTransform(scrollYProgress, [0, 0.4], ['blur(20px)', 'blur(0px)']);

  const y2 = useTransform(scrollYProgress, [0.2, 0.6], [100, 0]);
  const o2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const f2 = useTransform(scrollYProgress, [0.2, 0.6], ['blur(20px)', 'blur(0px)']);

  const y3 = useTransform(scrollYProgress, [0.4, 0.8], [100, 0]);
  const o3 = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);
  const f3 = useTransform(scrollYProgress, [0.4, 0.8], ['blur(20px)', 'blur(0px)']);

  return (
    <section ref={ref} className="py-12 md:py-20 px-6 md:px-12 lg:px-24 relative z-20 text-white backdrop-blur-md bg-black/30 rounded-t-[3rem] border-t border-x border-white/10 mx-4 md:mx-8 lg:mx-12 mt-12 mb-0">
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[12vw] md:text-[6vw] leading-[0.85] font-display font-medium tracking-tighter uppercase flex flex-col text-white">
            <motion.span style={{ y: y1, opacity: o1, filter: f1 }}>Secure.</motion.span>
            <motion.span style={{ y: y2, opacity: o2, filter: f2 }}>Seamless.</motion.span>
            <motion.span style={{ y: y3, opacity: o3, filter: f3 }}>Sicher.</motion.span>
          </h2>
        </div>
        
        <div className="max-w-2xl">
          <div className="text-2xl md:text-3xl font-light leading-snug text-white/80">
            <FadeIn>
              The semantic weight of the word 'Sicher' combined with 'Pay' creates an unshakeable foundation for any financial institution operating in Germany, Austria, or Switzerland.
            </FadeIn>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <FadeIn delay={0.2}>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-white/40">
                Market Potential
              </p>
              <div className="mt-4 text-lg font-light text-white/70">
                Germany is the engine of the European economy. Entering this market requires linguistic precision and absolute reliability. SicherPay.de delivers both instantly.
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
