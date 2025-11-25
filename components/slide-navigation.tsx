"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
  className?: string
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  className
}: SlideNavigationProps) {
  return (
    <div className={cn("fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50", className)}>
      <Button
        variant="outline"
        size="icon"
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="h-12 w-12 rounded-full bg-card/80 backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <div className="bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full border">
        <span className="text-lg font-medium">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="h-12 w-12 rounded-full bg-card/80 backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}
