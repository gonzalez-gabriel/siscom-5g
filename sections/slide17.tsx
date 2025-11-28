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

function slide17() {
  return (
    <PresentationSlide key={16}>
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-8 sm:mb-12 md:mb-16">
          5G + IoT + M2M = Revolución Digital
        </SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          <Card className="p-4 sm:p-6 md:p-8 border-2 hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="bg-primary/10 rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl sm:text-2xl md:text-2xl font-bold text-primary">
                  1
                </span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-3">
                  🚀 Crecimiento exponencial
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  820M+ conexiones en 2030
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 md:p-8 border-2 hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="bg-accent/10 rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl sm:text-2xl md:text-2xl font-bold text-accent">
                  2
                </span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-3">
                  🌐 Ecosistema completo
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  IoT integra M2M en plataforma global
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 md:p-8 border-2 hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="bg-chart-2/10 rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl sm:text-2xl md:text-2xl font-bold text-chart-2">
                  3
                </span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-3">
                  💼 Aplicaciones reales
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  Industria, salud, ciudades, agricultura
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 md:p-8 border-2 hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="bg-chart-1/10 rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-xl sm:text-2xl md:text-2xl font-bold text-chart-1">
                  4
                </span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-3">
                  🔮 Futuro prometedor
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  5G Advanced hasta 2028, 6G en 2030
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide17;
