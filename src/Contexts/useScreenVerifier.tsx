import { createContext, useContext, useEffect, useState } from "react";

type ScreenType = "mobile" | "tablet" | "desktop";

interface ScreenVerifierProviderProps {
  children: React.ReactNode;
}

type ScreenVerifierValueType = {
  screenType: ScreenType;
  screenSize: number;
};

const ScreenVerifierContext = createContext<
  ScreenVerifierValueType | undefined
>(undefined);

function ScreenVerifierProvider({ children }: ScreenVerifierProviderProps) {
  const [screenType, setScreenType] = useState<ScreenType>(
    window.innerWidth < 480
      ? "mobile"
      : window.innerWidth < 768
        ? "tablet"
        : "desktop",
  );

  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  function ScreenVerifier() {
    const screenWidth = window.innerWidth;

    setScreenSize(screenWidth);

    if (screenWidth < 480) {
      setScreenType("mobile");
    } else if (screenWidth < 768) {
      setScreenType("tablet");
    } else setScreenType("desktop");
  }

  useEffect(() => {
    window.addEventListener("resize", ScreenVerifier);

    return () => window.removeEventListener("resize", ScreenVerifier);
  }, []);

  const value: ScreenVerifierValueType = { screenType, screenSize };

  return (
    <ScreenVerifierContext.Provider value={value}>
      {children}
    </ScreenVerifierContext.Provider>
  );
}

function useScreenVerifier() {
  const context = useContext(ScreenVerifierContext);

  if (context === undefined)
    throw new Error(
      "ScreenVerifierContext usado fora do ScreenVerifierProvider!",
    );

  return context;
}

export { ScreenVerifierProvider, useScreenVerifier };
