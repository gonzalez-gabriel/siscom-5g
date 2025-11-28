import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
} from '@/components/presentation-slide';
import { Card } from '@/components/ui/card';

function slide9() {
  return (
    <PresentationSlide key={8}>
      <SlideContent className="flex flex-col justify-center px-4 sm:px-6">
        <SlideTitle
          size="md"
          className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        >
          5G: El habilitador perfecto para IoT
        </SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 max-w-6xl mx-auto w-full">
          <div className="space-y-2 sm:space-y-3 ">
            <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-destructive mb-2 sm:mb-3 md:mb-4 lg:mb-6">
              Problemas del 4G
            </h3>
            {[
              { label: 'Alta latencia', value: '50-100 ms' },
              { label: 'Pocos dispositivos', value: '~100,000/km²' },
              { label: 'Batería corta', value: '1-3 años' },
              { label: 'Alto costo', value: '$20-50 por módulo' },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-2 sm:p-3 md:p-4  border-2 border-destructive/30 bg-destructive/5 gap-2"
              >
                <p className="text-xs sm:text-sm md:text-base  font-semibold mb-0.5 sm:mb-1">
                  ✗ {item.label}
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground">
                  {item.value}
                </p>
              </Card>
            ))}
          </div>

          <div className="space-y-2 sm:space-y-3 ">
            <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-primary mb-2 sm:mb-3 md:mb-4 lg:mb-6">
              Soluciones del 5G
            </h3>
            {[
              { label: '1 ms', sublabel: '50x mejor' },
              { label: '1M/km²', sublabel: '100x más' },
              { label: '10+ años', sublabel: 'Ultra eficiente' },
              { label: '<$5', sublabel: 'Accesible' },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-2 sm:p-3 md:p-4  border-2 border-primary shadow-lg shadow-primary/20 bg-primary/5 gap-2"
              >
                <p className="text-xs sm:text-sm md:text-base  font-semibold mb-0.5 sm:mb-1 text-primary">
                  ✓ {item.label}
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground">
                  {item.sublabel}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide9;
