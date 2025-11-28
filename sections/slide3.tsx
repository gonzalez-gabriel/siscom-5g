import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
  SlideText,
} from '@/components/presentation-slide';

function slide3() {
  return (
    <PresentationSlide
      key={2}
      className="bg-gradient-to-br from-primary/20 to-accent/20"
    >
      <SlideContent className="text-center flex flex-col justify-center px-4 sm:px-6">
        <SlideTitle
          size="md"
          className="mb-4 sm:mb-6 md:mb-8  text-2xl sm:text-4xl md:text-4xl "
        >
          Imagina este escenario...
        </SlideTitle>
        <div className="space-y-4 sm:space-y-6 md:space-y-8  max-w-4xl mx-auto w-full">
          <div className="bg-card/90 backdrop-blur-sm p-4 sm:p-6 md:p-8  rounded-xl sm:rounded-2xl md:rounded-3xl border-2 sm:border-3 md:border-4 border-primary/30">
            <p className="text-2xl sm:text-3xl md:text-4xl  xl:text-6xl font-bold text-primary mb-1 sm:mb-2 md:mb-3 lg:mb-4">
              1 millón
            </p>
            <p className="text-sm sm:text-base md:text-lg  xl:text-3xl text-muted-foreground">
              dispositivos conectados por km²
            </p>
          </div>
          <div className="bg-card/90 backdrop-blur-sm p-4 sm:p-6 md:p-8  rounded-xl sm:rounded-2xl md:rounded-3xl border-2 sm:border-3 md:border-4 border-accent/30">
            <p className="text-2xl sm:text-3xl md:text-4xl  xl:text-6xl font-bold text-accent mb-1 sm:mb-2 md:mb-3 lg:mb-4">
              1 ms
            </p>
            <p className="text-sm sm:text-base md:text-lg  xl:text-3xl text-muted-foreground">
              de latencia - más rápido que un parpadeo
            </p>
          </div>
          <SlideText className="text-base sm:text-xl md:text-2xl  xl:text-4xl font-bold pt-2 sm:pt-4">
            ¿Ciencia ficción? <span className="text-primary">No, es 5G.</span>
          </SlideText>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide3;
