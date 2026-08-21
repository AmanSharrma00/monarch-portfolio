import { Background } from './Background';
import { capabilities } from '@/content/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { Layers, BrainCircuit, Database, Cpu, Cloud, Binary, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { scrollToSection } from '@/lib/navigation';

const iconMap: Record<string, LucideIcon> = {
  Layers,
  BrainCircuit,
  Database,
  Cpu,
  Cloud,
  Binary,
};

export function Capabilities() {
  const { ref, visible } = useReveal();

  return (
    <section id="stack" className="relative py-24 md:py-32 overflow-hidden">
      <Background variant="skills" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="section-label">// ENGINEERING CAPABILITIES</p>
        </div>

        <h2 className={`section-title mb-4 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          What I Build With
        </h2>

        <p className={`max-w-2xl text-ink-300 text-base leading-relaxed mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Not a wall of logos. Each capability connects technologies to real projects I've shipped or am actively building.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon] ?? Layers;
            return (
              <div
                key={cap.title}
                className={`glass-card p-6 transition-all duration-700 hover:border-monarch-400/30 hover:bg-ink-800/40 group ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-monarch-500/10 text-monarch-400 group-hover:bg-monarch-500/20 group-hover:scale-110 transition-all">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-ink-50 mb-2">{cap.title}</h3>
                <p className="text-sm text-ink-300 leading-relaxed mb-4">{cap.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cap.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-ink-800/60 border border-ink-700/40 font-mono text-[10px] text-ink-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {cap.project !== 'Foundational' && (
                  <button
                    onClick={() => scrollToSection('work')}
                    className="flex items-center gap-1.5 text-xs font-medium text-monarch-400 hover:text-monarch-300 transition-colors group/link"
                  >
                    <span className="font-mono uppercase tracking-wider">→ {cap.project}</span>
                    <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
