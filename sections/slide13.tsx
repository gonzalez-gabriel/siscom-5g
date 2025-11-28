import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
} from '@/components/presentation-slide';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Globe } from 'lucide-react';

function slide13() {
  return (
    <PresentationSlide
      key={12}
      className="bg-gradient-to-br from-primary/10 to-chart-2/10"
    >
      <SlideContent className="flex flex-col justify-center px-4 sm:px-6">
        <SlideTitle
          size="md"
          className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        >
          El boom de 5G IoT: Números que impactan
        </SlideTitle>
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 mb-3 sm:mb-4 md:mb-6 ">
            <Card className="p-3 sm:p-4 md:p-6 text-center border-2 gap-2">
              <Badge className="mb-1 sm:mb-2 md:mb-3  text-xs sm:text-sm md:text-base lg:text-lg px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-2">
                2023
              </Badge>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                25.6M
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">
                conexiones 5G IoT
              </p>
            </Card>

            <Card className="p-3 sm:p-4 md:p-6  text-center border-2 sm:border-3 md:border-4 border-primary shadow-lg sm:shadow-xl md:shadow-2xl shadow-primary/30 gap-2">
              <Badge className="mb-1 sm:mb-2 md:mb-3  bg-primary text-xs sm:text-sm md:text-base lg:text-lg px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-2">
                2030
              </Badge>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                820M+
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                conexiones 5G IoT
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            <Card className="gap-2 p-3 sm:p-4 md:p-5  text-center bg-accent/10 border-2 border-accent">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-1 sm:mb-1.5 md:mb-2 lg:mb-3">
                32x
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Crecimiento en 7 años
              </p>
            </Card>

            <Card className="gap-2 p-3 sm:p-4 md:p-5  text-center bg-primary/10 border-2 border-primary">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-1.5 md:mb-2 lg:mb-3">
                59%
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Crecimiento anual (CAGR)
              </p>
            </Card>

            <Card className="gap-2 p-3 sm:p-4 md:p-5  text-center bg-chart-2/10 border-2 border-chart-2 col-span-1 sm:col-span-2 md:col-span-1">
              <Globe className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 mx-auto mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 text-chart-2" />
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                Equivalente a la población de Europa en dispositivos
              </p>
            </Card>
          </div>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide13;
