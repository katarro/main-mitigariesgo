import React from "react";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <main
      className="relative min-h-screen flex flex-col overflow-hidden"
      id="inicio"
    >
      {/* Background con overlay gradiente optimizado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/obras-civiles.jpg"
          alt="Trabajadores de minería analizando riesgos"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay gradiente ajustado para proteger mejor el texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80"></div>
        {/* Overlay específico para la zona superior del título */}
        <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-slate-900/70 to-transparent"></div>
        {/* Overlay específico para la zona inferior del contenido */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent"></div>
      </div>

      {/* Contenedor principal con grid layout más inteligente */}
      <div className="relative z-10 min-h-screen grid grid-rows-[auto_1fr_auto] px-4 sm:px-6">
        {/* HEADER SECTION - Badge y espacio para el header */}
        <div className="pt-16 flex justify-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/25 backdrop-blur-md text-blue-100 px-5 py-3 rounded-full text-sm font-medium border border-blue-300/40 shadow-lg">
            <Sparkles className="h-4 w-4" />
            <span>Powered by Artificial Intelligence</span>
          </div>
        </div>

        {/* MAIN CONTENT - Título posicionado estratégicamente */}
        <div className="flex flex-col justify-start pt-20 lg:pt-24">
          <div className="text-center max-w-5xl mx-auto">
            {/* Título principal - Posicionado en zona segura */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block mb-2">Gestión de Riesgos</span>
              <span className="block text-blue-400 bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
                Inteligente
              </span>
            </h1>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-10">
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">
                Reduce el tiempo de análisis en un{" "}
                <strong className="text-yellow-300 text-2xl">95%</strong> con
                precisión del{" "}
                <strong className="text-green-300 text-2xl">98%</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION - Contenido inferior con mejor contraste */}
        <div className="pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="https://app.mitigariesgo.cl"
                className="inline-flex items-center justify-center space-x- bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all group shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105"
              >
                <span>Crear Matriz Ahora</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <button className="inline-flex items-center justify-center space-x-3 bg-white/15 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/25 transition-all group shadow-xl">
                <Play className="h-5 w-5 group-hover:scale-125 transition-transform" />
                <span>Ver Demo</span>
              </button>
            </div>

            {/* Stats Section con mejor diseño */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
