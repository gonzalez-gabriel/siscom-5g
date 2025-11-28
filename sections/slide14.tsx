import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
} from '@/components/presentation-slide';
import { Card } from '@/components/ui/card';

function slide14() {
  return (
    <PresentationSlide key={13}>
      <SlideContent className="flex flex-col justify-center px-4 sm:px-6">
        <SlideTitle
          size="md"
          className="text-center mb-3 sm:mb-4 md:mb-3 lg:mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        >
          Redes privadas: Crecimiento explosivo
        </SlideTitle>
        <div className="max-w-5xl mx-auto w-full">
          <div className="space-y-2 sm:space-y-3 md:space-y-4  mb-4 sm:mb-5 md:mb-6">
            {[
              { year: '2023', value: 1.3, width: '5%' },
              { year: '2025', value: 5, width: '15%' },
              { year: '2027', value: 25, width: '40%' },
              { year: '2030', value: 107, width: '100%' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6"
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold w-12 sm:w-14 md:w-16">
                  {item.year}
                </span>
                <div className="flex-1 bg-muted rounded-full h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 overflow-hidden relative">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-full flex items-center justify-start px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 transition-all duration-1000"
                    style={{ width: item.width }}
                  >
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white">
                      {item.value}M
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Grid responsive: 2 columnas */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 mb-3 sm:mb-4 ">
            <Card className="gap-2 p-3 sm:p-4 md:p-5 text-center bg-accent/10 border-2 border-accent">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-1 sm:mb-1.5 md:mb-2 lg:mb-3">
                65.4%
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Crecimiento anual
              </p>
            </Card>

            <Card className="gap-2 p-3 sm:p-4 md:p-5 text-center bg-primary/10 border-2 border-primary">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-1.5 md:mb-2 lg:mb-3">
                ×84
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Multiplicación en 7 años
              </p>
            </Card>
          </div>

          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4  text-primary font-semibold">
            Uno de los crecimientos más rápidos en la historia tecnológica
          </p>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide14;
