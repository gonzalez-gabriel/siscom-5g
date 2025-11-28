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

function slice2() {
  return (
    <PresentationSlide key={1}>
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
          ¿De qué vamos a hablar hoy?
        </SlideTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          <Card className="p-2 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2">
            <Smartphone className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mb-1 sm:mb-4" />
            <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-2">
              Evolución del 5G
            </h3>
            <p className="text-muted-foreground text-[10px] sm:text-base md:text-lg">
              50 años de innovación móvil
            </p>
          </Card>
          <Card className="p-2 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2">
            <Network className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent mb-1 sm:mb-4" />
            <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-2">
              5G + IoT + M2M
            </h3>
            <p className="text-muted-foreground text-[10px] sm:text-base md:text-lg">
              La combinación perfecta
            </p>
          </Card>
          <Card className="p-2 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2">
            <Factory className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-chart-2 mb-1 sm:mb-4" />
            <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-2">
              Aplicaciones Reales
            </h3>
            <p className="text-muted-foreground text-[10px] sm:text-base md:text-lg">
              Casos que están cambiando el mundo
            </p>
          </Card>
          <Card className="p-2 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2">
            <TrendingUp className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-chart-1 mb-1 sm:mb-4" />
            <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-2">
              El Futuro que nos espera
            </h3>
            <p className="text-muted-foreground text-[10px] sm:text-base md:text-lg">
              5G Advanced y más allá
            </p>
          </Card>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slice2;
