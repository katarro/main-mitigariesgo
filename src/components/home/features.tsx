import React from "react";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { features } from "src/utils/consts";

const FeaturesSection: React.FC = () => {
  return (
    <section
      className="py-16 lg:py-24 bg-gradient-to-br from-slate-50/80 via-gray-50/60 to-blue-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-800 transition-all duration-500"
      id="funcionalidades"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section con Layout de 2 Columnas */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Columna Izquierda - Contenido */}
          <div className="text-left lg:pr-8">
            {/* Badge superior */}
            <div className="inline-flex items-center space-x-2 bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm text-blue-700 dark:text-blue-300 px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-blue-200/60 dark:border-blue-800/50 shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-700 dark:text-blue-300" />
              <span>Funcionalidades Avanzadas</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-gray-50 mb-6 leading-tight tracking-tight">
              ¿Por qué elegir{" "}
              <span className="text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                Zero Risk AI
              </span>
              ?
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-medium">
              Ahorra{" "}
              <strong className="text-blue-600 dark:text-blue-400 font-semibold">
                semanas de trabajo
              </strong>{" "}
              con nuestra tecnología de vanguardia. Mientras otros sistemas
              tardan días, nosotros entregamos resultados en{" "}
              <strong className="text-green-600 dark:text-green-400 font-semibold">
                minutos
              </strong>
              .
            </p>

            {/* Stats rápidos */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  95%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Menos tiempo
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                  10min
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Matriz completa
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Imagen de Construcción */}
          <div className="relative w-full">
            <div className="relative">
              {/* Decoración de fondo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>

              {/* Contenedor de imagen */}
              <div className=" relative bg-gray-50/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/60 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className=" relative h-80 lg:h-96 w-full rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/images/minera.jpeg" // Cambia por tu imagen de construcción
                    alt="Trabajadores de construcción gestionando riesgos con Zero Risk AI"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    quality={90}
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/15 to-transparent"></div>
                </div>

                {/* Badge flotante sobre la imagen */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                  ✓ Resultados Inmediatos
                </div>

                {/* Info flotante */}
                <div className="absolute -bottom-4 -left-4 bg-gray-50/95 dark:bg-slate-800/95 backdrop-blur-sm text-slate-800 dark:text-gray-50 px-5 py-3 rounded-xl shadow-lg border border-gray-200/60 dark:border-slate-700/50">
                  <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    Construcción Segura
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Matrices especializadas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Línea central */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Punto en la línea */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Contenido */}
                <div
                  className={`w-5/12 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="relative max-w-3xl mx-auto">
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-20"></div>

            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-blue-400/20">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                  <Clock className="h-12 w-12" />
                </div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                ¡No pierdas más tiempo!
              </h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Cada día sin Zero Risk AI es tiempo y dinero perdido en análisis
                manuales. Únete a las empresas que ya optimizaron su gestión de
                riesgos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.mitigariesgo.cl"
                  className="group inline-flex items-center justify-center space-x-3 bg-gray-50 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-[1.02] border border-gray-200/60"
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
