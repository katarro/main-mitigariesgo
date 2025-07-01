import React, { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { faqs } from "src/utils/consts";
import Link from "next/link";

const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4 sm:px-0">
            Resolvemos tus dudas sobre <strong>Zero Risk AI</strong> y cómo
            puede transformar tu gestión de riesgos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 dark:border-slate-700 rounded-lg mb-4 bg-white dark:bg-slate-800 transition-colors duration-300"
            >
              <button
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors rounded-t-lg"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 sm:h-5 sm:w-5 text-slate-500 dark:text-slate-400 transition-transform flex-shrink-0 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm sm:text-base">
            ¿No encuentras la respuesta que buscas?
          </p>
          <Link
            href="contacto"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm sm:text-base"
          >
            <Mail className="h-4 w-4" />
            <span>Contáctanos directamente</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
