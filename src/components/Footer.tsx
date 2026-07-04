import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-white/10 relative z-20 backdrop-blur-md bg-black/30 rounded-b-[3rem] border-b border-x mx-4 md:mx-8 lg:mx-12 mb-12 text-white flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40 font-light">
      <Logo />
      <p>© {new Date().getFullYear()} All rights reserved. SicherPay is a premium domain property.</p>
      <div className="flex gap-8">
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        <a href="https://www.linkedin.com/in/panesh-m-5ab603142/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
      </div>
    </footer>
  );
}
