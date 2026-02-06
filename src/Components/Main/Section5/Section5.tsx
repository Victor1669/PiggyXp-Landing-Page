import CardSlider, { type CardTypes } from "../../CardSlider/CardSlider";

import Styles from "./Section5.module.css";

import Section4Data from "./Section5Data.json";

export default function Section4() {
  return (
    <section className={Styles.Section5}>
      <CardSlider cardsArray={Section4Data as CardTypes[]} />
    </section>
  );
}
