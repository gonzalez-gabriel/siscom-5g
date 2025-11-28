import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
  SlideSubtitle,
  SlideText,
} from '@/components/presentation-slide';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Factory, Network, Signal, Smartphone, TrendingUp } from 'lucide-react';

function slide3() {
  return (
    <PresentationSlide
      key={2}
      className="bg-gradient-to-br from-primary/20 to-accent/20"
    >
      <SlideContent className="text-center">
        <SlideTitle size="lg" className="mb-8 sm:mb-12 md:mb-16">
          Imagina este escenario...
        </SlideTitle>
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          <div className="bg-card/90 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-primary/30">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 sm:mb-3 md:mb-4">
              1 millón
            </p>
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-muted-foreground">
              dispositivos conectados por km²
            </p>
          </div>
          <div className="bg-card/90 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-accent/30">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2 sm:mb-3 md:mb-4">
              1 ms
            </p>
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-muted-foreground">
              de latencia - más rápido que un parpadeo
            </p>
          </div>
          <SlideText className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            ¿Ciencia ficción? <span className="text-primary">No, es 5G.</span>
          </SlideText>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide3;
