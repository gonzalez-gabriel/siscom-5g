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
} from 'lucide-react';
import { cn } from '@/lib/utils';

function slide4() {
  return (
    <PresentationSlide key={3}>
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
          50 años de evolución móvil
        </SlideTitle>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-muted via-primary to-accent"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1.5 sm:gap-4 md:gap-6 lg:gap-8 relative">
            {[
              {
                gen: '1G',
                year: '1980s',
                icon: Radio,
                desc: 'Llamadas inalámbricas',
                color: 'text-muted-foreground',
              },
              {
                gen: '2G',
                year: '1990s',
                icon: MessageSquare,
                desc: 'SMS + Digital',
                color: 'text-muted-foreground',
              },
              {
                gen: '3G',
                year: '2000s',
                icon: Globe,
                desc: 'Internet móvil',
                color: 'text-chart-3',
              },
              {
                gen: '4G',
                year: '2010s',
                icon: Video,
                desc: 'Streaming + Apps',
                color: 'text-chart-2',
              },
              {
                gen: '5G',
                year: '2020s',
                icon: Signal,
                desc: 'IoT + Industria 4.0',
                color: 'text-primary',
              },
            ].map((item, i) => (
              <Card
                key={i}
                className={cn(
                  'p-1.5 sm:p-4 md:p-6 bg-card hover:scale-105 transition-transform',
                  i === 4
                    ? 'col-span-2 sm:col-span-1 border-2 sm:border-4 border-primary shadow-xl sm:shadow-2xl shadow-primary/20'
                    : ''
                )}
              >
                <item.icon
                  className={cn(
                    'h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-0.5 sm:mb-3 md:mb-4',
                    item.color
                  )}
                />
                <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-center mb-0 sm:mb-2">
                  {item.gen}
                </h3>
                <p className="text-[9px] sm:text-sm text-center text-muted-foreground mb-0 sm:mb-2">
                  {item.year}
                </p>
                <p className="text-center text-[9px] sm:text-sm leading-tight sm:leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide4;
