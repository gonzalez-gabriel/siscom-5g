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
  CheckCircle2,
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

function slide16() {
  return (
    <PresentationSlide key={15}>
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-8 sm:mb-12 md:mb-16">
          El futuro del 5G: 5G Advanced
        </SlideTitle>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
            <Card className="p-4 sm:p-6 md:p-8 border-2">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-center">
                5G
              </h3>
              <Badge className="mb-4 sm:mb-5 md:mb-6">2020-2024</Badge>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Signal className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  <span className="text-base sm:text-lg">
                    eMBB, URLLC, mMTC
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-primary shadow-xl sm:shadow-2xl shadow-primary/30">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-center text-primary">
                5G Advanced
              </h3>
              <Badge className="mb-4 sm:mb-5 md:mb-6 bg-primary">
                2024-2028
              </Badge>
              <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                {[
                  '✓ IA nativa integrada',
                  '✓ Posicionamiento ultra-preciso',
                  '✓ Eficiencia energética radical',
                  '✓ Realidad Extendida (XR)',
                  '✓ RedCap para IoT masivo',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 sm:gap-2.5 md:gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <span className="text-base sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-4 sm:p-6 md:p-8 text-center bg-muted">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              <span className="font-bold">Release 18-21</span> del 3GPP
            </p>
          </Card>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide16;
