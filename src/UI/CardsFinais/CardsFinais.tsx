import EmblaCarousel from "@UI/Carousel/EmblaCarousel";
import CardComImagem from "@UI/CardComImagem/CardComImagem";

import Styles from "./CardsFinais.module.css";

import cardsFinais from "@Data/cardsFinais.json";

export default function CardsFinais() {
  return (
    <div className={Styles.CardsFinais}>
      <EmblaCarousel
        data={cardsFinais}
        render={(cf) => {
          const { imgAlt, imgSrc, text } = cf;
          return (
            <CardComImagem
              key={imgAlt}
              className={Styles.Card}
              src={imgSrc}
              alt={imgAlt}
            >
              {text}
            </CardComImagem>
          );
        }}
      />
    </div>
  );
}
