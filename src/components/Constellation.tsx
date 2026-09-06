import { useState } from 'react';
import { constellation } from '@/content/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { scrollToSection } from '@/lib/navigation';

export function Constellation() {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState<{ name: string; project: string; desc: string } | null>(null);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <div className={`mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="section-label">// TECHNOLOGY CONSTELLATION</p>
        </div>

        <h2 className={`section-title mb-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          How Technologies Connect
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {constellation.map((group, gi) => (
            <div
              key={group.group}
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + gi * 150}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-monarch-400" />
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-monarch-400">{group.group}</h3>
              </div>

              <div className="space-y-0">
                {group.nodes.map((node, ni) => (
                  <div key={node.name}>
                    <button
                      onMouseEnter={() => setHovered(node)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => scrollToSection('work')}
                      className="group flex items-center gap-3 w-full text-left py-2.5 px-3 rounded-lg hover:bg-ink-800/40 transition-colors"
                    >
                      <span className="font-mono text-xs text-ink-500 group-hover:text-monarch-400 transition-colors">
                        {String(ni + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-medium text-ink-100 group-hover:text-monarch-300 transition-colors">
                        {node.name}
                      </span>
                    </button>
                    {ni < group.nodes.length - 1 && (
                      <div className="flex items-center gap-3 pl-3 h-4">
                        <span className="font-mono text-[10px] text-ink-600 w-5">↓</span>
                        <div className="h-4 w-px bg-gradient-to-b from-ink-600 to-ink-700" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Terminal project */}
                <div className="mt-3 flex items-center gap-3 py-2.5 px-3 rounded-lg bg-monarch-500/5 border border-monarch-500/15">
                  <span className="font-mono text-xs text-monarch-400">→</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-monarch-300">
                    {group.nodes[0].project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hover detail */}
        {hovered && (
          <div className="mt-8 glass-card p-4 animate-fade-in max-w-md">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-monarch-400">{hovered.name}</span>
              <span className="text-ink-600">·</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-400">{hovered.project}</span>
            </div>
            <p className="text-sm text-ink-300">{hovered.desc}</p>
          </div>
        )}
      </div>
    </section>
  );
}
