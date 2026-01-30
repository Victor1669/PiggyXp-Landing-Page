import { useState } from "react";

import { Card } from "../Card/Card";

import Styles from "./CardSlider.module.css";

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

export default function CardSlider({ cardsArray }: CardSliderProps) {
  const [cardIndex, setCardIndex] = useState<number>(0);

  const isMinusButtonActive = cardIndex > 0;
  const isAddButtonActive = cardIndex < cardsArray.length - 1;

  function handleChangeCardIndex(type: "minus" | "add") {
    document.startViewTransition(() => {
      if (type === "minus") setCardIndex((prev) => prev - 1);
      if (type === "add") setCardIndex((prev) => prev + 1);
    });
  }

  return (
    <div className={Styles.CardSlider}>
      <button
        disabled={!isMinusButtonActive}
        style={{ opacity: isMinusButtonActive ? 1 : 0 }}
        onClick={() => handleChangeCardIndex("minus")}
      >
        {"<"}
      </button>

      <CardContainer cardIndex={cardIndex} cardsArray={cardsArray} />

      <button
        disabled={!isAddButtonActive}
        style={{ opacity: isAddButtonActive ? 1 : 0 }}
        onClick={() => handleChangeCardIndex("add")}
      >
        {">"}
      </button>
    </div>
  );
}

interface CardContainerProps {
  cardIndex: number;
  cardsArray: CardTypes[];
}

function CardContainer({ cardIndex, cardsArray }: CardContainerProps) {
  const card = cardsArray[cardIndex];

  return (
    <div className={Styles.CardContainer}>
      <Card
        cardType={card?.cardType}
        peopleName={card?.text}
        peopleSocialMedia={card?.socialMedia}
        peopleStack={card?.stack}
        img={{ width: card?.imgWidth, src: card?.imgSrc, alt: card?.imgAlt }}
      >
        {card?.text}
      </Card>
    </div>
  );
}
