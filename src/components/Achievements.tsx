import { Background } from './Background';
import { achievements, certifications } from '@/content/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { scrollToSection } from '@/lib/navigation';
import { Trophy, Award, BadgeCheck, ChevronRight } from 'lucide-react';

export function Achievements() {
  const { ref, visible } = useReveal();

  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden">
      <Background variant="achievements" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <div className={`mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="section-label">// PROOF OF WORK</p>
        </div>

        <h2 className={`section-title mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Achievements
        </h2>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {achievements.map((a, i) => (
            <div
              key={i}
              className={`glass-card p-6 hover:border-gold-500/30 hover:bg-ink-800/40 transition-all group ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 group-hover:scale-110 transition-transform shrink-0">
                  {i === 0 ? <Trophy size={24} /> : <Award size={24} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display text-lg font-bold text-ink-50">{a.title}</h3>
                    <span className="font-mono text-xs text-ink-500">{a.year}</span>
                  </div>
                  <p className="font-mono text-sm text-gold-400 mb-2">{a.detail}</p>
                  <p className="text-sm text-ink-300 leading-relaxed">{a.desc}</p>
                  <button
                    onClick={() => scrollToSection('work')}
                    className="flex items-center gap-1 mt-3 text-xs font-medium text-ink-400 hover:text-gold-400 transition-colors"
                  >
                    Evidence: {a.evidence} <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-2 mb-6">
            <BadgeCheck size={18} className="text-monarch-400" />
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-monarch-400">CERTIFICATIONS</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 glass-card p-4 hover:border-monarch-400/20 transition-colors ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
              >
                <BadgeCheck size={18} className="text-monarch-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-ink-100 truncate">{cert.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-ink-500">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
