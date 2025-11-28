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

function slide14() {
  return (
    <PresentationSlide key={13}>
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-8 sm:mb-12 md:mb-16">
          Redes privadas: Crecimiento explosivo
        </SlideTitle>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
            Redes Privadas 5G IoT
          </h3>
          <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8 md:mb-12">
            {[
              { year: '2023', value: 1.3, width: '5%' },
              { year: '2025', value: 5, width: '15%' },
              { year: '2027', value: 25, width: '40%' },
              { year: '2030', value: 107, width: '100%' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 sm:gap-5 md:gap-6"
              >
                <span className="text-xl sm:text-2xl md:text-2xl font-bold w-16">
                  {item.year}
                </span>
                <div className="flex-1 bg-muted rounded-full h-10 sm:h-12 md:h-16 overflow-hidden relative">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-full flex items-center justify-start px-4 sm:px-5 md:px-6 transition-all duration-1000"
                    style={{ width: item.width }}
                  >
                    <span className="text-base sm:text-lg md:text-xl font-bold text-white">
                      {item.value}M
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Grid responsive: 2 columnas */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
            <Card className="p-4 sm:p-6 md:p-8 text-center bg-accent/10 border-2 border-accent">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2 md:mb-3">
                65.4%
              </p>
              <p className="text-base sm:text-lg md:text-xl">
                Crecimiento anual
              </p>
            </Card>

            <Card className="p-4 sm:p-6 md:p-8 text-center bg-primary/10 border-2 border-primary">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2 md:mb-3">
                ×84
              </p>
              <p className="text-base sm:text-lg md:text-xl">
                Multiplicación en 7 años
              </p>
            </Card>
          </div>

          <p className="text-center text-base sm:text-lg md:text-xl mt-6 sm:mt-8 md:mt-8 text-primary font-semibold">
            Uno de los crecimientos más rápidos en la historia tecnológica
          </p>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide14;
