import React from "react";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { features } from "src/utils/consts";

const FeaturesSection: React.FC = () => {
  return (
    <section
      className="py-16 lg:py-24 bg-gradient-to-br from-slate-50/80 via-gray-50/60 to-corporate-orange-primary/5 dark:from-corporate-blue-secondary/95 dark:via-corporate-blue-primary/90 dark:to-corporate-blue-secondary transition-all duration-500"
      id="funcionalidades"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section con Layout de 2 Columnas - Dark mode optimizado */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Columna Izquierda - Contenido optimizado para dark mode */}
          <div className="text-left lg:pr-8">
            {/* Badge superior optimizado para dark mode */}
            <div className="mb-10 inline-flex items-center space-x-2 bg-info-500/25 backdrop-blur-md text-white px-5 py-3 rounded-full text-sm font-medium border border-info-500/40 shadow-lg">
              <Sparkles className="h-4 w-4" />
              <span className="font-semibold">Funcionalidades Avanzadas</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-corporate-blue-primary dark:text-white mb-6 leading-tight tracking-tight">
              ¿Por qué elegir{" "}
              <span className="bg-gradient-to-r from-corporate-orange-primary to-corporate-orange-primary-light dark:from-corporate-orange-primary-light dark:to-white bg-clip-text text-transparent">
                Zero Risk AI
              </span>
              ?
            </h2>

            <p className="text-lg sm:text-xl text-corporate-blue-primary/80 dark:text-white/85 mb-8 leading-relaxed font-medium">
              Ahorra{" "}
              <strong className="text-corporate-orange-primary dark:text-corporate-orange-primary-light font-semibold">
                semanas de trabajo
              </strong>{" "}
              con nuestra tecnología de vanguardia. Mientras otros sistemas
              tardan días, nosotros entregamos resultados en{" "}
              <strong className="text-corporate-green-accent dark:text-corporate-green-accent-light font-semibold">
                minutos
              </strong>
              .
            </p>

            {/* Stats rápidos optimizados para dark mode */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-info-500  mb-1">
                  95%
                </div>
                <div className="text-sm text-corporate-blue-primary/70 dark:text-white/70">
                  Menos tiempo
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-info-500  mb-1">
                  10min
                </div>
                <div className="text-sm text-corporate-blue-primary/70 dark:text-white/70">
                  Matriz completa
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Imagen optimizada para dark mode */}
          <div className="relative w-full">
            <div className="relative">
              {/* Decoración de fondo optimizada para dark mode */}
              <div className="absolute -inset-4 bg-gradient-to-r from-corporate-blue-primary/20 to-corporate-blue-secondary/20 dark:from-corporate-orange-primary/30 dark:to-corporate-orange-primary-light/30 rounded-3xl blur-2xl"></div>

              {/* Contenedor de imagen optimizado para dark mode */}
              <div className="relative bg-gray-50/90 dark:bg-corporate-blue-primary/40 backdrop-blur-lg rounded-2xl p-6 border border-corporate-orange-primary/20 dark:border-corporate-orange-primary/40 shadow-corporate hover:shadow-corporate-lg dark:shadow-corporate-orange-primary/20 dark:hover:shadow-corporate-orange-primary/30 transition-all duration-500">
                <div className="relative h-80 lg:h-96 w-full rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/images/minera.jpeg"
                    alt="Trabajadores de construcción gestionando riesgos con Zero Risk AI"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    quality={90}
                  />
                  {/* Overlay sutil optimizado para dark mode */}
                  <div className="absolute inset-0 bg-gradient-to-t from-corporate-blue-primary/15 to-transparent dark:from-corporate-blue-secondary/30 dark:to-transparent"></div>
                </div>

                {/* Badge flotante optimizado para dark mode */}
                <div className="absolute -top-3 -right-3 bg-corporate-green-accent dark:bg-info-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg dark:shadow-corporate-green-accent/30">
                  ✓ Resultados Inmediatos
                </div>

                {/* Info flotante optimizada para dark mode */}
                <div className="absolute -bottom-4 -left-4 bg-gray-50/95 dark:bg-corporate-blue-primary/95 backdrop-blur-sm text-corporate-blue-primary dark:text-white px-5 py-3 rounded-xl shadow-corporate border border-corporate-orange-primary/20 dark:border-corporate-orange-primary/40">
                  <div className="text-lg font-semibold text-corporate-orange-primary dark:text-corporate-orange-primary-light">
                    Construcción Segura
                  </div>
                  <div className="text-sm text-corporate-blue-primary/70 dark:text-white/70">
                    Matrices especializadas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid optimizado para dark mode */}
        <div className="relative max-w-4xl mx-auto">
          {/* Línea central optimizada para dark mode */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-corporate-blue-primary via-corporate-blue-secondary to-corporate-blue-primary dark:from-corporate-orange-primary dark:via-corporate-blue-light dark:to-corporate-orange-primary transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Punto en la línea optimizado para dark mode */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-12 h-12 dark:bg-corporate-orange-primary bg-info-500 rounded-full flex items-center justify-center shadow-accent dark:shadow-info-500/40 border-4 border-white dark:border-corporate-orange-primary/30 transition-all duration-300 hover:scale-110">
                    <div className="text-white dark:text-white drop-shadow-lg">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Contenido optimizado para dark mode */}
                <div
                  className={`w-5/12 p-6 bg-white dark:bg-corporate-blue-primary/30 rounded-2xl shadow-corporate hover:shadow-corporate-lg dark:shadow-corporate-blue-primary/20 dark:hover:shadow-corporate-orange-primary/20 transition-all duration-300 border border-corporate-orange-primary/10 dark:border-corporate-orange-primary/30 backdrop-blur-sm ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-corporate-blue-primary dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-corporate-blue-primary/70 dark:text-white/80 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />

        {/* Enhanced CTA Section optimizado para light y dark mode */}
        <div className="text-center">
          <div className="relative max-w-3xl mx-auto">
            {/* Background decoration sin gradientes */}
            <div className="absolute -inset-4 bg-corporate-orange-primary/15 dark:bg-info-500/25 rounded-3xl blur-xl opacity-40 dark:opacity-60"></div>

            <div className="relative bg-corporate-blue-primary dark:bg-corporate-blue-secondary dark:backdrop-blur-xl text-white p-8 lg:p-12 rounded-3xl shadow-corporate-lg dark:shadow-info-500/20 border border-info-500/30 dark:border-corporate-orange-primary/50">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-corporate-orange-primary/20 dark:bg-info-500/30 rounded-full backdrop-blur-sm border border-corporate-orange-primary/40 dark:border-info-500/50 shadow-accent dark:shadow-info-500/30">
                  <Clock className="h-12 w-12 text-corporate-orange-primary dark:text-info-500" />
                </div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4 drop-shadow-lg">
                ¡No pierdas más tiempo!
              </h3>
              <p className="text-white/90 dark:text-white/95 mb-8 text-lg leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                Cada día sin Zero Risk AI es tiempo y dinero perdido en análisis
                manuales. Únete a las empresas que ya optimizaron su gestión de
                riesgos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.mitigariesgo.cl"
                  className="group inline-flex items-center justify-center space-x-3 bg-corporate-orange-primary text-white dark:bg-info-500 dark:text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-corporate-orange-primary-dark dark:hover:bg-info-600 transition-all duration-300 shadow-accent hover:shadow-accent dark:shadow-info-500/40 dark:hover:shadow-info-500/60 transform hover:-translate-y-0.5 hover:scale-[1.02] border border-corporate-orange-primary-light/30 dark:border-info-400/30"
                >
                  <span>Empezar Ahora</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
