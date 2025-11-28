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

function slide18() {
  return (
    <PresentationSlide
      key={17}
      className="bg-gradient-to-br from-primary/20 via-background to-accent/20"
    >
      <SlideContent className="text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              "El 5G no es solo la siguiente G.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-muted-foreground text-balance">
              Es el habilitador de la cuarta revolución industrial,
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-muted-foreground text-balance">
              de las ciudades inteligentes,
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-muted-foreground text-balance">
              de la medicina del futuro.
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mt-6 sm:mt-8 md:mt-12 text-balance">
              Estamos apenas en el comienzo."
            </p>
          </div>
          <Network className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto text-primary/20 animate-pulse" />
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide18;
