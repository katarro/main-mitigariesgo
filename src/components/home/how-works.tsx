import React from "react";
import { ArrowRight, Clock, Zap } from "lucide-react";
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

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Ilustración de undraw */}
                <div className="mb-6 relative">
                  <div className="relative h-48 w-64 mx-auto rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-6 flex items-center justify-center">
                    <Image
                      src={`/images/step-${index + 1}.svg`} // Cambia por tus SVGs de undraw
                      alt={`Ilustración paso ${step.step}: ${step.title}`}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>

                {/* Número del paso debajo de la ilustración */}
                <div className="mb-4">
                  <div className="bg-blue-600 dark:bg-blue-500 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl sm:text-3xl font-bold shadow-lg mx-auto">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                  {step.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-32 left-full w-full">
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300 dark:text-blue-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Time comparison */}
          <div className="mt-12 sm:mt-16 bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
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
      </div>
    </section>
  );
};

export default HowItWorksSection;
