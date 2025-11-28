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

function slide12() {
  return (
    <PresentationSlide key={11}>
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
          Ya está sucediendo: Ciudades inteligentes
        </SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {[
            {
              flag: '🇪🇸',
              city: 'Barcelona',
              app: 'Farolas LED inteligentes que ahorran 30% energía',
            },
            {
              flag: '🇺🇸',
              city: 'San Francisco',
              app: 'Contenedores inteligentes optimizan recolección',
            },
            {
              flag: '🇰🇷',
              city: 'Seúl',
              app: 'Transporte público con rutas optimizadas en tiempo real',
            },
            {
              flag: '🇩🇪',
              city: 'Darmstadt',
              app: 'Sensores de tráfico reducen congestión 25%',
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-1.5 sm:gap-4 mb-1 sm:mb-4">
                <span className="text-xl sm:text-5xl">{item.flag}</span>
                <h3 className="text-sm sm:text-2xl font-bold">{item.city}</h3>
              </div>
              <p className="text-[10px] sm:text-lg text-muted-foreground leading-relaxed">
                {item.app}
              </p>
            </Card>
          ))}
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide12;
