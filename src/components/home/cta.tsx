import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-corporate-blue-primary dark:bg-corporate-blue-secondary transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Listo para Ahorrar Semanas de Trabajo?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 dark:text-white/95 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
            Únete a cientos de empresas que ya reducen el tiempo de análisis en
            un <strong className="text-info-300 dark:text-info-400">95%</strong>{" "}
            con Zero Risk AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8">
            <a
              href="https://app.mitigariesgo.cl"
              className="inline-flex items-center space-x-3 bg-corporate-orange-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-corporate-orange-primary-dark dark:hover:bg-corporate-orange-primary-light transition-all duration-300 group shadow-accent hover:shadow-accent transform hover:-translate-y-0.5 hover:scale-105"
            >
              <span>Crear Mi Primera Matriz</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center space-x-2 text-white/90 dark:text-white/95">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-corporate-green-accent dark:text-corporate-green-accent-light" />
              <span className="text-sm sm:text-base">Resultado en 10min</span>
            </div>
          </div>

          {/* Stats adicionales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-info-300 dark:text-info-400 mb-1">
                95%
              </div>
              <div className="text-sm text-white/80">Menos Tiempo</div>
            </div>

            {/* <div className="text-center">
              <div className="text-2xl font-bold text-info-500  mb-1">98%</div>
              <div className="text-sm text-white/80">Precisión</div>
            </div> */}

            <div className="text-center">
              <div className="text-2xl font-bold text-info-300 dark:text-info-400 mb-1">
                10min
              </div>
              <div className="text-sm text-white/80">Matriz Lista</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
