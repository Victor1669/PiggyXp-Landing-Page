import { useState } from "react";
import { Card } from "../Card/Card";
import Styles from "./CardSlider.module.css";
import { useScreenVerifier } from "@Contexts/useScreenVerifier";

export type CardTypes = {
  cardType: "information" | "people";
  imgWidth: number;
  imgSrc: string;
  imgAlt: string;
  text: string;
  socialMedia?: string;
  stack?: string;
};

interface CardSliderProps {
  cardsArray: CardTypes[];
}

const CARDS_PER_SCREEN = {
  mobile: 1,
  tablet: 2,
  desktop: 4,
} as const;

export default function CardSlider({ cardsArray }: CardSliderProps) {
  const [cardIndex, setCardIndex] = useState(0);
  const { screenType } = useScreenVerifier();

  const visibleCount = CARDS_PER_SCREEN[screenType];
  const canGoPrev = cardIndex > 0;
  const canGoNext = cardIndex + visibleCount < cardsArray.length;

  function navigate(direction: "prev" | "next") {
    document.startViewTransition(() => {
      setCardIndex((prev) => prev + (direction === "next" ? 1 : -1));
    });
  }

  const visibleCards = cardsArray.slice(cardIndex, cardIndex + visibleCount);

  return (
    <div className={Styles.CardSlider}>
      <button
        className={`${Styles.Button} ${Styles.Previous}`}
        disabled={!canGoPrev}
        onClick={() => navigate("prev")}
        style={{ opacity: canGoPrev ? 1 : 0 }}
      >
        <p>Card anterior</p>
      </button>

      <div className={Styles.CardContainer}>
        {visibleCards.map((card) => (
          <Card
            key={card.imgSrc}
            cardType={card.cardType}
            peopleName={card.text}
            peopleSocialMedia={card.socialMedia}
            peopleStack={card.stack}
            img={{ width: card.imgWidth, src: card.imgSrc, alt: card.imgAlt }}
          >
            {card.text}
          </Card>
        ))}
      </div>

      <button
        className={`${Styles.Button} ${Styles.Next}`}
        disabled={!canGoNext}
        onClick={() => navigate("next")}
        style={{ opacity: canGoNext ? 1 : 0 }}
      >
        <p>Próximo</p>
      </button>
    </div>
  );
}
