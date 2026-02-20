import CardSlider, { type CardTypes } from "@Components/CardSlider/CardSlider";

import Styles from "../Styles/Section5.module.css";

import Section5Data from "../data/Section5Data.json";

export default function Section5() {
  return (
    <section className={Styles.Section5}>
      <CardSlider cardsArray={Section5Data as CardTypes[]} />
    </section>
  );
}
