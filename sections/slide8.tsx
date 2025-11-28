import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
} from '@/components/presentation-slide';

function slide8() {
  return (
    <PresentationSlide key={7}>
      <SlideContent>
        <SlideTitle size="md" className="text-center mb-8 sm:mb-12 md:mb-8">
          Las diferencias en detalle
        </SlideTitle>
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl border-2">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 sm:p-4 md:p-6 text-base sm:text-lg md:text-xl font-bold">
                    Característica
                  </th>
                  <th className="text-center p-3 sm:p-4 md:p-6 text-base sm:text-lg md:text-xl font-bold">
                    M2M
                  </th>
                  <th className="text-center p-3 sm:p-4 md:p-6 text-base sm:text-lg md:text-xl font-bold bg-primary/10">
                    IoT + 5G
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-muted/50">
                  <td className="p-3 sm:p-4 md:p-6 font-semibold text-sm sm:text-base md:text-lg">
                    Latencia
                  </td>
                  <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg">
                    50-100 ms
                  </td>
                  <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg font-bold text-primary bg-primary/5">
                    {'<1 ms'}
                  </td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="p-3 sm:p-4 md:p-6 font-semibold text-sm sm:text-base md:text-lg">
                    Dispositivos
                  </td>
                  <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg">
                    Cientos
                  </td>
                  <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg font-bold text-primary bg-primary/5">
                    Millones/km²
                  </td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="p-3 sm:p-4 md:p-6 font-semibold text-sm sm:text-base md:text-lg">
                    Batería
                  </td>
                  <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg">
                    1-3 años
                  </td>
                  <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg font-bold text-primary bg-primary/5">
                    10+ años
                  </td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="p-3 sm:p-4 md:p-6 font-semibold text-sm sm:text-base md:text-lg">
                    Costo
                  </td>
                  <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg">
                    $20-50
                  </td>
                  <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg font-bold text-primary bg-primary/5">
                    {'<$5'}
                  </td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="p-3 sm:p-4 md:p-6 font-semibold text-sm sm:text-base md:text-lg">
                    Ancho de banda
                  </td>
                  <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg">
                    Kbps-Mbps
                  </td>
                  <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg font-bold text-primary bg-primary/5">
                    Gbps
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SlideContent>
    </PresentationSlide>
  );
}

export default slide8;
