import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y, opacity }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/security-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black" />
      </motion.div>

      <div className="z-10 mt-12 md:mt-24">
        <FadeIn delay={0.1}>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-white/60 mb-8 flex items-center gap-4">
            <span className="w-12 h-px bg-white/30"></span>
            Premium Domain Asset
          </p>
        </FadeIn>
        <div className="text-[14vw] leading-[0.85] font-display font-medium tracking-tighter text-white flex items-end">
          <AnimatedText text="sicherpay" by="char" delay={0.2} />
          <motion.span 
            initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ delay: 1, duration: 1 }}
            className="text-white/30 pb-[0.05em]"
          >
            .de
          </motion.span>
        </div>
      </div>

      <div className="z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-24">
        <div className="max-w-md text-lg md:text-xl text-white/60 font-light leading-relaxed">
          <AnimatedText text="The definitive domain name for the next generation of secure payments in the DACH region. A foundation of trust for your fintech brand." delay={0.6} />
        </div>
        <FadeIn delay={0.8}>
          <a href="#contact" className="group flex items-center gap-6 text-sm font-mono uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors">
            <span className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 transition-colors">
              <ArrowDownRight className="w-5 h-5" />
            </span>
            Make an Offer
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
