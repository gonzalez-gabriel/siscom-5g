'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
  background?: string;
}

export function PresentationSlide({
  children,
  className,
  background,
}: PresentationSlideProps) {
  return (
    <div
      className={cn(
        'w-full h-screen flex flex-col items-center justify-center',
        'p-3 sm:p-6 md:p-12 lg:p-16',
        'relative overflow-hidden',
        background || 'bg-background',
        className
      )}
    >
      {children}
    </div>
  );
}

interface SlideContentProps {
  children: ReactNode;
  className?: string;
}

export function SlideContent({ children, className }: SlideContentProps) {
  return (
    <div
      className={cn(
        'w-full max-w-6xl mx-auto z-10',
        'px-2 sm:px-4 md:px-6',
        className
      )}
    >
      {children}
    </div>
  );
}

interface SlideTitleProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function SlideTitle({
  children,
  className,
  size = 'lg',
}: SlideTitleProps) {
  const sizeClasses = {
    sm: 'text-base sm:text-3xl md:text-4xl lg:text-5xl',
    md: 'text-lg sm:text-4xl md:text-5xl lg:text-6xl',
    lg: 'text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
    xl: 'text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
  };

  return (
    <h1
      className={cn(
        'font-bold tracking-tight mb-2 sm:mb-6 md:mb-8 text-balance',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </h1>
  );
}

interface SlideSubtitleProps {
  children: ReactNode;
  className?: string;
}

export function SlideSubtitle({ children, className }: SlideSubtitleProps) {
  return (
    <p
      className={cn(
        'text-sm sm:text-xl md:text-2xl lg:text-3xl',
        'text-muted-foreground mb-2 sm:mb-4',
        'text-balance',
        className
      )}
    >
      {children}
    </p>
  );
}

interface SlideTextProps {
  children: ReactNode;
  className?: string;
}

export function SlideText({ children, className }: SlideTextProps) {
  return (
    <p
      className={cn(
        'text-sm sm:text-lg md:text-xl lg:text-2xl',
        'leading-relaxed',
        className
      )}
    >
      {children}
    </p>
  );
}
