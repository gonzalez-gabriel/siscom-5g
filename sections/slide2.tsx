import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
} from '@/components/presentation-slide';
import { Card } from '@/components/ui/card';
import { Factory, Network, Signal, Smartphone, TrendingUp } from 'lucide-react';

function slide2() {
  return (
    <PresentationSlide key={1}>
      <SlideContent className="flex flex-col justify-center px-4 sm:px-6">
        <SlideTitle
          size="md"
          className="text-center mb-4 sm:mb-6 md:mb-2 lg:mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        >
          ¿De qué vamos a hablar hoy?
        </SlideTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto w-full">
          <Card className="p-3 sm:p-4 md:p-6 lg:p-8 hover:shadow-xl transition-shadow border-2">
            <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-primary mb-2 sm:mb-3 md:mb-4" />
            <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold mb-1 sm:mb-1.5 md:mb-2">
              Evolución del 5G
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg">
              50 años de innovación móvil
            </p>
          </Card>
          <Card className="p-3 sm:p-4 md:p-6 lg:p-8 hover:shadow-xl transition-shadow border-2">
            <Network className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-accent mb-2 sm:mb-3 md:mb-4" />
            <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold mb-1 sm:mb-1.5 md:mb-2">
              5G + IoT + M2M
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg">
              La combinación perfecta
            </p>
          </Card>
          <Card className="p-3 sm:p-4 md:p-6 lg:p-8 hover:shadow-xl transition-shadow border-2">
            <Factory className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-chart-2 mb-2 sm:mb-3 md:mb-4" />
            <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold mb-1 sm:mb-1.5 md:mb-2">
              Aplicaciones Reales
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg">
              Casos que están cambiando el mundo
            </p>
          </Card>
          <Card className="p-3 sm:p-4 md:p-6 lg:p-8 hover:shadow-xl transition-shadow border-2">
            <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-chart-1 mb-2 sm:mb-3 md:mb-4" />
            <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold mb-1 sm:mb-1.5 md:mb-2">
              El Futuro que nos espera
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg">
              5G Advanced y más allá
            </p>
          </Card>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide2;
