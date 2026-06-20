import CardComImagem from "@UI/CardComImagem/CardComImagem";
import EmblaCarousel from "@UI/Carousel/EmblaCarousel";

import Styles from "./SobreNos.module.css";

import sobreNos from "@Data/sobreNos.json";

// SOBRE NOS
export default function SobreNos() {
  return (
    <section id="sobreNos" className={Styles.SobreNos}>
      <EmblaCarousel
        data={sobreNos}
        render={(sn) => {
          const { imgAlt, imgSrc, text } = sn;
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
    </section>
  );
}
