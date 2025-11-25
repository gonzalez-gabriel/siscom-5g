"use client"

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PresentationSlideProps {
  children: ReactNode
  className?: string
  background?: string
}

export function PresentationSlide({ children, className, background }: PresentationSlideProps) {
  return (
    <div 
      className={cn(
        "w-full h-screen flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden",
        background || "bg-background",
        className
      )}
    >
      {children}
    </div>
  )
}

interface SlideContentProps {
  children: ReactNode
  className?: string
}

export function SlideContent({ children, className }: SlideContentProps) {
  return (
    <div className={cn("w-full max-w-6xl mx-auto z-10", className)}>
      {children}
    </div>
  )
}

interface SlideTitleProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function SlideTitle({ children, className, size = 'lg' }: SlideTitleProps) {
  const sizeClasses = {
    sm: 'text-4xl md:text-5xl',
    md: 'text-5xl md:text-6xl',
    lg: 'text-6xl md:text-7xl',
    xl: 'text-7xl md:text-8xl'
  }
  
  return (
    <h1 className={cn(
      "font-bold tracking-tight mb-6 text-balance",
      sizeClasses[size],
      className
    )}>
      {children}
    </h1>
  )
}

interface SlideSubtitleProps {
  children: ReactNode
  className?: string
}

export function SlideSubtitle({ children, className }: SlideSubtitleProps) {
  return (
    <p className={cn("text-2xl md:text-3xl text-muted-foreground mb-4", className)}>
      {children}
    </p>
  )
}

interface SlideTextProps {
  children: ReactNode
  className?: string
}

export function SlideText({ children, className }: SlideTextProps) {
  return (
    <p className={cn("text-xl md:text-2xl leading-relaxed", className)}>
      {children}
    </p>
  )
}
