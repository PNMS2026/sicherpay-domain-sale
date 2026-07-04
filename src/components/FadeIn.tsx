import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
}

export function FadeIn({ children, delay = 0, className = '', direction = 'up', once = false }: FadeInProps) {
  const yOffset = direction === 'up' ? 60 : direction === 'down' ? -60 : 0;
  const xOffset = direction === 'left' ? 60 : direction === 'right' ? -60 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset, filter: 'blur(10px)', scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once, margin: "-10%" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
