'use client';

import { useState, useEffect, useRef } from 'react';
import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
  SlideSubtitle,
  SlideText,
} from '@/components/presentation-slide';
import { SlideNavigation } from '@/components/slide-navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Signal,
  Wifi,
  Zap,
  Globe,
  Smartphone,
  MessageSquare,
  Radio,
  Video,
  Factory,
  Hospital,
  Building2,
  Sprout,
  Car,
  Home,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Network,
  Cpu,
  Database,
  Lock,
} from 'lucide-react';
import { cn } from '@/lib/utils';

import {
  Slide1,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
  Slide18,
  Slide19,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
} from '@/sections';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 19;

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const dx = touchStartX.current - touchEndX.current;
    const threshold = 50; // px required to consider as swipe

    if (dx > threshold) {
      // swipe left -> next
      setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
    } else if (dx < -threshold) {
      // swipe right -> previous
      setCurrentSlide((prev) => Math.max(0, prev - 1));
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slides = [
    // Slide 1: Portada
    <Slide1 />,

    // Slide 2: Agenda
    <Slide2 />,

    // Slide 3: Gancho
    <Slide3 />,

    // Slide 4: Evolución 1G a 5G
    <Slide4 />,

    // Slide 5: Los 3 Pilares del 5G
    <Slide5 />,

    // Slide 6: Tecnologías Clave
    <Slide6 />,

    // Slide 7: IoT vs M2M
    <Slide7 />,

    // Slide 8: Tabla Comparativa
    <Slide8 />,

    // Slide 9: El Rol del 5G en IoT
    <Slide9 />,

    // Slide 10: Casos de Uso Grid
    <Slide10 />,

    // Slide 11: Industria 4.0
    <Slide11 />,

    // Slide 12: Ciudades Inteligentes
    <Slide12 />,

    // Slide 13: Números del Futuro Parte 1
    <Slide13 />,

    // Slide 14: Números del Futuro Parte 2
    <Slide14 />,

    // Slide 15: Liderazgo Global
    <Slide15 />,

    // Slide 16: 5G Advanced
    <Slide16 />,

    // Slide 17: Conclusiones
    <Slide17 />,

    // Slide 18: Mensaje Final
    <Slide18 />,

    // Slide 19: Preguntas
    <Slide19 />,
  ];

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full">
            {slide}
          </div>
        ))}
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
        onNext={() =>
          setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1))
        }
      />
    </div>
  );
}
