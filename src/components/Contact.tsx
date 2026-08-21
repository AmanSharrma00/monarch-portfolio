import { Background } from './Background';
import { profile } from '@/content/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { openResume, openGithub, openLinkedin } from '@/lib/navigation';
import { FileText, Github, Mail, Linkedin, ArrowUpRight } from 'lucide-react';

const cards = [
  { label: 'Recruiter', action: 'View Resume', icon: FileText, onClick: openResume },
  { label: 'Developer', action: 'GitHub', icon: Github, onClick: openGithub },
  { label: 'Project', action: "Let's Talk", icon: Mail, onClick: () => window.open(`mailto:${profile.email}`, '_blank', 'noopener,noreferrer') },
  { label: 'Connect', action: 'LinkedIn', icon: Linkedin, onClick: openLinkedin },
];

export function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <Background variant="contact" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="section-label">// CONTACT</p>
        </div>

        <h2 className={`font-display text-3xl md:text-5xl font-bold tracking-tight text-gradient-light mb-3 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Have a Problem Worth Building?
        </h2>

        <p className={`font-display text-xl md:text-2xl font-semibold text-gradient-monarch mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Let's turn it into a system.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <button
                key={card.label}
                onClick={card.onClick}
                className={`group glass-card p-6 text-left hover:border-monarch-400/30 hover:bg-ink-800/40 transition-all ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-monarch-500/10 text-monarch-400 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <ArrowUpRight size={16} className="text-ink-500 group-hover:text-monarch-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="font-display text-base font-semibold text-ink-50 mb-1">{card.label}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-monarch-400/70">{card.action}</p>
              </button>
            );
          })}
        </div>

        {/* Email */}
        <a
          href={`mailto:${profile.email}`}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-ink-200 text-sm hover:border-monarch-400/40 transition-all hover:scale-[1.02] ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <Mail size={16} className="text-monarch-400" />
          {profile.email}
        </a>
      </div>
    </section>
  );
}
