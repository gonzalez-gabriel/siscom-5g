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

function slide6() {
  return (
    <PresentationSlide key={5}>
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-2">
          ¿Cómo lo hace posible?
        </SlideTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 md:gap-4 max-w-4xl mx-auto">
          <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-all hover:scale-105">
            <Signal className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mb-1 sm:mb-3" />
            <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
              MIMO Masivo
            </h3>
            <p className="text-[10px] sm:text-base md:text-lg text-muted-foreground">
              Múltiples antenas trabajando en paralelo
            </p>
          </Card>

          <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-all hover:scale-105">
            <Network className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent mb-1 sm:mb-3" />
            <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
              Network Slicing
            </h3>
            <p className="text-[10px] sm:text-base md:text-lg text-muted-foreground">
              Redes virtuales personalizadas
            </p>
          </Card>

          <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-all hover:scale-105">
            <Cpu className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-chart-2 mb-1 sm:mb-3" />
            <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
              Edge Computing
            </h3>
            <p className="text-[10px] sm:text-base md:text-lg text-muted-foreground">
              Procesamiento en el borde de la red
            </p>
          </Card>

          <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-all hover:scale-105">
            <Radio className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-chart-1 mb-1 sm:mb-3" />
            <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
              Nuevo Espectro
            </h3>
            <p className="text-[10px] sm:text-base md:text-lg text-muted-foreground">
              Ondas milimétricas de alta frecuencia
            </p>
          </Card>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide6;
