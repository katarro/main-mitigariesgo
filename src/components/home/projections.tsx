import React from "react";
import {
  BarChart3,
  FileText,
  TrendingUp,
  Eye,
  Download,
  Filter,
} from "lucide-react";

const ProjectionsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm text-blue-700 dark:text-blue-300 px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-blue-200/60 dark:border-blue-800/50 shadow-sm">
            <BarChart3 className="h-4 w-4" />
            <span>Análisis Avanzado</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-gray-50 mb-6 leading-tight tracking-tight">
            <span className="block mb-2">Proyecciones</span>
            <span className="text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
              Inteligentes
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Combina tus datos históricos con{" "}
            <strong className="text-accent-500 dark:text-blue-400 font-semibold">
              benchmarks sectoriales
            </strong>{" "}
            y genera reportes PDF/Excel listos para auditorías.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-white">
                Dashboard Interactivo de Alto Rendimiento
              </h3>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Nuestro dashboard interactivo te permite{" "}
                <strong className="text-info-500 dark:text-blue-400">
                  filtrar y comparar en segundos
                </strong>
                , visualizando tendencias de riesgo y áreas críticas de forma
                inmediata.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: "Análisis de Tendencias",
                  description:
                    "Identifica patrones y evolución de riesgos a lo largo del tiempo",
                },
                {
                  icon: <Eye className="h-6 w-6" />,
                  title: "Visualización Inmediata",
                  description:
                    "Gráficos interactivos que revelan áreas críticas al instante",
                },
                {
                  icon: <Filter className="h-6 w-6" />,
                  title: "Filtros Avanzados",
                  description:
                    "Segmenta datos por departamento, fecha, tipo de riesgo y más",
                },
                {
                  icon: <Download className="h-6 w-6" />,
                  title: "Exportación Profesional",
                  description:
                    "Reportes PDF/Excel listos para auditorías y presentaciones",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://app.mitigariesgo.cl"
                className="inline-flex items-center space-x-3 bg-accent-500 from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Ver Dashboard en Acción</span>
              </a>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="space-y-8">
            {/* Main Dashboard Video */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gray-50/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/60 dark:border-slate-700/50 shadow-xl">
                <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-inner">
                  {/* Video del Dashboard */}
                  <video
                    className="w-full h-64 sm:h-80 lg:h-96 object-contain rounded-xl bg-gray-100 dark:bg-gray-800"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src="/media/dashboard.mp4" type="video/webm" />
                    {/* Fallback para navegadores que no soporten WebM */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                      <div className="text-center space-y-4">
                        <BarChart3 className="h-16 w-16 text-blue-400 mx-auto" />
                        <div className="space-y-2">
                          <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                            Dashboard Interactivo
                          </div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">
                            Tu navegador no soporta este video
                          </div>
                        </div>
                      </div>
                    </div>
                  </video>

                  {/* Overlay sutil para mejorar la legibilidad del badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/10 pointer-events-none"></div>
                </div>

                {/* Badge flotante */}
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                  ✓ En Vivo
                </div>
              </div>
            </div>

            {/* Secondary Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Reports Image */}
              <div className="relative bg-gray-50/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-4 border border-gray-200/60 dark:border-slate-700/50 shadow-lg">
                <div className="relative h-32 w-full rounded-lg overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Reportes PDF
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Image */}
              <div className="relative bg-gray-50/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-xl p-4 border border-gray-200/60 dark:border-slate-700/50 shadow-lg">
                <div className="relative h-32 w-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Análisis Avanzado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 lg:p-12 border border-blue-200/50 dark:border-blue-800/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-white mb-4">
              Datos que Hablan por Sí Solos
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Nuestras proyecciones inteligentes han ayudado a cientos de
              empresas a tomar decisiones más informadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "98%",
                label: "Precisión en Predicciones",
                description: "Basado en análisis de datos históricos",
              },
              {
                number: "75%",
                label: "Reducción de Incidentes",
                description: "En empresas que usan nuestras proyecciones",
              },
              {
                number: "24/7",
                label: "Monitoreo Continuo",
                description: "Alertas automáticas en tiempo real",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-slate-800 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectionsSection;
