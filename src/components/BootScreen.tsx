import { useEffect, useState, useCallback } from 'react';
import { Logo } from './Logo';
import { useReducedMotion } from '@/hooks/useReveal';

const bootSteps = [
  { label: 'CORE', delay: 200 },
  { label: 'ENGINEERING', delay: 350 },
  { label: 'AI MODULE', delay: 350 },
  { label: 'PROJECT MATRIX', delay: 350 },
  { label: 'KNOWLEDGE BASE', delay: 350 },
];

export function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [exiting, setExiting] = useState(false);
  const reduced = useReducedMotion();

  const finish = useCallback(() => {
    setExiting(true);
    setTimeout(onComplete, 600);
  }, [onComplete]);

  useEffect(() => {
    if (reduced) {
      finish();
      return;
    }

    if (step >= bootSteps.length) {
      const timer = setTimeout(finish, 500);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => setStep((s) => s + 1), bootSteps[step]?.delay ?? 300);
    return () => clearTimeout(timer);
  }, [step, reduced, finish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 transition-opacity duration-500 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-live="polite"
      aria-label="System initializing"
    >
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        <div className="animate-scale-in">
          <Logo size={56} />
        </div>

        <div className="text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-[0.2em] text-gradient-light">
            MONARCH
          </h1>
          <p className="mt-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-monarch-400/70">
            System Initialization
          </p>
        </div>

        <div className="w-full max-w-sm space-y-2.5">
          {bootSteps.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center justify-between font-mono text-[11px] md:text-xs transition-opacity duration-300 ${
                i < step ? 'opacity-100' : 'opacity-20'
              }`}
            >
              <span className="text-ink-300 tracking-wider">{s.label}</span>
              <div className="flex items-center gap-2">
                <div className="h-px w-16 md:w-24 bg-ink-700">
                  <div
                    className={`h-full bg-monarch-400 transition-all duration-300 ${
                      i < step ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
                <span className={i < step ? 'text-monarch-400' : 'text-ink-500'}>
                  {i < step ? 'ONLINE' : '···'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {step >= bootSteps.length && (
          <div className="text-center animate-fade-in">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-monarch-400">
              System Ready
            </p>
            <p className="mt-1 font-display text-lg text-ink-100">WELCOME.</p>
          </div>
        )}

        <button
          onClick={finish}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400 hover:text-ink-100 transition-colors mt-2"
        >
          [ Skip ]
        </button>
      </div>
    </div>
  );
}
