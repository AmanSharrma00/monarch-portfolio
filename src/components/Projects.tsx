import { useState } from 'react';
import { Background } from './Background';
import { projects } from '@/content/portfolio';
import type { Project } from '@/content/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { analytics } from '@/lib/analytics';
import { scrollToSection, openGithub } from '@/lib/navigation';
import { ArrowRight, ExternalLink, Github, X, ChevronRight } from 'lucide-react';
import { CaseStudy } from './CaseStudy';

const accentMap = {
  monarch: { text: 'text-monarch-400', bg: 'bg-monarch-500/10', border: 'border-monarch-500/30', dot: 'bg-monarch-400' },
  gold: { text: 'text-gold-400', bg: 'bg-gold-500/10', border: 'border-gold-500/30', dot: 'bg-gold-400' },
  signal: { text: 'text-signal-400', bg: 'bg-signal-500/10', border: 'border-signal-500/30', dot: 'bg-signal-400' },
};

const statusColors: Record<string, string> = {
  DEPLOYED: 'text-monarch-400 bg-monarch-500/10 border-monarch-500/30',
  BUILDING: 'text-gold-400 bg-gold-500/10 border-gold-500/30',
  RESEARCH: 'text-signal-400 bg-signal-500/10 border-signal-500/30',
};

export function Projects() {
  const { ref, visible } = useReveal();
  const [activeCase, setActiveCase] = useState<Project | null>(null);

  const handleCaseOpen = (project: Project) => {
    analytics.track('project_open', { project: project.id });
    setActiveCase(project);
  };

  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden">
      <Background variant="projects" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="section-label">// SELECTED ENGINEERING WORK</p>
        </div>

        <h2 className={`section-title mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Featured Projects
        </h2>

        <div className="space-y-6">
          {projects.map((project, i) => {
            const accent = accentMap[project.accent];
            return (
              <div
                key={project.id}
                className={`glass-card overflow-hidden transition-all duration-700 hover:border-ink-600/60 group ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left: index + status */}
                  <div className="lg:col-span-2 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-ink-700/40 flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4">
                    <span className="font-display text-5xl font-bold text-ink-700 group-hover:text-ink-500 transition-colors">
                      {String(project.index).padStart(2, '0')}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-mono text-[10px] uppercase tracking-wider ${statusColors[project.status]}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} animate-pulse-soft`} />
                      {project.status}
                    </span>
                  </div>

                  {/* Right: content */}
                  <div className="lg:col-span-10 p-6 lg:p-8">
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-ink-50 mb-1">{project.title}</h3>
                        <p className={`font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] ${accent.text}`}>
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm md:text-base text-ink-300 leading-relaxed max-w-3xl">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={`px-2 py-0.5 rounded-md ${accent.bg} border ${accent.border} font-mono text-[10px] ${accent.text}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mt-2">
                        {project.highlights.slice(0, 6).map((h) => (
                          <div key={h} className="flex items-center gap-2 text-xs text-ink-300">
                            <span className={`w-1 h-1 rounded-full ${accent.dot}`} />
                            {h}
                          </div>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap items-center gap-3 mt-4">
                        {project.links.caseStudy && (
                          <button
                            onClick={() => handleCaseOpen(project)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-ink-50 text-ink-950 text-xs font-medium hover:bg-ink-100 transition-all hover:scale-[1.02] active:scale-95"
                          >
                            View Case Study
                            <ArrowRight size={14} />
                          </button>
                        )}
                        {project.links.github && (
                          <button
                            onClick={openGithub}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-ink-200 text-xs font-medium hover:border-ink-500/50 transition-all hover:scale-[1.02] active:scale-95"
                          >
                            <Github size={14} />
                            GitHub
                          </button>
                        )}
                        {project.links.live && (
                          <button
                            onClick={() => {
                              analytics.track('project_open', { project: project.id, type: 'live' });
                              window.open(project.links.live, '_blank', 'noopener,noreferrer');
                            }}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-ink-200 text-xs font-medium hover:border-ink-500/50 transition-all hover:scale-[1.02] active:scale-95"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recruiter quick view */}
        <RecruiterQuickView />
      </div>

      {/* Case study modal */}
      {activeCase && <CaseStudy project={activeCase} onClose={() => setActiveCase(null)} />}
    </section>
  );
}

function RecruiterQuickView() {
  const items = [
    { label: 'Software + AI Engineer', value: 'Role' },
    { label: '2027 Graduate', value: 'Education' },
    { label: '3 Featured Projects', value: 'Work' },
    { label: 'Top Achievements', value: 'Proof' },
  ];

  return (
    <div className="mt-12 glass-card p-6 md:p-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-gold-400" />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400">RECRUITER QUICK VIEW</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.label} className="text-center md:text-left">
            <p className="font-mono text-[10px] uppercase tracking-wider text-ink-500 mb-1">{item.value}</p>
            <p className="text-sm font-medium text-ink-100">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-ink-700/40">
        <button
          onClick={() => scrollToSection('achievements')}
          className="flex items-center gap-1.5 text-xs font-medium text-ink-200 hover:text-monarch-300 transition-colors"
        >
          View Achievements <ChevronRight size={14} />
        </button>
        <button
          onClick={() => scrollToSection('resume')}
          className="flex items-center gap-1.5 text-xs font-medium text-ink-200 hover:text-monarch-300 transition-colors"
        >
          View Resume <ChevronRight size={14} />
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="flex items-center gap-1.5 text-xs font-medium text-ink-200 hover:text-monarch-300 transition-colors"
        >
          Contact <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
