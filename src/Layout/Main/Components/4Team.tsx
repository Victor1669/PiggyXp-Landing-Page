import CardSlider, { type CardTypes } from "@Components/CardSlider/CardSlider";

import useGetUsersInfo from "../Hooks/useGetUsersInfo";

import Styles from "../Styles/4Team.module.css";

export default function Team() {
  const { usersWithImageArray } = useGetUsersInfo();

  const Section4Data: CardTypes[] = usersWithImageArray.map((user) => {
    return {
      cardType: "people",
      imgWidth: 100,
      linkedin: user?.linkedin,
      github: user?.github,
      stack: user?.stack,
      imgSrc: user?.avatar_url,
      imgAlt: user?.name,
      text: user?.name,
    };
  });

  console.log(Section4Data);

  return (
    <section id="equipe" className={Styles.Section4}>
      <CardSlider cardsArray={Section4Data} />
    </section>
  );
}
