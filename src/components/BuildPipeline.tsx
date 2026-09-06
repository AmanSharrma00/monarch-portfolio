import { buildPipeline } from '@/content/portfolio';
import { useReveal } from '@/hooks/useReveal';

export function BuildPipeline() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        <div className={`mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="section-label">// BUILD PIPELINE</p>
        </div>

        <h2 className={`section-title mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          How I Ship
        </h2>

        {/* Pipeline flow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {buildPipeline.map((step, i) => (
            <div
              key={step.phase}
              className={`group relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="glass-card p-4 h-full hover:border-monarch-400/20 hover:bg-ink-800/40 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] text-ink-500">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-sm font-semibold text-ink-50">{step.phase}</span>
                </div>
                <p className="text-xs text-ink-300 leading-relaxed mb-2">{step.desc}</p>
                <p className="font-mono text-[10px] text-monarch-400/70 truncate">→ {step.project}</p>
              </div>

              {/* Arrow connector */}
              {i < buildPipeline.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 text-ink-600">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
