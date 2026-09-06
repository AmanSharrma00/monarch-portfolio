import { useReducedMotion } from '@/hooks/useReveal';

interface BackgroundProps {
  variant: 'hero' | 'about' | 'skills' | 'projects' | 'achievements' | 'contact';
}

const variants = {
  hero: 'hero-bg',
  about: 'about-bg',
  skills: 'skills-bg',
  projects: 'projects-bg',
  achievements: 'achievements-bg',
  contact: 'contact-bg',
};

export function Background({ variant }: BackgroundProps) {
  const reduced = useReducedMotion();

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${variants[variant]}`}
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Variant-specific ambient glows */}
      {!reduced && (
        <>
          {variant === 'hero' && (
            <>
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-monarch-500/8 blur-[120px] animate-glow" />
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-signal-500/6 blur-[100px] animate-glow" style={{ animationDelay: '2s' }} />
              <HeroNetworkField />
            </>
          )}
          {variant === 'about' && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-monarch-500/5 blur-[120px] animate-glow" />
          )}
          {variant === 'skills' && (
            <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-signal-500/5 blur-[120px] animate-glow" />
          )}
          {variant === 'projects' && (
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[400px] rounded-full bg-monarch-500/5 blur-[130px] animate-glow" />
          )}
          {variant === 'achievements' && (
            <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-gold-500/4 blur-[120px] animate-glow" />
          )}
          {variant === 'contact' && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-monarch-500/5 blur-[130px] animate-glow" />
          )}
        </>
      )}

      {/* Top fade */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-ink-950 to-transparent" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}

function HeroNetworkField() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="node-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </radialGradient>
      </defs>
      {[
        [10, 20], [25, 50], [40, 25], [55, 60], [70, 30], [85, 55],
        [15, 75], [45, 85], [65, 80], [80, 20], [30, 10], [50, 40],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={`${x}%`} cy={`${y}%`} r="2" fill="url(#node-grad)" className="animate-pulse-soft" style={{ animationDelay: `${i * 0.3}s` }} />
        </g>
      ))}
      {[
        [10, 20, 25, 50], [25, 50, 40, 25], [40, 25, 55, 60],
        [55, 60, 70, 30], [70, 30, 85, 55], [15, 75, 45, 85],
        [45, 85, 65, 80], [30, 10, 50, 40], [50, 40, 70, 30],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={`${x1}%`}
          y1={`${y1}%`}
          x2={`${x2}%`}
          y2={`${y2}%`}
          stroke="#34d399"
          strokeWidth="0.5"
          opacity="0.15"
        />
      ))}
    </svg>
  );
}
