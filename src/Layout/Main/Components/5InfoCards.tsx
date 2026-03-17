import CardSlider, { type CardTypes } from "@Components/CardSlider/CardSlider";

import Styles from "../Styles/5InfoCards.module.css";

import Section5Data from "../data/CardsInfo.json";

export default function InforCards() {
  return (
    <section className={Styles.Section5}>
      <CardSlider cardsArray={Section5Data as CardTypes[]} />
    </section>
  );
}
