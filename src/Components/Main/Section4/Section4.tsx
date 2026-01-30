import CardSlider, { type CardTypes } from "../../CardSlider/CardSlider";

import Styles from "./Section4.module.css";

import Section4Data from "./Section4Data.json";

export default function Section4() {
  return (
    <section className={Styles.Section4}>
      <CardSlider cardsArray={Section4Data as CardTypes[]} />
    </section>
  );
}
