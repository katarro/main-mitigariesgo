import React from "react";
import { ArrowRight, Clock, Zap } from "lucide-react";
import { howItWorks } from "../../utils/consts";
import VideoPlayer from "./video-player";

const HowItWorksSection: React.FC = () => {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-corporate-blue-secondary transition-colors duration-300"
      id="como-funciona"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-corporate-blue-primary dark:text-white mb-4">
            Así funciona Zero Risk AI
          </h2>
          <p className="text-lg sm:text-xl text-corporate-blue-primary/70 dark:text-white/85 max-w-2xl mx-auto px-4 sm:px-0">
            Un proceso <strong>simplificado</strong> que transforma semanas de
            trabajo en{" "}
            <strong className="text-corporate-orange-primary dark:text-corporate-orange-primary-light">
              minutos de eficiencia
            </strong>
          </p>
        </div>

        {/* Contenedor principal centrado verticalmente */}
        <div className="flex flex-col items-center space-y-16">
          {/* Video Centrado */}
          <div className="relative max-w-4xl w-full">
            {/* Decoración de fondo sin gradientes */}
            <div className="absolute -inset-4 bg-corporate-orange-primary/15 dark:bg-info-500/25 rounded-3xl blur-2xl"></div>

            {/* Contenedor del video */}
            <div className="relative bg-gray-50/90 dark:bg-corporate-blue-primary/30 backdrop-blur-lg rounded-2xl p-6 border border-corporate-orange-primary/20 dark:border-info-500/30 shadow-corporate">
              <div className="relative w-full rounded-xl overflow-hidden shadow-inner bg-corporate-blue-primary/5 dark:bg-corporate-blue-secondary/30">
                <VideoPlayer />

                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-black/5 dark:bg-black/10 pointer-events-none"></div>
              </div>

              {/* Badge flotante */}
              <div className="absolute -top-3 -right-3 bg-info-500 dark:bg-info-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                ✓ Proceso Real
              </div>

              {/* Info flotante inferior */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 dark:bg-corporate-blue-primary/95 backdrop-blur-sm text-corporate-blue-primary dark:text-white px-5 py-3 rounded-xl shadow-corporate border border-corporate-orange-primary/20 dark:border-info-500/30">
                <div className="text-sm font-semibold text-info-500 dark:text-info-500">
                  En Tiempo Real
                </div>
                <div className="text-xs text-corporate-blue-primary/70 dark:text-white/70">
                  Proceso completo
                </div>
              </div>
            </div>
          </div>

          {/* Pasos - Alineados horizontalmente */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Número del paso */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-corporate-orange-primary dark:bg-info-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-accent dark:shadow-info-500/40">
                      {step.step}
                    </div>
                  </div>

                  {/* Contenido del paso */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-corporate-blue-primary dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-corporate-blue-primary/70 dark:text-white/80 leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>

                  {/* Flecha conectora (excepto en el último paso) */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-6 transform translate-x-full">
                      <ArrowRight className="h-6 w-6 text-corporate-orange-primary dark:text-info-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button centrado */}
          <div>
            <a
              href="https://app.mitigariesgo.cl"
              className="inline-flex items-center space-x-3 bg-corporate-orange-primary  hover:bg-corporate-orange-primary-dark dark:hover:bg-info-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-accent hover:shadow-accent dark:shadow-info-500/40 dark:hover:shadow-info-500/60 transform hover:-translate-y-0.5 hover:scale-105 group"
            >
              <span>Comenzar Ahora</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Time Comparison - Versión Compacta */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-white dark:bg-corporate-blue-secondary/80 p-4 sm:p-6 rounded-2xl shadow-corporate dark:shadow-info-500/20 border border-corporate-orange-primary/20 dark:border-info-500/50 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl font-bold text-center text-corporate-blue-primary dark:text-white mb-4 sm:mb-6">
              Comparación de Tiempos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-3 sm:p-4 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-700/60 backdrop-blur-sm">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 dark:text-red-300 mx-auto mb-2 sm:mb-3" />
                <h4 className="text-sm sm:text-base font-semibold text-red-700 dark:text-red-200 mb-1 sm:mb-2">
                  Método Tradicional
                </h4>
                <div className="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-300 mb-1 sm:mb-2">
                  1+ días
                </div>
                <p className="text-red-600 dark:text-red-200/80 text-xs sm:text-sm">
                  Análisis manual, consultores externos, reuniones...
                </p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-corporate-orange-primary/10 dark:bg-info-500/30 rounded-xl border border-corporate-orange-primary/30 dark:border-info-400/60 backdrop-blur-sm">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-corporate-orange-primary dark:text-info-400 mx-auto mb-2 sm:mb-3" />
                <h4 className="text-sm sm:text-base font-semibold text-corporate-orange-primary dark:text-info-300 mb-1 sm:mb-2">
                  Con Zero Risk AI
                </h4>
                <div className="text-xl sm:text-2xl font-bold text-corporate-orange-primary dark:text-info-300 mb-1 sm:mb-2">
                  10 minutos
                </div>
                <p className="text-corporate-orange-primary/80 dark:text-info-200/90 text-xs sm:text-sm">
                  Automatizado, preciso, listo para implementar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
