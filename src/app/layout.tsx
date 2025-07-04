import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mitiga Riesgo",
  description:
    "Crea matrices de riesgo en minutos con inteligencia artificial. Reduce el tiempo de análisis en 95%.",
  icons: {
    icon: [
      {
        url: "/favicon.svg", // ← Cambiar de "logo/favicon.svg" a "/favicon.svg"
        type: "image/svg+xml",
      },
      {
        url: "/favicon.svg", // ← Agregar fallback para navegadores viejos
        sizes: "any",
      },
    ],
    apple: "/favicon.svg", // ← Para dispositivos Apple
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
