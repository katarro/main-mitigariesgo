import React, { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { faqs } from "src/utils/consts";
import Link from "next/link";

const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-corporate-blue-secondary transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-corporate-blue-primary dark:text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg sm:text-xl text-corporate-blue-primary/70 dark:text-white/85 max-w-3xl mx-auto px-4 sm:px-0">
            Resolvemos tus dudas sobre{" "}
            <strong className="text-info-600 dark:text-info-400">
              Zero Risk AI
            </strong>{" "}
            y cómo puede transformar tu gestión de riesgos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-info-500/20 dark:border-info-500/30 rounded-lg mb-4 bg-white dark:bg-corporate-blue-primary/30 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-info-500/10 backdrop-blur-sm"
            >
              <button
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-info-50 dark:hover:bg-info-500/10 transition-colors rounded-t-lg"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold text-corporate-blue-primary dark:text-white text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 sm:h-5 sm:w-5 text-info-600 dark:text-info-400 transition-transform flex-shrink-0 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4 border-t border-info-500/10 dark:border-info-500/20">
                  <p className="text-corporate-blue-primary/80 dark:text-white/90 text-sm sm:text-base pt-3">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-corporate-blue-primary/70 dark:text-white/80 mb-4 text-sm sm:text-base">
            ¿No encuentras la respuesta que buscas?
          </p>
          <Link
            href="contacto"
            className="inline-flex items-center space-x-2 text-corporate-orange-primary dark:text-corporate-orange-primary-light hover:text-corporate-orange-primary-dark dark:hover:text-corporate-orange-primary font-semibold text-sm sm:text-base transition-colors duration-300 bg-corporate-orange-primary/5 dark:bg-corporate-orange-primary/10 px-4 py-2 rounded-lg hover:bg-corporate-orange-primary/10 dark:hover:bg-corporate-orange-primary/20"
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
