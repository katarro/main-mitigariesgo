"use client";
import React from "react";
import { Moon, Sun, Sparkles } from "lucide-react";
import Image from "next/image";
import { useHeader } from "src/hooks/use-header";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC = () => {
  const { mounted, isMenuOpen, setIsMenuOpen, toggleDarkMode, resolvedTheme } =
    useHeader();

  // No renderizar el botón hasta que esté mounted para evitar hydration issues
  if (!mounted) {
    return (
      <HeaderSkeleton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    );
  }

  return (
    <header className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 z-50 transition-all duration-500 shadow-sm dark:shadow-slate-900/20">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section - Mejorado */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <Image
                src="/logo/klogo mitigariesgo.cl-03.svg"
                alt="Zero Risk AI Logo"
                width={140}
                height={45}
                className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.setAttribute(
                    "style",
                    "display: flex"
                  );
                }}
              />
              {/* Fallback logo mejorado */}
              <div
                className="hidden items-center space-x-3"
                style={{ display: "none" }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="text-white h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  Zero Risk AI
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Desktop Navigation - Mejorado */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#como-funciona", label: "Cómo Funciona" },
                { href: "#funcionalidades", label: "Funcionalidades" },
                { href: "#planes", label: "Planes y Precios" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-3 lg:px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-sm lg:text-base font-medium group rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></span>
                </a>
              ))}

              {/* CTA Button - Mejorado */}
              <a
                href="https://app.mitigariesgo.cl"
                className="group relative ml-2 lg:ml-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white px-4 lg:px-6 py-2.5 rounded-xl transition-all duration-300 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5 hover:scale-105"
              >
                <span className="relative z-10">Iniciar Sesión</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </a>
            </nav>

            {/* Dark mode toggle - Mejorado - Movido después de la navegación */}
            <button
              onClick={toggleDarkMode}
              className="hidden md:flex group p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
              aria-label="Toggle dark mode"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4 lg:h-5 lg:w-5 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="h-4 w-4 lg:h-5 lg:w-5 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Dark mode toggle para móvil - Se mantiene en la posición original */}
            <button
              onClick={toggleDarkMode}
              className="md:hidden group p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
              aria-label="Toggle dark mode"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4 lg:h-5 lg:w-5 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="h-4 w-4 lg:h-5 lg:w-5 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Mobile menu button - Mejorado */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors duration-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-2" : ""
                  }`}
                ></span>
                <span
                  className={`absolute top-2 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`absolute top-4 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Mejorado */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mt-4 pb-4 border-t border-slate-200/50 dark:border-slate-700/50 pt-4">
            <div className="flex flex-col space-y-2">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#como-funciona", label: "Cómo Funciona" },
                { href: "#funcionalidades", label: "Funcionalidades" },
                { href: "#planes", label: "Planes y Precios" },
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group px-4 py-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen
                      ? "slideInFromRight 0.3s ease-out forwards"
                      : "",
                  }}
                >
                  <span className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{item.label}</span>
                  </span>
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href="https://app.mitigariesgo.cl"
                className="mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white px-6 py-3 rounded-xl text-center transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                style={{
                  animationDelay: "200ms",
                  animation: isMenuOpen
                    ? "slideInFromRight 0.3s ease-out forwards"
                    : "",
                }}
              >
                Iniciar Sesión
              </a>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

// Componente skeleton mejorado
const HeaderSkeleton: React.FC<HeaderProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => (
  <header className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 z-50 transition-all duration-500 shadow-sm">
    <div className="container mx-auto px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-8 sm:h-10 w-36 bg-gradient-to-r from-slate-200 to-slate-300 animate-pulse rounded-lg"></div>
        </div>
        <div className="flex items-center space-x-3 lg:space-x-4">
          <div className="p-3 rounded-xl bg-slate-100 h-10 w-10 animate-pulse"></div>
          <nav className="hidden md:flex items-center space-x-2">
            {[80, 120, 140, 120].map((width, index) => (
              <div
                key={index}
                className={`h-6 bg-slate-200 rounded animate-pulse`}
                style={{ width: `${width}px` }}
              ></div>
            ))}
            <div className="h-10 w-32 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl animate-pulse ml-4"></div>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-slate-600 rounded-xl"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 bg-slate-300 rounded animate-pulse"></div>
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
