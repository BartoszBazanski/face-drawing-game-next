'use client';

import { cn } from '@/utils/cn';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

type OverlaySectionProps = PropsWithChildren<unknown>;

export const OverlaySection = ({ children }: OverlaySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const threshold = 0;
        const isBottom = window.scrollY + rect.top > rect.bottom - threshold;

        setIsAtBottom(isBottom);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="invisible">{children}</div>
      <div
        className={cn('absolute inset-0 bg-black/20 opacity-0 -z-10 transition-opacity duration-500', {
          'opacity-100 z-10': isAtBottom
        })}
      ></div>
      <div
        className={cn('absolute inset-0', {
          'fixed inset-x-0 bottom-0 top-auto': isAtBottom
        })}
      >
        {children}
      </div>
    </section>
  );
};
