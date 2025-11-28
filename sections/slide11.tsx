import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
} from '@/components/presentation-slide';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Globe, TrendingUp, Video } from 'lucide-react';

function slide11() {
  return (
    <PresentationSlide key={10}>
      <SlideContent className="flex flex-col justify-center px-4 sm:px-6">
        <SlideTitle
          size="md"
          className="text-center mb-3 sm:mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        >
          Industria 4.0: La Fábrica del futuro
        </SlideTitle>
        <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
            <Card className="p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 border-2 hover:shadow-xl transition-shadow gap-2">
              {/* Ícono sin contenedor en mobile */}
              <div className="sm:hidden">
                <CheckCircle2 className="h-5 w-5 text-primary mb-1" />
              </div>

              {/* Ícono con círculo para sm+ (tablet/desktop) */}
              <div className="hidden sm:flex bg-primary/10 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full items-center justify-center mx-auto mb-2 md:mb-3">
                <CheckCircle2 className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-primary" />
              </div>

              <h3 className="text-sm text-left sm:text-center sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-0.5 sm:mb-1 md:mb-2 lg:mb-3">
                Mantenimiento
              </h3>
              <p className="text-[10px] text-left sm:text-center sm:text-xs md:text-sm lg:text-base xl:text-lg text-muted-foreground">
                Miles de sensores monitoreando 24/7 anticipando fallas
              </p>
            </Card>

            <Card className="p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 border-2 hover:shadow-xl transition-shadow gap-2">
              {/* Ícono móvil */}
              <div className="sm:hidden">
                <Video className="h-5 w-5 text-accent mb-1" />
              </div>

              {/* Ícono con círculo en sm+ */}
              <div className="hidden sm:flex bg-accent/10 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full items-center justify-center mx-auto mb-2 md:mb-3">
                <Video className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-accent" />
              </div>
              <h3 className="text-sm text-left sm:text-center sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-0.5 sm:mb-1 md:mb-2 lg:mb-3">
                Control de Calidad
              </h3>
              <p className="text-[10px] text-left sm:text-center sm:text-xs md:text-sm lg:text-base xl:text-lg text-muted-foreground">
                Cámaras HD con IA detectan defectos al instante
              </p>
            </Card>

            <Card className="p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 border-2 hover:shadow-xl transition-shadow gap-2">
              {/* Ícono móvil */}
              <div className="sm:hidden">
                <Globe className="h-5 w-5 text-chart-2 mb-1" />
              </div>

              {/* Ícono con círculo en sm+ */}
              <div className="hidden sm:flex bg-chart-2/10 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full items-center justify-center mx-auto mb-2 md:mb-3">
                <Globe className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-chart-2" />
              </div>
              <h3 className="text-sm text-left sm:text-center sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-0.5 sm:mb-1 md:mb-2 lg:mb-3">
                Monitoreo remoto
              </h3>
              <p className="text-[10px] text-left sm:text-center sm:text-xs md:text-sm lg:text-base xl:text-lg text-muted-foreground">
                Plataformas controladas desde cualquier lugar
              </p>
            </Card>
          </div>

          <Card className="p-3 sm:p-4 md:p-5  max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-2 gap-2">
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-2 sm:mb-3 ">
              Resultados
            </h4>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 ">
              <div className="text-center">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10  mx-auto mb-1 sm:mb-2 md:mb-3 text-primary" />
                <p className="text-xl sm:text-2xl md:text-3xl  font-bold text-primary mb-0.5 sm:mb-1 md:mb-2">
                  +20-40%
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  Eficiencia
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10  mx-auto mb-1 sm:mb-2 md:mb-3 text-accent rotate-180" />
                <p className="text-xl sm:text-2xl md:text-3xl  font-bold text-accent mb-0.5 sm:mb-1 md:mb-2">
                  -30-50%
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  Tiempo de inactividad
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide11;
