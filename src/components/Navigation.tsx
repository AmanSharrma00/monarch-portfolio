import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { navItems, profile } from '@/content/portfolio';
import { useActiveSection } from '@/hooks/useReveal';
import { scrollToSection } from '@/lib/navigation';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'w-[calc(100%-2rem)] max-w-3xl' : 'w-[calc(100%-2rem)] max-w-4xl'
        }`}
        aria-label="Main navigation"
      >
        <div
          className={`flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all duration-500 ${
            scrolled ? 'glass-strong shadow-2xl shadow-black/40' : 'glass'
          }`}
        >
          <button
            onClick={() => handleNav('hero')}
            className="flex items-center gap-2.5 group"
            aria-label="MONARCH home"
          >
            <Logo size={28} />
            <span className="font-display font-bold tracking-[0.15em] text-ink-50 text-sm hidden sm:block group-hover:text-monarch-300 transition-colors">
              MONARCH
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                  active === item.id ? 'text-monarch-300' : 'text-ink-300 hover:text-ink-100'
                }`}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-monarch-400" />
                )}
              </button>
            ))}
          </div>

          {/* Status indicator */}
          <div className="hidden md:flex items-center gap-2 pl-3 border-l border-ink-700/50">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-monarch-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-monarch-400" />
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Online</span>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-ink-200 p-1.5"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex items-start justify-center pt-24 px-4 animate-fade-in">
          <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative glass-strong rounded-2xl w-full max-w-sm p-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'bg-monarch-500/10 text-monarch-300'
                    : 'text-ink-200 hover:bg-ink-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 py-3 border-t border-ink-700/50 mt-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-monarch-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-monarch-400" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-400">
                  {profile.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
