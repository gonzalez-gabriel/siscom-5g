import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
} from '@/components/presentation-slide';

function slide19() {
  return (
    <PresentationSlide key={18}>
      <SlideContent className="text-center">
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 ">
          <div className="text-6xl sm:text-7xl md:text-9xl mb-4 sm:mb-6 md:mb-8">
            ❓
          </div>
          <SlideTitle size="lg">¿Preguntas?</SlideTitle>
          <div className="space-y-3 sm:space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl">
            <p className="text-xl sm:text-2xl md:text-2xl font-semibold">
              González Gabriel Isaías
            </p>
            <p className="text-muted-foreground">
              gabriel.gonzalez.unt@gmail.com
            </p>
          </div>
          <div className="pt-6 sm:pt-8 ">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
              ¡Muchas gracias por su atención!
            </p>
          </div>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide19;
