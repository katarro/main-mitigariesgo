"use client";
import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageCircle,
  Sparkles,
  ArrowRight,
  Building,
  Users,
  Shield,
  AlertCircle
} from "lucide-react";
import Image from "next/image";
import Header from "../../components/home/header";
import Footer from "../../components/home/footer";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  plan: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    plan: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // URL del Google Apps Script Web App
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/a/macros/wimespa.com/s/AKfycbwuSaF2SkYjEycjautBlljETjeUG-_R7-qNV4xdlh7b-MHiZmsNBZxBGbp165zTY5eayg/exec";
      
      // Preparar los datos para enviar
      const submitData = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'Página de Contacto - Zero Risk AI'
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Importante para Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      // Como usamos no-cors, no podemos leer la respuesta
      // Asumimos que fue exitoso si no hay error
      setIsSubmitted(true);
      
      // Limpiar el formulario
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        plan: ""
      });

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitError('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "contacto@mitigariesgo.cl",
      href: "mailto:contacto@mitigariesgo.cl",
      description: "Respuesta en menos de 24 horas"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      value: "+56 9 4861 8975",
      href: "tel:+56948618975",
      description: "Lunes a Viernes, 9:00 - 18:00"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicación",
      value: "Santiago, Chile",
      href: "#",
      description: "Oficinas centrales"
    }
  ];

  const reasons = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Implementación Empresarial",
      description: "Necesitas integrar Zero Risk AI en tu organización con configuraciones específicas."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Capacitación de Equipos",
      description: "Quieres entrenar a tu equipo para maximizar el uso de la plataforma."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Consultoría Especializada",
      description: "Buscas asesoría experta en gestión de riesgos para tu industria específica."
    }
  ];

  if (isSubmitted) {
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
                Gracias por contactarnos. Tu mensaje ha sido registrado y nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center justify-center w-full space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  <span>Enviar Otro Mensaje</span>
                </button>
                
                <a
                  href="/"
                  className="inline-flex items-center justify-center w-full space-x-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300"
                >
                  <span>Volver al Inicio</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                
                <a
                  href="https://app.mitigariesgo.cl"
                  className="inline-flex items-center justify-center w-full space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
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
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/obras-civiles.jpg"
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
              <strong className="text-blue-300"> Zero Risk AI</strong> en tu organización
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white dark:bg-slate-800 p-8 lg:p-10 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="mb-8">
                  <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Sparkles className="h-4 w-4" />
                    <span>Formulario de Contacto</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                    Cuéntanos sobre tu Proyecto
                  </h2>
                  
                  <p className="text-slate-600 dark:text-slate-300">
                    Completa el formulario y nuestro equipo se pondrá en contacto contigo para una consulta personalizada.
                  </p>
                </div>

                {/* Error Message */}
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <p className="text-red-700 dark:text-red-300 text-sm">
                        {submitError}
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-300"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Email Corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-300"
                        placeholder="tu@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-300"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-300"
                        placeholder="+56 9 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="plan" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Plan de Interés
                      </label>
                      <select
                        id="plan"
                        name="plan"
                        value={formData.plan}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-300"
                      >
                        <option value="">Selecciona un plan</option>
                        <option value="basico">Plan Básico - $5.000 CLP</option>
                        <option value="premium">Plan Premium - $50.000 CLP</option>
                        <option value="enterprise">Plan Enterprise - Personalizado</option>
                        <option value="consulta">Solo Consulta</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Asunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-300"
                        placeholder="¿En qué podemos ayudarte?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-300 resize-none"
                      placeholder="Cuéntanos más detalles sobre tu proyecto, industria, tamaño de equipo, y cómo podemos ayudarte con la gestión de riesgos..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-400 disabled:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                    Al enviar este formulario, aceptas que nos pongamos en contacto contigo para brindarte información sobre Zero Risk AI.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-8">
              
              {/* Contact Cards */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                    Información de Contacto
                  </h3>
                </div>
                
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
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
                  
                  <a
                    href="/#planes"
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors group"
                  >
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      Ver Planes y Precios
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-600 dark:text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </a>
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
                  <strong>Menos de 24 horas</strong> en días hábiles. Para consultas urgentes, 
                  llámanos directamente al +56 9 4861 8975.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;