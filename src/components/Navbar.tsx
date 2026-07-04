import { motion } from 'motion/react';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 py-8 text-white"
    >
      <Logo />
      <a 
        href="#contact"
        className="text-xs font-mono uppercase tracking-[0.2em] hover:text-white/60 transition-colors"
      >
        Inquire
      </a>
    </motion.nav>
  );
}
