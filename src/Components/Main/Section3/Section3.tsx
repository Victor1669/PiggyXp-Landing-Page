import CardSlider, { type CardTypes } from "../../CardSlider/CardSlider";

import useGetUsersInfo from "./Hooks/useGetUsersInfo";

import Styles from "./Section3.module.css";

export default function Section3() {
  const { usersWithImageArray } = useGetUsersInfo();

  const Section3Data: CardTypes[] = usersWithImageArray.map((user) => {
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
    <section className={Styles.Section3}>
      <CardSlider cardsArray={Section3Data} />
    </section>
  );
}
