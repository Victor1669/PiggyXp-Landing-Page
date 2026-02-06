import { createContext, useContext, useRef } from "react";

type SectionKeys = "inicio" | "projeto" | "sobreNos" | "equipe" | "contato";

interface ElementNavigationValueTypes {
  scrollTo: (section: SectionKeys) => void;
  registerRef: (section: SectionKeys) => (el: HTMLDivElement | null) => void;
}

interface ElementNavigationProviderProps {
  children: React.ReactNode;
}

const ElementNavigationContext = createContext<
  ElementNavigationValueTypes | undefined
>(undefined);

function ElementNavigationProvider({
  children,
}: ElementNavigationProviderProps) {
  const sectionRefs = useRef<Record<SectionKeys, HTMLDivElement | null>>({
    inicio: null,
    projeto: null,
    sobreNos: null,
    equipe: null,
    contato: null,
  });

  function registerRef(section: SectionKeys) {
    return (el: HTMLDivElement | null) => {
      sectionRefs.current[section] = el;
    };
  }

  function scrollTo(section: SectionKeys) {
    const element = sectionRefs.current[section];

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <ElementNavigationContext.Provider value={{ scrollTo, registerRef }}>
      {children}
    </ElementNavigationContext.Provider>
  );
}

function useElementNavigation() {
  const context = useContext(ElementNavigationContext);

  if (!context)
    throw new Error(
      "useElementNavigation deve ser usado dentro do ElementNavigationProvider",
    );

  return context;
}

export { ElementNavigationProvider, useElementNavigation };
