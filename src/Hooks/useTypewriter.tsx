import { useEffect, useState } from "react";

interface UseTypewriterProps {
  text: string;
  delay?: number;
  loadingTime?: number;
}

export function useTypewriter({
  text,
  delay = 20,
  loadingTime = 500,
}: UseTypewriterProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setTextIndex(0);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => clearTimeout(timeout);
  }, [text, loadingTime]);

  useEffect(() => {
    if (isLoading) return;

    const interval = setInterval(() => {
      setTextIndex((prev) => {
        const next = prev + 1;

        if (next >= text.length) {
          clearInterval(interval);
          return text.length;
        }

        return next;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [isLoading, text, delay]);

  return {
    isLoading,
    displayedText: isLoading ? "Carregando..." : text.slice(0, textIndex),
    finished: textIndex >= text.length,
  };
}
