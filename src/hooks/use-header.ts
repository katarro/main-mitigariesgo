import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";

export function useHeader() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = useCallback(() => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }, [resolvedTheme, setTheme]);

  return { mounted, isMenuOpen, setIsMenuOpen, toggleDarkMode, resolvedTheme };
}
