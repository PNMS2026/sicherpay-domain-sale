import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ScrollText({ text, className = '', by = 'word' }: { text: string, className?: string, by?: 'word' | 'char' }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 50%']
  });

  const items = by === 'word' ? text.split(' ') : text.split('');

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {items.map((item, i) => {
        const start = (i / items.length) * 0.8;
        const end = start + 0.2;
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        const y = useTransform(scrollYProgress, [start, end], [20, 0]);
        const filter = useTransform(scrollYProgress, [start, end], ['blur(12px)', 'blur(0px)']);
        
        return (
          <motion.span 
            key={i} 
            style={{ opacity, y, filter }} 
            className={`inline-block ${by === 'word' ? 'mr-[0.25em] mb-[0.1em]' : ''}`}
          >
            {item === ' ' && by === 'char' ? '\u00A0' : item}
          </motion.span>
        );
      })}
    </div>
  );
}
