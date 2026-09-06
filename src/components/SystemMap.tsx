import { systemMap } from '@/content/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { scrollToSection } from '@/lib/navigation';

export function SystemMap() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        <div className={`mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="section-label">// MONARCH SYSTEM MAP</p>
        </div>

        <h2 className={`section-title mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          System Map
        </h2>

        {/* Radial system map */}
        <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
          {/* Connection lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid meet">
            {systemMap.map((node, i) => {
              const angle = (i / systemMap.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 180;
              const x = 50 + (Math.cos(angle) * radius) / 5;
              const y = 50 + (Math.sin(angle) * radius) / 5;
              return (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`${x}%`}
                  y2={`${y}%`}
                  stroke="#34d399"
                  strokeWidth="1"
                  opacity={visible ? '0.15' : '0'}
                  strokeDasharray="4 4"
                  className="transition-all duration-1000"
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                />
              );
            })}
          </svg>

          {/* Center node */}
          <div className={`absolute z-10 flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full glass-strong border-glow text-center transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <span className="font-display text-sm md:text-base font-bold text-ink-50">AMAN</span>
            <span className="font-display text-sm md:text-base font-bold text-ink-50">SHARMA</span>
            <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-wider text-monarch-400 mt-1">Core</span>
          </div>

          {/* Surrounding nodes */}
          {systemMap.map((node, i) => {
            const angle = (i / systemMap.length) * 2 * Math.PI - Math.PI / 2;
            const radius = 180;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <button
                key={node.label}
                onClick={() => scrollToSection('work')}
                className={`absolute z-5 flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl glass border border-ink-700/50 hover:border-monarch-400/40 hover:bg-ink-800/60 transition-all duration-700 group ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  transitionDelay: `${400 + i * 100}ms`,
                }}
              >
                <span className="font-mono text-[10px] md:text-xs font-medium text-ink-100 group-hover:text-monarch-300 transition-colors whitespace-nowrap">
                  {node.label}
                </span>
                <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-wider text-ink-500 whitespace-nowrap">
                  → {node.project}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile fallback: simple list */}
        <div className="md:hidden mt-8 space-y-2">
          {systemMap.map((node, i) => (
            <button
              key={i}
              onClick={() => scrollToSection('work')}
              className="flex items-center justify-between w-full glass-card p-3 hover:border-monarch-400/20 transition-colors text-left"
            >
              <div>
                <p className="font-mono text-xs font-medium text-ink-100">{node.label}</p>
                <p className="font-mono text-[10px] text-ink-500">{node.desc}</p>
              </div>
              <span className="font-mono text-[10px] text-monarch-400 whitespace-nowrap">→ {node.project}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
