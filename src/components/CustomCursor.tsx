import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReveal';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) {
      setHidden(true);
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }

      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest('a, button, [data-cursor="hover"], input, textarea, [role="button"]') !== null;
      setHovering(isInteractive);
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  if (hidden || reduced) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[200] pointer-events-none w-2 h-2 rounded-full bg-monarch-400 transition-opacity duration-200"
        style={{ opacity: hovering ? 0 : 1 }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[200] pointer-events-none rounded-full border border-monarch-400/50 transition-all duration-200"
        style={{
          width: hovering ? '48px' : '32px',
          height: hovering ? '48px' : '32px',
          marginLeft: hovering ? '-8px' : '0',
          marginTop: hovering ? '-8px' : '0',
          backgroundColor: hovering ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
        }}
      />
    </>
  );
}
