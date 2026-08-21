import { Logo } from './Logo';
import { profile } from '@/content/portfolio';
import { openResume, openGithub, openLinkedin } from '@/lib/navigation';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';

export function Footer() {
  const links = [
    { label: 'GitHub', icon: Github, onClick: openGithub },
    { label: 'LinkedIn', icon: Linkedin, onClick: openLinkedin },
    { label: 'Resume', icon: FileText, onClick: openResume },
    { label: 'Email', icon: Mail, onClick: () => window.open(`mailto:${profile.email}`, '_blank', 'noopener,noreferrer') },
  ];

  return (
    <footer className="relative py-16 border-t border-ink-800/60 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6">
          <Logo size={36} />

          <div>
            <p className="font-display text-lg font-bold tracking-[0.15em] text-ink-50">MONARCH</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-monarch-400/70 mt-1">
              {profile.title} · {profile.graduationYear} Graduate
            </p>
          </div>

          <p className="font-display text-sm text-ink-300 italic max-w-md text-balance">
            "Built with curiosity.<br />Engineered with intent."
          </p>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-monarch-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-monarch-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-400">
              System Status: Online
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.label}
                  onClick={link.onClick}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg glass text-ink-300 text-xs font-medium hover:text-monarch-300 hover:border-monarch-400/30 transition-all"
                >
                  <Icon size={14} />
                  {link.label}
                </button>
              );
            })}
          </div>

          <p className="font-mono text-[10px] text-ink-600 mt-4">
            © {new Date().getFullYear()} Aman Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
