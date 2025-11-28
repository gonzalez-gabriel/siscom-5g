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

function slide9() {
  return (
    <PresentationSlide key={8}>
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
          5G: El habilitador perfecto para IoT
        </SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="space-y-1.5 sm:space-y-5 md:space-y-6">
            <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-destructive mb-2 sm:mb-6 md:mb-8">
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
                className="p-1.5 sm:p-5 md:p-6 border-2 border-destructive/30 bg-destructive/5"
              >
                <p className="text-xs sm:text-lg font-semibold mb-0.5">
                  ✗ {item.label}
                </p>
                <p className="text-[10px] sm:text-base text-muted-foreground">
                  {item.value}
                </p>
              </Card>
            ))}
          </div>

          <div className="space-y-1.5 sm:space-y-5 md:space-y-6">
            <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-primary mb-2 sm:mb-6 md:mb-8">
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
                className="p-1.5 sm:p-5 md:p-6 border-2 border-primary shadow-lg shadow-primary/20 bg-primary/5"
              >
                <p className="text-xs sm:text-lg font-semibold mb-0.5 text-primary">
                  ✓ {item.label}
                </p>
                <p className="text-[10px] sm:text-base text-muted-foreground">
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
