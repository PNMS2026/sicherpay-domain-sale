import { motion } from 'motion/react';

export function AnimatedText({ text, className = '', delay = 0, once = false, by = 'word' }: { text: string, className?: string, delay?: number, once?: boolean, by?: 'word' | 'char' }) {
  const items = by === 'word' ? text.split(' ') : text.split('');
  
  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      variants={{
        visible: {
          transition: { staggerChildren: by === 'char' ? 0.04 : 0.08, delayChildren: delay }
        },
        hidden: {}
      }}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          className={`inline-block ${by === 'word' ? 'mr-[0.25em] mb-[0.1em]' : ''}`}
          variants={{
            hidden: { opacity: 0, y: 40, filter: 'blur(10px)', rotateX: 30, scale: 0.9 },
            visible: { 
              opacity: 1, 
              y: 0, 
              filter: 'blur(0px)', 
              rotateX: 0,
              scale: 1,
              transition: { type: 'spring', damping: 14, stiffness: 100 }
            }
          }}
        >
          {item === ' ' && by === 'char' ? '\u00A0' : item}
        </motion.span>
      ))}
    </motion.div>
  );
}
