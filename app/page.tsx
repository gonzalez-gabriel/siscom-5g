'use client';

import { useState, useEffect, useRef } from 'react';
import {
  PresentationSlide,
  SlideContent,
  SlideTitle,
  SlideSubtitle,
  SlideText,
} from '@/components/presentation-slide';
import { SlideNavigation } from '@/components/slide-navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Signal,
  Wifi,
  Zap,
  Globe,
  Smartphone,
  MessageSquare,
  Radio,
  Video,
  Factory,
  Hospital,
  Building2,
  Sprout,
  Car,
  Home,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Network,
  Cpu,
  Database,
  Lock,
} from 'lucide-react';
import { cn } from '@/lib/utils';

import {
  Slide1,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
  Slide18,
  Slide19,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
} from '@/sections';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 19;

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const dx = touchStartX.current - touchEndX.current;
    const threshold = 50; // px required to consider as swipe

    if (dx > threshold) {
      // swipe left -> next
      setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
    } else if (dx < -threshold) {
      // swipe right -> previous
      setCurrentSlide((prev) => Math.max(0, prev - 1));
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slides = [
    // Slide 1: Portada
    // <PresentationSlide
    //   key={0}
    //   className="bg-gradient-to-br from-primary/10 via-background to-accent/10"
    // >
    //   <SlideContent className="text-center">
    //     <div className="mb-6 sm:mb-8">
    //       <Badge className="text-sm sm:text-base md:text-lg px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 mb-4 sm:mb-6">
    //         Sistemas de Comunicaciones 2025
    //       </Badge>
    //     </div>
    //     <SlideTitle size="xl" className="text-primary mb-6 sm:mb-8">
    //       Tecnologías 5G, IoT y M2M
    //     </SlideTitle>
    //     <SlideSubtitle className="mb-8 sm:mb-10 md:mb-12">
    //       Situación Actual, Casos de Éxito y Perspectiva a Futuro
    //     </SlideSubtitle>
    //     <div className="space-y-2 sm:space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">
    //       <p className="font-semibold">González Gabriel Isaías</p>
    //       <p className="text-sm sm:text-base md:text-lg lg:text-xl">
    //         Universidad Nacional de Tucumán - FACET
    //       </p>
    //     </div>
    //     <div className="hidden sm:block absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 -translate-x-1/2">
    //       <Signal className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-primary/20 animate-pulse" />
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide1 />,

    // Slide 2: Agenda
    // <PresentationSlide key={1}>
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
    //       ¿De qué vamos a hablar hoy?
    //     </SlideTitle>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
    //       <Card className="p-2 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2">
    //         <Smartphone className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mb-1 sm:mb-4" />
    //         <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-2">
    //           Evolución del 5G
    //         </h3>
    //         <p className="text-muted-foreground text-[10px] sm:text-base md:text-lg">
    //           50 años de innovación móvil
    //         </p>
    //       </Card>
    //       <Card className="p-2 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2">
    //         <Network className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent mb-1 sm:mb-4" />
    //         <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-2">
    //           5G + IoT + M2M
    //         </h3>
    //         <p className="text-muted-foreground text-[10px] sm:text-base md:text-lg">
    //           La combinación perfecta
    //         </p>
    //       </Card>
    //       <Card className="p-2 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2">
    //         <Factory className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-chart-2 mb-1 sm:mb-4" />
    //         <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-2">
    //           Aplicaciones Reales
    //         </h3>
    //         <p className="text-muted-foreground text-[10px] sm:text-base md:text-lg">
    //           Casos que están cambiando el mundo
    //         </p>
    //       </Card>
    //       <Card className="p-2 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2">
    //         <TrendingUp className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-chart-1 mb-1 sm:mb-4" />
    //         <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-2">
    //           El Futuro que nos espera
    //         </h3>
    //         <p className="text-muted-foreground text-[10px] sm:text-base md:text-lg">
    //           5G Advanced y más allá
    //         </p>
    //       </Card>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide2 />,

    // Slide 3: Gancho
    // <PresentationSlide
    //   key={2}
    //   className="bg-gradient-to-br from-primary/20 to-accent/20"
    // >
    //   <SlideContent className="text-center">
    //     <SlideTitle size="lg" className="mb-8 sm:mb-12 md:mb-16">
    //       Imagina este escenario...
    //     </SlideTitle>
    //     <div className="space-y-6 sm:space-y-8 md:space-y-12">
    //       <div className="bg-card/90 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-primary/30">
    //         <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 sm:mb-3 md:mb-4">
    //           1 millón
    //         </p>
    //         <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-muted-foreground">
    //           dispositivos conectados por km²
    //         </p>
    //       </div>
    //       <div className="bg-card/90 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-accent/30">
    //         <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2 sm:mb-3 md:mb-4">
    //           1 ms
    //         </p>
    //         <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-muted-foreground">
    //           de latencia - más rápido que un parpadeo
    //         </p>
    //       </div>
    //       <SlideText className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
    //         ¿Ciencia ficción? <span className="text-primary">No, es 5G.</span>
    //       </SlideText>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide3 />,

    // Slide 4: Evolución 1G a 5G
    // <PresentationSlide key={3}>
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
    //       50 años de evolución móvil
    //     </SlideTitle>
    //     <div className="relative">
    //       <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-muted via-primary to-accent"></div>
    //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1.5 sm:gap-4 md:gap-6 lg:gap-8 relative">
    //         {[
    //           {
    //             gen: '1G',
    //             year: '1980s',
    //             icon: Radio,
    //             desc: 'Llamadas inalámbricas',
    //             color: 'text-muted-foreground',
    //           },
    //           {
    //             gen: '2G',
    //             year: '1990s',
    //             icon: MessageSquare,
    //             desc: 'SMS + Digital',
    //             color: 'text-muted-foreground',
    //           },
    //           {
    //             gen: '3G',
    //             year: '2000s',
    //             icon: Globe,
    //             desc: 'Internet móvil',
    //             color: 'text-chart-3',
    //           },
    //           {
    //             gen: '4G',
    //             year: '2010s',
    //             icon: Video,
    //             desc: 'Streaming + Apps',
    //             color: 'text-chart-2',
    //           },
    //           {
    //             gen: '5G',
    //             year: '2020s',
    //             icon: Signal,
    //             desc: 'IoT + Industria 4.0',
    //             color: 'text-primary',
    //           },
    //         ].map((item, i) => (
    //           <Card
    //             key={i}
    //             className={cn(
    //               'p-1.5 sm:p-4 md:p-6 bg-card hover:scale-105 transition-transform',
    //               i === 4
    //                 ? 'col-span-2 sm:col-span-1 border-2 sm:border-4 border-primary shadow-xl sm:shadow-2xl shadow-primary/20'
    //                 : ''
    //             )}
    //           >
    //             <item.icon
    //               className={cn(
    //                 'h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-0.5 sm:mb-3 md:mb-4',
    //                 item.color
    //               )}
    //             />
    //             <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-center mb-0 sm:mb-2">
    //               {item.gen}
    //             </h3>
    //             <p className="text-[9px] sm:text-sm text-center text-muted-foreground mb-0 sm:mb-2">
    //               {item.year}
    //             </p>
    //             <p className="text-center text-[9px] sm:text-sm leading-tight sm:leading-relaxed">
    //               {item.desc}
    //             </p>
    //           </Card>
    //         ))}
    //       </div>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide4 />,

    // Slide 5: Los 3 Pilares del 5G
    // <PresentationSlide key={4}>
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
    //       5G: Tres pilares para un nuevo mundo
    //     </SlideTitle>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-6 md:gap-8">
    //       <Card className="p-2 sm:p-6 md:p-8 text-center border-2 hover:shadow-2xl transition-shadow bg-gradient-to-b from-primary/5 to-background">
    //         <Signal className="h-6 w-6 sm:h-12 sm:w-12 md:h-16 md:w-16 mx-auto mb-1 sm:mb-6 text-primary" />
    //         <h3 className="text-base sm:text-2xl font-bold mb-0.5 sm:mb-4">
    //           eMBB
    //         </h3>
    //         <p className="text-[10px] sm:text-lg text-muted-foreground mb-1 sm:mb-6">
    //           Banda Ancha Mejorada
    //         </p>
    //         <div className="space-y-0.5 sm:space-y-3">
    //           <p className="text-lg sm:text-3xl md:text-4xl font-bold text-primary">
    //             20 Gbps
    //           </p>
    //           <p className="text-xs sm:text-lg">Streaming 8K</p>
    //           <p className="text-[10px] sm:text-sm text-muted-foreground">
    //             Realidad Virtual
    //           </p>
    //         </div>
    //       </Card>

    //       <Card className="p-2 sm:p-6 md:p-8 text-center border-2 hover:shadow-2xl transition-shadow bg-gradient-to-b from-accent/5 to-background">
    //         <Zap className="h-6 w-6 sm:h-12 sm:w-12 md:h-16 md:w-16 mx-auto mb-1 sm:mb-6 text-accent" />
    //         <h3 className="text-base sm:text-2xl font-bold mb-0.5 sm:mb-4">
    //           URLLC
    //         </h3>
    //         <p className="text-[10px] sm:text-lg text-muted-foreground mb-1 sm:mb-6">
    //           Ultra-confiable Baja Latencia
    //         </p>
    //         <div className="space-y-0.5 sm:space-y-3">
    //           <p className="text-lg sm:text-3xl md:text-4xl font-bold text-accent">
    //             1 ms
    //           </p>
    //           <p className="text-xs sm:text-lg">Cirugía remota</p>
    //           <p className="text-[10px] sm:text-sm text-muted-foreground">
    //             Vehículos autónomos
    //           </p>
    //         </div>
    //       </Card>

    //       <Card className="p-2 sm:p-6 md:p-8 text-center border-2 hover:shadow-2xl transition-shadow bg-gradient-to-b from-chart-2/5 to-background">
    //         <Wifi className="h-6 w-6 sm:h-12 sm:w-12 md:h-16 md:w-16 mx-auto mb-1 sm:mb-6 text-chart-2" />
    //         <h3 className="text-base sm:text-2xl font-bold mb-0.5 sm:mb-4">
    //           mMTC
    //         </h3>
    //         <p className="text-[10px] sm:text-lg text-muted-foreground mb-1 sm:mb-6">
    //           Comunicación Masiva
    //         </p>
    //         <div className="space-y-0.5 sm:space-y-3">
    //           <p className="text-lg sm:text-3xl md:text-4xl font-bold text-chart-2">
    //             1M/km²
    //           </p>
    //           <p className="text-xs sm:text-lg">Ciudades inteligentes</p>
    //           <p className="text-[10px] sm:text-sm text-muted-foreground">
    //             IoT masivo
    //           </p>
    //         </div>
    //       </Card>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide5 />,

    // Slide 6: Tecnologías Clave
    // <PresentationSlide key={5}>
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
    //       ¿Cómo lo hace posible?
    //     </SlideTitle>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
    //       <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-all hover:scale-105">
    //         <Signal className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mb-1 sm:mb-3" />
    //         <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
    //           MIMO Masivo
    //         </h3>
    //         <p className="text-[10px] sm:text-base md:text-lg text-muted-foreground">
    //           Múltiples antenas trabajando en paralelo
    //         </p>
    //       </Card>

    //       <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-all hover:scale-105">
    //         <Network className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent mb-1 sm:mb-3" />
    //         <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
    //           Network Slicing
    //         </h3>
    //         <p className="text-[10px] sm:text-base md:text-lg text-muted-foreground">
    //           Redes virtuales personalizadas
    //         </p>
    //       </Card>

    //       <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-all hover:scale-105">
    //         <Cpu className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-chart-2 mb-1 sm:mb-3" />
    //         <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
    //           Edge Computing
    //         </h3>
    //         <p className="text-[10px] sm:text-base md:text-lg text-muted-foreground">
    //           Procesamiento en el borde de la red
    //         </p>
    //       </Card>

    //       <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-all hover:scale-105">
    //         <Radio className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 text-chart-1 mb-1 sm:mb-3" />
    //         <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
    //           Nuevo Espectro
    //         </h3>
    //         <p className="text-[10px] sm:text-base md:text-lg text-muted-foreground">
    //           Ondas milimétricas de alta frecuencia
    //         </p>
    //       </Card>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide6 />,

    // Slide 7: IoT vs M2M
    // <PresentationSlide key={6}>
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
    //       IoT y M2M: ¿Son lo mismo?
    //     </SlideTitle>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
    //       <Card className="p-2 sm:p-6 md:p-8 border-2">
    //         <h3 className="text-base sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-6 md:mb-8 text-center">
    //           M2M
    //         </h3>
    //         <div className="space-y-1.5 sm:space-y-5 md:space-y-6">
    //           <div className="flex items-start gap-1.5 sm:gap-4">
    //             <Radio className="h-4 w-4 sm:h-7 sm:w-7 md:h-8 md:w-8 text-muted-foreground flex-shrink-0 mt-0.5" />
    //             <div>
    //               <p className="text-xs sm:text-lg font-semibold">
    //                 Punto a punto
    //               </p>
    //               <p className="text-muted-foreground text-[10px] sm:text-base">
    //                 Comunicación directa
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex items-start gap-1.5 sm:gap-4">
    //             <Database className="h-4 w-4 sm:h-7 sm:w-7 md:h-8 md:w-8 text-muted-foreground flex-shrink-0 mt-0.5" />
    //             <div>
    //               <p className="text-xs sm:text-lg font-semibold">
    //                 Datos simples
    //               </p>
    //               <p className="text-muted-foreground text-[10px] sm:text-base">
    //                 Información básica
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex items-start gap-1.5 sm:gap-4">
    //             <Lock className="h-4 w-4 sm:h-7 sm:w-7 md:h-8 md:w-8 text-muted-foreground flex-shrink-0 mt-0.5" />
    //             <div>
    //               <p className="text-xs sm:text-lg font-semibold">
    //                 Sistemas cerrados
    //               </p>
    //               <p className="text-muted-foreground text-[10px] sm:text-base">
    //                 Propietarios
    //               </p>
    //             </div>
    //           </div>
    //           <div className="bg-muted p-1.5 sm:p-4 rounded-lg">
    //             <p className="text-[10px] sm:text-sm font-medium">Ejemplo:</p>
    //             <p className="text-[10px] sm:text-sm text-muted-foreground">
    //               Medidor → Compañía eléctrica
    //             </p>
    //           </div>
    //         </div>
    //       </Card>

    //       <Card className="p-2 sm:p-6 md:p-8 border-2 border-primary shadow-xl shadow-primary/20">
    //         <h3 className="text-base sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-6 md:mb-8 text-center text-primary">
    //           IoT + 5G
    //         </h3>
    //         <div className="space-y-1.5 sm:space-y-5 md:space-y-6">
    //           <div className="flex items-start gap-1.5 sm:gap-4">
    //             <Globe className="h-4 w-4 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary flex-shrink-0 mt-0.5" />
    //             <div>
    //               <p className="text-xs sm:text-lg font-semibold">
    //                 Ecosistema completo
    //               </p>
    //               <p className="text-muted-foreground text-[10px] sm:text-base">
    //                 Red inteligente
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex items-start gap-1.5 sm:gap-4">
    //             <Cpu className="h-4 w-4 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary flex-shrink-0 mt-0.5" />
    //             <div>
    //               <p className="text-xs sm:text-lg font-semibold">
    //                 Big Data + IA
    //               </p>
    //               <p className="text-muted-foreground text-[10px] sm:text-base">
    //                 Análisis avanzado
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex items-start gap-1.5 sm:gap-4">
    //             <Network className="h-4 w-4 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary flex-shrink-0 mt-0.5" />
    //             <div>
    //               <p className="text-xs sm:text-lg font-semibold">
    //                 Plataformas abiertas
    //               </p>
    //               <p className="text-muted-foreground text-[10px] sm:text-base">
    //                 Interoperabilidad
    //               </p>
    //             </div>
    //           </div>
    //           <div className="bg-primary/10 p-1.5 sm:p-4 rounded-lg border border-primary/30">
    //             <p className="text-[10px] sm:text-sm font-medium">Ejemplo:</p>
    //             <p className="text-[10px] sm:text-sm text-muted-foreground">
    //               Smart City conectada vía 5G
    //             </p>
    //           </div>
    //         </div>
    //       </Card>
    //     </div>
    //     <p className="text-center text-sm sm:text-lg md:text-xl mt-4 sm:mt-8 md:mt-12 font-semibold text-primary">
    //       M2M es el músculo, IoT es el cerebro
    //     </p>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide7 />,

    // Slide 8: Tabla Comparativa
    // <PresentationSlide key={7}>
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-8 sm:mb-12 md:mb-16">
    //       Las diferencias en detalle
    //     </SlideTitle>
    //     <div className="max-w-4xl mx-auto">
    //       <div className="overflow-hidden rounded-xl sm:rounded-2xl border-2">
    //         <table className="w-full">
    //           <thead className="bg-muted">
    //             <tr>
    //               <th className="text-left p-3 sm:p-4 md:p-6 text-base sm:text-lg md:text-xl font-bold">
    //                 Característica
    //               </th>
    //               <th className="text-center p-3 sm:p-4 md:p-6 text-base sm:text-lg md:text-xl font-bold">
    //                 M2M
    //               </th>
    //               <th className="text-center p-3 sm:p-4 md:p-6 text-base sm:text-lg md:text-xl font-bold bg-primary/10">
    //                 IoT + 5G
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody className="divide-y">
    //             <tr className="hover:bg-muted/50">
    //               <td className="p-3 sm:p-4 md:p-6 font-semibold text-sm sm:text-base md:text-lg">
    //                 Latencia
    //               </td>
    //               <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg">
    //                 50-100 ms
    //               </td>
    //               <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg font-bold text-primary bg-primary/5">
    //                 {'<1 ms'}
    //               </td>
    //             </tr>
    //             <tr className="hover:bg-muted/50">
    //               <td className="p-3 sm:p-4 md:p-6 font-semibold text-sm sm:text-base md:text-lg">
    //                 Dispositivos
    //               </td>
    //               <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg">
    //                 Cientos
    //               </td>
    //               <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg font-bold text-primary bg-primary/5">
    //                 Millones/km²
    //               </td>
    //             </tr>
    //             <tr className="hover:bg-muted/50">
    //               <td className="p-3 sm:p-4 md:p-6 font-semibold text-sm sm:text-base md:text-lg">
    //                 Batería
    //               </td>
    //               <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg">
    //                 1-3 años
    //               </td>
    //               <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg font-bold text-primary bg-primary/5">
    //                 10+ años
    //               </td>
    //             </tr>
    //             <tr className="hover:bg-muted/50">
    //               <td className="p-3 sm:p-4 md:p-6 font-semibold text-sm sm:text-base md:text-lg">
    //                 Costo
    //               </td>
    //               <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg">
    //                 $20-50
    //               </td>
    //               <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg font-bold text-primary bg-primary/5">
    //                 {'<$5'}
    //               </td>
    //             </tr>
    //             <tr className="hover:bg-muted/50">
    //               <td className="p-3 sm:p-4 md:p-6 font-semibold text-sm sm:text-base md:text-lg">
    //                 Ancho de banda
    //               </td>
    //               <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg">
    //                 Kbps-Mbps
    //               </td>
    //               <td className="p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg font-bold text-primary bg-primary/5">
    //                 Gbps
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide8 />,

    // Slide 9: El Rol del 5G en IoT
    // <PresentationSlide key={8}>
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
    //       5G: El habilitador perfecto para IoT
    //     </SlideTitle>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
    //       <div className="space-y-1.5 sm:space-y-5 md:space-y-6">
    //         <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-destructive mb-2 sm:mb-6 md:mb-8">
    //           Problemas del 4G
    //         </h3>
    //         {[
    //           { label: 'Alta latencia', value: '50-100 ms' },
    //           { label: 'Pocos dispositivos', value: '~100,000/km²' },
    //           { label: 'Batería corta', value: '1-3 años' },
    //           { label: 'Alto costo', value: '$20-50 por módulo' },
    //         ].map((item, i) => (
    //           <Card
    //             key={i}
    //             className="p-1.5 sm:p-5 md:p-6 border-2 border-destructive/30 bg-destructive/5"
    //           >
    //             <p className="text-xs sm:text-lg font-semibold mb-0.5">
    //               ✗ {item.label}
    //             </p>
    //             <p className="text-[10px] sm:text-base text-muted-foreground">
    //               {item.value}
    //             </p>
    //           </Card>
    //         ))}
    //       </div>

    //       <div className="space-y-1.5 sm:space-y-5 md:space-y-6">
    //         <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-primary mb-2 sm:mb-6 md:mb-8">
    //           Soluciones del 5G
    //         </h3>
    //         {[
    //           { label: '1 ms', sublabel: '50x mejor' },
    //           { label: '1M/km²', sublabel: '100x más' },
    //           { label: '10+ años', sublabel: 'Ultra eficiente' },
    //           { label: '<$5', sublabel: 'Accesible' },
    //         ].map((item, i) => (
    //           <Card
    //             key={i}
    //             className="p-1.5 sm:p-5 md:p-6 border-2 border-primary shadow-lg shadow-primary/20 bg-primary/5"
    //           >
    //             <p className="text-xs sm:text-lg font-semibold mb-0.5 text-primary">
    //               ✓ {item.label}
    //             </p>
    //             <p className="text-[10px] sm:text-base text-muted-foreground">
    //               {item.sublabel}
    //             </p>
    //           </Card>
    //         ))}
    //       </div>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide9 />,

    // Slide 10: Casos de Uso Grid
    // <PresentationSlide key={9}>
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-8 sm:mb-12 md:mb-16">
    //       5G IoT en acción: Casos reales
    //     </SlideTitle>
    //     {/* Grid responsive: 2 columnas en mobile, 3 en desktop */}
    //     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
    //       {[
    //         { icon: Factory, label: 'Industria 4.0', color: 'text-primary' },
    //         { icon: Hospital, label: 'Salud', color: 'text-accent' },
    //         {
    //           icon: Building2,
    //           label: 'Ciudades Inteligentes',
    //           color: 'text-chart-2',
    //         },
    //         {
    //           icon: Sprout,
    //           label: 'Agricultura de Precisión',
    //           color: 'text-chart-4',
    //         },
    //         {
    //           icon: Car,
    //           label: 'Transporte Inteligente',
    //           color: 'text-chart-1',
    //         },
    //         {
    //           icon: Home,
    //           label: 'Hogares Inteligentes',
    //           color: 'text-chart-5',
    //         },
    //       ].map((item, i) => (
    //         <Card
    //           key={i}
    //           className="p-4 sm:p-5 md:p-8 text-center hover:scale-110 transition-transform cursor-pointer border-2 hover:shadow-2xl"
    //         >
    //           <item.icon
    //             className={`h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 mx-auto mb-3 sm:mb-4 ${item.color}`}
    //           />
    //           <h3 className="text-base sm:text-lg md:text-xl font-bold">
    //             {item.label}
    //           </h3>
    //         </Card>
    //       ))}
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide10 />,

    // Slide 11: Industria 4.0
    // <PresentationSlide key={10}>
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
    //       Industria 4.0: La Fábrica del futuro
    //     </SlideTitle>
    //     <div className="space-y-2 sm:space-y-6 md:space-y-8">
    //       <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 md:gap-8  mx-auto">
    //         <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-shadow">
    //           {/* Ícono sin contenedor en mobile */}
    //           <div className="sm:hidden">
    //             <CheckCircle2 className="h-5 w-5 text-primary mb-1" />
    //           </div>

    //           {/* Ícono con círculo para sm+ (tablet/desktop) */}
    //           <div className="hidden sm:flex bg-primary/10 w-16 h-16 rounded-full items-center justify-center mx-auto mb-3">
    //             <CheckCircle2 className="h-10 w-10 md:h-12 md:w-12 text-primary" />
    //           </div>

    //           <h3 className="text-sm text-left sm:text-center sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
    //             Mantenimiento predictivo
    //           </h3>
    //           {/* <ArrowRight className="h-8 w-8 mx-auto my-4 text-muted-foreground hidden sm:block" /> */}
    //           <p className="text-[10px] text-left sm:text-center sm:text-base md:text-lg text-muted-foreground">
    //             Miles de sensores monitoreando 24/7 anticipando fallas
    //           </p>
    //         </Card>

    //         <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-shadow">
    //           {/* Ícono móvil */}
    //           <div className="sm:hidden">
    //             <Video className="h-5 w-5 text-accent mb-1" />
    //           </div>

    //           {/* Ícono con círculo en sm+ */}
    //           <div className="hidden sm:flex bg-accent/10 w-16 h-16 rounded-full items-center justify-center mx-auto mb-3">
    //             <Video className="h-10 w-10 md:h-12 md:w-12 text-accent" />
    //           </div>
    //           <h3 className="text-sm text-left sm:text-center sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
    //             Control de Calidad
    //           </h3>
    //           {/* <ArrowRight className="h-8 w-8 mx-auto my-4 text-muted-foreground hidden sm:block" /> */}
    //           <p className="text-[10px] text-left sm:text-center sm:text-base md:text-lg text-muted-foreground">
    //             Cámaras HD con IA detectan defectos al instante
    //           </p>
    //         </Card>

    //         <Card className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-shadow">
    //           {/* Ícono móvil */}
    //           <div className="sm:hidden">
    //             <Globe className="h-5 w-5 text-chart-2 mb-1" />
    //           </div>

    //           {/* Ícono con círculo en sm+ */}
    //           <div className="hidden sm:flex bg-chart-2/10 w-16 h-16 rounded-full items-center justify-center mx-auto mb-3">
    //             <Globe className="h-10 w-10 md:h-12 md:w-12 text-chart-2" />
    //           </div>
    //           <h3 className="text-sm text-left sm:text-center sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-3">
    //             Monitoreo remoto
    //           </h3>
    //           {/* <ArrowRight className="h-8 w-8 mx-auto my-4 text-muted-foreground hidden sm:block" /> */}
    //           <p className="text-[10px] text-left sm:text-center sm:text-base md:text-lg text-muted-foreground">
    //             Plataformas controladas desde cualquier lugar
    //           </p>
    //         </Card>
    //       </div>

    //       <Card className="p-2 sm:p-6 md:p-8 max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-2">
    //         <h4 className="text-sm sm:text-2xl md:text-2xl font-bold text-center mb-2 sm:mb-6">
    //           Resultados
    //         </h4>
    //         <div className="grid grid-cols-2 gap-2 sm:gap-6 md:gap-8">
    //           <div className="text-center">
    //             <TrendingUp className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-0.5 sm:mb-3 text-primary" />
    //             <p className="text-xl sm:text-4xl md:text-4xl font-bold text-primary mb-0.5 sm:mb-2">
    //               +20-40%
    //             </p>
    //             <p className="text-xs sm:text-lg">Eficiencia</p>
    //           </div>
    //           <div className="text-center">
    //             <TrendingUp className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-0.5 sm:mb-3 text-accent rotate-180" />
    //             <p className="text-xl sm:text-4xl md:text-4xl font-bold text-accent mb-0.5 sm:mb-2">
    //               -30-50%
    //             </p>
    //             <p className="text-xs sm:text-lg">Tiempo de inactividad</p>
    //           </div>
    //         </div>
    //       </Card>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide11 />,

    // Slide 12: Ciudades Inteligentes
    // <PresentationSlide key={11}>
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
    //       Ya está sucediendo: Ciudades inteligentes
    //     </SlideTitle>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
    //       {[
    //         {
    //           flag: '🇪🇸',
    //           city: 'Barcelona',
    //           app: 'Farolas LED inteligentes que ahorran 30% energía',
    //         },
    //         {
    //           flag: '🇺🇸',
    //           city: 'San Francisco',
    //           app: 'Contenedores inteligentes optimizan recolección',
    //         },
    //         {
    //           flag: '🇰🇷',
    //           city: 'Seúl',
    //           app: 'Transporte público con rutas optimizadas en tiempo real',
    //         },
    //         {
    //           flag: '🇩🇪',
    //           city: 'Darmstadt',
    //           app: 'Sensores de tráfico reducen congestión 25%',
    //         },
    //       ].map((item, i) => (
    //         <Card
    //           key={i}
    //           className="p-2 sm:p-6 md:p-8 border-2 hover:shadow-xl transition-all"
    //         >
    //           <div className="flex items-center gap-1.5 sm:gap-4 mb-1 sm:mb-4">
    //             <span className="text-xl sm:text-5xl">{item.flag}</span>
    //             <h3 className="text-sm sm:text-2xl font-bold">{item.city}</h3>
    //           </div>
    //           <p className="text-[10px] sm:text-lg text-muted-foreground leading-relaxed">
    //             {item.app}
    //           </p>
    //         </Card>
    //       ))}
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide12 />,

    // Slide 13: Números del Futuro Parte 1
    // <PresentationSlide
    //   key={12}
    //   className="bg-gradient-to-br from-primary/10 to-chart-2/10"
    // >
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-2 sm:mb-8 md:mb-12">
    //       El boom de 5G IoT: Números que impactan
    //     </SlideTitle>
    //     <div className="max-w-4xl mx-auto">
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-8 md:gap-12 mb-2 sm:mb-12">
    //         <Card className="p-2 sm:p-8 md:p-12 text-center border-2">
    //           <Badge className="mb-1 sm:mb-5 md:mb-6 text-[10px] sm:text-base md:text-lg px-1.5 py-0.5 sm:px-4 sm:py-2">
    //             2023
    //           </Badge>
    //           <p className="text-2xl sm:text-5xl md:text-6xl font-bold text-muted-foreground mb-0.5 sm:mb-3 md:mb-4">
    //             25.6M
    //           </p>
    //           <p className="text-xs sm:text-lg md:text-xl text-muted-foreground">
    //             conexiones 5G IoT
    //           </p>
    //         </Card>

    //         <Card className="p-2 sm:p-8 md:p-12 text-center border-2 sm:border-4 border-primary shadow-xl sm:shadow-2xl shadow-primary/30">
    //           <Badge className="mb-1 sm:mb-5 md:mb-6 bg-primary text-[10px] sm:text-base md:text-lg px-1.5 py-0.5 sm:px-4 sm:py-2">
    //             2030
    //           </Badge>
    //           <p className="text-2xl sm:text-5xl md:text-6xl font-bold text-primary mb-0.5 sm:mb-3 md:mb-4">
    //             820M+
    //           </p>
    //           <p className="text-xs sm:text-lg md:text-xl">conexiones 5G IoT</p>
    //         </Card>
    //       </div>

    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-5 md:gap-6">
    //         <Card className="p-2 sm:p-6 md:p-8 text-center bg-accent/10 border-2 border-accent">
    //           <p className="text-xl sm:text-4xl md:text-5xl font-bold text-accent mb-0.5 sm:mb-2 md:mb-3">
    //             32x
    //           </p>
    //           <p className="text-xs sm:text-lg md:text-xl">
    //             Crecimiento en 7 años
    //           </p>
    //         </Card>

    //         <Card className="p-2 sm:p-6 md:p-8 text-center bg-primary/10 border-2 border-primary">
    //           <p className="text-xl sm:text-4xl md:text-5xl font-bold text-primary mb-0.5 sm:mb-2 md:mb-3">
    //             59%
    //           </p>
    //           <p className="text-xs sm:text-lg md:text-xl">
    //             Crecimiento anual (CAGR)
    //           </p>
    //         </Card>

    //         <Card className="p-2 sm:p-6 md:p-8 text-center bg-chart-2/10 border-2 border-chart-2 col-span-1 sm:col-span-2 md:col-span-1">
    //           <Globe className="h-5 w-5 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-0.5 sm:mb-2 md:mb-3 text-chart-2" />
    //           <p className="text-[10px] sm:text-sm md:text-base leading-relaxed">
    //             Equivalente a la población de Europa en dispositivos
    //           </p>
    //         </Card>
    //       </div>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide13 />,

    // Slide 14: Números del Futuro Parte 2
    // <PresentationSlide key={13}>
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-8 sm:mb-12 md:mb-16">
    //       Redes privadas: Crecimiento explosivo
    //     </SlideTitle>
    //     <div className="max-w-5xl mx-auto">
    //       <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
    //         Redes Privadas 5G IoT
    //       </h3>
    //       <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8 md:mb-12">
    //         {[
    //           { year: '2023', value: 1.3, width: '5%' },
    //           { year: '2025', value: 5, width: '15%' },
    //           { year: '2027', value: 25, width: '40%' },
    //           { year: '2030', value: 107, width: '100%' },
    //         ].map((item, i) => (
    //           <div
    //             key={i}
    //             className="flex items-center gap-4 sm:gap-5 md:gap-6"
    //           >
    //             <span className="text-xl sm:text-2xl md:text-2xl font-bold w-16">
    //               {item.year}
    //             </span>
    //             <div className="flex-1 bg-muted rounded-full h-10 sm:h-12 md:h-16 overflow-hidden relative">
    //               <div
    //                 className="bg-gradient-to-r from-primary to-accent h-full flex items-center justify-start px-4 sm:px-5 md:px-6 transition-all duration-1000"
    //                 style={{ width: item.width }}
    //               >
    //                 <span className="text-base sm:text-lg md:text-xl font-bold text-white">
    //                   {item.value}M
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       {/* Grid responsive: 2 columnas */}
    //       <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
    //         <Card className="p-4 sm:p-6 md:p-8 text-center bg-accent/10 border-2 border-accent">
    //           <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2 md:mb-3">
    //             65.4%
    //           </p>
    //           <p className="text-base sm:text-lg md:text-xl">
    //             Crecimiento anual
    //           </p>
    //         </Card>

    //         <Card className="p-4 sm:p-6 md:p-8 text-center bg-primary/10 border-2 border-primary">
    //           <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2 md:mb-3">
    //             ×84
    //           </p>
    //           <p className="text-base sm:text-lg md:text-xl">
    //             Multiplicación en 7 años
    //           </p>
    //         </Card>
    //       </div>

    //       <p className="text-center text-base sm:text-lg md:text-xl mt-6 sm:mt-8 md:mt-8 text-primary font-semibold">
    //         Uno de los crecimientos más rápidos en la historia tecnológica
    //       </p>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide14 />,

    // Slide 15: Liderazgo Global
    // <PresentationSlide key={14}>
    //   <SlideContent>
    //     <SlideTitle size="md">¿Quién lidera la carrera del 5G?</SlideTitle>
    //     <div className="max-w-4xl mx-auto">
    //       <div className="flex justify-center mb-6 sm:mb-8 md:mb-12">
    //         <Card className="p-6 sm:p-8 md:p-12 border-2 sm:border-4 border-primary shadow-xl sm:shadow-2xl shadow-primary/30 relative">
    //           <div className="absolute -top-4 sm:-top-5 md:-top-6 left-1/2 -translate-x-1/2 text-4xl sm:text-5xl md:text-6xl">
    //             🥇
    //           </div>
    //           <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 sm:mb-3 md:mb-4 text-primary mt-4">
    //             CHINA
    //           </h3>
    //           <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground">
    //             Miles de implementaciones activas
    //           </p>
    //         </Card>
    //       </div>

    //       {/* Grid responsive: 2 columnas */}
    //       <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
    //         <Card className="p-4 sm:p-6 md:p-8 text-center border-2">
    //           <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🥈</div>
    //           <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
    //             Europa
    //           </h3>
    //           <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
    //             Preparación activa
    //           </p>
    //         </Card>

    //         <Card className="p-4 sm:p-6 md:p-8 text-center border-2">
    //           <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🥉</div>
    //           <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
    //             América
    //           </h3>
    //           <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
    //             Competencia agresiva
    //           </p>
    //         </Card>
    //       </div>

    //       <Card className="p-5 sm:p-6 md:p-10 bg-gradient-to-r from-accent/20 to-primary/20 border-2 sm:border-4 border-accent">
    //         <div className="flex items-center justify-center gap-3 sm:gap-4">
    //           <Globe className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-accent" />
    //           <div>
    //             <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
    //               🌎 Latinoamérica
    //             </h3>
    //             <p className="text-xl sm:text-xl md:text-2xl text-accent font-bold">
    //               GRAN OPORTUNIDAD
    //             </p>
    //           </div>
    //         </div>
    //       </Card>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide15 />,

    // Slide 16: 5G Advanced
    // <PresentationSlide key={15}>
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-8 sm:mb-12 md:mb-16">
    //       El futuro del 5G: 5G Advanced
    //     </SlideTitle>
    //     <div className="max-w-5xl mx-auto">
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
    //         <Card className="p-4 sm:p-6 md:p-8 border-2">
    //           <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-center">
    //             5G
    //           </h3>
    //           <Badge className="mb-4 sm:mb-5 md:mb-6">2020-2024</Badge>
    //           <div className="space-y-2 sm:space-y-3 md:space-y-4">
    //             <div className="flex items-center gap-2 sm:gap-3">
    //               <Signal className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
    //               <span className="text-base sm:text-lg">
    //                 eMBB, URLLC, mMTC
    //               </span>
    //             </div>
    //           </div>
    //         </Card>

    //         <Card className="p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-primary shadow-xl sm:shadow-2xl shadow-primary/30">
    //           <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-center text-primary">
    //             5G Advanced
    //           </h3>
    //           <Badge className="mb-4 sm:mb-5 md:mb-6 bg-primary">
    //             2024-2028
    //           </Badge>
    //           <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
    //             {[
    //               '✓ IA nativa integrada',
    //               '✓ Posicionamiento ultra-preciso',
    //               '✓ Eficiencia energética radical',
    //               '✓ Realidad Extendida (XR)',
    //               '✓ RedCap para IoT masivo',
    //             ].map((item, i) => (
    //               <div
    //                 key={i}
    //                 className="flex items-center gap-2 sm:gap-2.5 md:gap-3"
    //               >
    //                 <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
    //                 <span className="text-base sm:text-lg">{item}</span>
    //               </div>
    //             ))}
    //           </div>
    //         </Card>
    //       </div>

    //       <Card className="p-4 sm:p-6 md:p-8 text-center bg-muted">
    //         <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
    //           <span className="font-bold">Release 18-21</span> del 3GPP
    //         </p>
    //       </Card>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide16 />,

    // Slide 17: Conclusiones
    // <PresentationSlide key={16}>
    //   <SlideContent>
    //     <SlideTitle size="md" className="text-center mb-8 sm:mb-12 md:mb-16">
    //       5G + IoT + M2M = Revolución Digital
    //     </SlideTitle>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
    //       <Card className="p-4 sm:p-6 md:p-8 border-2 hover:shadow-2xl transition-shadow">
    //         <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
    //           <div className="bg-primary/10 rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
    //             <span className="text-xl sm:text-2xl md:text-2xl font-bold text-primary">
    //               1
    //             </span>
    //           </div>
    //           <div>
    //             <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-3">
    //               🚀 Crecimiento exponencial
    //             </h3>
    //             <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
    //               820M+ conexiones en 2030
    //             </p>
    //           </div>
    //         </div>
    //       </Card>

    //       <Card className="p-4 sm:p-6 md:p-8 border-2 hover:shadow-2xl transition-shadow">
    //         <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
    //           <div className="bg-accent/10 rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
    //             <span className="text-xl sm:text-2xl md:text-2xl font-bold text-accent">
    //               2
    //             </span>
    //           </div>
    //           <div>
    //             <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-3">
    //               🌐 Ecosistema completo
    //             </h3>
    //             <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
    //               IoT integra M2M en plataforma global
    //             </p>
    //           </div>
    //         </div>
    //       </Card>

    //       <Card className="p-4 sm:p-6 md:p-8 border-2 hover:shadow-2xl transition-shadow">
    //         <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
    //           <div className="bg-chart-2/10 rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
    //             <span className="text-xl sm:text-2xl md:text-2xl font-bold text-chart-2">
    //               3
    //             </span>
    //           </div>
    //           <div>
    //             <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-3">
    //               💼 Aplicaciones reales
    //             </h3>
    //             <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
    //               Industria, salud, ciudades, agricultura
    //             </p>
    //           </div>
    //         </div>
    //       </Card>

    //       <Card className="p-4 sm:p-6 md:p-8 border-2 hover:shadow-2xl transition-shadow">
    //         <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
    //           <div className="bg-chart-1/10 rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
    //             <span className="text-xl sm:text-2xl md:text-2xl font-bold text-chart-1">
    //               4
    //             </span>
    //           </div>
    //           <div>
    //             <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-3">
    //               🔮 Futuro prometedor
    //             </h3>
    //             <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
    //               5G Advanced hasta 2028, 6G en 2030
    //             </p>
    //           </div>
    //         </div>
    //       </Card>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide17 />,

    // Slide 18: Mensaje Final
    // <PresentationSlide
    //   key={17}
    //   className="bg-gradient-to-br from-primary/20 via-background to-accent/20"
    // >
    //   <SlideContent className="text-center">
    //     <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
    //       <div className="space-y-3 sm:space-y-4 md:space-y-6">
    //         <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
    //           "El 5G no es solo la siguiente G.
    //         </p>
    //         <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-muted-foreground text-balance">
    //           Es el habilitador de la cuarta revolución industrial,
    //         </p>
    //         <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-muted-foreground text-balance">
    //           de las ciudades inteligentes,
    //         </p>
    //         <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-muted-foreground text-balance">
    //           de la medicina del futuro.
    //         </p>
    //         <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mt-6 sm:mt-8 md:mt-12 text-balance">
    //           Estamos apenas en el comienzo."
    //         </p>
    //       </div>
    //       <Network className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto text-primary/20 animate-pulse" />
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide18 />,

    // Slide 19: Preguntas
    // <PresentationSlide key={18}>
    //   <SlideContent className="text-center">
    //     <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
    //       <div className="text-6xl sm:text-7xl md:text-9xl mb-4 sm:mb-6 md:mb-8">
    //         ❓
    //       </div>
    //       <SlideTitle size="xl">¿Preguntas?</SlideTitle>
    //       <div className="space-y-3 sm:space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl">
    //         <p className="text-xl sm:text-2xl md:text-2xl font-semibold">
    //           Gabriel González Isaías
    //         </p>
    //         <p className="text-muted-foreground">
    //           gabriel.gonzalez.unt@gmail.com
    //         </p>
    //       </div>
    //       <div className="pt-6 sm:pt-8 md:pt-12">
    //         <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
    //           ¡Muchas gracias por su atención!
    //         </p>
    //       </div>
    //     </div>
    //   </SlideContent>
    // </PresentationSlide>,
    <Slide19 />,
  ];

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full">
            {slide}
          </div>
        ))}
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
        onNext={() =>
          setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1))
        }
      />
    </div>
  );
}
