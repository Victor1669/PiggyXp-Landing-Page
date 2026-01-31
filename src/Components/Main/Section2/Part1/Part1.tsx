//#region Importações
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { useScreenVerifier } from "../../../../Contexts/useScreenVerifier";

import Styles from "./Part1.module.css";

import { Card } from "../../../Card/Card";
import BrowserSearchContainer from "./BrowserSearchContainer";

import PiggyXpLogo from "./assets/PiggyXp-Logo.png";
//#endregion

export default function Section2Part1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { screenType } = useScreenVerifier();

  const [isLoading, setIsLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const isDesktop = screenType === "desktop";

  const text = isDesktop
    ? "O PiggyXP é um aplicativo desenvolvido pela VSS para ajudar jovens e adultos a administrar suas finanças de forma simples e acessível. Por meio da gamificação, o app transforma o aprendizado financeiro em uma experiência interativa, com missões, desafios e sistema de XP. Dessa forma, o PiggyXP incentiva hábitos financeiros saudáveis e torna o planejamento e o controle do dinheiro mais práticos, intuitivos e motivadores."
    : "PiggyXP é um app da VSS que ajuda jovens e adultos a cuidarem do dinheiro de forma simples. Usando gamificação, o aprendizado financeiro acontece por meio de missões, desafios e XP, incentivando hábitos financeiros saudáveis de maneira prática e motivador.";

  const paragraph = isLoading ? "Carregando..." : text.slice(0, textIndex);
  useEffect(() => {
    if (!isInView || isLoading) return;

    const textTimer = setInterval(() => {
      setTextIndex((prev) => {
        if (prev >= text.length) {
          clearInterval(textTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(textTimer);
  }, [isInView, text.length, isLoading]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isDesktop) {
    return (
      <BrowserSearchContainer ref={ref}>{paragraph}</BrowserSearchContainer>
    );
  }

  if (!isDesktop) {
    return (
      <div className={Styles.Part1}>
        <Card
          ref={ref}
          enableAnimation={true}
          cardType="information"
          img={{ src: PiggyXpLogo, alt: "Logo da PiggyXp", width: 100 }}
        >
          {paragraph}
        </Card>
      </div>
    );
  }
}
