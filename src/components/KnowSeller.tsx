import { FadeIn } from './FadeIn';
import { Briefcase, Trophy, Globe2 } from 'lucide-react';

export function KnowSeller() {
  return (
    <section id="seller" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 relative z-10 text-white backdrop-blur-md bg-black/30 rounded-[3rem] border border-white/10 mx-4 md:mx-8 lg:mx-12 mb-12 overflow-hidden">

      <div className="relative max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-end">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-black/50 overflow-hidden shrink-0 shadow-2xl relative bg-black">
              {/* NOTE: Put your photo in the public folder as profile.jpg */}
              <img 
                src="/profile.png" 
                alt="Panesh Mondal" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Panesh+Mondal&background=0D8ABC&color=fff&size=256';
                }}
              />
            </div>
            
            <div className="flex-1 pb-2">
              <h2 className="text-4xl md:text-5xl font-display font-medium flex items-center gap-3">
                Panesh Mondal
                <span className="text-2xl" title="India">🇮🇳</span>
              </h2>
              <div className="mt-3 text-lg text-white/70 flex flex-wrap items-center gap-x-3 gap-y-2 font-light">
                <span className="flex items-center gap-1.5 font-medium text-white/90">
                  <Briefcase className="w-4 h-4" /> Block Chain Developer
                </span>
                <span className="hidden md:inline text-white/30">•</span>
                <span>AI Automation Engineer</span>
                <span className="hidden md:inline text-white/30">•</span>
                <span>Domain Investor</span>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-16">
          <FadeIn delay={0.2} className="md:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full hover:bg-white/10 transition-colors">
              <Trophy className="w-12 h-12 text-yellow-500/80 mb-4" />
              <div className="text-5xl font-display font-medium text-white mb-2">75+</div>
              <div className="text-white/50 uppercase tracking-widest text-xs font-mono">Total Domains Sold</div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3} className="md:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 h-full">
              <h3 className="text-sm uppercase tracking-widest text-white/50 font-mono mb-6 flex items-center gap-3">
                <Globe2 className="w-5 h-5" /> Notable Portfolio Sales
              </h3>
              
              <div className="space-y-3">
                {[
                  { domain: 'Onlinetools.com', price: '$12,499', platform: 'Afternic', date: '21/09/2019' },
                  { domain: 'devs.com', price: '$9,657', platform: 'Afternic', date: '12/04/2024' },
                  { domain: 'devs.dev', price: '$5,372', platform: 'Sedo', date: '05/01/2025' },
                  { domain: 'avroai.com', price: '$1,500', platform: 'Afternic', date: '21/08/2025' }
                ].map((sale, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="text-lg font-medium text-white tracking-wide">{sale.domain}</div>
                      <div className="text-green-400 font-medium bg-green-400/10 px-2 py-0.5 rounded text-sm">{sale.price}</div>
                    </div>
                    <div className="flex items-center gap-3 mt-2 sm:mt-0 text-sm text-white/40 font-light">
                      <span>{sale.platform}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{sale.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
