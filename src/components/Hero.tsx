import { Background } from './Background';
import { profile } from '@/content/portfolio';
import { scrollToSection, openResume } from '@/lib/navigation';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Background variant="hero" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 pb-12">
        {/* Brand */}
        <div className="animate-fade-in mb-6">
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] text-monarch-400/70 mb-3">
            {profile.name} · {profile.graduationYear} Graduate
          </p>
        </div>

        {/* MONARCH title */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.08em] text-gradient-light animate-fade-up mb-3">
          MONARCH
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-ink-300 animate-fade-up mb-8" style={{ animationDelay: '0.1s' }}>
          {profile.title}
        </p>

        {/* Tagline */}
        <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-balance">
            <span className="text-ink-100">I DON'T JUST WRITE CODE.</span>
            <br />
            <span className="text-gradient-monarch">I BUILD SYSTEMS.</span>
          </h2>
        </div>

        {/* Supporting copy */}
        <p className="max-w-2xl mx-auto text-sm md:text-base text-ink-300 leading-relaxed mb-10 animate-fade-up text-balance" style={{ animationDelay: '0.3s' }}>
          {profile.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('work')}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-monarch-500 text-ink-950 font-medium text-sm tracking-wide hover:bg-monarch-400 transition-all glow-monarch hover:scale-[1.02] active:scale-95"
          >
            EXPLORE MY WORK
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={openResume}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass text-ink-100 font-medium text-sm tracking-wide hover:border-monarch-400/40 transition-all hover:scale-[1.02] active:scale-95"
          >
            <FileText size={16} />
            VIEW RESUME
          </button>
        </div>

        {/* Status */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-monarch-400 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-monarch-400" />
          </span>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-ink-200">
            {profile.status}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-ink-400 hover:text-monarch-400 transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
