import { getDeviceType } from "@Utils/getDeviceType";

import { useTypewriter } from "@Hooks/useTypewriter";

import BrowserSearchContainer from "./BrowserSearch/BrowserSearch";
import CardComImagem from "@UI/CardComImagem/CardComImagem";

import Styles from "./ExplicacaoProjeto.module.css";

import PiggyXpLogo from "@Assets/PiggyXp-Logo.png";

export default function ExplicacaoProjeto() {
  const isDesktop = getDeviceType() === "desktop";

  const text = isDesktop
    ? "O PiggyXP é um aplicativo desenvolvido pela VSS para ajudar jovens e adultos a administrar suas finanças de forma simples e acessível. Por meio da gamificação, o app transforma o aprendizado financeiro em uma experiência interativa, com missões, desafios e sistema de XP. Dessa forma, o PiggyXP incentiva hábitos financeiros saudáveis e torna o planejamento e o controle do dinheiro mais práticos, intuitivos e motivadores."
    : "PiggyXP é um app da VSS que ajuda jovens e adultos a cuidarem do dinheiro de forma simples. Usando gamificação, o aprendizado financeiro acontece por meio de missões, desafios e XP, incentivando hábitos financeiros saudáveis de maneira prática e motivadora.";

  const { displayedText } = useTypewriter({
    text,
    delay: 20,
    loadingTime: 500,
  });

  return (
    <div className={Styles.ExplicacaoProjeto} id="projeto">
      <div className={Styles.BrowserWrapper}>
        <BrowserSearchContainer>{displayedText}</BrowserSearchContainer>
      </div>

      <div className={Styles.CardWrapper}>
        <CardComImagem src={PiggyXpLogo} alt="Logo da PiggyXp">
          {displayedText}
        </CardComImagem>
      </div>
    </div>
  );
}
