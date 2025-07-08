import {
  Target,
  Building,
  Shield,
  Zap,
  Brain,
  MessageCircle,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const features = [
  {
    icon: <Target className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "Gestión Proactiva",
    description:
      "Detecta amenazas antes de que se conviertan en problemas reales.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: <Building className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "Plantillas por Rubro",
    description:
      "Selecciona tu industria: minería, construcción, salud, finanzas y más!",
    color:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: <Shield className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "Reduce el Error Humano",
    description: "Minimiza errores manuales con análisis automatizado de IA.",
    color:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: <Zap className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "Generación Instantánea",
    description:
      "En menos de 10 minutos, tendrás una matriz de riesgo ¡Completa!",
    color:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    icon: <Brain className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "Zero Risk AI",
    description: "Analiza datos complejos y descubre patrones de riesgo.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "ChatBot Experto",
    description: "ChatBot con un prevencionista experto disponible 24/7.",
    color:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    gradient: "from-indigo-500 to-indigo-600",
  },
];

export const howItWorks = [
  {
    step: "1",
    title: "Selecciona y completa",
    description:
      "Elige la plantilla adecuada y completa el formulario (opcional, la IA puede hacerlo por ti).",
  },
  {
    step: "2",
    title: "La IA analiza tu información",
    description:
      "Nuestra inteligencia artificial procesa los datos y evalúa riesgos según el Decreto Supremo N.º 44.",
  },
  {
    step: "3",
    title: "Recibe tu matriz lista",
    description:
      "Obtén una matriz de riesgos detallada, estructurada y lista para implementar.",
  },
];

export const plans = [
  {
    name: "Plan Básico",
    price: "$5.000",
    period: "CLP",
    description: "Ideal para empresas pequeñas y startups",
    subtitle: "Perfecto para comenzar",
    features: [
      "1 matriz de riesgo",
      "Carga, análisis de IA, ajustes y exportación",
      "Descarga Excel",
      "Monitoreo básico 24/7 (alertas por correo)",
      "Soporte estándar",
      "Dashboard interactivo",
    ],
    limitations: [
      "Sin exportación PDF",
      "Sin ChatBot experto",
      "Sin reportes con benchmarks",
    ],
    popular: false,
    color: "border-slate-200 dark:border-slate-700",
    textColor: "text-slate-600 dark:text-slate-400",
    bgColor: "bg-slate-50 dark:bg-slate-800/50",
  },
  {
    name: "Plan Premium",
    price: "$50.000",
    period: "CLP",
    description: "Para empresas en crecimiento que buscan optimización",
    subtitle: "Máximo valor y funcionalidades",
    features: [
      "12 matrices de riesgo",
      "ChatBot experto en prevención de riesgos",
      "Soporte Premium (respuesta ≤ 24h)",
      "Reportes avanzados con benchmarks sectoriales",
      "Biblioteca de plantillas premium",
      "Histórico y versioning de matrices",
    ],
    limitations: [],
    popular: true,
    color:
      "border-blue-500 ring-2 ring-blue-500 dark:border-blue-400 dark:ring-blue-400",
    textColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "Plan Enterprise",
    price: "Personalizado",
    period: "",
    description: "Para grandes corporaciones con necesidades específicas",
    subtitle: "Solución empresarial completa",
    features: [
      "Matrices ilimitadas",
      "Dominio y marca personalizados",
      "Integración a medida con sistemas corporativos",
      "Infraestructura Segura & SLA 99,9%",
      "Monitoreo & Reportes Premium en tiempo real",
      "Gerente de cuenta dedicado",
      "Capacitación personalizada presencial/virtual",
      "Consultoría estratégica incluida",
      "SSO (Single Sign-On) corporativo",
      "Multi-región y backup avanzado",
      "API dedicada con rate limits personalizados",
    ],
    limitations: [],
    popular: false,
    color:
      "border-purple-500 ring-1 ring-purple-500 dark:border-purple-400 dark:ring-purple-400",
    textColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
];

// Lista de todas las características para comparación
export const allFeatures = [
  {
    name: "Matrices de riesgo",
    basic: "1 matriz",
    premium: "12 matrices",
    enterprise: "Ilimitadas",
  },
  { name: "Análisis con IA", basic: true, premium: true, enterprise: true },
  { name: "Descarga Excel", basic: true, premium: true, enterprise: true },
  {
    name: "Dashboard interactivo",
    basic: true,
    premium: true,
    enterprise: true,
  },
  {
    name: "Monitoreo 24/7",
    basic: "Básico",
    premium: "Avanzado",
    enterprise: "Premium",
  },
  {
    name: "Soporte",
    basic: "Estándar",
    premium: "Premium ≤24h",
    enterprise: "Dedicado",
  },
  { name: "Exportación PDF", basic: false, premium: true, enterprise: true },
  { name: "ChatBot experto", basic: false, premium: true, enterprise: true },
  {
    name: "Reportes con benchmarks",
    basic: false,
    premium: true,
    enterprise: true,
  },
  { name: "Plantillas premium", basic: false, premium: true, enterprise: true },
  {
    name: "Histórico y versioning",
    basic: false,
    premium: true,
    enterprise: true,
  },
  {
    name: "Dominio personalizado",
    basic: false,
    premium: false,
    enterprise: true,
  },
  {
    name: "Integración corporativa",
    basic: false,
    premium: false,
    enterprise: true,
  },
  { name: "SLA 99,9%", basic: false, premium: false, enterprise: true },
  { name: "Gerente dedicado", basic: false, premium: false, enterprise: true },
  { name: "SSO corporativo", basic: false, premium: false, enterprise: true },
];

export const faqs = [
  {
    question: "¿Qué tan rápido puedo tener mi matriz de riesgo lista?",
    answer:
      "Con Zero Risk AI, puedes tener una matriz de riesgo completa en menos de 10 minutos. Nuestro sistema automatizado reduce el tiempo de análisis en un 95% comparado con métodos tradicionales.",
  },
  {
    question: "¿Cómo garantizan la precisión del análisis?",
    answer:
      "Nuestro sistema ha sido validado con más de 10.000 matrices analizadas. La IA se entrena constantemente con datos actualizados del sector.",
  },
  {
    question: "¿Qué industrias están soportadas?",
    answer:
      "Zero Risk AI está diseñado para adaptarse a cualquier industria gracias a su inteligencia artificial entrenada con miles de matrices de riesgo de múltiples sectores. Nuestro sistema cuenta con una base de datos de más de 50,000 riesgos catalogados, lo que le permite analizar trabajos específicos y sus riesgos asociados sin importar el sector",
  },
  {
    question: "¿El sistema cumple con normativas chilenas?",
    answer:
      "Sí, nuestro sistema está diseñado para cumplir con el Decreto Supremo N.º 44 y otras regulaciones de salud ocupacional vigentes en Chile.",
  },
];

export const sections = [
  {
    title: "Producto",
    links: [
      { href: "#funcionalidades", label: "Funcionalidades" },
      { href: "#planes", label: "Precios" },
      // { href: "#", label: "API" },
      // { href: "#", label: "Integraciones" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { href: "/contacto", label: "Centro de Ayuda" },
      {
        href: "http://github.com/ZenomyAI-comunidad/ZenomyLabs",
        label: "Zenomy Labs",
      },
      // { href: "#", label: "Casos de Estudio" },
      // { href: "#", label: "Blog" },
      // { href: "#", label: "Documentación" },
    ],
  },
  {
    title: "Contacto",
    links: [
      {
        icon: Mail,
        href: "mailto:contacto@mitigariesgo.cl",
        label: "contacto@mitigariesgo.cl",
      },
      {
        icon: Phone,
        href: "tel:+56948618975",
        label: "+56 9 4861 8975",
      },
      {
        icon: MapPin,
        label: "Santiago, Chile",
      },
    ],
  },
];

export const socialMedia = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zenomy-ai-product-studio-2a4968350/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/zenomy_ai?igsh=MTQ4eno1ZDQxc2Yxaw==",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61572934897598",
    icon: Facebook,
  },
];
