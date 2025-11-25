'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
  /** If true, navigation auto-hides after inactivity */
  autoHide?: boolean;
  /** Milliseconds to wait before hiding (when autoHide=true) */
  hideDelay?: number;
  /** Controlled visibility. If provided, overrides autoHide behavior */
  visible?: boolean;
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  className,
  autoHide = true,
  hideDelay = 1000,
  visible,
}: SlideNavigationProps) {
  const [isVisible, setIsVisible] = useState<boolean>(visible ?? true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (visible !== undefined) {
      setIsVisible(visible);
      return;
    }

    const show = () => {
      setIsVisible(true);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      if (autoHide) {
        timeoutRef.current = window.setTimeout(
          () => setIsVisible(false),
          hideDelay
        );
      }
    };

    const onMove = () => show();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') show();
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchstart', onMove);
    document.addEventListener('keydown', onKey);

    // initial hide if autoHide enabled
    if (autoHide) setIsVisible(false);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('touchstart', onMove);
      document.removeEventListener('keydown', onKey);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [visible, autoHide, hideDelay]);

  const wrapperClass = cn(
    'fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50 transition-all duration-200',
    'fixed bottom-4 sm:bottom-6 md:bottom-8',
    'left-1/2 -translate-x-1/2',
    'flex items-center gap-2 sm:gap-3 md:gap-4',
    'z-50',
    className,
    isVisible
      ? 'opacity-100 pointer-events-auto translate-y-0'
      : 'opacity-0 pointer-events-none translate-y-4'
  );

  return (
    <div className={wrapperClass}>
      <Button
        variant="outline"
        size="icon"
        onClick={onPrevious}
        disabled={currentSlide === 0}
        // className="h-12 w-12 rounded-full bg-card/80 backdrop-blur-sm"
        className={cn(
          'h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12',
          'rounded-full bg-card/80 backdrop-blur-sm',
          'border-2'
        )}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <div
        //  className="bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full border"
        className={cn(
          'bg-card/80 backdrop-blur-sm',
          'px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3',
          'rounded-full border-2'
        )}
      >
        <span
          // className="text-lg font-medium"
          className="text-sm sm:text-base md:text-lg font-medium whitespace-nowrap"
        >
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        // className="h-12 w-12 rounded-full bg-card/80 backdrop-blur-sm"
        className={cn(
          'h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12',
          'rounded-full bg-card/80 backdrop-blur-sm',
          'border-2'
        )}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}
