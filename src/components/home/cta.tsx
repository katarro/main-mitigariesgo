import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Listo para Ahorrar Semanas de Trabajo?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
            Únete a cientos de empresas que ya reducen el tiempo de análisis en
            un <strong>95%</strong> con Zero Risk AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8">
            <a
              href="https://app.mitigariesgo.cl"
              className="inline-flex items-center space-x-3 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-50 transition-all group"
            >
              <span>Crear Mi Primera Matriz</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center space-x-2 text-blue-100">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Resultado en 10min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
