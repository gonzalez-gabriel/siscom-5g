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

function slide13() {
  return (
    <PresentationSlide
      key={12}
      className="bg-gradient-to-br from-primary/10 to-chart-2/10"
    >
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
          El boom de 5G IoT: Números que impactan
        </SlideTitle>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-8 md:gap-12 mb-2 sm:mb-12">
            <Card className="p-2 sm:p-8 md:p-12 text-center border-2">
              <Badge className="mb-1 sm:mb-5 md:mb-6 text-[10px] sm:text-base md:text-lg px-1.5 py-0.5 sm:px-4 sm:py-2">
                2023
              </Badge>
              <p className="text-2xl sm:text-5xl md:text-6xl font-bold text-muted-foreground mb-0.5 sm:mb-3 md:mb-4">
                25.6M
              </p>
              <p className="text-xs sm:text-lg md:text-xl text-muted-foreground">
                conexiones 5G IoT
              </p>
            </Card>

            <Card className="p-2 sm:p-8 md:p-12 text-center border-2 sm:border-4 border-primary shadow-xl sm:shadow-2xl shadow-primary/30">
              <Badge className="mb-1 sm:mb-5 md:mb-6 bg-primary text-[10px] sm:text-base md:text-lg px-1.5 py-0.5 sm:px-4 sm:py-2">
                2030
              </Badge>
              <p className="text-2xl sm:text-5xl md:text-6xl font-bold text-primary mb-0.5 sm:mb-3 md:mb-4">
                820M+
              </p>
              <p className="text-xs sm:text-lg md:text-xl">conexiones 5G IoT</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-5 md:gap-6">
            <Card className="p-2 sm:p-6 md:p-8 text-center bg-accent/10 border-2 border-accent">
              <p className="text-xl sm:text-4xl md:text-5xl font-bold text-accent mb-0.5 sm:mb-2 md:mb-3">
                32x
              </p>
              <p className="text-xs sm:text-lg md:text-xl">
                Crecimiento en 7 años
              </p>
            </Card>

            <Card className="p-2 sm:p-6 md:p-8 text-center bg-primary/10 border-2 border-primary">
              <p className="text-xl sm:text-4xl md:text-5xl font-bold text-primary mb-0.5 sm:mb-2 md:mb-3">
                59%
              </p>
              <p className="text-xs sm:text-lg md:text-xl">
                Crecimiento anual (CAGR)
              </p>
            </Card>

            <Card className="p-2 sm:p-6 md:p-8 text-center bg-chart-2/10 border-2 border-chart-2 col-span-1 sm:col-span-2 md:col-span-1">
              <Globe className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-0.5 sm:mb-2 md:mb-3 text-chart-2" />
              <p className="text-[10px] sm:text-sm md:text-base leading-relaxed">
                Equivalente a la población de Europa en dispositivos
              </p>
            </Card>
          </div>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide13;
