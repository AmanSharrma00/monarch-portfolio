import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { navItems, profile } from '@/content/portfolio';
import { useActiveSection } from '@/hooks/useReveal';
import { scrollToSection } from '@/lib/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';

export function Navigation({ theme, onThemeToggle }: { theme: 'dark' | 'light'; onThemeToggle: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] transition-all duration-500 ${
          scrolled ? 'max-w-3xl' : 'max-w-4xl'
        }`}
        aria-label="Main navigation"
      >
        <div
          className={`flex items-center justify-between px-3 sm:px-4 py-2.5 rounded-2xl transition-all duration-500 ${
            scrolled ? 'glass-strong shadow-2xl shadow-black/40' : 'glass'
          }`}
        >
          <button
            onClick={() => handleNav('hero')}
            className="flex items-center gap-2 sm:gap-2.5 group min-w-0"
            aria-label="MONARCH home"
          >
            <Logo size={28} />
            <span className="font-display font-bold tracking-[0.12em] sm:tracking-[0.15em] text-ink-50 text-xs sm:text-sm group-hover:text-monarch-300 transition-colors">
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

          {/* Desktop theme + status */}
          <div className="hidden md:flex items-center gap-2 pl-3 border-l border-ink-700/50">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-xl text-ink-300 hover:text-ink-100 hover:bg-ink-800/60 transition-all"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-monarch-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-monarch-400" />
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Online</span>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-xl text-ink-300 hover:text-ink-100 hover:bg-ink-800/60 transition-all"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-xl text-ink-200 hover:text-ink-100 hover:bg-ink-800/60 transition-all"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-navigation"
          className={`md:hidden mt-2 overflow-hidden rounded-2xl glass-strong shadow-2xl transition-all duration-300 origin-top ${
            mobileOpen ? 'max-h-[80vh] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95 pointer-events-none'
          }`}
          aria-hidden={!mobileOpen}
        >
          <div className="p-2 max-h-[75vh] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'bg-monarch-500/10 text-monarch-300'
                    : 'text-ink-200 hover:bg-ink-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="mt-1 border-t border-ink-700/50 pt-1">
              <button
                onClick={onThemeToggle}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium text-ink-200 hover:bg-ink-800/50 transition-colors"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              >
                <span>{theme === 'dark' ? 'Light theme' : 'Dark theme'}</span>
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            </div>

            <div className="px-4 py-3 border-t border-ink-700/50 mt-1">
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
      </nav>
    </>
  );
}
