import { useEffect, useState } from 'react';
import type { Project } from '@/content/portfolio';
import { X, ChevronDown } from 'lucide-react';

const sections = [
  'Problem',
  'System Overview',
  'Architecture',
  'Engineering Decisions',
  'Implementation',
  'Challenges',
  'Trade-offs',
  'Results',
  'Lessons',
  'Future Improvements',
];

export function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const dd = project.caseStudy.deepDive;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center p-4 md:p-8 animate-fade-in" role="dialog" aria-modal="true" aria-label={`${project.title} case study`}>
      <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-strong rounded-2xl border-glow">
        {/* Header */}
        <div className="sticky top-0 z-10 glass-strong px-6 py-4 border-b border-ink-700/50 flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-monarch-400 mb-1">CASE STUDY</p>
            <h2 className="font-display text-lg font-bold text-ink-50">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-ink-800/60 text-ink-300 hover:text-ink-100 transition-colors"
            aria-label="Close case study"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Initial view: problem, solution, tech, result, status */}
          <section>
            <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">01 · Problem</h3>
            <p className="text-sm text-ink-200 leading-relaxed">{project.caseStudy.problem}</p>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">02 · Solution</h3>
            <p className="text-sm text-ink-200 leading-relaxed">{project.caseStudy.solution}</p>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">03 · Technologies</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.caseStudy.technologies.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-md bg-ink-800/60 border border-ink-700/40 font-mono text-[10px] text-ink-200">
                  {t}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">04 · Result</h3>
            <p className="text-sm text-ink-200 leading-relaxed">{project.caseStudy.result}</p>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">05 · Status</h3>
            <p className="text-sm text-ink-200 leading-relaxed font-mono">{project.status}</p>
          </section>

          {/* Deep dive toggle */}
          {!expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-monarch-500/30 bg-monarch-500/5 text-monarch-300 text-sm font-medium hover:bg-monarch-500/10 transition-colors"
            >
              Explore Technical Deep Dive
              <ChevronDown size={16} />
            </button>
          ) : (
            <div className="space-y-8 pt-4 border-t border-ink-700/40 animate-fade-in">
              {/* 01 Problem */}
              <section>
                <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">01 · Problem</h3>
                <p className="text-sm text-ink-200 leading-relaxed">{dd.problem}</p>
              </section>

              {/* 02 System Overview */}
              <section>
                <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">02 · System Overview</h3>
                <p className="text-sm text-ink-200 leading-relaxed">{dd.systemOverview}</p>
              </section>

              {/* 03 Architecture */}
              <section>
                <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">03 · Architecture</h3>
                <div className="space-y-1.5">
                  {dd.architecture.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-ink-200">
                      <span className="font-mono text-[10px] text-ink-500 mt-1">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-mono text-xs leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 04 Engineering Decisions */}
              <section>
                <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">04 · Engineering Decisions</h3>
                <div className="space-y-2">
                  {dd.engineeringDecisions.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-ink-200">
                      <span className="text-monarch-400 mt-0.5">▸</span>
                      <span className="leading-relaxed">{d}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 05 Implementation */}
              <section>
                <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">05 · Implementation</h3>
                <p className="text-sm text-ink-200 leading-relaxed">{dd.implementation}</p>
              </section>

              {/* 06 Challenges */}
              <section>
                <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">06 · Challenges</h3>
                <div className="space-y-2">
                  {dd.challenges.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-ink-200">
                      <span className="text-gold-400 mt-0.5">!</span>
                      <span className="leading-relaxed">{c}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 07 Trade-offs */}
              <section>
                <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">07 · Trade-offs</h3>
                <div className="space-y-2">
                  {dd.tradeOffs.map((t, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-ink-200">
                      <span className="text-signal-400 mt-0.5">⇄</span>
                      <span className="leading-relaxed">{t}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 08 Results */}
              <section>
                <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">08 · Results</h3>
                <p className="text-sm text-ink-200 leading-relaxed">{dd.results}</p>
              </section>

              {/* 09 Lessons */}
              <section>
                <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">09 · Lessons</h3>
                <div className="space-y-2">
                  {dd.lessons.map((l, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-ink-200">
                      <span className="text-monarch-400 mt-0.5">✓</span>
                      <span className="leading-relaxed">{l}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 10 Future Improvements */}
              <section>
                <h3 className="font-mono text-xs uppercase tracking-wider text-monarch-400 mb-2">10 · Future Improvements</h3>
                <div className="space-y-2">
                  {dd.futureImprovements.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-ink-200">
                      <span className="text-ink-500 mt-0.5">→</span>
                      <span className="leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
