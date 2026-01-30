import CardSlider, { type CardTypes } from "../../../CardSlider/CardSlider";

import Part2Data from "../Section2Data.json";

export default function Section2Part2() {
  return <CardSlider cardsArray={Part2Data as CardTypes[]} />;
}
