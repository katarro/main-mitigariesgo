"use client";

import { Fragment, useState } from "react";

export function EarlyStagesModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <Fragment>
      <button
        onClick={handleOpen}
        className="ml-2 text-yellow-900 underline hover:no-underline font-semibold text-sm md:text-base focus:outline-none"
      >
        Conoce más
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="relative bg-white rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto p-8 border-t-8 border-blue-600">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200 mb-6">
              <h3 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
                🚀 Fases Iniciales: MitigaRiesgo.cl
              </h3>
              <button
                onClick={handleOpen}
                className="text-gray-500 hover:text-gray-900 text-4xl font-bold transition-colors duration-200 leading-none"
                aria-label="Cerrar"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col gap-6 text-gray-700 text-lg">
              <p className="text-center md:text-left leading-relaxed">
                ¡Estamos construyendo el futuro de MitigaRiesgo.cl contigo! En esta fase inicial, tu feedback es oro.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-blue-50 p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <span className="text-blue-600 text-4xl mb-2">💡</span>
                  <strong className="text-gray-900 text-xl mb-1">Innovación con IA</strong>
                  <p className="text-sm text-gray-600">
                    Probando y refinando funciones de Inteligencia Artificial para soluciones más eficientes.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <span className="text-yellow-600 text-4xl mb-2">⚙️</span>
                  <strong className="text-gray-900 text-xl mb-1">Optimización de Procesos</strong>
                  <p className="text-sm text-gray-600">
                    Mejorando la lógica interna para un rendimiento superior y experiencia fluida.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <span className="text-green-600 text-4xl mb-2">🗣️</span>
                  <strong className="text-gray-900 text-xl mb-1">Tu Voz Importa</strong>
                  <p className="text-sm text-gray-600">
                    Abiertos a todas tus sugerencias para adaptar el sistema a tus necesidades.
                  </p>
                </div>
              </div>

              <p className="text-center md:text-left mt-4 text-base leading-relaxed text-gray-600">
                Tu participación es clave para que MitigaRiesgo.cl crezca y se convierta en la herramienta que realmente necesitas.
              </p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
