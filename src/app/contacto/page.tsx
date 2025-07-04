"use client";
import React from "react";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Header from "../../components/home/header";
import Footer from "../../components/home/footer";
import Success from "./_components/sucess";
import { useContact } from "./hooks/use-contact";
import ContactForm from "./_components/contact-form";
import ContactInformation from "./_components/contact-information";

const ContactPage: React.FC = () => {
  const { isSubmitted } = useContact();

  if (isSubmitted) {
    return <Success />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/foto-contacto.jpg"
            alt="Equipo de trabajo colaborando"
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/25 backdrop-blur-md text-blue-100 px-5 py-3 rounded-full text-sm font-medium border border-blue-300/40 shadow-lg mb-8">
              <MessageCircle className="h-4 w-4" />
              <span>Estamos Aquí para Ayudarte</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block mb-2">Hablemos sobre tu</span>
              <span className="block text-blue-400 bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Gestión de Riesgos
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte a implementar
              <strong className="text-blue-300"> Zero Risk AI</strong> en tu
              organización
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <ContactForm />
            <ContactInformation />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
