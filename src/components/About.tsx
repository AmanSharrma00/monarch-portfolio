import { Background } from './Background';
import { philosophy, profile } from '@/content/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { Brain, Lightbulb, Wrench, CheckCircle, Rocket, TrendingUp } from 'lucide-react';

const phaseIcons = [Brain, Lightbulb, Wrench, CheckCircle, Rocket, TrendingUp];

export function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <Background variant="about" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Label */}
        <div className={`mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="section-label">// HOW I THINK</p>
        </div>

        {/* Title */}
        <h2 className={`section-title mb-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Engineering Philosophy
        </h2>

        {/* Intro */}
        <p className={`max-w-2xl text-ink-300 text-base md:text-lg leading-relaxed mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          I'm {profile.name.split(' ')[0]}, a {profile.title.toLowerCase()} and {profile.graduationYear} CS graduate.
          I don't just write code — I solve problems, experiment with approaches, evaluate trade-offs,
          and build systems that work in production. Every decision is deliberate, every architecture choice
          has a reason.
        </p>

        {/* Philosophy phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {philosophy.map((phase, i) => {
            const Icon = phaseIcons[i];
            return (
              <div
                key={phase.phase}
                className={`glass-card p-5 transition-all duration-700 hover:border-monarch-400/30 hover:bg-ink-800/50 group ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-monarch-500/10 text-monarch-400 group-hover:bg-monarch-500/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-50 mb-2">{phase.phase}</h3>
                <p className="text-sm text-ink-300 leading-relaxed">{phase.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Flow visualization */}
        <div className={`mt-10 flex flex-wrap items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-400 transition-all duration-700 delay-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {philosophy.map((phase, i) => (
            <span key={phase.phase} className="flex items-center gap-2">
              <span className="text-monarch-400/80">{phase.phase}</span>
              {i < philosophy.length - 1 && <span className="text-ink-600">→</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
