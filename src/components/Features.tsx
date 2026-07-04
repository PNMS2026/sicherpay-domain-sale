import { Shield, Globe, Lock, TrendingUp } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ScrollText } from './ScrollText';

const features = [
  {
    icon: Shield,
    title: "Immediate Trust",
    description: "'Sicher' translates to secure in German. Instantly communicate safety and reliability to your users before they even visit."
  },
  {
    icon: Globe,
    title: "DACH Focus",
    description: "The .de extension provides instant credibility and local relevance in Europe's largest and most robust economy."
  },
  {
    icon: Lock,
    title: "Fintech Ready",
    description: "Perfectly positioned for payment gateways, crypto exchanges, neo-banks, or enterprise security solutions."
  },
  {
    icon: TrendingUp,
    title: "Brand Authority",
    description: "A highly brandable, intuitive, two-syllable asset that commands market respect and lowers customer acquisition costs."
  }
];

export function Features() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 relative backdrop-blur-md bg-black/30 rounded-[3rem] border border-white/10 mx-4 md:mx-8 lg:mx-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12">
        <div className="md:col-span-2 flex flex-col md:flex-row gap-12 justify-between">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-white leading-tight">
              <AnimatedText text="Why acquire" />
              <AnimatedText text="this domain?" className="text-white/40" delay={0.2} />
            </h2>
          </div>
          <div className="max-w-md pt-4 text-xl text-white/60 font-light leading-relaxed">
            <ScrollText text="In the financial sector, trust is your most valuable currency. The right domain establishes credibility from the very first interaction." />
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={0.2 + (i * 0.1)} className="border-t border-white/10 pt-8 group">
              <feature.icon className="w-8 h-8 text-white/40 mb-8 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
              <h3 className="text-2xl font-display text-white mb-4"><AnimatedText text={feature.title} delay={0.3 + (i * 0.1)} /></h3>
              <p className="text-white/50 font-light leading-relaxed">
                {feature.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
