import React from "react";
import Image from "next/image";
import { sections, socialMedia } from "src/utils/consts";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 sm:py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo/logo-claro.svg"
                alt="Zero Risk AI Logo"
                width={120}
                height={40}
                className="h-6 sm:h-8 w-auto"
              />
            </div>
            <p className="text-slate-400 mb-4 text-xs sm:text-sm">
              Revolucionando la gestión de riesgos con inteligencia artificial.
              Ahorra tiempo, reduce costos, aumenta precisión.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Dynamic Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                {section.title}
              </h4>
              <ul className="space-y-2 text-slate-400">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className={`flex items-center space-x-2 ${
                      "icon" in link ? "" : "text-xs sm:text-sm"
                    }`}
                  >
                    {"icon" in link && link.icon && (
                      <link.icon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    )}
                    {link.href ? (
                      <a
                        href={link.href}
                        className="hover:text-white transition-colors text-xs sm:text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
            © 2025 Zero Risk AI. Todos los derechos reservados. Potenciado por
            Inteligencia Artificial.
          </div>
          <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm text-slate-400 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
