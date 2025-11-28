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

function slide5() {
  return (
    <PresentationSlide key={4}>
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
          5G: Tres pilares para un nuevo mundo
        </SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-6 md:gap-8">
          <Card className="p-2 sm:p-6 md:p-8 text-center border-2 hover:shadow-2xl transition-shadow bg-gradient-to-b from-primary/5 to-background">
            <Signal className="h-6 w-6 sm:h-12 sm:w-12 md:h-16 md:w-16 mx-auto mb-1 sm:mb-6 text-primary" />
            <h3 className="text-base sm:text-2xl font-bold mb-0.5 sm:mb-4">
              eMBB
            </h3>
            <p className="text-[10px] sm:text-lg text-muted-foreground mb-1 sm:mb-6">
              Banda Ancha Mejorada
            </p>
            <div className="space-y-0.5 sm:space-y-3">
              <p className="text-lg sm:text-3xl md:text-4xl font-bold text-primary">
                20 Gbps
              </p>
              <p className="text-xs sm:text-lg">Streaming 8K</p>
              <p className="text-[10px] sm:text-sm text-muted-foreground">
                Realidad Virtual
              </p>
            </div>
          </Card>

          <Card className="p-2 sm:p-6 md:p-8 text-center border-2 hover:shadow-2xl transition-shadow bg-gradient-to-b from-accent/5 to-background">
            <Zap className="h-6 w-6 sm:h-12 sm:w-12 md:h-16 md:w-16 mx-auto mb-1 sm:mb-6 text-accent" />
            <h3 className="text-base sm:text-2xl font-bold mb-0.5 sm:mb-4">
              URLLC
            </h3>
            <p className="text-[10px] sm:text-lg text-muted-foreground mb-1 sm:mb-6">
              Ultra-confiable Baja Latencia
            </p>
            <div className="space-y-0.5 sm:space-y-3">
              <p className="text-lg sm:text-3xl md:text-4xl font-bold text-accent">
                1 ms
              </p>
              <p className="text-xs sm:text-lg">Cirugía remota</p>
              <p className="text-[10px] sm:text-sm text-muted-foreground">
                Vehículos autónomos
              </p>
            </div>
          </Card>

          <Card className="p-2 sm:p-6 md:p-8 text-center border-2 hover:shadow-2xl transition-shadow bg-gradient-to-b from-chart-2/5 to-background">
            <Wifi className="h-6 w-6 sm:h-12 sm:w-12 md:h-16 md:w-16 mx-auto mb-1 sm:mb-6 text-chart-2" />
            <h3 className="text-base sm:text-2xl font-bold mb-0.5 sm:mb-4">
              mMTC
            </h3>
            <p className="text-[10px] sm:text-lg text-muted-foreground mb-1 sm:mb-6">
              Comunicación Masiva
            </p>
            <div className="space-y-0.5 sm:space-y-3">
              <p className="text-lg sm:text-3xl md:text-4xl font-bold text-chart-2">
                1M/km²
              </p>
              <p className="text-xs sm:text-lg">Ciudades inteligentes</p>
              <p className="text-[10px] sm:text-sm text-muted-foreground">
                IoT masivo
              </p>
            </div>
          </Card>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide5;
