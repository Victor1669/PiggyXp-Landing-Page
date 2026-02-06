import { forwardRef } from "react";
import CardSlider, { type CardTypes } from "../../CardSlider/CardSlider";

import useGetUsersInfo from "./Hooks/useGetUsersInfo";

import Styles from "./Section4.module.css";

const Section4 = forwardRef<HTMLDivElement>(() => {
  const { usersWithImageArray } = useGetUsersInfo();

  const Section4Data: CardTypes[] = usersWithImageArray.map((user) => {
    return {
      cardType: "people",
      imgWidth: 100,
      socialMedia: user?.linkedin,
      stack: user?.stack,
      imgSrc: user?.avatar_url,
      imgAlt: user?.name,
      text: user?.name,
    };
  });

  return (
    <section className={Styles.Section4}>
      <CardSlider cardsArray={Section4Data} />
    </section>
  );
});

export default Section4;
