import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
  SlideSubtitle,
} from '@/components/presentation-slide';
import { Badge } from '@/components/ui/badge';
import { Signal } from 'lucide-react';

export default function slide1() {
  return (
    <PresentationSlide
      key={0}
      className="bg-gradient-to-br from-primary/10 via-background to-accent/10"
    >
      <SlideContent className="text-center flex flex-col justify-center px-4 sm:px-6 md:px-8">
        <div className="mb-3 sm:mb-4 md:mb-6">
          <Badge className="text-xs sm:text-sm md:text-base lg:text-lg px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-2">
            Sistemas de Comunicaciones 2025
          </Badge>
        </div>
        <SlideTitle
          size="xl"
          className="text-primary mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
        >
          Tecnologías 5G, IoT y M2M
        </SlideTitle>
        <SlideSubtitle className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Situación Actual, Casos de Éxito y Perspectiva a Futuro
        </SlideSubtitle>
        <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground">
          <p className="font-semibold">González Gabriel Isaías</p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Universidad Nacional de Tucumán - FACET
          </p>
        </div>
        <div className="hidden lg:block absolute bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2">
          <Signal className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 text-primary/20 animate-pulse" />
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}
