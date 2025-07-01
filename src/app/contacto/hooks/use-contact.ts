import { useState } from "react";
import { FormData } from "../_components/types";

async function submitContactForm(formData: FormData): Promise<void> {
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyd2tAS4Xx0O_6hQrG3UhCMnzJS7sUc1VD5k9sYl0R9EpQiEHwDmMzEx7fac5Y2JOvZWw/exec";

  const submitData = {
    ...formData,
    timestamp: new Date().toISOString(),
    source: "Página de Contacto - Zero Risk AI",
  };

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submitData),
  });
}

export function useContact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    plan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitContactForm(formData);

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        plan: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitError(
        "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitted,
    submitError,
    handleSubmit,
    handleInputChange,
    formData,
    isSubmitting,
  };
}
