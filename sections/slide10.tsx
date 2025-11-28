import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
} from '@/components/presentation-slide';
import { Card } from '@/components/ui/card';
import { Building2, Car, Factory, Home, Hospital, Sprout } from 'lucide-react';

function slide10() {
  return (
    <PresentationSlide key={9}>
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-8 sm:mb-12 md:mb-8">
          5G IoT en acción: Casos reales
        </SlideTitle>
        {/* Grid responsive: 2 columnas en mobile, 3 en desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
          {[
            { icon: Factory, label: 'Industria 4.0', color: 'text-primary' },
            { icon: Hospital, label: 'Salud', color: 'text-accent' },
            {
              icon: Building2,
              label: 'Ciudades Inteligentes',
              color: 'text-chart-2',
            },
            {
              icon: Sprout,
              label: 'Agricultura de Precisión',
              color: 'text-chart-4',
            },
            {
              icon: Car,
              label: 'Transporte Inteligente',
              color: 'text-chart-1',
            },
            {
              icon: Home,
              label: 'Hogares Inteligentes',
              color: 'text-chart-5',
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="p-4 sm:p-5 md:p-8 text-center hover:scale-110 transition-transform cursor-pointer border-2 hover:shadow-2xl"
            >
              <item.icon
                className={`h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 mx-auto mb-3 sm:mb-4 ${item.color}`}
              />
              <h3 className="text-base sm:text-lg md:text-xl font-bold">
                {item.label}
              </h3>
            </Card>
          ))}
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide10;
