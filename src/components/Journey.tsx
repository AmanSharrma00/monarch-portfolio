import { Background } from './Background';
import { journey } from '@/content/portfolio';
import { useReveal } from '@/hooks/useReveal';

export function Journey() {
  const { ref, visible } = useReveal();

  return (
    <section id="journey" className="relative py-24 md:py-32 overflow-hidden">
      <Background variant="about" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        <div className={`mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="section-label">// ENGINEERING JOURNEY</p>
        </div>

        <h2 className={`section-title mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          The Path So Far
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-monarch-400/40 via-ink-700 to-ink-800 md:-translate-x-1/2" />

          <div className="space-y-8">
            {journey.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 z-10">
                  <div className="w-3 h-3 rounded-full bg-monarch-400 border-2 border-ink-950 shadow-lg shadow-monarch-500/30" />
                </div>

                {/* Year (desktop) */}
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <span className="font-mono text-sm font-medium text-monarch-400 tracking-wider">{item.year}</span>
                </div>

                {/* Content */}
                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="glass-card p-4 hover:border-monarch-400/20 transition-colors">
                    {/* Year (mobile) */}
                    <span className="md:hidden font-mono text-xs font-medium text-monarch-400 tracking-wider block mb-1">{item.year}</span>
                    <h3 className="font-display text-base font-semibold text-ink-50 mb-1">{item.title}</h3>
                    <p className="text-sm text-ink-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
