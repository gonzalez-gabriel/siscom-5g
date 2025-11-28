import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
} from '@/components/presentation-slide';
import { Card } from '@/components/ui/card';
import { Globe } from 'lucide-react';

function slide15() {
  return (
    <PresentationSlide key={14}>
      <SlideContent>
        <SlideTitle size="md">¿Quién lidera la carrera del 5G?</SlideTitle>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-3">
            <Card className="gap-2 p-6 sm:p-8  border-2 sm:border-4 border-primary shadow-xl sm:shadow-2xl shadow-primary/30 relative">
              <div className="absolute -top-4 sm:-top-5 md:-top-6 left-1/2 -translate-x-1/2 text-4xl sm:text-5xl md:text-6xl">
                🥇
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 sm:mb-3 md:mb-4 text-primary mt-4">
                CHINA
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground">
                Miles de implementaciones activas
              </p>
            </Card>
          </div>

          {/* Grid responsive: 2 columnas */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-3">
            <Card className="gap-2 p-4 sm:p-6  text-center border-2">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🥈</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                Europa
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Preparación activa
              </p>
            </Card>

            <Card className="gap-2 p-4 sm:p-6  text-center border-2">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🥉</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                América
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Competencia agresiva
              </p>
            </Card>
          </div>

          <Card className="gap-2 p-5 sm:p-6 bg-gradient-to-r from-accent/20 to-primary/20 border-2 sm:border-4 border-accent">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <Globe className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-accent" />
              <div>
                <h3 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-1 sm:mb-2">
                  🌎 Latinoamérica
                </h3>
                <p className="text-xl sm:text-xl md:text-1xl text-accent font-bold">
                  GRAN OPORTUNIDAD
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide15;
