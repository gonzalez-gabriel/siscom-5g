import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
  SlideSubtitle,
  SlideText,
} from '@/components/presentation-slide';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  CheckCircle2,
  Factory,
  Globe,
  MessageSquare,
  Network,
  Radio,
  Signal,
  Smartphone,
  TrendingUp,
  Video,
  Wifi,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

function slide11() {
  return (
    <PresentationSlide key={10}>
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
          Industria 4.0: La Fábrica del futuro
        </SlideTitle>
        <div className="space-y-2 sm:space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 md:gap-8  mx-auto">
            <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-shadow">
              {/* Ícono sin contenedor en mobile */}
              <div className="sm:hidden">
                <CheckCircle2 className="h-5 w-5 text-primary mb-1" />
              </div>

              {/* Ícono con círculo para sm+ (tablet/desktop) */}
              <div className="hidden sm:flex bg-primary/10 w-16 h-16 rounded-full items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="h-10 w-10 md:h-12 md:w-12 text-primary" />
              </div>

              <h3 className="text-sm text-left sm:text-center sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
                Mantenimiento predictivo
              </h3>
              {/* <ArrowRight className="h-8 w-8 mx-auto my-4 text-muted-foreground hidden sm:block" /> */}
              <p className="text-[10px] text-left sm:text-center sm:text-base md:text-lg text-muted-foreground">
                Miles de sensores monitoreando 24/7 anticipando fallas
              </p>
            </Card>

            <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-shadow">
              {/* Ícono móvil */}
              <div className="sm:hidden">
                <Video className="h-5 w-5 text-accent mb-1" />
              </div>

              {/* Ícono con círculo en sm+ */}
              <div className="hidden sm:flex bg-accent/10 w-16 h-16 rounded-full items-center justify-center mx-auto mb-3">
                <Video className="h-10 w-10 md:h-12 md:w-12 text-accent" />
              </div>
              <h3 className="text-sm text-left sm:text-center sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
                Control de Calidad
              </h3>
              {/* <ArrowRight className="h-8 w-8 mx-auto my-4 text-muted-foreground hidden sm:block" /> */}
              <p className="text-[10px] text-left sm:text-center sm:text-base md:text-lg text-muted-foreground">
                Cámaras HD con IA detectan defectos al instante
              </p>
            </Card>

            <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-shadow">
              {/* Ícono móvil */}
              <div className="sm:hidden">
                <Globe className="h-5 w-5 text-chart-2 mb-1" />
              </div>

              {/* Ícono con círculo en sm+ */}
              <div className="hidden sm:flex bg-chart-2/10 w-16 h-16 rounded-full items-center justify-center mx-auto mb-3">
                <Globe className="h-10 w-10 md:h-12 md:w-12 text-chart-2" />
              </div>
              <h3 className="text-sm text-left sm:text-center sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
                Monitoreo remoto
              </h3>
              {/* <ArrowRight className="h-8 w-8 mx-auto my-4 text-muted-foreground hidden sm:block" /> */}
              <p className="text-[10px] text-left sm:text-center sm:text-base md:text-lg text-muted-foreground">
                Plataformas controladas desde cualquier lugar
              </p>
            </Card>
          </div>

          <Card className="p-2 sm:p-6 md:p-8 max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-2">
            <h4 className="text-sm sm:text-2xl md:text-2xl font-bold text-center mb-2 sm:mb-6">
              Resultados
            </h4>
            <div className="grid grid-cols-2 gap-2 sm:gap-6 md:gap-8">
              <div className="text-center">
                <TrendingUp className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-0.5 sm:mb-3 text-primary" />
                <p className="text-xl sm:text-4xl md:text-4xl font-bold text-primary mb-0.5 sm:mb-2">
                  +20-40%
                </p>
                <p className="text-xs sm:text-lg">Eficiencia</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-0.5 sm:mb-3 text-accent rotate-180" />
                <p className="text-xl sm:text-4xl md:text-4xl font-bold text-accent mb-0.5 sm:mb-2">
                  -30-50%
                </p>
                <p className="text-xs sm:text-lg">Tiempo de inactividad</p>
              </div>
            </div>
          </Card>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide11;
