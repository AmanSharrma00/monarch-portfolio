import { useState, useRef, useEffect } from 'react';
import { aiKnowledge } from '@/content/portfolio';
import { analytics } from '@/lib/analytics';
import { Bot, X, Send, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const suggestedQuestions = [
  'What is his strongest full-stack project?',
  'What AI experience does he have?',
  'Explain Smart Agro-Care',
  'What technologies were used in Sahayak?',
  'Tell me about his achievements',
];

function retrieveContext(query: string): string {
  const q = query.toLowerCase();
  let bestMatch = '';
  let bestScore = 0;

  for (const item of aiKnowledge) {
    const topic = item.topic.toLowerCase();
    const content = item.content.toLowerCase();
    let score = 0;

    const queryWords = q.split(/\s+/).filter((w) => w.length > 2);
    for (const word of queryWords) {
      if (topic.includes(word)) score += 3;
      if (content.includes(word)) score += 1;
    }

    if (topic.includes(q)) score += 10;

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item.content;
    }
  }

  return bestScore > 0 ? bestMatch : '';
}

function generateResponse(query: string): string {
  const context = retrieveContext(query);

  if (!context) {
    return "I don't have specific information about that in my knowledge base. I can tell you about Aman's projects (Sahayak, Automation Bot, Smart Agro-Care), his AI experience, full-stack work, achievements, certifications, or how to contact him. Try asking about one of those topics.";
  }

  return context;
}

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'MONARCH AI online. Ask me about Aman\'s projects, skills, achievements, or experience.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    analytics.track('ai_assistant_used', { question: trimmed });

    setMessages((m) => [...m, { role: 'user', content: trimmed }]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const response = generateResponse(trimmed);
      setMessages((m) => [...m, { role: 'assistant', content: response }]);
      setLoading(false);
    }, 600 + Math.random() * 400);
  };

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-xl glass-strong text-ink-100 text-xs font-mono hover:border-monarch-400/40 transition-all hover:scale-105 active:scale-95"
        aria-label="Open MONARCH AI assistant"
      >
        <Bot size={16} className="text-monarch-400" />
        <span className="hidden sm:inline">MONARCH AI</span>
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-monarch-400 opacity-60 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-monarch-400" />
        </span>
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed inset-0 z-[80] flex items-end md:items-end justify-center md:justify-end p-4 md:p-6 animate-fade-in">
          <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <div className="relative w-full max-w-md glass-strong rounded-2xl overflow-hidden flex flex-col" style={{ maxHeight: '70vh' }}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-ink-700/50">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-monarch-500/15 text-monarch-400">
                  <Bot size={16} />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-ink-50">MONARCH AI</p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-monarch-400/70">RAG Portfolio Assistant</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-ink-400 hover:text-ink-100 transition-colors" aria-label="Close">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-monarch-500/15 text-ink-100 rounded-br-sm'
                        : 'bg-ink-800/60 text-ink-200 rounded-bl-sm border border-ink-700/30'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="px-3.5 py-2.5 rounded-xl bg-ink-800/60 border border-ink-700/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-monarch-400 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-monarch-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-monarch-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}

              {/* Suggestions (only when few messages) */}
              {messages.length <= 2 && !loading && (
                <div className="space-y-1.5 pt-2">
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-ink-500">
                    <Sparkles size={12} className="text-monarch-400" />
                    Suggested
                  </p>
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="block w-full text-left px-3 py-2 rounded-lg bg-ink-800/40 border border-ink-700/30 text-xs text-ink-300 hover:text-monarch-300 hover:border-monarch-400/30 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-ink-700/50">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') send(input);
                }}
                placeholder="Ask about Aman's work..."
                className="flex-1 bg-transparent text-ink-100 text-sm outline-none placeholder:text-ink-600"
                aria-label="Ask a question"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || loading}
                className="p-2 rounded-lg bg-monarch-500/15 text-monarch-400 hover:bg-monarch-500/25 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
