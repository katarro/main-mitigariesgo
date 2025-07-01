import { Mail, Phone, MapPin, Building, Users, Shield } from "lucide-react";

export const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "contacto@mitigariesgo.cl",
    href: "mailto:contacto@mitigariesgo.cl",
    description: "Respuesta en menos de 24 horas",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Teléfono",
    value: "+56 9 4861 8975",
    href: "tel:+56948618975",
    description: "Lunes a Viernes, 9:00 - 18:00",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Ubicación",
    value: "Antofagasta, Chile",
    href: "#",
    description: "Oficinas centrales",
  },
];

export const reasons = [
  {
    icon: <Building className="h-8 w-8" />,
    title: "Implementación Empresarial",
    description:
      "Necesitas integrar Zero Risk AI en tu organización con configuraciones específicas.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Capacitación de Equipos",
    description:
      "Quieres entrenar a tu equipo para maximizar el uso de la plataforma.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Consultoría Especializada",
    description:
      "Buscas asesoría experta en gestión de riesgos para tu industria específica.",
  },
];
