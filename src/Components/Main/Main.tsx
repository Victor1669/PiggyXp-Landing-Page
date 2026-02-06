import { useShowMenu } from "../../Contexts/useShowMenu";
import { useElementNavigation } from "../../Contexts/useElementNavigation";

import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";

import Styles from "./Main.module.css";

export default function Main() {
  const { setShowMenu } = useShowMenu();
  const { registerRef } = useElementNavigation();
  return (
    <main className={Styles.Main} onClick={() => setShowMenu(false)}>
      <Section1 ref={registerRef("inicio")} />
      <Section2 ref={registerRef("projeto")} />
      <Section3 ref={registerRef("sobreNos")} />
      <figure className={Styles.BackgroundImage}></figure>
      <Section4 ref={registerRef("equipe")} />
      <Section5 />
    </main>
  );
}
