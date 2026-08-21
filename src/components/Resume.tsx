import { useReveal } from '@/hooks/useReveal';
import { openResume, downloadResume } from '@/lib/navigation';
import { FileText, Download, ExternalLink } from 'lucide-react';

export function Resume() {
  const { ref, visible } = useReveal();

  return (
    <section id="resume" className="relative py-20 md:py-28 overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6">
        <div className={`glass-card p-8 md:p-12 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-monarch-500/10 text-monarch-400 mb-6">
            <FileText size={28} />
          </div>

          <p className="section-label mb-3">// RESUME</p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-gradient-light mb-3">
            View My Resume
          </h2>

          <p className="text-sm text-ink-300 leading-relaxed max-w-xl mx-auto mb-8">
            Complete overview of my experience, projects, skills, achievements, and education.
            Available to view in-browser or download as PDF.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openResume}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-monarch-500 text-ink-950 font-medium text-sm hover:bg-monarch-400 transition-all glow-monarch hover:scale-[1.02] active:scale-95"
            >
              <ExternalLink size={16} />
              View Resume
            </button>
            <button
              onClick={downloadResume}
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass text-ink-100 font-medium text-sm hover:border-monarch-400/40 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Download size={16} />
              Download Resume
            </button>
          </div>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-ink-500">
            PDF · Updated 2026
          </p>
        </div>
      </div>
    </section>
  );
}
