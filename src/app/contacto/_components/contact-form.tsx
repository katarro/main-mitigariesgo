import React, { useState } from "react";
import { useContact } from "../hooks/use-contact";
import { Sparkles, AlertCircle, Send } from "lucide-react";

// ===== COMPONENTE FLOATING INPUT =====
interface FloatingInputProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

const FloatingInput = ({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
}: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const shouldFloat = isFocused || hasValue;

  return (
    <div className={`relative ${className}`}>
      {/* Input */}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="" // ← PLACEHOLDER VACÍO SIEMPRE
        className={`
          w-full px-4 py-4 pt-6 border rounded-xl transition-all duration-300 ease-in-out
          bg-white dark:bg-slate-700 text-slate-900 dark:text-white
          focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${
            shouldFloat
              ? "border-blue-300 dark:border-blue-600"
              : "border-slate-300 dark:border-slate-600"
          }
          ${hasValue ? "border-slate-400 dark:border-slate-500" : ""}
        `}
      />

      {/* Floating Placeholder */}
      <div
        className={`
          absolute left-4 transition-all duration-300 ease-in-out cursor-text pointer-events-none
          ${
            shouldFloat
              ? "top-3 text-xs text-blue-600 dark:text-blue-400 font-semibold"
              : "top-4 text-base text-slate-500 dark:text-slate-400"
          }
        `}
      >
        {placeholder} {required && <span className="text-red-500">*</span>}
      </div>
    </div>
  );
};

// ===== COMPONENTE FLOATING TEXTAREA =====
interface FloatingTextareaProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  className?: string;
}

const FloatingTextarea = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 6,
  className = "",
}: FloatingTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const shouldFloat = isFocused || hasValue;

  return (
    <div className={`relative ${className}`}>
      {/* Textarea */}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="" // ← PLACEHOLDER VACÍO SIEMPRE
        className={`
          w-full px-4 py-4 pt-6 border rounded-xl transition-all duration-300 ease-in-out resize-none
          bg-white dark:bg-slate-700 text-slate-900 dark:text-white
          focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${
            shouldFloat
              ? "border-blue-300 dark:border-blue-600"
              : "border-slate-300 dark:border-slate-600"
          }
          ${hasValue ? "border-slate-400 dark:border-slate-500" : ""}
        `}
      />

      {/* Floating Placeholder */}
      <div
        className={`
          absolute left-4 transition-all duration-300 ease-in-out cursor-text pointer-events-none
          ${
            shouldFloat
              ? "top-3 text-xs text-blue-600 dark:text-blue-400 font-semibold"
              : "top-4 text-base text-slate-500 dark:text-slate-400"
          }
        `}
      >
        {placeholder} {required && <span className="text-red-500">*</span>}
      </div>
    </div>
  );
};

// ===== COMPONENTE FLOATING SELECT =====
interface FloatingSelectProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  className?: string;
}

const FloatingSelect = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  options,
  required = false,
  className = "",
}: FloatingSelectProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Select sin floating label */}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          w-full px-4 py-3 border rounded-xl transition-all duration-300 ease-in-out
          bg-white dark:bg-slate-700 text-slate-900 dark:text-white
          focus:ring-2 focus:ring-blue-500 focus:border-transparent
          border-slate-300 dark:border-slate-600
          focus:border-blue-300 dark:focus:border-blue-600
        `}
      >
        <option value="">
          {placeholder} {required && "*"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// ===== COMPONENTE PRINCIPAL CON FLOATING LABELS =====
const ContactForm = () => {
  const {
    formData,
    submitError,
    handleSubmit,
    isSubmitting,
    handleInputChange,
  } = useContact();

  // Opciones para el select de planes
  const planOptions = [
    { value: "basico", label: "Plan Básico - $5.000 CLP" },
    { value: "premium", label: "Plan Premium - $50.000 CLP" },
    { value: "enterprise", label: "Plan Enterprise - Personalizado" },
    { value: "consulta", label: "Solo Consulta" },
  ];

  return (
    <div className="order-2 lg:order-1">
      <div className="bg-white dark:bg-slate-800 p-8 lg:p-10 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Formulario de Contacto</span>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
            Cuéntanos sobre tu Proyecto
          </h2>

          <p className="text-slate-600 dark:text-slate-300">
            Completa el formulario y nuestro equipo se pondrá en contacto
            contigo para una consulta personalizada.
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Primera fila: Nombre y Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FloatingInput
              id="name"
              name="name"
              type="text"
              placeholder="Nombre Completo"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <FloatingInput
              id="email"
              name="email"
              type="email"
              placeholder="Email Corporativo"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Segunda fila: Empresa y Teléfono */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FloatingInput
              id="company"
              name="company"
              type="text"
              placeholder="Empresa"
              value={formData.company}
              onChange={handleInputChange}
              required
            />

            <FloatingInput
              id="phone"
              name="phone"
              type="tel"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          {/* Tercera fila: Plan y Asunto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FloatingSelect
              id="plan"
              name="plan"
              placeholder="Plan de Interés"
              value={formData.plan}
              onChange={handleInputChange}
              options={planOptions}
            />

            <FloatingInput
              id="subject"
              name="subject"
              type="text"
              placeholder="Asunto"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Mensaje */}
          <FloatingTextarea
            id="message"
            name="message"
            placeholder="Cuéntanos más detalles sobre tu proyecto..."
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
          />

          {/* Submit Button */}
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

          {/* Footer Text */}
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
            Al enviar este formulario, aceptas que nos pongamos en contacto
            contigo para brindarte información sobre Zero Risk AI.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
