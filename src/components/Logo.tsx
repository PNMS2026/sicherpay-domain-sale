import { ShieldCheck } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
        <div className="absolute inset-[1px] bg-black/60 rounded-[11px] backdrop-blur-sm" />
        <ShieldCheck className="relative w-5 h-5 text-white" />
      </div>
      <div className="font-display font-medium text-2xl tracking-tight text-white flex items-center">
        sicherpay<span className="text-white/40 text-xl ml-0.5">.de</span>
      </div>
    </div>
  );
}
