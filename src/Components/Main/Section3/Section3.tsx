import { forwardRef } from "react";
import CardSlider, { type CardTypes } from "../../CardSlider/CardSlider";

import Styles from "./Section3.module.css";

import Section3Data from "./Section3Data.json";

const Section3 = forwardRef<HTMLDivElement>((_, ref) => (
  <section ref={ref} className={Styles.Section3}>
    <CardSlider cardsArray={Section3Data as CardTypes[]} />
  </section>
));

export default Section3;
