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
  Cpu,
  Database,
  Factory,
  Globe,
  Lock,
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

function slide7() {
  return (
    <PresentationSlide key={6}>
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
          IoT y M2M: ¿Son lo mismo?
        </SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
          <Card className="p-2 sm:p-6 md:p-8 border-2">
            <h3 className="text-base sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-6 md:mb-8 text-center">
              M2M
            </h3>
            <div className="space-y-1.5 sm:space-y-5 md:space-y-6">
              <div className="flex items-start gap-1.5 sm:gap-4">
                <Radio className="h-4 w-4 sm:h-7 sm:w-7 md:h-8 md:w-8 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-lg font-semibold">
                    Punto a punto
                  </p>
                  <p className="text-muted-foreground text-[10px] sm:text-base">
                    Comunicación directa
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-1.5 sm:gap-4">
                <Database className="h-4 w-4 sm:h-7 sm:w-7 md:h-8 md:w-8 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-lg font-semibold">
                    Datos simples
                  </p>
                  <p className="text-muted-foreground text-[10px] sm:text-base">
                    Información básica
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-1.5 sm:gap-4">
                <Lock className="h-4 w-4 sm:h-7 sm:w-7 md:h-8 md:w-8 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-lg font-semibold">
                    Sistemas cerrados
                  </p>
                  <p className="text-muted-foreground text-[10px] sm:text-base">
                    Propietarios
                  </p>
                </div>
              </div>
              <div className="bg-muted p-1.5 sm:p-4 rounded-lg">
                <p className="text-[10px] sm:text-sm font-medium">Ejemplo:</p>
                <p className="text-[10px] sm:text-sm text-muted-foreground">
                  Medidor → Compañía eléctrica
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-2 sm:p-6 md:p-8 border-2 border-primary shadow-xl shadow-primary/20">
            <h3 className="text-base sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-6 md:mb-8 text-center text-primary">
              IoT + 5G
            </h3>
            <div className="space-y-1.5 sm:space-y-5 md:space-y-6">
              <div className="flex items-start gap-1.5 sm:gap-4">
                <Globe className="h-4 w-4 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-lg font-semibold">
                    Ecosistema completo
                  </p>
                  <p className="text-muted-foreground text-[10px] sm:text-base">
                    Red inteligente
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-1.5 sm:gap-4">
                <Cpu className="h-4 w-4 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-lg font-semibold">
                    Big Data + IA
                  </p>
                  <p className="text-muted-foreground text-[10px] sm:text-base">
                    Análisis avanzado
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-1.5 sm:gap-4">
                <Network className="h-4 w-4 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-lg font-semibold">
                    Plataformas abiertas
                  </p>
                  <p className="text-muted-foreground text-[10px] sm:text-base">
                    Interoperabilidad
                  </p>
                </div>
              </div>
              <div className="bg-primary/10 p-1.5 sm:p-4 rounded-lg border border-primary/30">
                <p className="text-[10px] sm:text-sm font-medium">Ejemplo:</p>
                <p className="text-[10px] sm:text-sm text-muted-foreground">
                  Smart City conectada vía 5G
                </p>
              </div>
            </div>
          </Card>
        </div>
        <p className="text-center text-sm sm:text-lg md:text-xl mt-4 sm:mt-8 md:mt-12 font-semibold text-primary">
          M2M es el músculo, IoT es el cerebro
        </p>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide7;
