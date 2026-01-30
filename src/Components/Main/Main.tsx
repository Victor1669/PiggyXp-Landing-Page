import { useShowMenu } from "../../Contexts/useShowMenu";

import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";

import Styles from "./Main.module.css";

export default function Main() {
  const { setShowMenu } = useShowMenu();
  return (
    <main className={Styles.Main} onClick={() => setShowMenu(false)}>
      <Section1 />
      <Section2 />
      <figure className={Styles.BackgroundImage}></figure>
      <Section3 />
      <Section4 />
    </main>
  );
}
