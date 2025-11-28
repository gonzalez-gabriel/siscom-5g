import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
  SlideSubtitle,
  SlideText,
} from '@/components/presentation-slide';
import { Badge } from '@/components/ui/badge';
import { Signal } from 'lucide-react';

export default function slide1() {
  return (
    <PresentationSlide
      key={0}
      className="bg-gradient-to-br from-primary/10 via-background to-accent/10"
    >
      <SlideContent className="text-center">
        <div className="mb-6 sm:mb-8">
          <Badge className="text-sm sm:text-base md:text-lg px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 mb-4 sm:mb-6">
            Sistemas de Comunicaciones 2025
          </Badge>
        </div>
        <SlideTitle size="xl" className="text-primary mb-6 sm:mb-8">
          Tecnologías 5G, IoT y M2M
        </SlideTitle>
        <SlideSubtitle className="mb-8 sm:mb-10 md:mb-12">
          Situación Actual, Casos de Éxito y Perspectiva a Futuro
        </SlideSubtitle>
        <div className="space-y-2 sm:space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">
          <p className="font-semibold">González Gabriel Isaías</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Universidad Nacional de Tucumán - FACET
          </p>
        </div>
        <div className="hidden sm:block absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 -translate-x-1/2">
          <Signal className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary/20 animate-pulse" />
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}
