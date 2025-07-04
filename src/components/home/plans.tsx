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
      className="py-16 lg:py-24 bg-gradient-to-br from-slate-50/80 via-gray-50/60 to-info-500/5 dark:from-corporate-blue-secondary dark:via-corporate-blue-primary/80 dark:to-corporate-blue-secondary transition-all duration-500"
      id="planes"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-info-500/10 dark:bg-info-500/25 backdrop-blur-sm text-info-600 dark:text-info-400 px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-info-500/30 dark:border-info-500/40 shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span>Planes Flexibles</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-corporate-blue-primary dark:text-white mb-6 leading-tight tracking-tight">
            Planes que se Adaptan a tu{" "}
            <span className="bg-gradient-to-r from-info-500 to-info-600 dark:from-info-400 dark:to-info-300 bg-clip-text text-transparent">
              Ritmo
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-corporate-blue-primary/70 dark:text-white/85 max-w-3xl mx-auto leading-relaxed font-medium">
            Desde startups hasta corporaciones:{" "}
            <strong className="text-info-600 dark:text-info-400 font-semibold">
              todos ahorran tiempo con Zero Risk AI
            </strong>
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-50/70 dark:bg-corporate-blue-primary/30 backdrop-blur-sm rounded-3xl ${
                plan.popular
                  ? "shadow-2xl scale-105 dark:shadow-info-500/20 border-2 border-info-500/50 dark:border-info-500/60"
                  : "shadow-xl hover:shadow-2xl border border-info-500/20 dark:border-info-500/30"
              } transition-all duration-700 overflow-hidden`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="flex justify-center mb-4">
                  <div className="bg-info-500 dark:bg-info-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
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
                  <h3 className="text-2xl font-bold text-corporate-blue-primary dark:text-white mb-3">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-info-600 dark:text-info-400">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-corporate-blue-primary/70 dark:text-white/70 text-lg ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-corporate-blue-primary/80 dark:text-white/90 font-medium">
                    {plan.description}
                  </p>
                  <p className="text-sm text-corporate-blue-primary/60 dark:text-white/60 mt-2">
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
                          <CheckCircle className="h-5 w-5 text-corporate-green-accent dark:text-corporate-green-accent-light flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-slate-300 dark:text-slate-600 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            hasFeature
                              ? "text-corporate-blue-primary dark:text-white/90 font-medium"
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
                      ? "bg-corporate-orange-primary hover:bg-corporate-orange-primary-dark dark:bg-corporate-orange-primary dark:hover:bg-corporate-orange-primary-light text-white"
                      : "bg-white dark:bg-corporate-blue-secondary/80 text-corporate-blue-primary dark:text-white hover:bg-info-50 dark:hover:bg-info-500/20 border border-info-500/30 dark:border-info-500/40"
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
            <div className="absolute -inset-4 bg-corporate-green-accent/15 dark:bg-info-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-corporate-green-accent/5 dark:bg-corporate-blue-primary/40 p-8 lg:p-12 rounded-3xl shadow-xl border border-corporate-green-accent/20 dark:border-info-500/30 backdrop-blur-sm">
              <Award className="h-16 w-16 text-corporate-green-accent dark:text-info-500 mx-auto mb-6" />
              <h3 className="text-2xl lg:text-3xl font-bold text-corporate-blue-primary dark:text-white mb-4">
                ROI Garantizado en el Primer Uso
              </h3>
              <p className="text-lg text-corporate-blue-primary/80 dark:text-white/90 leading-relaxed max-w-2xl mx-auto">
                El tiempo que ahorras en una sola matriz de riesgo ya justifica
                la inversión.
                <strong className="text-corporate-green-accent dark:text-info-400">
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
