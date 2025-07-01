import React from "react";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  Award,
  Sparkles,
} from "lucide-react";
import { allFeatures, plans } from "src/utils/consts";

const PricingSection: React.FC = () => {
  return (
    <section
      className="py-16 lg:py-24 bg-gradient-to-br from-slate-50/80 via-gray-50/60 to-blue-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-800 transition-all duration-500"
      id="planes"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50/80 backdrop-blur-sm text-blue-700 dark:text-blue-300 px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-blue-200/60 dark:border-blue-800/50 shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span>Planes Flexibles</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-gray-50 mb-6 leading-tight tracking-tight">
            Planes que se Adaptan a tu{" "}
            <span className="text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
              Ritmo
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Desde startups hasta corporaciones:{" "}
            <strong className="text-blue-600 dark:text-blue-400 font-semibold">
              todos ahorran tiempo con Zero Risk AI
            </strong>
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-50/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl ${
                plan.color
              } ${
                plan.popular
                  ? "shadow-2xl scale-105 dark:shadow-slate-900/60"
                  : "shadow-xl hover:shadow-2xl"
              } transition-all duration-700 overflow-hidden`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    <span className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>Más Popular</span>
                    </span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-50 mb-3">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-slate-600 dark:text-slate-400 text-lg ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">
                    {plan.description}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Features Comparison */}
                <div className="space-y-3 mb-8">
                  {allFeatures.map((feature, featureIndex) => {
                    const planValue =
                      index === 0
                        ? feature.basic
                        : index === 1
                        ? feature.premium
                        : feature.enterprise;
                    const hasFeature =
                      typeof planValue === "boolean" ? planValue : true;

                    return (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        {hasFeature ? (
                          <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-slate-300 dark:text-slate-600 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            hasFeature
                              ? "text-slate-700 dark:text-slate-300 font-medium"
                              : "text-slate-400 dark:text-slate-500 line-through opacity-60"
                          }`}
                        >
                          {hasFeature
                            ? typeof planValue === "string" &&
                              planValue !== feature.name
                              ? `${feature.name}: ${planValue}`
                              : feature.name
                            : `${feature.name} (no incluido)`}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <a
                  href={
                    plan.name === "Plan Enterprise"
                      ? "https://wa.me/56948618975?text=Hola,%20me%20interesa%20el%20Plan%20Enterprise%20de%20Zero%20Risk%20AI.%20¿Podrían%20darme%20más%20información?"
                      : "https://app.mitigariesgo.cl"
                  }
                  target={plan.name === "Plan Enterprise" ? "_blank" : "_self"}
                  rel={
                    plan.name === "Plan Enterprise" ? "noopener noreferrer" : ""
                  }
                  className={`group w-full inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-[1.02] ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                      : "bg-gray-50 dark:bg-slate-700 text-slate-800 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-600 border border-gray-200/60 dark:border-slate-600"
                  }`}
                >
                  <span>
                    {plan.name === "Plan Enterprise"
                      ? "Contactar Ventas"
                      : "Comenzar Ahora"}
                  </span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Section */}
        <div className="text-center">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 lg:p-12 rounded-3xl shadow-xl border border-yellow-200/50 dark:border-yellow-800/50">
              <Award className="h-16 w-16 text-yellow-500 dark:text-yellow-400 mx-auto mb-6" />
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-gray-50 mb-4">
                ROI Garantizado en el Primer Uso
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                El tiempo que ahorras en una sola matriz de riesgo ya justifica
                la inversión.
                <strong className="text-yellow-600 dark:text-yellow-400">
                  {" "}
                  Recupera tu inversión desde el día 1.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
