import { ArrowRight, CheckCircle, Link } from "lucide-react";
import React from "react";
import Footer from "src/components/home/footer";
import Header from "src/components/home/header";

const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <Header />

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              ¡Mensaje Enviado!
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Gracias por contactarnos. Nuestro equipo se pondrá en contacto
              contigo en las próximas 24 horas.
            </p>

            <div className="space-y-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center w-full space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <span>Volver al Inicio</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="https://app.mitigariesgo.cl"
                className="inline-flex items-center justify-center w-full space-x-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300"
              >
                <span>Probar Zero Risk AI</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Success;
