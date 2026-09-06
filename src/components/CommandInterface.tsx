import { useState, useRef, useEffect } from 'react';
import { commands } from '@/content/portfolio';
import { scrollToSection, openResume } from '@/lib/navigation';
import { Terminal, X, CornerDownLeft } from 'lucide-react';

interface Entry {
  type: 'input' | 'output';
  text: string;
}

export function CommandInterface() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Entry[]>([
    { type: 'output', text: 'MONARCH CLI v1.0 — Type a command or click suggestions below.' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const execute = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setHistory((h) => [...h, { type: 'input', text: `> ${trimmed}` }]);

    const match = commands.find((c) => c.cmd === trimmed || c.cmd.startsWith(trimmed));
    if (match) {
      setHistory((h) => [...h, { type: 'output', text: match.desc }]);
      if (match.target === 'resume') {
        openResume();
      } else {
        scrollToSection(match.target);
      }
      setTimeout(() => setOpen(false), 800);
    } else if (trimmed === 'help') {
      setHistory((h) => [...h, { type: 'output', text: 'Available commands: ' + commands.map((c) => c.cmd).join(', ') }]);
    } else if (trimmed === 'clear') {
      setHistory([]);
    } else {
      setHistory((h) => [...h, { type: 'output', text: `Unknown command: ${trimmed}. Type "help" for available commands.` }]);
    }

    setInput('');
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-xl glass-strong text-ink-100 text-xs font-mono hover:border-monarch-400/40 transition-all hover:scale-105 active:scale-95 group"
        aria-label="Open command interface"
      >
        <Terminal size={16} className="text-monarch-400" />
        <span className="hidden sm:inline">CMD</span>
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-monarch-400 opacity-60 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-monarch-400" />
        </span>
      </button>

      {/* Command panel */}
      {open && (
        <div className="fixed inset-0 z-[80] flex items-end md:items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <div className="relative w-full max-w-lg glass-strong rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-ink-700/50">
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-monarch-400" />
                <span className="font-mono text-xs uppercase tracking-wider text-ink-200">MONARCH CLI</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-ink-400 hover:text-ink-100 transition-colors" aria-label="Close">
                <X size={16} />
              </button>
            </div>

            {/* History */}
            <div ref={scrollRef} className="p-4 h-48 overflow-y-auto space-y-1 font-mono text-xs">
              {history.map((entry, i) => (
                <p key={i} className={entry.type === 'input' ? 'text-monarch-400' : 'text-ink-300'}>
                  {entry.text}
                </p>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-ink-700/50">
              <span className="font-mono text-xs text-monarch-400">{`>`}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') execute(input);
                }}
                placeholder="Type a command..."
                className="flex-1 bg-transparent text-ink-100 font-mono text-xs outline-none placeholder:text-ink-600"
                aria-label="Command input"
              />
              <CornerDownLeft size={14} className="text-ink-500" />
            </div>

            {/* Suggestions */}
            <div className="px-4 py-3 border-t border-ink-700/50 flex flex-wrap gap-1.5">
              {commands.map((c) => (
                <button
                  key={c.cmd}
                  onClick={() => execute(c.cmd)}
                  className="px-2 py-1 rounded-md bg-ink-800/60 border border-ink-700/40 font-mono text-[10px] text-ink-300 hover:text-monarch-300 hover:border-monarch-400/30 transition-colors"
                >
                  {c.cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
