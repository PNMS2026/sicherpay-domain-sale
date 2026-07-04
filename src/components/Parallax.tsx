import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function Parallax({ children, offset = 50, className = '' }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const y = useTransform(smoothProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
