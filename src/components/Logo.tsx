interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function Logo({ size = 32, className = '', showText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-label="MONARCH logo"
      >
        <defs>
          <linearGradient id="monarch-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34d399" />
            <stop offset="0.5" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#34d399" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d="M14 44V20l9 14 9-14v24"
          stroke="url(#monarch-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M41 44V20l9 14"
          stroke="#22d3ee"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
        <circle cx="32" cy="13" r="3" fill="#fbbf24" />
        <circle cx="18" cy="16" r="1.5" fill="#34d399" opacity="0.5" />
        <circle cx="46" cy="16" r="1.5" fill="#22d3ee" opacity="0.5" />
        <line x1="32" y1="13" x2="18" y2="16" stroke="#34d399" strokeWidth="1" opacity="0.25" />
        <line x1="32" y1="13" x2="46" y2="16" stroke="#22d3ee" strokeWidth="1" opacity="0.25" />
      </svg>
      {showText && (
        <span className="font-display font-bold tracking-[0.15em] text-ink-50 text-lg">
          MONARCH
        </span>
      )}
    </div>
  );
}
