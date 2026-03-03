import CardSlider, { type CardTypes } from "@Components/CardSlider/CardSlider";

import Styles from "../Styles/3AboutUs.module.css";

import AboutUsData from "../data/AboutUsData.json";

export default function AboutUs() {
  return (
    <section id="sobreNos" className={Styles.AboutUs}>
      <CardSlider cardsArray={AboutUsData as CardTypes[]} />
    </section>
  );
}
