import React from "react";
import { ArrowRight, Clock, Zap, Play } from "lucide-react";
import { howItWorks } from "src/utils/consts";
import Image from "next/image";

const HowItWorksSection: React.FC = () => {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 transition-colors duration-300"
      id="como-funciona"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Así funciona Zero Risk AI
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4 sm:px-0">
            Un proceso <strong>simplificado</strong> que transforma semanas de
            trabajo en{" "}
            <strong className="text-blue-600 dark:text-blue-400">
              minutos de eficiencia
            </strong>
          </p>
        </div>

        {/* Main Content Grid - Video + Steps */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start mb-16">
          {/* Left Column - Video Vertical */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Decoración de fondo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              
              {/* Contenedor del video */}
              <div className="relative bg-gray-50/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-2xl p-4 border border-gray-200/60 dark:border-slate-700/50 shadow-xl">
                <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden shadow-inner bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                  {/* Video Vertical */}
                  <video
                    className="w-full h-full object-cover rounded-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src="/media/proceso-vertical.webm" type="video/webm" />
                    <source src="/media/proceso-vertical.mp4" type="video/mp4" />
                    
                    {/* Fallback para navegadores que no soporten el video */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4 p-6">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                          <Play className="h-8 w-8 text-blue-500" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                            Proceso Zero Risk AI
                          </div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">
                            Video no disponible
                          </div>
                        </div>
                      </div>
                    </div>
                  </video>
                  
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/5 pointer-events-none"></div>
                </div>

                {/* Badge flotante */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                  ✓ Proceso Real
                </div>

                {/* Info flotante inferior */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm text-slate-800 dark:text-gray-50 px-5 py-3 rounded-xl shadow-lg border border-gray-200/60 dark:border-slate-700/50">
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    En Tiempo Real
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Proceso completo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="order-1 lg:order-2 space-y-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                {/* Número del paso */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Contenido del paso */}
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Línea conectora (excepto en el último paso) */}
                  {index < howItWorks.length - 1 && (
                    <div className="absolute left-6 mt-4 w-0.5 h-16 bg-gradient-to-b from-blue-300 to-blue-200 dark:from-blue-600 dark:to-blue-700"></div>
                  )}
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://app.mitigariesgo.cl"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105"
              >
                <span>Comenzar Ahora</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Time comparison section - Mantenido igual */}
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-slate-800 dark:text-white mb-6 sm:mb-8">
            Comparación de Tiempos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
              <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-red-500 dark:text-red-400 mx-auto mb-4" />
              <h4 className="text-base sm:text-lg font-semibold text-red-700 dark:text-red-400 mb-2">
                Método Tradicional
              </h4>
              <div className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
                1+ dias
              </div>
              <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm">
                Análisis manual, consultores externos, reuniones,
                revisiones...
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 dark:text-green-400 mx-auto mb-4" />
              <h4 className="text-base sm:text-lg font-semibold text-green-700 dark:text-green-400 mb-2">
                Con Zero Risk AI
              </h4>
              <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                10 minutos
              </div>
              <p className="text-green-600 dark:text-green-400 text-xs sm:text-sm">
                Automatizado, preciso, listo para implementar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;