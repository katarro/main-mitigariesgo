import React from "react";
import { contactInfo, reasons } from "./consts";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const ContactInformation = () => {
  return (
    <div className="order-1 lg:order-2 space-y-8">
      {/* Contact Cards */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            Información de Contacto
          </h3>
        </div>

        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                {info.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800 dark:text-white mb-1">
                  {info.title}
                </h4>
                {info.href !== "#" ? (
                  <a
                    href={info.href}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-slate-600 dark:text-slate-300 font-medium">
                    {info.value}
                  </span>
                )}
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {info.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Contact Us */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-3xl border border-blue-200/50 dark:border-blue-800/50">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
          ¿Por qué contactarnos?
        </h3>

        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-xl text-blue-600 dark:text-blue-400 shadow-sm">
                {reason.icon}
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                  {reason.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Access */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          Acceso Rápido
        </h3>

        <div className="space-y-3">
          <a
            href="https://app.mitigariesgo.cl"
            className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors group"
          >
            <span className="text-blue-700 dark:text-blue-300 font-medium">
              Probar Zero Risk AI
            </span>
            <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
          </a>

          <Link
            href="/#planes"
            className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors group"
          >
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              Ver Planes y Precios
            </span>
            <ArrowRight className="h-4 w-4 text-slate-600 dark:text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Response Time */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-green-200/50 dark:border-green-800/50">
        <div className="flex items-center space-x-3 mb-3">
          <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
          <h3 className="text-lg font-bold text-green-800 dark:text-green-300">
            Tiempo de Respuesta
          </h3>
        </div>
        <p className="text-green-700 dark:text-green-300 text-sm">
          <strong>Menos de 24 horas</strong> en días hábiles. Para consultas
          urgentes, llámanos directamente al +56 9 4861 8975.
        </p>
      </div>
    </div>
  );
};

export default ContactInformation;
